import Link from 'next/link';
import Image from 'next/image';
import { PageHeader } from '@/components/sections/hero';
import { Section } from '@/components/sections/section';
import { Card, CardContent } from '@/components/ui/card';
import { CTASection } from '@/components/sections/cta';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const relatedPosts = [
  {
    slug: 'job-interview-confidence',
    title: 'How to Prepare for a Job Interview with Confidence',
    image: 'How-to-Prepare-for-a-Job-Interview-with-Confidence.jpg',
  },
  {
    slug: 'resume-tips-job-seekers',
    title: 'How to Write a Resume That Gets Interview Calls',
    image: 'How-to-Write-a-Resume-That-Gets-Interview-Calls.jpg',
  },
  {
    slug: 'hire-smarter-2026',
    title: 'How to Hire Smarter in 2026',
    image: 'How-to-Hire-Smarter-in-2026.jpg',
  },
];

export default function CareerGrowthPage() {
  return (
    <>
      <PageHeader
        label="BLOG"
        title="Career Growth Tips for Young Professionals in the Philippines"
        subtitle="By WRS Team | November 14, 2025 | 6 min read"
      />

      <Section alt>
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <Image 
                src="/blog/Blogs Assets/Career-Growth-Tips-for-Young-Professionals-in-the-Philippines.jpg" 
                alt="Career Growth Tips for Young Professionals in the Philippines"
                width={800}
                height={400}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gold mt-8 mb-4">Introduction</h2>
              <p className="text-text-soft mb-6">
                Career growth doesn't happen by chance; it happens through intentional planning.
              </p>
              <p className="text-text-soft mb-6">
                For young professionals, the early years shape long-term trajectory. Developing structure and focus early creates sustainable advancement.
              </p>

              <h2 className="text-2xl font-bold text-gold mt-8 mb-4">1. Build In-Demand Skills</h2>
              <p className="text-text-soft mb-4">
                Industries are evolving rapidly across the Philippines and globally.
              </p>
              <p className="text-text-soft mb-4">
                Focus on strengthening:
              </p>
              <ul className="list-disc pl-6 mb-4 text-text-soft space-y-2">
                <li>Communication</li>
                <li>Digital competency</li>
                <li>Analytical thinking</li>
                <li>Leadership fundamentals</li>
              </ul>
              <p className="text-text-soft mb-6">
                Continuous learning increases your long-term employability and promotion readiness.
              </p>

              <h2 className="text-2xl font-bold text-gold mt-8 mb-4">2. Seek Constructive Feedback</h2>
              <p className="text-text-soft mb-4">
                Growth requires awareness.
              </p>
              <p className="text-text-soft mb-4">
                Ask supervisors questions like:
              </p>
              <ul className="list-disc pl-6 mb-4 text-text-soft space-y-2">
                <li>"Where can I improve?"</li>
                <li>"How can I contribute more effectively?"</li>
              </ul>
              <p className="text-text-soft mb-6">
                Feedback—when applied—accelerates development and shows maturity.
              </p>

              <h2 className="text-2xl font-bold text-gold mt-8 mb-4">3. Develop Professional Relationships</h2>
              <p className="text-text-soft mb-4">
                Networking is not about favors; it's about learning.
              </p>
              <p className="text-text-soft mb-4">
                Strong professional relationships provide:
              </p>
              <ul className="list-disc pl-6 mb-6 text-text-soft space-y-2">
                <li>Mentorship</li>
                <li>Industry knowledge</li>
                <li>Visibility for new opportunities</li>
              </ul>
              <p className="text-text-soft mb-6">
                Professional growth is rarely isolated. The right network opens doors.
              </p>

              <h2 className="text-2xl font-bold text-gold mt-8 mb-4">4. Avoid Reactive Job Moves</h2>
              <p className="text-text-soft mb-4">
                Frequent job changes without strategic purpose can hinder credibility.
              </p>
              <p className="text-text-soft mb-4">
                Consider moving roles when:
              </p>
              <ul className="list-disc pl-6 mb-6 text-text-soft space-y-2">
                <li>Responsibilities expand</li>
                <li>Skills deepen</li>
                <li>Career direction clearly improves</li>
              </ul>
              <p className="text-text-soft mb-6">
                Intentional moves strengthen your professional narrative.
              </p>

              <h2 className="text-2xl font-bold text-gold mt-8 mb-4">5. Set Strategic Career Goals</h2>
              <p className="text-text-soft mb-4">
                Define your direction instead of drifting.
              </p>
              <p className="text-text-soft mb-4">
                Clarify:
              </p>
              <ul className="list-disc pl-6 mb-4 text-text-soft space-y-2">
                <li>Your desired role in 3 years</li>
                <li>The skills required to get there</li>
                <li>The action steps needed each quarter</li>
              </ul>
              <p className="text-text-soft mb-6">
                Clarity drives momentum and helps you say "yes" and "no" to the right opportunities.
              </p>

              <h2 className="text-2xl font-bold text-gold mt-8 mb-4">Conclusion</h2>
              <p className="text-text-soft mb-6">
                Career growth requires discipline, reflection, and long-term focus.
              </p>
              <p className="text-text-soft mb-6">
                Strategic professionals build careers; they don't just work jobs.
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
