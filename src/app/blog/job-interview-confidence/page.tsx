import Link from 'next/link';
import Image from 'next/image';
import { PageHeader } from '@/components/sections/hero';
import { Section } from '@/components/sections/section';
import { Card, CardContent } from '@/components/ui/card';
import { CTASection } from '@/components/sections/cta';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const relatedPosts = [
  {
    slug: 'resume-tips-job-seekers',
    title: 'How to Write a Resume That Gets Interview Calls',
    image: 'How-to-Write-a-Resume-That-Gets-Interview-Calls.jpg',
  },
  {
    slug: 'career-growth-young-professionals',
    title: 'Career Growth Tips for Young Professionals',
    image: 'Career-Growth-Tips-for-Young-Professionals-in-the-Philippines.jpg',
  },
  {
    slug: 'hire-smarter-2026',
    title: 'How to Hire Smarter in 2026',
    image: 'How-to-Hire-Smarter-in-2026.jpg',
  },
];

export default function JobInterviewConfidencePage() {
  return (
    <>
      <PageHeader
        label="BLOG"
        title="How to Prepare for a Job Interview with Confidence"
        subtitle="By WRS Team | September 12, 2025 | 7 min read"
      />

      <Section alt>
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <Image 
                src="/blog/Blogs Assets/How-to-Prepare-for-a-Job-Interview-with-Confidence.jpg" 
                alt="How to Prepare for a Job Interview with Confidence"
                width={800}
                height={400}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gold mt-8 mb-4">Introduction</h2>
              <p className="text-text-soft mb-6">
                Confidence in interviews isn't natural talent—it's preparation.
              </p>
              <p className="text-text-soft mb-6">
                In a competitive job market, candidates who prepare strategically stand out not because they are the most experienced, but because they communicate clearly, align with the role, and present themselves professionally. Here's how to approach interviews with structure and confidence.
              </p>

              <h2 className="text-2xl font-bold text-gold mt-8 mb-4">1. Understand the Role and the Employer</h2>
              <p className="text-text-soft mb-4">
                Before your interview, do your homework.
              </p>
              <p className="text-text-soft mb-4">
                Take time to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-text-soft space-y-2">
                <li>Review the job description carefully</li>
                <li>Research the company website</li>
                <li>Explore their social media and recent updates</li>
                <li>Understand their industry position</li>
              </ul>
              <p className="text-text-soft mb-6">
                This allows you to tailor your responses and demonstrate genuine interest. Employers value candidates who show initiative.
              </p>

              <h2 className="text-2xl font-bold text-gold mt-8 mb-4">2. Prepare Structured Answers</h2>
              <p className="text-text-soft mb-4">
                Use the STAR method to keep your answers clear and impactful:
              </p>
              <ul className="list-disc pl-6 mb-4 text-text-soft space-y-2">
                <li><strong>Situation</strong> – Context of the challenge</li>
                <li><strong>Task</strong> – Your responsibility</li>
                <li><strong>Action</strong> – What you did</li>
                <li><strong>Result</strong> – The outcome</li>
              </ul>
              <p className="text-text-soft mb-4 font-semibold">
                Example:
              </p>
              <p className="text-text-soft mb-6">
                Instead of saying, "I handled customer complaints," you might say: "During peak sales season (Situation), I managed client escalations (Task). I coordinated with logistics and implemented follow-ups (Action), which improved satisfaction ratings by 20% (Result)."
              </p>
              <p className="text-text-soft mb-6">
                Structured answers feel professional and credible.
              </p>

              <h2 className="text-2xl font-bold text-gold mt-8 mb-4">3. Demonstrate Professional Communication</h2>
              <p className="text-text-soft mb-4">
                Confidence is reflected not only in what you say, but how you say it.
              </p>
              <p className="text-text-soft mb-4">
                Focus on:
              </p>
              <ul className="list-disc pl-6 mb-6 text-text-soft space-y-2">
                <li>Clear speech</li>
                <li>Composed tone</li>
                <li>Good posture</li>
                <li>Active listening</li>
              </ul>
              <p className="text-text-soft mb-6">
                Even in virtual interviews, maintaining eye contact, nodding, and avoiding distractions signal professionalism.
              </p>

              <h2 className="text-2xl font-bold text-gold mt-8 mb-4">4. Ask Insightful Questions</h2>
              <p className="text-text-soft mb-4">
                Strong candidates treat the interview as a two-way conversation.
              </p>
              <p className="text-text-soft mb-4">
                Consider asking:
              </p>
              <ul className="list-disc pl-6 mb-6 text-text-soft space-y-2">
                <li>"What does success look like after six months in this role?"</li>
                <li>"What are the team's current priorities?"</li>
              </ul>
              <p className="text-text-soft mb-6">
                Questions like these signal engagement, curiosity, and long-term thinking.
              </p>

              <h2 className="text-2xl font-bold text-gold mt-8 mb-4">5. Manage Interview Anxiety</h2>
              <p className="text-text-soft mb-4">
                Nervousness is normal—preparation is the antidote.
              </p>
              <p className="text-text-soft mb-4">
                Reduce anxiety by:
              </p>
              <ul className="list-disc pl-6 mb-6 text-text-soft space-y-2">
                <li>Practicing responses aloud</li>
                <li>Arriving early or logging in ahead of time</li>
                <li>Preparing notes you can glance at</li>
                <li>Getting adequate rest before the interview</li>
              </ul>
              <p className="text-text-soft mb-6">
                Preparation reduces uncertainty and helps you stay composed.
              </p>

              <h2 className="text-2xl font-bold text-gold mt-8 mb-4">Final Thoughts</h2>
              <p className="text-text-soft mb-6">
                Interviews are not about perfection. They're about alignment, clarity, and professionalism.
              </p>
              <p className="text-text-soft mb-6">
                Confidence is built, not assumed—one prepared interview at a time.
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
