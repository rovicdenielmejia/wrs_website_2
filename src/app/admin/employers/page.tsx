import { Search, MoreVertical, Mail, Building2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

const employers = [
  {
    id: '1',
    companyName: 'Tech Innovations Inc.',
    industry: 'Technology',
    size: '51-200',
    location: 'Manila, Philippines',
    email: 'contact@techinnovations.ph',
    jobsPosted: 5,
    status: 'active',
    joined: 'Jan 15, 2026',
  },
  {
    id: '2',
    companyName: 'Growth Partners PH',
    industry: 'Finance',
    size: '11-50',
    location: 'Cebu, Philippines',
    email: 'info@growthpartners.ph',
    jobsPosted: 3,
    status: 'active',
    joined: 'Feb 1, 2026',
  },
  {
    id: '3',
    companyName: 'Healthcare Solutions Corp',
    industry: 'Healthcare',
    size: '201-500',
    location: 'Metro Manila',
    email: 'careers@healthcaresolutions.ph',
    jobsPosted: 2,
    status: 'active',
    joined: 'Feb 20, 2026',
  },
];

export default function AdminEmployersPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-text-light mb-1">Employers</h2>
          <p className="text-text-muted">Manage employer accounts and profiles</p>
        </div>
        <Button>
          <Building2 className="mr-2 h-4 w-4" />
          Add Employer
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-bold text-text-light">All Employers</CardTitle>
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-text-muted" />
              <Input placeholder="Search employers..." className="pl-10 bg-white" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-text-light">Company</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-text-light">Industry</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-text-light">Size</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-text-light">Jobs</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-text-light">Status</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-text-light">Joined</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-text-light">Actions</th>
                </tr>
              </thead>
              <tbody>
                {employers.map((employer) => (
                  <tr key={employer.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-lg bg-accent-blue/10 flex items-center justify-center">
                          <Building2 className="h-5 w-5 text-accent-blue" />
                        </div>
                        <div>
                          <div className="font-medium text-text-light">{employer.companyName}</div>
                          <div className="text-sm text-text-muted">{employer.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-sm text-text-muted">{employer.industry}</span>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-sm text-text-muted">{employer.size} employees</span>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-sm text-text-muted">{employer.jobsPosted}</span>
                    </td>
                    <td className="py-4 px-4">
                      <Badge className={employer.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}>
                        {employer.status.charAt(0).toUpperCase() + employer.status.slice(1)}
                      </Badge>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-sm text-text-muted">{employer.joined}</span>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Button variant="ghost" size="sm">
                          <Mail className="h-4 w-4" />
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
