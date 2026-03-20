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

export default function HRComplianceBasicsPage() {
  return (
    <>
      <PageHeader
        label="BLOG"
        title="Resume Mistakes That Are Costing You Job Opportunities"
        subtitle="By WRS Team | December 19, 2025 | 6 min read"
      />

      <Section alt>
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <Image 
                src="/blog/Blogs Assets/Resume-Mistakes-That-Are-Costing-You-Job-Opportunities.jpg" 
                alt="Resume Mistakes That Are Costing You Job Opportunities"
                width={800}
                height={400}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gold mt-8 mb-4">Introduction</h2>
              <p className="text-text-soft mb-6">
                Your resume is your first impression with potential employers. Even small mistakes can cost you interview opportunities.
              </p>
              <p className="text-text-soft mb-6">
                In this article, we explore common resume mistakes that quietly reduce your chances of getting interviews, and how to fix them.
              </p>

              <h2 className="text-2xl font-bold text-gold mt-8 mb-4">1. Typos and Grammatical Errors</h2>
              <p className="text-text-soft mb-4">
                Spelling mistakes and grammatical errors signal carelessness to employers.
              </p>
              <p className="text-text-soft mb-4 font-semibold">
                Solution:
              </p>
              <ul className="list-disc pl-6 mb-6 text-text-soft space-y-2">
                <li>Proofread multiple times</li>
                <li>Use spell-check tools</li>
                <li>Have someone else review your resume</li>
                <li>Read it aloud to catch errors</li>
              </ul>

              <h2 className="text-2xl font-bold text-gold mt-8 mb-4">2. Generic Objectives</h2>
              <p className="text-text-soft mb-4">
                "Seeking a challenging position" doesn't tell employers anything unique about you.
              </p>
              <p className="text-text-soft mb-4 font-semibold">
                Solution:
              </p>
              <ul className="list-disc pl-6 mb-6 text-text-soft space-y-2">
                <li>Write a specific professional summary</li>
                <li>Highlight your key strengths</li>
                <li>Mention the value you'll bring</li>
              </ul>

              <h2 className="text-2xl font-bold text-gold mt-8 mb-4">3. Listing Duties Instead of Achievements</h2>
              <p className="text-text-soft mb-4">
                "Responsible for..." descriptions are forgettable. Employers want to see results.
              </p>
              <p className="text-text-soft mb-4 font-semibold">
                Solution:
              </p>
              <ul className="list-disc pl-6 mb-6 text-text-soft space-y-2">
                <li>Quantify your accomplishments</li>
                <li>Use action verbs</li>
                <li>Focus on impact, not tasks</li>
              </ul>

              <h2 className="text-2xl font-bold text-gold mt-8 mb-4">4. Outdated Information</h2>
              <p className="text-text-soft mb-4">
                Including irrelevant old jobs or outdated skills wastes valuable space.
              </p>
              <p className="text-text-soft mb-4 font-semibold">
                Solution:
              </p>
              <ul className="list-disc pl-6 mb-6 text-text-soft space-y-2">
                <li>Focus on recent 10-15 years of experience</li>
                <li>Remove obsolete skills</li>
                <li>Keep information relevant to your target roles</li>
              </ul>

              <h2 className="text-2xl font-bold text-gold mt-8 mb-4">5. Poor Formatting</h2>
              <p className="text-text-soft mb-4">
                Fancy fonts, inconsistent spacing, and cluttered layouts make resumes hard to read.
              </p>
              <p className="text-text-soft mb-4 font-semibold">
                Solution:
              </p>
              <ul className="list-disc pl-6 mb-6 text-text-soft space-y-2">
                <li>Use clean, professional fonts</li>
                <li>Maintain consistent formatting</li>
                <li>Keep it to 1-2 pages</li>
                <li>Use white space effectively</li>
              </ul>

              <h2 className="text-2xl font-bold text-gold mt-8 mb-4">Conclusion</h2>
              <p className="text-text-soft mb-6">
                Your resume is your marketing document. Avoiding these common mistakes helps you present yourself professionally and increases your chances of getting interview calls.
              </p>
              <p className="text-text-soft mb-6">
                Take time to review and refine your resume—it could be the difference between getting noticed and getting overlooked.
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
