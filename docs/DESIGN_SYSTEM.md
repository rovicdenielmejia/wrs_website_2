# WRS Design System

## Brand Identity

### Brand Name
**Workforce Recruitment & HR Solutions PH** (WRS)

### Tagline
*"Building Stronger Workforces. Connecting the Right People to the Right Opportunities."*

### Brand Personality
- Professional & Trustworthy
- Strategic & Solutions-Oriented
- Philippine Market Focus
- Premium but Accessible

### Brand Values
1. Quality over volume
2. Process over guesswork
3. Alignment over urgency
4. Long-term stability over quick wins

---

## Color Palette

### Primary Palette

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Navy | `#132237` | 19, 34, 55 | Hero, Footer, Primary BG |
| Navy Dark | `#0e1a2a` | 14, 26, 42 | Darker variant |
| Royal | `#1F376A` | 31, 55, 106 | Sections, Cards |
| Accent Blue | `#3A73B3` | 58, 115, 179 | Buttons, Links |
| Accent Blue Hover | `#2d5d8f` | 45, 93, 143 | Hover state |
| Gold | `#C19D43` | 193, 157, 67 | Headings, Accents |
| Light BG | `#EFF0F1` | 239, 240, 241 | Light sections |

### Text Colors

| Name | Hex | Usage |
|------|-----|-------|
| Text on Dark | `#F1F5F9` | Dark backgrounds |
| Text Soft | `#94A3B8` | Secondary text |
| Text on Light | `#1E293B` | Light backgrounds |
| Text Muted | `#64748B` | Muted/disabled |

### Utility Colors

| Name | Hex | Usage |
|------|-----|-------|
| White | `#F1F5F9` | On dark |
| Success | `#D4EDDA` | Success messages |
| Success Text | `#155724` | Success text |
| Error | `#F8D7DA` | Error messages |
| Error Text | `#721C24` | Error text |

---

## Typography System

### Font Families

```css
--font-heading: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
--font-body: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
--font-accent: 'Source Serif 4', Georgia, serif;
```

### Type Scale

| Element | Size | Weight | Line Height | Letter Spacing | Font |
|---------|------|--------|-------------|----------------|------|
| Hero Title | 3.5rem (clamp) | 800 | 1.12 | -0.035em | Plus Jakarta Sans |
| Section Title | 2.6rem (clamp) | 800 | 1.2 | -0.03em | Plus Jakarta Sans |
| Card Title | 1.2rem | 700 | - | -0.02em | Plus Jakarta Sans |
| Body | 1rem | 400 | 1.7 | 0.01em | Plus Jakarta Sans |
| Hero Subtitle | 1.2rem | 400 | 1.75 | - | Plus Jakarta Sans |
| Section Subtitle | 1.1rem | 400 | 1.8 | - | Plus Jakarta Sans |
| Quote | 1.45rem | 400 | 1.9 | - | Source Serif 4 (italic) |
| Section Label | 0.7rem | 700 | - | 0.28em | Plus Jakarta Sans |
| Hero Badge | 0.7rem | 700 | - | 0.22em | Plus Jakarta Sans |

### Clamp Functions

```css
.hero-title { font-size: clamp(2.25rem, 5.5vw, 3.5rem); }
.section-title { font-size: clamp(1.9rem, 4vw, 2.6rem); }
```

---

## Spacing System

### Base Unit: 8px

| Token | Value | Pixels | Usage |
|-------|-------|--------|-------|
| 0.25 | 0.25rem | 4px | Tight spacing |
| 0.5 | 0.5rem | 8px | Small gaps |
| 0.75 | 0.75rem | 12px | Compact |
| 1 | 1rem | 16px | Base unit |
| 1.25 | 1.25rem | 20px | Comfortable |
| 1.5 | 1.5rem | 24px | Medium |
| 2 | 2rem | 32px | Section item |
| 2.5 | 2.5rem | 40px | Large gaps |
| 3 | 3rem | 48px | Section padding |
| 4 | 4rem | 64px | Large section |
| 5 | 5rem | 80px | Standard section |
| 6 | 6rem | 96px | Large section |

### Section Spacing

```css
--space-section: 5rem;    /* 80px */
--space-section-lg: 6rem; /* 96px */
```

