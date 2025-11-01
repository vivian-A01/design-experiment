# ABConvert Design System

**Version:** 1.0.0
**Last Updated:** October 31, 2025
**Brand:** ABConvert - Shopify A/B Testing Platform

---

## Overview

ABConvert's design system reflects a clean, professional, and tech-driven brand identity. The system emphasizes data visualization, clarity, and conversion-focused design patterns suitable for both marketing pages and SaaS dashboard interfaces.

---

## 1. Color System

### Primary Colors
The primary palette uses electric blue as the brand anchor, with lime green as a high-contrast accent for success states and CTAs.

```css
/* Primary Blue */
--color-primary-50: #E6F3FF;
--color-primary-100: #CCE7FF;
--color-primary-200: #99CFFF;
--color-primary-300: #66B7FF;
--color-primary-400: #339FFF;
--color-primary-500: #0087FF;  /* Brand Blue */
--color-primary-600: #006ECC;
--color-primary-700: #005299;
--color-primary-800: #003766;
--color-primary-900: #001B33;

/* Accent Lime/Green */
--color-accent-50: #F7FFCC;
--color-accent-100: #EFFF99;
--color-accent-200: #E7FF66;
--color-accent-300: #DFFF33;
--color-accent-400: #D7FF00;  /* Neon Lime */
--color-accent-500: #ACCC00;
--color-accent-600: #819900;
--color-accent-700: #566600;
--color-accent-800: #2B3300;
--color-accent-900: #001900;
```

### Secondary Colors
Supporting colors for various UI elements and data visualization.

```css
/* Pink/Magenta - Used for icons and highlights */
--color-secondary-50: #FFE6F5;
--color-secondary-100: #FFCCEB;
--color-secondary-200: #FF99D7;
--color-secondary-300: #FF66C3;
--color-secondary-400: #FF33AF;
--color-secondary-500: #FF009B;  /* Hot Pink */
--color-secondary-600: #CC007C;
--color-secondary-700: #99005D;
--color-secondary-800: #66003E;
--color-secondary-900: #33001F;

/* Coral/Red - For alerts and test B variants */
--color-coral-50: #FFE8E6;
--color-coral-100: #FFD1CC;
--color-coral-200: #FFA399;
--color-coral-300: #FF7566;
--color-coral-400: #FF4733;
--color-coral-500: #FF1900;  /* Coral Red */
--color-coral-600: #CC1400;
--color-coral-700: #990F00;
--color-coral-800: #660A00;
--color-coral-900: #330500;
```

### Neutral Colors
Foundation for text, backgrounds, and UI structure.

```css
/* Neutrals - Dark theme base */
--color-neutral-0: #FFFFFF;
--color-neutral-50: #F8F9FA;
--color-neutral-100: #F1F3F5;
--color-neutral-200: #E9ECEF;
--color-neutral-300: #DEE2E6;
--color-neutral-400: #CED4DA;
--color-neutral-500: #ADB5BD;
--color-neutral-600: #868E96;
--color-neutral-700: #495057;
--color-neutral-800: #343A40;
--color-neutral-900: #212529;
--color-neutral-950: #0D0F11;  /* Near Black */

/* Dark Theme Surfaces */
--color-surface-primary: #0A0A0A;    /* Main background */
--color-surface-secondary: #1A1A1A;  /* Elevated cards */
--color-surface-tertiary: #2A2A2A;   /* Modals, dropdowns */
```

### Semantic Colors
Purpose-driven color tokens for common UI patterns.

```css
/* Success */
--color-success-light: #E7FF66;
--color-success-base: #D7FF00;
--color-success-dark: #819900;

/* Error */
--color-error-light: #FF7566;
--color-error-base: #FF1900;
--color-error-dark: #990F00;

/* Warning */
--color-warning-light: #FFD700;
--color-warning-base: #FFA500;
--color-warning-dark: #FF8C00;

/* Info */
--color-info-light: #66B7FF;
--color-info-base: #0087FF;
--color-info-dark: #005299;
```

### Text Colors

