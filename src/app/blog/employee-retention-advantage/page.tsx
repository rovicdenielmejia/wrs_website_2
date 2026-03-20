import Link from 'next/link';
import Image from 'next/image';
import { PageHeader } from '@/components/sections/hero';
import { Section } from '@/components/sections/section';
import { Card, CardContent } from '@/components/ui/card';
import { CTASection } from '@/components/sections/cta';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const relatedPosts = [
  {
    slug: 'remote-work-philippines',
    title: 'The Rise of Remote Work in the Philippines',
    image: 'The-Rise-of-Remote-Work-in-the-Philippines.jpg',
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

export default function EmployeeRetentionPage() {
  return (
    <>
      <PageHeader
        label="BLOG"
        title="Why Employee Retention Is the New Competitive Advantage"
        subtitle="By WRS Team | February 27, 2026 | 6 min read"
      />

      <Section alt>
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <Image 
                src="/blog/Blogs Assets/Why-Employee-Retention-Is-the-New-Competitive-Advantage.jpg" 
                alt="Why Employee Retention Is the New Competitive Advantage"
                width={800}
                height={400}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gold mt-8 mb-4">Introduction</h2>
              <p className="text-text-soft mb-6">
                In today's labor market, recruitment alone is not a competitive advantage—retention is.
              </p>
              <p className="text-text-soft mb-6">
                Replacing employees is expensive, disruptive, and time-consuming. Companies that prioritize retention outperform those stuck in constant hiring cycles.
              </p>

              <h2 className="text-2xl font-bold text-gold mt-8 mb-4">The Cost of High Turnover</h2>
              <p className="text-text-soft mb-4">
                Turnover increases:
              </p>
              <ul className="list-disc pl-6 mb-6 text-text-soft space-y-2">
                <li>Recruitment expenses</li>
                <li>Training costs</li>
                <li>Productivity gaps</li>
                <li>Team morale decline</li>
              </ul>
              <p className="text-text-soft mb-6">
                For SMEs, even one key resignation can destabilize operations.
              </p>

              <h2 className="text-2xl font-bold text-gold mt-8 mb-4">Why Retention Drives Performance</h2>
              <p className="text-text-soft mb-4">
                Stable teams:
              </p>
              <ul className="list-disc pl-6 mb-6 text-text-soft space-y-2">
                <li>Develop institutional knowledge</li>
                <li>Improve collaboration</li>
                <li>Increase efficiency</li>
                <li>Strengthen culture</li>
              </ul>
              <p className="text-text-soft mb-6">
                Retention creates momentum and continuity.
              </p>

              <h2 className="text-2xl font-bold text-gold mt-8 mb-4">Core Retention Strategies</h2>
              <p className="text-text-soft mb-4">
                Effective retention strategies include:
              </p>
              <ul className="list-disc pl-6 mb-6 text-text-soft space-y-2">
                <li>Clear career development pathways</li>
                <li>Transparent leadership communication</li>
                <li>Recognition and feedback systems</li>
                <li>Structured onboarding</li>
                <li>Competitive but sustainable compensation</li>
              </ul>
              <p className="text-text-soft mb-6">
                Retention begins at recruitment and continues through the entire employee lifecycle.
              </p>

              <h2 className="text-2xl font-bold text-gold mt-8 mb-4">The Role of Structured Hiring</h2>
              <p className="text-text-soft mb-4">
                Hiring the right candidate initially reduces turnover risk.
              </p>
              <p className="text-text-soft mb-4">
                Structured recruitment ensures:
              </p>
              <ul className="list-disc pl-6 mb-6 text-text-soft space-y-2">
                <li>Role clarity</li>
                <li>Cultural alignment</li>
                <li>Clear expectations from day one</li>
              </ul>
              <p className="text-text-soft mb-6">
                Retention is often a reflection of hiring discipline and onboarding quality.
              </p>

              <h2 className="text-2xl font-bold text-gold mt-8 mb-4">Conclusion</h2>
              <p className="text-text-soft mb-6">
                In a competitive labor environment, retention is not just HR's responsibility—it is a business strategy.
              </p>
              <p className="text-text-soft mb-6">
                Stable teams build resilient organizations.
              </p>

              <div className="bg-gold/10 p-6 rounded-lg mt-8">
                <p className="text-text-soft mb-2 font-semibold">
                  Need support?
                </p>
                <p className="text-text-soft">
                  If you want to improve retention strategies, develop structured hiring processes, or build a stable workforce, <Link href="/contact" className="text-accent-blue hover:underline">contact WRS</Link> for recruitment and workforce solutions tailored to your business needs.
                </p>
                <p className="text-text-soft mt-4 font-semibold">
                  Let's build a team that stays.
                </p>
              </div>
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
