import Link from 'next/link';
import { ArrowRight, Building2, Users, TrendingUp, Shield, Globe, Heart } from 'lucide-react';
import { Hero } from '@/components/sections/hero';
import { Section, SectionHeader, SectionDivider } from '@/components/sections/section';
import { CardGrid, WhyList, ConversionCard } from '@/components/sections/cards';
import { CTASection } from '@/components/sections/cta';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const stats = [
  { value: '100+', label: 'Successful Placements' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '50+', label: 'Partner Companies' },
  { value: '3+', label: 'Years Experience' },
];

const services = [
  {
    icon: '💼',
    title: 'Talent Acquisition',
    description:
      'End-to-end recruitment services to find the perfect match for your organization.',
    href: '/solutions#talent-acquisition',
  },
  {
    icon: '👔',
    title: 'Executive Search',
    description:
      'C-suite and senior leadership placements with proven track records.',
    href: '/solutions#executive-search',
  },
  {
    icon: '📋',
    title: 'Contract Staffing',
    description:
      'Flexible workforce solutions for project-based and seasonal needs.',
    href: '/solutions#contract-staffing',
  },
  {
    icon: '🏢',
    title: 'HR Consulting',
    description:
      'Strategic HR partnership to optimize your human capital management.',
    href: '/solutions#hr-consulting',
  },
];

const whyChooseUs = [
  'Structured & systematic recruitment process',
  'Transparent communication',
  'SME-focused workforce solutions',
  'Flexible engagement models',
  'Remote setup = lower client overhead',
  'Practical HR support beyond hiring',
];

const testimonials = [
  {
    quote:
      '"Reliable and Structured Recruitment Support. We struggled with inconsistent hiring before partnering with WRS. The structured screening process helped us shortlist better candidates quickly. Communication was clear, and turnaround time was faster than expected."',
    author: 'Operations Manager',
    title: 'Retail SME (Quezon City)',
  },
  {
    quote:
      '"Helped Us Scale Without Hiring an Internal Recruiter. As a growing business, we did not have a dedicated HR recruiter. WRS handled sourcing, screening, and coordination professionally. It felt like having an in-house recruitment partner."',
    author: 'Business Owner',
    title: 'Food & Beverage Group',
  },
  {
    quote:
      '"Quality Over Quantity. Instead of sending dozens of resumes, WRS endorsed a focused shortlist of candidates who actually matched our requirements. We filled the role within two weeks."',
    author: 'HR Supervisor',
    title: 'Logistics Company',
  },
  {
    quote:
      '"Professional and Supportive. The interview coaching and feedback helped me improve my confidence. I secured a better opportunity within weeks."',
    author: 'Marketing Specialist',
    title: 'Job Seeker',
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Consultation',
    description: 'We discuss your hiring needs, culture, and requirements.',
  },
  {
    step: '02',
    title: 'Candidate Sourcing',
    description: 'We source and attract qualified candidates from our network and channels.',
  },
  {
    step: '03',
    title: 'Screening',
    description: 'Pre-screening, assessments, and shortlisting so you see the best fit.',
  },
  {
    step: '04',
    title: 'Placement',
    description: 'We support offer, onboarding, and handover so your new hire integrates smoothly.',
  },
  {
    step: '05',
    title: 'Ongoing Support',
    description: 'Post-placement support and retention guidance when you need it.',
  },
];

const pricingPlans = [
  {
    name: 'Starter',
    price: '₱10,000 – ₱18,000',
    period: 'per successful hire',
    description: 'Essential Recruitment Support for startups & small teams hiring selectively.',
    features: [
      'Hiring support for 1–2 roles',
      'Structured candidate screening',
      'Shortlisted pre-qualified candidates (3–5)',
      'Basic role consultation',
      '30-Day Replacement Support',
    ],
  },
  {
    name: 'Growth',
    price: '₱30,000 – ₱60,000',
    period: 'per month',
    description: 'Strategic Hiring + HR Support for SMEs scaling operations.',
    popular: true,
    features: [
      'Multi-role hiring support',
      'Advanced screening & culture-fit evaluation',
      'Workforce planning consultation',
      'Recruitment workflow advisory',
      'Onboarding structure guidance',
      '60-Day Replacement Coverage',
    ],
  },
  {
    name: 'Enterprise',
    price: '₱60,000 – ₱120,000',
    period: 'per month',
    description: 'Full Workforce Recruitment & HR Solutions for large teams & long-term partnership.',
    features: [
      'Dedicated recruitment support (RPO-style)',
      'Executive & leadership hiring',
      'Workforce planning & forecasting',
      'HR systems advisory',
      'Talent pipeline development',
      'Confidential search support',
      'Ongoing strategic consultation',
    ],
  },
];