```css
--color-text-primary: #FFFFFF;        /* Main text on dark */
--color-text-secondary: #ADB5BD;      /* Subtle text */
--color-text-tertiary: #868E96;       /* Disabled text */
--color-text-inverse: #0D0F11;        /* Text on light backgrounds */
--color-text-link: #0087FF;
--color-text-link-hover: #339FFF;
```

---

## 2. Typography

### Font Family

```css
--font-family-primary: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif;
--font-family-mono: "SF Mono", Monaco, "Cascadia Code", "Courier New", monospace;
```

### Type Scale

```css
/* Font Sizes */
--font-size-xs: 0.75rem;     /* 12px */
--font-size-sm: 0.875rem;    /* 14px */
--font-size-base: 1rem;      /* 16px */
--font-size-lg: 1.125rem;    /* 18px */
--font-size-xl: 1.25rem;     /* 20px */
--font-size-2xl: 1.5rem;     /* 24px */
--font-size-3xl: 1.875rem;   /* 30px */
--font-size-4xl: 2.25rem;    /* 36px */
--font-size-5xl: 3rem;       /* 48px */
--font-size-6xl: 3.75rem;    /* 60px */
--font-size-7xl: 4.5rem;     /* 72px */

/* Font Weights */
--font-weight-light: 300;
--font-weight-regular: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
--font-weight-extrabold: 800;

/* Line Heights */
--line-height-tight: 1.2;
--line-height-normal: 1.5;
--line-height-relaxed: 1.75;
```

### Heading Styles

```css
/* H1 - Hero Headlines */
.text-h1 {
  font-size: var(--font-size-6xl);     /* 60px */
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
  letter-spacing: -0.02em;
}

/* H2 - Section Titles */
.text-h2 {
  font-size: var(--font-size-5xl);     /* 48px */
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
  letter-spacing: -0.015em;
}

/* H3 - Subsection Titles */
.text-h3 {
  font-size: var(--font-size-4xl);     /* 36px */
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
  letter-spacing: -0.01em;
}

/* H4 - Card Titles */
.text-h4 {
  font-size: var(--font-size-2xl);     /* 24px */
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-normal);
}

/* H5 - Component Headers */
.text-h5 {
  font-size: var(--font-size-xl);      /* 20px */
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-normal);
}

/* H6 - Small Headers */
.text-h6 {
  font-size: var(--font-size-lg);      /* 18px */
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-normal);
}
```

### Body & UI Text

```css
/* Body Large */
.text-body-lg {
  font-size: var(--font-size-lg);      /* 18px */
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-relaxed);
}

/* Body Base */
.text-body {
  font-size: var(--font-size-base);    /* 16px */
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-normal);
}

/* Body Small */
.text-body-sm {
  font-size: var(--font-size-sm);      /* 14px */
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-normal);
}

/* Caption */
.text-caption {
  font-size: var(--font-size-xs);      /* 12px */
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-normal);
  color: var(--color-text-secondary);
}

/* Button Text */
.text-button {
  font-size: var(--font-size-base);    /* 16px */
  font-weight: var(--font-weight-medium);
  line-height: 1;
  letter-spacing: 0.01em;
}

/* Label */
.text-label {
  font-size: var(--font-size-sm);      /* 14px */
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-normal);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
```

---

## 3. Spacing System

### Base Spacing Scale

```css
--space-0: 0;
--space-1: 0.25rem;    /* 4px */
--space-2: 0.5rem;     /* 8px */
--space-3: 0.75rem;    /* 12px */
--space-4: 1rem;       /* 16px */
--space-5: 1.25rem;    /* 20px */
--space-6: 1.5rem;     /* 24px */
--space-8: 2rem;       /* 32px */
--space-10: 2.5rem;    /* 40px */
--space-12: 3rem;      /* 48px */
--space-16: 4rem;      /* 64px */
--space-20: 5rem;      /* 80px */
--space-24: 6rem;      /* 96px */
--space-32: 8rem;      /* 128px */
--space-40: 10rem;     /* 160px */
--space-48: 12rem;     /* 192px */
```

