-- ============================================
-- WRS - PostgreSQL Database Schema
-- Workforce Recruitment & HR Solutions PH
-- ============================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================
-- ENUMS (Custom Types)
-- ============================================

CREATE TYPE "Role" AS ENUM ('ADMIN', 'RECRUITER', 'EMPLOYER', 'USER');
CREATE TYPE "JobStatus" AS ENUM ('DRAFT', 'PUBLISHED', 'CLOSED', 'ARCHIVED');
CREATE TYPE "JobType" AS ENUM ('FULL_TIME', 'PART_TIME', 'CONTRACT', 'INTERNSHIP', 'REMOTE');
CREATE TYPE "ExperienceLevel" AS ENUM ('ENTRY', 'JUNIOR', 'MID', 'SENIOR', 'EXECUTIVE');
CREATE TYPE "ApplicationStatus" AS ENUM ('APPLIED', 'SCREENING', 'INTERVIEW', 'OFFER', 'HIRED', 'REJECTED', 'WITHDRAWN');
CREATE TYPE "ConsultationStatus" AS ENUM ('NEW', 'IN_PROGRESS', 'COMPLETED', 'CANCELLED');
CREATE TYPE "BlogStatus" AS ENUM ('DRAFT', 'PUBLISHED', 'SCHEDULED', 'ARCHIVED');
CREATE TYPE "SalaryType" AS ENUM ('MONTHLY', 'YEARLY', 'HOURLY', 'PROJECT');

-- ============================================
-- USERS & AUTHENTICATION
-- ============================================

