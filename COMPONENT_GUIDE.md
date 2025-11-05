# Component Development Guide

This guide explains how to add new Polaris Web Components to the design library.

## Overview

Each component follows this structure:

```
src/components/ComponentName/
├── ComponentName.tsx          # React wrapper
├── ComponentName.types.ts     # TypeScript type definitions
├── ComponentName.stories.tsx  # Storybook documentation
└── index.ts                   # Public exports
```

## Step-by-Step Guide

### 1. Define TypeScript Types

Create `ComponentName.types.ts` based on the official Polaris Web Components API documentation.

**Example: TextField**

```typescript
// src/components/TextField/TextField.types.ts
export type TextFieldType = 'text' | 'email' | 'number' | 'password' | 'search' | 'tel' | 'url';

export interface TextFieldProps {
  /**
   * Label for the text field
   */
  label?: string;

  /**
   * Current value of the text field
   */
  value?: string;

  /**
   * Placeholder text
   */
  placeholder?: string;

  /**
   * Type of input
   * @default 'text'
   */
  type?: TextFieldType;

  /**
   * Disables the text field
   * @default false
   */
  disabled?: boolean;

  /**
   * Shows an error state
   * @default false
   */
  error?: boolean;

  /**
   * Error message to display
   */
  errorMessage?: string;

  /**
   * Help text to display
   */
  helpText?: string;

  /**
   * Makes the field required
   * @default false
   */
  required?: boolean;

  /**
   * Change event handler
   */
  onChange?: (event: Event) => void;

  /**
   * Blur event handler
   */
  onBlur?: (event: Event) => void;

  /**
   * Focus event handler
   */
  onFocus?: (event: Event) => void;

  /**
   * Additional CSS class names
   */
  className?: string;

  /**
   * Inline styles
   */
  style?: React.CSSProperties;
}
```

### 2. Create React Wrapper

Create `ComponentName.tsx` using the `createWebComponentWrapper` utility.

```typescript
// src/components/TextField/TextField.tsx
import { forwardRef } from 'react';
import { createWebComponentWrapper } from '@/utils/createWebComponentWrapper';
import type { TextFieldProps } from './TextField.types';

/**
 * TextField component wrapper for Polaris Web Component `<s-text-field>`
 *
 * A text field is an input field that merchants can type into.
 *
 * @example
 * ```tsx
 * <TextField
 *   label="Product name"
 *   value={productName}
 *   onChange={(e) => setProductName(e.target.value)}
 * />
 * ```
 */
export const TextField = forwardRef<HTMLElement, TextFieldProps>((props, ref) => {
  const WebComponentTextField = createWebComponentWrapper<TextFieldProps>('s-text-field');
  return <WebComponentTextField ref={ref} {...props} />;
});

TextField.displayName = 'TextField';

export default TextField;
```

### 3. Create Export File

Create `index.ts` to export the component and types.

```typescript
// src/components/TextField/index.ts
export { TextField } from './TextField';
export type { TextFieldProps, TextFieldType } from './TextField.types';
```

### 4. Create Storybook Stories

Create `ComponentName.stories.tsx` with comprehensive examples.

```typescript
// src/components/TextField/TextField.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { TextField } from './TextField';

const meta = {
  title: 'Components/TextField',
  component: TextField,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A text field is an input field that merchants can type into.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'number', 'password', 'search', 'tel', 'url'],
      description: 'Type of input',
      table: {
        defaultValue: { summary: 'text' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the text field',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    error: {
      control: 'boolean',
      description: 'Shows error state',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
  },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicUsage: Story = {
  args: {
    label: 'Product name',
    placeholder: 'Enter product name',
  },
};

export const WithValue: Story = {
  args: {
    label: 'Email',
    type: 'email',
    value: 'merchant@example.com',
  },
};

export const WithError: Story = {
  args: {
    label: 'Email',
    type: 'email',
    value: 'invalid-email',
    error: true,
    errorMessage: 'Please enter a valid email address',
  },
};

export const WithHelpText: Story = {
  args: {
    label: 'Store name',
    helpText: 'This will be displayed to your customers',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Product SKU',
    value: 'SKU-12345',
    disabled: true,
  },
};

export const Required: Story = {
  args: {
    label: 'Business name',
    required: true,
  },
};

export const Playground: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder text',
    type: 'text',
    disabled: false,
    error: false,
    required: false,
  },
};
```

### 5. Update Main Index

