'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Plus, Search, Filter, MoreHorizontal, Edit, Trash2, Eye, Copy, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

// Mock data - Replace with API calls
const mockJobs = [
  {
    id: '1',
    title: 'Senior Software Engineer',
    employer: 'TechCorp Philippines',
    location: 'Makati City, Metro Manila',
    type: 'FULL_TIME',
    status: 'PUBLISHED',
    applications: 12,
    views: 245,
    isFeatured: true,
    isUrgent: true,
    salaryMin: 80000,
    salaryMax: 120000,
    postedAt: '2 days ago',
  },
  {
    id: '2',
    title: 'HR Manager',
    employer: 'Growth Solutions Inc.',
    location: 'Quezon City, Metro Manila',
    type: 'FULL_TIME',
    status: 'PUBLISHED',
    applications: 8,
    views: 156,
    isFeatured: true,
    isUrgent: false,
    salaryMin: 50000,
    salaryMax: 75000,
    postedAt: '1 week ago',
  },
  {
    id: '3',
    title: 'Digital Marketing Specialist',
    employer: 'BrandWorks Agency',
    location: 'Remote',
    type: 'REMOTE',
    status: 'PUBLISHED',
    applications: 15,
    views: 312,
    isFeatured: false,
    isUrgent: false,
    salaryMin: 30000,
    salaryMax: 45000,
    postedAt: '3 days ago',
  },
  {
    id: '4',
    title: 'Account Executive',
    employer: 'SalesPro BPO',
    location: 'Mandaluyong City, Metro Manila',
    type: 'FULL_TIME',
    status: 'DRAFT',
    applications: 0,
    views: 0,
    isFeatured: false,
    isUrgent: true,
    salaryMin: 25000,
    salaryMax: 40000,
    postedAt: 'Not published',
  },
  {
    id: '5',
    title: 'Financial Analyst',
    employer: 'FinServe Corp',
    location: 'Ortigas, Metro Manila',
    type: 'FULL_TIME',
    status: 'CLOSED',
    applications: 23,
    views: 489,
    isFeatured: false,
    isUrgent: false,
    salaryMin: 55000,
    salaryMax: 80000,
    postedAt: '2 weeks ago',
  },
]

const statusColors: Record<string, string> = {
  PUBLISHED: 'bg-green-100 text-green-800',
  DRAFT: 'bg-gray-100 text-gray-800',
  CLOSED: 'bg-red-100 text-red-800',
  ARCHIVED: 'bg-yellow-100 text-yellow-800',
}

export default function AdminJobsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState('ALL')
  const [typeFilter, setTypeFilter] = useState('ALL')

  const filteredJobs = mockJobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.employer.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === 'ALL' || job.status === statusFilter
    const matchesType = typeFilter === 'ALL' || job.type === typeFilter
    return matchesSearch && matchesStatus && matchesType
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Jobs</h1>
          <p className="text-gray-500 mt-1">Manage your job postings</p>
        </div>
        <Link href="/admin/jobs/new">
          <Button className="gap-2">
            <Plus className="w-4 h-4" />
            Create Job
          </Button>
        </Link>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Search jobs..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ALL">All Status</SelectItem>
                <SelectItem value="PUBLISHED">Published</SelectItem>
                <SelectItem value="DRAFT">Draft</SelectItem>
                <SelectItem value="CLOSED">Closed</SelectItem>
                <SelectItem value="ARCHIVED">Archived</SelectItem>
              </SelectContent>
            </Select>
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ALL">All Types</SelectItem>
                <SelectItem value="FULL_TIME">Full Time</SelectItem>
                <SelectItem value="PART_TIME">Part Time</SelectItem>
                <SelectItem value="CONTRACT">Contract</SelectItem>
                <SelectItem value="REMOTE">Remote</SelectItem>
                <SelectItem value="INTERNSHIP">Internship</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Jobs Table */}
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm text-gray-500 border-b bg-gray-50">
                  <th className="px-6 py-4 font-medium">Job</th>
                  <th className="px-6 py-4 font-medium">Type</th>
                  <th className="px-6 py-4 font-medium">Applications</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                  <th className="px-6 py-4 font-medium">Posted</th>
                  <th className="px-6 py-4 font-medium"></th>
                </tr>
              </thead>
              <tbody>
                {filteredJobs.map((job) => (
                  <tr key={job.id} className="border-b hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-medium text-gray-900">{job.title}</p>
                          {job.isFeatured && (
                            <Star className="w-4 h-4 text-gold fill-gold" />
                          )}
                          {job.isUrgent && (
                            <Badge variant="destructive" className="text-xs">Urgent</Badge>
                          )}
                        </div>
                        <p className="text-sm text-gray-500 mt-0.5">{job.employer}</p>
                        <p className="text-sm text-gray-400 mt-0.5">{job.location}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <Badge variant="secondary" className="capitalize">
                        {job.type.toLowerCase().replace('_', ' ')}
                      </Badge>
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-medium">{job.applications}</p>
                        <p className="text-xs text-gray-400">{job.views} views</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <Badge className={statusColors[job.status]}>
                        {job.status}
                      </Badge>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">{job.postedAt}</td>
                    <td className="px-6 py-4">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem asChild>
                            <Link href={`/jobs/${job.id}`} className="flex items-center gap-2">
                              <Eye className="w-4 h-4" />
                              View
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <Link href={`/admin/jobs/${job.id}/edit`} className="flex items-center gap-2">
                              <Edit className="w-4 h-4" />
                              Edit
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="flex items-center gap-2">
                            <Copy className="w-4 h-4" />
                            Duplicate
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="flex items-center gap-2 text-red-600">
                            <Trash2 className="w-4 h-4" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredJobs.length === 0 && (
            <div className="p-12 text-center">
              <p className="text-gray-500">No jobs found matching your criteria</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">
          Showing {filteredJobs.length} of {mockJobs.length} jobs
        </p>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" disabled>
            Previous
          </Button>
          <Button variant="outline" size="sm">
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}
