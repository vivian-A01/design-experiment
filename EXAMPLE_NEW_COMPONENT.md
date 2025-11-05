# Example: Adding the Stack Component

This is a complete example showing how to add a new component (Stack) to the library.

## Step 1: Create Component Folder

```bash
mkdir -p src/components/Stack
```

## Step 2: Define Types

**File: `src/components/Stack/Stack.types.ts`**

```typescript
/**
 * Type definitions for the Polaris Stack component
 * Based on the official Shopify Polaris Web Components API
 */

export type StackDirection = 'inline' | 'block';
export type StackGap = 'none' | '100' | '200' | '300' | '400' | '500' | 'base';
export type StackAlign = 'start' | 'center' | 'end' | 'stretch';
export type StackJustifyContent = 'start' | 'center' | 'end' | 'space-between' | 'space-around' | 'space-evenly';

/**
 * Props for the Stack component
 */
export interface StackProps {
  /**
   * Direction of the stack layout
   * - `inline`: Horizontal layout (row)
   * - `block`: Vertical layout (column)
   *
   * @default 'block'
   */
  direction?: StackDirection;

  /**
   * Space between stack items
   *
   * @default 'base'
   */
  gap?: StackGap;

  /**
   * Alignment of items along the cross axis
   *
   * @default 'stretch'
   */
  align?: StackAlign;

  /**
   * Distribution of items along the main axis
   */
  justifyContent?: StackJustifyContent;

  /**
   * Whether the stack should wrap
   *
   * @default false
   */
  wrap?: boolean;

  /**
   * Stack content (children)
   */
  children?: React.ReactNode;

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

## Step 3: Create React Wrapper

**File: `src/components/Stack/Stack.tsx`**

```typescript
import { forwardRef } from 'react';
import { createWebComponentWrapper } from '@/utils/createWebComponentWrapper';
import type { StackProps } from './Stack.types';

/**
 * Stack component wrapper for Polaris Web Component `<s-stack>`
 *
 * A layout component for creating flexible vertical or horizontal layouts.
 * Use Stack to control spacing, alignment, and distribution of child elements.
 *
 * @example
 * ```tsx
 * // Vertical stack with base gap
 * <Stack>
 *   <Button>First</Button>
 *   <Button>Second</Button>
 * </Stack>
 *
 * // Horizontal stack with custom gap
 * <Stack direction="inline" gap="400">
 *   <Button>Save</Button>
 *   <Button>Cancel</Button>
 * </Stack>
 *
 * // Centered horizontal stack
 * <Stack direction="inline" align="center" justifyContent="center">
 *   <Text>Centered content</Text>
 * </Stack>
 * ```
 */
export const Stack = forwardRef<HTMLElement, StackProps>((props, ref) => {
  const WebComponentStack = createWebComponentWrapper<StackProps>('s-stack');
  return <WebComponentStack ref={ref} {...props} />;
});

Stack.displayName = 'Stack';

export default Stack;
```

## Step 4: Create Export File

**File: `src/components/Stack/index.ts`**

```typescript
export { Stack } from './Stack';
export type {
  StackProps,
  StackDirection,
  StackGap,
  StackAlign,
  StackJustifyContent,
} from './Stack.types';
```

## Step 5: Create Storybook Stories

**File: `src/components/Stack/Stack.stories.tsx`**

```typescript
import type { Meta, StoryObj } from '@storybook/react';
import { Stack } from './Stack';
import { Button } from '../Button';

/**
 * A layout component for creating flexible vertical or horizontal layouts.
 * Use Stack to control spacing, alignment, and distribution of child elements.
 */
const meta = {
  title: 'Components/Stack',
  component: Stack,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A layout component for creating flexible vertical or horizontal layouts. Use Stack to control spacing, alignment, and distribution of child elements.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: 'select',
      options: ['inline', 'block'],
      description: 'Direction of the stack layout',
      table: {
        defaultValue: { summary: 'block' },
      },
    },
    gap: {
      control: 'select',
      options: ['none', '100', '200', '300', '400', '500', 'base'],
      description: 'Space between stack items',
      table: {
        defaultValue: { summary: 'base' },
      },
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end', 'stretch'],
      description: 'Alignment of items along the cross axis',
      table: {
        defaultValue: { summary: 'stretch' },
      },
    },
    justifyContent: {
      control: 'select',
      options: ['start', 'center', 'end', 'space-between', 'space-around', 'space-evenly'],
      description: 'Distribution of items along the main axis',
    },
    wrap: {
      control: 'boolean',
      description: 'Whether the stack should wrap',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
  },
} satisfies Meta<typeof Stack>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default vertical stack with base gap
 */
export const BasicUsage: Story = {
  render: () => (
    <Stack>
      <Button variant="primary">First Item</Button>
      <Button variant="secondary">Second Item</Button>
      <Button variant="tertiary">Third Item</Button>
    </Stack>
  ),
};

/**
 * Horizontal stack (inline direction)
 */
export const InlineDirection: Story = {
  render: () => (
    <Stack direction="inline">
      <Button variant="primary">Save</Button>
      <Button variant="secondary">Cancel</Button>
      <Button variant="tertiary">Discard</Button>
    </Stack>
  ),
};

/**
 * Different gap sizes
 */
