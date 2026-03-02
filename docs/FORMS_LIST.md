# Forms List — Workforce Recruitment & HR Solutions PH

A single reference for all forms on the website: where they are, what fields they use, and where submissions go.

---

## Summary table

| # | Form name           | Page / location           | Purpose              | Submission destination   |
|---|---------------------|---------------------------|----------------------|--------------------------|
| 1 | Contact / Inquiry   | contact.html              | General inquiries    | mailto: wrs.recruitment.hr@gmail.com |
| 2 | Consultation (page)| book-consultation.html    | Book a call          | localStorage → thank-you |
| 3 | Consultation (modal)| Site-wide (script.js)     | Book a call / Schedule / Discuss needs | Formspree (mbdavdzr) → thank-you |
| 4 | Job Seeker Support (modal) | solutions/job-seekers.html | Get Resume Support / Book Coaching Session | Formspree (mbdavdzr) → thank-you |
| 5 | Join our Talent Network | solutions/job-seekers.html (§ application-form) | Talent / Job seeker application | JotForm (260543773465059) |
| 6 | Job alerts         | job-seekers (planned)     | Email signup        | Not implemented (no HTML)|
| 7 | Job application    | jobs.html (Apply modal)   | Apply to a job      | Job-specific JotForm (per position) |

---

## 1. Contact / Inquiry form

| Property | Value |
|----------|--------|
| **Form ID** | `contact-form` |
| **Page** | contact.html |
| **Heading** | Contact Form |
| **Current behavior** | Native HTML form. On submit, opens the user's email client with a pre-filled message to **wrs.recruitment.hr@gmail.com** (subject and body from form). Submissions are sent to that address. Optional “Open in new window” link opens the same form in a popup (700×500). |

### Fields

| Field name (name=) | Label / purpose   | Type   | Required |
|--------------------|-------------------|--------|----------|
| name               | Full Name         | text   | Yes      |
| email              | Email             | email  | Yes      |
| phone              | Phone             | tel    | No       |
| subject            | Subject           | select | No       |
| message            | Message           | textarea | Yes    |

**Subject options:** general, employer, job-seeker (General inquiry, Employer / Hiring, Job seeker).

---

## 2. Consultation form (dedicated page)

| Property | Value |
|----------|--------|
| **Form ID** | `consultation-form` |
| **Page** | book-consultation.html |
| **Heading** | Schedule a Call |
| **Current behavior** | Saves to `localStorage` key `wrs_consultations`, then redirects to thank-you.html?type=consultation. |

### Fields

| Field name (name=) | Label / purpose   | Type   | Required |
|--------------------|-------------------|--------|----------|
| name               | Full Name         | text   | Yes      |
| email              | Email             | email  | Yes      |
| phone              | Phone             | tel    | No       |
| company            | Company (if employer) | text | No    |
| type               | I am a            | select | No       |
| message            | Message           | textarea | No    |

**Type options:** `employer`, `job-seeker`, `other` (Employer / HR Leader, Job Seeker, Other).

---

## 3. Consultation form (modal)

| Property | Value |
|----------|--------|
| **Form ID** | `consultation-modal-form` |
| **Formspree** | https://formspree.io/f/mbdavdzr |
| **Location** | Injected by js/script.js; opened by CTAs with `data-open-modal="consultation"` (e.g. Book a Consultation, Schedule a Call, Discuss Your Workforce Needs). |
| **Current behavior** | Submits via Formspree; shows status in modal, then closes and redirects to thank-you.html?type=consultation. |

### Fields

| Field name (name=) | Input ID              | Label / purpose   | Type   | Required |
|--------------------|------------------------|-------------------|--------|----------|
| name               | consult-modal-name     | Full Name         | text   | Yes      |
| email              | consult-modal-email    | Email             | email  | Yes      |
| phone              | consult-modal-phone    | Phone             | tel    | No       |
| company            | consult-modal-company  | Company (if employer) | text | No    |
| type               | consult-modal-type     | I am a            | select | No       |
| message            | consult-modal-message  | Message           | textarea | No    |

**Type options:** same as consultation page (`employer`, `job-seeker`, `other`).

---

## 4. Job Seeker Support modal (Resume Support / Coaching Session)

| Property | Value |
|----------|--------|
| **Form ID** | `jobseeker-support-form` |
| **Modal ID** | `jobseeker-support-modal` |
| **Formspree** | https://formspree.io/f/mbdavdzr |
| **Page** | solutions/job-seekers.html only |
| **Opened by** | “Get Resume Support” (`data-open-modal="jobseeker-support"` `data-service="resume"`) and “Book Coaching Session” (`data-service="coaching"`). |
| **Current behavior** | Submits via Formspree with hidden `service` (Resume Support or Coaching Session); then redirects to thank-you.html?type=consultation. |

### Fields