export default function HomePage() {
  return (
    <>
      <Hero
        title="Building Stronger Workforces. Connecting the Right People."
        subtitle="We help SMEs and scaling companies build high-performing teams through strategic talent solutions, executive search, and HR consulting services."
      />

      <Section>
        <div className="container">
          <SectionHeader
            label="Our Impact"
            title="Trusted by Leading Companies"
            subtitle="Numbers that showcase our commitment to excellence"
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <Card key={stat.label} className="text-center p-8">
                <div className="text-4xl font-extrabold text-gold mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-text-soft">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <SectionDivider />

      <Section alt>
        <div className="container">
          <SectionHeader
            label="Our Services"
            title="Comprehensive HR & Recruitment Solutions"
            subtitle="From talent acquisition to HR consulting, we've got you covered"
          />
          <CardGrid items={services} columns={4} />
        </div>
      </Section>

      <SectionDivider />

      <Section dark>
        <div className="container">
          <SectionHeader
            label="Why Choose Us"
            title="The WRS Difference"
            subtitle="We believe in quality over quantity, process over guesswork, and alignment over urgency"
          />
          <WhyList items={whyChooseUs} />
        </div>
      </Section>

      <SectionDivider />

      <Section alt>
        <div className="container">
          <SectionHeader
            label="Testimonials"
            title="What Our Clients Say"
            subtitle="What employers and professionals say about working with WRS"
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
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
                <div>
                  <div className="font-bold text-gold text-sm">{testimonial.author}</div>
                  <div className="text-xs text-text-soft">{testimonial.title}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section dark>
        <div className="container">
          <SectionHeader
            label="Our Process"
            title="How We Work"
            subtitle="From consultation to ongoing support; we guide you every step of the way"
          />
          <div className="grid gap-8 md:grid-cols-5">
            {processSteps.map((step) => (
              <Card key={step.step} className="p-6 text-center">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-gold/20 text-xl font-bold text-gold mb-4">
                  {step.step}
                </div>
                <h4 className="mb-2 font-bold text-gold">{step.title}</h4>
                <p className="text-sm text-text-soft">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section alt>
        <div className="container">
          <SectionHeader
            label="Pricing"
            title="Flexible Engagement Models"
            subtitle="We offer simple and scalable options designed for SMEs and growing teams"
          />
          <div className="grid gap-8 md:grid-cols-3">
            {pricingPlans.map((plan) => (
              <Card key={plan.name} className={`p-8 ${plan.popular ? 'border-2 border-gold' : ''}`}>
                {plan.popular && (
                  <span className="inline-block px-3 py-1 text-xs font-semibold bg-gold text-white rounded-full mb-4">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-bold text-gold mb-2">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-3xl font-bold text-gold">{plan.price}</span>
                </div>
                <p className="text-sm text-text-soft mb-6">{plan.period}</p>
                <p className="text-sm text-text-soft mb-6">{plan.description}</p>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-text-soft">
                      <span className="text-gold">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant={plan.popular ? 'default' : 'outline'} className="w-full">
                  <Link href="/solutions/employers#pricing-heading">Learn More</Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <SectionDivider />

      <Section>
        <div className="container">
          <SectionHeader
            label="For Employers"
            title="Build Your Dream Team"
            subtitle="Partner with us to find exceptional talent that drives your business forward"
          />
          <div className="grid gap-8 md:grid-cols-3">
            <ConversionCard
              icon="👔"
              title="Hire Talent"
              description="Access our extensive network of pre-qualified candidates."
              linkHref="/solutions/employers"
              linkLabel="Post a Job →"
            />
            <ConversionCard
              icon="🎯"
              title="Executive Search"
              description="Find senior leaders who can transform your organization."
              linkHref="/solutions#executive-search"
              linkLabel="Learn More →"
            />
            <ConversionCard
              icon="🤝"
              title="HR Partnership"
              description="Strategic HR consulting to optimize your workforce."
              linkHref="/solutions#hr-consulting"
              linkLabel="Explore Services →"
            />
          </div>
        </div>
      </Section>

      <SectionDivider />

      <Section alt>
        <div className="container">
          <SectionHeader
            label="For Job Seekers"
            title="Advance Your Career"
            subtitle="Let us help you find the perfect opportunity that matches your skills and aspirations"
          />
          <div className="grid gap-8 md:grid-cols-3">
            <ConversionCard
              icon="🔍"
              title="Job Matching"
              description="Personalized job recommendations based on your profile."
              linkHref="/jobs"
              linkLabel="Browse Jobs →"
            />
            <ConversionCard
              icon="📄"
              title="Resume Support"
              description="Professional resume crafting and optimization."
              linkHref="/solutions#resume-support"
              linkLabel="Get Support →"
            />
            <ConversionCard
              icon="🎓"
              title="Interview Coaching"
              description="Ace your interviews with our expert coaching."
              linkHref="/solutions#interview-coaching"
              linkLabel="Book Session →"
            />
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
