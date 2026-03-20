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
    slug: 'pre-screening-saves-time',
    title: '7 Hiring Mistakes SMEs Make, And How to Avoid Them',
    image: '7-Hiring-Mistakes-SMEs-Make,-And-How-to-Avoid-Them.jpg',
  },
  {
    slug: 'resume-tips-job-seekers',
    title: 'How to Write a Resume That Gets Interview Calls',
    image: 'How-to-Write-a-Resume-That-Gets-Interview-Calls.jpg',
  },
];

export default function HireRightFirstTimePage() {
  return (
    <>
      <PageHeader
        label="BLOG"
        title="How to Hire the Right Employee the First Time"
        subtitle="By WRS Team | March 14, 2025 | 6 min read"
      />

      <Section alt>
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <Image 
                src="/blog/Blogs Assets/How-to-Hire-the-Right-Employee-the-First-Time.jpg" 
                alt="How to Hire the Right Employee the First Time"
                width={800}
                height={400}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gold mt-8 mb-4">Introduction</h2>
              <p className="text-text-soft mb-6">
                Finding the right employee, the first time, is a game-changer for SMEs.
              </p>
              <p className="text-text-soft mb-6">
                A strong hire boosts productivity and morale, while a bad one can undermine team effectiveness and drain resources. Let's break down a disciplined approach to hiring right the first time.
              </p>

              <h2 className="text-2xl font-bold text-gold mt-8 mb-4">1. Define the "Right Fit"</h2>
              <p className="text-text-soft mb-4">
                Before the search begins, clarify what success looks like in the role.
              </p>
              <p className="text-text-soft mb-4 font-semibold">
                Ask yourself:
              </p>
              <ul className="list-disc pl-6 mb-6 text-text-soft space-y-2">
                <li>What problem does this role solve?</li>
                <li>What does success look like in six months?</li>
                <li>Which skills are absolutely essential?</li>
              </ul>
              <p className="text-text-soft mb-6">
                Clear definitions guide better sourcing, screening, and final decisions.
              </p>

              <h2 className="text-2xl font-bold text-gold mt-8 mb-4">2. Screen Beyond the Resume</h2>
              <p className="text-text-soft mb-4">
                Resumes highlight experience, not behavior.
              </p>
              <p className="text-text-soft mb-4">
                Use interviews to uncover:
              </p>
              <ul className="list-disc pl-6 mb-6 text-text-soft space-y-2">
                <li>Problem-solving ability</li>
                <li>Decision-making style</li>
                <li>Team interaction</li>
                <li>Learning agility</li>
              </ul>
              <p className="text-text-soft mb-6">
                Behavioral questions ("Tell me about a time when…") reveal how candidates act in real situations.
              </p>

              <h2 className="text-2xl font-bold text-gold mt-8 mb-4">3. Assess Attitude & Growth Potential</h2>
              <p className="text-text-soft mb-4">
                In SMEs, adaptability and mindset often matter more than credentials.
              </p>
              <p className="text-text-soft mb-4">
                Look for evidence of:
              </p>
              <ul className="list-disc pl-6 mb-6 text-text-soft space-y-2">
                <li>Initiative</li>
                <li>Resilience</li>
                <li>Communication ability</li>
                <li>Growth mindset</li>
              </ul>
              <p className="text-text-soft mb-6">
                The right attitude helps employees thrive as the business evolves.
              </p>

              <h2 className="text-2xl font-bold text-gold mt-8 mb-4">4. Clarify Compensation & Career Path</h2>
              <p className="text-text-soft mb-4">
                Misalignment on pay or career expectations is a leading cause of early exits.
              </p>
              <p className="text-text-soft mb-4">
                Discuss openly:
              </p>
              <ul className="list-disc pl-6 mb-6 text-text-soft space-y-2">
                <li>Short-term role goals</li>
                <li>Promotion and progression clarity</li>
                <li>Skill development and training opportunities</li>
              </ul>
              <p className="text-text-soft mb-6">
                Transparency strengthens trust and improves long-term retention.
              </p>

              <h2 className="text-2xl font-bold text-gold mt-8 mb-4">5. Make Data-Informed Decisions</h2>
              <p className="text-text-soft mb-4">
                Avoid emotion-driven choices based only on "gut feel."
              </p>
              <p className="text-text-soft mb-4">
                Use:
              </p>
              <ul className="list-disc pl-6 mb-6 text-text-soft space-y-2">
                <li>Scorecards aligned to job requirements</li>
                <li>Comparative evaluations across candidates</li>
                <li>Consensus decision meetings with key stakeholders</li>
              </ul>
              <p className="text-text-soft mb-6">
                This reduces bias and builds hiring confidence.
              </p>

              <h2 className="text-2xl font-bold text-gold mt-8 mb-4">Conclusion</h2>
              <p className="text-text-soft mb-6">
                Hiring right the first time is intentional, not accidental.
              </p>
              <p className="text-text-soft mb-6">
                A clear structure—defining fit, screening beyond the resume, assessing attitude, aligning expectations, and using data—reduces turnover, builds trust, and enhances team performance.
              </p>

              <div className="bg-gold/10 p-6 rounded-lg mt-8">
                <p className="text-text-soft mb-2 font-semibold">
                  Need support?
                </p>
                <p className="text-text-soft">
                  If you want to hire the right employee the first time with a structured recruitment process, <Link href="/contact" className="text-accent-blue hover:underline">contact WRS</Link> for recruitment and workforce solutions tailored to your business needs.
                </p>
                <p className="text-text-soft mt-4 font-semibold">
                  Let's find the right fit for your team.
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
