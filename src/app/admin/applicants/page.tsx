import Link from 'next/link';
import { Search, MoreVertical, Mail, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

const applicants = [
  {
    id: '1',
    name: 'Maria Santos',
    email: 'maria.santos@email.com',
    phone: '+63 900 123 4567',
    job: 'Oracle HRMS Techno-Functional',
    jobId: '1',
    status: 'SCREENING',
    applied: '2 hours ago',
  },
  {
    id: '2',
    name: 'John Doe',
    email: 'john.doe@email.com',
    phone: '+63 900 234 5678',
    job: 'HR Manager',
    jobId: '3',
    status: 'INTERVIEW',
    applied: '5 hours ago',
  },
  {
    id: '3',
    name: 'Ana Reyes',
    email: 'ana.reyes@email.com',
    phone: '+63 900 345 6789',
    job: 'Barista/Service Crew',
    jobId: '4',
    status: 'APPLIED',
    applied: '1 day ago',
  },
  {
    id: '4',
    name: 'Carlos Lim',
    email: 'carlos.lim@email.com',
    phone: '+63 900 456 7890',
    job: 'Oracle EBS Finance Techno-Functional',
    jobId: '2',
    status: 'OFFER',
    applied: '3 days ago',
  },
];

const statusColors: Record<string, string> = {
  APPLIED: 'bg-blue-100 text-blue-700',
  SCREENING: 'bg-yellow-100 text-yellow-700',
  INTERVIEW: 'bg-purple-100 text-purple-700',
  OFFER: 'bg-green-100 text-green-700',
  HIRED: 'bg-emerald-100 text-emerald-700',
  REJECTED: 'bg-red-100 text-red-700',
};

export default function AdminApplicantsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-text-light mb-1">Applicants</h2>
          <p className="text-text-muted">Manage job applications and pipeline</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-5">
        {['All', 'Applied', 'Screening', 'Interview', 'Offer'].map((status) => (
          <Card key={status} className={`p-4 cursor-pointer ${status === 'All' ? 'ring-2 ring-accent-blue' : ''}`}>
            <div className="text-2xl font-bold text-text-light">{status === 'All' ? '127' : status === 'Applied' ? '45' : status === 'Screening' ? '28' : status === 'Interview' ? '15' : '5'}</div>
            <div className="text-sm text-text-muted">{status}</div>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-bold text-text-light">All Applicants</CardTitle>
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-text-muted" />
              <Input placeholder="Search applicants..." className="pl-10 bg-white" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-text-light">Applicant</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-text-light">Applied For</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-text-light">Status</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-text-light">Applied</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-text-light">Actions</th>
                </tr>
              </thead>
              <tbody>
                {applicants.map((applicant) => (
                  <tr key={applicant.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-accent-blue/10 flex items-center justify-center">
                          <span className="text-sm font-bold text-accent-blue">
                            {applicant.name.split(' ').map((n) => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <Link href={`/admin/applicants/${applicant.id}`} className="font-medium text-text-light hover:text-accent-blue">
                            {applicant.name}
                          </Link>
                          <div className="text-sm text-text-muted">{applicant.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <Link href={`/admin/jobs/${applicant.jobId}`} className="text-sm text-text-muted hover:text-accent-blue">
                        {applicant.job}
                      </Link>
                    </td>
                    <td className="py-4 px-4">
                      <Badge className={statusColors[applicant.status]}>
                        {applicant.status}
                      </Badge>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-sm text-text-muted">{applicant.applied}</span>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Button variant="ghost" size="sm" title="Send Email">
                          <Mail className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" title="Schedule Interview">
                          <Calendar className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </div>
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