### Layout Spacing

```css
/* Component Padding */
--padding-xs: var(--space-2);      /* 8px */
--padding-sm: var(--space-3);      /* 12px */
--padding-md: var(--space-4);      /* 16px */
--padding-lg: var(--space-6);      /* 24px */
--padding-xl: var(--space-8);      /* 32px */
--padding-2xl: var(--space-12);    /* 48px */

/* Section Spacing */
--section-spacing-sm: var(--space-16);   /* 64px */
--section-spacing-md: var(--space-24);   /* 96px */
--section-spacing-lg: var(--space-32);   /* 128px */
--section-spacing-xl: var(--space-48);   /* 192px */
```

---

## 4. Border Radius

```css
--radius-none: 0;
--radius-sm: 0.25rem;    /* 4px */
--radius-base: 0.5rem;   /* 8px */
--radius-md: 0.75rem;    /* 12px */
--radius-lg: 1rem;       /* 16px */
--radius-xl: 1.5rem;     /* 24px */
--radius-2xl: 2rem;      /* 32px */
--radius-full: 9999px;   /* Circular */
```

### Component Radius Tokens

```css
--radius-button: var(--radius-base);       /* 8px */
--radius-input: var(--radius-base);        /* 8px */
--radius-card: var(--radius-lg);           /* 16px */
--radius-modal: var(--radius-xl);          /* 24px */
--radius-badge: var(--radius-full);        /* Pill shape */
```

---

## 5. Grid System

### Container & Breakpoints

```css
/* Breakpoints */
--breakpoint-sm: 640px;
--breakpoint-md: 768px;
--breakpoint-lg: 1024px;
--breakpoint-xl: 1280px;
--breakpoint-2xl: 1536px;

/* Container Max Widths */
--container-sm: 640px;
--container-md: 768px;
--container-lg: 1024px;
--container-xl: 1280px;
--container-2xl: 1400px;

/* Grid Columns */
--grid-columns: 12;
--grid-gap: var(--space-6);  /* 24px */
```

---

## 6. Shadows & Elevation

```css
/* Shadows */
--shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.3);
--shadow-sm: 0 2px 4px 0 rgba(0, 0, 0, 0.4);
--shadow-base: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
--shadow-md: 0 8px 16px 0 rgba(0, 0, 0, 0.5);
--shadow-lg: 0 16px 32px 0 rgba(0, 0, 0, 0.6);
--shadow-xl: 0 24px 48px 0 rgba(0, 0, 0, 0.7);

/* Glow Effects (for neon accents) */
--glow-accent: 0 0 20px rgba(215, 255, 0, 0.6);
--glow-primary: 0 0 20px rgba(0, 135, 255, 0.5);
```

---

## 7. Core Components

### Buttons

#### Primary Button
```css
.btn-primary {
  background: var(--color-accent-400);  /* Lime */
  color: var(--color-neutral-950);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
  padding: var(--space-3) var(--space-6);  /* 12px 24px */
  border-radius: var(--radius-button);
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-primary:hover {
  background: var(--color-accent-300);
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
}

.btn-primary:active {
  transform: translateY(0);
  box-shadow: var(--shadow-sm);
}

.btn-primary:disabled {
  background: var(--color-neutral-700);
  color: var(--color-neutral-500);
  cursor: not-allowed;
  opacity: 0.6;
}
```

#### Secondary Button
```css
.btn-secondary {
  background: transparent;
  color: var(--color-primary-500);
  border: 2px solid var(--color-primary-500);
  padding: var(--space-3) var(--space-6);
  border-radius: var(--radius-button);
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-secondary:hover {
  background: var(--color-primary-500);
  color: var(--color-neutral-0);
  box-shadow: var(--glow-primary);
}
```

#### Ghost Button
```css
.btn-ghost {
  background: transparent;
  color: var(--color-text-primary);
  border: none;
  padding: var(--space-3) var(--space-6);
  border-radius: var(--radius-button);
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-ghost:hover {
  background: var(--color-surface-secondary);
}
```

