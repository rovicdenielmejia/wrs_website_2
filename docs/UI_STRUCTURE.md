# WRS UI Structure & Components Breakdown

## Component Hierarchy

```
┌─────────────────────────────────────────────────────────┐
│ NAVIGATION                                              │
├─────────────────────────────────────────────────────────┤
│ ┌─────────────────────────────────────────────────────┐│
│ │ NAVBAR (Fixed)                                       ││
│ │ ├─ Logo + Brand Title                                ││
│ │ ├─ Nav Menu (Desktop)                                ││
│ │ │   ├─ Home                                          ││
│ │ │   ├─ Why Us                                        ││
│ │ │   ├─ Solutions (Mega Menu)                          ││
│ │ │   ├─ About (Dropdown)                              ││
│ │ │   └─ Jobs                                          ││
│ │ └─ Hamburger Toggle (Mobile)                         ││
│ └─────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│ HERO SECTION                                            │
├─────────────────────────────────────────────────────────┤
│ ┌─────────────────────────────────────────────────────┐│
│ │ HERO (Dark Navy Background)                          ││
│ │ ├─ Badge (Gold border, uppercase)                   ││
│ │ ├─ Title (Gold, Extra Bold, Large)                  ││
│ │ ├─ Subtitle (Soft white, Regular)                    ││
│ │ └─ CTA Buttons (Blue gradient grid)                 ││
│ └─────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│ CONTENT SECTIONS                                        │
├─────────────────────────────────────────────────────────┤
│                                                         │
│ SECTION (Navy Background)                               │
│ ├─ Section Label (Gold, uppercase, small)             │
│ ├─ Section Title (Gold, Extra Bold)                   │
│ ├─ Section Subtitle (Soft, centered)                   │
│ └─ Content (Cards, Lists, Text)                        │
│                                                         │
│ ─ ─ ─ ─ ─ ─ SECTION DIVIDER ─ ─ ─ ─ ─ ─               │
│                                                         │
│ SECTION (Royal Background)                              │
│ └─ ... same structure                                  │
│                                                         │
│ ─ ─ ─ ─ ─ ─ SECTION DIVIDER ─ ─ ─ ─ ─ ─               │
│                                                         │
│ SECTION (Light Background)                              │
│ └─ Light text on soft background                      │
│                                                         │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│ CARDS                                                  │
├─────────────────────────────────────────────────────────┤
│                                                         │
│ GLASS CARD                                             │
│ ┌─────────────────────────────────────────────────────┐│
│ │ Header (Icon or Image)                              ││
│ │ Title (Gold, Bold)                                  ││
│ │ Description (Soft white)                            ││
│ │ Link/CTA (Accent color)                             ││
│ └─────────────────────────────────────────────────────┘│
│                                                         │
│ PORTFOLIO CARD                                         │
│ ┌─────────────────────────────────────────────────────┐│
│ │ [Icon]                                              ││
│ │ Title (Gold)                                        ││
│ │ Description text...                                  ││
│ │ → Link                                              ││
│ └─────────────────────────────────────────────────────┘│
│                                                         │
│ SOLUTIONS CARD                                         │
│ ┌─────────────────────────────────────────────────────┐│
│ │ ═══ (Colored top border)                            ││
│ │ Icon                                                ││
│ │ Title                                               ││
│ │ Description                                         ││
│ │ • List item                                         ││
│ │ • List item                                         ││
│ │ [CTA Button]                                        ││
│ └─────────────────────────────────────────────────────┘│
│                                                         │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│ FOOTER                                                 │
├─────────────────────────────────────────────────────────┤
│ ┌─────────────────────────────────────────────────────┐│
│ │ © 2026 Workforce Recruitment & HR Solutions PH     ││
│ │                                                     ││
│ │ Contact Us                                          ││
│ │ 📧 wrs.recruitment.hr@gmail.com                    ││
│ │ 📧 wrs.workforce.hr@gmail.com                      ││
│ │ 📞 +63 975 563 6276                                ││
│ └─────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────┘
```

---

## Component Specifications

### NAVBAR

| Property | Value |
|----------|-------|
| Position | Fixed top |
| Background | `rgba(19, 34, 55, 0.92)` |
| Backdrop Filter | `blur(24px)` |
| Border Bottom | `1px solid rgba(255,255,255,0.08)` |
| Shadow | `0 4px 24px rgba(0,0,0,0.2)` |
| Z-Index | 1000 |
| Height | ~72px |
| Padding | 1rem 20px |

### NAV MENU

| Property | Value |
|----------|-------|
| Gap | 1.5rem |
| Font Weight | 500 |
| Link Color | `#F1F5F9` |
| Link Hover | `#C19D43` (gold) |
| Hover Underline | 2px solid gold |

### MEGA MENU

