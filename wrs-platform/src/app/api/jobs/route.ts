import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { z } from 'zod'
import { slugify } from '@/lib/utils'

const jobSchema = z.object({
  title: z.string().min(3).max(255),
  description: z.string().min(50),
  requirements: z.string().optional(),
  benefits: z.string().optional(),
  location: z.string().min(2),
  workType: z.enum(['FULL_TIME', 'PART_TIME', 'CONTRACT', 'INTERNSHIP', 'REMOTE']),
  experienceLevel: z.enum(['ENTRY', 'JUNIOR', 'MID', 'SENIOR', 'EXECUTIVE']),
  salaryMin: z.number().optional(),
  salaryMax: z.number().optional(),
  salaryType: z.enum(['MONTHLY', 'YEARLY', 'HOURLY', 'PROJECT']).optional(),
  salaryVisible: z.boolean().optional(),
  status: z.enum(['DRAFT', 'PUBLISHED', 'CLOSED', 'ARCHIVED']).optional(),
  isUrgent: z.boolean().optional(),
  isFeatured: z.boolean().optional(),
  categoryIds: z.array(z.string()).optional(),
  expiresAt: z.string().optional(),
})

// GET /api/jobs - List all jobs
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const status = searchParams.get('status')
    const workType = searchParams.get('workType')
    const search = searchParams.get('search')
    const featured = searchParams.get('featured')

    const skip = (page - 1) * limit

    const where: any = {}

    if (status) {
      where.status = status
    }

    if (workType) {
      where.workType = workType
    }

    if (search) {
      where.OR = [
        { title: { contains: search, mode: 'insensitive' } },
        { description: { contains: search, mode: 'insensitive' } },
      ]
    }

    if (featured === 'true') {
      where.isFeatured = true
      where.status = 'PUBLISHED'
    }

    const [jobs, total] = await Promise.all([
      prisma.job.findMany({
        where,
        include: {
          employer: true,
          categories: {
            include: { jobCategory: true },
          },
          _count: {
            select: { applications: true },
          },
        },
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit,
      }),
      prisma.job.count({ where }),
    ])

    // Transform categories
    const transformedJobs = jobs.map((job) => ({
      ...job,
      categories: job.categories.map((jc) => jc.jobCategory),
      applicationsCount: job._count.applications,
    }))

    return NextResponse.json({
      data: transformedJobs,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    })
  } catch (error) {
    console.error('GET /api/jobs error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// POST /api/jobs - Create a new job
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validatedData = jobSchema.parse(body)

    const slug = slugify(validatedData.title) + '-' + Date.now()

    const job = await prisma.job.create({
      data: {
        ...validatedData,
        slug,
        status: validatedData.status || 'DRAFT',
        publishedAt: validatedData.status === 'PUBLISHED' ? new Date() : null,
        expiresAt: validatedData.expiresAt ? new Date(validatedData.expiresAt) : null,
      },
      include: {
        employer: true,
        categories: {
          include: { jobCategory: true },
        },
      },
    })

    // Connect categories if provided
    if (validatedData.categoryIds && validatedData.categoryIds.length > 0) {
      await prisma.job.update({
        where: { id: job.id },
        data: {
          categories: {
            create: validatedData.categoryIds.map((categoryId) => ({
              jobCategoryId: categoryId,
            })),
          },
        },
      })
    }

    // Log activity
    await prisma.activityLog.create({
      data: {
        action: 'created',
        entityType: 'job',
        entityId: job.id,
        details: { title: job.title },
      },
    })

    return NextResponse.json({ data: job }, { status: 201 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 })
    }
    console.error('POST /api/jobs error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
