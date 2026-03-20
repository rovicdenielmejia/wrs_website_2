import Link from 'next/link';
import Image from 'next/image';
import { Target, Eye, Heart, Users, Award, Clock, Shield, Sparkles } from 'lucide-react';
import { PageHeader } from '@/components/sections/hero';
import { Section, SectionHeader } from '@/components/sections/section';
import { Card } from '@/components/ui/card';
import { CTASection } from '@/components/sections/cta';

const coreValues = [
  {
    icon: Shield,
    title: 'Integrity',
    description: 'Transparent communication and ethical recruitment practices.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Structured systems that produce measurable hiring outcomes.',
  },
  {
    icon: Heart,
    title: 'Client Commitment',
    description: 'Every hiring engagement is treated as a growth investment.',
  },
  {
    icon: Sparkles,
    title: 'Continuous Improvement',
    description: 'We continuously refine our framework to adapt to evolving workforce demands.',
  },
];

const expertise = [
  'Talent Acquisition & End-to-End Recruitment',
  'Employee Engagement Programs',
  'Compensation & Benefits Administration',
  'HR Operations & Process Improvement',
  'Payroll Processing',
  'Workflow Systems Implementation (Monday.com)',
  'Workforce Data Analysis',
  'Philippine Labor Law Awareness & Compliance',
];

