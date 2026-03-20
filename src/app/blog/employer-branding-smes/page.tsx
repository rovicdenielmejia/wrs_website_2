import Link from 'next/link';
import Image from 'next/image';
import { PageHeader } from '@/components/sections/hero';
import { Section } from '@/components/sections/section';
import { Card, CardContent } from '@/components/ui/card';
import { CTASection } from '@/components/sections/cta';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const relatedPosts = [
  {
    slug: 'employer-branding-salary-alt',
    title: 'How to Attract Better Candidates Without Increasing Salary Offers',
    image: 'How-to-Attract-Better-Candidates-Without-Increasing-Salary-Offers.jpg',
  },
  {
    slug: 'employee-retention-advantage',
    title: 'Why Employee Retention Is the New Competitive Advantage',
    image: 'Why-Employee-Retention-Is-the-New-Competitive-Advantage.jpg',
  },
  {
    slug: 'remote-work-philippines',
    title: 'The Rise of Remote Work in the Philippines',
    image: 'The-Rise-of-Remote-Work-in-the-Philippines.jpg',
  },
];

export default function EmployerBrandingSMEsPage() {
  return (
    <>
      <PageHeader
        label="BLOG"
        title="Why Employer Branding Matters for SMEs"
        subtitle="By WRS Team | February 28, 2026 | 6 min read"
      />

      <Section alt>
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <Image 
                src="/blog/Blogs Assets/Why-Employer-Branding-Matters-for-SMEs.jpg" 
                alt="Why Employer Branding Matters for SMEs"
                width={800}
                height={400}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gold mt-8 mb-4">Introduction</h2>
              <p className="text-text-soft mb-6">
                Employer branding is often associated with large corporations, but it matters even more for SMEs.
              </p>
              <p className="text-text-soft mb-6 font-semibold">
                When resources are limited, reputation becomes leverage.
              </p>

              <h2 className="text-2xl font-bold text-gold mt-8 mb-4">What Is Employer Branding?</h2>
              <p className="text-text-soft mb-4">
                Employer branding answers one essential question: <strong>Why should talented professionals choose your company?</strong>
              </p>
              <p className="text-text-soft mb-4">
                It includes:
              </p>
              <ul className="list-disc pl-6 mb-6 text-text-soft space-y-2">
                <li>Company culture</li>
                <li>Leadership style</li>
                <li>Work environment</li>
                <li>Growth opportunities</li>
                <li>Hiring experience</li>
              </ul>

              <h2 className="text-2xl font-bold text-gold mt-8 mb-4">Why It Matters for SMEs</h2>
              <p className="text-text-soft mb-4">
                Strong employer branding:
              </p>
              <ul className="list-disc pl-6 mb-4 text-text-soft space-y-2">
                <li>Attracts higher-quality applicants</li>
                <li>Reduces hiring time</li>
                <li>Improves retention</li>
                <li>Strengthens market reputation</li>
              </ul>
              <p className="text-text-soft mb-6">
                Candidates research companies before applying. A weak or unclear brand slows down hiring and reduces applicant quality.
              </p>

              <h2 className="text-2xl font-bold text-gold mt-8 mb-4">Practical Ways to Strengthen Your Brand</h2>
              <p className="text-text-soft mb-4">
                SMEs can improve branding by:
              </p>
              <ul className="list-disc pl-6 mb-6 text-text-soft space-y-2">
                <li>Showcasing employee success stories</li>
                <li>Maintaining professional recruitment communication</li>
                <li>Writing transparent job posts</li>
                <li>Sharing company milestones and impact</li>
              </ul>
              <p className="text-text-soft mb-6">
                Consistency builds credibility.
              </p>

              <h2 className="text-2xl font-bold text-gold mt-8 mb-4">Impact on Recruitment and Retention</h2>
              <p className="text-text-soft mb-4">
                When candidates align with your values before joining, turnover decreases.
              </p>
              <p className="text-text-soft mb-6">
                Employer branding naturally filters applicants, attracting those who fit your culture and mission—and discouraging mismatches.
              </p>

              <h2 className="text-2xl font-bold text-gold mt-8 mb-4">Conclusion</h2>
              <p className="text-text-soft mb-6">
                Employer branding is not marketing hype; it is strategic positioning.
              </p>
              <p className="text-text-soft mb-6">
                SMEs that communicate clearly and professionally attract stronger talent and build more stable teams.
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
