# Workforce Recruitment Solutions (WRS) - Website Documentation

## Overview

| Property | Value |
|----------|-------|
| **Project Name** | Workforce Recruitment Solutions (WRS) |
| **Tagline** | HR & Recruitment Solutions - Information and hiring site |
| **Business Type** | Philippine-based HR & recruitment agency |
| **Domain** | workforcerecruitmentsolutions.com |
| **Established** | 2023 |
| **Copyright** | 2026 All Rights Reserved |
| **Architecture** | Static HTML/CSS/JavaScript website |

---

## Project Structure

```
WRS 2.0/
├── home.html                              # Homepage
├── about.html                             # About page
├── why-us.html                            # Value proposition page
├── jobs.html                              # Job listings page
├── blogs.html                             # Blog index page
├── faq.html                               # FAQ page
├── book-consultation.html                 # Consultation booking page
├── contact.html                           # Contact page
├── thank-you.html                          # Thank you page
├── pricing.html                            # Pricing page
├── WorkforceRecruitmentSolution-hr.html   # Legacy page (redirects to /hr)
│
├── solutions/                              # Solutions section
│   ├── solutions.html                     # Main solutions overview
│   ├── employers.html                     # Employer solutions page
│   └── job-seekers.html                   # Job seeker solutions page
│
├── blog/                                   # Individual blog posts (14 articles)
│   ├── hire-smarter-2026.html
│   ├── resume-tips-job-seekers.html
│   ├── hr-compliance-basics.html
│   ├── employee-retention-advantage.html
│   └── ...
│
├── legal/                                  # Legal pages
│   ├── privacy.html                       # Privacy Policy
│   └── terms.html                         # Terms of Service
│
├── css/                                    # Stylesheets
│   ├── styles.css                         # Main styles (~3,500 lines)
│   ├── styles-portal.css                  # Portal/conversion styles (~4,960 lines)
│   └── styles-hr.css                      # HR-specific styles
│
├── js/
│   └── script.js                          # Main JavaScript (~906 lines)
│
├── Assets/                                 # Images and logos
│   ├── Logo.png
│   ├── WRS@1000x.png
│   ├── og-preview.png
│   └── Jobs Assets/
│       ├── Oracle-HRMS-Techno-Functional.jpg
│       ├── Oracle-EBS-Finance-Techno-Functional-Analyst.jpg
│       ├── HR-Manager.jpg
│       └── Service-Crew.jpg
│
├── docs/                                   # Documentation
│   ├── FOLDER_STRUCTURE.md
│   ├── CONTACT_FORM_SETUP.md
│   ├── NAVIGATION.md
│   ├── FORMS_LIST.md
│   ├── JOB_POSTING_FORMAT.md
│   ├── DEPLOYMENT_SUMMARY.md
│   ├── DEPLOYMENT_CHECKLIST.md
│   ├── NETLIFY_DEPLOYMENT.md
│   └── PLATFORM_EXTENSIONS.md
│
├── package.json
├── vercel.json
├── netlify.toml
├── _redirects
├── sitemap.xml
├── robots.txt
└── README.md
```

---

## Features Breakdown

### Core Pages

| Page | Purpose | URL |
|------|---------|-----|
| `home.html` | Hero, services overview, employer/job seeker CTAs | / |
| `about.html` | Company and team information | /about |
| `why-us.html` | Value proposition and differentiation | /why-us |
| `pricing.html` | Plans and pricing for employers | /pricing |
| `jobs.html` | Job listings with filtering and search | /jobs |
| `faq.html` | FAQ section | /faq |
| `blogs.html` | Blog index | /blogs |
| `book-consultation.html` | Consultation request form | /book-consultation |
| `contact.html` | General contact page | /contact |
| `thank-you.html` | Form submission confirmation | /thank-you |

### Solutions Section

| Page | Purpose |
|------|---------|
| `solutions/solutions.html` | Main solutions overview |
| `solutions/employers.html` | Dedicated employer solutions |
| `solutions/job-seekers.html` | Job seeker / talent solutions |

### Blog Posts (14 Articles)

- How to Hire Smarter in 2026
- Resume Tips for Job Seekers
- HR Compliance Basics
- Employee Retention Advantage
- Remote Work Trends
- Career Advice Articles
- And more...

