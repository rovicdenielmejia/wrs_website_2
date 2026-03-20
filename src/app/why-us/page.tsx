import Link from 'next/link';
import { CheckCircle, ArrowRight, Users, Briefcase, TrendingUp, Target } from 'lucide-react';
import { PageHeader } from '@/components/sections/hero';
import { Section, SectionHeader } from '@/components/sections/section';
import { Card } from '@/components/ui/card';
import { WhyList } from '@/components/sections/cards';
import { CTASection } from '@/components/sections/cta';

const challenges = [
  'Reactive hiring decisions',
  'High employee turnover',
  'Unstructured recruitment workflows',
  'Inconsistent onboarding',
  'HR compliance gaps',
  'Lack of workforce planning',
];

const whyWRS = [
  {
    number: '1',
    title: 'Strategy Before Hiring',
    description: 'We begin with workforce analysis, not job ads. We evaluate organizational structure, leadership direction, workforce gaps, performance expectations, and growth roadmap. Every hire becomes a strategic decision, not a rushed solution.',
  },
  {
    number: '2',
    title: 'Integrated Recruitment & HR Approach',
    description: 'Unlike traditional agencies, we combine strategic talent acquisition, structured screening & evaluation, culture-fit alignment, role clarity & documentation guidance, and onboarding process support. Recruitment and HR systems work together, not in isolation.',
  },
  {
    number: '3',
    title: 'Customized Workforce Solutions for Philippine Businesses',
    description: 'As a Workforce Recruitment & HR Solutions PH provider, we understand local hiring trends, Philippine labor market dynamics, SME growth challenges, compliance considerations, and industry-specific workforce needs. Our solutions are localized, practical, and scalable.',
  },
  {
    number: '4',
    title: 'Systems That Support Long-Term Growth',
    description: 'We help businesses move from informal HR practices to structured systems by supporting recruitment workflow optimization, basic HR process organization, role & performance clarity, workforce planning alignment, and talent retention strategies.',
  },
];

const businessImpact = [
  'Faster hiring cycles',
  'Improved employee retention',
  'Reduced hiring mistakes',
  'Clearer HR processes',
  'More stable operations',
  'Better leadership workforce visibility',
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

const whoWeSupport = [
  'Startups building structured teams',
  'SMEs formalizing HR systems',
  'Growing companies scaling operations',
  'Established businesses optimizing workforce strategy',
];

const whatMakesDifferent = [
  'Integrated Recruitment + HR Systems',
  'Strategy-Driven Workforce Planning',
  'Local Philippine Market Understanding',
  'Customized Solutions (Not Templates)',
  'Long-Term Partnership Approach',
];

export default function WhyUsPage() {
  return (
    <>
      <PageHeader
        label="Why WRS"
        title="Build a Stronger Workforce With the Right Partner"
        subtitle="Workforce Recruitment & HR Solutions PH, designed for sustainable business growth. We go beyond recruitment. We provide integrated workforce strategy, HR systems support, and structured talent acquisition, all aligned with your long-term business goals."
      />

      <Section alt>
        <div className="container">
          <SectionHeader
            label="The Challenge"
            title="Why Most Hiring & HR Systems Fail"
            subtitle="Growing businesses often struggle with:"
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {challenges.map((challenge) => (
              <Card key={challenge} className="p-4 flex items-start gap-3">
                <span className="text-gold font-bold">!</span>
                <span className="text-sm text-text-soft">{challenge}</span>
              </Card>
            ))}
          </div>
          <p className="text-center mt-8 text-text-soft font-medium">
            When recruitment and HR systems operate separately, growth slows down.<br />
            <span className="text-gold">You don't just need candidates. You need a structured Workforce & HR Solution.</span>
          </p>
        </div>
      </Section>

      <Section dark>
        <div className="container">
          <SectionHeader
            label="Why WRS"
            title="Why Choose Workforce Recruitment & HR Solutions PH"
            subtitle="Strategy, integration, and long-term growth built for Philippine businesses."
          />
          <div className="space-y-8">
            {whyWRS.map((item) => (
              <Card key={item.number} className="p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gold/20 text-2xl font-bold text-gold">
                      {item.number}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gold mb-3">{item.title}</h3>
                    <p className="text-text-soft">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section alt>
        <div className="container">
          <SectionHeader
            label="Our Impact"
            title="Business Impact You Can Expect"
            subtitle="Companies working with structured workforce systems experience:"
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {businessImpact.map((impact) => (
              <Card key={impact} className="p-4 flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-gold flex-shrink-0" />
                <span className="text-sm text-text-soft">{impact}</span>
              </Card>
            ))}
          </div>
          <p className="text-center mt-8 text-gold font-medium">
            We focus on measurable growth, not short-term placements.
          </p>
        </div>
      </Section>

      <Section dark>
        <div className="container">
          <SectionHeader
            label="Our Framework"
            title="Our Integrated Workforce Framework"
            subtitle="This is Workforce Recruitment & HR Solutions PH, built for growth-stage businesses."
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

      <Section alt>
        <div className="container">
          <SectionHeader
            label="Who We Support"
            title="Who We Support"
            subtitle="We adapt to your stage, not force generic solutions."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {whoWeSupport.map((item) => (
              <Card key={item} className="p-6 text-center">
                <Users className="mx-auto h-8 w-8 text-gold mb-3" />
                <span className="text-sm text-text-soft">{item}</span>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section dark>
        <div className="container">
          <SectionHeader
            label="The Difference"
            title="What Makes WRS Different"
            subtitle="We operate as an extension of your leadership team, not just an external recruiter."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {whatMakesDifferent.map((item) => (
              <Card key={item} className="p-4 text-center">
                <CheckCircle className="mx-auto h-6 w-6 text-gold mb-2" />
                <span className="text-sm text-text-soft">{item}</span>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
