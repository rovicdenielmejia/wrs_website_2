import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

const jobCreateSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  location: z.string().min(1, 'Location is required'),
  experience: z.string().min(1, 'Experience is required'),
  salaryRange: z.string().optional(),
  description: z.string().min(1, 'Description is required'),
  responsibilities: z.array(z.string()).default([]),
  requiredSkills: z.array(z.string()).default([]),
  benefits: z.array(z.string()).default([]),
  additionalInfo: z.string().optional(),
  industry: z.string().min(1, 'Industry is required'),
  jobType: z.enum(['FULL_TIME', 'PART_TIME', 'CONTRACT', 'REMOTE']),
  status: z.enum(['DRAFT', 'ACTIVE', 'CLOSED', 'ARCHIVED']).default('DRAFT'),
  employerId: z.string().min(1, 'Employer ID is required'),
  applyFormUrl: z.string().url().optional().or(z.literal('')),
  imageUrl: z.string().url().optional().or(z.literal('')),
});

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const search = searchParams.get('search') || '';
    const location = searchParams.get('location') || '';
    const industry = searchParams.get('industry') || '';
    const jobType = searchParams.get('jobType') || '';
    const status = searchParams.get('status') || 'ACTIVE';

    const where: Record<string, unknown> = {};
    
    if (search) {
      where.OR = [
        { title: { contains: search, mode: 'insensitive' } },
        { description: { contains: search, mode: 'insensitive' } },
      ];
    }
    if (location) where.location = { contains: location, mode: 'insensitive' };
    if (industry) where.industry = industry;
    if (jobType) where.jobType = jobType;
    if (status) where.status = status;

    const [jobs, total] = await Promise.all([
      prisma.job.findMany({
        where,
        include: {
          employer: true,
          _count: { select: { applications: true } },
        },
        orderBy: { createdAt: 'desc' },
        skip: (page - 1) * limit,
        take: limit,
      }),
      prisma.job.count({ where }),
    ]);

    return NextResponse.json({
      jobs,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error('GET /api/jobs error:', error);
    return NextResponse.json({ error: 'Failed to fetch jobs' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = jobCreateSchema.parse(body);

    const slug = data.title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-');

    const existingJob = await prisma.job.findUnique({ where: { slug } });
    const uniqueSlug = existingJob ? `${slug}-${Date.now()}` : slug;

    const job = await prisma.job.create({
      data: {
        ...data,
        slug: uniqueSlug,
        status: data.status || 'DRAFT',
        publishedAt: data.status === 'ACTIVE' ? new Date() : null,
      },
      include: {
        employer: true,
      },
    });

    return NextResponse.json(job, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 });
    }
    console.error('POST /api/jobs error:', error);
    return NextResponse.json({ error: 'Failed to create job' }, { status: 500 });
  }
}
