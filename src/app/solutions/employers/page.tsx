import Link from 'next/link';
import { CheckCircle, ArrowRight, AlertCircle } from 'lucide-react';
import { PageHeader } from '@/components/sections/hero';
import { Section, SectionHeader } from '@/components/sections/section';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CTASection } from '@/components/sections/cta';

const challenges = [
  {
    title: 'Difficulty Finding Qualified Talent',
    description: 'You receive many applications, but few truly qualified candidates.',
    solution: 'We implement targeted sourcing, structured screening, and role alignment strategies to ensure you meet candidates who match both skills and culture.',
  },
  {
    title: 'High Employee Turnover',
    description: 'Frequent resignations disrupt operations and increase hiring costs.',
    solution: 'We focus on better role profiling, expectation alignment, and onboarding structure support to improve retention outcomes.',
  },
  {
    title: 'Unstructured Hiring Processes',
    description: 'Without a clear system, hiring becomes reactive and inconsistent.',
    solution: 'We design recruitment workflows and evaluation frameworks that create clarity, consistency, and better decision-making.',
  },
  {
    title: 'Limited HR Infrastructure',
    description: 'Many SMEs lack formal HR systems, documentation, or workforce planning tools.',
    solution: 'We provide practical HR consulting support to help formalize processes without overcomplicating operations.',
  },
  {
    title: 'Scaling Too Fast Without Workforce Planning',
    description: 'Rapid growth without planning often leads to staffing gaps and performance misalignment.',
    solution: 'Our workforce planning and advisory support ensures hiring aligns with business expansion goals.',
  },
  {
    title: 'Leadership Hiring Risks',
    description: 'Executive hiring mistakes can be costly and disruptive.',
    solution: 'Through structured executive search and confidential screening, we minimize risk and improve leadership fit.',
  },
];

const solutions = [
  {
    icon: '🎯',
    title: 'Talent Acquisition',
    description: 'Hiring the right talent requires structure, strategy, and alignment. Our talent acquisition service ensures you receive pre-qualified, culture-aligned candidates through systematic sourcing and evaluation.',
    benefits: ['Reduced time-to-hire', 'Higher-quality candidate pool', 'Lower hiring risk', 'Structured screening process'],
  },
  {
    icon: '👔',
    title: 'Executive Search',
    description: 'Leadership roles require precision and discretion. We conduct strategic executive search engagements to help you secure senior-level professionals aligned with your company vision.',
    ideal: ['Directors', 'Senior Managers', 'Specialized leadership roles', 'Confidential searches'],
  },
  {
    icon: '📋',
    title: 'Contract Staffing',
    description: 'When flexibility matters, contract staffing offers scalable workforce support without long-term commitments.',
    best: ['Project-based hiring', 'Seasonal demand', 'Temporary operational gaps', 'Business expansion phases'],
  },
  {
    icon: '📊',
    title: 'Workforce Planning',
    description: 'Recruitment without planning leads to instability. We support employers in designing workforce strategies aligned with operational goals.',
    helps: ['Identify workforce gaps', 'Align hiring with forecasts', 'Structure scalable team models', 'Reduce reactive hiring'],
  },
  {
    icon: '🏢',
    title: 'HR Consulting',
    description: 'Strong recruitment must be supported by structured HR systems. Our HR consulting services help improve internal processes, onboarding, and role clarity.',
    areas: ['Recruitment workflow optimization', 'Onboarding process structure', 'Role documentation guidance', 'Basic HR framework alignment'],
  },
];

const pricingPlans = [
  {
    name: 'Starter',
    price: '₱10,000 – ₱18,000',
    period: 'per successful hire',
    description: 'Essential Recruitment Support. Best for: Startups & small teams hiring selectively.',
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
    description: 'Strategic Hiring + HR Support. Best for: SMEs scaling operations.',
    popular: true,
    options: ['₱12,000 – ₱20,000 per hire (lower rate for multiple roles)', '₱30,000 – ₱60,000 per month (ongoing support)'],
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
    description: 'Full Workforce Recruitment & HR Solutions. Best for: Large teams, rapid scaling, long-term partnership.',
    custom: true,
    options: ['Custom Retainer: ₱60,000 – ₱120,000 per month (scope & volume dependent)', 'Executive Search: ₱25,000 – ₱80,000 per role (senior / specialized roles)'],
    features: [
      'Dedicated recruitment support (RPO-style model)',
      'Executive & leadership hiring',
      'Workforce planning & forecasting',
      'HR systems advisory',
      'Talent pipeline development',
      'Confidential search support',
      'Ongoing strategic consultation',
    ],
  },
];