export const GapSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
      <div>
        <h3>Gap: none</h3>
        <Stack direction="inline" gap="none">
          <Button>First</Button>
          <Button>Second</Button>
          <Button>Third</Button>
        </Stack>
      </div>

      <div>
        <h3>Gap: 200</h3>
        <Stack direction="inline" gap="200">
          <Button>First</Button>
          <Button>Second</Button>
          <Button>Third</Button>
        </Stack>
      </div>

      <div>
        <h3>Gap: base (default)</h3>
        <Stack direction="inline" gap="base">
          <Button>First</Button>
          <Button>Second</Button>
          <Button>Third</Button>
        </Stack>
      </div>

      <div>
        <h3>Gap: 500</h3>
        <Stack direction="inline" gap="500">
          <Button>First</Button>
          <Button>Second</Button>
          <Button>Third</Button>
        </Stack>
      </div>
    </div>
  ),
};

/**
 * Different alignment options
 */
export const Alignment: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
      <div>
        <h3>Align: start</h3>
        <Stack direction="inline" align="start" style={{ height: '100px', background: '#f6f6f7' }}>
          <Button>First</Button>
          <Button>Second</Button>
        </Stack>
      </div>

      <div>
        <h3>Align: center</h3>
        <Stack direction="inline" align="center" style={{ height: '100px', background: '#f6f6f7' }}>
          <Button>First</Button>
          <Button>Second</Button>
        </Stack>
      </div>

      <div>
        <h3>Align: end</h3>
        <Stack direction="inline" align="end" style={{ height: '100px', background: '#f6f6f7' }}>
          <Button>First</Button>
          <Button>Second</Button>
        </Stack>
      </div>
    </div>
  ),
};

/**
 * Different justify content options
 */
export const JustifyContent: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
      <div>
        <h3>Justify: start</h3>
        <Stack direction="inline" justifyContent="start" style={{ background: '#f6f6f7', padding: '12px' }}>
          <Button>First</Button>
          <Button>Second</Button>
        </Stack>
      </div>

      <div>
        <h3>Justify: center</h3>
        <Stack direction="inline" justifyContent="center" style={{ background: '#f6f6f7', padding: '12px' }}>
          <Button>First</Button>
          <Button>Second</Button>
        </Stack>
      </div>

      <div>
        <h3>Justify: end</h3>
        <Stack direction="inline" justifyContent="end" style={{ background: '#f6f6f7', padding: '12px' }}>
          <Button>First</Button>
          <Button>Second</Button>
        </Stack>
      </div>

      <div>
        <h3>Justify: space-between</h3>
        <Stack direction="inline" justifyContent="space-between" style={{ background: '#f6f6f7', padding: '12px' }}>
          <Button>First</Button>
          <Button>Second</Button>
        </Stack>
      </div>
    </div>
  ),
};

/**
 * Form action buttons layout
 */
export const FormActions: Story = {
  render: () => (
    <Stack direction="inline" gap="base" justifyContent="end">
      <Button variant="secondary">Cancel</Button>
      <Button variant="primary">Save Product</Button>
    </Stack>
  ),
};

/**
 * Card layout with vertical stack
 */
export const CardLayout: Story = {
  render: () => (
    <div style={{ maxWidth: '600px', padding: '20px', background: 'white', borderRadius: '8px', border: '1px solid #e3e3e3' }}>
      <Stack gap="400">
        <h2 style={{ margin: 0 }}>Product Details</h2>
        <div>
          <p style={{ margin: 0 }}>Configure your product settings below.</p>
        </div>
        <Stack direction="inline" gap="base" justifyContent="end">
          <Button variant="secondary">Cancel</Button>
          <Button variant="primary">Save</Button>
        </Stack>
      </Stack>
    </div>
  ),
};

/**
 * Interactive playground
 */
export const Playground: Story = {
  args: {
    direction: 'inline',
    gap: 'base',
    align: 'start',
    wrap: false,
  },
  render: (args) => (
    <Stack {...args}>
      <Button variant="primary">First Item</Button>
      <Button variant="secondary">Second Item</Button>
      <Button variant="tertiary">Third Item</Button>
    </Stack>
  ),
};
```

## Step 6: Update Main Index

**File: `src/index.ts`**

Add the following exports:

```typescript
// ... existing exports ...

export { Stack } from './components/Stack';
export type {
  StackProps,
  StackDirection,
  StackGap,
  StackAlign,
  StackJustifyContent,
} from './components/Stack';
```

## Step 7: Test in Storybook

```bash
npm run storybook
```

Navigate to **Components > Stack** to see all the examples!

## Usage in Your App

```tsx
import { Stack, Button } from '@your-org/polaris-design-library';

function MyComponent() {
  return (
    <Stack direction="inline" gap="base" justifyContent="end">
      <Button variant="secondary">Cancel</Button>
      <Button variant="primary">Save Product</Button>
    </Stack>
  );
}
```

## Summary

This example demonstrates:

1. ✅ Creating TypeScript type definitions from Polaris API
2. ✅ Using `createWebComponentWrapper` utility
3. ✅ Writing comprehensive Storybook stories
4. ✅ Exporting types and components
5. ✅ Following consistent naming conventions
6. ✅ Adding JSDoc comments with examples
7. ✅ Creating a reusable, type-safe React component

Follow this same pattern for any Polaris Web Component you want to add to your library!
