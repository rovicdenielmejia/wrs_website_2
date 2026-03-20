import Link from 'next/link';
import { MapPin, Briefcase, Clock } from 'lucide-react';
import { PageHeader } from '@/components/sections/hero';
import { Section } from '@/components/sections/section';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { getJobTypeLabel } from '@/lib/utils';

const jobs = [
  {
    id: '1',
    title: 'Oracle HRMS Techno-Functional',
    location: 'KSA',
    experience: '5+ years',
    salaryRange: 'Competitive',
    industry: 'Technology',
    jobType: 'FULL_TIME',
    description:
      'Lead Oracle HRMS implementations and provide techno-functional expertise for enterprise clients in the Kingdom of Saudi Arabia.',
    featured: true,
  },
  {
    id: '2',
    title: 'Oracle EBS Finance Techno-Functional Analyst',
    location: 'Al Khobar, Saudi Arabia',
    experience: '5+ years',
    salaryRange: 'Competitive',
    industry: 'Technology',
    jobType: 'FULL_TIME',
    description:
      'Provide expert Oracle EBS Finance consulting services including analysis, design, and implementation support.',
    featured: true,
  },
  {
    id: '3',
    title: 'HR Manager',
    location: 'Philippines',
    experience: '3-5 years',
    salaryRange: '₱45,000 - ₱65,000',
    industry: 'HR & Recruitment',
    jobType: 'FULL_TIME',
    description:
      'Lead HR operations including recruitment, employee relations, performance management, and compliance.',
    featured: false,
  },
  {
    id: '4',
    title: 'Barista / Service Crew',
    location: 'Philippines',
    experience: 'Entry level',
    salaryRange: '₱15,000 - ₱18,000',
    industry: 'Hotels & Food',
    jobType: 'FULL_TIME',
    description:
      'Join our team as a barista/service crew member. Great opportunity for those starting their career.',
    featured: false,
  },
];

const industries = [
  'All Industries',
  'Technology',
  'Finance',
  'Healthcare',
  'BPO',
  'Education',
  'HR & Recruitment',
  'Manufacturing',
  'Retail',
];

const jobTypes = ['All Types', 'Full-time', 'Part-time', 'Contract', 'Remote'];

export default function JobsPage() {
  return (
    <>
      <PageHeader
        label="Careers"
        title="Find Your Next Opportunity"
        subtitle="Explore our latest job openings and take the next step in your career"
      />

      <Section>
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-4">
            <aside className="lg:col-span-1">
              <Card className="p-6 sticky top-24">
                <h3 className="mb-4 text-lg font-bold text-gold">Filter Jobs</h3>
                
                <div className="space-y-6">
                  <div>
                    <label className="mb-2 block text-sm font-semibold">Search</label>
                    <input
                      type="text"
                      placeholder="Search jobs..."
                      className="w-full rounded-sm border-2 border-text-muted bg-white px-4 py-2 text-text-light focus:border-gold focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold">Industry</label>
                    <select className="w-full rounded-sm border-2 border-text-muted bg-white px-4 py-2 text-text-light focus:border-gold focus:outline-none">
                      {industries.map((industry) => (
                        <option key={industry} value={industry}>
                          {industry}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold">Job Type</label>
                    <div className="space-y-2">
                      {jobTypes.map((type) => (
                        <label key={type} className="flex items-center gap-2">
                          <input type="checkbox" className="accent-accent-blue" />
                          <span className="text-sm text-text-light">{type}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold">Location</label>
                    <select className="w-full rounded-sm border-2 border-text-muted bg-white px-4 py-2 text-text-light focus:border-gold focus:outline-none">
                      <option>All Locations</option>
                      <option>Philippines</option>
                      <option>Manila</option>
                      <option>Cebu</option>
                      <option>Remote</option>
                      <option>KSA</option>
                    </select>
                  </div>

                  <Button className="w-full">Apply Filters</Button>
                </div>
              </Card>
            </aside>

            <main className="lg:col-span-3">
              <div className="mb-6 flex items-center justify-between">
                <p className="text-sm text-text-soft">
                  Showing <span className="font-semibold text-text-dark">{jobs.length}</span> jobs
                </p>
              </div>

              <div className="space-y-4">
                {jobs.map((job) => (
                  <Card key={job.id} className="overflow-hidden hover:shadow-card-hover transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            {job.featured && (
                              <Badge className="bg-gold/20 text-gold border-gold">Featured</Badge>
                            )}
                            <Badge variant="outline" className="text-xs">
                              {getJobTypeLabel(job.jobType)}
                            </Badge>
                          </div>
                          <h3 className="mb-2 text-xl font-bold text-gold">{job.title}</h3>
                          <div className="flex flex-wrap gap-4 text-sm text-text-soft mb-3">
                            <span className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {job.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <Briefcase className="h-4 w-4" />
                              {job.industry}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {job.experience}
                            </span>
                          </div>
                          <p className="text-sm text-text-soft line-clamp-2">{job.description}</p>
                        </div>
                        <div className="flex flex-col gap-2">
                          <Button size="sm" asChild>
                            <Link href={`/jobs/${job.id}`}>View Details</Link>
                          </Button>
                          <Button size="sm" variant="outline">
                            Apply Now
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-8 text-center">
                <p className="text-text-soft mb-4">
                  Can't find the perfect role? Join our talent network.
                </p>
                <Button variant="outline" asChild>
                  <Link href="/solutions/job-seekers#talent-network">
                    Submit Your Resume →
                  </Link>
                </Button>
              </div>
            </main>
          </div>
        </div>
      </Section>
    </>
  );
}
