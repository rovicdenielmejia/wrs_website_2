'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Building2, Users, Briefcase, CheckCircle2, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'

const stats = [
  { label: 'Companies Served', value: '100+' },
  { label: 'Successful Placements', value: '500+' },
  { label: 'Years of Experience', value: '3+' },
  { label: 'Retention Rate', value: '95%' },
]

const services = [
  {
    icon: Building2,
    title: 'For Employers',
    description: 'Strategic hiring and practical HR support for growing businesses.',
    features: ['Talent Acquisition', 'Executive Search', 'Contract Staffing', 'Workforce Planning', 'HR Consulting'],
    cta: 'View Employer Solutions',
    href: '/solutions/employers',
    variant: 'employer' as const,
  },
  {
    icon: Users,
    title: 'For Job Seekers',
    description: 'Career support and job matching to help you find your next opportunity.',
    features: ['Job Matching', 'Resume & Career Support', 'Interview Coaching', 'Remote Careers'],
    cta: 'Explore Talent Services',
    href: '/solutions/job-seekers',
    variant: 'candidate' as const,
  },
]

const process = [
  { step: 1, title: 'Consultation', description: 'We discuss your hiring needs, culture, and requirements.' },
  { step: 2, title: 'Sourcing', description: 'We source and attract qualified candidates from our network.' },
  { step: 3, title: 'Screening', description: 'Pre-screening, assessments, and shortlisting for best fit.' },
  { step: 4, title: 'Placement', description: 'We support offer, onboarding, and smooth handover.' },
  { step: 5, title: 'Support', description: 'Post-placement support and retention guidance.' },
]

const testimonials = [
  {
    quote: 'Reliable and Structured Recruitment Support',
    text: 'We struggled with inconsistent hiring before partnering with WRS. The structured screening process helped us shortlist better candidates quickly.',
    author: 'Operations Manager, Retail SME (Quezon City)',
  },
  {
    quote: 'Helped Us Scale Without Hiring an Internal Recruiter',
    text: 'As a growing business, we did not have a dedicated HR recruiter. WRS handled sourcing, screening, and coordination professionally.',
    author: 'Business Owner, Food & Beverage Group',
  },
  {
    quote: 'Quality Over Quantity',
    text: 'Instead of sending dozens of resumes, WRS endorsed a focused shortlist of candidates who actually matched our requirements.',
    author: 'HR Supervisor, Logistics Company',
  },
]

const pricing = [
  {
    title: 'Per-Hire Recruitment',
    price: '₱10,000 – ₱18,000',
    description: 'Per successful hire',
    featured: false,
  },
  {
    title: 'Monthly Recruitment Partner',
    price: '₱30,000 – ₱60,000',
    description: 'Per month',
    featured: true,
  },
  {
    title: 'Enterprise / Retainer',
    price: '₱60,000 – ₱120,000',
    description: 'Per month',
    featured: false,
  },
]

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-navy via-navy-light to-royal overflow-hidden">
        <div className="absolute inset-0 bg-[url('/Assets/pattern.svg')] opacity-5" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-steel/10 rounded-full blur-3xl" />
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white mb-6"
            >
              Workforce Recruitment & HR Solutions PH
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              Building Stronger Workforces.
              <br />
              <span className="text-gold">Connecting the Right People</span>
              <br />
              to the Right Opportunities.
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            >
              We help SMEs and scaling companies hire smarter, structure their HR processes, and build
              stable, high-performing teams.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link href="/solutions/employers">
                <Button size="xl" variant="employer" className="gap-2">
                  Hire Talent <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link href="/jobs">
                <Button size="xl" variant="candidate" className="gap-2">
                  Find Jobs <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link href="/book-consultation">
                <Button size="xl" variant="gold" className="gap-2">
                  Book a Consultation
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-navy">{stat.value}</div>
                <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Solutions for Every Need
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Whether you are looking to hire talent or find your next opportunity, we have got you covered.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                  service.variant === 'employer' ? 'bg-navy' : 'bg-steel'
                }`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-navy mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-gold" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href={service.href}>
                  <Button variant={service.variant} className="w-full gap-2">
                    {service.cta} <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-navy text-white">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-gold font-medium mb-2">How It Works</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              From consultation to ongoing support, we guide you every step of the way.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {process.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gold text-navy-dark font-bold text-2xl flex items-center justify-center mx-auto mb-4">
                  {step.step}
                </div>
                <h4 className="font-semibold mb-2">{step.title}</h4>
                <p className="text-sm text-gray-300">{step.description}</p>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-white/20" />
                )}
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/book-consultation">
              <Button size="xl" variant="gold" className="gap-2">
                Start with a Consultation <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-gold font-medium mb-2">Testimonials</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Client Feedbacks</h2>
            <p className="text-gray-600">What employers and professionals say about working with WRS.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>
                <p className="font-semibold text-navy mb-3">"{testimonial.quote}"</p>
                <p className="text-gray-600 mb-4">{testimonial.text}</p>
                <p className="text-sm font-medium text-gray-700">{testimonial.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Flexible Engagement Models
            </h2>
            <p className="text-gray-600">We offer simple and scalable options designed for SMEs and growing teams.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricing.map((plan, index) => (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-2xl p-8 ${
                  plan.featured
                    ? 'bg-navy text-white ring-4 ring-gold scale-105'
                    : 'bg-white border border-gray-200'
                }`}
              >
                <h3 className={`text-xl font-semibold mb-2 ${plan.featured ? 'text-gold' : 'text-navy'}`}>
                  {plan.title}
                </h3>
                <div className={`text-3xl font-bold mb-2 ${plan.featured ? 'text-white' : 'text-navy'}`}>
                  {plan.price}
                </div>
                <p className={`text-sm ${plan.featured ? 'text-gray-300' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
                {plan.featured && (
                  <div className="mt-4">
                    <span className="inline-block px-3 py-1 bg-gold/20 text-gold text-xs font-medium rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/solutions/employers#pricing">
              <Button variant="employer" size="lg" className="gap-2">
                View Full Pricing & Engagement Models <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Strengthen Your Workforce?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Whether you are hiring one key role or scaling your entire team, we are ready to support you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/solutions/employers">
              <Button size="lg" variant="employer" className="gap-2">
                Hire Talent Today <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link href="/book-consultation">
              <Button size="lg" variant="gold" className="gap-2">
                Book a Free Consultation
              </Button>
            </Link>
          </div>
          <p className="mt-8 text-sm text-gray-400">
            Building Stronger Teams. Structuring Better Systems. Supporting Sustainable Growth.
          </p>
        </div>
      </section>
    </div>
  )
}
