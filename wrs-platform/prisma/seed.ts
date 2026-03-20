import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database...')

  // Create admin user
  const adminPassword = await bcrypt.hash('admin123', 10)
  const admin = await prisma.user.upsert({
    where: { email: 'admin@workforcerecruitmentsolutions.com' },
    update: {},
    create: {
      email: 'admin@workforcerecruitmentsolutions.com',
      password: adminPassword,
      firstName: 'Admin',
      lastName: 'User',
      role: 'ADMIN',
      isActive: true,
    },
  })
  console.log('✅ Created admin user:', admin.email)

  // Create recruiter user
  const recruiterPassword = await bcrypt.hash('recruiter123', 10)
  const recruiter = await prisma.user.upsert({
    where: { email: 'recruiter@workforcerecruitmentsolutions.com' },
    update: {},
    create: {
      email: 'recruiter@workforcerecruitmentsolutions.com',
      password: recruiterPassword,
      firstName: 'Sarah',
      lastName: 'Recruiter',
      role: 'RECRUITER',
      isActive: true,
    },
  })
  console.log('✅ Created recruiter user:', recruiter.email)

  // Create job categories
  const jobCategories = [
    { name: 'Technology', slug: 'technology' },
    { name: 'Healthcare', slug: 'healthcare' },
    { name: 'Finance', slug: 'finance' },
    { name: 'Marketing', slug: 'marketing' },
    { name: 'Sales', slug: 'sales' },
    { name: 'Operations', slug: 'operations' },
    { name: 'Human Resources', slug: 'human-resources' },
    { name: 'Customer Service', slug: 'customer-service' },
    { name: 'Engineering', slug: 'engineering' },
    { name: 'Administration', slug: 'administration' },
  ]

  for (const category of jobCategories) {
    await prisma.jobCategory.upsert({
      where: { slug: category.slug },
      update: {},
      create: category,
    })
  }
  console.log('✅ Created job categories')

  // Create blog categories
  const blogCategories = [
    { name: 'Recruitment Tips', slug: 'recruitment-tips' },
    { name: 'HR Best Practices', slug: 'hr-best-practices' },
    { name: 'Career Advice', slug: 'career-advice' },
    { name: 'Industry Insights', slug: 'industry-insights' },
    { name: 'Company Updates', slug: 'company-updates' },
  ]

  for (const category of blogCategories) {
    await prisma.blogCategory.upsert({
      where: { slug: category.slug },
      update: {},
      create: category,
    })
  }
  console.log('✅ Created blog categories')

  // Create sample employer
  const employerPassword = await bcrypt.hash('employer123', 10)
  const employerUser = await prisma.user.upsert({
    where: { email: 'employer@techcorp.com' },
    update: {},
    create: {
      email: 'employer@techcorp.com',
      password: employerPassword,
      firstName: 'John',
      lastName: 'Employer',
      role: 'EMPLOYER',
      isActive: true,
    },
  })

  const employer = await prisma.employer.upsert({
    where: { userId: employerUser.id },
    update: {},
    create: {
      userId: employerUser.id,
      companyName: 'TechCorp Philippines',
      industry: 'Technology',
      website: 'https://techcorp.ph',
      description: 'Leading technology company specializing in enterprise software solutions.',
      size: '51-200',
      location: 'Makati City, Metro Manila',
      isVerified: true,
    },
  })
  console.log('✅ Created sample employer:', employer.companyName)

  // Create sample jobs
  const jobs = [
    {
      title: 'Senior Software Engineer',
      slug: 'senior-software-engineer',
      description: `We are looking for a Senior Software Engineer to join our growing team. In this role, you will be responsible for designing, developing, and maintaining high-quality software solutions.

You will work closely with our product and design teams to deliver exceptional user experiences while ensuring code quality and best practices. This is an exciting opportunity for someone who wants to make a significant impact on our products and customers.`,
      requirements: `• Bachelor's degree in Computer Science or related field
• 5+ years of experience in software development
• Proficiency in at least one backend language (Node.js, Python, Java)
• Experience with cloud platforms (AWS, GCP, or Azure)
• Strong problem-solving and communication skills`,
      benefits: `• Competitive salary and performance bonuses
• Health insurance (HMO) coverage
• Flexible work arrangements
• Professional development opportunities
• Work-life balance initiatives`,
      location: 'Makati City, Metro Manila',
      workType: 'FULL_TIME' as const,
      experienceLevel: 'SENIOR' as const,
      salaryMin: 80000,
      salaryMax: 120000,
      salaryType: 'MONTHLY' as const,
      status: 'PUBLISHED' as const,
      isFeatured: true,
      isUrgent: true,
      publishedAt: new Date(),
    },
    {
      title: 'HR Manager',
      slug: 'hr-manager',
      description: `Join our team as HR Manager and help shape our company culture. You will be responsible for all aspects of human resources management including recruitment, employee relations, and compliance.`,
      requirements: `• Bachelor's degree in Human Resources or related field
• 3+ years of HR management experience
• Knowledge of Philippine labor laws
• Strong interpersonal skills`,
      benefits: `• Competitive compensation package
• Health and wellness benefits
• Professional development
• Team building activities`,
      location: 'Quezon City, Metro Manila',
      workType: 'FULL_TIME' as const,
      experienceLevel: 'MID' as const,
      salaryMin: 50000,
      salaryMax: 75000,
      salaryType: 'MONTHLY' as const,
      status: 'PUBLISHED' as const,
      isFeatured: true,
      isUrgent: false,
      publishedAt: new Date(),
    },
    {
      title: 'Digital Marketing Specialist',
      slug: 'digital-marketing-specialist',
      description: `We need a Digital Marketing Specialist to help grow our clients' brands. You will manage social media, create content, and run digital campaigns.`,
      requirements: `• Bachelor's degree in Marketing or related field
• 2+ years of digital marketing experience
• Proficiency in social media platforms
• Experience with SEO and SEM
• Strong creative skills`,
      benefits: `• Remote work options
• Performance bonuses
• Training opportunities
• Flexible hours`,
      location: 'Remote',
      workType: 'REMOTE' as const,
      experienceLevel: 'JUNIOR' as const,
      salaryMin: 30000,
      salaryMax: 45000,
      salaryType: 'MONTHLY' as const,
      status: 'PUBLISHED' as const,
      isFeatured: false,
      isUrgent: false,
      publishedAt: new Date(),
    },
  ]

  for (const jobData of jobs) {
    await prisma.job.upsert({
      where: { slug: jobData.slug },
      update: {},
      create: {
        ...jobData,
        employerId: employer.id,
      },
    })
  }
  console.log('✅ Created sample jobs')

  // Create sample blog posts
  const blogPosts = [
    {
      title: 'How to Hire Smarter in 2026',
      slug: 'hire-smarter-2026',
      excerpt: 'Discover the latest trends and best practices in recruitment for the Philippine market.',
      content: `The hiring landscape in the Philippines continues to evolve rapidly. As we move into 2026, companies need to adapt their recruitment strategies to attract top talent.

In this article, we explore the key trends shaping recruitment in the Philippines and provide actionable tips for hiring smarter...

## Key Trends

1. **Remote Work Integration**
   More companies are adopting hybrid and fully remote work models, expanding their talent pool beyond geographic limitations.

2. **AI-Powered Recruitment**
   Artificial intelligence is streamlining the hiring process, from resume screening to candidate matching.

3. **Candidate Experience**
   Companies are focusing more on providing an excellent candidate experience throughout the hiring journey.

## Best Practices

- Build a strong employer brand
- Streamline your hiring process
- Invest in employee development
- Create transparent communication channels

By implementing these strategies, you can significantly improve your hiring outcomes and build a stronger team.`,
      status: 'PUBLISHED' as const,
      publishedAt: new Date(),
      authorId: admin.id,
      seoTitle: 'How to Hire Smarter in 2026 | WRS Philippines',
      seoDescription: 'Discover the latest trends and best practices in recruitment for the Philippine market.',
      tags: ['recruitment', 'hiring', 'trends'],
    },
    {
      title: 'Employee Retention: The Hidden Advantage',
      slug: 'employee-retention-advantage',
      excerpt: 'Learn why retaining top talent is more cost-effective than constant recruitment.',
      content: `Employee retention is often overlooked, but it can be your biggest competitive advantage. The cost of replacing an employee can be substantial - often 50-200% of their annual salary.

## Why Retention Matters

- **Cost Savings**: Reducing turnover saves recruitment and training costs
- **Knowledge Retention**: Experienced employees carry institutional knowledge
- **Productivity**: Tenured employees are often more productive
- **Culture**: Low turnover builds stronger team culture

## Strategies for Better Retention

1. Competitive compensation and benefits
2. Career development opportunities
3. Work-life balance initiatives
4. Recognition and appreciation
5. Clear communication and feedback

Investing in retention is investing in your company's future success.`,
      status: 'PUBLISHED' as const,
      publishedAt: new Date(),
      authorId: admin.id,
      seoTitle: 'Employee Retention: The Hidden Advantage | WRS Philippines',
      seoDescription: 'Learn why retaining top talent is more cost-effective than constant recruitment.',
      tags: ['retention', 'hr', 'management'],
    },
  ]

  for (const blogData of blogPosts) {
    await prisma.blogPost.upsert({
      where: { slug: blogData.slug },
      update: {},
      create: blogData,
    })
  }
  console.log('✅ Created sample blog posts')

  // Create sample settings
  const settings = [
    { key: 'site_name', value: 'Workforce Recruitment & HR Solutions PH', group: 'general' },
    { key: 'site_tagline', value: 'Building Stronger Workforces. Connecting the Right People to the Right Opportunities.', group: 'general' },
    { key: 'site_url', value: 'https://workforcerecruitmentsolutions.com', group: 'general' },
    { key: 'contact_email', value: 'wrs.recruitment.hr@gmail.com', group: 'contact' },
    { key: 'contact_phone', value: '+63 975 563 6276', group: 'contact' },
  ]

  for (const setting of settings) {
    await prisma.setting.upsert({
      where: { key: setting.key },
      update: {},
      create: setting,
    })
  }
  console.log('✅ Created settings')

  console.log('🎉 Database seeding completed!')
  console.log('')
  console.log('📋 Login credentials:')
  console.log('   Admin: admin@workforcerecruitmentsolutions.com / admin123')
  console.log('   Recruiter: recruiter@workforcerecruitmentsolutions.com / recruiter123')
  console.log('   Employer: employer@techcorp.com / employer123')
}

main()
  .catch((e) => {
    console.error('❌ Seeding error:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
