# WRS 2.0 - Recruitment Platform

Modern Next.js recruitment platform for Workforce Recruitment & HR Solutions PH.

## What This Is

A full-featured SaaS recruitment platform built with Next.js 14, featuring:
- Public website with job listings and company information
- Admin dashboard with Applicant Tracking System (ATS)
- CMS for blogs and content management
- Contact and consultation forms
- RESTful API for all functionality

## Quick Start

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your database URL

# Generate Prisma client
npm run db:generate

# Push schema to database
npm run db:push

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Tech Stack

| Component | Technology |
|-----------|------------|
| Frontend | Next.js 14, React 18, TypeScript |
| Styling | TailwindCSS, ShadCN UI |
| Animation | Framer Motion |
| Database | PostgreSQL |
| ORM | Prisma |
| Auth | JWT (jose) |
| Deployment | Vercel |

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── (public)/           # Public pages
│   │   ├── page.tsx       # Home
│   │   ├── jobs/          # Job listings
│   │   ├── solutions/      # Solutions pages
│   │   ├── about/          # About page
│   │   ├── contact/        # Contact page
│   │   ├── faq/            # FAQ page
│   │   └── blog/           # Blog pages
│   ├── (admin)/            # Admin dashboard
│   │   ├── page.tsx        # Dashboard
│   │   ├── jobs/           # Job management
│   │   ├── applicants/     # ATS
│   │   ├── employers/      # Employer management
│   │   ├── consultations/  # Consultation tracking
│   │   └── blogs/          # CMS
│   └── api/                # API routes
├── components/             # React components
│   ├── ui/                 # Base UI components
│   ├── layout/             # Layout components
│   └── sections/           # Page sections
├── lib/                    # Utilities
│   ├── prisma.ts          # Prisma client
│   ├── auth.ts            # Authentication
│   └── utils.ts           # Common utilities
└── types/                  # TypeScript types
```

## Features

### Public Website
- Responsive design with premium dark theme
- Job listings with filtering and search
- Company solutions pages
- Blog/articles section
- Contact and consultation forms
- FAQ section

### Admin Dashboard
- Dashboard with KPIs and statistics
- Job posting management (CRUD)
- Applicant tracking system (ATS)
- Application pipeline management
- Employer profiles
- Consultation tracking
- Blog CMS
- Inquiry management

### API Endpoints
- `/api/jobs` - Job listings and management
- `/api/applications` - Application handling
- `/api/consultations` - Consultation requests
- `/api/contact` - Contact form submissions
- `/api/dashboard` - Dashboard statistics

## Documentation

- [Deployment Guide](./DEPLOYMENT.md) - How to deploy on Vercel
- [Architecture Overview](./ARCHITECTURE.md) - System architecture
- [Design System](../docs/DESIGN_SYSTEM.md) - UI/UX design specifications
- [Component Breakdown](../docs/COMPONENT_BREAKDOWN.md) - Component documentation
- [Forms List](../docs/FORMS_LIST.md) - All forms and fields

## Environment Variables

```env
# Database
DATABASE_URL="postgresql://..."

# Auth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key"

# JWT
JWT_SECRET="your-jwt-secret"
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run db:generate` | Generate Prisma client |
| `npm run db:push` | Push schema to database |
| `npm run db:migrate` | Run database migrations |

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

Quick deploy to Vercel:
```bash
npm install -g vercel
vercel --prod
```

## License

© 2026 Workforce Recruitment & HR Solutions PH. All Rights Reserved.