Add exports to `src/index.ts`:

```typescript
// src/index.ts
export { TextField } from './components/TextField';
export type { TextFieldProps, TextFieldType } from './components/TextField';
```

## Best Practices

### 1. Type Definitions

- ✅ Include JSDoc comments for all props
- ✅ Use union types for predefined values
- ✅ Include default values in documentation
- ✅ Group related types together

### 2. Component Implementation

- ✅ Use `forwardRef` to support ref forwarding
- ✅ Set a display name for better debugging
- ✅ Include comprehensive JSDoc with examples
- ✅ Keep the wrapper minimal - let the web component do the work

### 3. Storybook Stories

- ✅ Create a story for each common use case
- ✅ Add descriptions to stories and args
- ✅ Include a Playground story for experimentation
- ✅ Document default values in argTypes
- ✅ Use realistic example data

### 4. Naming Conventions

- Component files: `PascalCase` (e.g., `TextField.tsx`)
- Type files: `PascalCase.types.ts` (e.g., `TextField.types.ts`)
- Story files: `PascalCase.stories.tsx` (e.g., `TextField.stories.tsx`)
- Exported types: `PascalCase` with component name prefix (e.g., `TextFieldProps`)

## Reference: Polaris Web Component Tag Names

Map React component names to web component tag names:

| React Component | Web Component Tag | Documentation |
|----------------|-------------------|---------------|
| Button | `<s-button>` | [Button API](https://shopify.dev/docs/api/app-home/polaris-web-components/actions/button) |
| TextField | `<s-text-field>` | [TextField API](https://shopify.dev/docs/api/app-home/polaris-web-components/forms/text-field) |
| Select | `<s-select>` | [Select API](https://shopify.dev/docs/api/app-home/polaris-web-components/forms/select) |
| Checkbox | `<s-checkbox>` | [Checkbox API](https://shopify.dev/docs/api/app-home/polaris-web-components/forms/checkbox) |
| Card | `<s-card>` | [Card API](https://shopify.dev/docs/api/app-home/polaris-web-components/layout/card) |
| Stack | `<s-stack>` | [Stack API](https://shopify.dev/docs/api/app-home/polaris-web-components/layout/stack) |
| Badge | `<s-badge>` | [Badge API](https://shopify.dev/docs/api/app-home/polaris-web-components/feedback-indicators/badge) |

## Testing Components

### Manual Testing

1. Start Storybook: `npm run storybook`
2. Navigate to your component's stories
3. Test all variants and states
4. Verify accessibility labels
5. Test interactions (clicks, focus, etc.)

### Type Checking

```bash
npm run type-check
```

### Building

```bash
npm run build
```

Verify that:
- Types are generated in `dist/`
- Components are exported correctly
- No TypeScript errors

## Common Patterns

### Components with Slots

For components that accept multiple children/slots:

```typescript
export interface CardProps {
  /**
   * Card title
   */
  title?: string;

  /**
   * Primary actions
   */
  primaryAction?: React.ReactNode;

  /**
   * Secondary actions
   */
  secondaryActions?: React.ReactNode;

  /**
   * Card content
   */
  children?: React.ReactNode;
}
```

### Components with Complex Types

For icon types, colors, or other enums, create separate type definitions:

```typescript
export type BadgeTone = 'info' | 'success' | 'warning' | 'critical' | 'attention';
export type BadgeSize = 'small' | 'medium';

export interface BadgeProps {
  tone?: BadgeTone;
  size?: BadgeSize;
  children?: React.ReactNode;
}
```

## Troubleshooting

### Component Not Rendering

1. Verify web component is registered:
   ```typescript
   console.log(customElements.get('s-component-name'));
   ```

2. Ensure Polaris web components are imported in your app:
   ```typescript
   import '@shopify/polaris/build/esm/components';
   ```

### TypeScript Errors

1. Run `npm run type-check` to see full errors
2. Verify types match Polaris Web Component API
3. Check for missing exports in `index.ts` files

### Props Not Working

1. Check if prop is a property or attribute on the web component
2. Verify event names match (remove 'on' prefix)
3. Test in Storybook to isolate the issue

## Resources

- [Polaris Web Components Documentation](https://shopify.dev/docs/api/app-home/polaris-web-components)
- [Web Components MDN](https://developer.mozilla.org/en-US/docs/Web/Web_Components)
- [Storybook Documentation](https://storybook.js.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
