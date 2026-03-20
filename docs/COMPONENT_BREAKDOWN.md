# WRS Component Breakdown

## Table of Contents
1. [Navigation Components](#1-navigation-components)
2. [Hero Components](#2-hero-components)
3. [Content Components](#3-content-components)
4. [Card Components](#4-card-components)
5. [List Components](#5-list-components)
6. [Button Components](#6-button-components)
7. [Form Components](#7-form-components)
8. [Modal Components](#8-modal-components)
9. [Section Components](#9-section-components)
10. [Utility Components](#10-utility-components)

---

## 1. Navigation Components

### 1.1 Navbar

```html
<nav class="navbar" aria-label="Main navigation">
    <div class="container">
        <div class="nav-brand">
            <a href="/" class="nav-brand-link">
                <img src="Assets/Logo.png" alt="WRS" class="nav-logo">
                <span class="nav-brand-title">Workforce Recruitment & HR Solutions PH</span>
            </a>
        </div>
        <ul class="nav-menu">
            <li><a href="/">Home</a></li>
            <li class="nav-item mega-wrapper">
                <a href="/solutions" class="nav-link">Solutions</a>
                <div class="mega-menu">...</div>
            </li>
            <!-- more items -->
        </ul>
        <button class="nav-toggle">...</button>
    </div>
</nav>
```

**Specifications:**
- Fixed position, top: 0
- Background: `rgba(19, 34, 55, 0.92)`
- Backdrop filter: `blur(24px)`
- Height: ~72px
- Z-index: 1000

### 1.2 Mega Menu

```html
<div class="mega-menu">
    <div class="mega-grid">
        <div class="mega-col">
            <h4>👔 Employers</h4>
            <a href="/...">Talent Acquisition</a>
            <!-- more links -->
            <a href="/..." class="mega-cta red">Employers Page →</a>
        </div>
        <div class="mega-col">
            <h4>👩‍💼 Talent</h4>
            <a href="/...">Job Matching</a>
            <!-- more links -->
            <a href="/..." class="mega-cta orange">Job Seekers Page →</a>
        </div>
    </div>
</div>
```

**Specifications:**
- Width: 420px
- Columns: 2 (1fr 1fr)
- Gap: 2rem
- Background: Royal (#1F376A)
- Border radius: 12px
- Shadow: `0 20px 50px rgba(0,0,0,0.5)`

### 1.3 Mobile Navigation

**Trigger:** `.nav-toggle` button at 768px

**Behavior:**
- Hamburger icon transforms to X
- Nav menu slides down
- Mega-menu displays inline
- Full-width dropdown

---

## 2. Hero Components

### 2.1 Standard Hero

```html
<section class="hero" aria-labelledby="hero-heading">
    <div class="container">
        <div class="hero-content">
            <p class="hero-badge">Workforce Recruitment & HR Solutions PH</p>
            <h1 id="hero-heading" class="hero-title">
                Building Stronger Workforces...
            </h1>
            <p class="hero-subtitle">We help SMEs and scaling companies...</p>
            <div class="hero-cta-grid">
                <a href="/..." class="cta-button cta-button--employer">Hire Talent</a>
                <a href="/..." class="cta-button cta-button--candidate">Find Jobs</a>
                <a href="#" class="cta-button" data-open-modal="consultation">Book Consultation</a>
            </div>
        </div>
    </div>
</section>
```

### 2.2 Page Header Hero

```html
<section class="page-header" aria-labelledby="page-heading">
    <div class="container">
        <div class="section-label">Get in Touch</div>
        <h1 id="page-heading" class="section-title">Contact Us</h1>
        <p class="section-subtitle">Workforce Recruitment & HR Solutions PH</p>
    </div>
</section>
```

**Specifications:**
- Padding: 80px 0 60px
- Background: Navy → Royal gradient
- No CTA buttons
- Text centered

---

## 3. Content Components

### 3.1 Section Header

```html
<div class="container">
    <p class="section-label">Section Label</p>
    <h2 class="section-title">Section Title</h2>
    <p class="section-subtitle">Section subtitle text...</p>
</div>
```

### 3.2 Section Divider

```html
<div class="section-divider" aria-hidden="true">
    <div class="divider-line"></div>
    <div class="divider-icon"></div>
    <div class="divider-line"></div>
</div>
```

---

## 4. Card Components

### 4.1 Portfolio Card

```html
<a href="/..." class="portfolio-card">
    <span class="portfolio-card-icon">💼</span>
    <h3>Card Title</h3>
    <p>Card description text...</p>
    <span class="portfolio-card-link">Learn More →</span>
</a>
```

**States:**
- Default: Glass background, gold top border
- Hover: Lift up 5px, enhanced shadow

### 4.2 Solutions Card

```html
<div class="solutions-card solutions-card--employers">
    <span class="solutions-card-icon">👔</span>
    <h3 class="solutions-card-title">Employers</h3>
    <p class="solutions-card-desc">Description...</p>
    <ul class="solutions-list">
        <li>Feature 1</li>
        <li>Feature 2</li>
    </ul>
    <a href="/..." class="solutions-cta solutions-cta--red">Learn More →</a>
</div>
```

**Modifier Classes:**
- `--employers` → Blue top border
- `--enterprise` → Gold top border
- `--global` → Blue top border
- `--talent` → Orange top border

### 4.3 Info Card

```html
<div class="info-card">
    <h3>Card Title</h3>
    <p>Description text...</p>
</div>
```

**Features:**
- Shine effect on hover
- Gold heading underline
- Glass background

### 4.4 Conversion Card

```html
<div class="conversion-card">
    <h3>Card Title</h3>
    <p>Description...</p>
    <a href="/..." class="link-text">Link Text →</a>
</div>
```

### 4.5 Employer Solution Card

```html
<a href="/..." class="employer-solution-card">
    <span class="employer-solution-icon">🎯</span>
    <h3>Talent Acquisition</h3>
    <p>Description...</p>
</a>
```

---

## 5. List Components

### 5.1 Why List

```html
<ul class="why-list">
    <li>Talent Acquisition & Structured Recruitment</li>
    <li>Executive & Specialized Hiring</li>
    <li>Workforce Planning</li>
</ul>
```

**Specifications:**
- Max width: 720px
- Item padding: 1.1rem 1.25rem 1.1rem 3.25rem
- Border left: 4px gold
- Bullet: 8px gold circle
- Hover: translateX(6px)

### 5.2 Services List

```html
<ul class="services-list">
    <li>Service item 1</li>
    <li>Service item 2</li>
</ul>
```

**Specifications:**
- Background: Royal
- Border left: 4px gold
- Bullet: 10px gold circle
- Hover: translateX(4px)

### 5.3 Solutions List

```html
<ul class="solutions-list">
    <li>Feature 1</li>
    <li>Feature 2</li>
</ul>
```

---

## 6. Button Components

### 6.1 Primary CTA Button

```html
<a href="/..." class="cta-button">Button Text</a>
<button class="cta-button">Button Text</button>
```

### 6.2 Button Variants

```html
<a href="/..." class="cta-button cta-button--employer">Hire Talent</a>
<a href="/..." class="cta-button cta-button--candidate">Find Jobs</a>
<a href="/..." class="cta-button cta-button--outline">Learn More</a>
<a href="/..." class="cta-button cta-button--outline-small">View More</a>
<a href="/..." class="cta-button cta-button--hr-services">HR Services</a>
```

### 6.3 Nav CTA Buttons

```html
<a href="/..." class="nav-cta nav-cta--employer">For Employers</a>
<a href="/..." class="nav-cta nav-cta--candidate">For Candidates</a>
```

### 6.4 Button Grid

```html
<div class="hero-cta-grid">
    <a href="/..." class="cta-button">Button 1</a>
    <a href="/..." class="cta-button">Button 2</a>
</div>
```

---

## 7. Form Components

### 7.1 Form Structure

```html
<form id="consultation-form" action="https://formspree.io/f/YOUR_ID" method="POST">
    <!-- Honeypot -->
    <input type="text" name="_honeypot" class="honeypot" tabindex="-1" autocomplete="off">
    
    <div class="form-group">
        <label for="name">Full Name <span class="required">*</span></label>
        <input type="text" id="name" name="name" required>
    </div>
    
    <div class="form-group">
        <label for="email">Email <span class="required">*</span></label>
        <input type="email" id="email" name="email" required>
    </div>
    
    <div class="form-row">
        <div class="form-group">...</div>
        <div class="form-group">...</div>
    </div>
    
    <button type="submit" class="submit-button">Submit</button>
</form>
```

### 7.2 Form Group

```html
<div class="form-group">
    <label for="field-id">Label Text</label>
    <input type="text" id="field-id" name="field-name">
</div>
```

### 7.3 Form Row (Two Columns)

```html
<div class="form-row">
    <div class="form-group">First Name</div>
    <div class="form-group">Last Name</div>
</div>
```

### 7.4 Select Field

```html
<div class="form-group">
    <label for="select-id">Select Label</label>
    <select id="select-id" name="select-name">
        <option value="">Choose...</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
    </select>
</div>
```

### 7.5 Textarea

```html
<div class="form-group">
    <label for="message">Message</label>
    <textarea id="message" name="message" rows="5"></textarea>
</div>
```

### 7.6 File Upload

```html
<div class="form-group">
    <label for="resume">Resume</label>
    <div class="file-upload-wrapper">
        <input type="file" id="resume" name="resume" accept=".pdf,.doc,.docx">
        <label for="resume" class="file-upload-label">
            <span class="file-upload-text">Choose file...</span>
            <span class="file-upload-button">Browse</span>
        </label>
    </div>
</div>
```

### 7.7 Form Messages

```html
<div class="form-message success">
    Your message was sent successfully!
</div>

<div class="form-message error">
    Please fill in all required fields.
</div>
```

---

## 8. Modal Components

### 8.1 Modal Structure

```html
<div id="consultation-modal" class="modal">
    <div class="modal-content modal-content--form">
        <button class="modal-close" aria-label="Close modal">×</button>
        <h2 class="apply-modal-title">Book a Consultation</h2>
        <p class="apply-modal-subtitle">Fill out the form below</p>
        <div class="google-form-embed">
            <iframe src="..."></iframe>
        </div>
    </div>
</div>
```

### 8.2 Modal Trigger

```html
<a href="#" data-open-modal="consultation">Book Consultation</a>
<button data-open-modal="consultation">Book Consultation</button>
```

### 8.3 Modal JavaScript

```javascript
// Open modal
document.querySelector('[data-open-modal="consultation"]').click();

// Close modal
document.querySelector('.modal-close').click();
```

---

## 9. Section Components

### 9.1 Premium Section (Dark)

```html
<section class="premium-section" aria-labelledby="section-heading">
    <div class="container">
        <p class="section-label">Label</p>
        <h2 id="section-heading" class="section-title">Section Title</h2>
        <p class="section-subtitle">Section subtitle...</p>
        
        <!-- Content: Cards, Lists, etc -->
        
    </div>
</section>
```

### 9.2 Premium Section Alt (Royal)

```html
<section class="premium-section--alt" aria-labelledby="section-heading">
    ...
</section>
```

### 9.3 Light Section

```html
<section class="section--soft" aria-labelledby="section-heading">
    ...
</section>
```

### 9.4 Quote Section

```html
<section class="quote-section" aria-labelledby="quote-heading">
    <div class="container">
        <p class="section-label">Quote</p>
        <blockquote class="quote">
            <p>Quote text goes here...</p>
            <cite>— Author Name, Title</cite>
        </blockquote>
    </div>
</section>
```

### 9.5 Conversion Section

```html
<section class="conversion-section premium-cta">
    <div class="container">
        <h2 class="section-title">Ready to Get Started?</h2>
        <p class="section-subtitle">Contact us to discuss...</p>
        <div class="cta-wrap">
            <a href="#" class="cta-button">Primary CTA</a>
            <a href="#" class="cta-button cta-button--outline-small">Secondary CTA</a>
        </div>
    </div>
</section>
```

---

## 10. Utility Components

### 10.1 Back to Top

```html
<a href="#main-content" class="back-to-top" aria-label="Back to top">
    <span class="back-to-top-icon" aria-hidden="true"></span>
</a>
```

### 10.2 Skip Link

```html
<a href="#main-content" class="skip-link">Skip to main content</a>
```

### 10.3 Container

```html
<div class="container">
    <!-- Content -->
</div>
```

### 10.4 Visually Hidden

```html
<span class="visually-hidden">Hidden text for screen readers</span>
```

### 10.5 Section Reveal

```html
<section class="premium-section reveal">
    ...
</section>
```

### 10.6 CTA Wrap

```html
<div class="cta-wrap">
    <a href="#" class="cta-button">Primary</a>
    <a href="#" class="cta-button cta-button--outline-small">Secondary</a>
</div>
```

---

## Component State Reference

### Button States

| State | Visual Change |
|-------|---------------|
| Default | Gradient blue background |
| Hover | Lift up 3px, enhanced shadow |
| Active | Slight press down |
| Focus | Outline ring |
| Disabled | 60% opacity |

### Card States

| State | Visual Change |
|-------|---------------|
| Default | Glass background |
| Hover | Lift up 4-5px, enhanced shadow |

### Input States

| State | Visual Change |
|-------|---------------|
| Default | Gray border |
| Hover | Red border tint |
| Focus | Gold border, glow, lift |
| Error | Red border, red glow |
| Disabled | Gray background |

### Modal States

| State | Visual Change |
|-------|---------------|
| Closed | `display: none` |
| Open | `display: block`, backdrop blur |

---

## Responsive Behavior

| Component | Desktop | Tablet | Mobile |
|-----------|---------|--------|--------|
| Navbar | Full menu | Condensed | Hamburger |
| Mega Menu | 420px dropdown | 90vw inline | Full width |
| Grids | Multi-column | 2 columns | Single column |
| Hero | Centered text | Centered | Left align |
| Cards | Horizontal | Horizontal | Stacked |

---

## Common Patterns

### Two Column Layout

```html
<div class="home-audience-cols">
    <div class="home-audience-col">
        <!-- Column 1 -->
    </div>
    <div class="home-audience-col">
        <!-- Column 2 -->
    </div>
</div>
```

### Card Grid

```html
<div class="services-grid">
    <div class="services-block">Card 1</div>
    <div class="services-block">Card 2</div>
    <div class="services-block">Card 3</div>
</div>
```

### Content with CTA

```html
<div class="content-wrapper">
    <p class="section-subtitle">Description...</p>
    <ul class="why-list">
        <li>Feature 1</li>
        <li>Feature 2</li>
    </ul>
    <p class="center-muted">Additional note...</p>
    <p style="text-align: center;">
        <a href="/..." class="cta-button">CTA Text</a>
    </p>
</div>
```
