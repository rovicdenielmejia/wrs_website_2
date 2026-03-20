import Link from 'next/link';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { PageHeader } from '@/components/sections/hero';
import { Section, SectionHeader } from '@/components/sections/section';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CTASection } from '@/components/sections/cta';

const jobSeekerServices = [
  {
    id: 'job-matching',
    icon: '🔍',
    title: 'Job Matching',
    description: 'Personalized job recommendations based on your skills, experience, and career goals.',
    features: [
      'Skills and experience analysis',
      'Career goal alignment',
      'Personalized job alerts',
      'Application tracking support',
      'Interview preparation tips',
    ],
  },
  {
    id: 'resume-support',
    icon: '📄',
    title: 'Resume Support',
    description: 'Professional resume crafting and optimization to showcase your best qualifications.',
    features: [
      'Resume review and feedback',
      'ATS-optimized formatting',
      'Keyword optimization',
      'Achievement highlighting',
      'Cover letter crafting',
    ],
  },
  {
    id: 'interview-coaching',
    icon: '🎓',
    title: 'Interview Coaching',
    description: 'Expert coaching to help you ace your interviews and land your dream job.',
    features: [
      'Mock interview sessions',
      'Common questions preparation',
      'Body language coaching',
      'Company research techniques',
      'Salary negotiation tips',
    ],
  },
  {
    id: 'remote-careers',
    icon: '🌍',
    title: 'Remote Careers',
    description: 'Access to remote and hybrid opportunities for flexible work arrangements.',
    features: [
      'Remote job opportunities',
      'Work-from-home positions',
      'Hybrid role options',
      'International opportunities',
      'Flexible scheduling roles',
    ],
  },
];

export default function JobSeekersPage() {
  return (
    <>
      <PageHeader
        label="For Job Seekers"
        title="Advance Your Career"
        subtitle="Let us help you find the perfect opportunity that matches your skills and aspirations"
      />

      <Section alt>
        <div className="container">
          <SectionHeader
            label="Our Job Seeker Services"
            title="Your Career Partner"
            subtitle="From job matching to interview coaching, we're here to support your career journey"
          />
          <div className="grid gap-8 md:grid-cols-2">
            {jobSeekerServices.map((service) => (
              <Card key={service.id} id={service.id} className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">{service.icon}</span>
                  <h3 className="text-xl font-bold text-gold">{service.title}</h3>
                </div>
                <p className="text-sm text-text-soft mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-text-soft">
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />
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
            label="Join Our Talent Network"
            title="Submit Your Resume"
            subtitle="Let us know you're interested and we'll reach out when the right opportunity arises"
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
                  Current Location *
                </label>
                <select
                  required
                  className="w-full rounded-sm border-2 border-text-muted bg-white px-4 py-2.5 text-text-light focus:border-gold focus:outline-none"
                >
                  <option value="">Select location</option>
                  <option>Metro Manila</option>
                  <option>Cebu</option>
                  <option>Davao</option>
                  <option>Other Philippines</option>
                  <option>International</option>
                  <option>Remote</option>
                </select>
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-text-dark">
                  Years of Experience *
                </label>
                <select
                  required
                  className="w-full rounded-sm border-2 border-text-muted bg-white px-4 py-2.5 text-text-light focus:border-gold focus:outline-none"
                >
                  <option value="">Select experience</option>
                  <option>Entry Level (0-1 years)</option>
                  <option>Junior (1-3 years)</option>
                  <option>Mid-Level (3-5 years)</option>
                  <option>Senior (5-10 years)</option>
                  <option>Executive (10+ years)</option>
                </select>
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-text-dark">
                  Resume (PDF, DOC, DOCX) *
                </label>
                <input
                  type="file"
                  required
                  accept=".pdf,.doc,.docx"
                  className="w-full rounded-sm border-2 border-text-muted bg-white px-4 py-2.5 text-text-light file:mr-4 file:rounded-sm file:border-0 file:bg-accent-blue file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-text-dark">
                  Cover Letter / Message
                </label>
                <textarea
                  rows={4}
                  className="w-full rounded-sm border-2 border-text-muted bg-white px-4 py-3 text-text-light focus:border-gold focus:outline-none resize-none"
                  placeholder="Tell us about yourself and what you're looking for..."
                />
              </div>
              <Button type="submit" className="w-full" size="lg">
                Submit Your Resume →
              </Button>
              <p className="text-xs text-text-soft text-center">
                By submitting, you agree to our Privacy Policy and consent to be contacted
                about relevant opportunities.
              </p>
            </form>
          </Card>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
