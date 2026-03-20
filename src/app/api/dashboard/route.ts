import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getSession } from '@/lib/auth';

export async function GET(request: NextRequest) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const [
      totalJobs,
      activeJobs,
      totalApplications,
      pendingApplications,
      totalEmployers,
      totalConsultations,
    ] = await Promise.all([
      prisma.job.count(),
      prisma.job.count({ where: { status: 'ACTIVE' } }),
      prisma.application.count(),
      prisma.application.count({ where: { status: 'APPLIED' } }),
      prisma.employer.count(),
      prisma.consultation.count(),
    ]);

    const recentApplications = await prisma.application.findMany({
      take: 5,
      orderBy: { createdAt: 'desc' },
      include: {
        job: { select: { id: true, title: true } },
        applicant: {
          select: {
            id: true,
            user: { select: { firstName: true, lastName: true } },
          },
        },
      },
    });

    const recentConsultations = await prisma.consultation.findMany({
      take: 5,
      orderBy: { createdAt: 'desc' },
    });

    const pipelineStats = await prisma.application.groupBy({
      by: ['status'],
      _count: true,
    });

    return NextResponse.json({
      stats: {
        totalJobs,
        activeJobs,
        totalApplications,
        pendingApplications,
        totalEmployers,
        totalConsultations,
      },
      recentApplications,
      recentConsultations,
      pipelineStats,
    });
  } catch (error) {
    console.error('GET /api/dashboard error:', error);
    return NextResponse.json({ error: 'Failed to fetch dashboard data' }, { status: 500 });
  }
}
