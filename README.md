# Polaris Design Library

A custom design library built on **Shopify Polaris Web Components** with React wrappers for seamless integration.

## Features

- 🎨 Built on official Shopify Polaris Web Components
- ⚛️ React wrapper components with full TypeScript support
- 🎨 **Design tokens** for colors, spacing, typography, shadows, and motion
- 📚 Storybook documentation and examples
- 🔧 Vite-powered build system
- 📦 Tree-shakeable ES modules
- ♿ **Accessibility testing** with Storybook a11y addon
- ♿ WCAG 2.1 Level AA compliant

## Installation

```bash
npm install @your-org/polaris-design-library @shopify/polaris
```

## Usage

### Import Polaris Web Components

First, ensure you import the Polaris web components in your app entry point:

```tsx
// In your app's main entry file (e.g., main.tsx or _app.tsx)
import '@shopify/polaris/build/esm/components';
```

### Use Components

```tsx
import { Button } from '@your-org/polaris-design-library';

function App() {
  return (
    <div>
      <Button variant="primary" onClick={() => console.log('Clicked!')}>
        Click me
      </Button>

      <Button
        variant="secondary"
        icon="plus"
        onClick={() => console.log('Add product')}
      >
        Add Product
      </Button>

      <Button
        variant="primary"
        tone="critical"
        loading
      >
        Deleting...
      </Button>
    </div>
  );
}
```

## Component Examples

### Button

The Button component supports all Polaris Web Component features:

#### Basic Usage

```tsx
<Button>Save</Button>
```

#### Variants

```tsx
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="tertiary">Tertiary</Button>
```

#### With Icons

```tsx
<Button icon="plus">Add Product</Button>
<Button icon="plus" accessibilityLabel="Add product" />
```

#### Loading State

```tsx
<Button loading variant="primary">Saving...</Button>
```

#### Link Button

```tsx
<Button href="/products">View Products</Button>
<Button href="https://help.shopify.com" target="_blank">Help</Button>
```

#### Critical Actions

```tsx
<Button variant="primary" tone="critical">Delete</Button>
```

## Design Tokens

The library exports Polaris design tokens for consistent styling across your application.

### Colors

```tsx
import { colors, semantic } from '@your-org/polaris-design-library';

// Use color scales
const primaryButton = {
  backgroundColor: colors.blue[500],  // #0171E9
  color: colors.gray[50],              // #FFFFFF
};

// Use semantic colors
const errorText = {
  color: semantic.textCritical,  // #C21414
};
```

### Spacing

```tsx
import { spacing, gap, inset } from '@your-org/polaris-design-library';

// Margins and padding
const box = {
  margin: spacing['200'],        // 16px
  padding: inset.lg,             // 24px
};

// Flexbox/Grid gaps
const container = {
  display: 'flex',
  gap: gap.md,                   // 16px
};
```

### Typography

```tsx
import { typography, fontSize, fontWeight } from '@your-org/polaris-design-library';

// Use typography styles
const heading = {
  ...typography.headingLg,  // Complete heading style
};

// Or compose your own
const customText = {
  fontSize: fontSize['400'],      // 16px
  fontWeight: fontWeight.semibold, // 600
};
```

### Shadows

```tsx
import { shadows, shadow } from '@your-org/polaris-design-library';

// Card elevation
const card = {
  boxShadow: shadows.card,       // Subtle elevation
};

// Custom elevation
const modal = {
  boxShadow: shadow.xl,          // Extra large shadow
};
```

### Complete Token Categories

- **Colors**: Gray, blue, green, yellow, orange, red, purple, azure scales + semantic colors
- **Spacing**: 15 spacing values (0-8rem) + semantic spacing (tight, base, loose)
- **Typography**: Font families, sizes (11px-44px), weights, line heights, letter spacing
- **Shadows**: 6 elevation levels + inner shadows + focus rings + button shadows
- **Motion**: Duration tokens (50ms-500ms) + easing functions + keyframes
- **Breakpoints**: Responsive breakpoints (xs, sm, md, lg, xl) with media queries

