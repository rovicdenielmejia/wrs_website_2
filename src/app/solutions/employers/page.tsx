import Link from 'next/link';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { PageHeader } from '@/components/sections/hero';
import { Section, SectionHeader } from '@/components/sections/section';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CTASection } from '@/components/sections/cta';

const employerSolutions = [
  {
    icon: '🎯',
    title: 'Talent Acquisition',
    description: 'End-to-end recruitment to find the perfect candidates for your team.',
    features: [
      'Needs assessment and job profiling',
      'Multi-channel candidate sourcing',
      'Rigorous screening and background checks',
      'Structured interview coordination',
      'Offer negotiation support',
      '90-day onboarding follow-up',
    ],
  },
  {
    icon: '👔',
    title: 'Executive Search',
    description: 'Confidential search for C-suite and senior leadership positions.',
    features: [
      'Discrete and confidential process',
      'Comprehensive market mapping',
      'Board-level candidate sourcing',
      'Leadership and competency assessment',
      'Cultural fit evaluation',
      'Executive onboarding support',
    ],
  },
  {
    icon: '📋',
    title: 'Contract Staffing',
    description: 'Flexible workforce solutions for project-based and seasonal needs.',
    features: [
      'Quick turnaround on placements',
      'Project-based hiring support',
      'Seasonal workforce scaling',
      'Skilled temporary professionals',
      'Payroll administration',
      'Performance monitoring',
    ],
  },
  {
    icon: '🏢',
    title: 'HR Consulting',
    description: 'Strategic partnership to optimize your human capital management.',
    features: [
      'HR strategy development',
      'Policies and procedures',
      'Compensation structuring',
      'Performance management systems',
      'Employee engagement programs',
      'Compliance and audits',
    ],
  },
];

export default function EmployersPage() {
  return (
    <>
      <PageHeader
        label="For Employers"
        title="Build Your Dream Team"
        subtitle="Partner with us to find exceptional talent that drives your business forward"
      />

      <Section alt>
        <div className="container">
          <SectionHeader
            label="Our Employer Solutions"
            title="Comprehensive Hiring & HR Services"
            subtitle="From finding the right talent to optimizing your HR operations"
          />
          <div className="grid gap-8 md:grid-cols-2">
            {employerSolutions.map((solution) => (
              <Card key={solution.title} className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">{solution.icon}</span>
                  <h3 className="text-xl font-bold text-gold">{solution.title}</h3>
                </div>
                <p className="text-sm text-text-soft mb-6">{solution.description}</p>
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-text-soft">
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section dark>
        <div className="container">
          <SectionHeader
            label="Why Partner With Us"
            title="The WRS Advantage"
            subtitle="We're not just another recruitment agency"
          />
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="p-6 text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h4 className="mb-2 font-bold text-gold">Quality Over Volume</h4>
              <p className="text-sm text-text-soft">
                We prioritize finding the right fit over quickly filling positions. Every
                candidate is thoroughly vetted.
              </p>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-4xl mb-4">🔍</div>
              <h4 className="mb-2 font-bold text-gold">Process-Driven</h4>
              <p className="text-sm text-text-soft">
                Our structured approach ensures consistency and quality in every placement.
              </p>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h4 className="mb-2 font-bold text-gold">Long-Term Partnership</h4>
              <p className="text-sm text-text-soft">
                We focus on retention and long-term success, not just filling seats.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      <Section>
        <div className="container">
          <SectionHeader
            label="Ready to Hire?"
            title="Let's Discuss Your Needs"
            subtitle="Schedule a consultation to learn how we can help you build your dream team"
          />
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/book-consultation">
                Schedule Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/jobs">View Open Positions</Link>
            </Button>
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
