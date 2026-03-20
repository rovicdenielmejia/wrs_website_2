import { PageHeader } from '@/components/sections/hero';
import { Section, SectionHeader } from '@/components/sections/section';
import { Card } from '@/components/ui/card';

const employerFAQs = [
  {
    q: 'What services does WRS provide?',
    a: 'We offer workforce recruitment and HR support services, including: Strategic talent acquisition, Volume & project-based hiring, Monthly recruitment partner support, Executive search, Workforce planning & HR system guidance. We tailor each engagement to your business needs.',
  },
  {
    q: 'How long does the recruitment process take?',
    a: 'It depends on the role complexity and level: Entry- and mid-level roles: 2–4 weeks, Specialist or leadership roles: 4–8+ weeks. We keep you informed with regular progress updates.',
  },
  {
    q: 'How do you screen candidates?',
    a: 'We use structured screening, including: Resume evaluation, Skills and experience assessment, Behavioral interview, Job-specific criteria alignment, Reference checks (if requested). This improves match quality and reduces hiring risk.',
  },
  {
    q: 'Do you guarantee placements?',
    a: 'Yes: we offer a replacement support period based on the engagement model you select (e.g., 30–60 days). If a candidate leaves within this period, we\'ll re-support you without additional fees (conditions apply).',
  },
  {
    q: 'How do you charge for your services?',
    a: 'We have flexible engagement options for SMEs: Per-Hire Recruitment: ₱10,000–₱18,000 per hire, Growth Support (Monthly): ₱30,000–₱60,000/mo, Enterprise / Retainer: ₱60,000–₱120,000+/mo. Final pricing depends on role level, volume, and project scope.',
  },
  {
    q: 'Can I negotiate pricing for high-volume hiring?',
    a: 'Yes: we offer customized pricing for stores or teams hiring multiple roles at once. Contact us for a tailored proposal.',
  },
  {
    q: 'How do we start an engagement?',
    a: 'Just book a consultation or reach out via our contact form. We\'ll clarify your needs, share a proposal, and confirm scope before starting.',
  },
  {
    q: 'Do you help with HR policy or onboarding support?',
    a: 'Yes: we provide advisory and consulting support to help improve onboarding processes, documentation, and basic HR systems for employers.',
  },
];

const jobSeekerFAQs = [
  {
    q: 'Do you help job seekers find jobs?',
    a: 'Absolutely. Our Job Seeker Services include: Job matching, Resume & career support, Interview coaching, Remote job guidance. All services are designed to help you secure the right opportunity.',
  },
  {
    q: 'How do you match candidates to jobs?',
    a: 'We evaluate your experience, skills, and job preferences; we then match you with roles aligned with your profile. We also support your interview preparation.',
  },
  {
    q: 'Can you help with my resume?',
    a: 'Yes: we provide resume support to help highlight your strengths and increase interview invitations.',
  },
  {
    q: 'Is there a fee for job seekers?',
    a: 'No: connecting qualified candidates with employers is free for job seekers. Coaching and career support services may have optional engagement fees.',
  },
  {
    q: 'Can you support remote/online hiring?',
    a: 'Yes: we match candidates with remote and work-from-home opportunities and support the hiring process end-to-end.',
  },
];

const generalFAQs = [
  {
    q: 'Do you work nationwide?',
    a: 'Yes: we support employers and job seekers across the Philippines.',
  },
  {
    q: 'How do I contact you for support?',
    a: 'You can get in touch via: Contact form on the website, Email or phone, Social media channels. We aim to respond within 1–2 business days.',
  },
];

export default function FAQPage() {
  return (
    <>
      <PageHeader
        label="Support"
        title="Frequently Asked Questions"
        subtitle="Whether you're an employer or a job seeker, here are answers to the questions we get asked most often."
      />

      <Section alt>
        <div className="container">
          <SectionHeader
            label="Employers"
            title="For Employers"
            subtitle="Common questions from businesses looking to hire talent"
          />
          <div className="space-y-4">
            {employerFAQs.map((faq, index) => (
              <Card key={index} className="p-6">
                <h3 className="font-bold text-gold mb-3">{faq.q}</h3>
                <p className="text-sm text-text-soft whitespace-pre-line">{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="container">
          <SectionHeader
            label="Job Seekers"
            title="For Job Seekers"
            subtitle="Common questions from professionals looking for opportunities"
          />
          <div className="space-y-4">
            {jobSeekerFAQs.map((faq, index) => (
              <Card key={index} className="p-6">
                <h3 className="font-bold text-gold mb-3">{faq.q}</h3>
                <p className="text-sm text-text-soft whitespace-pre-line">{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section alt>
        <div className="container">
          <SectionHeader
            label="General"
            title="General Inquiries"
            subtitle="Other common questions about our services"
          />
          <div className="space-y-4">
            {generalFAQs.map((faq, index) => (
              <Card key={index} className="p-6">
                <h3 className="font-bold text-gold mb-3">{faq.q}</h3>
                <p className="text-sm text-text-soft whitespace-pre-line">{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
