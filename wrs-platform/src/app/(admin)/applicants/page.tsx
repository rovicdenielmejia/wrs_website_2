'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Search,
  Filter,
  MoreHorizontal,
  Eye,
  Mail,
  Calendar,
  Download,
  Star,
  ChevronRight,
  User,
  MapPin,
  Briefcase,
  FileText,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
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
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs'

// Mock data - Replace with API calls
const mockApplicants = [
  {
    id: '1',
    name: 'Maria Santos',
    email: 'maria.santos@email.com',
    phone: '+63 912 345 6789',
    job: 'Senior Software Engineer',
    jobId: '1',
    status: 'SCREENING',
    appliedAt: '2 hours ago',
    resume: 'maria-santos-cv.pdf',
    linkedin: 'linkedin.com/in/mariasantos',
    notes: 2,
  },
  {
    id: '2',
    name: 'John Reyes',
    email: 'john.reyes@email.com',
    phone: '+63 923 456 7890',
    job: 'HR Manager',
    jobId: '2',
    status: 'INTERVIEW',
    appliedAt: '4 hours ago',
    resume: 'john-reyes-cv.pdf',
    linkedin: 'linkedin.com/in/johnreyes',
    notes: 5,
  },
  {
    id: '3',
    name: 'Ana Cruz',
    email: 'ana.cruz@email.com',
    phone: '+63 934 567 8901',
    job: 'Digital Marketing Specialist',
    jobId: '3',
    status: 'APPLIED',
    appliedAt: '1 day ago',
    resume: 'ana-cruz-cv.pdf',
    linkedin: 'linkedin.com/in/anacruz',
    notes: 0,
  },
  {
    id: '4',
    name: 'Michael Tan',
    email: 'michael.tan@email.com',
    phone: '+63 945 678 9012',
    job: 'Account Executive',
    jobId: '4',
    status: 'OFFER',
    appliedAt: '2 days ago',
    resume: 'michael-tan-cv.pdf',
    linkedin: 'linkedin.com/in/michaeltan',
    notes: 3,
  },
  {
    id: '5',
    name: 'Sarah Lee',
    email: 'sarah.lee@email.com',
    phone: '+63 956 789 0123',
    job: 'Senior Software Engineer',
    jobId: '1',
    status: 'HIRED',
    appliedAt: '1 week ago',
    resume: 'sarah-lee-cv.pdf',
    linkedin: 'linkedin.com/in/sarahlee',
    notes: 8,
  },
  {
    id: '6',
    name: 'David Chen',
    email: 'david.chen@email.com',
    phone: '+63 967 890 1234',
    job: 'Financial Analyst',
    jobId: '5',
    status: 'REJECTED',
    appliedAt: '3 days ago',
    resume: 'david-chen-cv.pdf',
    linkedin: 'linkedin.com/in/davidchen',
    notes: 1,
  },
]

const statusColors: Record<string, string> = {
  APPLIED: 'bg-blue-100 text-blue-800',
  SCREENING: 'bg-yellow-100 text-yellow-800',
  INTERVIEW: 'bg-purple-100 text-purple-800',
  OFFER: 'bg-green-100 text-green-800',
  HIRED: 'bg-green-500 text-white',
  REJECTED: 'bg-red-100 text-red-800',
  WITHDRAWN: 'bg-gray-100 text-gray-800',
}

const pipelineColumns = [
  { status: 'APPLIED', label: 'Applied', color: 'bg-blue-500' },
  { status: 'SCREENING', label: 'Screening', color: 'bg-yellow-500' },
  { status: 'INTERVIEW', label: 'Interview', color: 'bg-purple-500' },
  { status: 'OFFER', label: 'Offer', color: 'bg-green-500' },
  { status: 'HIRED', label: 'Hired', color: 'bg-green-600' },
]

