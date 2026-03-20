import Link from 'next/link';
import { PageHeader } from '@/components/sections/hero';
import { Section } from '@/components/sections/section';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    slug: 'hire-smarter-2026',
    title: 'How to Hire Smarter in 2026: A Complete Guide',
    excerpt: 'Discover the latest trends and strategies for building high-performing teams in the evolving workplace landscape.',
    date: 'March 15, 2026',
    category: 'Hiring Tips',
    image: '💼',
  },
  {
    slug: 'resume-tips-job-seekers',
    title: 'Resume Tips Every Job Seeker Should Know',
    excerpt: 'Learn how to create a compelling resume that stands out and gets you noticed by recruiters.',
    date: 'March 10, 2026',
    category: 'Career Advice',
    image: '📄',
  },
  {
    slug: 'hr-compliance-basics',
    title: 'HR Compliance Basics Every Employer Should Know',
    excerpt: 'Stay ahead of regulatory requirements and build a compliant, thriving workplace.',
    date: 'March 5, 2026',
    category: 'HR Insights',
    image: '🏢',
  },
  {
    slug: 'employee-retention-advantage',
    title: 'The Employee Retention Advantage',
    excerpt: 'Discover proven strategies for keeping your best talent and building a loyal workforce.',
    date: 'February 28, 2026',
    category: 'Retention',
    image: '🤝',
  },
];

export default function BlogsPage() {
  return (
    <>
      <PageHeader
        label="Blog"
        title="Insights & Resources"
        subtitle="Expert advice on recruitment, HR, and career development"
      />

      <Section alt>
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Card key={post.slug} className="overflow-hidden hover:shadow-card-hover transition-shadow">
                <div className="h-48 bg-navy/50 flex items-center justify-center">
                  <span className="text-6xl">{post.image}</span>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-gold">{post.category}</span>
                    <span className="text-xs text-text-soft">•</span>
                    <span className="text-xs text-text-soft">{post.date}</span>
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
    </>
  );
}
