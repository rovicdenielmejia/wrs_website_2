'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown, Building2, Users, Briefcase, UserCircle, FileText, Phone } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Why Us', href: '/why-us' },
  {
    name: 'Solutions',
    href: '/solutions',
    children: [
      {
        title: 'Employers',
        items: [
          { name: 'Talent Acquisition', href: '/solutions/employers#talent-acquisition' },
          { name: 'Executive Search', href: '/solutions/employers#executive-search' },
          { name: 'Contract Staffing', href: '/solutions/employers#contract-staffing' },
          { name: 'Workforce Planning', href: '/solutions/employers#workforce-planning' },
          { name: 'HR Consulting', href: '/solutions/employers#hr-consulting' },
        ],
      },
      {
        title: 'Talent',
        items: [
          { name: 'Job Matching', href: '/jobs' },
          { name: 'Resume & Career Support', href: '/book-consultation' },
          { name: 'Interview Coaching', href: '/book-consultation' },
          { name: 'Remote Careers', href: '/jobs' },
        ],
      },
    ],
  },
  {
    name: 'About',
    href: '/about',
    children: [
      {
        title: 'Company',
        items: [
          { name: 'About Us', href: '/about' },
          { name: 'FAQ', href: '/faq' },
          { name: 'Blogs', href: '/blogs' },
        ],
      },
    ],
  },
  { name: 'Jobs', href: '/jobs' },
]

const contactInfo = {
  email: 'wrs.recruitment.hr@gmail.com',
  phone: '+63 975 563 6276',
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null)
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <nav className="container" aria-label="Main navigation">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <img src="/Assets/Logo.png" alt="WRS" className="h-10 w-auto" />
            <span className="hidden md:block text-sm font-medium text-gray-600 leading-tight">
              Workforce Recruitment
              <br />
              & HR Solutions PH
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.children ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(item.name)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        'flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-700 hover:text-navy rounded-lg hover:bg-gray-50 transition-colors',
                        pathname === item.href && 'text-navy bg-navy/5'
                      )}
                    >
                      {item.name}
                      <ChevronDown className="w-4 h-4" />
                    </Link>

                    {/* Mega Menu */}
                    {openDropdown === item.name && (
                      <Card className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[600px] p-0 shadow-xl border-0 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                        <CardContent className="p-6">
                          <div className={cn('grid', item.children.length === 1 ? 'grid-cols-1' : 'grid-cols-2')}>
                            {item.children.map((section) => (
                              <div key={section.title} className="space-y-3">
                                <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                                  {section.title === 'Employers' && <Building2 className="w-4 h-4" />}
                                  {section.title === 'Talent' && <Users className="w-4 h-4" />}
                                  {section.title === 'Company' && <Briefcase className="w-4 h-4" />}
                                  {section.title}
                                </h4>
                                <ul className="space-y-2">
                                  {section.items.map((subItem) => (
                                    <li key={subItem.name}>
                                      <Link
                                        href={subItem.href}
                                        className="block text-sm text-gray-600 hover:text-navy transition-colors"
                                      >
                                        {subItem.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                          <div className="mt-6 pt-6 border-t border-gray-100 flex gap-4">
                            <Link href="/solutions/employers" className="text-sm font-medium text-navy hover:underline">
                              View Employer Solutions →
                            </Link>
                            <Link href="/jobs" className="text-sm font-medium text-steel hover:underline">
                              Explore Careers →
                            </Link>
                          </div>
                        </CardContent>
                      </Card>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      'px-4 py-2 text-sm font-medium text-gray-700 hover:text-navy rounded-lg hover:bg-gray-50 transition-colors',
                      pathname === item.href && 'text-navy bg-navy/5'
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/book-consultation">
              <Button variant="employer" size="sm">
                Book Consultation
              </Button>
            </Link>
            <Link href="/admin/login">
              <Button variant="ghost" size="sm">
                Admin Login
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 py-4 animate-in slide-in-from-top-2">
            <div className="space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className={cn(
                      'block px-4 py-3 text-base font-medium text-gray-700 hover:text-navy hover:bg-gray-50 rounded-lg',
                      pathname === item.href && 'text-navy bg-navy/5'
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.children && (
                    <div className="pl-6 space-y-1 mt-1">
                      {item.children.map((section) =>
                        section.items.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-600 hover:text-navy hover:bg-gray-50 rounded-lg"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col gap-2 px-4">
              <Link href="/book-consultation" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full" variant="employer">
                  Book Consultation
                </Button>
              </Link>
              <Link href="/admin/login" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full" variant="outline">
                  Admin Login
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
