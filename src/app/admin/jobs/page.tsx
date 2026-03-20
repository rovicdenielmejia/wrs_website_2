import Link from 'next/link';
import { Plus, Search, MoreVertical, MapPin, Briefcase } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

const jobs = [
  {
    id: '1',
    title: 'Oracle HRMS Techno-Functional',
    location: 'KSA',
    type: 'FULL_TIME',
    status: 'ACTIVE',
    industry: 'Technology',
    applications: 45,
    posted: '2 weeks ago',
  },
  {
    id: '2',
    title: 'Oracle EBS Finance Techno-Functional Analyst',
    location: 'Al Khobar, Saudi Arabia',
    type: 'FULL_TIME',
    status: 'ACTIVE',
    industry: 'Technology',
    applications: 32,
    posted: '2 weeks ago',
  },
  {
    id: '3',
    title: 'HR Manager',
    location: 'Philippines',
    type: 'FULL_TIME',
    status: 'ACTIVE',
    industry: 'HR & Recruitment',
    applications: 28,
    posted: '1 month ago',
  },
  {
    id: '4',
    title: 'Barista / Service Crew',
    location: 'Philippines',
    type: 'FULL_TIME',
    status: 'CLOSED',
    industry: 'Hotels & Food',
    applications: 22,
    posted: '3 weeks ago',
  },
];

export default function AdminJobsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-text-light mb-1">Jobs</h2>
          <p className="text-text-muted">Manage your job postings</p>
        </div>
        <Button asChild>
          <Link href="/admin/jobs/new">
            <Plus className="mr-2 h-4 w-4" />
            Add Job
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-bold text-text-light">All Jobs</CardTitle>
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-text-muted" />
              <Input
                placeholder="Search jobs..."
                className="pl-10 bg-white"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-text-light">Job Title</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-text-light">Location</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-text-light">Industry</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-text-light">Status</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-text-light">Applications</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-text-light">Posted</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-text-light">Actions</th>
                </tr>
              </thead>
              <tbody>
                {jobs.map((job) => (
                  <tr key={job.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4">
                      <Link href={`/admin/jobs/${job.id}`} className="font-medium text-text-light hover:text-accent-blue">
                        {job.title}
                      </Link>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-1 text-sm text-text-muted">
                        <MapPin className="h-4 w-4" />
                        {job.location}
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-sm text-text-muted">{job.industry}</span>
                    </td>
                    <td className="py-4 px-4">
                      <Badge className={job.status === 'ACTIVE' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}>
                        {job.status}
                      </Badge>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-sm text-text-muted">{job.applications}</span>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-sm text-text-muted">{job.posted}</span>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <Button variant="ghost" size="sm">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