---

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| --radius-sm | 10px | Buttons, small elements |
| --radius-md | 16px | Medium cards |
| --radius-lg | 20px | Large cards |
| --radius-xl | 24px | Extra large elements |
| --radius-full | 100px | Badges, pills |

---

## Shadows

### Elevation Levels

```css
/* Level 1 - Subtle */
--shadow: rgba(0, 0, 0, 0.35);

/* Level 2 - Card */
--shadow-card: 0 4px 24px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(255, 255, 255, 0.06);

/* Level 3 - Card Hover */
--shadow-card-hover: 0 12px 40px rgba(0, 0, 0, 0.18), 0 0 0 1px rgba(255, 255, 255, 0.08);

/* Level 4 - Navbar */
--shadow-nav: 0 4px 24px rgba(0, 0, 0, 0.2);

/* Level 5 - Hover */
--shadow-hover: rgba(0, 0, 0, 0.45);

/* Level 6 - Neon Glow */
--shadow-neon: 0 0 20px rgba(0, 0, 0, 0.12);

/* Level 7 - Blue Glow */
--shadow-glow: 0 0 40px rgba(58, 115, 179, 0.12);
```

### Usage Guidelines

| Shadow | Use Case |
|--------|----------|
| --shadow-card | Default card state |
| --shadow-card-hover | Card hover state |
| --shadow-nav | Fixed navigation |
| --shadow-hover | Button/input hover |
| --shadow-glow | Accent glow effects |

---

## Effects

### Glass Morphism

```css
.glass {
    background: rgba(31, 55, 106, 0.9);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.08);
}
```

### Gradients

```css
/* Button Gradient */
background: linear-gradient(135deg, #3A73B3 0%, #2d5d8f 100%);

/* Hero Radial */
background: radial-gradient(ellipse 85% 55% at 50% -15%, rgba(193, 157, 67, 0.06), transparent 50%);

/* Divider */
background: linear-gradient(90deg, transparent, #C19D43, transparent);

/* Card Shine */
background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
```

---

## Transitions & Easing

### Timing Functions

```css
--ease-out: cubic-bezier(0.25, 0.46, 0.45, 0.94);
--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
```

### Transition Durations

| Duration | Value | Use Case |
|----------|-------|----------|
| Instant | 0ms | No transition |
| Fast | 150ms | Small elements |
| Normal | 200ms | Default |
| Medium | 300ms | Standard |
| Slow | 350ms | Cards |
| Reveal | 700ms | Section animations |

---

## Layout System

### Container

```css
.container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 2rem;
    width: 100%;
}
```

### Grid Columns

| Grid | Columns | Gap | Min Card Width |
|------|---------|-----|----------------|
| Services | auto-fit | 1.25rem | 280px |
| Solutions | auto-fit | 1.5rem | 260px |
| Portfolio | auto-fit | 1.5rem | 280px |
| Conversion | auto-fit | 1.5rem | 280px |
| Audience | 1fr 1fr | 3rem | - |

---

## Breakpoints

### Standard Breakpoints

```css
/* Mobile First Approach */
/* sm: 640px */
/* md: 768px */
/* lg: 1024px */
/* xl: 1200px */
/* 2xl: 1400px */

/* Desktop First Approach (Used in project) */
@media (max-width: 1200px) { /* Large desktop */ }
@media (max-width: 1100px) { /* Desktop */ }
@media (max-width: 1024px) { /* Tablet landscape */ }
@media (max-width: 900px) { /* Tablet */ }
@media (max-width: 768px) { /* Tablet portrait */ }
@media (max-width: 640px) { /* Large mobile */ }
@media (max-width: 480px) { /* Mobile */ }
```

---

## Animation Keyframes

### Float Animation

```css
@keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-8px); }
}
/* Duration: 3s | Easing: ease-in-out | Loop: infinite */
```

### Spin Animation

```css
@keyframes spin {
    to { transform: rotate(360deg); }
}
/* Duration: 0.8s | Easing: linear | Loop: infinite */
```

### Reveal Animation

```css
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
/* Duration: 700ms | Easing: ease-out */
```

---

## Icon Usage

