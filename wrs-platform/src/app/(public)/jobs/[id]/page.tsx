'use client'

import { useState } from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  ArrowLeft,
  MapPin,
  Briefcase,
  Clock,
  PhilippinePeso,
  Building2,
  Share2,
  Bookmark,
  CheckCircle2,
  Users,
  Calendar,
  ChevronRight,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

// Mock job data - Replace with API call
const mockJob = {
  id: '1',
  title: 'Senior Software Engineer',
  company: 'TechCorp Philippines',
  companyDescription:
    'TechCorp Philippines is a leading technology company specializing in enterprise software solutions. We have been helping businesses transform their operations through innovative technology for over 10 years.',
  location: 'Makati City, Metro Manila',
  type: 'FULL_TIME',
  experienceLevel: 'SENIOR',
  salaryMin: 80000,
  salaryMax: 120000,
  salaryVisible: true,
  salaryType: 'MONTHLY',
  isUrgent: true,
  isFeatured: true,
  postedAt: '2 days ago',
  expiresAt: '30 days',
  views: 245,
  applicationsCount: 12,
  description: `We are looking for a Senior Software Engineer to join our growing team. In this role, you will be responsible for designing, developing, and maintaining high-quality software solutions that meet our clients' needs.

You will work closely with our product and design teams to deliver exceptional user experiences while ensuring code quality and best practices. This is an exciting opportunity for someone who wants to make a significant impact on our products and customers.`,
  responsibilities: [
    'Design and implement scalable software solutions',
    'Collaborate with cross-functional teams to define product requirements',
    'Mentor junior developers and provide technical guidance',
    'Conduct code reviews and ensure adherence to coding standards',
    'Participate in architectural discussions and decision-making',
    'Troubleshoot and resolve production issues',
  ],
  requirements: [
    "Bachelor's degree in Computer Science or related field",
    '5+ years of experience in software development',
    'Proficiency in at least one backend language (Node.js, Python, Java)',
    'Experience with cloud platforms (AWS, GCP, or Azure)',
    'Strong problem-solving and communication skills',
    'Experience with agile development methodologies',
  ],
  benefits: [
    'Competitive salary and performance bonuses',
    'Health insurance (HMO) coverage',
    'Flexible work arrangements',
    'Professional development opportunities',
    'Work-life balance initiatives',
    'Modern office in the heart of Makati',
  ],
  categories: ['Technology', 'Software Development'],
}