export default function AdminApplicantsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState('ALL')
  const [jobFilter, setJobFilter] = useState('ALL')
  const [viewMode, setViewMode] = useState<'table' | 'kanban'>('table')

  const filteredApplicants = mockApplicants.filter((applicant) => {
    const matchesSearch =
      applicant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      applicant.email.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === 'ALL' || applicant.status === statusFilter
    const matchesJob = jobFilter === 'ALL' || applicant.jobId === jobFilter
    return matchesSearch && matchesStatus && matchesJob
  })

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Applicants</h1>
          <p className="text-gray-500 mt-1">Manage candidates and track their progress</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Download className="w-4 h-4" />
            Export
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {pipelineColumns.map((col) => {
          const count = mockApplicants.filter((a) => a.status === col.status).length
          return (
            <Card key={col.status}>
              <CardContent className="p-4 text-center">
                <div
                  className={`w-3 h-3 rounded-full ${col.color} mx-auto mb-2`}
                />
                <p className="text-2xl font-bold text-gray-900">{count}</p>
                <p className="text-sm text-gray-500">{col.label}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Filters & View Toggle */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Search applicants..."
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
                <SelectItem value="APPLIED">Applied</SelectItem>
                <SelectItem value="SCREENING">Screening</SelectItem>
                <SelectItem value="INTERVIEW">Interview</SelectItem>
                <SelectItem value="OFFER">Offer</SelectItem>
                <SelectItem value="HIRED">Hired</SelectItem>
                <SelectItem value="REJECTED">Rejected</SelectItem>
              </SelectContent>
            </Select>
            <Select value={jobFilter} onValueChange={setJobFilter}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Job" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ALL">All Jobs</SelectItem>
                <SelectItem value="1">Senior Software Engineer</SelectItem>
                <SelectItem value="2">HR Manager</SelectItem>
                <SelectItem value="3">Digital Marketing Specialist</SelectItem>
                <SelectItem value="4">Account Executive</SelectItem>
                <SelectItem value="5">Financial Analyst</SelectItem>
              </SelectContent>
            </Select>
            <div className="flex gap-1 border rounded-md p-1">
              <Button
                variant={viewMode === 'table' ? 'secondary' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('table')}
              >
                Table
              </Button>
              <Button
                variant={viewMode === 'kanban' ? 'secondary' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('kanban')}
              >
                Kanban
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* View Mode: Table */}
      {viewMode === 'table' && (
        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-sm text-gray-500 border-b bg-gray-50">
                    <th className="px-6 py-4 font-medium">Candidate</th>
                    <th className="px-6 py-4 font-medium">Job</th>
                    <th className="px-6 py-4 font-medium">Status</th>
                    <th className="px-6 py-4 font-medium">Applied</th>
                    <th className="px-6 py-4 font-medium">Resume</th>
                    <th className="px-6 py-4 font-medium"></th>
                  </tr>
                </thead>
                <tbody>
                  {filteredApplicants.map((applicant) => (
                    <tr key={applicant.id} className="border-b hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <Avatar className="w-10 h-10">
                            <AvatarFallback className="bg-navy text-white text-sm">
                              {getInitials(applicant.name)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium text-gray-900">{applicant.name}</p>
                            <p className="text-sm text-gray-500">{applicant.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-600">{applicant.job}</td>
                      <td className="px-6 py-4">
                        <Badge className={statusColors[applicant.status]}>
                          {applicant.status}
                        </Badge>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">{applicant.appliedAt}</td>
                      <td className="px-6 py-4">
                        <Button variant="ghost" size="sm" className="gap-1">
                          <FileText className="w-4 h-4" />
                          View
                        </Button>
                      </td>
                      <td className="px-6 py-4">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="w-4 h-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem asChild>
                              <Link href={`/admin/applicants/${applicant.id}`} className="flex items-center gap-2">
                                <Eye className="w-4 h-4" />
                                View Details
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="flex items-center gap-2">
                              <Mail className="w-4 h-4" />
                              Send Email
                            </DropdownMenuItem>
                            <DropdownMenuItem className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              Schedule Interview
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filteredApplicants.length === 0 && (
              <div className="p-12 text-center">
                <p className="text-gray-500">No applicants found</p>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* View Mode: Kanban */}
      {viewMode === 'kanban' && (
        <div className="flex gap-4 overflow-x-auto pb-4">
          {pipelineColumns.map((col) => (
            <div key={col.status} className="flex-1 min-w-[280px]">
              <div className="bg-gray-100 rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${col.color}`} />
                    <h3 className="font-semibold text-gray-900">{col.label}</h3>
                  </div>
                  <Badge variant="secondary">
                    {filteredApplicants.filter((a) => a.status === col.status).length}
                  </Badge>
                </div>
                <div className="space-y-3">
                  {filteredApplicants
                    .filter((a) => a.status === col.status)
                    .map((applicant) => (
                      <Card key={applicant.id} className="p-4 hover:shadow-md transition-shadow cursor-pointer">
                        <div className="flex items-center gap-3 mb-3">
                          <Avatar className="w-10 h-10">
                            <AvatarFallback className="bg-navy text-white text-sm">
                              {getInitials(applicant.name)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium text-gray-900">{applicant.name}</p>
                            <p className="text-xs text-gray-500">{applicant.appliedAt}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Briefcase className="w-4 h-4" />
                          {applicant.job}
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                          <Button variant="ghost" size="sm" className="h-7 px-2">
                            <Mail className="w-3 h-3" />
                          </Button>
                          <Button variant="ghost" size="sm" className="h-7 px-2">
                            <Calendar className="w-3 h-3" />
                          </Button>
                        </div>
                      </Card>
                    ))}
                  {filteredApplicants.filter((a) => a.status === col.status).length === 0 && (
                    <div className="text-center py-8 text-gray-400 text-sm">
                      No applicants
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
