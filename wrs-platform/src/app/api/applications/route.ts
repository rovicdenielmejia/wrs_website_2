import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { z } from 'zod'

const applicationSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  coverLetter: z.string().optional(),
  linkedinUrl: z.string().url().optional().or(z.literal('')),
  portfolioUrl: z.string().url().optional().or(z.literal('')),
  jobId: z.string(),
  resumeUrl: z.string().optional(),
})

// GET /api/applications - List all applications
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const status = searchParams.get('status')
    const jobId = searchParams.get('jobId')

    const skip = (page - 1) * limit

    const where: any = {}

    if (status) {
      where.status = status
    }

    if (jobId) {
      where.jobId = jobId
    }

    const [applications, total] = await Promise.all([
      prisma.application.findMany({
        where,
        include: {
          job: {
            include: { employer: true },
          },
        },
        orderBy: { appliedAt: 'desc' },
        skip,
        take: limit,
      }),
      prisma.application.count({ where }),
    ])

    return NextResponse.json({
      data: applications,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    })
  } catch (error) {
    console.error('GET /api/applications error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// POST /api/applications - Create a new application
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validatedData = applicationSchema.parse(body)

    // Check if job exists and is published
    const job = await prisma.job.findUnique({
      where: { id: validatedData.jobId },
    })

    if (!job || job.status !== 'PUBLISHED') {
      return NextResponse.json({ error: 'Job not found or not accepting applications' }, { status: 400 })
    }

    // Check for duplicate application
    const existingApplication = await prisma.application.findFirst({
      where: {
        email: validatedData.email,
        jobId: validatedData.jobId,
      },
    })

    if (existingApplication) {
      return NextResponse.json({ error: 'You have already applied for this job' }, { status: 400 })
    }

    const application = await prisma.application.create({
      data: validatedData,
      include: {
        job: true,
      },
    })

    // Log activity
    await prisma.activityLog.create({
      data: {
        action: 'applied',
        entityType: 'application',
        entityId: application.id,
        details: {
          jobTitle: job.title,
          applicantName: `${validatedData.firstName} ${validatedData.lastName}`,
        },
      },
    })

    // Send confirmation email (would be implemented with email service)
    // await sendApplicationConfirmation(application)

    return NextResponse.json({ data: application }, { status: 201 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 })
    }
    console.error('POST /api/applications error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
