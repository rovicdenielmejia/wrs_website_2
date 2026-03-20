import Link from 'next/link';
import Image from 'next/image';
import { PageHeader } from '@/components/sections/hero';
import { Section } from '@/components/sections/section';
import { Card, CardContent } from '@/components/ui/card';
import { CTASection } from '@/components/sections/cta';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const relatedPosts = [
  {
    slug: 'hr-compliance-basics-sme',
    title: 'HR Compliance Basics Every SME Should Know',
    image: 'HR-Compliance-Basics-Every-SME-Should-Know.jpg',
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

export default function BasicHRSystemsPage() {
  return (
    <>
      <PageHeader
        label="BLOG"
        title="Why SMEs Need Basic HR Systems, Even Without a Full HR Department"
        subtitle="By WRS Team | January 16, 2026 | 6 min read"
      />

      <Section alt>
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <Image 
                src="/blog/Blogs Assets/Why-SMEs-Need-Basic-HR-Systems,-Even-Without-a-Full-HR-Department.jpg" 
                alt="Why SMEs Need Basic HR Systems"
                width={800}
                height={400}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gold mt-8 mb-4">Introduction</h2>
              <p className="text-text-soft mb-6">
                Many SMEs operate informally until operational challenges arise. Without basic HR systems, inconsistencies multiply.
              </p>
              <p className="text-text-soft mb-6 font-semibold">
                Structure doesn't require complexity, only consistency.
              </p>

              <h2 className="text-2xl font-bold text-gold mt-8 mb-4">Risks of Operating Without Structure</h2>
              <p className="text-text-soft mb-4">
                Without systems:
              </p>
              <ul className="list-disc pl-6 mb-6 text-text-soft space-y-2">
                <li>Hiring becomes inconsistent</li>
                <li>Documentation gaps appear</li>
                <li>Employee disputes increase</li>
                <li>Compliance risks escalate</li>
              </ul>
              <p className="text-text-soft mb-6">
                Informal processes create long-term instability.
              </p>

              <h2 className="text-2xl font-bold text-gold mt-8 mb-4">Essential HR Systems to Start With</h2>
              <p className="text-text-soft mb-4">
                SMEs don't need complex software to begin. Start by implementing:
              </p>
              <ul className="list-disc pl-6 mb-4 text-text-soft space-y-2">
                <li>Standard hiring procedures</li>
                <li>A written employee handbook</li>
                <li>A structured onboarding process</li>
                <li>Basic performance tracking</li>
              </ul>
              <p className="text-text-soft mb-6">
                Even simple frameworks greatly improve control and consistency.
              </p>

              <h2 className="text-2xl font-bold text-gold mt-8 mb-4">Benefits of HR Structure</h2>
              <p className="text-text-soft mb-4">
                Basic HR systems deliver:
              </p>
              <ul className="list-disc pl-6 mb-6 text-text-soft space-y-2">
                <li>Reduced legal exposure</li>
                <li>Clear expectations for employees and managers</li>
                <li>Improved employee retention</li>
                <li>Better management oversight</li>
              </ul>
              <p className="text-text-soft mb-6">
                Structured systems scale with growth instead of breaking under pressure.
              </p>

              <h2 className="text-2xl font-bold text-gold mt-8 mb-4">Practical Implementation Tips</h2>
              <p className="text-text-soft mb-4">
                Start small and build over time.
              </p>
              <p className="text-text-soft mb-4 font-semibold">
                For example:
              </p>
              <ul className="list-disc pl-6 mb-6 text-text-soft space-y-2">
                <li>Document core policies in a shared folder</li>
                <li>Standardize interview guides and scorecards</li>
                <li>Create onboarding checklists for new hires</li>
                <li>Schedule regular performance reviews</li>
              </ul>
              <p className="text-text-soft mb-6">
                Progress builds over time; perfection is not required at the beginning.
              </p>

              <h2 className="text-2xl font-bold text-gold mt-8 mb-4">Conclusion</h2>
              <p className="text-text-soft mb-6">
                SMEs don't need large HR departments—they need structured systems.
              </p>
              <p className="text-text-soft mb-6">
                Consistency in hiring, documentation, and performance management protects growth and supports a healthier workplace.
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
