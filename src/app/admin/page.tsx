import Link from 'next/link';
import { Briefcase, Users, Calendar, TrendingUp, ArrowRight, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const stats = [
  { label: 'Active Jobs', value: '4', icon: Briefcase, trend: '+2 this month' },
  { label: 'Total Applicants', value: '127', icon: Users, trend: '+18 this week' },
  { label: 'Consultations', value: '23', icon: Calendar, trend: '+5 this week' },
  { label: 'Hire Rate', value: '78%', icon: TrendingUp, trend: '+3% vs last month' },
];

const recentApplications = [
  { id: '1', name: 'Maria Santos', email: 'maria.santos@email.com', job: 'Oracle HRMS Techno-Functional', status: 'SCREENING', date: '2 hours ago' },
  { id: '2', name: 'John Doe', email: 'john.doe@email.com', job: 'HR Manager', status: 'INTERVIEW', date: '5 hours ago' },
  { id: '3', name: 'Ana Reyes', email: 'ana.reyes@email.com', job: 'Barista/Service Crew', status: 'APPLIED', date: '1 day ago' },
];

const recentConsultations = [
  { id: '1', name: 'Tech Innovations Inc.', email: 'contact@techinnovations.ph', type: 'employer', status: 'pending', date: '3 hours ago' },
  { id: '2', name: 'Maria Garcia', email: 'maria.garcia@email.com', type: 'job-seeker', status: 'completed', date: '1 day ago' },
  { id: '3', name: 'Growth Partners', email: 'info@growthpartners.ph', type: 'employer', status: 'pending', date: '2 days ago' },
];

const pipelineStats = [
  { stage: 'Applied', count: 45, color: 'bg-blue-500' },
  { stage: 'Screening', count: 28, color: 'bg-yellow-500' },
  { stage: 'Interview', count: 15, color: 'bg-purple-500' },
  { stage: 'Offer', count: 5, color: 'bg-green-500' },
  { stage: 'Hired', count: 12, color: 'bg-emerald-500' },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-text-light mb-2">Welcome back!</h2>
        <p className="text-text-muted">Here's what's happening with your recruitment platform.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="h-12 w-12 rounded-xl bg-accent-blue/10 flex items-center justify-center">
                  <stat.icon className="h-6 w-6 text-accent-blue" />
                </div>
              </div>
              <div className="text-3xl font-bold text-text-light mb-1">{stat.value}</div>
              <div className="text-sm font-medium text-text-light">{stat.label}</div>
              <div className="text-xs text-green-600 mt-1">{stat.trend}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg font-bold text-text-light">Recent Applications</CardTitle>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/admin/applicants">
                View All <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentApplications.map((app) => (
                <div key={app.id} className="flex items-center justify-between p-3 rounded-lg bg-light-bg">
                  <div>
                    <div className="font-medium text-text-light">{app.name}</div>
                    <div className="text-sm text-text-muted">{app.job}</div>
                    <div className="text-xs text-text-muted mt-1">{app.date}</div>
                  </div>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      app.status === 'INTERVIEW'
                        ? 'bg-purple-100 text-purple-700'
                        : app.status === 'SCREENING'
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-blue-100 text-blue-700'
                    }`}
                  >
                    {app.status}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg font-bold text-text-light">Recent Consultations</CardTitle>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/admin/consultations">
                View All <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentConsultations.map((consult) => (
                <div key={consult.id} className="flex items-center justify-between p-3 rounded-lg bg-light-bg">
                  <div>
                    <div className="font-medium text-text-light">{consult.name}</div>
                    <div className="text-sm text-text-muted">{consult.email}</div>
                    <div className="text-xs text-text-muted mt-1">{consult.date}</div>
                  </div>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      consult.status === 'completed'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}
                  >
                    {consult.status === 'completed' ? 'Completed' : 'Pending'}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-bold text-text-light">Application Pipeline</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {pipelineStats.map((stage) => (
              <div key={stage.stage} className="flex items-center gap-4">
                <div className="w-20 text-sm font-medium text-text-light">{stage.stage}</div>
                <div className="flex-1 h-6 rounded-full bg-gray-200 overflow-hidden">
                  <div
                    className={`h-full ${stage.color} transition-all duration-500`}
                    style={{ width: `${(stage.count / 45) * 100}%` }}
                  />
                </div>
                <div className="w-10 text-sm font-medium text-text-light text-right">{stage.count}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-xl bg-green-100 flex items-center justify-center">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-text-light">12</div>
              <div className="text-sm text-text-muted">Placements This Month</div>
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-xl bg-blue-100 flex items-center justify-center">
              <Briefcase className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-text-light">4</div>
              <div className="text-sm text-text-muted">Active Job Posts</div>
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-xl bg-purple-100 flex items-center justify-center">
              <Users className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-text-light">3</div>
              <div className="text-sm text-text-muted">Employers Onboarded</div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