| Field name (name=) | Input ID   | Label / purpose | Type   | Required |
|--------------------|------------|------------------|--------|----------|
| _subject           | (hidden)   | Email subject    | hidden | —        |
| service            | jobseeker-support-service | Resume Support or Coaching Session | hidden | — |
| name               | jobseeker-name     | Full Name  | text   | Yes      |
| email              | jobseeker-email    | Email      | email  | Yes      |
| phone              | jobseeker-phone    | Phone      | tel    | No       |
| message            | jobseeker-message  | Message    | textarea | No    |

---

## 5. Join our Talent Network / Submit Your Resume (JotForm)

| Property | Value |
|----------|--------|
| **Section ID** | `application-form` |
| **Heading** | Join our Talent Network |
| **Page** | solutions/job-seekers.html |
| **Used by** | “Submit Your Resume” (jobs.html → job-seekers.html#application-form), “Submit Your Resume for Personalized Support” (job-seekers.html → #application-form). |
| **Form URL** | https://form.jotform.com/260543773465059 |
| **Embed** | JotForm iframe — form ID **260543773465059** (title: Talent / Job Seeker Application). |
| **Current behavior** | Form is hosted on JotForm; submissions go to your JotForm account. Embed handler script loads from `cdn.jotfor.ms` for resize/behavior. |

### Fields

Defined in the JotForm form; not stored in the site HTML. Configure fields and notifications in the JotForm dashboard.

---

## 6. Job alerts form

| Property | Value |
|----------|--------|
| **Form ID** | `job-alerts-form` (expected by script) |
| **Page** | solutions/job-seekers.html — **no HTML exists**; script only. |
| **Current behavior** | If the form existed, would save to `localStorage` key `wrs_job_alerts`. |

### Fields (from script; form not in page)

| Field / source   | Purpose        | Type   |
|------------------|----------------|--------|
| alerts-email     | Email          | email  |
| alerts-preference| Job preference | text   |

**Note:** Add a `<form id="job-alerts-form">` with inputs `id="alerts-email"` and `id="alerts-preference"` to enable this, or replace with a JotForm/Netlify form.

---

## 7. Job application (Apply to specific job)

| Property | Value |
|----------|--------|
| **Implementation** | Job-specific JotForm URLs loaded in iframe (`#apply-form-iframe`) when user clicks Apply Now. |
| **Page** | jobs.html — Apply modal (`#apply-modal`). |
| **Current behavior** | `openApplyModal(jobId)` sets iframe `src` from `applyFormUrls` in script.js; user submits in the iframe; data goes to the JotForm for that job. |

### Job → JotForm URL (script.js `applyFormUrls`)

| Job (id) | Form URL |
|----------|----------|
| 1 – Oracle HRMS Techno-Functional | https://form.jotform.com/260543427010041 |
| 2 – Oracle EBS Finance Techno-Functional Analyst | https://form.jotform.com/260605022887457 |
| 3 – HR MANAGER | https://form.jotform.com/260604609619460 |
| 4 – Barista/Service Crew | https://form.jotform.com/260604773110448 |

- **Fields:** Defined in each JotForm (not in site HTML). Configure and view in JotForm dashboard.

---

## Optional: Netlify “application” form

| Property | Value |
|----------|--------|
| **Form name (Netlify)** | `application` |
| **Form ID in HTML** | `application-form` |
| **Status** | Described in docs/NETLIFY_DEPLOYMENT.md; no form with this id exists in current HTML. |
| **If used** | Would POST to Netlify; notifications can forward to e.g. wrs.recruitment.hr@gmail.com. |

### Fields (from script.js handleFormSubmit)

| name=   | Purpose     | Type   |
|---------|-------------|--------|
| name    | Full name   | text   |
| email   | Email       | email  |
| phone   | Phone       | tel    |
| position| Job ID (dropdown) | select |
| experience | Experience | text   |
| coverLetter | Cover letter | textarea |
| resume | Resume file  | file   |

---

## localStorage keys used by forms

| Key                     | Form(s) that write to it     |
|-------------------------|------------------------------|
| wrs_contact_inquiries   | Contact form                 |
| wrs_consultations       | Consultation (page + modal)  |
| wrs_talent_applications | Talent application (job-seekers) |
| wrs_job_alerts          | Job alerts (if form exists)  |

---

## Suggested form IDs for JotForm / Netlify

If you recreate forms in JotForm or Netlify, keep naming consistent:

| Purpose           | Suggested form name / id |
|-------------------|---------------------------|
| Contact / inquiry | contact, inquiry, or contact-form |
| Consultation      | consultation, book-consultation |
| Talent application| talent-application, job-seeker-application |
| Job alerts        | job-alerts, newsletter |

---

## Contact emails (for notifications)

- **General / contact:** rovicmejia.hrd@gmail.com (used in mailto and footer).
- **Recruitment / applications:** wrs.recruitment.hr@gmail.com (referenced in script comments for Netlify).

---

*Workforce Recruitment & HR Solutions PH — Forms List v1.0*
