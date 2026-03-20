'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { PageHeader } from '@/components/sections/hero';
import { Section, SectionHeader } from '@/components/sections/section';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
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
        label="Contact Us"
        title="Get in Touch"
        subtitle="We'd love to hear from you. Reach out and let's start a conversation."
      />

      <Section alt>
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeader
                label="Contact Information"
                title="Reach Out"
                subtitle="Fill out the form and our team will get back to you within 24 hours."
              />
              
              <div className="space-y-6 mt-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/20">
                    <Mail className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gold">Email</h4>
                    <a href="mailto:wrs.recruitment.hr@gmail.com" className="text-text-soft hover:text-accent-blue transition-colors">
                      wrs.recruitment.hr@gmail.com
                    </a>
                    <a href="mailto:wrs.workforce.hr@gmail.com" className="block text-text-soft hover:text-accent-blue transition-colors">
                      wrs.workforce.hr@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/20">
                    <Phone className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gold">Phone</h4>
                    <a href="tel:+639755636276" className="text-text-soft hover:text-accent-blue transition-colors">
                      +63 975 563 6276
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/20">
                    <MapPin className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gold">Location</h4>
                    <p className="text-text-soft">Philippines</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/20">
                    <Clock className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gold">Business Hours</h4>
                    <p className="text-text-soft">Monday - Friday: 9:00 AM - 6:00 PM (PHT)</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-xl font-bold text-gold mb-2">Message Sent!</h3>
                  <p className="text-text-soft">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
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
                      Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full rounded-sm border-2 border-text-muted bg-white px-4 py-2.5 text-text-light focus:border-gold focus:outline-none"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="employer">Employer / Hiring</option>
                      <option value="job-seeker">Job Seeker</option>
                      <option value="partnership">Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-text-dark">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full rounded-sm border-2 border-text-muted bg-white px-4 py-3 text-text-light focus:border-gold focus:outline-none resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Send Message →
                  </Button>
                </form>
              )}
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
}
