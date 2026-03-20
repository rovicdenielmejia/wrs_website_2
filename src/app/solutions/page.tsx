import Link from 'next/link';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { PageHeader } from '@/components/sections/hero';
import { Section, SectionHeader } from '@/components/sections/section';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const solutions = [
  {
    id: 'talent-acquisition',
    icon: '💼',
    title: 'Talent Acquisition',
    description: 'End-to-end recruitment solutions to find the perfect match for your organization.',
    features: [
      'Needs assessment and job profiling',
      'Multi-channel sourcing strategies',
      'Rigorous screening and assessments',
      'Structured interview coordination',
      'Offer negotiation support',
      'Onboarding assistance',
    ],
    cta: { label: 'Get Started', href: '/book-consultation' },
  },
  {
    id: 'executive-search',
    icon: '👔',
    title: 'Executive Search',
    description: 'C-suite and senior leadership placements with proven track records.',
    features: [
      'Confidential search process',
      'Market mapping and research',
      'Board-level sourcing',
      'Leadership assessment',
      'Cultural fit evaluation',
      'Transition support',
    ],
    cta: { label: 'Learn More', href: '/book-consultation' },
  },
  {
    id: 'contract-staffing',
    icon: '📋',
    title: 'Contract Staffing',
    description: 'Flexible workforce solutions for project-based and seasonal needs.',
    features: [
      'Quick turnaround placement',
      'Project-based hiring',
      'Seasonal workforce scaling',
      'Skilled temporary staff',
      'Payroll management',
      'Performance monitoring',
    ],
    cta: { label: 'Explore Options', href: '/book-consultation' },
  },
  {
    id: 'hr-consulting',
    icon: '🏢',
    title: 'HR Consulting',
    description: 'Strategic HR partnership to optimize your human capital management.',
    features: [
      'HR strategy development',
      'Policy development',
      'Compensation benchmarking',
      'Performance management systems',
      'Employee engagement',
      'Compliance audits',
    ],
    cta: { label: 'Schedule Consultation', href: '/book-consultation' },
  },
];

const process = [
  { step: '01', title: 'Discovery', description: 'We understand your needs, culture, and requirements' },
  { step: '02', title: 'Search', description: 'Multi-channel sourcing with rigorous screening' },
  { step: '03', title: 'Selection', description: 'Structured interviews and assessments' },
  { step: '04', title: 'Placement', description: 'Offer negotiation and onboarding support' },
];

export default function SolutionsPage() {
  return (
    <>
      <PageHeader
        label="Solutions"
        title="Comprehensive HR & Recruitment Services"
        subtitle="From talent acquisition to HR consulting, we provide end-to-end solutions"
      />

      <Section>
        <div className="container">
          <SectionHeader
            label="Our Solutions"
            title="Tailored Services for Every Need"
            subtitle="Whether you're looking to hire top talent or advance your career, we have the right solution for you"
          />
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="p-8 border-t-4 border-t-accent-blue">
              <div className="text-4xl mb-4">👔</div>
              <h3 className="mb-2 text-xl font-bold text-gold">For Employers</h3>
              <p className="text-sm text-text-soft mb-6">
                Build high-performing teams with our comprehensive employer solutions. From
                talent acquisition to HR consulting, we're your strategic HR partner.
              </p>
              <ul className="space-y-2 mb-6">
                {['Talent Acquisition', 'Executive Search', 'Contract Staffing', 'HR Consulting'].map(
                  (item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-text-soft">
                      <CheckCircle className="h-4 w-4 text-gold" />
                      {item}
                    </li>
                  )
                )}
              </ul>
              <Button asChild>
                <Link href="/solutions/employers">
                  Employer Solutions <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </Card>

            <Card className="p-8 border-t-4 border-t-gold">
              <div className="text-4xl mb-4">👩‍💼</div>
              <h3 className="mb-2 text-xl font-bold text-gold">For Job Seekers</h3>
              <p className="text-sm text-text-soft mb-6">
                Take the next step in your career with our personalized job seeker services.
                From resume support to interview coaching, we help you succeed.
              </p>
              <ul className="space-y-2 mb-6">
                {['Job Matching', 'Resume Support', 'Interview Coaching', 'Remote Careers'].map(
                  (item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-text-soft">
                      <CheckCircle className="h-4 w-4 text-gold" />
                      {item}
                    </li>
                  )
                )}
              </ul>
              <Button variant="outline" asChild>
                <Link href="/solutions/job-seekers">
                  Job Seeker Solutions <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </Card>
          </div>
        </div>
      </Section>

      <Section alt>
        <div className="container">
          <SectionHeader
            label="Our Process"
            title="How We Work"
            subtitle="A proven methodology that delivers results"
          />
          <div className="grid gap-8 md:grid-cols-4">
            {process.map((item) => (
              <div key={item.step} className="text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gold/20 text-2xl font-bold text-gold mb-4">
                  {item.step}
                </div>
                <h4 className="mb-2 text-lg font-bold text-gold">{item.title}</h4>
                <p className="text-sm text-text-soft">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section dark>
        <div className="container">
          <SectionHeader
            label="Detailed Services"
            title="Our Core Offerings"
            subtitle="Explore our comprehensive suite of HR and recruitment solutions"
          />
          <div className="space-y-8">
            {solutions.map((solution) => (
              <Card key={solution.id} id={solution.id} className="p-8">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-4xl">{solution.icon}</span>
                      <h3 className="text-2xl font-bold text-gold">{solution.title}</h3>
                    </div>
                    <p className="text-text-soft mb-6">{solution.description}</p>
                    <ul className="grid gap-3 sm:grid-cols-2">
                      {solution.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />
                          <span className="text-text-soft">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex md:flex-col items-center md:items-start gap-4">
                    <Button asChild>
                      <Link href={solution.cta.href}>{solution.cta.label}</Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
