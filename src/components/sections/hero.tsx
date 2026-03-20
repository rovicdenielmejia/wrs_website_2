import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface HeroProps {
  badge?: string;
  title: string;
  subtitle?: string;
  showCTA?: boolean;
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  ctaTertiary?: { label: string; href: string };
}

export function Hero({
  badge = 'Workforce Recruitment & HR Solutions PH',
  title,
  subtitle,
  showCTA = true,
  ctaPrimary = { label: 'Hire Talent', href: '/solutions/employers' },
  ctaSecondary = { label: 'Find Jobs', href: '/jobs' },
  ctaTertiary = { label: 'Book Consultation', href: '/book-consultation' },
}: HeroProps) {
  return (
    <section className="relative bg-navy pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_85%_55%_at_50%_-15%,rgba(193,157,67,0.06),transparent_50%)]" />
      
      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <Badge className="mb-6">{badge}</Badge>
          
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-gold sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          
          {subtitle && (
            <p className="mb-8 text-lg text-text-soft leading-relaxed max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
          
          {showCTA && (
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link href={ctaPrimary.href}>{ctaPrimary.label}</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href={ctaSecondary.href}>{ctaSecondary.label}</Link>
              </Button>
              <Button size="lg" variant="ghost" asChild>
                <Link href={ctaTertiary.href}>{ctaTertiary.label}</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export function PageHeader({
  label,
  title,
  subtitle,
}: {
  label: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="bg-navy pt-28 pb-16">
      <div className="container text-center">
        <Badge className="mb-4">{label}</Badge>
        <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-gold sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg text-text-soft max-w-2xl mx-auto">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
