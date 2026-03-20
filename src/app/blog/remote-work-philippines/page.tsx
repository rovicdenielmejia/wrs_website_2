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
    slug: 'employee-retention-advantage',
    title: 'Why Employee Retention Is the New Competitive Advantage',
    image: 'Why-Employee-Retention-Is-the-New-Competitive-Advantage.jpg',
  },
  {
    slug: 'basic-hr-systems-sme',
    title: 'Why SMEs Need Basic HR Systems',
    image: 'Why-SMEs-Need-Basic-HR-Systems,-Even-Without-a-Full-HR-Department.jpg',
  },
];

export default function RemoteWorkPhilippinesPage() {
  return (
    <>
      <PageHeader
        label="BLOG"
        title="The Rise of Remote Work in the Philippines: What Employers Need to Know"
        subtitle="By WRS Team | February 6, 2026 | 7 min read"
      />

      <Section alt>
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <Image 
                src="/blog/Blogs Assets/The-Rise-of-Remote-Work-in-the-Philippines.jpg" 
                alt="The Rise of Remote Work in the Philippines"
                width={800}
                height={400}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gold mt-8 mb-4">Introduction</h2>
              <p className="text-text-soft mb-6">
                Remote work is no longer a temporary adjustment; it has become a structural shift in how organizations operate.
              </p>
              <p className="text-text-soft mb-6">
                In the Philippines, digital transformation, outsourcing growth, and evolving employee expectations have accelerated remote and hybrid work adoption. For SMEs, understanding this shift is no longer optional—it is strategic.
              </p>

              <h2 className="text-2xl font-bold text-gold mt-8 mb-4">What's Driving Remote Work Growth</h2>
              <p className="text-text-soft mb-4">
                Several forces are fueling this trend:
              </p>
              <ul className="list-disc pl-6 mb-6 text-text-soft space-y-2">
                <li>Digital tools enabling seamless collaboration</li>
                <li>Global hiring and outsourcing models</li>
                <li>Cost efficiency pressures</li>
                <li>Employee demand for flexibility</li>
              </ul>
              <p className="text-text-soft mb-6 font-semibold">
                The workplace is no longer confined by geography.
              </p>

              <h2 className="text-2xl font-bold text-gold mt-8 mb-4">Benefits for Employers</h2>
              <p className="text-text-soft mb-4">
                For SMEs, remote work offers significant advantages:
              </p>
              <ul className="list-disc pl-6 mb-6 text-text-soft space-y-2">
                <li>Reduced office overhead costs</li>
                <li>Access to wider talent pools</li>
                <li>Increased scheduling flexibility</li>
                <li>Expanded regional hiring</li>
              </ul>
              <p className="text-text-soft mb-6">
                This can be particularly valuable for growing companies competing for talent.
              </p>

              <h2 className="text-2xl font-bold text-gold mt-8 mb-4">Benefits for Employees</h2>
              <p className="text-text-soft mb-4">
                Employees benefit from:
              </p>
              <ul className="list-disc pl-6 mb-6 text-text-soft space-y-2">
                <li>Reduced commute stress</li>
                <li>Improved work-life balance</li>
                <li>Access to international job opportunities</li>
                <li>Greater autonomy</li>
              </ul>
              <p className="text-text-soft mb-6">
                Flexibility often increases job satisfaction when managed well.
              </p>

              <h2 className="text-2xl font-bold text-gold mt-8 mb-4">Risks and Management Challenges</h2>
              <p className="text-text-soft mb-4">
                However, remote work requires structure.
              </p>
              <p className="text-text-soft mb-4">
                Challenges include:
              </p>
              <ul className="list-disc pl-6 mb-6 text-text-soft space-y-2">
                <li>Communication breakdowns</li>
                <li>Performance monitoring gaps</li>
                <li>Team engagement decline</li>
                <li>Cultural dilution</li>
              </ul>
              <p className="text-text-soft mb-6">
                Without clear systems, remote setups can reduce productivity.
              </p>

              <h2 className="text-2xl font-bold text-gold mt-8 mb-4">What Remote Work Means for SMEs</h2>
              <p className="text-text-soft mb-4">
                To succeed, SMEs should:
              </p>
              <ul className="list-disc pl-6 mb-6 text-text-soft space-y-2">
                <li>Set clear KPIs</li>
                <li>Define communication protocols</li>
                <li>Use collaboration tools consistently</li>
                <li>Implement structured performance tracking</li>
              </ul>
              <p className="text-text-soft mb-6">
                Remote work rewards structured management.
              </p>

              <h2 className="text-2xl font-bold text-gold mt-8 mb-4">Conclusion</h2>
              <p className="text-text-soft mb-6">
                Remote work is not just a trend; it is part of the future workforce model.
              </p>
              <p className="text-text-soft mb-6">
                SMEs that adapt with clear systems and structured oversight can leverage flexibility without sacrificing productivity.
              </p>

              <div className="bg-gold/10 p-6 rounded-lg mt-8">
                <p className="text-text-soft mb-2 font-semibold">
                  Need support?
                </p>
                <p className="text-text-soft">
                  If you want to build a remote-capable team, develop effective remote work policies, or find skilled professionals for your organization, <Link href="/contact" className="text-accent-blue hover:underline">contact WRS</Link> for recruitment and workforce solutions tailored to your business needs.
                </p>
                <p className="text-text-soft mt-4 font-semibold">
                  Let's build your remote-ready team today.
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
