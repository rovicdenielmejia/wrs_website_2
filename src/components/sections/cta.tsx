import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SectionHeader } from './section';

export function CTASection() {
  return (
    <section className="bg-navy py-section-lg relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_85%_55%_at_50%_-15%,rgba(193,157,67,0.06),transparent_50%)]" />
      <div className="container relative text-center">
        <SectionHeader
          title="Ready to Build Your Dream Team?"
          subtitle="Let's discuss how we can help you find the right talent or advance your career."
        />
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="/book-consultation">Schedule a Consultation</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/jobs">Browse Jobs</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

interface CTAWrapProps {
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
}

export function CTAWrap({ primary, secondary }: CTAWrapProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      <Button asChild>
        <Link href={primary.href}>{primary.label}</Link>
      </Button>
      {secondary && (
        <Button variant="outline-small" asChild>
          <Link href={secondary.href}>{secondary.label}</Link>
        </Button>
      )}
    </div>
  );
}