| Property | Value |
|----------|-------|
| Width | 420px |
| Background | `#1F376A` (royal) |
| Border | `1px solid rgba(255,255,255,0.08)` |
| Border Radius | 12px |
| Shadow | `0 20px 50px rgba(0,0,0,0.5)` |
| Columns | 2 ( Employers | Talent ) |

---

### HERO SECTION

| Property | Value |
|----------|-------|
| Margin Top | 72px (below navbar) |
| Padding | 5.5rem 0 6rem |
| Background | `#132237` (navy) |
| Text Align | Center |
| Max Width (subtitle) | 680px |

#### Hero Badge

| Property | Value |
|----------|-------|
| Font Size | 0.7rem |
| Font Weight | 700 |
| Letter Spacing | 0.22em |
| Text Transform | uppercase |
| Color | `#C19D43` (gold) |
| Border | `1px solid rgba(193,157,67,0.4)` |
| Border Radius | 100px |
| Padding | 0.5rem 1.5rem |
| Background | `rgba(193,157,67,0.08)` |

#### Hero Title

| Property | Value |
|----------|-------|
| Font | Plus Jakarta Sans |
| Weight | 800 (ExtraBold) |
| Size | `clamp(2.25rem, 5.5vw, 3.5rem)` |
| Line Height | 1.12 |
| Letter Spacing | -0.035em |
| Color | `#C19D43` (gold) |
| Margin Bottom | 1.25rem |

#### Hero Subtitle

| Property | Value |
|----------|-------|
| Font Size | 1.2rem |
| Line Height | 1.75 |
| Color | `#94A3B8` (soft) |
| Max Width | 680px |
| Margin Bottom | 1.75rem |

---

### SECTION STRUCTURE

```
┌─────────────────────────────────────────────────────┐
│ .section-label (optional)                           │
│   "OVERLINE TEXT"                                   │
│                                                     │
│ .section-title                                      │
│   Section Heading                                   │
│                                                     │
│ .section-subtitle (optional)                        │
│   Descriptive subtitle text...                      │
│                                                     │
│ ─────────── CONTENT ───────────                     │
│                                                     │
└─────────────────────────────────────────────────────┘
```

#### Section Label

| Property | Value |
|----------|-------|
| Font Size | 0.7rem |
| Font Weight | 700 |
| Text Transform | uppercase |
| Letter Spacing | 0.28em |
| Color | `#C19D43` (gold) |
| Text Align | center |
| Margin Bottom | 1rem |
| Position | relative with underline |

#### Section Title

| Property | Value |
|----------|-------|
| Font | Plus Jakarta Sans |
| Weight | 800 (ExtraBold) |
| Size | `clamp(1.9rem, 4vw, 2.6rem)` |
| Line Height | 1.2 |
| Letter Spacing | -0.03em |
| Color | `#C19D43` (gold) |
| Text Align | center |
| Margin Bottom | 1.25rem |

#### Section Subtitle

| Property | Value |
|----------|-------|
| Font Size | 1.1rem |
| Line Height | 1.8 |
| Color | `#94A3B8` (soft) |
| Max Width | 640px |
| Margin Left/Right | auto |
| Margin Bottom | 3rem |

---

### CARD COMPONENTS

#### Glass Card (Base)

```css
.card {
    background: rgba(31, 55, 106, 0.9);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 20px;
    padding: 2rem;
    box-shadow: 0 4px 24px rgba(0,0,0,0.12);
    transition: transform 0.35s, box-shadow 0.35s;
}
```

#### Portfolio Card

| Property | Value |
|----------|-------|
| Border Top | 3px solid `#C19D43` (gold) |
| Icon Container | 48x48px, rounded 12px |
| Icon Background | `rgba(30,115,216,0.15)` |
| Title Color | `#C19D43` |
| Title Size | 1.2rem, weight 700 |
| Description Color | `#94A3B8` |
| Link Color | `#C19D43` (accent-red) |

#### Solutions Card

| Property | Value |
|----------|-------|
| Border Top | 4px solid (varies by type) |
| Employers | `#3A73B3` (blue) |
| Enterprise | `#C19D43` (gold) |
| Global | `#3A73B3` (blue) |
| Talent | `#3A73B3` (orange variant) |
| Title Color | `#C19D43` |
| List Style | Bullet points |

#### Conversion Card

| Property | Value |
|----------|-------|
| Text Align | center |
| Icon/Title Color | `#C19D43` |
| Description Color | `#94A3B8` |
| CTA Link | Blue accent |

---

### LIST COMPONENTS

#### Why List

| Property | Value |
|----------|-------|
| Background | `rgba(31,55,106,0.9)` (glass) |
| Border | `1px solid rgba(255,255,255,0.08)` |
| Border Left | 4px solid `#C19D43` |
| Border Radius | 16px |
| Padding | 1.1rem 1.25rem 1.1rem 3.25rem |
| Bullet | 8px gold circle |
| Hover | translateX(6px) |

#### Services List

