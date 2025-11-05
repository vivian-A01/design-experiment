# Polaris Web Components Guide

## Overview

This library includes custom Web Components styled with Polaris design tokens. While Shopify Polaris doesn't provide an official Web Components library, we've created custom components that:

- Use Polaris design tokens via CSS custom properties
- Work in any framework (React, Vue, Angular, vanilla JS)
- Follow Web Components standards
- Provide framework-agnostic UI components

## Available Components

### `<polaris-button>`

A button component with Polaris styling and multiple variants.

**Attributes:**
- `variant`: `"primary"` | `"secondary"` | `"critical"` (default: `"secondary"`)
- `disabled`: Boolean attribute

**Events:**
- `polaris-click`: Fired when button is clicked (bubbles and composes)

**Usage:**

```html
<!-- Primary button -->
<polaris-button variant="primary">Save</polaris-button>

<!-- Critical action -->
<polaris-button variant="critical">Delete</polaris-button>

<!-- Disabled state -->
<polaris-button disabled>Cannot click</polaris-button>
```

**React/JSX:**

```tsx
import '../web-components';

function MyComponent() {
  return (
    <polaris-button
      variant="primary"
      onClick={(e) => console.log('Clicked!')}
    >
      Click me
    </polaris-button>
  );
}
```

---

### `<polaris-card>`

A card component with slots for flexible content layout.

**Slots:**
- `title`: Card header content
- `default`: Main card content
- `actions`: Footer action buttons

**Usage:**

```html
<polaris-card>
  <h2 slot="title">Card Title</h2>
  <p>Main content goes here</p>
  <div slot="actions">
    <polaris-button variant="primary">Save</polaris-button>
    <polaris-button>Cancel</polaris-button>
  </div>
</polaris-card>
```

**React/JSX:**

```tsx
import '../web-components';

function MyCard() {
  return (
    <polaris-card>
      <h2 slot="title">Product Details</h2>
      <p>Product description here...</p>
      <div slot="actions">
        <polaris-button variant="primary">Edit</polaris-button>
      </div>
    </polaris-card>
  );
}
```

---

## Integration

### 1. Import Components

**In TypeScript/JavaScript:**

```typescript
import '@/web-components';
// All components are now registered
```

**Or import individually:**

```typescript
import { PolarisButton, PolarisCard } from '@/web-components';
```

### 2. Ensure Design Tokens Are Loaded

Web Components require design tokens to be available as CSS custom properties:

**Option A: Use theme system (recommended)**

```typescript
import { applyTheme, theme } from '@/theme';

// Apply tokens on app load
applyTheme(theme);
```

**Option B: Auto-register tokens**

```typescript
import '@/theme/register-tokens';
// Tokens are now available
```

**Option C: Manual CSS**

```html
<style>
  :root {
    --color-bg-primary: #ffffff;
    --color-text-primary: #000000;
    --shadow-card: 0px 1px 3px 0px rgba(0, 0, 0, 0.1);
    /* ... other tokens */
  }
</style>
```

---

## Framework Examples

### Vanilla JavaScript

```html
<!DOCTYPE html>
<html>
<head>
  <script type="module">
    import '@/web-components';
    import '@/theme/register-tokens';
  </script>
</head>
<body>
  <polaris-card>
    <h2 slot="title">Welcome</h2>
    <p>This is a Web Component!</p>
    <div slot="actions">
      <polaris-button variant="primary">Get Started</polaris-button>
    </div>
  </polaris-card>

  <script>
    document.querySelector('polaris-button').addEventListener('polaris-click', (e) => {
      console.log('Button clicked!', e.detail);
    });
  </script>
</body>
</html>
```

### React

```tsx
import { useEffect } from 'react';
import '../web-components';
import { applyTheme, theme } from '../theme';

function App() {
  useEffect(() => {
    applyTheme(theme);
  }, []);

  return (
    <div>
      <polaris-card>
        <h2 slot="title">React + Web Components</h2>
        <p>Works seamlessly!</p>
        <div slot="actions">
          <polaris-button
            variant="primary"
            onClick={() => alert('Clicked!')}
          >
            Click me
          </polaris-button>
        </div>
      </polaris-card>
    </div>
  );
}
```

### Vue

```vue
<template>
  <div>
    <polaris-card>
      <h2 slot="title">Vue + Web Components</h2>
      <p>Easy integration!</p>
      <div slot="actions">
        <polaris-button
          variant="primary"
          @polaris-click="handleClick"
        >
          Click me
        </polaris-button>
      </div>
    </polaris-card>
  </div>
</template>

<script>
import '@/web-components';
import { applyTheme, theme } from '@/theme';

export default {
  mounted() {
    applyTheme(theme);
  },
  methods: {
    handleClick(event) {
      console.log('Clicked!', event.detail);
    }
  }
}
</script>
```

---

## Design Tokens Integration

Web Components automatically use CSS custom properties defined by the design token system:

**Colors:**
```css
var(--color-bg-primary)
var(--color-text-primary)
var(--color-text-interactive)
var(--color-border)
```

**Typography:**
```css
var(--font-family-sans)
var(--font-size-base)
var(--font-weight-medium)
var(--line-height-relaxed)
```

**Shadows:**
```css
var(--shadow-card)
var(--shadow-card-hovered)
var(--shadow-button-default)
var(--shadow-focus)
```

All components include fallback values, so they work even without tokens loaded (though they won't match Polaris styling exactly).

---

## Creating Custom Web Components

You can create your own Polaris-styled Web Components:

```typescript
export class MyComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot!.innerHTML = `
      <style>
        :host {
          display: block;
          background: var(--color-bg-primary, #ffffff);
          color: var(--color-text-primary, #000000);
          padding: 1rem;
          border: 1px solid var(--color-border, #e3e3e3);
          border-radius: 8px;
          box-shadow: var(--shadow-card);
        }
      </style>
      <slot></slot>
    `;
  }
}

customElements.define('my-component', MyComponent);
```

---

## Browser Support

Web Components are supported in all modern browsers:

- ✅ Chrome/Edge 67+
- ✅ Firefox 63+
- ✅ Safari 10.1+
- ✅ iOS Safari 10.3+
- ✅ Android Chrome 67+

For older browsers, use the [Web Components polyfills](https://github.com/webcomponents/polyfills).

---

## TypeScript Support

Add type declarations for custom elements:

```typescript
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'polaris-button': {
        variant?: 'primary' | 'secondary' | 'critical';
        disabled?: boolean;
        onClick?: (e: Event) => void;
      };
      'polaris-card': {
        children?: React.ReactNode;
      };
    }
  }
}
```

---

## Next Steps

1. **View demos in Storybook**: Navigate to "Web Components > Polaris Components"
2. **Explore design tokens**: Check "Design Tokens > Token Demo"
3. **Create custom components**: Follow the patterns in `/src/web-components/`
4. **Integrate with your app**: Import and use components in any framework

For questions or issues, refer to the main project documentation or submit an issue.
