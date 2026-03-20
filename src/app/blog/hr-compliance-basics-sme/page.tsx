import Link from 'next/link';
import Image from 'next/image';
import { PageHeader } from '@/components/sections/hero';
import { Section } from '@/components/sections/section';
import { Card, CardContent } from '@/components/ui/card';
import { CTASection } from '@/components/sections/cta';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const relatedPosts = [
  {
    slug: 'basic-hr-systems-sme',
    title: 'Why SMEs Need Basic HR Systems',
    image: 'Why-SMEs-Need-Basic-HR-Systems,-Even-Without-a-Full-HR-Department.jpg',
  },
  {
    slug: 'hire-smarter-2026',
    title: 'How to Hire Smarter in 2026',
    image: 'How-to-Hire-Smarter-in-2026.jpg',
  },
  {
    slug: 'pre-screening-saves-time',
    title: '7 Hiring Mistakes SMEs Make, And How to Avoid Them',
    image: '7-Hiring-Mistakes-SMEs-Make,-And-How-to-Avoid-Them.jpg',
  },
];

export default function HRComplianceSMESPage() {
  return (
    <>
      <PageHeader
        label="BLOG"
        title="HR Compliance Basics Every SME Should Know"
        subtitle="By WRS Team | December 19, 2025 | 6 min read"
      />

      <Section alt>
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <Image 
                src="/blog/Blogs Assets/HR-Compliance-Basics-Every-SME-Should-Know.jpg" 
                alt="HR Compliance Basics Every SME Should Know"
                width={800}
                height={400}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gold mt-8 mb-4">Introduction</h2>
              <p className="text-text-soft mb-6">
                HR compliance is not just administrative; it protects businesses from legal exposure and operational risk.
              </p>
              <p className="text-text-soft mb-6">
                For SMEs in the Philippines, compliance fundamentals are critical for stability and credibility.
              </p>

              <h2 className="text-2xl font-bold text-gold mt-8 mb-4">1. Employment Contracts</h2>
              <p className="text-text-soft mb-4">
                Employment contracts should clearly define:
              </p>
              <ul className="list-disc pl-6 mb-4 text-text-soft space-y-2">
                <li>Compensation</li>
                <li>Working hours</li>
                <li>Benefits</li>
                <li>Probationary terms</li>
                <li>Termination conditions</li>
              </ul>
              <p className="text-text-soft mb-6">
                Clear documentation prevents disputes and sets expectations from day one.
              </p>

              <h2 className="text-2xl font-bold text-gold mt-8 mb-4">2. Government-Mandated Contributions</h2>
              <p className="text-text-soft mb-4">
                Employers must ensure timely remittance of:
              </p>
              <ul className="list-disc pl-6 mb-4 text-text-soft space-y-2">
                <li>SSS</li>
                <li>PhilHealth</li>
                <li>Pag-IBIG</li>
              </ul>
              <p className="text-text-soft mb-6">
                Non-compliance results in financial penalties and reputational damage.
              </p>

              <h2 className="text-2xl font-bold text-gold mt-8 mb-4">3. Documented Policies</h2>
              <p className="text-text-soft mb-4">
                SMEs should maintain written policies covering:
              </p>
              <ul className="list-disc pl-6 mb-6 text-text-soft space-y-2">
                <li>Leave entitlements</li>
                <li>Attendance</li>
                <li>Code of conduct</li>
                <li>Performance management</li>
              </ul>
              <p className="text-text-soft mb-6">
                Documentation protects both employer and employee and supports consistent decisions.
              </p>

              <h2 className="text-2xl font-bold text-gold mt-8 mb-4">4. Payroll Accuracy</h2>
              <p className="text-text-soft mb-4">
                Payroll errors damage employee trust and can create compliance issues.
              </p>
              <p className="text-text-soft mb-4">
                Ensure:
              </p>
              <ul className="list-disc pl-6 mb-6 text-text-soft space-y-2">
                <li>Accurate salary calculations</li>
                <li>Transparent, itemized pay slips</li>
                <li>On-time disbursements</li>
              </ul>
              <p className="text-text-soft mb-6">
                Consistency builds credibility and supports retention.
              </p>

              <h2 className="text-2xl font-bold text-gold mt-8 mb-4">Why Compliance Protects Businesses</h2>
              <p className="text-text-soft mb-4">
                Compliance reduces:
              </p>
              <ul className="list-disc pl-6 mb-6 text-text-soft space-y-2">
                <li>Legal disputes</li>
                <li>Government penalties</li>
                <li>Employee dissatisfaction</li>
              </ul>
              <p className="text-text-soft mb-6">
                It builds operational trust with employees, regulators, and partners.
              </p>

              <h2 className="text-2xl font-bold text-gold mt-8 mb-4">Conclusion</h2>
              <p className="text-text-soft mb-6">
                HR compliance is foundational. Simple, structured systems prevent complex problems later.
              </p>
              <p className="text-text-soft mb-6">
                SMEs that invest in contracts, contributions, policies, and accurate payroll protect their growth and reputation.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-text-muted">
              <Link href="/blog" className="inline-flex items-center gap-2 text-accent-blue hover:underline">
                <ArrowLeft className="h-4 w-4" /> Back to Blog
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="container">
          <h2 className="text-2xl font-bold text-gold mb-8 text-center">You might also like</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {relatedPosts.map((post) => (
              <Card key={post.slug} className="overflow-hidden hover:shadow-card-hover transition-shadow">
                <div className="h-40 overflow-hidden">
                  <Image 
                    src={`/blog/Blogs Assets/${post.image}`} 
                    alt={post.title}
                    width={400}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-sm font-bold text-gold line-clamp-2">
                    <Link href={`/blog/${post.slug}`} className="hover:text-accent-blue transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-1 text-xs font-semibold text-accent-blue hover:text-accent-blue-hover mt-2">
                    Read more <ArrowRight className="h-3 w-3" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
