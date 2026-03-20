import { PageHeader } from '@/components/sections/hero';
import { Section } from '@/components/sections/section';

export default function TermsPage() {
  return (
    <>
      <PageHeader
        label="Legal"
        title="Terms of Service"
        subtitle="Last updated: March 2026"
      />

      <Section alt>
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <div className="space-y-8 text-text-soft">
              <section>
                <h2 className="text-2xl font-bold text-gold mb-4">1. Acceptance of Terms</h2>
                <p>
                  By accessing and using the Workforce Recruitment & HR Solutions PH website and
                  services, you agree to be bound by these Terms of Service. If you do not agree
                  to these terms, please do not use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gold mb-4">2. Services Description</h2>
                <p>
                  We provide recruitment, staffing, and HR consulting services including but not
                  limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Talent acquisition and placement</li>
                  <li>Executive search</li>
                  <li>Contract staffing</li>
                  <li>HR consulting</li>
                  <li>Career coaching and resume support</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gold mb-4">3. User Responsibilities</h2>
                <p>By using our services, you agree to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide accurate and truthful information</li>
                  <li>Not use our services for unlawful purposes</li>
                  <li>Respect the confidentiality of other users</li>
                  <li>Not interfere with the proper operation of our services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gold mb-4">4. Job Seekers</h2>
                <p>
                  By submitting your resume and information through our platform, you authorize us
                  to share your information with potential employers for recruitment purposes. We
                  do not guarantee employment or specific job placements.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gold mb-4">5. Employers</h2>
                <p>
                  By posting job opportunities or engaging our services, you agree to provide
                  accurate job descriptions and to comply with all applicable employment laws and
                  regulations.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gold mb-4">6. Intellectual Property</h2>
                <p>
                  All content on this website, including text, graphics, logos, and software, is
                  the property of Workforce Recruitment & HR Solutions PH and is protected by
                  intellectual property laws.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gold mb-4">7. Limitation of Liability</h2>
                <p>
                  We are not liable for any direct, indirect, incidental, or consequential damages
                  arising from your use of our services. We do not guarantee the accuracy of
                  third-party information or the outcomes of job placements.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gold mb-4">8. Privacy</h2>
                <p>
                  Your use of our services is also governed by our Privacy Policy. Please review
                  it to understand how we collect and use your information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gold mb-4">9. Modifications</h2>
                <p>
                  We reserve the right to modify these Terms of Service at any time. Changes will
                  be effective upon posting on this website. Your continued use of our services
                  constitutes acceptance of the modified terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gold mb-4">10. Governing Law</h2>
                <p>
                  These Terms of Service are governed by and construed in accordance with the
                  laws of the Philippines. Any disputes shall be subject to the exclusive
                  jurisdiction of Philippine courts.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gold mb-4">11. Contact</h2>
                <p>
                  For questions about these Terms of Service, contact us at{' '}
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
