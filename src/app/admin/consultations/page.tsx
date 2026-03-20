import { Search } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

const consultations = [
  {
    id: '1',
    name: 'Tech Innovations Inc.',
    email: 'contact@techinnovations.ph',
    phone: '+63 900 123 4567',
    company: 'Tech Innovations Inc.',
    type: 'employer',
    service: 'Talent Acquisition',
    status: 'pending',
    message: 'Looking for software engineers for our growing team...',
    date: '3 hours ago',
  },
  {
    id: '2',
    name: 'Maria Garcia',
    email: 'maria.garcia@email.com',
    phone: '+63 900 234 5678',
    company: '',
    type: 'job-seeker',
    service: 'Job Matching',
    status: 'completed',
    message: 'Experienced HR professional seeking new opportunities...',
    date: '1 day ago',
  },
  {
    id: '3',
    name: 'Growth Partners',
    email: 'info@growthpartners.ph',
    phone: '+63 900 345 6789',
    company: 'Growth Partners',
    type: 'employer',
    service: 'HR Consulting',
    status: 'pending',
    message: 'Need help restructuring our HR department...',
    date: '2 days ago',
  },
];

const statusColors: Record<string, string> = {
  pending: 'bg-yellow-100 text-yellow-700',
  scheduled: 'bg-blue-100 text-blue-700',
  completed: 'bg-green-100 text-green-700',
  cancelled: 'bg-red-100 text-red-700',
};

export default function AdminConsultationsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-text-light mb-1">Consultations</h2>
          <p className="text-text-muted">Manage consultation requests and bookings</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {[
          { label: 'Pending', count: 5, color: 'bg-yellow-500' },
          { label: 'Scheduled', count: 3, color: 'bg-blue-500' },
          { label: 'Completed', count: 15, color: 'bg-green-500' },
          { label: 'Cancelled', count: 1, color: 'bg-red-500' },
        ].map((item) => (
          <Card key={item.label} className="p-4">
            <div className="flex items-center gap-3">
              <div className={`h-3 w-3 rounded-full ${item.color}`} />
              <div>
                <div className="text-2xl font-bold text-text-light">{item.count}</div>
                <div className="text-sm text-text-muted">{item.label}</div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-bold text-text-light">All Consultations</CardTitle>
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-text-muted" />
              <Input placeholder="Search consultations..." className="pl-10 bg-white" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {consultations.map((consult) => (
              <div
                key={consult.id}
                className="p-4 rounded-lg border border-gray-200 hover:border-accent-blue/50 transition-colors"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-semibold text-text-light">{consult.name}</h4>
                    <p className="text-sm text-text-muted">{consult.email}</p>
                    {consult.company && (
                      <p className="text-sm text-text-muted">{consult.company}</p>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className={statusColors[consult.status]}>
                      {consult.status.charAt(0).toUpperCase() + consult.status.slice(1)}
                    </Badge>
                  </div>
                </div>
                <div className="grid gap-2 text-sm mb-3">
                  <div className="flex gap-4">
                    <span className="text-text-muted">Type:</span>
                    <span className="text-text-light capitalize">{consult.type.replace('-', ' ')}</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-text-muted">Service:</span>
                    <span className="text-text-light">{consult.service}</span>
                  </div>
                </div>
                <p className="text-sm text-text-muted mb-3 p-3 bg-light-bg rounded">
                  "{consult.message}"
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-text-muted">{consult.date}</span>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">View</Button>
                    {consult.status === 'pending' && (
                      <Button size="sm">Schedule</Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
