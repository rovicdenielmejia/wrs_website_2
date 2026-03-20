'use client';

import { useState } from 'react';
import { PageHeader } from '@/components/sections/hero';
import { Section, SectionHeader } from '@/components/sections/section';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function BookConsultationPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    type: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHeader
        label="Schedule a Call"
        title="Book a Consultation"
        subtitle="Let's discuss how we can help you build your dream team or advance your career"
      />

      <Section alt>
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeader
                label="What to Expect"
                title="Our Consultation Process"
                subtitle=""
              />
              
              <div className="space-y-6 mt-8">
                {[
                  {
                    step: '01',
                    title: 'Initial Meeting',
                    description: 'We discuss your needs, challenges, and goals in detail.',
                  },
                  {
                    step: '02',
                    title: 'Needs Assessment',
                    description: 'We analyze your requirements and identify the best solutions.',
                  },
                  {
                    step: '03',
                    title: 'Custom Proposal',
                    description: 'We present tailored options that fit your budget and timeline.',
                  },
                  {
                    step: '04',
                    title: 'Action Plan',
                    description: 'We outline the next steps and begin working together.',
                  },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gold/20 text-lg font-bold text-gold">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-bold text-gold">{item.title}</h4>
                      <p className="text-sm text-text-soft">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 rounded-lg bg-navy/50 border border-border">
                <h4 className="font-bold text-gold mb-4">Consultation Topics</h4>
                <ul className="space-y-2 text-sm text-text-soft">
                  <li>• Talent acquisition and recruitment needs</li>
                  <li>• HR consulting and strategy</li>
                  <li>• Executive search requirements</li>
                  <li>• Career guidance and job opportunities</li>
                  <li>• Partnership and collaboration inquiries</li>
                </ul>
              </div>
            </div>

            <Card className="p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-5xl mb-4">📅</div>
                  <h3 className="text-xl font-bold text-gold mb-2">Consultation Requested!</h3>
                  <p className="text-text-soft mb-6">
                    Thank you for your interest. We'll review your request and reach out within
                    24 hours to schedule our consultation.
                  </p>
                  <Button asChild>
                    <a href="/thank-you?type=consultation">Continue</a>
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-text-dark">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full rounded-sm border-2 border-text-muted bg-white px-4 py-2.5 text-text-light focus:border-gold focus:outline-none"
                        placeholder="+63 900 000 0000"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-text-dark">
                      Company (if employer)
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full rounded-sm border-2 border-text-muted bg-white px-4 py-2.5 text-text-light focus:border-gold focus:outline-none"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-text-dark">
                      I am a *
                    </label>
                    <select
                      required
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                      className="w-full rounded-sm border-2 border-text-muted bg-white px-4 py-2.5 text-text-light focus:border-gold focus:outline-none"
                    >
                      <option value="">Select one</option>
                      <option value="employer">Employer / HR Leader</option>
                      <option value="job-seeker">Job Seeker</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-text-dark">
                      Message / How can we help?
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full rounded-sm border-2 border-text-muted bg-white px-4 py-3 text-text-light focus:border-gold focus:outline-none resize-none"
                      placeholder="Tell us about your needs or goals..."
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Schedule Consultation →
                  </Button>

                  <p className="text-xs text-text-soft text-center">
                    By submitting, you agree to be contacted about our services.
                  </p>
                </form>
              )}
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
}
