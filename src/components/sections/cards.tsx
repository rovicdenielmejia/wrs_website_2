import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface CardItem {
  icon: string;
  title: string;
  description: string;
  href?: string;
  linkText?: string;
}

interface CardGridProps {
  items: CardItem[];
  columns?: 2 | 3 | 4;
  className?: string;
}

export function CardGrid({ items, columns = 3, className }: CardGridProps) {
  return (
    <div
      className={cn(
        'grid gap-6',
        columns === 2 && 'md:grid-cols-2',
        columns === 3 && 'md:grid-cols-2 lg:grid-cols-3',
        columns === 4 && 'md:grid-cols-2 lg:grid-cols-4',
        className
      )}
    >
      {items.map((item, index) => (
        <Card
          key={index}
          className="group relative overflow-hidden border-t-4 border-t-gold hover:-translate-y-1 hover:shadow-card-hover"
        >
          <CardContent className="p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-blue/15 text-2xl">
              {item.icon}
            </div>
            <h3 className="mb-2 text-lg font-bold text-gold">{item.title}</h3>
            <p className="text-sm text-text-soft">{item.description}</p>
            {item.href && (
              <Link
                href={item.href}
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent-blue transition-colors group-hover:text-accent-blue-hover"
              >
                {item.linkText || 'Learn More'}
                <ArrowRight className="h-4 w-4" />
              </Link>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

interface ConversionCardProps {
  icon: string;
  title: string;
  description: string;
  linkHref: string;
  linkLabel: string;
}

export function ConversionCard({ icon, title, description, linkHref, linkLabel }: ConversionCardProps) {
  return (
    <Card className="text-center p-8">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="mb-2 text-lg font-bold text-gold">{title}</h3>
      <p className="text-sm text-text-soft mb-4">{description}</p>
      <Link
        href={linkHref}
        className="inline-flex items-center gap-1 text-sm font-semibold text-accent-blue hover:text-accent-blue-hover transition-colors"
      >
        {linkLabel}
        <ArrowRight className="h-4 w-4" />
      </Link>
    </Card>
  );
}

interface WhyListProps {
  items: string[];
  className?: string;
}

export function WhyList({ items, className }: WhyListProps) {
  return (
    <ul className={cn('mx-auto max-w-2xl space-y-3', className)}>
      {items.map((item, index) => (
        <li
          key={index}
          className="flex items-start gap-3 rounded-md border-l-4 border-l-gold bg-glass/90 px-4 py-3 text-sm text-text-soft backdrop-blur-sm transition-all hover:translate-x-2 hover:bg-glass"
        >
          <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-gold" />
          {item}
        </li>
      ))}
    </ul>
  );
}