### Legal Pages

- Privacy Policy (`legal/privacy.html`)
- Terms of Service (`legal/terms.html`)

---

## Styling & Design

### CSS Framework

**Custom CSS (No Tailwind/Framework)**

| File | Lines | Purpose |
|------|-------|---------|
| `styles.css` | ~3,500 | Core styles: reset, typography, navigation, buttons, cards, forms, responsive layouts |
| `styles-portal.css` | ~4,960 | Conversion/CTA styles: hero variations, portal-specific layouts, modal styles |
| `styles-hr.css` | N/A | HR-specific overrides |

### Design System

#### Color Palette

```css
--navy: #132237;
--royal: #1F376A;
--accent-blue: #3A73B3;
--gold: #C19D43;
--light-bg: #EFF0F1;
```

#### Typography

- **Primary Font**: Plus Jakarta Sans (headings/body)
- **Accent Font**: Source Serif 4
- **Google Fonts API** for font loading

### CSS Features

- CSS Variables for theming
- CSS Grid & Flexbox layouts
- Glass morphism effects (`backdrop-filter: blur`)
- Responsive design with media queries
- CSS animations (reveal effects, transitions)

### Accessibility

- Skip link for keyboard navigation
- ARIA labels on navigation and modals
- Focus states for interactive elements
- Semantic HTML (`nav`, `main`, `section`, `article`, `header`, `footer`)
- Screen reader friendly labels

---

## JavaScript Functionality

### Core Features (`script.js` - 906 lines)

| Feature | Description |
|---------|-------------|
| Job Management | `defaultJobs` array with job data, filtering, search |
| Job Details Modal | View job details with responsibilities/skills |
| Apply Modal | Opens JotForm iframe for job applications |
| Consultation Modal | Site-wide modal injected for booking consultations |
| Job Seeker Support Modal | Resume support and coaching session forms |
| Form Handling | Formspree integration, localStorage, honeypot spam protection |
| Newsletter Overlay | Popup banner with Formspree integration |
| Mobile Navigation | Hamburger menu with mega-menu support |
| Smooth Scrolling | Anchor link smooth scrolling |
| Section Reveal | IntersectionObserver-based animations |
| Back to Top | Scroll-triggered button |
| Navbar Scroll | Shadow effect on scroll |

---

## Form Handling

### Forms Overview

| Form | Page | Backend | Purpose |
|------|------|--------|---------|
| Contact/Inquiry | contact.html | Mailto (native) | General inquiries |
| Consultation (Page) | book-consultation.html | localStorage | Book a call |
| Consultation (Modal) | Site-wide | Formspree | Book consultation |
| Job Seeker Support | job-seekers.html | Formspree | Resume/Coaching |
| Talent Network | job-seekers.html | JotForm iframe | Resume submission |
| Job Application | jobs.html | Job-specific JotForms | Apply to jobs |
| Newsletter | Site-wide popup | Formspree | Email signup |

### Form Endpoints

**Formspree Forms:**
- Consultation: `https://formspree.io/f/mbdavdzr`
- Newsletter: `https://formspree.io/f/mbdavorz`

**JotForm Applications:**
- Oracle HRMS: `form.jotform.com/260543427010041`
- Oracle EBS Finance: `form.jotform.com/260605022887457`
- HR Manager: `form.jotform.com/260604609619460`
- Service Crew: `form.jotform.com/260604773110448`
- Talent Network: `form.jotform.com/260543773465059`

### localStorage Keys

| Key | Purpose |
|-----|---------|
| `wrs_contact_inquiries` | Contact form data |
| `wrs_consultations` | Consultation requests |
| `wrs_talent_applications` | Talent submissions |
| `wrs_job_alerts` | Job alert preferences |
| `newsletter-banner-signedup` | Newsletter popup state |

---

## State Management

- **Client-side only** - No database or server-side state
- **localStorage** for form data persistence and user preferences
- **sessionStorage** for job selection state
- **JavaScript arrays** for job data (in script.js)
- **URL parameters** for form redirects

---

## Integrations

### Third-Party Services

| Service | Purpose | Integration |
|---------|---------|-------------|
| Vercel | Primary hosting | vercel.json config |
| Netlify | Alternative hosting | netlify.toml, _redirects |
| Formspree | Form backend/email | HTML form attributes |
| JotForm | Job application forms | iframe embeds |
| Google Fonts | Typography | Plus Jakarta Sans, Source Serif 4 |

