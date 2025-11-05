# Quick Start Guide

Get your Polaris Design Library up and running in minutes.

## Installation

```bash
cd polaris-design-library
npm install
```

## Development

### Start Storybook (Component Documentation & Preview)

```bash
npm run storybook
```

This will open Storybook at `http://localhost:6006` where you can:
- Browse all components
- See live examples
- Test different props in the Playground
- Read documentation

### Build the Library

```bash
npm run build
```

This creates:
- `dist/index.js` - ES module bundle
- `dist/index.cjs` - CommonJS bundle
- `dist/index.d.ts` - TypeScript type definitions
- `dist/style.css` - Component styles (if any)

### Type Check

```bash
npm run type-check
```

## Using the Library in Your App

### 1. Install in your React app

```bash
npm install @shopify/polaris
npm link /Users/vivianwang/polaris-design-library
```

### 2. Import Polaris Web Components

In your app's entry point (`main.tsx` or `_app.tsx`):

```tsx
import '@shopify/polaris/build/esm/components';
```

### 3. Use Components

```tsx
import { Button } from '@your-org/polaris-design-library';

function App() {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div>
      <Button variant="primary" icon="plus" onClick={handleClick}>
        Add Product
      </Button>
    </div>
  );
}
```

## Project Structure

```
polaris-design-library/
├── src/
│   ├── components/
│   │   ├── Button/              # Button component
│   │   │   ├── Button.tsx       # React wrapper
│   │   │   ├── Button.types.ts  # TypeScript types
│   │   │   ├── Button.stories.tsx  # Storybook stories
│   │   │   └── index.ts
│   │   └── Introduction.mdx     # Storybook intro page
│   ├── utils/
│   │   └── createWebComponentWrapper.tsx  # Wrapper utility
│   └── index.ts                 # Main entry point
├── .storybook/                  # Storybook config
│   ├── main.ts
│   ├── preview.ts
│   └── preview-head.html
├── dist/                        # Built library (after npm run build)
├── package.json
├── tsconfig.json
├── vite.config.ts
├── README.md
├── COMPONENT_GUIDE.md          # Guide for adding new components
└── QUICK_START.md              # This file
```

## Adding New Components

Follow the [Component Development Guide](./COMPONENT_GUIDE.md) to add more Polaris components.

Quick steps:

1. Create component folder: `src/components/ComponentName/`
2. Define types: `ComponentName.types.ts`
3. Create wrapper: `ComponentName.tsx`
4. Add stories: `ComponentName.stories.tsx`
5. Export from `src/index.ts`
6. Test in Storybook

## Example: Adding a TextField Component

```typescript
// 1. Define types (TextField.types.ts)
export interface TextFieldProps {
  label?: string;
  value?: string;
  onChange?: (event: Event) => void;
  // ... other props
}

// 2. Create wrapper (TextField.tsx)
import { forwardRef } from 'react';
import { createWebComponentWrapper } from '@/utils/createWebComponentWrapper';
import type { TextFieldProps } from './TextField.types';

export const TextField = forwardRef<HTMLElement, TextFieldProps>((props, ref) => {
  const WebComponentTextField = createWebComponentWrapper<TextFieldProps>('s-text-field');
  return <WebComponentTextField ref={ref} {...props} />;
});

TextField.displayName = 'TextField';

// 3. Export (index.ts)
export { TextField } from './TextField';
export type { TextFieldProps } from './TextField.types';

// 4. Update src/index.ts
export { TextField } from './components/TextField';
export type { TextFieldProps } from './components/TextField';
```

## Common Commands

| Command | Description |
|---------|-------------|
| `npm install` | Install dependencies |
| `npm run storybook` | Start Storybook dev server |
| `npm run build` | Build library for production |
| `npm run build-storybook` | Build Storybook for deployment |
| `npm run type-check` | Run TypeScript type checking |

## Next Steps

1. ✅ Run `npm install`
2. ✅ Start Storybook with `npm run storybook`
3. ✅ Explore the Button component examples
4. ✅ Read the [Component Guide](./COMPONENT_GUIDE.md)
5. ✅ Add more components from [Polaris Web Components](https://shopify.dev/docs/api/app-home/polaris-web-components)

## Troubleshooting

### Storybook won't start

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### TypeScript errors

```bash
# Run type check to see all errors
npm run type-check
```

### Components not rendering

Make sure Polaris web components are imported in your app:

```tsx
import '@shopify/polaris/build/esm/components';
```

## Resources

- [Polaris Web Components](https://shopify.dev/docs/api/app-home/polaris-web-components)
- [Storybook Docs](https://storybook.js.org/docs)
- [React TypeScript](https://react-typescript-cheatsheet.netlify.app/)
