import Link from 'next/link';
import Image from 'next/image';
import { PageHeader } from '@/components/sections/hero';
import { Section } from '@/components/sections/section';
import { Card, CardContent } from '@/components/ui/card';
import { CTASection } from '@/components/sections/cta';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const relatedPosts = [
  {
    slug: 'hire-smarter-2026',
    title: 'How to Hire Smarter in 2026',
    image: 'How-to-Hire-Smarter-in-2026.jpg',
  },
  {
    slug: 'hire-right-first-time',
    title: 'How to Hire the Right Employee the First Time',
    image: 'How-to-Hire-the-Right-Employee-the-First-Time.jpg',
  },
  {
    slug: 'resume-tips-job-seekers',
    title: 'How to Write a Resume That Gets Interview Calls',
    image: 'How-to-Write-a-Resume-That-Gets-Interview-Calls.jpg',
  },
];

export default function PreScreeningPage() {
  return (
    <>
      <PageHeader
        label="BLOG"
        title="7 Hiring Mistakes SMEs Make, And How to Avoid Them"
        subtitle="By WRS Team | January 17, 2025 | 7 min read"
      />

      <Section alt>
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <Image 
                src="/blog/Blogs Assets/7-Hiring-Mistakes-SMEs-Make,-And-How-to-Avoid-Them.jpg" 
                alt="7 Hiring Mistakes SMEs Make, And How to Avoid Them"
                width={800}
                height={400}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gold mt-8 mb-4">Introduction</h2>
              <p className="text-text-soft mb-6">
                In the Philippines' fast-evolving SME landscape, hiring isn't just a function, it's a strategic priority.
              </p>
              <p className="text-text-soft mb-6">
                Yet many small and medium enterprises repeatedly fall into avoidable recruitment pitfalls that hinder growth and weaken team stability. In this article, we explore seven of the most common hiring mistakes SMEs make, and provide practical steps to avoid them.
              </p>

              <h2 className="text-2xl font-bold text-gold mt-8 mb-4">1. Hiring Based on Urgency</h2>
              <p className="text-text-soft mb-4">
                When a key role opens, the pressure to fill it can overshadow caution. Rushed hiring often results in mismatches, short-lived employees, and repeated hiring cycles, a costly pattern for SMEs.
              </p>
              <p className="text-text-soft mb-4 font-semibold">
                Avoid it by:
              </p>
              <ul className="list-disc pl-6 mb-6 text-text-soft space-y-2">
                <li>Building a structured screening process even for urgent roles</li>
                <li>Using consistent evaluation criteria to compare candidates</li>
                <li>Reserving final decisions until structured interviews and scores are complete</li>
              </ul>

              <h2 className="text-2xl font-bold text-gold mt-8 mb-4">2. Writing Vague Job Descriptions</h2>
              <p className="text-text-soft mb-4">
                Generic job ads attract a lot of noise and unqualified applicants that waste time and dilute your recruitment funnel.
              </p>
              <p className="text-text-soft mb-4 font-semibold">
                What to include in your job description:
              </p>
              <ul className="list-disc pl-6 mb-6 text-text-soft space-y-2">
                <li>Clear job title and level</li>
                <li>Core responsibilities</li>
                <li>Required vs. preferred skills</li>
                <li>KPIs and performance expectations</li>
                <li>Reporting lines and work context</li>
              </ul>
              <p className="text-text-soft mb-6">
                Clarity results in higher-quality applications and a faster shortlist.
              </p>

              <h2 className="text-2xl font-bold text-gold mt-8 mb-4">3. Hiring for Skills Only</h2>
              <p className="text-text-soft mb-4">
                Technical skills alone don't guarantee success. Too many SMEs prioritize task capability over cultural and behavioral fit, leading to team friction and early turnover.
              </p>
              <p className="text-text-soft mb-6">
                Better practice: Use behavioral interview questions to assess mindset, adaptability, and collaboration, not just technical ability.
              </p>

              <h2 className="text-2xl font-bold text-gold mt-8 mb-4">4. Ignoring Reference Checks</h2>
              <p className="text-text-soft mb-4">
                Skipping reference checks to save time often backfires, costing far more in poor performance later.
              </p>
              <p className="text-text-soft mb-6">
                Takeaway: Even a brief reference call can confirm reliability, validate experience, and reveal working styles.
              </p>

              <h2 className="text-2xl font-bold text-gold mt-8 mb-4">5. Not Setting Clear Expectations</h2>
              <p className="text-text-soft mb-4">
                Misaligned expectations are a primary reason candidates leave early.
              </p>
              <p className="text-text-soft mb-4 font-semibold">
                Communicate clearly:
              </p>
              <ul className="list-disc pl-6 mb-6 text-text-soft space-y-2">
                <li>Workload and KPIs</li>
                <li>Growth opportunities</li>
                <li>Reporting and accountability structures</li>
                <li>Company culture and values</li>
              </ul>
              <p className="text-text-soft mb-6">
                Transparency builds trust and improves retention.
              </p>

              <h2 className="text-2xl font-bold text-gold mt-8 mb-4">6. No Structured Interview Framework</h2>
              <p className="text-text-soft mb-4">
                Unstructured interviews lead to subjective decisions and inconsistent hiring quality.
              </p>
              <p className="text-text-soft mb-4 font-semibold">
                Structured interviews include:
              </p>
              <ul className="list-disc pl-6 mb-6 text-text-soft space-y-2">
                <li>Standard questions for all candidates</li>
                <li>Scorecards for evaluation</li>
                <li>Behavioral and situational scenarios</li>
              </ul>
              <p className="text-text-soft mb-6">
                This improves fairness, reduces bias, and strengthens hiring outcomes.
              </p>

              <h2 className="text-2xl font-bold text-gold mt-8 mb-4">7. Poor Onboarding Follow-Up</h2>
              <p className="text-text-soft mb-4">
                Hiring doesn't end with an offer letter. The first 60 days determine integration and engagement.
              </p>
              <p className="text-text-soft mb-4 font-semibold">
                Action steps:
              </p>
              <ul className="list-disc pl-6 mb-6 text-text-soft space-y-2">
                <li>Schedule regular check-ins</li>
                <li>Set milestones and feedback loops</li>
                <li>Provide mentorship or buddy support</li>
              </ul>

              <h2 className="text-2xl font-bold text-gold mt-8 mb-4">Conclusion</h2>
              <p className="text-text-soft mb-6">
                Hiring mistakes are costly, but largely preventable. SMEs that adopt structured recruitment systems see better retention, reduced hiring costs, and stronger operational continuity.
              </p>
              <p className="text-text-soft mb-6">
                Intentional hiring today creates a more resilient organization tomorrow.
              </p>

              <div className="bg-gold/10 p-6 rounded-lg mt-8">
                <p className="text-text-soft mb-2 font-semibold">
                  Need support?
                </p>
                <p className="text-text-soft">
                  If you want to avoid hiring mistakes and build a structured recruitment process, <Link href="/contact" className="text-accent-blue hover:underline">contact WRS</Link> for recruitment and workforce solutions tailored to your business needs.
                </p>
                <p className="text-text-soft mt-4 font-semibold">
                  Let's hire smarter from the start.
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
