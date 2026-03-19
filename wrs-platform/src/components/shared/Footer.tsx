import Link from 'next/link'

const footerLinks = {
  solutions: {
    title: 'Solutions',
    links: [
      { name: 'For Employers', href: '/solutions/employers' },
      { name: 'For Job Seekers', href: '/solutions/job-seekers' },
      { name: 'Talent Acquisition', href: '/solutions/employers#talent-acquisition' },
      { name: 'HR Consulting', href: '/solutions/employers#hr-consulting' },
      { name: 'Workforce Planning', href: '/solutions/employers#workforce-planning' },
    ],
  },
  company: {
    title: 'Company',
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'Why Us', href: '/why-us' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Contact', href: '/contact' },
      { name: 'Blogs', href: '/blogs' },
    ],
  },
  legal: {
    title: 'Legal',
    links: [
      { name: 'Privacy Policy', href: '/legal/privacy' },
      { name: 'Terms of Use', href: '/legal/terms' },
    ],
  },
}

const contactInfo = {
  email: 'wrs.recruitment.hr@gmail.com',
  email2: 'wrs.workforce.hr@gmail.com',
  phone: '+63 975 563 6276',
  address: 'Philippines',
}

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-block">
              <img src="/Assets/Logo.png" alt="WRS" className="h-12 w-auto brightness-0 invert" />
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed max-w-md">
              Workforce Recruitment & HR Solutions PH helps SMEs and scaling companies hire smarter,
              structure HR processes, and build stable, high-performing teams.
            </p>
            <div className="space-y-3">
              <p className="text-sm font-semibold">Contact Us</p>
              <div className="space-y-2 text-sm text-gray-300">
                <p>
                  <span className="mr-2">📧</span>
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-white transition-colors">
                    {contactInfo.email}
                  </a>
                </p>
                <p>
                  <span className="mr-2">📧</span>
                  <a href={`mailto:${contactInfo.email2}`} className="hover:text-white transition-colors">
                    {contactInfo.email2}
                  </a>
                </p>
                <p>
                  <span className="mr-2">📞</span>
                  <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="hover:text-white transition-colors">
                    {contactInfo.phone}
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key} className="space-y-4">
              <h4 className="font-semibold text-sm uppercase tracking-wider">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Workforce Recruitment & HR Solutions PH. All Rights Reserved.
          </p>
          <p className="text-sm text-gray-400">
            EST. 2023 | Building Stronger Teams. Structuring Better Systems. Supporting Sustainable Growth.
          </p>
        </div>
      </div>
    </footer>
  )
}