const framework = [
  {
    step: '01',
    title: 'Workforce & HR Assessment',
    description: 'We analyze structure, processes, and hiring needs.',
  },
  {
    step: '02',
    title: 'Strategic Planning',
    description: 'We define recruitment priorities and HR system improvements.',
  },
  {
    step: '03',
    title: 'Talent Acquisition & Screening',
    description: 'We source, evaluate, and endorse aligned candidates.',
  },
  {
    step: '04',
    title: 'HR Process Support',
    description: 'We assist with onboarding clarity and workforce alignment.',
  },
  {
    step: '05',
    title: 'Ongoing Workforce Advisory',
    description: 'We remain your strategic partner as you scale.',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        label="About WRS"
        title="Strategic Recruitment. Structured Systems. Stronger Teams."
        subtitle="Building Stronger Workforces. Structuring Better Systems. Supporting Sustainable Growth."
      />

      <Section alt>
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeader
                label="Our Story"
                title="Your Strategic Workforce Partner"
                subtitle="Hiring in the Philippines is competitive, fast-moving, and often reactive. At WRS, we help Philippine businesses hire smarter through structured recruitment systems designed to reduce hiring risks, improve retention, and align talent with long-term business goals."
              />
              <div className="space-y-4 text-text-soft mt-8">
                <p>
                  As a Philippines-based recruitment and HR consultancy, we specialize in:
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-gold">✓</span>
                    Strategic Talent Acquisition
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold">✓</span>
                    End-to-End Recruitment Services
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold">✓</span>
                    HR Systems Optimization
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold">✓</span>
                    Workforce Planning & Hiring Strategy
                  </li>
                </ul>
                <p className="mt-4 font-medium text-gold">
                  We don't operate as a volume-driven recruitment agency. We function as a structured workforce partner, helping businesses build stable, performance-driven teams.
                </p>
                <p className="font-medium text-gold">
                  We don't just send resumes. We build workforce solutions.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 text-center">
                <Target className="mx-auto h-10 w-10 text-gold mb-3" />
                <h4 className="font-bold text-gold mb-2">Our Mission</h4>
                <p className="text-sm text-text-soft">
                  To transform recruitment in the Philippines from a reactive task into a strategic business advantage.
                </p>
              </Card>
              <Card className="p-6 text-center">
                <Eye className="mx-auto h-10 w-10 text-gold mb-3" />
                <h4 className="font-bold text-gold mb-2">Our Vision</h4>
                <p className="text-sm text-text-soft">
                  To become a trusted workforce partner for organizations that value quality hiring and long-term stability.
                </p>
              </Card>
              <Card className="p-6 text-center col-span-2">
                <Heart className="mx-auto h-10 w-10 text-gold mb-3" />
                <h4 className="font-bold text-gold mb-2">Our Core Values</h4>
                <p className="text-sm text-text-soft">
                  Integrity. Excellence. Client Commitment. Continuous Improvement.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </Section>

      <Section dark>
        <div className="container">
          <SectionHeader
            label="Why WRS"
            title="What Makes WRS Different"
            subtitle="Unlike traditional recruitment agencies in the Philippines that prioritize volume hiring, WRS focuses on strategy, structure, and alignment."
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((value) => (
              <Card key={value.title} className="p-6 text-center">
                <value.icon className="mx-auto h-10 w-10 text-gold mb-4" />
                <h4 className="mb-2 font-bold text-gold">{value.title}</h4>
                <p className="text-sm text-text-soft">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section alt>
        <div className="container">
          <SectionHeader
            label="How We Work"
            title="Our Integrated Workforce Framework"
            subtitle="This is Workforce Recruitment & HR Solutions PH, built for growth-stage businesses. Every hire is intentional. Every step is strategic."
          />
          <div className="grid gap-8 md:grid-cols-5">
            {framework.map((step) => (
              <Card key={step.step} className="p-6 text-center">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-gold/20 text-xl font-bold text-gold mb-4">
                  {step.step}
                </div>
                <h4 className="mb-2 font-bold text-gold text-sm">{step.title}</h4>
                <p className="text-sm text-text-soft">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section dark>
        <div className="container">
          <SectionHeader
            label="Leadership"
            title="Who Manages WRS"
            subtitle=""
          />
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 text-center">
              <div className="mx-auto mb-6 relative h-32 w-32">
                <Image
                  src="/Assets/Solo Business Pic.png"
                  alt="Rovic Deniel Labuguen Mejia"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <div className="inline-block px-4 py-1 bg-gold/20 rounded-full text-xs font-semibold text-gold mb-4">
                Founder & Managing Director
              </div>
              <div className="inline-block px-4 py-1 bg-accent-blue/20 rounded-full text-xs font-semibold text-accent-blue mb-4 ml-2">
                HR Officer & Recruitment Specialist
              </div>
              <h3 className="text-2xl font-bold text-gold mb-2">Rovic Deniel Labuguen Mejia</h3>
              <p className="text-sm text-accent-blue mb-6">3+ Years of Professional HR & Recruitment Experience</p>
              <p className="text-sm text-text-soft mb-6">
                Rovic Deniel Labuguen Mejia is the Founder and Managing Director of WRS (Workforce Recruitment & HR Solutions PH). With over three years of combined experience in human resources and recruitment, he brings a structured, performance-driven approach to talent acquisition, HR operations, and workforce systems development.
              </p>
              <div className="text-left mt-6">
                <h4 className="font-bold text-gold mb-3">Professional Expertise:</h4>
                <ul className="grid grid-cols-2 gap-2">
                  {expertise.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-text-soft">
                      <span className="text-gold">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      <Section alt>
        <div className="container">
          <SectionHeader
            label="Leadership Philosophy"
            title="Why Clients Trust WRS"
            subtitle="Recruitment should not be transactional. It should be strategic."
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="p-6">
              <h4 className="font-bold text-gold mb-4">Our Philosophy</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-text-soft">
                  <span className="text-gold font-bold">→</span>
                  Quality over volume
                </li>
                <li className="flex items-start gap-2 text-sm text-text-soft">
                  <span className="text-gold font-bold">→</span>
                  Process over guesswork
                </li>
                <li className="flex items-start gap-2 text-sm text-text-soft">
                  <span className="text-gold font-bold">→</span>
                  Alignment over urgency
                </li>
                <li className="flex items-start gap-2 text-sm text-text-soft">
                  <span className="text-gold font-bold">→</span>
                  Long-term stability over quick placements
                </li>
              </ul>
            </Card>
            <Card className="p-6">
              <h4 className="font-bold text-gold mb-4">Why Clients Trust Us</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-text-soft">
                  <span className="text-gold">✓</span>
                  Clear and transparent communication
                </li>
                <li className="flex items-start gap-2 text-sm text-text-soft">
                  <span className="text-gold">✓</span>
                  Structured recruitment methodology
                </li>
                <li className="flex items-start gap-2 text-sm text-text-soft">
                  <span className="text-gold">✓</span>
                  Professional candidate management
                </li>
                <li className="flex items-start gap-2 text-sm text-text-soft">
                  <span className="text-gold">✓</span>
                  Reliable turnaround timelines
                </li>
              </ul>
            </Card>
            <Card className="p-6">
              <h4 className="font-bold text-gold mb-4">Proven Impact</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-text-soft">
                  <span className="text-gold">★</span>
                  Reduced hiring cycle time by 25%
                </li>
                <li className="flex items-start gap-2 text-sm text-text-soft">
                  <span className="text-gold">★</span>
                  Strengthened employee engagement initiatives
                </li>
                <li className="flex items-start gap-2 text-sm text-text-soft">
                  <span className="text-gold">★</span>
                  Improved operational efficiency
                </li>
                <li className="flex items-start gap-2 text-sm text-text-soft">
                  <span className="text-gold">★</span>
                  Data-driven workforce decisions
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