| Property | Value |
|----------|-------|
| Background | `#1F376A` (royal) |
| Border | `1px solid rgba(255,255,255,0.08)` |
| Border Left | 4px solid `#C19D43` |
| Bullet | 10px gold circle |
| Hover | translateX(4px) |

---

### BUTTON COMPONENTS

#### Primary CTA Button

| Property | Value |
|----------|-------|
| Display | inline-block |
| Padding | 1rem 2.5rem |
| Background | `linear-gradient(135deg, #3A73B3, #2d5d8f)` |
| Color | white |
| Font Weight | 600 |
| Font Size | 0.95rem |
| Letter Spacing | 0.04em |
| Border Radius | 10px |
| Box Shadow | `0 4px 20px rgba(58,115,179,0.35)` |
| Hover Transform | translateY(-3px) |
| Hover Shadow | `0 12px 32px rgba(58,115,179,0.4)` |

#### Outline Button

| Property | Value |
|----------|-------|
| Background | transparent |
| Border | 2px solid `#3A73B3` |
| Color | `#3A73B3` |
| Hover Background | `rgba(58,115,179,0.15)` |
| Hover Color | white |

---

### FORM COMPONENTS

#### Form Group

| Property | Value |
|----------|-------|
| Margin Bottom | 1.5rem |

#### Form Label

| Property | Value |
|----------|-------|
| Display | flex |
| Align Items | center |
| Gap | 0.5rem |
| Font Weight | 600 |
| Font Size | 1.05rem |
| Color | `#1E293B` |
| Margin Bottom | 0.75rem |

#### Form Input

| Property | Value |
|----------|-------|
| Width | 100% |
| Padding | 0.9rem 1.2rem |
| Border | 2px solid `#64748B` |
| Border Radius | 10px |
| Font Size | 1rem |
| Background | white |
| Focus Border | `#C19D43` |
| Focus Shadow | `0 0 0 4px rgba(193,157,67,0.15)` |
| Focus Transform | translateY(-2px) |

#### Submit Button

| Property | Value |
|----------|-------|
| Width | 100% |
| Padding | 1rem 2rem |
| Background | `#C19D43` |
| Color | white |
| Font Size | 1.1rem |
| Font Weight | 600 |
| Border Radius | 8px |
| Hover Transform | translateY(-2px) |
| Hover Shadow | `0 4px 15px rgba(0,0,0,0.45)` |

---

### MODAL COMPONENT

| Property | Value |
|----------|-------|
| Z-Index | 2000 |
| Background | `rgba(0,0,0,0.7)` |
| Backdrop Filter | `blur(5px)` |
| Content Max Width | 800px |
| Content Width | 90% |
| Content Padding | 3rem |
| Content Border Radius | 12px |
| Content Background | `#1F376A` |
| Close Button | Top right, 2rem, bold |

---

### SECTION VARIANTS

#### Premium Section (Default)

```css
.premium-section {
    padding: 5rem 0;
    background: #132237;
    color: #F1F5F9;
}
```

#### Premium Section Alt

```css
.premium-section--alt {
    padding: 5rem 0;
    background: #1F376A;
}
```

#### Light Section

```css
.section--soft {
    background: #EFF0F1;
    color: #1E293B;
    border-top: 1px solid rgba(0,0,0,0.06);
    border-bottom: 1px solid rgba(0,0,0,0.06);
}
```

---

### SPACING SYSTEM

| Token | Value | Usage |
|-------|-------|-------|
| `--space-section` | 5rem | Standard section padding |
| `--space-section-lg` | 6rem | Large section padding |
| `--radius-sm` | 10px | Buttons, small elements |
| `--radius-md` | 16px | Medium cards |
| `--radius-lg` | 20px | Large cards |
| `--radius-xl` | 24px | Extra large elements |

---

### GRID SYSTEMS

#### Two Column (Audience Sections)

```css
.home-audience-cols {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
}
```

#### Card Grid (Auto-fit)

```css
.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.25rem;
}
```

#### Solutions Grid

```css
.solutions-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 1.5rem;
}
```

---

## Responsive Behavior

### Desktop (>1024px)
- Full mega menu
- Multi-column grids
- Side-by-side layouts

### Tablet (768px-1024px)
- Condensed mega menu
- Adjusted grid columns
- Stacked audience sections

### Mobile (<768px)
- Hamburger navigation
- Single column layouts
- Full-width cards
- Compact spacing

---

## Animation Specifications

| Animation | Duration | Easing | Trigger |
|-----------|----------|--------|---------|
| Card Hover | 350ms | cubic-bezier(0.25,0.46,0.45,0.94) | hover |
| Button Hover | 300ms | cubic-bezier(0.25,0.46,0.45,0.94) | hover |
| Section Reveal | 700ms | ease-out | scroll into view |
| Divider Float | 3s | ease-in-out | infinite |
| Card Shine | 500ms | ease | hover |
| Modal Fade | 200ms | ease | open/close |
