import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
  alt?: boolean;
  soft?: boolean;
}

export function Section({ children, className, dark, alt, soft }: SectionProps) {
  return (
    <section
      className={cn(
        'py-section',
        dark && 'bg-navy text-text-dark',
        alt && 'bg-royal text-text-dark',
        soft && 'bg-light-bg text-text-light border-t border-black/5 border-b',
        className
      )}
    >
      {children}
    </section>
  );
}

interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeader({ label, title, subtitle, centered = true }: SectionHeaderProps) {
  return (
    <div className={cn('mb-12', centered && 'text-center')}>
      {label && (
        <p className="mb-4 text-xs font-bold uppercase tracking-widest text-gold">
          {label}
        </p>
      )}
      <h2 className="text-2xl font-extrabold tracking-tight text-gold sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className={cn('mt-4 text-base text-text-soft max-w-2xl', centered && 'mx-auto')}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function SectionDivider() {
  return (
    <div className="flex items-center justify-center py-10" aria-hidden="true">
      <div className="h-px w-32 bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      <div className="mx-4 h-2.5 w-2.5 rounded-full bg-gold animate-float" />
      <div className="h-px w-32 bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
    </div>
  );
}