export default function JobDetailPage({ params }: { params: { id: string } }) {
  const [applied, setApplied] = useState(false)
  const [showApplicationForm, setShowApplicationForm] = useState(false)

  // In real app, fetch job by ID
  // const job = await getJob(params.id)
  // if (!job) notFound()

  const job = mockJob

  const handleApply = () => {
    setShowApplicationForm(true)
  }

  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault()
    setApplied(true)
    setShowApplicationForm(false)
  }

  const formatSalary = (min: number, max: number) => {
    return `₱${(min / 1000).toFixed(0)}K - ₱${(max / 1000).toFixed(0)}K`
  }

  const getTypeLabel = (type: string) => {
    const types: Record<string, string> = {
      FULL_TIME: 'Full Time',
      PART_TIME: 'Part Time',
      CONTRACT: 'Contract',
      REMOTE: 'Remote',
      INTERNSHIP: 'Internship',
    }
    return types[type] || type
  }

  const getLevelLabel = (level: string) => {
    const levels: Record<string, string> = {
      ENTRY: 'Entry Level',
      JUNIOR: 'Junior',
      MID: 'Mid Level',
      SENIOR: 'Senior',
      EXECUTIVE: 'Executive',
    }
    return levels[level] || level
  }

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Header */}
      <section className="bg-navy text-white py-12">
        <div className="container">
          <Link
            href="/jobs"
            className="inline-flex items-center gap-2 text-gray-300 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Jobs
          </Link>

          <div className="flex flex-col lg:flex-row lg:items-start gap-6">
            {/* Company Logo */}
            <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center shrink-0">
              <Building2 className="w-10 h-10 text-navy" />
            </div>

            {/* Job Info */}
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                {job.isFeatured && <Badge variant="gold">Featured</Badge>}
                {job.isUrgent && <Badge variant="destructive">Urgent Hiring</Badge>}
                <Badge variant="secondary">{getTypeLabel(job.type)}</Badge>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold mb-2">{job.title}</h1>
              <p className="text-xl text-gray-300 mb-4">{job.company}</p>

              <div className="flex flex-wrap gap-4 text-gray-300">
                <span className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  {job.location}
                </span>
                <span className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5" />
                  {getLevelLabel(job.experienceLevel)}
                </span>
                {job.salaryVisible && (
                  <span className="flex items-center gap-2 text-gold font-semibold">
                    <PhilippinePeso className="w-5 h-5" />
                    {formatSalary(job.salaryMin, job.salaryMax)}/month
                  </span>
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-3 shrink-0">
              {applied ? (
                <div className="flex items-center gap-2 text-green-400 bg-green-400/10 px-4 py-2 rounded-lg">
                  <CheckCircle2 className="w-5 h-5" />
                  Application Submitted
                </div>
              ) : (
                <Button size="lg" variant="gold" onClick={handleApply}>
                  Apply Now
                </Button>
              )}
              <div className="flex gap-2">
                <Button variant="outline" size="icon" className="bg-white/10 border-white/20">
                  <Share2 className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="icon" className="bg-white/10 border-white/20">
                  <Bookmark className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Stats */}
      <div className="bg-white border-b">
        <div className="container py-4">
          <div className="flex flex-wrap gap-6 text-sm text-gray-600">
            <span className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              {job.applicationsCount} applicants
            </span>
            <span className="flex items-center gap-2">
              <Eye className="w-4 h-4" />
              {job.views} views
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Posted {job.postedAt}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Expires in {job.expiresAt}
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Job Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <Card>
              <CardHeader>
                <CardTitle>Job Description</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <div className="whitespace-pre-line text-gray-600 leading-relaxed">
                  {job.description}
                </div>
              </CardContent>
            </Card>

            {/* Responsibilities */}
            <Card>
              <CardHeader>
                <CardTitle>Responsibilities</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {job.responsibilities.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Requirements */}
            <Card>
              <CardHeader>
                <CardTitle>Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {job.requirements.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-steel shrink-0 mt-0.5" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card>
              <CardHeader>
                <CardTitle>Benefits & Perks</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {job.benefits.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Application Form */}
            {showApplicationForm && (
              <Card>
                <CardHeader>
                  <CardTitle>Apply for this Position</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmitApplication} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input id="firstName" required />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input id="lastName" required />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input id="email" type="email" required />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" type="tel" />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="linkedin">LinkedIn URL</Label>
                      <Input id="linkedin" type="url" placeholder="https://linkedin.com/in/yourprofile" />
                    </div>

                    <div>
                      <Label htmlFor="portfolio">Portfolio URL</Label>
                      <Input id="portfolio" type="url" placeholder="https://yourportfolio.com" />
                    </div>

                    <div>
                      <Label htmlFor="resume">Resume/CV *</Label>
                      <Input id="resume" type="file" accept=".pdf,.doc,.docx" required />
                      <p className="text-sm text-gray-500 mt-1">Accepted formats: PDF, DOC, DOCX</p>
                    </div>

                    <div>
                      <Label htmlFor="coverLetter">Cover Letter</Label>
                      <Textarea
                        id="coverLetter"
                        rows={5}
                        placeholder="Tell us why you are a good fit for this role..."
                      />
                    </div>

                    <div className="flex gap-4">
                      <Button type="submit" variant="employer">
                        Submit Application
                      </Button>
                      <Button type="button" variant="outline" onClick={() => setShowApplicationForm(false)}>
                        Cancel
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            )}

            {/* About Company */}
            <Card>
              <CardHeader>
                <CardTitle>About {job.company}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">{job.companyDescription}</p>
                <Link href={`/employers/${job.company.toLowerCase().replace(/\s+/g, '-')}`}>
                  <Button variant="link" className="mt-4 p-0 text-steel">
                    View Company Profile <ChevronRight className="w-4 h-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Apply Card */}
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">Interested in this job?</h3>
                {applied ? (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-green-600">
                      <CheckCircle2 className="w-5 h-5" />
                      Application Submitted
                    </div>
                    <p className="text-sm text-gray-600">
                      We will review your application and get back to you soon.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <Button className="w-full" variant="employer" onClick={handleApply}>
                      Apply Now
                    </Button>
                    <Button className="w-full" variant="outline">
                      Save Job
                    </Button>
                    <div className="pt-4 border-t">
                      <p className="text-sm text-gray-500 mb-2">Share this job:</p>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          Share
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Related Jobs */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Related Jobs</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <Link
                    key={i}
                    href={`/jobs/${i}`}
                    className="block p-4 -mx-4 hover:bg-gray-50 transition-colors"
                  >
                    <h4 className="font-medium text-navy hover:text-steel">Software Developer</h4>
                    <p className="text-sm text-gray-500">TechCompany Inc.</p>
                    <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                      <MapPin className="w-3 h-3" />
                      Manila
                    </div>
                  </Link>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

// Missing Eye icon
function Eye({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}
