import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { z } from 'zod'
import { slugify } from '@/lib/utils'

const blogSchema = z.object({
  title: z.string().min(5).max(255),
  excerpt: z.string().max(500).optional(),
  content: z.string().min(100),
  coverImage: z.string().url().optional().or(z.literal('')),
  status: z.enum(['DRAFT', 'PUBLISHED', 'SCHEDULED', 'ARCHIVED']).optional(),
  categoryId: z.string().optional(),
  tags: z.array(z.string()).optional(),
  seoTitle: z.string().max(60).optional(),
  seoDescription: z.string().max(160).optional(),
  scheduledAt: z.string().optional(),
})

// GET /api/blogs - List all blog posts
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const status = searchParams.get('status')
    const category = searchParams.get('category')
    const search = searchParams.get('search')

    const skip = (page - 1) * limit

    const where: any = {}

    if (status) {
      where.status = status
    } else {
      // Default to published only for public access
      where.status = 'PUBLISHED'
    }

    if (category) {
      where.categoryId = category
    }

    if (search) {
      where.OR = [
        { title: { contains: search, mode: 'insensitive' } },
        { excerpt: { contains: search, mode: 'insensitive' } },
      ]
    }

    const [blogs, total] = await Promise.all([
      prisma.blogPost.findMany({
        where,
        include: {
          author: {
            select: {
              id: true,
              firstName: true,
              lastName: true,
              avatar: true,
            },
          },
          category: true,
        },
        orderBy: { publishedAt: 'desc' },
        skip,
        take: limit,
      }),
      prisma.blogPost.count({ where }),
    ])

    return NextResponse.json({
      data: blogs,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    })
  } catch (error) {
    console.error('GET /api/blogs error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// POST /api/blogs - Create a new blog post
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validatedData = blogSchema.parse(body)

    // Get author from session (mock for now)
    const authorId = 'system'

    let slug = slugify(validatedData.title)
    
    // Check for duplicate slug
    const existingSlug = await prisma.blogPost.findUnique({
      where: { slug },
    })
    
    if (existingSlug) {
      slug = slug + '-' + Date.now()
    }

    const blog = await prisma.blogPost.create({
      data: {
        ...validatedData,
        slug,
        authorId,
        status: validatedData.status || 'DRAFT',
        publishedAt: validatedData.status === 'PUBLISHED' ? new Date() : null,
        scheduledAt: validatedData.scheduledAt ? new Date(validatedData.scheduledAt) : null,
      },
      include: {
        author: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
          },
        },
        category: true,
      },
    })

    return NextResponse.json({ data: blog }, { status: 201 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 })
    }
    console.error('POST /api/blogs error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
