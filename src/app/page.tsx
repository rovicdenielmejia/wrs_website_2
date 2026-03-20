import Link from 'next/link';
import { ArrowRight, Building2, Users, TrendingUp, Shield, Globe, Heart } from 'lucide-react';
import { Hero, SectionDivider } from '@/components/sections/hero';
import { Section, SectionHeader } from '@/components/sections/section';
import { CardGrid, WhyList, ConversionCard } from '@/components/sections/cards';
import { CTASection } from '@/components/sections/cta';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const stats = [
  { value: '500+', label: 'Successful Placements' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '50+', label: 'Partner Companies' },
  { value: '5+', label: 'Years Experience' },
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
  'Quality over volume — we prioritize the right fit over filling positions quickly',
  'Process-driven approach with structured interviews and assessments',
  'Alignment with your company culture and long-term goals',
  'Focus on long-term stability and retention, not just quick placements',
  'Dedicated account management and ongoing support',
  'Deep understanding of the Philippine job market',
];

const testimonials = [
  {
    quote:
      '"WRS helped us find exceptional talent that aligned perfectly with our culture. Their process was thorough and professional."',
    author: 'Maria Santos',
    title: 'HR Director, Tech Innovations Inc.',
  },
  {
    quote:
      '"The executive search team found us a CFO who transformed our financial operations. Exceptional results."',
    author: 'James Chen',
    title: 'CEO, Growth Partners PH',
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
            subtitle="Real stories from real clients who trusted us with their talent needs"
          />
          <div className="grid gap-8 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8">
                <blockquote className="mb-4 text-lg font-serif italic text-text-dark">
                  {testimonial.quote}
                </blockquote>
                <div>
                  <div className="font-bold text-gold">{testimonial.author}</div>
                  <div className="text-sm text-text-soft">{testimonial.title}</div>
                </div>
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