const comparisonFeatures = [
  { feature: 'Talent Acquisition', starter: true, growth: true, enterprise: true },
  { feature: 'Executive Search', starter: false, growth: 'Optional', enterprise: true },
  { feature: 'Workforce Planning', starter: false, growth: true, enterprise: true },
  { feature: 'HR Consulting', starter: 'Basic', growth: 'Moderate', enterprise: 'Advanced' },
  { feature: 'Dedicated Recruitment Support', starter: false, growth: 'Partial', enterprise: true },
  { feature: 'Strategic Advisory', starter: false, growth: true, enterprise: true },
];

const whyTrust = [
  'Integrated Recruitment + HR Systems Approach',
  'Structured & Systematic Candidate Screening',
  'Philippine Workforce Market Expertise',
  'Confidential & Professional Handling',
  'Customized Solutions (Not Templates)',
  'Long-Term Partnership Mindset',
];

const businessImpact = [
  'Faster hiring cycles',
  'Improved employee retention',
  'Reduced hiring mistakes',
  'Better workforce stability',
  'Stronger operational continuity',
];

export default function EmployersPage() {
  return (
    <>
      <PageHeader
        label="Employer Solutions"
        title="Stronger Teams. Structured HR Systems. Sustainable Growth."
        subtitle="At WRS, we help businesses build high-performing teams through strategic recruitment, workforce planning, and HR system support. We don't just fill positions. We strengthen your workforce foundation so your organization can grow with confidence."
      />

      <Section alt>
        <div className="container">
          <SectionHeader
            label="Employer Challenges"
            title="Common Pain Points We Address"
            subtitle="Growing businesses often face workforce challenges that slow momentum and affect performance. At WRS, we address these issues through structured recruitment systems and practical HR support."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {challenges.map((challenge) => (
              <Card key={challenge.title} className="p-6">
                <h3 className="font-bold text-gold mb-2">{challenge.title}</h3>
                <p className="text-sm text-text-soft mb-4">{challenge.description}</p>
                <div className="border-t border-gold/20 pt-4">
                  <p className="text-xs font-semibold text-gold mb-2">How We Help:</p>
                  <p className="text-sm text-text-soft">{challenge.solution}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section dark>
        <div className="container">
          <SectionHeader
            label="Our Employer Solutions"
            title="Our Employer Solutions"
            subtitle="Comprehensive services to help you build and manage high-performing teams"
          />
          <div className="space-y-8">
            {solutions.map((solution) => (
              <Card key={solution.title} className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <span className="text-5xl">{solution.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gold mb-2">{solution.title}</h3>
                    <p className="text-sm text-text-soft mb-4">{solution.description}</p>
                    <div className="grid gap-4 md:grid-cols-2">
                      {solution.benefits && (
                        <div>
                          <h4 className="text-sm font-semibold text-gold mb-2">What You Gain:</h4>
                          <ul className="space-y-1">
                            {solution.benefits.map((b) => (
                              <li key={b} className="flex items-start gap-2 text-sm text-text-soft">
                                <CheckCircle className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                                {b}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {solution.ideal && (
                        <div>
                          <h4 className="text-sm font-semibold text-gold mb-2">Ideal For:</h4>
                          <ul className="space-y-1">
                            {solution.ideal.map((b) => (
                              <li key={b} className="flex items-start gap-2 text-sm text-text-soft">
                                <CheckCircle className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                                {b}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {solution.best && (
                        <div>
                          <h4 className="text-sm font-semibold text-gold mb-2">Best For:</h4>
                          <ul className="space-y-1">
                            {solution.best.map((b) => (
                              <li key={b} className="flex items-start gap-2 text-sm text-text-soft">
                                <CheckCircle className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                                {b}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {solution.helps && (
                        <div>
                          <h4 className="text-sm font-semibold text-gold mb-2">We Help You:</h4>
                          <ul className="space-y-1">
                            {solution.helps.map((b) => (
                              <li key={b} className="flex items-start gap-2 text-sm text-text-soft">
                                <CheckCircle className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                                {b}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {solution.areas && (
                        <div>
                          <h4 className="text-sm font-semibold text-gold mb-2">Support Areas Include:</h4>
                          <ul className="space-y-1">
                            {solution.areas.map((b) => (
                              <li key={b} className="flex items-start gap-2 text-sm text-text-soft">
                                <CheckCircle className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                                {b}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section alt id="pricing-heading">
        <div className="container">
          <SectionHeader
            label="Pricing"
            title="Employer Pricing Plans"
            subtitle="Flexible engagement options designed for startups, SMEs, and enterprises."
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
                <p className="text-xs text-text-soft mb-2">{plan.period}</p>
                <p className="text-sm text-text-soft mb-4">{plan.description}</p>
                {plan.options && (
                  <div className="mb-4 p-4 bg-navy/50 rounded">
                    <p className="text-xs text-gold font-semibold mb-2">Options:</p>
                    {plan.options.map((opt) => (
                      <p key={opt} className="text-xs text-text-soft mb-1">• {opt}</p>
                    ))}
                  </div>
                )}
                {plan.custom && (
                  <div className="mb-4 p-4 bg-navy/50 rounded">
                    <p className="text-xs text-gold font-semibold mb-2">Pricing Options:</p>
                    {plan.options.map((opt) => (
                      <p key={opt} className="text-xs text-text-soft mb-1">• {opt}</p>
                    ))}
                  </div>
                )}
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-text-soft">
                      <CheckCircle className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
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
            label="Comparison"
            title="Plan Comparison Overview"
            subtitle=""
          />
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gold/20">
                  <th className="text-left py-4 px-4 text-sm font-bold text-gold">Feature</th>
                  <th className="text-center py-4 px-4 text-sm font-bold text-gold">Starter</th>
                  <th className="text-center py-4 px-4 text-sm font-bold text-gold">Growth</th>
                  <th className="text-center py-4 px-4 text-sm font-bold text-gold">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row) => (
                  <tr key={row.feature} className="border-b border-gold/10">
                    <td className="py-4 px-4 text-sm text-text-soft">{row.feature}</td>
                    <td className="py-4 px-4 text-center text-sm">
                      {typeof row.starter === 'boolean' ? (
                        row.starter ? <CheckCircle className="mx-auto h-5 w-5 text-gold" /> : <span className="text-text-muted">—</span>
                      ) : (
                        <span className="text-xs text-text-soft">{row.starter}</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center text-sm">
                      {typeof row.growth === 'boolean' ? (
                        row.growth ? <CheckCircle className="mx-auto h-5 w-5 text-gold" /> : <span className="text-text-muted">—</span>
                      ) : (
                        <span className="text-xs text-text-soft">{row.growth}</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center text-sm">
                      {typeof row.enterprise === 'boolean' ? (
                        row.enterprise ? <CheckCircle className="mx-auto h-5 w-5 text-gold" /> : <span className="text-text-muted">—</span>
                      ) : (
                        <span className="text-xs text-text-soft">{row.enterprise}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      <Section alt>
        <div className="container">
          <SectionHeader
            label="Why Employers Trust WRS"
            title="Why Employers Trust WRS"
            subtitle="Choosing the right Workforce Recruitment & HR Solutions PH partner is a strategic decision. Here's why companies work with us:"
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {whyTrust.map((item) => (
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
            label="Business Impact"
            title="The Business Impact"
            subtitle="Employers working with structured workforce systems experience:"
          />
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-5">
            {businessImpact.map((item) => (
              <Card key={item} className="p-4 text-center">
                <span className="text-sm text-text-soft">{item}</span>
              </Card>
            ))}
          </div>
          <p className="text-center mt-8 text-gold font-medium">
            We focus on sustainable growth, not short-term placements.
          </p>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