#### Button Sizes
```css
.btn-sm {
  padding: var(--space-2) var(--space-4);  /* 8px 16px */
  font-size: var(--font-size-sm);
}

.btn-lg {
  padding: var(--space-4) var(--space-8);  /* 16px 32px */
  font-size: var(--font-size-lg);
}
```

---

### Form Inputs

#### Text Input
```css
.input {
  background: var(--color-surface-tertiary);
  color: var(--color-text-primary);
  border: 1px solid var(--color-neutral-700);
  padding: var(--space-3) var(--space-4);  /* 12px 16px */
  border-radius: var(--radius-input);
  font-size: var(--font-size-base);
  transition: all 0.2s ease;
  width: 100%;
}

.input::placeholder {
  color: var(--color-text-tertiary);
}

.input:focus {
  outline: none;
  border-color: var(--color-primary-500);
  box-shadow: 0 0 0 3px rgba(0, 135, 255, 0.2);
}

.input:hover:not(:focus) {
  border-color: var(--color-neutral-600);
}

.input:disabled {
  background: var(--color-neutral-800);
  color: var(--color-text-tertiary);
  cursor: not-allowed;
}

.input.error {
  border-color: var(--color-error-base);
}

.input.success {
  border-color: var(--color-success-base);
}
```

#### Label
```css
.label {
  display: block;
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-primary);
  margin-bottom: var(--space-2);
}
```

---

### Cards

#### Base Card
```css
.card {
  background: var(--color-surface-secondary);
  border-radius: var(--radius-card);
  padding: var(--padding-xl);
  box-shadow: var(--shadow-sm);
  transition: all 0.3s ease;
}

.card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}

.card-header {
  margin-bottom: var(--space-4);
}

.card-title {
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}

.card-body {
  color: var(--color-text-secondary);
  line-height: var(--line-height-relaxed);
}
```

#### Pricing Card
```css
.card-pricing {
  background: var(--color-surface-secondary);
  border: 1px solid var(--color-neutral-800);
  border-radius: var(--radius-card);
  padding: var(--padding-2xl);
  text-align: left;
  position: relative;
}

.card-pricing.featured {
  border-color: var(--color-accent-400);
  box-shadow: 0 0 40px rgba(215, 255, 0, 0.3);
}

.card-pricing-badge {
  position: absolute;
  top: var(--space-4);
  right: var(--space-4);
  background: var(--color-accent-400);
  color: var(--color-neutral-950);
  padding: var(--space-2) var(--space-3);
  border-radius: var(--radius-badge);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-bold);
}
```

---

### Navigation

#### Navbar
```css
.navbar {
  background: rgba(10, 10, 10, 0.95);
  backdrop-filter: blur(10px);
  padding: var(--space-4) var(--space-6);
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--color-neutral-900);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.navbar-brand {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-primary);
  text-decoration: none;
}

.navbar-menu {
  display: flex;
  gap: var(--space-6);
  list-style: none;
  margin: 0;
  padding: 0;
}

.navbar-link {
  color: var(--color-text-primary);
  text-decoration: none;
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
  padding: var(--space-2) var(--space-3);
  border-radius: var(--radius-base);
  transition: all 0.2s ease;
}

.navbar-link:hover {
  background: var(--color-surface-secondary);
  color: var(--color-accent-400);
}

.navbar-link.active {
  color: var(--color-accent-400);
}
```

---

### Modals

```css
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4px);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-4);
}

.modal {
  background: var(--color-surface-tertiary);
  border-radius: var(--radius-modal);
  padding: var(--padding-2xl);
  max-width: 600px;
  width: 100%;
  box-shadow: var(--shadow-xl);
  position: relative;
}

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--space-6);
}

.modal-title {
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-primary);
}

.modal-close {
  background: transparent;
  border: none;
  color: var(--color-text-secondary);
  cursor: pointer;
  padding: var(--space-2);
  border-radius: var(--radius-base);
  transition: all 0.2s ease;
}

.modal-close:hover {
  background: var(--color-surface-secondary);
  color: var(--color-text-primary);
}
```

