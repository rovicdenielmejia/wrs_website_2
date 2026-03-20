# WRS Platform - Deployment Guide

## Quick Start

### Prerequisites
- Node.js 18+
- PostgreSQL 14+
- npm/yarn/pnpm

### Local Development

```bash
# Navigate to platform directory
cd wrs-platform

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local
# Edit .env.local with your database URL and secrets

# Generate Prisma client
npx prisma generate

# Push schema to database
npx prisma db push

# Seed database (creates admin user)
npm run db:seed

# Start development server
npm run dev
```

### Login Credentials (after seeding)
- **Admin**: admin@workforcerecruitmentsolutions.com / admin123
- **Recruiter**: recruiter@workforcerecruitmentsolutions.com / recruiter123

---

## Deployment to Vercel

### 1. Create a PostgreSQL Database

**Option A: Supabase**
1. Go to [supabase.com](https://supabase.com)
2. Create a new project
3. Get the connection string from Settings > Database
4. Copy the `DATABASE_URL` (PostgreSQL connection string)

**Option B: Railway**
1. Go to [railway.app](https://railway.app)
2. Create a new PostgreSQL database
3. Get the connection string

**Option C: Neon**
1. Go to [neon.tech](https://neon.tech)
2. Create a new project
3. Get the connection string

### 2. Configure Environment Variables

In your Vercel project dashboard, add these environment variables:

```
DATABASE_URL=postgresql://user:password@host:5432/wrs_db
NEXTAUTH_URL=https://workforcerecruitmentsolutions.com
NEXTAUTH_SECRET=generate-with-openssl-rand-base64-32
```

Generate NEXTAUTH_SECRET:
```bash
openssl rand -base64 32
```

### 3. Deploy

**Option A: Vercel Dashboard**
1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Configure project settings
4. Deploy

**Option B: Vercel CLI**
```bash
npm i -g vercel
vercel login
vercel --prod
```

### 4. Post-Deployment

1. Run database migrations:
```bash
vercel env pull
npx prisma migrate deploy
```

2. Seed the database:
```bash
vercel run seed
```

3. Configure your domain:
   - In Vercel dashboard, go to Settings > Domains
   - Add `workforcerecruitmentsolutions.com`
   - Update DNS records as instructed

---

## Domain Configuration

### Vercel Domain Setup

1. Add domain in Vercel dashboard
2. Configure DNS records:

**A Record (for root domain):**
```
Type: A
Name: @
Value: 76.76.21.21
```

**CNAME Record (for www):**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

---

## API Routes

### Public API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/jobs` | GET | List jobs (with filters) |
| `/api/jobs` | POST | Create job (authenticated) |
| `/api/jobs/[id]` | GET/PUT/DELETE | Job CRUD |
| `/api/applications` | GET | List applications |
| `/api/applications` | POST | Submit application |
| `/api/blogs` | GET | List blog posts |
| `/api/blogs` | POST | Create blog post |
| `/api/consultations` | GET/POST | Consultations |
| `/api/auth/[...nextauth]` | GET/POST | Authentication |

### Query Parameters

**Jobs API:**
```
GET /api/jobs?status=PUBLISHED&workType=FULL_TIME&search=engineer&featured=true&page=1&limit=10
```

**Applications API:**
```
GET /api/applications?status=SCREENING&jobId=123&page=1&limit=10
```

---

## Database Management

### Prisma Commands

```bash
# Generate Prisma client
npx prisma generate

# Push schema changes
npx prisma db push

# Run migrations
npx prisma migrate dev

# Open Prisma Studio (database GUI)
npx prisma studio

# Reset database
npx prisma migrate reset
```

---

## Troubleshooting

### Common Issues

**1. Prisma Client not generated**
```bash
npx prisma generate
```

**2. Database connection error**
- Check DATABASE_URL format
- Ensure database is accessible
- Check firewall rules

**3. NextAuth not working**
- Verify NEXTAUTH_SECRET is set
- Check NEXTAUTH_URL matches domain

**4. Build errors**
```bash
npm run lint
npm run build
```

---

## Production Checklist

- [ ] Database created and accessible
- [ ] Environment variables configured
- [ ] Domain pointed to Vercel
- [ ] SSL certificate active
- [ ] Admin user logged in
- [ ] Test job creation
- [ ] Test application submission
- [ ] Check email notifications (if configured)
- [ ] Verify all pages load correctly
- [ ] Test admin dashboard

---

## Support

For issues or questions, contact:
- Email: wrs.recruitment.hr@gmail.com
