import Link from 'next/link';
import { PageHeader } from '@/components/sections/hero';
import { Section } from '@/components/sections/section';
import { Card, CardContent } from '@/components/ui/card';
import { CTASection } from '@/components/sections/cta';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const relatedPosts = [
  {
    slug: 'pre-screening-saves-time',
    title: '7 Hiring Mistakes SMEs Make, And How to Avoid Them',
    image: '7-Hiring-Mistakes-SMEs-Make,-And-How-to-Avoid-Them.jpg',
  },
  {
    slug: 'resume-tips-job-seekers',
    title: 'Resume Tips for Job Seekers',
    image: 'How-to-Write-a-Resume-That-Gets-Interview-Calls.jpg',
  },
  {
    slug: 'hr-compliance-basics',
    title: 'HR Compliance Basics',
    image: 'Resume-Mistakes-That-Are-Costing-You-Job-Opportunities.jpg',
  },
];

export default function HireSmarter2026Page() {
  return (
    <>
      <PageHeader
        label="BLOG"
        title="How to Hire Smarter in 2026"
        subtitle="By WRS Team | January 15, 2026 | 5 min read"
      />

      <Section alt>
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <img 
                src="/blog/Blogs Assets/How-to-Hire-Smarter-in-2026.jpg" 
                alt="How to Hire Smarter in 2026"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text-soft mb-6">
                Hiring in 2026 is no longer just about filling vacancies: it's about building workforce stability in a faster, more competitive market.
              </p>

              <p className="text-text-soft mb-6">
                Top candidates move quickly. Expectations are higher. Competition for skilled professionals is tighter than ever.
              </p>

              <p className="text-text-soft mb-6">
                If your recruitment process is slow, unclear, or unstructured, you risk losing strong candidates, and repeating costly hiring cycles.
              </p>

              <p className="text-text-soft mb-6 font-semibold">
                Here's how employers can hire smarter this year.
              </p>

              <h2 className="text-2xl font-bold text-gold mt-8 mb-4">1. Define the role clearly before you post</h2>
              <p className="text-text-soft mb-4">
                Many hiring delays begin with unclear job design.
              </p>
              <p className="text-text-soft mb-4">
                Before publishing a job advertisement, take time to clarify:
              </p>
              <ul className="list-disc pl-6 mb-4 text-text-soft space-y-2">
                <li>What problem will this role solve?</li>
                <li>What does success look like in the first 3–6 months?</li>
                <li>What are the must-have qualifications?</li>
                <li>What are the nice-to-have skills?</li>
              </ul>
              <p className="text-text-soft mb-4">
                When job descriptions are focused and realistic, you attract more qualified applicants, reduce irrelevant resumes, speed up screening, and improve long-term retention.
              </p>
              <p className="text-text-soft mb-6 font-semibold">
                Clarity at the beginning saves weeks later.
              </p>

              <h2 className="text-2xl font-bold text-gold mt-8 mb-4">2. Use structured screening to save time</h2>
              <p className="text-text-soft mb-4">
                Unstructured interviews often waste time and lead to inconsistent decisions.
              </p>
              <p className="text-text-soft mb-4">
                Instead, implement a simple screening system:
              </p>
              <ul className="list-disc pl-6 mb-4 text-text-soft space-y-2">
                <li>Conduct 15–20 minute phone or video pre-screens</li>
                <li>Ask a consistent set of 5–7 core questions</li>
                <li>Evaluate using a scoring guide</li>
              </ul>
              <p className="text-text-soft mb-4">
                This allows you to compare candidates fairly, identify red flags early, shortlist faster, and avoid unnecessary full interviews.
              </p>
              <p className="text-text-soft mb-6">
                Structured screening improves efficiency without sacrificing quality.
              </p>

              <h2 className="text-2xl font-bold text-gold mt-8 mb-4">3. Strengthen your employer presence</h2>
              <p className="text-text-soft mb-4">
                In 2026, candidates evaluate companies as much as companies evaluate candidates.
              </p>
              <p className="text-text-soft mb-4">
                Ask yourself:
              </p>
              <ul className="list-disc pl-6 mb-4 text-text-soft space-y-2">
                <li>Is your job post clear and professional?</li>
                <li>Do you respond promptly to applicants?</li>
                <li>Does your company communicate its culture and values?</li>
              </ul>
              <p className="text-text-soft mb-4">
                Simple improvements can make a big difference: share your team culture, highlight growth opportunities, maintain professional communication, and provide timely updates.
              </p>
              <p className="text-text-soft mb-6">
                Strong employer branding reduces candidate drop-off and attracts better cultural fits.
              </p>

              <h2 className="text-2xl font-bold text-gold mt-8 mb-4">4. Move quickly with top candidates</h2>
              <p className="text-text-soft mb-4">
                High-performing candidates rarely stay available for long.
              </p>
              <p className="text-text-soft mb-4">
                Slow approvals, delayed feedback, or unclear decision-making often result in losing strong applicants to competitors.
              </p>
              <p className="text-text-soft mb-4">
                To stay competitive:
              </p>
              <ul className="list-disc pl-6 mb-4 text-text-soft space-y-2">
                <li>Align decision-makers early</li>
                <li>Set interview timelines in advance</li>
                <li>Provide feedback within 24–48 hours</li>
                <li>Prepare offer details before final interviews</li>
              </ul>
              <p className="text-text-soft mb-6">
                Speed signals professionalism and seriousness.
              </p>

              <h2 className="text-2xl font-bold text-gold mt-8 mb-4">5. Align recruitment with workforce planning</h2>
              <p className="text-text-soft mb-4">
                Smart hiring isn't just reactive: it's strategic.
              </p>
              <p className="text-text-soft mb-4">
                Instead of waiting for resignations, ask:
              </p>
              <ul className="list-disc pl-6 mb-4 text-text-soft space-y-2">
                <li>Which roles are critical for growth this year?</li>
                <li>Where are skill gaps forming?</li>
                <li>What hiring pipeline do we need in the next 6–12 months?</li>
              </ul>
              <p className="text-text-soft mb-6">
                Proactive workforce planning reduces emergency hiring and improves stability.
              </p>

              <h2 className="text-2xl font-bold text-gold mt-8 mb-4">The bottom line</h2>
              <p className="text-text-soft mb-4">
                Hiring smarter in 2026 means:
              </p>
              <ul className="list-disc pl-6 mb-4 text-text-soft space-y-2">
                <li>Clear role design</li>
                <li>Structured screening</li>
                <li>Strong employer presence</li>
                <li>Faster decision-making</li>
                <li>Strategic workforce planning</li>
              </ul>
              <p className="text-text-soft mb-6">
                When recruitment becomes structured instead of reactive, results improve naturally.
              </p>
              <p className="text-text-soft mb-6">
                You don't just fill positions: you build a stronger organization.
              </p>

              <div className="bg-gold/10 p-6 rounded-lg mt-8">
                <p className="text-text-soft mb-2 font-semibold">
                  Need support?
                </p>
                <p className="text-text-soft">
                  If you want to streamline recruitment, reduce time-to-hire, or build a more structured workforce strategy, <Link href="/contact" className="text-accent-blue hover:underline">contact WRS</Link> for recruitment and workforce planning support tailored for growing businesses.
                </p>
                <p className="text-text-soft mt-4 font-semibold">
                  Let's build your team smarter in 2026.
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
                  <img 
                    src={`/blog/Blogs Assets/${post.image}`} 
                    alt={post.title}
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
