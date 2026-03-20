import Link from 'next/link';
import { MapPin, Briefcase, Clock, Building2, ArrowLeft, Share2 } from 'lucide-react';
import { PageHeader } from '@/components/sections/hero';
import { Section } from '@/components/sections/section';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { getJobTypeLabel } from '@/lib/utils';

const job = {
  id: '1',
  title: 'Oracle HRMS Techno-Functional',
  location: 'KSA',
  experience: '5+ years',
  salaryRange: 'Competitive',
  industry: 'Technology',
  jobType: 'FULL_TIME',
  status: 'ACTIVE',
  description: `We are seeking an experienced Oracle HRMS Techno-Functional consultant to join our team and provide expert guidance to enterprise clients in the Kingdom of Saudi Arabia. This role involves analyzing business requirements, designing solutions, and implementing Oracle HRMS modules.`,
  responsibilities: [
    'Analyze business requirements and translate them into functional specifications',
    'Design and configure Oracle HRMS modules including Core HR, Payroll, and Self-Service',
    'Lead workshops and training sessions for client teams',
    'Develop custom reports and integrations using Oracle tools',
    'Provide post-implementation support and troubleshooting',
    'Collaborate with technical team for solution architecture',
    'Mentor junior team members and contribute to knowledge sharing',
  ],
  requiredSkills: [
    '5+ years of Oracle HRMS implementation experience',
    'Strong functional knowledge of Core HR, Payroll, and Employee Self-Service',
    'Technical skills in SQL, PL/SQL, and Oracle Reports',
    'Experience with Oracle FastFormula preferred',
    'Excellent communication and presentation skills',
    'Bachelor\'s degree in IT, HR, or related field',
    'Willingness to work in Saudi Arabia',
  ],
  benefits: [
    'Competitive tax-free salary',
    'Housing and transportation allowances',
    'Annual return tickets',
    'Health insurance',
    '30 days annual leave',
    'Professional development opportunities',
  ],
  additionalInfo: 'Only shortlisted candidates will be contacted. Position available immediately.',
  postedDate: 'March 10, 2026',
  featured: true,
};

export default function JobDetailPage() {
  return (
    <>
      <PageHeader
        label="Job Details"
        title={job.title}
        subtitle={`${job.location} • ${job.experience} experience`}
      />

      <Section alt>
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-8">
              <Card className="p-6">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      {job.featured && (
                        <Badge className="bg-gold/20 text-gold border-gold">Featured</Badge>
                      )}
                      <Badge variant="outline">{getJobTypeLabel(job.jobType)}</Badge>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-text-soft">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Building2 className="h-4 w-4" />
                        {job.industry}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {job.experience}
                      </span>
                      {job.salaryRange && (
                        <span className="flex items-center gap-1">
                          <Briefcase className="h-4 w-4" />
                          {job.salaryRange}
                        </span>
                      )}
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                </div>

                <div className="prose prose-invert max-w-none">
                  <h3 className="text-lg font-bold text-gold mb-3">About This Role</h3>
                  <p className="text-text-soft mb-8">{job.description}</p>

                  <h3 className="text-lg font-bold text-gold mb-3">Key Responsibilities</h3>
                  <ul className="list-disc pl-6 space-y-2 mb-8">
                    {job.responsibilities.map((item, index) => (
                      <li key={index} className="text-text-soft">{item}</li>
                    ))}
                  </ul>

                  <h3 className="text-lg font-bold text-gold mb-3">Required Skills & Qualifications</h3>
                  <ul className="list-disc pl-6 space-y-2 mb-8">
                    {job.requiredSkills.map((item, index) => (
                      <li key={index} className="text-text-soft">{item}</li>
                    ))}
                  </ul>

                  <h3 className="text-lg font-bold text-gold mb-3">Benefits</h3>
                  <ul className="list-disc pl-6 space-y-2 mb-8">
                    {job.benefits.map((item, index) => (
                      <li key={index} className="text-text-soft">{item}</li>
                    ))}
                  </ul>

                  {job.additionalInfo && (
                    <>
                      <h3 className="text-lg font-bold text-gold mb-3">Additional Information</h3>
                      <p className="text-text-soft">{job.additionalInfo}</p>
                    </>
                  )}
                </div>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="p-6 sticky top-24">
                <h3 className="text-lg font-bold text-gold mb-4">Apply for this Position</h3>
                <div className="space-y-4">
                  <Button className="w-full" size="lg">
                    Apply Now
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/solutions/job-seekers#talent-network">
                      Submit Resume for Future Opportunities
                    </Link>
                  </Button>
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-sm text-text-soft">
                    Posted on <span className="text-text-dark">{job.postedDate}</span>
                  </p>
                </div>

                <div className="mt-6">
                  <h4 className="font-semibold text-gold mb-3">Questions?</h4>
                  <p className="text-sm text-text-soft mb-3">
                    Contact us for more information about this position.
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/contact">
                      Contact Us
                    </Link>
                  </Button>
                </div>
              </Card>

              <Card className="p-6">
                <h4 className="font-bold text-gold mb-4">Similar Jobs</h4>
                <div className="space-y-4">
                  {[
                    { title: 'Oracle EBS Finance Techno-Functional', location: 'Al Khobar, Saudi Arabia' },
                    { title: 'Senior HR Consultant', location: 'Manila, Philippines' },
                    { title: 'HRIS Analyst', location: 'Remote' },
                  ].map((similarJob, index) => (
                    <Link
                      key={index}
                      href={`/jobs/${index + 2}`}
                      className="block p-3 rounded-lg bg-light-bg hover:bg-gray-100 transition-colors"
                    >
                      <h5 className="font-medium text-text-light text-sm">{similarJob.title}</h5>
                      <p className="text-xs text-text-muted">{similarJob.location}</p>
                    </Link>
                  ))}
                </div>
              </Card>
            </div>
          </div>

          <div className="mt-8">
            <Button variant="ghost" asChild>
              <Link href="/jobs">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Jobs
              </Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