**Explore in Storybook**: View all tokens with live examples in the "Design Tokens" section.

## Component API

### Button Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'auto' \| 'primary' \| 'secondary' \| 'tertiary'` | `'auto'` | Visual appearance of the button |
| `tone` | `'auto' \| 'neutral' \| 'critical'` | `'auto'` | Semantic tone of the action |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | HTML button type |
| `disabled` | `boolean` | `false` | Disables the button |
| `loading` | `boolean` | `false` | Shows loading indicator |
| `icon` | `ButtonIcon` | - | Icon to display |
| `accessibilityLabel` | `string` | - | Label for screen readers |
| `href` | `string` | - | URL to navigate to |
| `target` | `'auto' \| '_blank' \| '_self' \| '_parent' \| '_top'` | `'auto'` | Link target |
| `download` | `string` | - | Download filename |
| `onClick` | `(event: Event) => void` | - | Click event handler |
| `onFocus` | `(event: Event) => void` | - | Focus event handler |
| `onBlur` | `(event: Event) => void` | - | Blur event handler |

## Development

### Setup

```bash
# Install dependencies
npm install

# Start Storybook
npm run storybook

# Build library
npm run build

# Type check
npm run type-check
```

### Project Structure

```
polaris-design-library/
├── src/
│   ├── components/
│   │   └── Button/
│   │       ├── Button.tsx           # React wrapper component
│   │       ├── Button.types.ts      # TypeScript types
│   │       ├── Button.stories.tsx   # Storybook stories
│   │       └── index.ts
│   ├── utils/
│   │   └── createWebComponentWrapper.tsx  # Web component wrapper utility
│   └── index.ts                     # Main entry point
├── .storybook/                      # Storybook configuration
├── dist/                            # Built library (generated)
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

### Creating New Components

1. Create a new folder in `src/components/`
2. Define TypeScript types based on Polaris Web Component API
3. Create the React wrapper using `createWebComponentWrapper`
4. Add Storybook stories
5. Export from `src/index.ts`

Example:

```tsx
// src/components/TextField/TextField.types.ts
export interface TextFieldProps {
  label?: string;
  value?: string;
  placeholder?: string;
  // ... other props
}

// src/components/TextField/TextField.tsx
import { forwardRef } from 'react';
import { createWebComponentWrapper } from '@/utils/createWebComponentWrapper';
import type { TextFieldProps } from './TextField.types';

export const TextField = forwardRef<HTMLElement, TextFieldProps>((props, ref) => {
  const WebComponentTextField = createWebComponentWrapper<TextFieldProps>('s-text-field');
  return <WebComponentTextField ref={ref} {...props} />;
});

TextField.displayName = 'TextField';
```

## Architecture

### Web Component Wrapper Utility

The `createWebComponentWrapper` utility handles:

- ✅ React to web component prop mapping
- ✅ Event listener attachment/cleanup
- ✅ Ref forwarding
- ✅ TypeScript type safety
- ✅ React lifecycle integration

### Benefits

1. **Type Safety**: Full TypeScript support with auto-completion
2. **React Integration**: Seamless integration with React apps
3. **Polaris Foundation**: Built on official Shopify components
4. **Consistent API**: React-friendly API for web components
5. **Tree Shaking**: Import only what you need
6. **Documentation**: Storybook with examples and playground

## Browser Support

Supports all modern browsers that support:
- Web Components (Custom Elements v1)
- ES2020
- React 18+

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch
3. Add your component with TypeScript types and Storybook stories
4. Submit a pull request

## License

MIT

## Resources

- [Shopify Polaris Web Components](https://shopify.dev/docs/api/app-home/polaris-web-components)
- [Polaris Design System](https://polaris.shopify.com/)
- [Storybook Documentation](https://storybook.js.org/)
