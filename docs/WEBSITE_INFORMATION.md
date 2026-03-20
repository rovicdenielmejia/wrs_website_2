# WRS Website - Complete Information, UI Structure & Design Breakdown

**Version:** 2.0 | **Last Updated:** March 2026  
**Domain:** workforcerecruitmentsolutions.com  
**Copyright:** © 2026 Workforce Recruitment & HR Solutions PH. All Rights Reserved.

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Technology Stack](#2-technology-stack)
3. [Color System](#3-color-system)
4. [Typography](#4-typography)
5. [CSS Architecture](#5-css-architecture)
6. [UI Components](#6-ui-components)
7. [Page Structure](#7-page-structure)
8. [Navigation System](#8-navigation-system)
9. [Responsive Breakpoints](#9-responsive-breakpoints)
10. [Animations & Effects](#10-animations--effects)
11. [Forms & Interactions](#11-forms--interactions)

---

## 1. Project Overview

| Property | Value |
|----------|-------|
| **Project Name** | Workforce Recruitment & HR Solutions PH (WRS) |
| **Type** | Static HTML Information & Hiring Website |
| **Business** | Philippine-based HR & Recruitment Agency |
| **Established** | 2023 |
| **Architecture** | Pure HTML/CSS/JavaScript (no framework) |
| **Hosting** | Vercel (primary), Netlify (alternative) |
| **Database** | None (static site) |

### Project Goals
- Inform visitors about recruitment and HR services
- Connect employers with job seekers
- Generate consultation bookings and job applications
- Build trust through professional design and content

---

## 2. Technology Stack

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Custom styles with CSS Variables
- **Vanilla JavaScript** - No framework dependencies
- **Google Fonts** - Plus Jakarta Sans, Source Serif 4

### External Services
| Service | Purpose |
|---------|---------|
| Vercel/Netlify | Hosting & CDN |
| Formspree | Form backend (consultation, newsletter) |
| JotForm | Job application forms |
| Google Fonts | Typography |

### Development
- Node.js >= 18
- Vercel CLI for local preview (`npm run dev`)

---

## 3. Color System

### Primary Palette (70% navy + royal, 15% light gray, 10% steel blue, 5% gold)

```css
/* ═══ CORE COLORS ═══ */
--navy:           #132237;    /* Primary – Hero, Footer, CTA, dark blocks */
--navy-dark:      #0e1a2a;    /* Darker navy variant */
--royal:          #1F376A;    /* Secondary – Alternate sections, highlights */
--accent-blue:    #3A73B3;    /* Buttons, links, interactive elements */
--accent-blue-hover: #2d5d8f; /* Hover state for accent blue */
--gold:           #C19D43;    /* Premium accent – Dividers, icons, headings */
--light-bg:       #EFF0F1;    /* Light sections, forms, readable areas */
```

### Semantic Colors

```css
/* ═══ SEMANTIC TOKENS ═══ */
--color-primary:     var(--navy);         /* Primary brand color */
--color-secondary:   var(--royal);       /* Secondary brand color */
--color-accent:      var(--gold);        /* Premium accent */
--color-accent-blue: var(--accent-blue); /* Interactive accent */

/* Accent Variants */
--accent-red:         var(--gold);       /* Red accent (uses gold) */
--accent-orange:      var(--accent-blue); /* Orange accent (uses blue) */
--accent-gold:        var(--gold);       /* Gold accent */

/* Primary Color Aliases */
--primary-red:        var(--gold);       /* Primary red (uses gold) */
--primary-maroon:    var(--royal);      /* Maroon (uses royal) */
--dark-red:          var(--royal);       /* Dark red (uses royal) */
--light-red:         var(--text-soft);   /* Light red (uses soft) */
```

### Text Colors

```css
/* ═══ TEXT COLORS ═══ */
--text-on-dark:    #F1F5F9;    /* Text on dark backgrounds */
--text-soft:       #94A3B8;    /* Soft/secondary text */
--text-on-light:   #1E293B;    /* Text on light backgrounds */
--text-primary:    var(--text-on-dark);  /* Primary text */
--text-secondary:  var(--text-soft);     /* Secondary text */
--text-muted:      #64748B;    /* Muted text */
```

### Surface & Utility Colors

```css
/* ═══ SURFACES ═══ */
--bg-body:          var(--navy);      /* Page background */
--bg-surface:       var(--royal);     /* Card/section backgrounds */
--bg-elevated:      var(--royal);     /* Elevated surfaces */
--bg-soft-section:  var(--light-bg);  /* Soft section backgrounds */
--white:            var(--text-on-dark);

/* ═══ BORDERS ═══ */
--border-subtle:  rgba(255, 255, 255, 0.08);  /* Subtle borders */
--border-accent:  rgba(255, 255, 255, 0.18);   /* Accent borders */
--border-gold:    rgba(193, 157, 67, 0.4);     /* Gold borders */

/* ═══ SHADOWS ═══ */
--shadow:         rgba(0, 0, 0, 0.35);         /* Default shadow */
--shadow-neon:    0 0 20px rgba(0, 0, 0, 0.12); /* Neon glow shadow */
--shadow-glow:    0 0 40px rgba(58, 115, 179, 0.12); /* Blue glow */
--shadow-hover:   rgba(0, 0, 0, 0.45);          /* Hover shadow */

/* ═══ GLASS MORPHISM ═══ */
--glass:          rgba(31, 55, 106, 0.9);        /* Glass background */
--glass-border:   rgba(255, 255, 255, 0.08);    /* Glass border */
```

### Color Usage Guidelines

| Color | Usage |
|-------|-------|
| `#132237` (Navy) | Hero sections, footer, primary background |
| `#1F376A` (Royal) | Alternate sections, card backgrounds |
| `#3A73B3` (Blue) | Buttons, links, interactive elements |
| `#C19D43` (Gold) | Headings, section titles, dividers, icons |
| `#EFF0F1` (Light) | Soft sections, forms, readable areas |
| `#F1F5F9` (Off-white) | Text on dark backgrounds |

---

## 4. Typography

### Font Stack

```css
/* ═══ FONT FAMILIES ═══ */
--font-heading: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
--font-body:    'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
--font-accent:  'Source Serif 4', Georgia, serif;
```

### Type Scale

| Element | Font | Weight | Size | Line Height | Letter Spacing |
|---------|------|--------|------|-------------|----------------|
| Hero Title | Plus Jakarta Sans | 800 (ExtraBold) | clamp(2.25rem, 5.5vw, 3.5rem) | 1.12 | -0.035em |
| Section Title | Plus Jakarta Sans | 800 (ExtraBold) | clamp(1.9rem, 4vw, 2.6rem) | 1.2 | -0.03em |
| Card Title | Plus Jakarta Sans | 700 (Bold) | 1.2rem | - | -0.02em |
| Body Text | Plus Jakarta Sans | 400 (Regular) | 1rem | 1.7 | 0.01em |
| Hero Subtitle | Plus Jakarta Sans | 400 (Regular) | 1.2rem | 1.75 | - |
| Section Subtitle | Plus Jakarta Sans | 400 (Regular) | 1.1rem | 1.8 | - |
| Section Label | Plus Jakarta Sans | 700 (Bold) | 0.7rem | - | 0.28em |
| Quote Text | Source Serif 4 | 400 (Regular) | 1.45rem | 1.9 | - (italic) |

### Special Typography

```css
/* Hero Badge */
.hero-badge {
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.22em;
    text-transform: uppercase;
}

/* Section Label */
.section-label {
    font-size: 0.7rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.28em;
}

/* Quote */
.quote {
    font-family: var(--font-accent);
    font-style: italic;
    font-size: 1.45rem;
}
```

---

## 5. CSS Architecture

### File Structure

```
css/
├── styles.css          (~3,500 lines)  Main stylesheet
├── styles-portal.css   (~4,960 lines)  Portal/conversion styles
└── styles-hr.css       HR-specific overrides
```

### CSS Variables (Design Tokens)

```css
/* ═══ BORDER RADIUS ═══ */
--radius-sm:  10px;   /* Small elements */
--radius-md:  16px;   /* Medium cards */
--radius-lg:  20px;   /* Large cards */
--radius-xl:  24px;   /* Extra large */

/* ═══ TRANSITIONS ═══ */
--ease-out:     cubic-bezier(0.25, 0.46, 0.45, 0.94);
--ease-in-out:  cubic-bezier(0.65, 0, 0.35, 1);

/* ═══ SHADOWS ═══ */
--shadow-card:        0 4px 24px rgba(0,0,0,0.12), 0 0 0 1px rgba(255,255,255,0.06);
--shadow-card-hover:  0 12px 40px rgba(0,0,0,0.18), 0 0 0 1px rgba(255,255,255,0.08);
--shadow-nav:         0 4px 24px rgba(0,0,0,0.2);

/* ═══ SPACING ═══ */
--space-section:    5rem;   /* Standard section padding */
--space-section-lg:  6rem;   /* Large section padding */

/* ═══ CONTAINER ═══ */
.container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 2rem;
}
```

### CSS Organization

| Section | Lines | Contents |
|---------|-------|----------|
| Reset & Base | 1-120 | CSS reset, box-sizing, root variables |
| Typography | 121-180 | Body styles, headings, links |
| Navigation | 181-450 | Navbar, mega-menu, dropdowns |
| Hero | 451-600 | Hero section styles |
| Buttons | 601-700 | CTA buttons, outlines |
| Sections | 701-1100 | Why section, services, solutions |
| Cards | 1101-1400 | Glass cards, portfolio cards |
| Forms | 1600-2300 | Form inputs, validation |
| Modals | 2300-2600 | Modal dialogs, overlays |
| Footer | 2600-2800 | Footer styles |
| Responsive | 2800-3507 | Media queries |

---

## 6. UI Components

### 6.1 Navigation Bar

```css
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: rgba(19, 34, 55, 0.92);
    backdrop-filter: blur(24px);
    box-shadow: var(--shadow-nav);
    border-bottom: 1px solid var(--border-subtle);
    z-index: 1000;
}
```

**Features:**
- Fixed position with glass blur effect
- Logo + brand name on left
- Navigation links center
- Hamburger menu for mobile
- Mega-menu dropdowns on desktop

### 6.2 Hero Section

```css
.hero {
    margin-top: 72px;        /* Below fixed navbar */
    padding: 5.5rem 0 6rem;
    background: var(--color-primary);
    position: relative;
    overflow: hidden;
}
```

**Elements:**
- Badge (uppercase, gold border)
- Title (gold, large, bold)
- Subtitle (soft white)
- CTA buttons (grid layout)
- Stats (optional)

### 6.3 CTA Buttons

```css
.cta-button {
    display: inline-block;
    padding: 1rem 2.5rem;
    background: linear-gradient(135deg, var(--accent-blue) 0%, var(--accent-blue-hover) 100%);
    color: var(--white);
    font-weight: 600;
    border-radius: var(--radius-sm);
    box-shadow: 0 4px 20px rgba(58, 115, 179, 0.35);
    transition: transform 0.3s var(--ease-out), box-shadow 0.3s var(--ease-out);
}

.cta-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 32px rgba(58, 115, 179, 0.4);
}
```

**Button Variants:**

| Class | Style |
|-------|-------|
| `.cta-button` | Default blue gradient |
| `.cta-button--outline` | Transparent with blue border |
| `.cta-button--outline-small` | Smaller outline variant |
| `.cta-button--employer` | Blue gradient for employers |
| `.cta-button--candidate` | Blue gradient for candidates |
| `.cta-button--hr-services` | Red-orange gradient |
| `.nav-cta` | Compact nav button |

### 6.4 Glass Cards

```css
.glass-card,
.portfolio-card,
.conversion-card {
    background: var(--glass);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid var(--glass-border);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-card);
    transition: transform 0.35s var(--ease-out), box-shadow 0.35s var(--ease-out);
}

.glass-card:hover,
.portfolio-card:hover,
.conversion-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-card-hover);
}
```

**Card Types:**
| Card | Accent | Purpose |
|------|--------|---------|
| `.portfolio-card` | Gold top border | Service/features display |
| `.solutions-card` | Colored top border | Solutions pages |
| `.conversion-card` | Glass effect | CTA sections |
| `.info-card` | Gold heading underline | Information display |
| `.services-block` | Gold top border | Service listings |

### 6.5 Section Dividers

```css
.section-divider {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2.5rem 0;
}

.divider-line {
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--gold), transparent);
    opacity: 0.5;
    max-width: 180px;
}

.divider-icon {
    width: 10px;
    height: 10px;
    margin: 0 1.5rem;
    background-color: var(--gold);
    border-radius: 50%;
    animation: float 3s ease-in-out infinite;
}
```

### 6.6 List Components

```css
/* Why List - Gold accent */
.why-list li {
    padding: 1.1rem 1.25rem 1.1rem 3.25rem;
    background: var(--glass);
    border-radius: var(--radius-md);
    border: 1px solid var(--glass-border);
    border-left: 4px solid var(--gold);
    transition: transform 0.3s var(--ease-out);
}

.why-list li::before {
    content: '';
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    width: 8px;
    height: 8px;
    background-color: var(--gold);
    border-radius: 50%;
}
```

### 6.7 Form Elements

```css
.form-group input,
.form-group select,
.form-group textarea {
    width: 100%;
    padding: 0.9rem 1.2rem;
    border: 2px solid var(--gray-medium);
    border-radius: 10px;
    font-size: 1rem;
    font-family: inherit;
    transition: all 0.3s ease;
    background-color: var(--white);
}

.form-group input:focus {
    outline: none;
    border-color: var(--primary-red);
    box-shadow: 0 0 0 4px rgba(139, 38, 53, 0.15);
    transform: translateY(-2px);
}
```

### 6.8 Modal

```css
.modal {
    display: none;
    position: fixed;
    z-index: 2000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(5px);
}

.modal-content {
    margin: 5% auto;
    padding: 3rem;
    border-radius: 12px;
    max-width: 800px;
    width: 90%;
    background-color: var(--bg-surface);
    box-shadow: 0 10px 40px var(--shadow-hover);
}
```

### 6.9 Footer

```css
.footer {
    padding: 3rem 0;
    background: var(--color-primary);
    border-top: 1px solid var(--border-subtle);
}

.footer-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 2rem;
}

.footer-section {
    flex: 1;
    min-width: 250px;
}

.footer-contact {
    text-align: right;
}
```

---

## 7. Page Structure

### Standard Page Layout

```
┌─────────────────────────────────────────┐
│ NAVBAR (fixed, glass blur)              │
├─────────────────────────────────────────┤
│                                         │
│ HERO SECTION                            │
│ - Badge                                 │
│ - Title (gold)                          │
│ - Subtitle                              │
│ - CTA Buttons                           │
│                                         │
├─────────────────────────────────────────┤
│ SECTION DIVIDER (gold gradient line)    │
├─────────────────────────────────────────┤
│                                         │
│ CONTENT SECTION                         │
│ - Section Label (uppercase gold)        │
│ - Section Title                         │
│ - Section Subtitle                      │
│ - Cards/Lists/Content                   │
│                                         │
├─────────────────────────────────────────┤
│ SECTION DIVIDER                         │
├─────────────────────────────────────────┤
│                                         │
│ ALTERNATE CONTENT SECTION               │
│ (royal background variant)               │
│                                         │
├─────────────────────────────────────────┤
│ CTA SECTION (conversion section)         │
├─────────────────────────────────────────┤
│ FOOTER                                  │
└─────────────────────────────────────────┘
```

### Page Types

| Page Type | Example | Background |
|-----------|---------|------------|
| Homepage | home.html | Navy → Royal gradient |
| Inner Pages | about.html, contact.html | Page header with gradient |
| Solutions | solutions/*.html | Dark navy with cards |
| Blog | blog/*.html | Light background for readability |
| Legal | legal/*.html | Standard page layout |

---

## 8. Navigation System

### Desktop Navigation

```
┌──────┬──────────┬──────────────┬────────┬──────┐
│ Logo │ Home    │ Solutions ▼  │ About ▼│ Jobs │
└──────┴──────────┴──────────────┴────────┴──────┘
              │
              ▼
         ┌─────────────────────────┐
         │ 👔 Employers  👩‍💼 Talent │
         ├──────────┬─────────────┤
         │ Tal. Acq.│ Job Match.  │
         │ Exec. Sr.│ Resume Sup. │
         │ Contr.St.│ Interview.  │
         │ ...      │ Remote Car. │
         │          │ Skill Cert. │
         │ [Employers Page →]      │
         │ [Job Seekers Page →]    │
         └─────────────────────────┘
```

### Mobile Navigation

- Hamburger menu icon
- Full-width dropdown
- Mega-menu inline below navbar
- Smooth slide animation

---

## 9. Responsive Breakpoints

### Breakpoint Reference

| Breakpoint | Target | Styles |
|------------|--------|--------|
| 1200px | Large desktop | Full layout |
| 1100px | Desktop | Adjusted mega-menu |
| 1024px | Tablet landscape | Adjusted spacing |
| 900px | Tablet | Card grid adjustments |
| 768px | Tablet portrait | Mobile nav trigger |
| 640px | Large mobile | Stacked layouts |
| 480px | Mobile | Compact spacing |

### Key Responsive Rules

```css
/* Navigation */
@media (max-width: 768px) {
    .nav-toggle { display: flex; }
    .nav-menu { display: none; }
    .mega-menu { /* Full width inline */ }
}

/* Grids */
@media (max-width: 768px) {
    .home-audience-cols { grid-template-columns: 1fr; }
    .services-grid { grid-template-columns: 1fr; }
    .solutions-grid { grid-template-columns: 1fr; }
}

/* Typography */
@media (max-width: 640px) {
    .hero-title { font-size: 2rem; }
    .section-title { font-size: 1.5rem; }
    .container { padding: 0 1rem; }
}
```

---

## 10. Animations & Effects

### 10.1 Section Reveal

```css
section.reveal {
    opacity: 1;
    transform: translateY(0);
}

section.reveal .section-label,
section.reveal .section-title {
    animation: revealIn 0.7s ease-out forwards;
}

@keyframes revealIn {
    from {
        opacity: 0;
        transform: translateY(24px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
```

### 10.2 Card Hover Effects

```css
.portfolio-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-card-hover);
}

.why-list li:hover {
    transform: translateX(6px);
    box-shadow: var(--shadow-card);
}
```

### 10.3 Floating Animation (Divider Icon)

```css
.divider-icon {
    animation: float 3s ease-in-out infinite;
}

@keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-8px); }
}
```

### 10.4 Button Hover

```css
.cta-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 32px rgba(58, 115, 179, 0.4);
}
```

### 10.5 Glass Card Shine Effect

```css
.info-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.5s ease;
}

.info-card:hover::before {
    left: 100%;
}
```

### 10.6 Loading Spinner

```css
.button-loader {
    width: 20px;
    height: 20px;
    border: 3px solid rgba(255, 255, 255, 0.3);
    border-top-color: var(--white);
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
}

@keyframes spin {
    to { transform: rotate(360deg); }
}
```

---

## 11. Forms & Interactions

### 11.1 Form Structure

```html
<form id="consultation-form" action="https://formspree.io/f/mbdavdzr" method="POST">
    <input type="text" name="_honeypot" class="honeypot" tabindex="-1" autocomplete="off">
    
    <div class="form-group">
        <label for="name">Full Name <span class="required">*</span></label>
        <input type="text" id="name" name="name" required>
    </div>
    
    <button type="submit" class="submit-button">Submit</button>
</form>
```

### 11.2 Form Validation States

```css
.form-group input:focus {
    border-color: var(--primary-red);
    box-shadow: 0 0 0 4px rgba(139, 38, 53, 0.15);
}

.form-group input:invalid:not(:placeholder-shown) {
    border-color: var(--accent-red);
}

.form-message.success {
    background-color: #D4EDDA;
    color: #155724;
}

.form-message.error {
    background-color: #F8D7DA;
    color: #721C24;
}
```

### 11.3 Honeypot Spam Protection

```css
.honeypot {
    position: absolute;
    left: -9999px;
    opacity: 0;
    pointer-events: none;
}
```

### 11.4 Local Storage Keys

| Key | Purpose |
|-----|---------|
| `wrs_contact_inquiries` | Contact form data |
| `wrs_consultations` | Consultation requests |
| `wrs_talent_applications` | Talent submissions |
| `wrs_job_alerts` | Job alert preferences |
| `newsletter-banner-signedup` | Newsletter popup state |

---

## Summary

The WRS website uses a **premium dark design system** with:
- **Navy/Royal base** (#132237, #1F376A) for authority and professionalism
- **Gold accents** (#C19D43) for premium feel and headings
- **Blue interactive** (#3A73B3) for CTAs and links
- **Glass morphism** effects for modern card design
- **Plus Jakarta Sans** typography for clean readability
- **Source Serif 4** for elegant quotes and accents
- **Smooth animations** using CSS transitions and keyframes
- **Mobile-first responsive** design with comprehensive breakpoints
