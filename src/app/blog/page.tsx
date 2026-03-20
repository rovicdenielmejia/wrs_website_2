import Link from 'next/link';
import { PageHeader } from '@/components/sections/hero';
import { Section, SectionHeader } from '@/components/sections/section';
import { Card, CardContent } from '@/components/ui/card';
import { CTASection } from '@/components/sections/cta';
import { ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    slug: 'hire-smarter-2026',
    title: 'How to Hire Smarter in 2026',
    excerpt: 'Practical tips for employers to streamline recruitment, improve time-to-hire, and attract the right talent. From job design to interviews.',
    date: 'January 15, 2026',
    category: 'Featured Workforce Trends',
    image: 'How-to-Hire-Smarter-in-2026.jpg',
    readTime: '5 min read',
  },
  {
    slug: 'remote-work-philippines',
    title: 'The Rise of Remote Work in the Philippines',
    excerpt: 'How remote and hybrid work are reshaping the Philippine workforce and what SMEs should prepare for.',
    date: 'February 6, 2026',
    category: 'Workforce Trends',
    image: 'The-Rise-of-Remote-Work-in-the-Philippines.jpg',
    readTime: '7 min read',
  },
  {
    slug: 'employee-retention-advantage',
    title: 'Why Employee Retention Is the New Competitive Advantage',
    excerpt: 'Why stable teams and retention-focused strategies now matter more than constant recruitment.',
    date: 'February 27, 2026',
    category: 'Workforce Trends',
    image: 'Why-Employee-Retention-Is-the-New-Competitive-Advantage.jpg',
    readTime: '6 min read',
  },
  {
    slug: 'pre-screening-saves-time',
    title: '7 Hiring Mistakes SMEs Make, And How to Avoid Them',
    excerpt: 'Seven common hiring mistakes SMEs make, plus practical ways to hire more confidently and sustainably.',
    date: 'January 17, 2025',
    category: 'Hiring Tips',
    image: '7-Hiring-Mistakes-SMEs-Make,-And-How-to-Avoid-Them.jpg',
    readTime: '7 min read',
  },
  {
    slug: 'hire-right-first-time',
    title: 'How to Hire the Right Employee the First Time',
    excerpt: 'A step-by-step approach to defining fit, screening effectively, and making confident hiring decisions.',
    date: 'March 14, 2025',
    category: 'Hiring Tips',
    image: 'How-to-Hire-the-Right-Employee-the-First-Time.jpg',
    readTime: '6 min read',
  },
  {
    slug: 'resume-tips-job-seekers',
    title: 'How to Write a Resume That Gets Interview Calls',
    excerpt: 'Resume writing tips that focus on achievements, clarity, and alignment with the role you want.',
    date: 'May 9, 2025',
    category: 'Resume Advice',
    image: 'How-to-Write-a-Resume-That-Gets-Interview-Calls.jpg',
    readTime: '6 min read',
  },
  {
    slug: 'hr-compliance-basics',
    title: 'Resume Mistakes That Are Costing You Job Opportunities',
    excerpt: 'Avoid the most common resume mistakes that quietly reduce your chances of getting interviews.',
    date: 'December 19, 2025',
    category: 'Resume Advice',
    image: 'Resume-Mistakes-That-Are-Costing-You-Job-Opportunities.jpg',
    readTime: '6 min read',
  },
  {
    slug: 'job-interview-confidence',
    title: 'How to Prepare for a Job Interview with Confidence',
    excerpt: 'A practical guide to preparing for interviews so you can communicate clearly and confidently.',
    date: 'September 12, 2025',
    category: 'Job Seekers Advice',
    image: 'How-to-Prepare-for-a-Job-Interview-with-Confidence.jpg',
    readTime: '7 min read',
  },
  {
    slug: 'career-growth-young-professionals',
    title: 'Career Growth Tips for Young Professionals in the Philippines',
    excerpt: 'Structured, practical tips to help young professionals grow their careers intentionally.',
    date: 'November 14, 2025',
    category: 'Job Seekers Advice',
    image: 'Career-Growth-Tips-for-Young-Professionals-in-the-Philippines.jpg',
    readTime: '6 min read',
  },
  {
    slug: 'hr-compliance-basics-sme',
    title: 'HR Compliance Basics Every SME Should Know',
    excerpt: 'Key contracts, contributions, and policies every SME should have to stay compliant.',
    date: 'December 19, 2025',
    category: 'HR Compliance',
    image: 'HR-Compliance-Basics-Every-SME-Should-Know.jpg',
    readTime: '6 min read',
  },
  {
    slug: 'basic-hr-systems-sme',
    title: 'Why SMEs Need Basic HR Systems, Even Without a Full HR Department',
    excerpt: 'Why structure matters and simple HR systems protect SMEs as they grow.',
    date: 'January 16, 2026',
    category: 'HR Compliance',
    image: 'Why-SMEs-Need-Basic-HR-Systems,-Even-Without-a-Full-HR-Department.jpg',
    readTime: '6 min read',
  },
  {
    slug: 'employer-branding-smes',
    title: 'Why Employer Branding Matters for SMEs',
    excerpt: 'How a clear employer brand helps SMEs attract, hire, and retain stronger talent.',
    date: 'February 28, 2026',
    category: 'Employer Branding',
    image: 'Why-Employer-Branding-Matters-for-SMEs.jpg',
    readTime: '6 min read',
  },
  {
    slug: 'employer-branding-salary-alt',
    title: 'How to Attract Better Candidates Without Increasing Salary Offers',
    excerpt: 'Practical ways SMEs can compete for talent through growth, clarity, and culture, not just pay.',
    date: 'March 1, 2026',
    category: 'Employer Branding',
    image: 'How-to-Attract-Better-Candidates-Without-Increasing-Salary-Offers.jpg',
    readTime: '6 min read',
  },
];

export default function BlogsPage() {
  return (
    <>
      <PageHeader
        label="Insights"
        title="Blog"
        subtitle="Hiring tips, HR insights, and career advice from WRS."
      />

      <Section alt>
        <div className="container">
          <SectionHeader
            label="Latest articles"
            title="Latest articles"
            subtitle=""
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Card key={post.slug} className="overflow-hidden hover:shadow-card-hover transition-shadow">
                <div className="h-48 bg-navy/50 flex items-center justify-center overflow-hidden">
                  <img 
                    src={`/blog/Blogs Assets/${post.image}`} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-gold">{post.category}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gold mb-2 line-clamp-2">
                    <Link href={`/blog/${post.slug}`} className="hover:text-accent-blue transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-text-soft mb-4 line-clamp-3">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-accent-blue hover:text-accent-blue-hover transition-colors"
                  >
                    Read More <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="container text-center">
          <h2 className="text-2xl font-bold text-gold mb-4">Subscribe for HR Insights</h2>
          <p className="text-text-soft mb-6">Get hiring tips, workforce trends, and recruitment advice in your inbox.</p>
          <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-gold text-white font-semibold rounded-sm hover:bg-gold/90 transition-colors">
            Subscribe / Contact Us
          </Link>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
