import Link from 'next/link';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { PageHeader } from '@/components/sections/hero';
import { Section, SectionHeader } from '@/components/sections/section';
import { Card } from '@/components/ui/card';
import { WhyList } from '@/components/sections/cards';
import { CTASection } from '@/components/sections/cta';

const whyChooseUs = [
  'Quality over volume — we prioritize the right fit over filling positions quickly',
  'Process-driven approach with structured interviews and assessments',
  'Alignment with your company culture and long-term goals',
  'Focus on long-term stability and retention, not just quick placements',
  'Dedicated account management and ongoing support',
  'Deep understanding of the Philippine job market and beyond',
];

const benefits = [
  {
    icon: '💰',
    title: 'Cost-Effective',
    description: 'Reduce hiring costs with efficient processes and reduced turnover',
  },
  {
    icon: '⏱️',
    title: 'Time-Saving',
    description: 'Faster placements without compromising quality',
  },
  {
    icon: '🎯',
    title: 'Precision Match',
    description: 'Candidates carefully matched to your specific requirements',
  },
  {
    icon: '🔒',
    title: 'Risk Reduction',
    description: 'Thorough vetting minimizes hiring risks',
  },
  {
    icon: '📈',
    title: 'Scalability',
    description: 'Flexible solutions that grow with your business',
  },
  {
    icon: '💡',
    title: 'Expertise',
    description: 'Years of experience across multiple industries',
  },
];

export default function WhyUsPage() {
  return (
    <>
      <PageHeader
        label="Why Choose Us"
        title="The WRS Difference"
        subtitle="Quality, process, alignment, and long-term stability"
      />

      <Section alt>
        <div className="container">
          <SectionHeader
            label="Our Philosophy"
            title="What Sets Us Apart"
            subtitle="Four core principles that guide every engagement"
          />
          <WhyList items={whyChooseUs} />
        </div>
      </Section>

      <Section dark>
        <div className="container">
          <SectionHeader
            label="The Benefits"
            title="Why Partner With WRS"
            subtitle="Strategic advantages that make a real difference"
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="p-6">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h4 className="mb-2 font-bold text-gold">{benefit.title}</h4>
                <p className="text-sm text-text-soft">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section alt>
        <div className="container">
          <SectionHeader
            label="Our Process"
            title="How We Deliver Results"
            subtitle="A proven methodology that ensures success"
          />
          <div className="grid gap-8 md:grid-cols-4">
            {[
              { step: '01', title: 'Discovery', desc: 'We listen and understand your unique needs' },
              { step: '02', title: 'Search', desc: 'Multi-channel sourcing with rigorous screening' },
              { step: '03', title: 'Selection', desc: 'Structured interviews and assessments' },
              { step: '04', title: 'Success', desc: 'Onboarding support and follow-up' },
            ].map((item) => (
              <Card key={item.step} className="p-6 text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gold/20 text-2xl font-bold text-gold mb-4">
                  {item.step}
                </div>
                <h4 className="mb-2 font-bold text-gold">{item.title}</h4>
                <p className="text-sm text-text-soft">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section dark>
        <div className="container">
          <SectionHeader
            label="Our Commitment"
            title="What You Can Expect"
            subtitle="We stand behind every engagement with these guarantees"
          />
          <div className="grid gap-6 md:grid-cols-2">
            {[
              'Dedicated account management for every client',
              'Transparent communication throughout the process',
              'Rigorous candidate vetting and reference checks',
              'Follow-up support for 90 days post-placement',
              'Replacement guarantee for unsuccessful placements',
              'Regular check-ins and performance reviews',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 flex-shrink-0 text-gold mt-0.5" />
                <span className="text-text-soft">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
