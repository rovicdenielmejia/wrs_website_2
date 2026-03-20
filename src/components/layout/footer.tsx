import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-navy border-t border-border">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative h-10 w-10">
                <div className="absolute inset-0 rounded-sm bg-gradient-to-br from-accent-blue to-gold opacity-80" />
                <div className="absolute inset-[2px] rounded-sm bg-navy flex items-center justify-center">
                  <span className="text-gold font-bold text-lg">W</span>
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-text-dark">
                  Workforce Recruitment & HR Solutions PH
                </p>
                <p className="text-xs text-text-soft">
                  Building Stronger Workforces
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm text-text-soft max-w-md">
              Connecting the right people to the right opportunities. We help SMEs and 
              scaling companies build high-performing teams through strategic talent solutions.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold text-gold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/jobs" className="text-text-soft hover:text-text-dark transition-colors">Jobs</Link></li>
              <li><Link href="/solutions" className="text-text-soft hover:text-text-dark transition-colors">Solutions</Link></li>
              <li><Link href="/about" className="text-text-soft hover:text-text-dark transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-text-soft hover:text-text-dark transition-colors">Contact</Link></li>
              <li><Link href="/book-consultation" className="text-text-soft hover:text-text-dark transition-colors">Book Consultation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold text-gold">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-text-soft">
                <Mail className="h-4 w-4 text-gold" />
                <a href="mailto:wrs.recruitment.hr@gmail.com" className="hover:text-text-dark transition-colors">
                  wrs.recruitment.hr@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-text-soft">
                <Mail className="h-4 w-4 text-gold" />
                <a href="mailto:wrs.workforce.hr@gmail.com" className="hover:text-text-dark transition-colors">
                  wrs.workforce.hr@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-text-soft">
                <Phone className="h-4 w-4 text-gold" />
                <a href="tel:+639755636276" className="hover:text-text-dark transition-colors">
                  +63 975 563 6276
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-text-soft">
              © 2026 Workforce Recruitment & HR Solutions PH. All Rights Reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/legal/privacy" className="text-text-soft hover:text-text-dark transition-colors">
                Privacy Policy
              </Link>
              <Link href="/legal/terms" className="text-text-soft hover:text-text-dark transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
