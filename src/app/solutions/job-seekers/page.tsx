import Link from 'next/link';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { PageHeader } from '@/components/sections/hero';
import { Section, SectionHeader } from '@/components/sections/section';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CTASection } from '@/components/sections/cta';

const challenges = [
  'Knowing where to look for the right fit',
  'Presenting your skills effectively',
  'Performing confidently in interviews',
  'Competing in a crowded talent market',
];

const services = [
  {
    id: 'job-matching',
    icon: '🔍',
    title: 'Job Matching & Placement Support',
    description: 'We connect you with employers looking for real talent, from entry-to-supervisory roles, corporate functions, and remote positions.',
    benefits: ['Personalized job matches', 'Opportunities aligned with your skills', 'Faster interview invitations'],
  },
  {
    id: 'resume-support',
    icon: '📄',
    title: 'Resume & Career Support',
    description: 'A strong resume gets you noticed. We help you organize your professional profile, optimize your resume for quick review, and highlight key strengths.',
    result: 'Higher interview call ratios.',
  },
  {
    id: 'interview-coaching',
    icon: '🎓',
    title: 'Interview Coaching',
    description: "Don't just prepare; perform confidently. Our coaching helps you communicate effectively, handle challenging questions, and present your value clearly.",
    result: 'Better interview performance, more offers.',
  },
  {
    id: 'remote-careers',
    icon: '🌍',
    title: 'Remote & Flexible Career Guidance',
    description: 'Looking for remote work opportunities? We assist you with remote job matching, skills and platform guidance, and remote application best practices.',
    benefits: ['Access global jobs with confidence', 'Remote job matching', 'Skills and platform guidance'],
  },
];

const testimonials = [
  {
    quote: '"Professional and Supportive. The interview coaching and feedback helped me improve my confidence. I secured a better opportunity within weeks."',
    author: 'Marketing Specialist',
  },
  {
    quote: '"Clear Communication Throughout the Process. They helped me tailor my resume and prepare for interviews. I felt guided and informed every step of the way."',
    author: 'Operations Supervisor',
  },
];

const whyChoose = [
  'Personalized job matching',
  'Support from application to placement',
  'Practical resume & interview coaching',
  'Guidance for remote careers',
  'Increased confidence and better job outcomes',
];

const careerProcess = [
  {
    step: '01',
    title: 'Register',
    description: 'Share your profile and preferences with us.',
  },
  {
    step: '02',
    title: 'Submit Resume',
    description: 'Upload your resume so we can match you to roles.',
  },
  {
    step: '03',
    title: 'Job Matching',
    description: 'We surface opportunities that fit your profile.',
  },
  {
    step: '04',
    title: 'Interview Prepare',
    description: 'Prepare with our support and attend employer interviews.',
  },
  {
    step: '05',
    title: 'Placement',
    description: 'Offer and onboarding support.',
  },
  {
    step: '06',
    title: 'Career Growth',
    description: 'Ongoing support and future opportunities.',
  },
];

export default function JobSeekersPage() {
  return (
    <>
      <PageHeader
        label="Job Seeker Solutions"
        title="Empowering Your Career. From Application to Opportunity."
        subtitle="At Workforce Recruitment & HR Solutions PH, we help professionals and job seekers find the right opportunities, improve employability, and advance with confidence. Whether you're entering the workforce, transitioning careers, or seeking remote roles; we support you every step of the way."
      />

      <Section alt>
        <div className="container">
          <SectionHeader
            label="Support"
            title="How We Help You"
            subtitle="We understand that job hunting can be overwhelming. You might struggle with:"
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {challenges.map((challenge) => (
              <Card key={challenge} className="p-4 text-center">
                <span className="text-sm text-text-soft">{challenge}</span>
              </Card>
            ))}
          </div>
          <p className="text-center mt-8 text-gold font-medium">
            We give you tools, guidance, and personalized support to stand out.
          </p>
        </div>
      </Section>

      <Section dark>
        <div className="container">
          <SectionHeader
            label="Services"
            title="Our Job Seeker Services"
            subtitle="Practical support for every stage of your job search journey"
          />
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service) => (
              <Card key={service.id} className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-4xl">{service.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-gold mb-2">{service.title}</h3>
                    <p className="text-sm text-text-soft">{service.description}</p>
                  </div>
                </div>
                {service.benefits && (
                  <>
                    <h4 className="text-sm font-semibold text-gold mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-sm text-text-soft">
                          <CheckCircle className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
                {service.result && (
                  <p className="mt-4 text-sm text-gold font-medium">
                    <span className="text-text-soft">Result:</span> {service.result}
                  </p>
                )}
                <div className="mt-4 pt-4 border-t border-gold/20">
                  <Link href={`/jobs`} className="text-sm text-accent-blue hover:underline">
                    Browse relevant job openings here →
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section alt>
        <div className="container">
          <SectionHeader
            label="Testimonials"
            title="What Job Seekers Say"
            subtitle="Hear from professionals who found success with WRS"
          />
          <div className="grid gap-8 md:grid-cols-2">
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
                <div className="text-sm font-bold text-gold">– {testimonial.author}</div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section dark>
        <div className="container">
          <SectionHeader
            label="Why WRS"
            title="Why Job Seekers Choose WRS"
            subtitle="We don't just help you apply; we help you succeed."
          />
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-5">
            {whyChoose.map((item) => (
              <Card key={item} className="p-4 text-center">
                <CheckCircle className="mx-auto h-6 w-6 text-gold mb-2" />
                <span className="text-sm text-text-soft">{item}</span>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section alt>
        <div className="container">
          <SectionHeader
            label="Your Journey"
            title="Career Process"
            subtitle="From registration to placement and growth."
          />
          <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-6">
            {careerProcess.map((step) => (
              <Card key={step.step} className="p-4 text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gold/20 text-lg font-bold text-gold mb-3">
                  {step.step}
                </div>
                <h4 className="mb-1 font-bold text-gold text-sm">{step.title}</h4>
                <p className="text-xs text-text-soft">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section dark>
        <div className="container">
          <SectionHeader
            label="Apply"
            title="Join Our Talent Network"
            subtitle="Send your details and resume. We'll match you to opportunities and get in touch."
          />
          <Card className="p-8 max-w-2xl mx-auto" id="talent-network">
            <form className="space-y-6">
              <div>
                <label className="mb-2 block text-sm font-semibold text-text-dark">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  className="w-full rounded-sm border-2 border-text-muted bg-white px-4 py-2.5 text-text-light focus:border-gold focus:outline-none"
                  placeholder="Juan dela Cruz"
                />
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-text-dark">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full rounded-sm border-2 border-text-muted bg-white px-4 py-2.5 text-text-light focus:border-gold focus:outline-none"
                    placeholder="juan@email.com"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-text-dark">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full rounded-sm border-2 border-text-muted bg-white px-4 py-2.5 text-text-light focus:border-gold focus:outline-none"
                    placeholder="+63 900 000 0000"
                  />
                </div>
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-text-dark">
                  Message / What are you looking for?
                </label>
                <textarea
                  rows={4}
                  className="w-full rounded-sm border-2 border-text-muted bg-white px-4 py-3 text-text-light focus:border-gold focus:outline-none resize-none"
                  placeholder="Tell us about yourself and what you're looking for..."
                />
              </div>
              <Button type="submit" className="w-full" size="lg">
                Submit Request →
              </Button>
              <p className="text-xs text-text-soft text-center">
                Prefer email? <a href="mailto:wrs.recruitment.hr@gmail.com" className="text-accent-blue hover:underline">Contact us directly</a>.
              </p>
            </form>
          </Card>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
