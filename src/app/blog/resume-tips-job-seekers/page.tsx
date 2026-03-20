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
    slug: 'hr-compliance-basics',
    title: 'HR Compliance Basics',
    image: 'Resume-Mistakes-That-Are-Costing-You-Job-Opportunities.jpg',
  },
];

export default function ResumeTipsPage() {
  return (
    <>
      <PageHeader
        label="BLOG"
        title="How to Write a Resume That Gets Interview Calls"
        subtitle="By WRS Team | May 9, 2025 | 6 min read"
      />

      <Section alt>
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <Image 
                src="/blog/Blogs Assets/How-to-Write-a-Resume-That-Gets-Interview-Calls.jpg" 
                alt="How to Write a Resume That Gets Interview Calls"
                width={800}
                height={400}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gold mt-8 mb-4">Introduction</h2>
              <p className="text-text-soft mb-6">
                Your resume is your first impression. Recruiters often scan it for seconds before deciding whether to invite you for an interview.
              </p>
              <p className="text-text-soft mb-6">
                Here's how to make every second count and increase your chances of getting that interview call.
              </p>

              <h2 className="text-2xl font-bold text-gold mt-8 mb-4">1. Start with a Professional Summary</h2>
              <p className="text-text-soft mb-4">
                Put your value front and center. A strong summary highlights:
              </p>
              <ul className="list-disc pl-6 mb-4 text-text-soft space-y-2">
                <li>Years of experience</li>
                <li>Key strengths</li>
                <li>Core expertise</li>
              </ul>
              <p className="text-text-soft mb-4 font-semibold">
                Example:
              </p>
              <p className="text-text-soft mb-6">
                "Operations Supervisor with 5+ years' experience driving team productivity and sales performance."
              </p>

              <h2 className="text-2xl font-bold text-gold mt-8 mb-4">2. Highlight Achievements, Not Tasks</h2>
              <p className="text-text-soft mb-4">
                Employers want impact, not just responsibilities.
              </p>
              <p className="text-text-soft mb-4">
                Instead of writing "Managed staff," try:
              </p>
              <p className="text-text-soft mb-4 font-semibold">
                Better: "Improved store sales by 12% through training and operational efficiencies."
              </p>
              <p className="text-text-soft mb-6">
                Quantifying results differentiates your resume from others.
              </p>

              <h2 className="text-2xl font-bold text-gold mt-8 mb-4">3. Keep the Layout Clean</h2>
              <p className="text-text-soft mb-4">
                A cluttered resume is hard to read and easy to reject.
              </p>
              <p className="text-text-soft mb-4">
                Use:
              </p>
              <ul className="list-disc pl-6 mb-6 text-text-soft space-y-2">
                <li>Simple fonts</li>
                <li>Clear section headers</li>
                <li>Bullet points for readability</li>
              </ul>
              <p className="text-text-soft mb-6">
                A clean layout helps recruiters quickly find the information they need.
              </p>

              <h2 className="text-2xl font-bold text-gold mt-8 mb-4">4. Tailor for the Role</h2>
              <p className="text-text-soft mb-4">
                Generic resumes rarely perform well.
              </p>
              <p className="text-text-soft mb-4">
                Match keywords from the job posting, especially for:
              </p>
              <ul className="list-disc pl-6 mb-6 text-text-soft space-y-2">
                <li>Skills</li>
                <li>Tools and technologies</li>
                <li>Industry or role-specific terms</li>
              </ul>
              <p className="text-text-soft mb-6">
                Both ATS (Applicant Tracking Systems) and recruiters use keywords to filter and prioritize resumes.
              </p>

              <h2 className="text-2xl font-bold text-gold mt-8 mb-4">5. Avoid Common Mistakes</h2>
              <p className="text-text-soft mb-4">
                Even strong candidates lose opportunities due to basic errors.
              </p>
              <p className="text-text-soft mb-4 font-semibold">
                Watch out for:
              </p>
              <ul className="list-disc pl-6 mb-6 text-text-soft space-y-2">
                <li>Typos</li>
                <li>Outdated or irrelevant information</li>
                <li>Irrelevant personal details</li>
                <li>Generic, vague objectives</li>
              </ul>
              <p className="text-text-soft mb-6">
                The goal is clarity, relevance, and professionalism.
              </p>

              <h2 className="text-2xl font-bold text-gold mt-8 mb-4">Conclusion</h2>
              <p className="text-text-soft mb-6">
                A strong resume is a blend of clear structure, achievement-focused content, and alignment with the role you want.
              </p>
              <p className="text-text-soft mb-6">
                Treat it as your professional marketing document—because that's exactly what it is.
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
