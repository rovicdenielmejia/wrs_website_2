import { type Role } from '@prisma/client'

export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  phone?: string | null
  avatar?: string | null
  role: Role
  isActive: boolean
  createdAt: Date
}

export interface Employer {
  id: string
  userId: string
  companyName: string
  industry?: string | null
  website?: string | null
  logo?: string | null
  description?: string | null
  size?: string | null
  location?: string | null
  address?: string | null
  contactPerson?: string | null
  contactEmail?: string | null
  contactPhone?: string | null
  isVerified: boolean
  isActive: boolean
  createdAt: Date
}

export interface Job {
  id: string
  employerId: string
  title: string
  slug: string
  description: string
  requirements?: string | null
  benefits?: string | null
  location?: string | null
  workType: 'FULL_TIME' | 'PART_TIME' | 'CONTRACT' | 'INTERNSHIP' | 'REMOTE'
  experienceLevel: 'ENTRY' | 'JUNIOR' | 'MID' | 'SENIOR' | 'EXECUTIVE'
  salaryMin?: number | null
  salaryMax?: number | null
  salaryType: 'MONTHLY' | 'YEARLY' | 'HOURLY' | 'PROJECT'
  salaryVisible: boolean
  status: 'DRAFT' | 'PUBLISHED' | 'CLOSED' | 'ARCHIVED'
  isUrgent: boolean
  isFeatured: boolean
  views: number
  applicationsCount: number
  expiresAt?: Date | null
  publishedAt?: Date | null
  createdAt: Date
  updatedAt: Date
  employer?: Employer
  categories?: JobCategory[]
}

export interface JobCategory {
  id: string
  name: string
  slug: string
}

export interface Application {
  id: string
  jobId: string
  userId?: string | null
  firstName: string
  lastName: string
  email: string
  phone?: string | null
  resumeUrl?: string | null
  coverLetter?: string | null
  linkedinUrl?: string | null
  portfolioUrl?: string | null
  status: 'APPLIED' | 'SCREENING' | 'INTERVIEW' | 'OFFER' | 'HIRED' | 'REJECTED' | 'WITHDRAWN'
  score?: number | null
  notes?: string | null
  appliedAt: Date
  updatedAt: Date
  job?: Job
}

export interface BlogPost {
  id: string
  authorId: string
  categoryId?: string | null
  title: string
  slug: string
  excerpt?: string | null
  content: string
  coverImage?: string | null
  status: 'DRAFT' | 'PUBLISHED' | 'SCHEDULED' | 'ARCHIVED'
  publishedAt?: Date | null
  scheduledAt?: Date | null
  seoTitle?: string | null
  seoDescription?: string | null
  tags?: string[]
  views: number
  createdAt: Date
  updatedAt: Date
  author?: User
  category?: BlogCategory
}

export interface BlogCategory {
  id: string
  name: string
  slug: string
}

export interface Consultation {
  id: string
  employerId?: string | null
  firstName: string
  lastName: string
  email: string
  phone?: string | null
  company?: string | null
  type: string
  message?: string | null
  status: 'NEW' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELLED'
  assignedTo?: string | null
  notes?: string | null
  scheduledAt?: Date | null
  completedAt?: Date | null
  createdAt: Date
  updatedAt: Date
}

export interface DashboardStats {
  totalJobs: number
  activeJobs: number
  totalApplications: number
  totalHires: number
  pendingConsultations: number
  monthlyApplications: { month: string; count: number }[]
  recentApplications: Application[]
}

export interface PaginatedResponse<T> {
  data: T[]
  meta: {
    total: number
    page: number
    limit: number
    totalPages: number
  }
}

export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  message?: string
}
