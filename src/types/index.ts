import type { Job, Application, Employer, Applicant, Blog, Consultation, User, Category, JobType, JobStatus, ApplicationStatus, Role } from '@prisma/client';

export type { Job, Application, Employer, Applicant, Blog, Consultation, User, Category, JobType, JobStatus, ApplicationStatus, Role };

export interface JobWithRelations extends Job {
  employer: Employer;
  applications?: Application[];
  categories?: Category[];
  _count?: {
    applications: number;
  };
}

export interface ApplicationWithRelations extends Application {
  job?: Job;
  applicant?: Applicant;
}

export interface BlogWithAuthor extends Blog {
  author: Pick<User, 'id' | 'firstName' | 'lastName' | 'avatar'>;
  category?: Category | null;
  _count?: {
    comments: number;
  };
}

export interface DashboardStats {
  totalJobs: number;
  activeJobs: number;
  totalApplications: number;
  pendingApplications: number;
  totalEmployers: number;
  totalConsultations: number;
  recentApplications: ApplicationWithRelations[];
  recentConsultations: Consultation[];
}

export interface JobFilters {
  search?: string;
  location?: string;
  industry?: string;
  jobType?: string;
  status?: string;
  page?: number;
  limit?: number;
}

export interface ApplicationFilters {
  search?: string;
  status?: ApplicationStatus;
  jobId?: string;
  page?: number;
  limit?: number;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}

export interface ConsultationFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  type?: string;
  message?: string;
}

export interface JobApplicationFormData {
  name: string;
  email: string;
  phone?: string;
  coverLetter?: string;
  resumeUrl?: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface MegaMenuSection {
  title: string;
  icon: string;
  items: {
    label: string;
    href: string;
    description?: string;
  }[];
  cta: {
    label: string;
    href: string;
  };
}
