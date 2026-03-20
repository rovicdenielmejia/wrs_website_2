'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Why Us', href: '/why-us' },
  {
    label: 'Solutions',
    href: '/solutions',
    children: [
      {
        title: 'Employers',
        icon: '👔',
        items: [
          { label: 'Talent Acquisition', href: '/solutions#talent-acquisition', description: 'End-to-end recruitment solutions' },
          { label: 'Executive Search', href: '/solutions#executive-search', description: 'C-suite & senior leadership' },
          { label: 'Contract Staffing', href: '/solutions#contract-staffing', description: 'Flexible workforce solutions' },
          { label: 'HR Consulting', href: '/solutions#hr-consulting', description: 'Strategic HR partnership' },
        ],
        cta: { label: 'Employers Page', href: '/solutions/employers' },
      },
      {
        title: 'Talent',
        icon: '👩‍💼',
        items: [
          { label: 'Job Matching', href: '/solutions#job-matching', description: 'Personalized job recommendations' },
          { label: 'Resume Support', href: '/solutions#resume-support', description: 'Professional resume crafting' },
          { label: 'Interview Coaching', href: '/solutions#interview-coaching', description: 'Ace your interviews' },
          { label: 'Remote Careers', href: '/solutions#remote-careers', description: 'Work from anywhere' },
        ],
        cta: { label: 'Job Seekers Page', href: '/solutions/job-seekers' },
      },
    ],
  },
  { label: 'About', href: '/about' },
  { label: 'Jobs', href: '/jobs' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMega, setActiveMega] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-[1000] transition-all duration-300',
        scrolled
          ? 'bg-navy/92 backdrop-blur-2xl shadow-nav border-b border-border'
          : 'bg-transparent'
      )}
    >
      <div className="container">
        <div className="flex h-[72px] items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-10 w-10">
              <div className="absolute inset-0 rounded-sm bg-gradient-to-br from-accent-blue to-gold opacity-80" />
              <div className="absolute inset-[2px] rounded-sm bg-navy flex items-center justify-center">
                <span className="text-gold font-bold text-lg">W</span>
              </div>
            </div>
            <span className="hidden text-sm font-semibold text-text-dark sm:block">
              Workforce Recruitment<br />
              <span className="text-gold">& HR Solutions PH</span>
            </span>
          </Link>

          <div className="hidden lg:flex lg:items-center lg:gap-6">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setActiveMega(item.label)}
                onMouseLeave={() => setActiveMega(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    'flex items-center gap-1 py-2 text-sm font-medium text-text-dark transition-colors hover:text-gold',
                    activeMega === item.label && 'text-gold'
                  )}
                >
                  {item.label}
                  {item.children && <ChevronDown className="h-4 w-4" />}
                </Link>

                {item.children && activeMega === item.label && (
                  <div className="absolute left-1/2 top-full -translate-x-1/2 pt-2">
                    <div className="w-[480px] rounded-xl border border-border bg-royal shadow-lg">
                      <div className="grid grid-cols-2 gap-6 p-6">
                        {item.children.map((section) => (
                          <div key={section.title}>
                            <h4 className="flex items-center gap-2 text-sm font-bold text-gold">
                              <span>{section.icon}</span>
                              {section.title}
                            </h4>
                            <div className="mt-3 space-y-2">
                              {section.items.map((subItem) => (
                                <Link
                                  key={subItem.label}
                                  href={subItem.href}
                                  className="block text-sm text-text-soft transition-colors hover:text-text-dark"
                                >
                                  <span className="font-medium">{subItem.label}</span>
                                  {subItem.description && (
                                    <p className="text-xs text-text-soft/70">{subItem.description}</p>
                                  )}
                                </Link>
                              ))}
                            </div>
                            <Link
                              href={section.cta.href}
                              className="mt-3 inline-block text-xs font-semibold text-gold hover:underline"
                            >
                              {section.cta.label} →
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden lg:flex lg:items-center lg:gap-3">
            <Button variant="outline" size="sm" asChild>
              <Link href="/jobs">Find Jobs</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/book-consultation">Book Consultation</Link>
            </Button>
          </div>

          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-text-dark" />
            ) : (
              <Menu className="h-6 w-6 text-text-dark" />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="bg-navy lg:hidden">
          <div className="container py-4 space-y-2">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  className="block py-2 text-sm font-medium text-text-dark"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="pl-4 space-y-1">
                    {item.children.map((section) => (
                      <div key={section.title}>
                        <p className="py-1 text-xs font-bold text-gold">{section.title}</p>
                        {section.items.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            className="block py-1 text-sm text-text-soft"
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 flex flex-col gap-2">
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link href="/jobs" onClick={() => setIsOpen(false)}>Find Jobs</Link>
              </Button>
              <Button size="sm" className="w-full" asChild>
                <Link href="/book-consultation" onClick={() => setIsOpen(false)}>
                  Book Consultation
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
