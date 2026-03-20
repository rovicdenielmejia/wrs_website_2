import { PageHeader } from '@/components/sections/hero';
import { Section } from '@/components/sections/section';

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        label="Legal"
        title="Privacy Policy"
        subtitle="Last updated: March 2026"
      />

      <Section alt>
        <div className="container">
          <div className="mx-auto max-w-3xl prose prose-invert">
            <div className="space-y-8 text-text-soft">
              <section>
                <h2 className="text-2xl font-bold text-gold mb-4">1. Information We Collect</h2>
                <p>
                  We collect information you provide directly to us, such as when you submit job
                  applications, contact forms, or consultation requests. This may include your name,
                  email address, phone number, resume/CV, employment history, and other relevant
                  information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gold mb-4">2. How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide and improve our recruitment and HR services</li>
                  <li>Process job applications and consultations</li>
                  <li>Communicate with you about opportunities and services</li>
                  <li>Match candidates with suitable positions</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gold mb-4">3. Information Sharing</h2>
                <p>
                  We do not sell, trade, or rent your personal information to third parties. We may
                  share your information with:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Employers when you apply for positions</li>
                  <li>Service providers who assist in our operations</li>
                  <li>Legal authorities when required by law</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gold mb-4">4. Data Security</h2>
                <p>
                  We implement appropriate technical and organizational measures to protect your
                  personal information against unauthorized access, alteration, disclosure, or
                  destruction.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gold mb-4">5. Your Rights</h2>
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Opt-out of marketing communications</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gold mb-4">6. Cookies</h2>
                <p>
                  We use cookies to enhance your browsing experience. You can control cookie
                  settings through your browser preferences.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gold mb-4">7. Contact Us</h2>
                <p>
                  For questions about this Privacy Policy, contact us at{' '}
                  <a href="mailto:wrs.recruitment.hr@gmail.com" className="text-accent-blue hover:underline">
                    wrs.recruitment.hr@gmail.com
                  </a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
