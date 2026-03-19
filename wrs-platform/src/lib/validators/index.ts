import { z } from 'zod'

export const jobFormSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters').max(255),
  description: z.string().min(50, 'Description must be at least 50 characters'),
  requirements: z.string().optional(),
  benefits: z.string().optional(),
  location: z.string().min(2, 'Location is required'),
  workType: z.enum(['FULL_TIME', 'PART_TIME', 'CONTRACT', 'INTERNSHIP', 'REMOTE']),
  experienceLevel: z.enum(['ENTRY', 'JUNIOR', 'MID', 'SENIOR', 'EXECUTIVE']),
  salaryMin: z.coerce.number().optional(),
  salaryMax: z.coerce.number().optional(),
  salaryType: z.enum(['MONTHLY', 'YEARLY', 'HOURLY', 'PROJECT']).default('MONTHLY'),
  salaryVisible: z.boolean().default(true),
  status: z.enum(['DRAFT', 'PUBLISHED', 'CLOSED', 'ARCHIVED']).default('DRAFT'),
  isUrgent: z.boolean().default(false),
  isFeatured: z.boolean().default(false),
  categoryIds: z.array(z.string()).optional(),
  expiresAt: z.date().optional(),
})

export const applicationFormSchema = z.object({
  firstName: z.string().min(2, 'First name is required'),
  lastName: z.string().min(2, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  coverLetter: z.string().optional(),
  linkedinUrl: z.string().url().optional().or(z.literal('')),
  portfolioUrl: z.string().url().optional().or(z.literal('')),
})

export const blogFormSchema = z.object({
  title: z.string().min(5, 'Title must be at least 5 characters').max(255),
  slug: z.string().min(2).max(255).optional(),
  excerpt: z.string().max(500).optional(),
  content: z.string().min(100, 'Content must be at least 100 characters'),
  coverImage: z.string().url().optional().or(z.literal('')),
  status: z.enum(['DRAFT', 'PUBLISHED', 'SCHEDULED', 'ARCHIVED']).default('DRAFT'),
  categoryId: z.string().optional(),
  tags: z.array(z.string()).optional(),
  seoTitle: z.string().max(60).optional(),
  seoDescription: z.string().max(160).optional(),
  scheduledAt: z.date().optional(),
})

export const consultationFormSchema = z.object({
  firstName: z.string().min(2, 'First name is required'),
  lastName: z.string().min(2, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  company: z.string().optional(),
  type: z.enum(['recruitment', 'hr_consulting', 'career']),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export const employerFormSchema = z.object({
  companyName: z.string().min(2, 'Company name is required'),
  industry: z.string().optional(),
  website: z.string().url().optional().or(z.literal('')),
  description: z.string().optional(),
  size: z.string().optional(),
  location: z.string().optional(),
  address: z.string().optional(),
  contactPerson: z.string().optional(),
  contactEmail: z.string().email().optional(),
  contactPhone: z.string().optional(),
})

export const userFormSchema = z.object({
  email: z.string().email('Invalid email address'),
  firstName: z.string().min(2, 'First name is required'),
  lastName: z.string().min(2, 'Last name is required'),
  phone: z.string().optional(),
  role: z.enum(['ADMIN', 'RECRUITER', 'EMPLOYER', 'USER']).default('USER'),
  isActive: z.boolean().default(true),
})

export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
})

export const registerSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string(),
  firstName: z.string().min(2, 'First name is required'),
  lastName: z.string().min(2, 'Last name is required'),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword'],
})

export type JobFormData = z.infer<typeof jobFormSchema>
export type ApplicationFormData = z.infer<typeof applicationFormSchema>
export type BlogFormData = z.infer<typeof blogFormSchema>
export type ConsultationFormData = z.infer<typeof consultationFormSchema>
export type EmployerFormData = z.infer<typeof employerFormSchema>
export type UserFormData = z.infer<typeof userFormSchema>
export type LoginFormData = z.infer<typeof loginSchema>
export type RegisterFormData = z.infer<typeof registerSchema>
