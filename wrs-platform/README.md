# ============================================
# WRS - Workforce Recruitment Solutions
# Full Recruitment Platform
# ============================================

## Project Overview

**Brand:** Workforce Recruitment & HR Solutions PH (WRS)
**Domain:** www.workforcerecruitmentsolutions.com
**Tagline:** Building Stronger Workforces. Connecting the Right People to the Right Opportunities.

## Tech Stack

- **Frontend:** Next.js 14 (App Router), TypeScript, TailwindCSS, ShadCN UI, Framer Motion
- **Backend:** Node.js via Next.js API Routes
- **Database:** PostgreSQL with Prisma ORM
- **Auth:** NextAuth.js with JWT
- **Deployment:** Vercel (Frontend), Railway/Supabase (Database)

---

## System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    PUBLIC WEBSITE                            │
│  (Marketing Site - Public Access)                           │
│  - Home, About, Solutions, Jobs, Blogs, Contact, FAQ       │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                    API LAYER                                │
│  (Next.js API Routes - RESTful)                           │
│  - /api/jobs, /api/applications, /api/blogs, /api/auth     │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                 ADMIN PANEL                                  │
│  (Protected - Admin/Recruiter Access)                      │
│  - Dashboard, Jobs, Applicants, Employers, Blog, Settings  │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                 DATABASE                                     │
│  (PostgreSQL + Prisma ORM)                                 │
│  - Users, Jobs, Applicants, Employers, Blogs, etc.        │
└─────────────────────────────────────────────────────────────┘
```

---

## Folder Structure

```
wrs-platform/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── prisma/
│   ├── schema.prisma
│   ├── seed.ts
│   └── migrations/
├── src/
│   ├── app/
│   │   ├── (public)/                 # Public marketing site
│   │   │   ├── page.tsx             # Home
│   │   │   ├── about/page.tsx
│   │   │   ├── solutions/
│   │   │   │   ├── page.tsx         # Solutions overview
│   │   │   │   ├── employers/page.tsx
│   │   │   │   └── job-seekers/page.tsx
│   │   │   ├── jobs/
│   │   │   │   ├── page.tsx        # Job listings
│   │   │   │   └── [id]/page.tsx   # Job details
│   │   │   ├── blogs/
│   │   │   │   ├── page.tsx        # Blog listing
│   │   │   │   └── [slug]/page.tsx # Blog post
│   │   │   ├── contact/page.tsx
│   │   │   ├── faq/page.tsx
│   │   │   ├── book-consultation/page.tsx
│   │   │   ├── thank-you/page.tsx
│   │   │   └── legal/
│   │   │       ├── privacy/page.tsx
│   │   │       └── terms/page.tsx
│   │   │
│   │   ├── (admin)/                  # Admin panel
│   │   │   ├── layout.tsx           # Admin layout
│   │   │   ├── dashboard/page.tsx
│   │   │   ├── jobs/
│   │   │   │   ├── page.tsx        # Jobs list
│   │   │   │   ├── new/page.tsx    # Create job
│   │   │   │   └── [id]/edit/page.tsx
│   │   │   ├── applicants/
│   │   │   │   ├── page.tsx        # All applicants
│   │   │   │   └── [id]/page.tsx   # Applicant details
│   │   │   ├── employers/page.tsx
│   │   │   ├── blogs/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── new/page.tsx
│   │   │   │   └── [id]/edit/page.tsx
│   │   │   ├── consultations/page.tsx
│   │   │   ├── users/page.tsx
│   │   │   └── settings/page.tsx
│   │   │
│   │   ├── auth/
│   │   │   ├── login/page.tsx
│   │   │   ├── register/page.tsx
│   │   │   └── layout.tsx
│   │   │
│   │   ├── api/                      # API Routes
│   │   │   ├── auth/[...nextauth]/route.ts
│   │   │   ├── jobs/route.ts
│   │   │   ├── jobs/[id]/route.ts
│   │   │   ├── applications/route.ts
│   │   │   ├── applications/[id]/route.ts
│   │   │   ├── blogs/route.ts
│   │   │   ├── consultations/route.ts
│   │   │   ├── employers/route.ts
│   │   │   └── users/route.ts
│   │   │
│   │   ├── layout.tsx
│   │   └── globals.css
│   │
│   ├── components/
│   │   ├── ui/                       # ShadCN components
│   │   │   ├── button.tsx
│   │   │   ├── input.tsx
│   │   │   ├── card.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── select.tsx
│   │   │   ├── table.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── avatar.tsx
│   │   │   ├── dropdown-menu.tsx
│   │   │   ├── tabs.tsx
│   │   │   ├── separator.tsx
│   │   │   └── ...
│   │   │
│   │   ├── shared/                   # Shared components
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── MegaMenu.tsx
│   │   │   ├── MobileNav.tsx
│   │   │   ├── SEOHead.tsx
│   │   │   └── ConsultationModal.tsx
│   │   │
│   │   ├── home/
│   │   │   ├── Hero.tsx
│   │   │   ├── ServicesSection.tsx
│   │   │   ├── ProcessSection.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   └── PricingSection.tsx
│   │   │
│   │   ├── jobs/
│   │   │   ├── JobCard.tsx
│   │   │   ├── JobFilters.tsx
│   │   │   ├── JobList.tsx
│   │   │   └── ApplyForm.tsx
│   │   │
│   │   ├── blog/
│   │   │   ├── BlogCard.tsx
│   │   │   ├── BlogList.tsx
│   │   │   └── BlogContent.tsx
│   │   │
│   │   └── admin/
│   │       ├── AdminSidebar.tsx
│   │       ├── AdminHeader.tsx
│   │       ├── StatsCard.tsx
│   │       ├── DataTable.tsx
│   │       └── StatusBadge.tsx
│   │
│   ├── lib/
│   │   ├── prisma.ts                 # Prisma client
│   │   ├── auth.ts                  # Auth configuration
│   │   ├── utils.ts                 # Utilities
│   │   ├── validators/              # Zod schemas
│   │   │   ├── job.ts
│   │   │   ├── application.ts
│   │   │   └── blog.ts
│   │   └── constants.ts             # App constants
│   │
│   ├── services/                     # Business logic
│   │   ├── job.service.ts
│   │   ├── application.service.ts
│   │   ├── blog.service.ts
│   │   ├── user.service.ts
│   │   └── email.service.ts
│   │
│   ├── types/                        # TypeScript types
│   │   ├── job.ts
│   │   ├── applicant.ts
│   │   ├── blog.ts
│   │   └── index.ts
│   │
│   └── hooks/                        # Custom hooks
│       ├── useJobs.ts
│       ├── useAuth.ts
│       └── useToast.ts
│
├── public/
│   ├── Assets/
│   │   ├── Logo.png
│   │   ├── og-preview.png
│   │   └── icons/
│   └── favicon.ico
│
├── .env.example
├── .gitignore
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
├── components.json
├── drizzle.config.ts
├── vercel.json
└── README.md
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL 14+
- npm/yarn/pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/your-repo/wrs-platform.git
cd wrs-platform

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Setup database
npx prisma generate
npx prisma db push

