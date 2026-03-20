import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { z } from 'zod'

const consultationSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  company: z.string().optional(),
  type: z.enum(['recruitment', 'hr_consulting', 'career']),
  message: z.string().min(10),
})

// GET /api/consultations - List all consultations
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const status = searchParams.get('status')

    const skip = (page - 1) * limit

    const where: any = {}

    if (status) {
      where.status = status
    }

    const [consultations, total] = await Promise.all([
      prisma.consultation.findMany({
        where,
        include: {
          employer: true,
        },
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit,
      }),
      prisma.consultation.count({ where }),
    ])

    return NextResponse.json({
      data: consultations,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    })
  } catch (error) {
    console.error('GET /api/consultations error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// POST /api/consultations - Create a new consultation request
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validatedData = consultationSchema.parse(body)

    const consultation = await prisma.consultation.create({
      data: {
        ...validatedData,
        status: 'NEW',
      },
    })

    // Log activity
    await prisma.activityLog.create({
      data: {
        action: 'created',
        entityType: 'consultation',
        entityId: consultation.id,
        details: {
          name: `${validatedData.firstName} ${validatedData.lastName}`,
          type: validatedData.type,
        },
      },
    })

    // Send notification email (would be implemented with email service)
    // await sendConsultationNotification(consultation)

    return NextResponse.json({ data: consultation }, { status: 201 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 })
    }
    console.error('POST /api/consultations error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
