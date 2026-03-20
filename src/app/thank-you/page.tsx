import Link from 'next/link';
import { CheckCircle } from 'lucide-react';
import { PageHeader } from '@/components/sections/hero';
import { Section, SectionHeader } from '@/components/sections/section';
import { Button } from '@/components/ui/button';

export default function ThankYouPage() {
  return (
    <>
      <PageHeader
        label="Thank You"
        title="Message Received!"
        subtitle="We've received your submission and will be in touch soon."
      />

      <Section alt>
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-6xl mb-6">✅</div>
            
            <SectionHeader
              title="What Happens Next?"
              subtitle=""
            />
            
            <div className="space-y-6 text-left mt-8">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gold/20">
                  <span className="font-bold text-gold">1</span>
                </div>
                <div>
                  <h4 className="font-bold text-gold">Review</h4>
                  <p className="text-sm text-text-soft">
                    Our team will review your inquiry or application within 24 hours.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gold/20">
                  <span className="font-bold text-gold">2</span>
                </div>
                <div>
                  <h4 className="font-bold text-gold">Response</h4>
                  <p className="text-sm text-text-soft">
                    We'll reach out via email or phone to discuss the next steps.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gold/20">
                  <span className="font-bold text-gold">3</span>
                </div>
                <div>
                  <h4 className="font-bold text-gold">Action</h4>
                  <p className="text-sm text-text-soft">
                    Together, we'll take the next steps toward achieving your goals.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <Button asChild>
                <Link href="/">Back to Home</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/jobs">Browse Jobs</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
