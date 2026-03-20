# WRS Recruitment Platform - Deployment Guide

## Overview

This document outlines the deployment process for the WRS Recruitment Platform on Vercel with PostgreSQL database.

## Prerequisites

- Node.js >= 18
- PostgreSQL database (Supabase, Railway, Neon, etc.)
- Vercel account
- Git repository

## Environment Setup

1. Clone the repository
2. Copy `.env.example` to `.env.local`
3. Fill in your environment variables:

```bash
# Database
DATABASE_URL="postgresql://user:password@host:5432/database"

# NextAuth
NEXTAUTH_URL="https://workforcerecruitmentsolutions.com"
NEXTAUTH_SECRET="generate-with-openssl-rand-base64-32"

# JWT
JWT_SECRET="generate-with-openssl-rand-base64-32"
```

## Database Setup

### Option 1: Supabase (Recommended)

1. Create a Supabase project at https://supabase.com
2. Get your connection string from Settings > Database
3. Update `DATABASE_URL`

### Option 2: Railway

1. Create a Railway project
2. Add PostgreSQL plugin
3. Get connection string from Variables tab

### Option 3: Neon

1. Create a Neon project
2. Get connection string from Dashboard

### Generate Prisma Client

```bash
npm run db:generate
npm run db:push
```

Or run migrations:

```bash
npm run db:migrate
```

## Vercel Deployment

### Option 1: Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Option 2: Git Integration

1. Push code to GitHub/GitLab/Bitbucket
2. Import project in Vercel Dashboard
3. Configure environment variables
4. Deploy

## Environment Variables in Vercel

Add these in Vercel Dashboard > Settings > Environment Variables:

| Name | Value | Environments |
|------|-------|--------------|
| DATABASE_URL | Your PostgreSQL connection string | Production, Preview, Development |
| NEXTAUTH_URL | https://workforcerecruitmentsolutions.com | Production |
| NEXTAUTH_SECRET | Your generated secret | All |
| JWT_SECRET | Your generated secret | All |

## Build Commands

```bash
# Install dependencies
npm install

# Generate Prisma client
npm run db:generate

# Build
npm run build

# Start production server
npm start
```

## Domain Configuration

### Vercel Domain Setup

1. Go to Vercel Dashboard > Settings > Domains
2. Add `workforcerecruitmentsolutions.com`
3. Configure DNS records as instructed

### DNS Configuration

Add the following records to your DNS provider:

```
Type    Name    Value
A       @       76.76.21.21
CNAME   www     cname.vercel-dns.com
```

## Post-Deployment Checklist

- [ ] Verify environment variables are set
- [ ] Run database migrations
- [ ] Test admin login
- [ ] Verify job listings page
- [ ] Test contact form submission
- [ ] Check API endpoints
- [ ] Verify SSL certificate
- [ ] Test mobile responsiveness

## Monitoring

### Vercel Analytics

Enable Vercel Analytics in project settings for performance monitoring.

### Database Backups

Set up regular backups for your PostgreSQL database:
- Supabase: Built-in daily backups
- Railway: Manual or scheduled backups
- Neon: Built-in branching and point-in-time recovery

## Troubleshooting

### Build Failures

1. Check environment variables
2. Verify Node.js version
3. Clear `.next` cache: `rm -rf .next`

### Database Connection Issues

1. Verify DATABASE_URL format
2. Check IP allowlist (if applicable)
3. Test connection locally

### API Errors

1. Check server logs in Vercel Dashboard
2. Verify authentication tokens
3. Check rate limiting

## Support

For deployment support, contact the development team or refer to:
- Vercel Documentation: https://vercel.com/docs
- Prisma Documentation: https://prisma.io/docs
