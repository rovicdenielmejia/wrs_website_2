import { Search, MoreVertical, Mail, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

const inquiries = [
  {
    id: '1',
    name: 'Juan dela Cruz',
    email: 'juan.delacruz@email.com',
    phone: '+63 900 123 4567',
    subject: 'General Inquiry',
    message: 'I would like to know more about your recruitment services for our startup...',
    status: 'new',
    date: '2 hours ago',
  },
  {
    id: '2',
    name: 'Maria Santos',
    email: 'maria.santos@email.com',
    phone: '+63 900 234 5678',
    subject: 'Employer / Hiring',
    message: 'We are looking for qualified HR professionals for our growing team...',
    status: 'new',
    date: '5 hours ago',
  },
  {
    id: '3',
    name: 'Pedro Reyes',
    email: 'pedro.reyes@email.com',
    phone: '',
    subject: 'Job Seeker',
    message: 'I am interested in applying for HR Manager position. Please send more details...',
    status: 'read',
    date: '1 day ago',
  },
  {
    id: '4',
    name: 'Ana Lim',
    email: 'ana.lim@email.com',
    phone: '+63 900 345 6789',
    subject: 'Partnership',
    message: 'We would like to explore partnership opportunities with your agency...',
    status: 'replied',
    date: '2 days ago',
  },
];

export default function AdminInquiriesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-text-light mb-1">Inquiries</h2>
          <p className="text-text-muted">Manage contact form submissions</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {[
          { label: 'New', count: 5, color: 'bg-blue-500' },
          { label: 'Read', count: 8, color: 'bg-yellow-500' },
          { label: 'Replied', count: 12, color: 'bg-green-500' },
          { label: 'Archived', count: 2, color: 'bg-gray-500' },
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
            <CardTitle className="text-lg font-bold text-text-light">All Inquiries</CardTitle>
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-text-muted" />
              <Input placeholder="Search inquiries..." className="pl-10 bg-white" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {inquiries.map((inquiry) => (
              <div
                key={inquiry.id}
                className="p-4 rounded-lg border border-gray-200 hover:border-accent-blue/50 transition-colors"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold text-text-light">{inquiry.name}</h4>
                      <Badge className={
                        inquiry.status === 'new' ? 'bg-blue-100 text-blue-700' :
                        inquiry.status === 'read' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-green-100 text-green-700'
                      }>
                        {inquiry.status.charAt(0).toUpperCase() + inquiry.status.slice(1)}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-text-muted mt-1">
                      <span>{inquiry.email}</span>
                      {inquiry.phone && <span>{inquiry.phone}</span>}
                    </div>
                  </div>
                  <span className="text-xs text-text-muted">{inquiry.date}</span>
                </div>
                <div className="mb-2">
                  <span className="text-xs font-semibold text-text-muted">Subject: </span>
                  <span className="text-xs text-text-muted">{inquiry.subject}</span>
                </div>
                <p className="text-sm text-text-muted p-3 bg-light-bg rounded">
                  "{inquiry.message}"
                </p>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-xs text-text-muted">{inquiry.date}</span>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <Mail className="mr-1 h-4 w-4" />
                      Reply
                    </Button>
                    {inquiry.status !== 'replied' && (
                      <Button size="sm" variant="outline">
                        <CheckCircle className="mr-1 h-4 w-4" />
                        Mark as Replied
                      </Button>
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
