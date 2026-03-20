# WRS Recruitment Platform - Architecture Overview

## System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        FRONTEND                               │
│                    (Next.js 14 App Router)                   │
│                                                              │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐        │
│  │  Public  │ │  Admin   │ │   API    │ │  Auth    │        │
│  │  Pages   │ │Dashboard │ │  Routes  │ │  Flow    │        │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘        │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                        BACKEND                                │
│                   (Next.js API Routes)                       │
│                                                              │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐        │
│  │   Jobs   │ │   Apps   │ │Consult.  │ │  Users   │        │
│  │ Service  │ │ Service  │ │ Service  │ │ Service  │        │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘        │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                      DATABASE                                │
│                     (PostgreSQL)                             │
│                                                              │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐        │
│  │   Jobs   │ │Applicants│ │Employers │ │  Blogs   │        │
│  │  Table   │ │  Table   │ │  Table   │ │  Table   │        │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘        │
└─────────────────────────────────────────────────────────────┘
```

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | Next.js 14, React 18, TypeScript |
| Styling | TailwindCSS, ShadCN UI |
| Animation | Framer Motion |
| Backend | Next.js API Routes |
| Database | PostgreSQL |
| ORM | Prisma |
| Auth | JWT (jose library) |
| Deployment | Vercel |

## Directory Structure

```
src/
├── app/                    # Next.js App Router
│   ├── (public)/          # Public pages group
│   │   ├── page.tsx       # Home
│   │   ├── jobs/          # Jobs listing
│   │   ├── solutions/     # Solutions pages
│   │   └── ...
│   ├── (admin)/          # Admin pages group
│   │   ├── page.tsx       # Dashboard
│   │   ├── jobs/          # Job management
│   │   ├── applicants/    # ATS
│   │   └── ...
│   └── api/              # API routes
│       ├── jobs/
│       ├── applications/
│       ├── consultations/
│       └── ...
├── components/           # React components
│   ├── ui/              # Base UI components
│   ├── layout/          # Layout components
│   ├── sections/        # Page sections
│   └── forms/           # Form components
├── lib/                 # Utilities
│   ├── prisma.ts       # Prisma client
│   ├── auth.ts         # Auth utilities
│   └── utils.ts        # Common utilities
└── types/               # TypeScript types
```

## Data Flow

### Public User Flow
1. User visits website
2. Browses jobs, reads blogs, views pages
3. Submits contact form / consultation request
4. Applies to jobs
5. Data stored in PostgreSQL via API

### Admin Flow
1. Admin logs in via dashboard
2. Manages jobs (create, edit, publish)
3. Reviews applications (ATS)
4. Tracks pipeline stages
5. Communicates with applicants

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/jobs | List jobs |
| POST | /api/jobs | Create job |
| GET | /api/jobs/[id] | Get job details |
| PUT | /api/jobs/[id] | Update job |
| DELETE | /api/jobs/[id] | Delete job |
| GET | /api/applications | List applications |
| POST | /api/applications | Submit application |
| GET | /api/consultations | List consultations |
| POST | /api/consultations | Submit consultation |
| GET | /api/dashboard | Dashboard stats |

## Database Schema

See `prisma/schema.prisma` for complete schema.

## Future Extensions

1. **AI Resume Parsing** - Parse resumes automatically
2. **Smart Matching** - ML-based job-candidate matching
3. **Email Automation** - Automated status updates
4. **Video Interviews** - Integrated video calling
5. **Subscription System** - Multi-tier employer plans
6. **Mobile App** - React Native iOS/Android apps
