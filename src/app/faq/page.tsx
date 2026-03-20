import { PageHeader } from '@/components/sections/hero';
import { Section, SectionHeader } from '@/components/sections/section';
import { Card, CardContent } from '@/components/ui/card';

const faqs = [
  {
    category: 'General',
    questions: [
      {
        q: 'What services does Workforce Recruitment & HR Solutions PH offer?',
        a: 'We offer comprehensive HR and recruitment services including talent acquisition, executive search, contract staffing, and HR consulting. We help both employers find the right talent and job seekers find their ideal opportunities.',
      },
      {
        q: 'How can I post a job opening?',
        a: 'You can post a job by booking a consultation with our team. We\'ll discuss your requirements and help you create an effective job posting that attracts the right candidates.',
      },
      {
        q: 'Do you charge fees for job seekers?',
        a: 'No, our services for job seekers are generally free. We earn our fees from employers who engage our recruitment services.',
      },
    ],
  },
  {
    category: 'For Employers',
    questions: [
      {
        q: 'How long does it take to find a suitable candidate?',
        a: 'The timeline varies depending on the role complexity and market conditions. Typically, we can present qualified candidates within 2-4 weeks. Executive searches may take longer due to the specialized nature of the positions.',
      },
      {
        q: 'What industries do you specialize in?',
        a: 'We have experience across multiple industries including Technology, Finance, Healthcare, BPO, Manufacturing, Retail, Education, and more. Our team stays updated on industry trends and best practices.',
      },
      {
        q: 'Do you offer any guarantee on placements?',
        a: 'Yes, we offer replacement guarantees on our placements. If a candidate leaves within the guarantee period, we\'ll work to find a suitable replacement at no additional cost.',
      },
      {
        q: 'Can you help with HR consulting only?',
        a: 'Absolutely! We offer standalone HR consulting services including policy development, compensation structuring, performance management systems, and compliance audits.',
      },
    ],
  },
  {
    category: 'For Job Seekers',
    questions: [
      {
        q: 'How do I apply for jobs through your agency?',
        a: 'You can browse our current job openings on our Jobs page. For personalized support, you can submit your resume to our Talent Network, and we\'ll reach out when matching opportunities arise.',
      },
      {
        q: 'Do you help with resume writing?',
        a: 'Yes! We offer resume support services to help job seekers create compelling, ATS-friendly resumes that highlight their qualifications and achievements.',
      },
      {
        q: 'Can you help with interview preparation?',
        a: 'Yes, we offer interview coaching services. Our team can help you prepare for interviews with mock sessions, common question practice, and tips for making a great impression.',
      },
      {
        q: 'Do you have remote or work-from-home opportunities?',
        a: 'Yes, we work with employers who offer remote, hybrid, and flexible work arrangements. Let us know your preferences during our consultation.',
      },
    ],
  },
  {
    category: 'Process & Timeline',
    questions: [
      {
        q: 'What is your recruitment process?',
        a: 'Our process includes: 1) Discovery - understanding your needs, 2) Search - sourcing and screening candidates, 3) Selection - conducting interviews and assessments, 4) Placement - coordinating offers and onboarding.',
      },
      {
        q: 'How do you ensure candidate quality?',
        a: 'We use a rigorous vetting process including resume screening, skills assessments, behavioral interviews, reference checks, and cultural fit evaluation to ensure we present only qualified candidates.',
      },
      {
        q: 'What are your fees for employer services?',
        a: 'Our fees vary based on the service type and position level. We offer competitive rates and can discuss pricing during a personalized consultation. Contact us for detailed information.',
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      <PageHeader
        label="FAQ"
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our services"
      />

      <Section alt>
        <div className="container">
          <SectionHeader
            label="FAQ"
            title="Questions & Answers"
            subtitle="Everything you need to know about working with us"
          />

          <div className="space-y-12">
            {faqs.map((category) => (
              <div key={category.category}>
                <h2 className="text-xl font-bold text-gold mb-6">{category.category}</h2>
                <div className="space-y-4">
                  {category.questions.map((item, index) => (
                    <Card key={index} className="p-6">
                      <h3 className="font-bold text-gold mb-3">{item.q}</h3>
                      <p className="text-sm text-text-soft">{item.a}</p>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