# Seed database
npx prisma db seed

# Run development server
npm run dev
```

### Environment Variables

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/wrs_db"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"

# OAuth (optional)
GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""

# Email (optional)
SMTP_HOST=""
SMTP_PORT=""
SMTP_USER=""
SMTP_PASS=""
```

---

## Database Schema Overview

### Core Tables

| Table | Description |
|-------|-------------|
| users | Admin, recruiters, employer accounts |
| roles | System roles (admin, recruiter, employer) |
| jobs | Job postings |
| applications | Job applications |
| employers | Employer/company profiles |
| blogs | Blog posts |
| categories | Blog/job categories |
| consultations | Consultation requests |
| activity_logs | Admin activity tracking |

### Relationships

- users → roles (many-to-one)
- jobs → employers (many-to-one)
- jobs → categories (many-to-one)
- applications → jobs (many-to-one)
- applications → users (many-to-one)
- blogs → categories (many-to-one)
- consultations → employers (many-to-one)

---

## API Routes Overview

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/auth/*` | GET/POST | Authentication |
| `/api/jobs` | GET/POST | List/Create jobs |
| `/api/jobs/[id]` | GET/PUT/DELETE | Job CRUD |
| `/api/applications` | GET/POST | List/Create applications |
| `/api/applications/[id]` | GET/PUT | Application details |
| `/api/blogs` | GET/POST | List/Create blogs |
| `/api/blogs/[id]` | GET/PUT/DELETE | Blog CRUD |
| `/api/consultations` | GET/POST | Consultation requests |
| `/api/employers` | GET/POST | Employer management |
| `/api/users` | GET/PUT | User management |

---

## Admin Panel Features

### Dashboard
- Total jobs, applicants, hires KPIs
- Monthly application chart
- Recent activity feed
- Quick actions

### Jobs Management
- CRUD operations
- Status management (draft, published, closed)
- Featured job toggle
- Applicant count per job

### Applicants (ATS)
- Kanban pipeline view
- Drag-and-drop status changes
- Resume upload/view
- Notes and tags
- Bulk actions

### Employers
- Company profiles
- Active job count
- Hiring history
- Contact management

### Blog CMS
- Rich text editor
- Image upload
- SEO fields
- Categories and tags
- Publish scheduling

### Consultations
- Request inbox
- Status tracking
- Notes
- Follow-up reminders

### Settings
- Profile settings
- Email templates
- System configuration
- Role permissions

---

## Deployment

### Vercel (Recommended)

1. Connect GitHub repository
2. Configure environment variables
3. Deploy

```bash
# Or via CLI
vercel --prod
```

### Database (Railway/Supabase)

1. Create PostgreSQL instance
2. Get connection string
3. Add to environment variables

---

## Future SaaS Features

- Multi-tenant architecture
- Subscription plans (Starter, Professional, Enterprise)
- Employer self-service portal
- AI-powered matching
- Mobile apps (iOS/Android)
- Advanced analytics
- Custom workflows

---

## License

© 2026 Workforce Recruitment & HR Solutions PH. All Rights Reserved.
