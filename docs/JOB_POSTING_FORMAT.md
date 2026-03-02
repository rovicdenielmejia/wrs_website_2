# Job Posting Format — Workforce Recruitment & HR Solutions PH

Use this format when creating or adding job postings for the website (jobs.html) and for consistent job ads on other channels.

---

## 1. Required fields (website & listing)

| Field | Type | Description | Example |
|-------|------|-------------|---------|
| **Title** | Text | Clear job title | `Oracle HRMS Techno-Functional` |
| **Location** | Text | City, region, or country | `Manila, Philippines` or `Remote` |
| **Experience** | Text | Years/seniority (shown on card) | `5+ years` or `Entry level` |
| **Job type** | One of: Full-time, Part-time, Contract, Remote | Employment type | `Full-time` |
| **Industry** | See list in Section 4 (Filter values) | For filtering | `Technology` |
| **Description** | Paragraph | Short summary (2–4 sentences) for the card and detail view | See template below |
| **Responsibilities** | Bullet list | Key duties (5–15 items) | See template below |
| **Required skills** | Bullet list | Must-have skills/qualifications | See template below |

---

## 2. Optional fields

| Field | Type | Use |
|-------|------|-----|
| **Salary Range / Compensation** | Text | Shown after Experience on card and detail (e.g. `₱25,000–₱30,000` or `P300/day + Free Meals`) |
| **Additional information** | Text | Application instructions, deadline, contact note |
| **Image URL** | URL | Logo or role image (optional) |
| **Status** | `active` / other | Use `active` for live postings |

---

## 3. Copy-paste template (fill and use)

```
JOB TITLE:
[ e.g. Senior Software Engineer ]

LOCATION:
[ e.g. Manila, Philippines | Remote | Hybrid ]

EXPERIENCE:
[ e.g. 5+ years ]

JOB TYPE:
[ Full-time | Part-time | Contract | Remote ]

INDUSTRY:
[ Technology | Finance | Healthcare | BPO | Education | Other ]

---

JOB DESCRIPTION (short summary for card and intro):
[ 2–4 sentences: what the role is, who it’s for, and main outcome. Keep under 200 words. ]

---

KEY RESPONSIBILITIES:
• [ Responsibility 1 ]
• [ Responsibility 2 ]
• [ Responsibility 3 ]
• [ Responsibility 4 ]
• [ Add more as needed ]

---

REQUIRED SKILLS / QUALIFICATIONS:
• [ Skill or qualification 1 ]
• [ Skill or qualification 2 ]
• [ Skill or qualification 3 ]
• [ Add more as needed ]

---

ADDITIONAL INFORMATION (optional):
[ Application instructions, deadline, “Interested candidates please…”, etc. ]

```

---

## 4. Website data structure (for adding to script.js)

Jobs are loaded from the **deployed** `defaultJobs` array in `js/script.js` (no localStorage). When you add a new job and deploy, the updated list is shown across the whole website for all visitors.

When adding a new job to `js/script.js` in the `defaultJobs` array, use this structure. Assign the next available `id` (unique number).

```javascript
{
    id: 3,
    title: 'Your Job Title Here',
    location: 'City or Region',
    experience: 'X+ years or level',
    salaryRange: '',   // optional: e.g. '₱25,000–₱30,000' or 'P300/day + Free Meals' — shown after Experience
    status: 'active',
    description: 'Short summary paragraph for the role.',
    responsibilities: [
        'First key responsibility.',
        'Second key responsibility.',
        'Third key responsibility.'
    ],
    requiredSkills: [
        'First required skill or qualification.',
        'Second required skill or qualification.'
    ],
    additionalInfo: 'Optional: how to apply or extra notes.',
    industry: 'Technology',   // Technology | Finance | Healthcare | BPO | Education | Other
    jobType: 'Full-time',     // Full-time | Part-time | Contract | Remote
    imageUrl: ''              // optional: full URL to image
}
```

**Filter values (use exactly):**
- **Industry:** `Accounting`, `Agriculture`, `Automotive`, `BPO`, `Construction`, `Consulting`, `Education`, `Energy & Utilities`, `Finance`, `Government & Public Sector`, `Healthcare`,`Hotels`, `Food & Beverages`, `HR & Recruitment`, `Insurance`, `Legal`, `Logistics & Supply Chain`, `Manufacturing`, `Marketing & Advertising`, `Media & Creative`, `NGO & Non-profit`, `Pharmaceutical`, `Real Estate`, `Retail`, `Technology`, `Telecommunications`, `Other`
- **Job type:** `Full-time`, `Part-time`, `Contract`, `Remote`

---

## 5. Writing tips

- **Title:** Use standard, search-friendly titles (e.g. “Senior Accountant,” “HR Generalist”).
- **Description:** Answer what the role is, who it’s for, and the main impact in 2–4 sentences.
- **Responsibilities:** Start with a verb; keep each item to one clear sentence.
- **Required skills:** List must-haves first; add “preferred” only if you have an additional section.
- **Location:** Use one consistent format (e.g. “Manila, Philippines,” “Remote,” “Cebu (Hybrid)”).

---

## 6. Example (filled template)

```
JOB TITLE:
HR Generalist

LOCATION:
Manila, Philippines

EXPERIENCE:
3–5 years

JOB TYPE:
Full-time

INDUSTRY:
Other

---

JOB DESCRIPTION:
We are looking for an HR Generalist to support recruitment, onboarding, and employee relations for our growing team. You will work with hiring managers on hiring plans and help maintain HR policies and records. This role suits someone who is organized, communicative, and comfortable in a fast-paced environment.

---

KEY RESPONSIBILITIES:
• Support end-to-end recruitment: job postings, screening, scheduling, and offer process.
• Conduct onboarding and orientation for new hires.
• Maintain employee records and assist with HR policies and compliance.
• Support performance review cycles and basic ER matters.
• Prepare HR reports and help with ad-hoc HR projects.

---

REQUIRED SKILLS / QUALIFICATIONS:
• Bachelor’s degree in HR, Psychology, or related field.
• 3–5 years of experience in HR or recruitment.
• Good knowledge of Philippine labor law and HR practices.
• Strong communication skills and attention to detail.
• Proficiency in MS Office; HRIS experience is a plus.

---

ADDITIONAL INFORMATION:
Send your resume to careers@example.com with subject “HR Generalist – [Your Name]”.

```

---

*Workforce Recruitment & HR Solutions PH — Job Posting Format v1.0*
