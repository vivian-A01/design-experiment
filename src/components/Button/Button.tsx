import { forwardRef } from 'react';
import { createWebComponentWrapper } from '@/utils/createWebComponentWrapper';
import type { ButtonProps } from './Button.types';

/**
 * Button component wrapper for Polaris Web Component `<s-button>`
 *
 * Triggers actions or events, such as submitting forms, opening dialogs, or
 * navigating to other pages. Use Button to let users perform specific tasks or
 * initiate interactions throughout the interface. Buttons can also function as
 * links, guiding users to internal or external destinations.
 *
 * @example
 * ```tsx
 * // Basic button
 * <Button>Save</Button>
 *
 * // Primary button with icon
 * <Button variant="primary" icon="plus">Add Product</Button>
 *
 * // Critical action button
 * <Button variant="primary" tone="critical">Delete</Button>
 *
 * // Link button
 * <Button href="/products">View Products</Button>
 *
 * // Loading state
 * <Button loading>Saving...</Button>
 *
 * // Icon-only button
 * <Button icon="plus" accessibilityLabel="Add product" />
 * ```
 */
export const Button = forwardRef<HTMLElement, ButtonProps>((props, ref) => {
  const WebComponentButton = createWebComponentWrapper<ButtonProps>('s-button');
  return <WebComponentButton ref={ref} {...props} />;
});

Button.displayName = 'Button';

export default Button;
