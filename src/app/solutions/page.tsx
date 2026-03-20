import Link from 'next/link';
import { CheckCircle, ArrowRight, Users, Briefcase, TrendingUp, Target } from 'lucide-react';
import { PageHeader } from '@/components/sections/hero';
import { Section, SectionHeader } from '@/components/sections/section';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CTASection } from '@/components/sections/cta';

const whyChooseWRS = [
  'Strategic hiring that aligns with business goals',
  'Workforce systems that improve retention and performance',
  'HR support that fills capability gaps efficiently',
  'Talent services that accelerate professional success',
];

const employerSolutions = [
  {
    id: 'talent-acquisition',
    icon: '🎯',
    title: 'Talent Acquisition',
    description: 'Attract, evaluate, and secure qualified candidates with targeted sourcing strategies and assessment frameworks.',
    benefits: [
      'Faster time-to-hire',
      'Qualified candidate pipelines',
      'Reduced hiring errors',
    ],
  },
  {
    id: 'executive-search',
    icon: '👔',
    title: 'Executive Search',
    description: 'Achieve confident leadership hires with specialized sourcing and professional assessment tailored to senior roles.',
    benefits: [
      'Leadership-fit candidates',
      'Confidential search process',
      'Executive alignment with growth goals',
    ],
  },
  {
    id: 'contract-staffing',
    icon: '📋',
    title: 'Contract Staffing',
    description: 'Get flexible staffing support for project-based or surge capacity needs without long-term overhead.',
    benefits: [
      'Resource scalability',
      'Reduce operational gaps',
      'Cost-efficient workforce support',
    ],
  },
  {
    id: 'workforce-planning',
    icon: '📊',
    title: 'Workforce Planning',
    description: 'Create strategic workforce forecasts and planning models that align talent needs with business objectives.',
    benefits: [
      'Predictable talent supply',
      'Budget-aligned workforce design',
      'Data-driven HR decisions',
    ],
  },
  {
    id: 'hr-consulting',
    icon: '🏢',
    title: 'HR Consulting',
    description: 'Transform HR functions with tailored support, from process design to policy guidance and implementation.',
    benefits: [
      'Enhanced HR systems',
      'Better onboarding & retention',
      'Compliance support',
    ],
  },
];

const jobSeekerSolutions = [
  {
    id: 'job-matching',
    icon: '🔍',
    title: 'Job Matching',
    description: 'We connect professionals to roles that fit their skills and aspirations.',
    benefit: 'Better job fits and meaningful career growth',
  },
  {
    id: 'resume-support',
    icon: '📄',
    title: 'Resume & Career Support',
    description: 'Professionally optimize your resume so employers take notice.',
    benefit: 'Higher interview rates, stronger applications',
  },
  {
    id: 'interview-coaching',
    icon: '🎓',
    title: 'Interview Coaching',
    description: 'Build confidence and communication skills that win offers.',
    benefit: 'Better interview performance, more job offers',
  },
  {
    id: 'remote-careers',
    icon: '🌍',
    title: 'Remote Careers',
    description: 'Access globally flexible career opportunities and remote job guidance.',
    benefit: 'Work flexibility, global career paths',
  },
  {
    id: 'skill-certification',
    icon: '⭐',
    title: 'Skill Certification',
    description: 'Gain recognized credentials that make your profile stand out.',
    benefit: 'Higher job competitiveness, career progression',
  },
];

const testimonials = [
  {
    quote: '"Professional and Supportive. The interview coaching and feedback helped me improve my confidence. I secured a better opportunity within weeks."',
    author: 'Marketing Specialist',
  },
  {
    quote: '"Practical HR Guidance for SMEs. Beyond recruitment, we appreciated the advice on improving our onboarding and hiring workflow. It made our internal process more organized."',
    author: 'Managing Director, Local Trading Company',
  },
  {
    quote: '"Clear Communication Throughout the Process. The process was transparent from start to finish. I was informed at every stage and felt professionally handled."',
    author: 'Operations Supervisor',
  },
];

const results = [
  'Faster, better hires',
  'Stronger workforce continuity',
  'Improved retention rates',
  'Efficient HR systems',
  'Elevated talent success',
];

export default function SolutionsPage() {
  return (
    <>
      <PageHeader
        label="Solutions"
        title="Strategic Solutions Built for Employers & Talent Growth"
        subtitle="We provide comprehensive workforce recruitment and HR solutions that help businesses hire smarter, develop teams better, and build workforce systems that scale."
      />

      <Section alt>
        <div className="container">
          <SectionHeader
            label="Why Choose WRS"
            title="Solutions Designed to Deliver Impact"
            subtitle="At Workforce Recruitment & HR Solutions PH, we combine recruitment expertise with HR strategy, workforce planning, and talent development to ensure results you can measure, not just tasks completed."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {whyChooseWRS.map((item) => (
              <Card key={item} className="p-4 flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-gold flex-shrink-0" />
                <span className="text-sm text-text-soft">{item}</span>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section dark>
        <div className="container">
          <SectionHeader
            label="For Employers"
            title="Solutions for Employers"
            subtitle="We help companies build stronger teams, design HR systems, and drive workforce outcomes."
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {employerSolutions.map((solution) => (
              <Card key={solution.id} className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">{solution.icon}</span>
                  <h3 className="text-xl font-bold text-gold">{solution.title}</h3>
                </div>
                <p className="text-sm text-text-soft mb-4">{solution.description}</p>
                <h4 className="text-sm font-semibold text-gold mb-2">Benefits:</h4>
                <ul className="space-y-2">
                  {solution.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2 text-sm text-text-soft">
                      <CheckCircle className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild>
              <Link href="/solutions/employers">
                Employers Page → <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      <Section alt>
        <div className="container">
          <SectionHeader
            label="For Talent"
            title="Solutions for Talent"
            subtitle="Helping individuals accelerate career success and find the right opportunities."
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {jobSeekerSolutions.map((solution) => (
              <Card key={solution.id} className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">{solution.icon}</span>
                  <h3 className="text-xl font-bold text-gold">{solution.title}</h3>
                </div>
                <p className="text-sm text-text-soft mb-4">{solution.description}</p>
                <p className="text-sm text-gold font-medium">
                  <span className="text-text-soft">Benefits:</span> {solution.benefit}
                </p>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link href="/solutions/job-seekers">
                Job Seekers Page → <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      <Section dark>
        <div className="container">
          <SectionHeader
            label="Results"
            title="What Results Can You Expect"
            subtitle="When you choose WRS Solutions:"
          />
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-5">
            {results.map((result) => (
              <Card key={result} className="p-4 text-center">
                <CheckCircle className="mx-auto h-6 w-6 text-gold mb-2" />
                <span className="text-sm text-text-soft">{result}</span>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section alt>
        <div className="container">
          <SectionHeader
            label="Testimonials"
            title="What Clients Say"
            subtitle="What employers and professionals say about working with WRS."
          />
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-gold">★</span>
                  ))}
                </div>
                <blockquote className="mb-4 text-sm text-text-dark">
                  {testimonial.quote}
                </blockquote>
                <div className="text-sm font-bold text-gold">{testimonial.author}</div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