---

### Badges & Tags

```css
.badge {
  display: inline-flex;
  align-items: center;
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-badge);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-semibold);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.badge-success {
  background: var(--color-success-base);
  color: var(--color-neutral-950);
}

.badge-error {
  background: var(--color-error-base);
  color: var(--color-neutral-0);
}

.badge-info {
  background: var(--color-info-base);
  color: var(--color-neutral-0);
}

.badge-neutral {
  background: var(--color-neutral-700);
  color: var(--color-text-primary);
}
```

---

### Icons

```css
.icon {
  width: 1.5rem;
  height: 1.5rem;
  display: inline-block;
}

.icon-sm { width: 1rem; height: 1rem; }
.icon-md { width: 1.5rem; height: 1.5rem; }
.icon-lg { width: 2rem; height: 2rem; }
.icon-xl { width: 3rem; height: 3rem; }

/* Icon containers with background */
.icon-container {
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-base);
  background: var(--color-surface-secondary);
}

.icon-container-primary {
  background: linear-gradient(135deg, var(--color-primary-500), var(--color-primary-700));
}

.icon-container-accent {
  background: var(--color-accent-400);
}

.icon-container-secondary {
  background: var(--color-secondary-500);
}
```

---

## 8. State Variations

### Interactive States

```css
/* Focus States */
:focus-visible {
  outline: 2px solid var(--color-primary-500);
  outline-offset: 2px;
}

/* Selection */
::selection {
  background: var(--color-accent-400);
  color: var(--color-neutral-950);
}

/* Loading State */
.loading {
  opacity: 0.6;
  pointer-events: none;
  cursor: wait;
}

/* Disabled State */
.disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}

/* Error State */
.error {
  border-color: var(--color-error-base);
  color: var(--color-error-light);
}

/* Success State */
.success {
  border-color: var(--color-success-base);
  color: var(--color-success-light);
}
```

---

## 9. Animation & Transitions

```css
/* Transition Durations */
--transition-fast: 150ms;
--transition-base: 200ms;
--transition-slow: 300ms;
--transition-slower: 500ms;

/* Easing Functions */
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);

/* Common Animations */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.animate-fade-in {
  animation: fadeIn var(--transition-base) var(--ease-out);
}

.animate-slide-up {
  animation: slideUp var(--transition-slow) var(--ease-out);
}
```

---

## 10. Design Token Naming Conventions

### Token Structure

ABConvert uses a hierarchical naming system for design tokens:

```
[category].[property].[variant].[state]
```

#### Examples:

```
color.primary.500
color.text.secondary
spacing.padding.lg
typography.heading.h1
component.button.primary.hover
shadow.elevation.md
```

### Tailwind Configuration

```js
// tailwind.config.js
module.exports = {
  theme: {
    colors: {
      primary: {
        50: '#E6F3FF',
        100: '#CCE7FF',
        // ... rest of scale
        500: '#0087FF',
        900: '#001B33',
      },
      accent: {
        400: '#D7FF00',
        500: '#ACCC00',
      },
      // ... other color scales
    },
    spacing: {
      1: '0.25rem',
      2: '0.5rem',
      // ... rest of scale
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1.5' }],
      sm: ['0.875rem', { lineHeight: '1.5' }],
      // ... rest of scale
    },
    borderRadius: {
      button: '0.5rem',
      card: '1rem',
      modal: '1.5rem',
    },
    boxShadow: {
      xs: '0 1px 2px 0 rgba(0, 0, 0, 0.3)',
      // ... rest
    },
  },
}
```

### CSS Custom Properties (Variables)

```css
:root {
  /* Organized by category */

  /* Colors */
  --color-primary-500: #0087FF;
  --color-accent-400: #D7FF00;

  /* Typography */
  --text-h1-size: 3.75rem;
  --text-h1-weight: 700;

  /* Spacing */
  --space-4: 1rem;

  /* Components */
  --button-padding-x: var(--space-6);
  --button-padding-y: var(--space-3);
  --button-radius: var(--radius-base);
}
```