### Icon Types
- Emoji icons (💼 📧 📞 👔 👩‍💼)
- SVG icons for UI elements
- Custom icons in Assets folder

### Icon Sizes

| Size | Value | Use Case |
|------|-------|----------|
| Small | 16px | Inline text |
| Medium | 24px | UI elements |
| Large | 32px | Feature icons |
| XLarge | 48px | Card icons |

---

## Accessibility

### Color Contrast
- All text meets WCAG AA standards
- Gold (#C19D43) on Navy (#132237) = 7.2:1 ratio ✓
- White (#F1F5F9) on Navy (#132237) = 14.5:1 ratio ✓
- Soft (#94A3B8) on Royal (#1F376A) = 4.8:1 ratio ✓

### Focus States

```css
/* Focus Visible */
.nav-menu a:focus-visible {
    outline: 2px solid var(--primary-red);
    outline-offset: 4px;
    border-radius: 4px;
}

/* Skip Link */
.skip-link:focus {
    top: 0;
    outline: 3px solid var(--accent-orange);
    outline-offset: 2px;
}
```

---

## Component States

### Button States

| State | Background | Transform | Shadow |
|-------|------------|-----------|--------|
| Default | gradient blue | none | medium |
| Hover | gradient blue | translateY(-3px) | large glow |
| Active | darker blue | translateY(-1px) | medium |
| Disabled | 60% opacity | none | none |

### Card States

| State | Transform | Shadow | Border |
|-------|-----------|--------|--------|
| Default | none | card | glass border |
| Hover | translateY(-4px) | card-hover | accent border |

### Input States

| State | Border | Shadow | Transform |
|-------|--------|--------|-----------|
| Default | gray | none | none |
| Hover | accent | subtle | none |
| Focus | gold | glow | translateY(-2px) |
| Error | red | red glow | none |
| Disabled | gray | none | none |

---

## Z-Index Scale

| Layer | Value | Component |
|-------|-------|-----------|
| Base | 0 | Content |
| Dropdown | 100 | Dropdown menus |
| Sticky | 200 | Sticky elements |
| Fixed | 1000 | Navigation |
| Modal Backdrop | 1999 | Modal overlay |
| Modal | 2000 | Modal content |
| Toast | 3000 | Toast notifications |
| Tooltip | 4000 | Tooltips |

---

## File Organization

### CSS Structure

```
css/
├── styles.css          # Core styles
│   ├── Reset           # Lines 1-80
│   ├── Variables       # Lines 8-76
│   ├── Base            # Lines 78-150
│   ├── Navigation      # Lines 156-450
│   ├── Hero            # Lines 468-600
│   ├── Buttons         # Lines 637-700
│   ├── Sections        # Lines 701-1100
│   ├── Cards           # Lines 1101-1400
│   ├── Forms           # Lines 1600-2300
│   ├── Modals          # Lines 2239-2400
│   ├── Footer          # Lines 2400-2600
│   └── Responsive      # Lines 2800-3507
│
├── styles-portal.css   # Portal-specific styles
│   ├── Hero Variants
│   ├── Conversion Cards
│   ├── Auth Pages
│   └── CTA Styles
│
└── styles-hr.css       # HR page overrides
```

---

## Development Guidelines

### CSS Rules
1. Use CSS variables for all values
2. Follow BEM naming for custom components
3. Use semantic class names
4. Mobile-first responsive approach
5. Use `clamp()` for fluid typography
6. Prefer `rem` over `px` for sizing

### Class Naming Convention

```
Component:     .card, .navbar, .hero
Modifier:      .card--featured, .hero--dark
Element:       .card__title, .navbar__logo
State:         .card:hover, .btn:disabled
Utility:       .text-center, .mt-1, .d-flex
```

### Color Usage Rules
1. Use semantic tokens (--color-primary, --text-primary)
2. Never use raw hex values in components
3. Gold (#C19D43) is for accents and highlights only
4. Navy (#132237) is for dark backgrounds
5. Blue (#3A73B3) is for interactive elements

### Spacing Rules
1. Use spacing tokens for consistency
2. Section padding: 5rem (80px)
3. Card padding: 2rem (32px)
4. Element gap: 1rem (16px)
5. Form field gap: 1.5rem (24px)