### Future Integrations (PLATFORM_EXTENSIONS.md)

- **Email/SMS/WhatsApp** - Automation workflows
- **CRM** - HubSpot, Salesforce sync
- **Calendar** - Google, Outlook integration
- **Stripe/PayMongo/PayPal** - Future billing
- **AI Services** - Resume parsing, smart matching (planned)

---

## SEO

### Per-Page SEO Elements

- Meta description
- Open Graph tags (title, description, image, url, type, site_name, locale)
- Twitter Card metadata
- Canonical URL
- Favicon and Apple Touch Icon

### Site-wide SEO

- `sitemap.xml` - 31 URLs indexed
- `robots.txt` - Allows all crawlers
- Structured navigation with semantic HTML

---

## Security

### HTTP Headers (Vercel & Netlify)

```nginx
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: geolocation=(), microphone=(), camera=()
```

### Form Security

- Honeypot field for spam protection
- CSRF handled by Formspree/JotForm
- `escapeHtml()` function for XSS prevention
- Environment variables gitignored

---

## Performance

### Caching Strategy

| Asset Type | Cache-Control |
|------------|--------------|
| .html | public, max-age=3600, must-revalidate |
| .css | public, max-age=31536000, immutable |
| .js | public, max-age=31536000, immutable |
| Assets | public, max-age=31536000, immutable |

### Optimizations

- Preconnect to Google Fonts
- Lazy loading images
- Intersection Observer for animations
- Passive scroll event listeners

---

## Job Listings

| ID | Title | Location | Industry |
|----|-------|----------|----------|
| 1 | Oracle HRMS Techno-Functional | KSA | Technology |
| 2 | Oracle EBS Finance Techno-Functional Analyst | Al Khobar, Saudi Arabia | Technology |
| 3 | HR Manager | Pending | - |
| 4 | Barista/Service Crew | Pending | - |

---

## URL Routing

**Clean URL Mapping** (Vercel/Netlify rewrites):

| Clean URL | Maps To |
|-----------|---------|
| `/` | `/home.html` |
| `/about` | `/about.html` |
| `/jobs` | `/jobs.html` |
| `/blog/[slug]` | `/blog/[slug].html` |
| `/solutions` | `/solutions/solutions.html` |
| `/legal/privacy` | `/legal/privacy.html` |

**301 Redirects** from `.html` to clean URLs for SEO.

---

## Development

### Commands

```bash
npm install          # Install dependencies (vercel CLI)
npm run dev          # Run 'vercel dev' for local preview
```

### Requirements

- Node.js >=18
- Vercel CLI (for local development)

### Deployment Platforms

1. **Vercel** (Primary) - `vercel.json`
2. **Netlify** (Alternative) - `netlify.toml`, `_redirects`

---

## Documentation

| Document | Purpose |
|----------|---------|
| `FOLDER_STRUCTURE.md` | Complete file/directory map |
| `CONTACT_FORM_SETUP.md` | Formspree setup guide |
| `NAVIGATION.md` | Nav items and page mappings |
| `FORMS_LIST.md` | All forms, fields, endpoints |
| `JOB_POSTING_FORMAT.md` | Job data structure and examples |
| `DEPLOYMENT_SUMMARY.md` | Quick deployment overview |
| `DEPLOYMENT_CHECKLIST.md` | Pre/post deployment checklist |
| `NETLIFY_DEPLOYMENT.md` | Netlify-specific guide |
| `PLATFORM_EXTENSIONS.md` | Future AI/SaaS/Mobile specs |

---

## Summary

This is a **well-structured static website** for an HR & Recruitment agency in the Philippines. It uses:

- **Pure HTML/CSS/JS** with no frontend framework
- **Multiple deployment options** (Vercel primary, Netlify alternative)
- **Third-party form services** for handling inquiries and applications
- **Comprehensive documentation** for future maintenance
- **SEO-optimized** with proper metadata and sitemap
- **Security-hardened** with proper headers
- **Responsive design** with premium styling

The architecture is clean, scalable, and ready for future enhancements like AI-powered features, mobile apps, and SaaS platforms.
