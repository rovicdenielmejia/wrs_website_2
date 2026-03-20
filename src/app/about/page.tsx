import Link from 'next/link';
import { Target, Eye, Heart, Users } from 'lucide-react';
import { PageHeader } from '@/components/sections/hero';
import { Section, SectionHeader } from '@/components/sections/section';
import { Card } from '@/components/ui/card';
import { CTASection } from '@/components/sections/cta';

const values = [
  {
    icon: '🎯',
    title: 'Quality Over Volume',
    description:
      'We prioritize finding the right fit over quickly filling positions. Every candidate we present is thoroughly vetted.',
  },
  {
    icon: '📋',
    title: 'Process Over Guesswork',
    description:
      'Our structured approach ensures consistency and quality in every placement. We follow proven methodologies.',
  },
  {
    icon: '🤝',
    title: 'Alignment Over Urgency',
    description:
      "We take time to understand your culture and goals. The right placement takes precedence over speed.",
  },
  {
    icon: '📈',
    title: 'Long-Term Stability',
    description:
      'We focus on retention and long-term success. Our placements are built to last, not just to fill seats.',
  },
];

const team = [
  {
    name: 'Rovic Mejia',
    title: 'Founder & HR Director',
    description:
      'Dedicated HR professional with extensive experience in talent acquisition and workforce solutions.',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        label="About Us"
        title="Building Stronger Workforces"
        subtitle="Connecting the Right People to the Right Opportunities"
      />

      <Section alt>
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeader
                label="Our Story"
                title="Your Strategic HR Partner"
                subtitle=""
              />
              <div className="space-y-4 text-text-soft">
                <p>
                  Workforce Recruitment & HR Solutions PH was founded with a clear mission: to help
                  businesses build high-performing teams through strategic talent solutions.
                </p>
                <p>
                  Based in the Philippines, we serve businesses of all sizes—from startups and SMEs
                  to large corporations—across various industries including technology, finance,
                  healthcare, BPO, and more.
                </p>
                <p>
                  Our approach combines deep industry knowledge with a commitment to understanding
                  each client's unique needs. We don't just fill positions; we build lasting
                  partnerships that contribute to long-term organizational success.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 text-center">
                <Target className="mx-auto h-10 w-10 text-gold mb-3" />
                <h4 className="font-bold text-gold mb-2">Our Mission</h4>
                <p className="text-sm text-text-soft">
                  Connecting the right people to the right opportunities through strategic talent
                  solutions.
                </p>
              </Card>
              <Card className="p-6 text-center">
                <Eye className="mx-auto h-10 w-10 text-gold mb-3" />
                <h4 className="font-bold text-gold mb-2">Our Vision</h4>
                <p className="text-sm text-text-soft">
                  To be the most trusted HR partner for Philippine businesses seeking exceptional
                  talent.
                </p>
              </Card>
              <Card className="p-6 text-center">
                <Heart className="mx-auto h-10 w-10 text-gold mb-3" />
                <h4 className="font-bold text-gold mb-2">Our Values</h4>
                <p className="text-sm text-text-soft">
                  Quality, integrity, partnership, and long-term success guide everything we do.
                </p>
              </Card>
              <Card className="p-6 text-center">
                <Users className="mx-auto h-10 w-10 text-gold mb-3" />
                <h4 className="font-bold text-gold mb-2">Our Approach</h4>
                <p className="text-sm text-text-soft">
                  Process-driven, relationship-focused, and committed to delivering measurable
                  results.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </Section>

      <Section dark>
        <div className="container">
          <SectionHeader
            label="Our Values"
            title="What Sets Us Apart"
            subtitle="Four core principles that guide our work"
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <Card key={value.title} className="p-6 text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
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
            label="Our Team"
            title="Meet the People Behind WRS"
            subtitle="Passionate professionals dedicated to your success"
          />
          <div className="grid gap-8 md:grid-cols-3">
            {team.map((member) => (
              <Card key={member.name} className="p-8 text-center">
                <div className="mx-auto h-24 w-24 rounded-full bg-gold/20 flex items-center justify-center mb-4">
                  <span className="text-3xl font-bold text-gold">
                    {member.name.split(' ').map((n) => n[0]).join('')}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-gold">{member.name}</h4>
                <p className="text-sm text-accent-blue mb-4">{member.title}</p>
                <p className="text-sm text-text-soft">{member.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