CREATE TABLE "users" (
    "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    "email" VARCHAR(255) UNIQUE NOT NULL,
    "email_verified" TIMESTAMP,
    "password" VARCHAR(255),
    "first_name" VARCHAR(100) NOT NULL,
    "last_name" VARCHAR(100) NOT NULL,
    "phone" VARCHAR(50),
    "avatar" TEXT,
    "role" "Role" DEFAULT 'USER',
    "is_active" BOOLEAN DEFAULT true,
    "last_login_at" TIMESTAMP,
    "created_at" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX "users_email_idx" ON "users"("email");
CREATE INDEX "users_role_idx" ON "users"("role");

CREATE TABLE "accounts" (
    "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    "user_id" UUID NOT NULL REFERENCES "users"("id") ON DELETE CASCADE,
    "type" VARCHAR(50) NOT NULL,
    "provider" VARCHAR(100) NOT NULL,
    "provider_account_id" VARCHAR(255) NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" VARCHAR(50),
    "scope" VARCHAR(255),
    "id_token" TEXT,
    "session_state" VARCHAR(255),
    UNIQUE("provider", "provider_account_id")
);

CREATE INDEX "accounts_user_id_idx" ON "accounts"("user_id");

CREATE TABLE "sessions" (
    "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    "session_token" VARCHAR(255) UNIQUE NOT NULL,
    "user_id" UUID NOT NULL REFERENCES "users"("id") ON DELETE CASCADE,
    "expires" TIMESTAMP NOT NULL
);

CREATE INDEX "sessions_user_id_idx" ON "sessions"("user_id");

CREATE TABLE "verification_tokens" (
    "identifier" VARCHAR(255) NOT NULL,
    "token" VARCHAR(255) UNIQUE NOT NULL,
    "expires" TIMESTAMP NOT NULL,
    PRIMARY KEY("identifier", "token")
);

-- ============================================
-- EMPLOYERS / CLIENTS
-- ============================================

CREATE TABLE "employers" (
    "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    "user_id" UUID UNIQUE REFERENCES "users"("id") ON DELETE CASCADE,
    "company_name" VARCHAR(255) NOT NULL,
    "industry" VARCHAR(100),
    "website" VARCHAR(255),
    "logo" TEXT,
    "description" TEXT,
    "size" VARCHAR(20),
    "location" VARCHAR(255),
    "address" TEXT,
    "contact_person" VARCHAR(255),
    "contact_email" VARCHAR(255),
    "contact_phone" VARCHAR(50),
    "is_verified" BOOLEAN DEFAULT false,
    "is_active" BOOLEAN DEFAULT true,
    "created_at" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX "employers_company_name_idx" ON "employers"("company_name");
CREATE INDEX "employers_is_active_idx" ON "employers"("is_active");

-- ============================================
-- JOBS
-- ============================================

CREATE TABLE "jobs" (
    "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    "employer_id" UUID NOT NULL REFERENCES "employers"("id") ON DELETE CASCADE,
    "title" VARCHAR(255) NOT NULL,
    "slug" VARCHAR(255) UNIQUE NOT NULL,
    "description" TEXT NOT NULL,
    "requirements" TEXT,
    "benefits" TEXT,
    "location" VARCHAR(255),
    "work_type" "JobType" DEFAULT 'FULL_TIME',
    "experience_level" "ExperienceLevel" DEFAULT 'MID',
    "salary_min" DECIMAL(12, 2),
    "salary_max" DECIMAL(12, 2),
    "salary_type" "SalaryType" DEFAULT 'MONTHLY',
    "salary_visible" BOOLEAN DEFAULT true,
    "status" "JobStatus" DEFAULT 'DRAFT',
    "is_urgent" BOOLEAN DEFAULT false,
    "is_featured" BOOLEAN DEFAULT false,
    "views" INTEGER DEFAULT 0,
    "applications_count" INTEGER DEFAULT 0,
    "expires_at" TIMESTAMP,
    "published_at" TIMESTAMP,
    "created_at" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX "jobs_slug_idx" ON "jobs"("slug");
CREATE INDEX "jobs_status_idx" ON "jobs"("status");
CREATE INDEX "jobs_employer_id_idx" ON "jobs"("employer_id");
CREATE INDEX "jobs_is_featured_idx" ON "jobs"("is_featured");
CREATE INDEX "jobs_published_at_idx" ON "jobs"("published_at");

CREATE TABLE "job_categories" (
    "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    "name" VARCHAR(100) UNIQUE NOT NULL,
    "slug" VARCHAR(100) UNIQUE NOT NULL
);

CREATE INDEX "job_categories_slug_idx" ON "job_categories"("slug");

CREATE TABLE "_JobToJobCategory" (
    "A" UUID NOT NULL REFERENCES "jobs"("id") ON DELETE CASCADE,
    "B" UUID NOT NULL REFERENCES "job_categories"("id") ON DELETE CASCADE,
    PRIMARY KEY("A", "B")
);

-- ============================================
-- APPLICATIONS / APPLICANTS
-- ============================================

CREATE TABLE "applications" (
    "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    "job_id" UUID NOT NULL REFERENCES "jobs"("id") ON DELETE CASCADE,
    "user_id" UUID REFERENCES "users"("id") ON DELETE SET NULL,
    "first_name" VARCHAR(100) NOT NULL,
    "last_name" VARCHAR(100) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(50),
    "resume_url" TEXT,
    "cover_letter" TEXT,
    "linkedin_url" TEXT,
    "portfolio_url" TEXT,
    "status" "ApplicationStatus" DEFAULT 'APPLIED',
    "score" INTEGER,
    "notes" TEXT,
    "applied_at" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX "applications_email_idx" ON "applications"("email");
CREATE INDEX "applications_status_idx" ON "applications"("status");
CREATE INDEX "applications_job_id_idx" ON "applications"("job_id");
CREATE INDEX "applications_applied_at_idx" ON "applications"("applied_at");

CREATE TABLE "status_logs" (
    "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    "application_id" UUID NOT NULL REFERENCES "applications"("id") ON DELETE CASCADE,
    "previous_status" "ApplicationStatus",
    "new_status" "ApplicationStatus" NOT NULL,
    "changed_by" VARCHAR(255),
    "notes" TEXT,
    "created_at" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX "status_logs_application_id_idx" ON "status_logs"("application_id");

-- ============================================
-- BLOG
-- ============================================

CREATE TABLE "blog_posts" (
    "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    "author_id" UUID NOT NULL REFERENCES "users"("id") ON DELETE CASCADE,
    "category_id" UUID REFERENCES "blog_categories"("id") ON DELETE SET NULL,
    "title" VARCHAR(255) NOT NULL,
    "slug" VARCHAR(255) UNIQUE NOT NULL,
    "excerpt" TEXT,
    "content" TEXT NOT NULL,
    "cover_image" TEXT,
    "status" "BlogStatus" DEFAULT 'DRAFT',
    "published_at" TIMESTAMP,
    "scheduled_at" TIMESTAMP,
    "seo_title" VARCHAR(255),
    "seo_description" TEXT,
    "tags" TEXT[],
    "views" INTEGER DEFAULT 0,
    "created_at" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX "blog_posts_slug_idx" ON "blog_posts"("slug");
CREATE INDEX "blog_posts_status_idx" ON "blog_posts"("status");
CREATE INDEX "blog_posts_published_at_idx" ON "blog_posts"("published_at");

CREATE TABLE "blog_categories" (
    "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    "name" VARCHAR(100) UNIQUE NOT NULL,
    "slug" VARCHAR(100) UNIQUE NOT NULL
);

CREATE INDEX "blog_categories_slug_idx" ON "blog_categories"("slug");

CREATE TABLE "comments" (
    "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    "post_id" UUID NOT NULL REFERENCES "blog_posts"("id") ON DELETE CASCADE,
    "user_id" UUID REFERENCES "users"("id") ON DELETE SET NULL,
    "author_name" VARCHAR(255) NOT NULL,
    "content" TEXT NOT NULL,
    "is_approved" BOOLEAN DEFAULT true,
    "parent_id" UUID REFERENCES "comments"("id") ON DELETE CASCADE,
    "created_at" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX "comments_post_id_idx" ON "comments"("post_id");

-- ============================================
-- CONSULTATIONS
-- ============================================

CREATE TABLE "consultations" (
    "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    "employer_id" UUID REFERENCES "employers"("id") ON DELETE SET NULL,
    "first_name" VARCHAR(100) NOT NULL,
    "last_name" VARCHAR(100) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(50),
    "company" VARCHAR(255),
    "type" VARCHAR(50) NOT NULL,
    "message" TEXT,
    "status" "ConsultationStatus" DEFAULT 'NEW',
    "assigned_to" VARCHAR(255),
    "notes" TEXT,
    "scheduled_at" TIMESTAMP,
    "completed_at" TIMESTAMP,
    "created_at" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX "consultations_email_idx" ON "consultations"("email");
CREATE INDEX "consultations_status_idx" ON "consultations"("status");
CREATE INDEX "consultations_created_at_idx" ON "consultations"("created_at");

-- ============================================
-- ACTIVITY & AUDIT LOGS
-- ============================================

CREATE TABLE "activity_logs" (
    "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    "user_id" UUID REFERENCES "users"("id") ON DELETE SET NULL,
    "employer_id" UUID REFERENCES "employers"("id") ON DELETE SET NULL,
    "job_id" UUID REFERENCES "jobs"("id") ON DELETE SET NULL,
    "action" VARCHAR(100) NOT NULL,
    "entity_type" VARCHAR(100) NOT NULL,
    "entity_id" UUID,
    "details" JSONB,
    "ip_address" VARCHAR(50),
    "user_agent" TEXT,
    "created_at" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX "activity_logs_user_id_idx" ON "activity_logs"("user_id");
CREATE INDEX "activity_logs_entity_type_idx" ON "activity_logs"("entity_type");
CREATE INDEX "activity_logs_created_at_idx" ON "activity_logs"("created_at");

-- ============================================
-- NOTES (Internal)
-- ============================================

CREATE TABLE "notes" (
    "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    "user_id" UUID NOT NULL REFERENCES "users"("id") ON DELETE CASCADE,
    "application_id" UUID REFERENCES "applications"("id") ON DELETE CASCADE,
    "content" TEXT NOT NULL,
    "type" VARCHAR(50) DEFAULT 'general',
    "created_at" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX "notes_application_id_idx" ON "notes"("application_id");

-- ============================================
-- SETTINGS
-- ============================================

CREATE TABLE "settings" (
    "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    "key" VARCHAR(255) UNIQUE NOT NULL,
    "value" TEXT NOT NULL,
    "group" VARCHAR(50) DEFAULT 'general',
    "created_at" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX "settings_key_idx" ON "settings"("key");
CREATE INDEX "settings_group_idx" ON "settings"("group");

-- ============================================
-- SEED DATA
-- ============================================

-- Insert default admin user (password: admin123)
INSERT INTO "users" ("id", "email", "password", "first_name", "last_name", "role", "is_active")
VALUES (
    uuid_generate_v4(),
    'admin@workforcerecruitmentsolutions.com',
    '$2a$10$YourHashedPasswordHere',
    'Admin',
    'User',
    'ADMIN',
    true
);

-- Insert job categories
INSERT INTO "job_categories" ("name", "slug") VALUES
    ('Technology', 'technology'),
    ('Healthcare', 'healthcare'),
    ('Finance', 'finance'),
    ('Marketing', 'marketing'),
    ('Sales', 'sales'),
    ('Operations', 'operations'),
    ('Human Resources', 'human-resources'),
    ('Customer Service', 'customer-service'),
    ('Engineering', 'engineering'),
    ('Administration', 'administration');

-- Insert blog categories
INSERT INTO "blog_categories" ("name", "slug") VALUES
    ('Recruitment Tips', 'recruitment-tips'),
    ('HR Best Practices', 'hr-best-practices'),
    ('Career Advice', 'career-advice'),
    ('Industry Insights', 'industry-insights'),
    ('Company Updates', 'company-updates');

-- Insert default settings
INSERT INTO "settings" ("key", "value", "group") VALUES
    ('site_name', 'Workforce Recruitment & HR Solutions PH', 'general'),
    ('site_tagline', 'Building Stronger Workforces. Connecting the Right People to the Right Opportunities.', 'general'),
    ('site_url', 'https://workforcerecruitmentsolutions.com', 'general'),
    ('contact_email', 'wrs.recruitment.hr@gmail.com', 'contact'),
    ('contact_phone', '+63 975 563 6276', 'contact'),
    ('address', 'Philippines', 'contact'),
    ('facebook_url', '', 'social'),
    ('linkedin_url', '', 'social'),
    ('twitter_url', '', 'social'),
    ('email_notifications_enabled', 'true', 'email'),
    ('auto_respond_enabled', 'true', 'email');

-- ============================================
-- FUNCTIONS & TRIGGERS
-- ============================================

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW."updated_at" = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Triggers for updated_at
CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON "users" FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_employers_updated_at BEFORE UPDATE ON "employers" FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_jobs_updated_at BEFORE UPDATE ON "jobs" FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_applications_updated_at BEFORE UPDATE ON "applications" FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_consultations_updated_at BEFORE UPDATE ON "consultations" FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_notes_updated_at BEFORE UPDATE ON "notes" FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_settings_updated_at BEFORE UPDATE ON "settings" FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Function to increment job views
CREATE OR REPLACE FUNCTION increment_job_views()
RETURNS TRIGGER AS $$
BEGIN
    UPDATE "jobs" SET "views" = "views" + 1 WHERE "id" = NEW."job_id";
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger for application created (increment count)
CREATE TRIGGER application_created_count
AFTER INSERT ON "applications"
FOR EACH ROW EXECUTE FUNCTION increment_job_views();

-- ============================================
-- VIEWS FOR ANALYTICS
-- ============================================

-- Monthly applications view
CREATE VIEW monthly_applications AS
SELECT 
    DATE_TRUNC('month', "applied_at") as month,
    COUNT(*) as total_applications,
    COUNT(*) FILTER (WHERE status = 'HIRED') as hired_count,
    COUNT(*) FILTER (WHERE status = 'REJECTED') as rejected_count
FROM applications
GROUP BY DATE_TRUNC('month', "applied_at")
ORDER BY month DESC;

-- Jobs with application stats
CREATE VIEW jobs_with_stats AS
SELECT 
    j."id",
    j."title",
    j."status",
    j."published_at",
    j."views",
    COUNT(a."id") as application_count,
    COUNT(a."id") FILTER (WHERE a."status" = 'HIRED') as hired_count
FROM jobs j
LEFT JOIN applications a ON j."id" = a."job_id"
GROUP BY j."id", j."title", j."status", j."published_at", j."views";