### Figma Variable Naming

In Figma, use the following structure for variables:

```
Category / Property / Variant / State
```

Examples:
- `Color / Primary / 500`
- `Color / Text / Primary`
- `Spacing / Padding / Large`
- `Typography / Heading / H1 / Size`
- `Component / Button / Primary / Background`

---

## 11. Component Patterns

### Test Result Display

Special components for A/B test visualization:

```css
.test-comparison {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-4);
}

.test-variant {
  padding: var(--space-4);
  border-radius: var(--radius-card);
  border: 2px solid transparent;
  transition: all 0.2s ease;
}

.test-variant-a {
  border-color: var(--color-primary-500);
}

.test-variant-b {
  border-color: var(--color-coral-500);
}

.test-metric {
  font-size: var(--font-size-4xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-primary);
}

.test-label {
  font-size: var(--font-size-xs);
  color: var(--color-text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.test-improvement {
  display: inline-flex;
  align-items: center;
  padding: var(--space-1) var(--space-2);
  border-radius: var(--radius-badge);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
}

.test-improvement.positive {
  background: var(--color-success-base);
  color: var(--color-neutral-950);
}

.test-improvement.negative {
  background: var(--color-error-base);
  color: var(--color-neutral-0);
}
```

### Data Visualization

```css
/* Chart colors for Test A vs Test B */
.chart-color-test-a { color: var(--color-primary-500); }
.chart-color-test-b { color: var(--color-coral-500); }

/* Dashboard stats */
.stat-card {
  background: var(--color-surface-secondary);
  padding: var(--padding-lg);
  border-radius: var(--radius-card);
  border-left: 4px solid var(--color-primary-500);
}

.stat-value {
  font-size: var(--font-size-4xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-primary);
  line-height: 1;
  margin-bottom: var(--space-2);
}

.stat-label {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
```

---

## 12. Accessibility Guidelines

### Color Contrast

- **WCAG AAA** for body text: minimum 7:1 contrast ratio
- **WCAG AA** for large text and UI elements: minimum 4.5:1 contrast ratio
- All interactive elements must have visible focus states
- Never rely on color alone to convey information

### Focus Management

```css
/* Keyboard navigation */
*:focus-visible {
  outline: 2px solid var(--color-primary-500);
  outline-offset: 2px;
}

/* Skip to content link */
.skip-to-content {
  position: absolute;
  top: -100px;
  left: 0;
  background: var(--color-accent-400);
  color: var(--color-neutral-950);
  padding: var(--space-3) var(--space-6);
  z-index: 9999;
}

.skip-to-content:focus {
  top: 0;
}
```

### Screen Reader Support

- Use semantic HTML elements (`<button>`, `<nav>`, `<main>`, etc.)
- Include ARIA labels where necessary
- Ensure all images have alt text
- Maintain logical heading hierarchy

---

## 13. Responsive Design Guidelines

### Mobile-First Approach

```css
/* Base styles for mobile */
.container {
  padding: var(--space-4);
}

/* Tablet and up */
@media (min-width: 768px) {
  .container {
    padding: var(--space-6);
  }
}

/* Desktop and up */
@media (min-width: 1024px) {
  .container {
    padding: var(--space-8);
  }
}
```

### Typography Scale Adjustments

```css
/* Mobile */
.hero-title {
  font-size: var(--font-size-4xl);  /* 36px */
}

/* Tablet and up */
@media (min-width: 768px) {
  .hero-title {
    font-size: var(--font-size-5xl);  /* 48px */
  }
}

/* Desktop and up */
@media (min-width: 1024px) {
  .hero-title {
    font-size: var(--font-size-6xl);  /* 60px */
  }
}
```

---

## 14. Guidelines for Consistency & Extensibility

### Adding New Colors

When extending the color palette:

1. **Maintain the scale**: Always create a full 50-900 scale for new colors
2. **Test contrast**: Ensure all text/background combinations meet WCAG AA standards
3. **Define semantic tokens**: Create purpose-specific tokens (e.g., `--color-warning-base`)
4. **Document usage**: Specify when and where the new color should be used

