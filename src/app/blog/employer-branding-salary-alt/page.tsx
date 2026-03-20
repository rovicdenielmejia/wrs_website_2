import Link from 'next/link';
import Image from 'next/image';
import { PageHeader } from '@/components/sections/hero';
import { Section } from '@/components/sections/section';
import { Card, CardContent } from '@/components/ui/card';
import { CTASection } from '@/components/sections/cta';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const relatedPosts = [
  {
    slug: 'employer-branding-smes',
    title: 'Why Employer Branding Matters for SMEs',
    image: 'Why-Employer-Branding-Matters-for-SMEs.jpg',
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

export default function EmployerBrandingSalaryAltPage() {
  return (
    <>
      <PageHeader
        label="BLOG"
        title="How to Attract Better Candidates Without Increasing Salary Offers"
        subtitle="By WRS Team | March 1, 2026 | 6 min read"
      />

      <Section alt>
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <Image 
                src="/blog/Blogs Assets/How-to-Attract-Better-Candidates-Without-Increasing-Salary-Offers.jpg" 
                alt="How to Attract Better Candidates Without Increasing Salary Offers"
                width={800}
                height={400}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gold mt-8 mb-4">Introduction</h2>
              <p className="text-text-soft mb-6">
                While salary is important, it is not the only factor influencing candidate decisions.
              </p>
              <p className="text-text-soft mb-6">
                For SMEs with limited budgets, strategic positioning can compete effectively without unsustainable compensation increases.
              </p>

              <h2 className="text-2xl font-bold text-gold mt-8 mb-4">Why Salary Isn't Everything</h2>
              <p className="text-text-soft mb-4">
                Candidates also evaluate:
              </p>
              <ul className="list-disc pl-6 mb-6 text-text-soft space-y-2">
                <li>Stability</li>
                <li>Growth potential</li>
                <li>Leadership quality</li>
                <li>Workplace culture</li>
                <li>Work-life balance</li>
              </ul>
              <p className="text-text-soft mb-6">
                Value perception matters as much as the number on the offer letter.
              </p>

              <h2 className="text-2xl font-bold text-gold mt-8 mb-4">Offer Growth Opportunities</h2>
              <p className="text-text-soft mb-4">
                Clear training and development plans attract ambitious professionals.
              </p>
              <p className="text-text-soft mb-4">
                Show candidates how they can grow by describing:
              </p>
              <ul className="list-disc pl-6 mb-6 text-text-soft space-y-2">
                <li>Learning and upskilling programs</li>
                <li>Chances to lead projects</li>
                <li>Exposure to different parts of the business</li>
              </ul>

              <h2 className="text-2xl font-bold text-gold mt-8 mb-4">Provide Career Path Transparency</h2>
              <p className="text-text-soft mb-4">
                Explain:
              </p>
              <ul className="list-disc pl-6 mb-6 text-text-soft space-y-2">
                <li>Promotion criteria</li>
                <li>Skill development pathways</li>
                <li>Long-term potential in the organization</li>
              </ul>
              <p className="text-text-soft mb-6">
                Clarity builds commitment and reduces early turnover.
              </p>

              <h2 className="text-2xl font-bold text-gold mt-8 mb-4">Improve Workplace Culture</h2>
              <p className="text-text-soft mb-4">
                Supportive leadership, structured feedback, and positive work environments are powerful attractors.
              </p>
              <p className="text-text-soft mb-6">
                Culture often outweighs compensation, especially for candidates seeking stability and respect.
              </p>

              <h2 className="text-2xl font-bold text-gold mt-8 mb-4">Enhance the Hiring Experience</h2>
              <p className="text-text-soft mb-4">
                Professional communication, timely feedback, and respectful interviews elevate employer reputation.
              </p>
              <p className="text-text-soft mb-6">
                The hiring experience shapes candidate perception—even for those who don't get the role.
              </p>

              <h2 className="text-2xl font-bold text-gold mt-8 mb-4">Conclusion</h2>
              <p className="text-text-soft mb-6">
                Attracting strong candidates isn't only about paying more; it's about offering structure, growth, and professionalism.
              </p>
              <p className="text-text-soft mb-6">
                Strategic positioning allows SMEs to compete effectively in the talent market.
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
