'use client'

import { motion } from 'framer-motion'
import {
  Briefcase,
  Users,
  UserCheck,
  Calendar,
  TrendingUp,
  TrendingDown,
  ArrowUpRight,
  ArrowDownRight,
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import Link from 'next/link'

// Mock data - Replace with API calls
const stats = [
  {
    title: 'Total Jobs',
    value: '24',
    change: '+12%',
    trend: 'up',
    icon: Briefcase,
    color: 'bg-blue-500',
  },
  {
    title: 'Total Applications',
    value: '156',
    change: '+23%',
    trend: 'up',
    icon: Users,
    color: 'bg-green-500',
  },
  {
    title: 'Successful Hires',
    value: '18',
    change: '+8%',
    trend: 'up',
    icon: UserCheck,
    color: 'bg-gold',
  },
  {
    title: 'Pending Consultations',
    value: '7',
    change: '-5%',
    trend: 'down',
    icon: Calendar,
    color: 'bg-purple-500',
  },
]

const recentApplications = [
  {
    id: '1',
    name: 'Maria Santos',
    email: 'maria.santos@email.com',
    job: 'Senior Software Engineer',
    status: 'SCREENING',
    appliedAt: '2 hours ago',
  },
  {
    id: '2',
    name: 'John Reyes',
    email: 'john.reyes@email.com',
    job: 'HR Manager',
    status: 'INTERVIEW',
    appliedAt: '4 hours ago',
  },
  {
    id: '3',
    name: 'Ana Cruz',
    email: 'ana.cruz@email.com',
    job: 'Digital Marketing Specialist',
    status: 'APPLIED',
    appliedAt: '1 day ago',
  },
  {
    id: '4',
    name: 'Michael Tan',
    email: 'michael.tan@email.com',
    job: 'Account Executive',
    status: 'OFFER',
    appliedAt: '2 days ago',
  },
]

const recentJobs = [
  {
    id: '1',
    title: 'Senior Software Engineer',
    company: 'TechCorp Philippines',
    applications: 12,
    status: 'PUBLISHED',
    postedAt: '2 days ago',
  },
  {
    id: '2',
    title: 'HR Manager',
    company: 'Growth Solutions Inc.',
    applications: 8,
    status: 'PUBLISHED',
    postedAt: '1 week ago',
  },
  {
    id: '3',
    title: 'Digital Marketing Specialist',
    company: 'BrandWorks Agency',
    applications: 15,
    status: 'PUBLISHED',
    postedAt: '3 days ago',
  },
]

const pendingConsultations = [
  {
    id: '1',
    name: 'Robert Lee',
    email: 'robert.lee@company.com',
    company: 'Lee Enterprises',
    type: 'recruitment',
    createdAt: '1 hour ago',
  },
  {
    id: '2',
    name: 'Sarah Chen',
    email: 'sarah@startup.ph',
    company: 'Startup PH',
    type: 'hr_consulting',
    createdAt: '3 hours ago',
  },
]

const monthlyData = [
  { month: 'Jan', applications: 28 },
  { month: 'Feb', applications: 35 },
  { month: 'Mar', applications: 42 },
  { month: 'Apr', applications: 38 },
  { month: 'May', applications: 55 },
  { month: 'Jun', applications: 48 },
]

export default function AdminDashboardPage() {
  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      APPLIED: 'bg-blue-100 text-blue-800',
      SCREENING: 'bg-yellow-100 text-yellow-800',
      INTERVIEW: 'bg-purple-100 text-purple-800',
      OFFER: 'bg-green-100 text-green-800',
      HIRED: 'bg-green-500 text-white',
      REJECTED: 'bg-red-100 text-red-800',
      PUBLISHED: 'bg-green-100 text-green-800',
      DRAFT: 'bg-gray-100 text-gray-800',
      CLOSED: 'bg-red-100 text-red-800',
      NEW: 'bg-blue-100 text-blue-800',
      IN_PROGRESS: 'bg-yellow-100 text-yellow-800',
      COMPLETED: 'bg-green-100 text-green-800',
    }
    return colors[status] || 'bg-gray-100 text-gray-800'
  }

  const maxValue = Math.max(...monthlyData.map((d) => d.applications))

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500 mt-1">Welcome back! Here is what is happening today.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-xl ${stat.color}`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div
                    className={`flex items-center gap-1 text-sm font-medium ${
                      stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                    }`}
                  >
                    {stat.trend === 'up' ? (
                      <ArrowUpRight className="w-4 h-4" />
                    ) : (
                      <ArrowDownRight className="w-4 h-4" />
                    )}
                    {stat.change}
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-gray-500">{stat.title}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Charts & Activity */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Monthly Applications Chart */}
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Monthly Applications</CardTitle>
            <select className="text-sm border rounded-md px-2 py-1">
              <option>Last 6 months</option>
              <option>Last year</option>
            </select>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex items-end justify-between gap-4">
              {monthlyData.map((data) => (
                <div key={data.month} className="flex-1 flex flex-col items-center gap-2">
                  <div className="w-full flex flex-col items-center">
                    <span className="text-sm font-medium text-gray-600 mb-1">
                      {data.applications}
                    </span>
                    <div
                      className="w-full bg-blue-500 rounded-t-md transition-all hover:bg-blue-600"
                      style={{
                        height: `${(data.applications / maxValue) * 220}px`,
                      }}
                    />
                  </div>
                  <span className="text-sm text-gray-500">{data.month}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Stats</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Jobs This Week</span>
                <span className="font-semibold">5</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 rounded-full" style={{ width: '62%' }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Interviews Scheduled</span>
                <span className="font-semibold">3</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-purple-500 rounded-full" style={{ width: '37%' }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Offers Made</span>
                <span className="font-semibold">2</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 rounded-full" style={{ width: '25%' }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Hire Rate</span>
                <span className="font-semibold">89%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-gold rounded-full" style={{ width: '89%' }} />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Applications */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Recent Applications</CardTitle>
            <Link href="/admin/applicants">
              <Button variant="ghost" size="sm">
                View All
              </Button>
            </Link>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentApplications.map((app) => (
                <div
                  key={app.id}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Avatar className="w-10 h-10">
                      <AvatarFallback className="bg-navy text-white text-sm">
                        {app.name
                          .split(' ')
                          .map((n) => n[0])
                          .join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-gray-900">{app.name}</p>
                      <p className="text-sm text-gray-500">{app.job}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge className={getStatusColor(app.status)}>{app.status}</Badge>
                    <p className="text-xs text-gray-400 mt-1">{app.appliedAt}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Pending Consultations */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Pending Consultations</CardTitle>
            <Link href="/admin/consultations">
              <Button variant="ghost" size="sm">
                View All
              </Button>
            </Link>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {pendingConsultations.map((consultation) => (
                <div
                  key={consultation.id}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div>
                    <p className="font-medium text-gray-900">{consultation.name}</p>
                    <p className="text-sm text-gray-500">{consultation.company}</p>
                  </div>
                  <div className="text-right">
                    <Badge variant="secondary" className="capitalize">
                      {consultation.type.replace('_', ' ')}
                    </Badge>
                    <p className="text-xs text-gray-400 mt-1">{consultation.createdAt}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Jobs */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Active Job Postings</CardTitle>
          <Link href="/admin/jobs">
            <Button variant="ghost" size="sm">
              View All
            </Button>
          </Link>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm text-gray-500 border-b">
                  <th className="pb-3 font-medium">Job Title</th>
                  <th className="pb-3 font-medium">Company</th>
                  <th className="pb-3 font-medium">Applications</th>
                  <th className="pb-3 font-medium">Status</th>
                  <th className="pb-3 font-medium">Posted</th>
                  <th className="pb-3 font-medium"></th>
                </tr>
              </thead>
              <tbody>
                {recentJobs.map((job) => (
                  <tr key={job.id} className="border-b last:border-0">
                    <td className="py-4 font-medium text-gray-900">{job.title}</td>
                    <td className="py-4 text-gray-600">{job.company}</td>
                    <td className="py-4">
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4 text-gray-400" />
                        {job.applications}
                      </span>
                    </td>
                    <td className="py-4">
                      <Badge className={getStatusColor(job.status)}>{job.status}</Badge>
                    </td>
                    <td className="py-4 text-gray-500">{job.postedAt}</td>
                    <td className="py-4">
                      <Link href={`/admin/jobs/${job.id}/edit`}>
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