### Creating New Components

When building new components:

1. **Use existing tokens**: Reference design tokens instead of hardcoded values
2. **Follow naming conventions**: Use the established pattern `component.element.variant.state`
3. **Include all states**: Define hover, focus, active, and disabled states
4. **Consider accessibility**: Ensure keyboard navigation and screen reader support
5. **Document variants**: Clearly specify all available variants and their use cases

### Scaling the System

To extend this design system:

1. **Version control**: Increment version numbers when making breaking changes
2. **Backward compatibility**: Maintain deprecated tokens for at least one major version
3. **Documentation**: Update this document with any new patterns or components
4. **Testing**: Validate new additions against existing components for consistency
5. **Communication**: Announce changes to all stakeholders (designers, developers, product)

### Component Checklist

Before adding a new component to the system:

- [ ] Uses design tokens exclusively (no hardcoded values)
- [ ] Includes all interactive states (hover, focus, active, disabled)
- [ ] Meets WCAG AA accessibility standards
- [ ] Responsive across all breakpoints
- [ ] Documented with code examples
- [ ] Includes Figma component and variants
- [ ] Follows established naming conventions
- [ ] Tested in light and dark modes (if applicable)

---

## 15. Usage Examples

### Building a Pricing Section

```html
<section class="pricing-section">
  <h2 class="text-h2">Pricing</h2>

  <div class="pricing-grid">
    <div class="card-pricing">
      <div class="icon-container icon-container-primary">
        <svg class="icon"><!-- Lightning icon --></svg>
      </div>

      <h3 class="text-h4">Basic</h3>
      <div class="price">
        <span class="text-h1">$79</span>
        <span class="text-caption">/month</span>
      </div>

      <ul class="feature-list">
        <li>Shipping Tests</li>
        <li>Content Tests</li>
        <li>Checkout Tests</li>
      </ul>

      <button class="btn-primary">Start free 14-day trial</button>
    </div>

    <div class="card-pricing featured">
      <span class="card-pricing-badge">Best Value</span>
      <!-- ... rest of card -->
    </div>
  </div>
</section>
```

### Building a Dashboard Stat Card

```html
<div class="stat-card">
  <div class="stat-value">16,200</div>
  <div class="stat-label">A/B Tests Run</div>
  <div class="test-improvement positive">+24.3%</div>
</div>
```

### Building a Test Comparison

```html
<div class="test-comparison">
  <div class="test-variant test-variant-a">
    <span class="test-label">Test A</span>
    <div class="test-metric">20.81%</div>
    <span class="text-caption">Conversion Rate</span>
  </div>

  <div class="test-variant test-variant-b">
    <span class="test-label">Test B</span>
    <div class="test-metric">22.66%</div>
    <span class="text-caption">Conversion Rate</span>
    <div class="test-improvement positive">+8.89%</div>
  </div>
</div>
```

---

## 16. Resources & Tools

### Recommended Tools

- **Design**: Figma (primary design tool)
- **Prototyping**: Figma, Principle, or Framer
- **Icons**: Heroicons, Lucide, or custom SVG set
- **CSS Framework**: Tailwind CSS (configured with design tokens)
- **Component Library**: React, Vue, or framework of choice
- **Documentation**: Storybook for component library

### File Organization

```
design-system/
├── tokens/
│   ├── colors.json
│   ├── typography.json
│   ├── spacing.json
│   └── shadows.json
├── components/
│   ├── Button/
│   ├── Input/
│   ├── Card/
│   └── Modal/
├── styles/
│   ├── base.css
│   ├── utilities.css
│   └── components.css
└── docs/
    └── DESIGN_SYSTEM.md
```

---

## Version History

- **v1.0.0** (2025-10-31): Initial design system based on ABConvert website analysis

---

## Contributing

To propose changes to this design system:

1. Create a new branch
2. Document proposed changes with rationale
3. Update relevant token files and component code
4. Submit for design review
5. Update documentation
6. Merge after approval

---

**End of Design System Documentation**
