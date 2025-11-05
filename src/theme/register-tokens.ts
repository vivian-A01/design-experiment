/**
 * Register Design Tokens for Web Components
 *
 * Auto-registers all design tokens as CSS custom properties on document load.
 * This makes tokens available globally for Web Components and vanilla JavaScript.
 *
 * Usage:
 * 1. Import this file at the top of your entry point:
 *    ```ts
 *    import './theme/register-tokens';
 *    ```
 *
 * 2. Then use CSS variables in your Web Components:
 *    ```css
 *    :host {
 *      color: var(--color-text-primary);
 *      font-size: var(--font-size-base);
 *      box-shadow: var(--shadow-card);
 *    }
 *    ```
 */

import { theme } from './index';

/**
 * Register all design tokens as CSS custom properties
 */
export function registerDesignTokens(): void {
  const root = document.documentElement;

  // Register color tokens
  Object.entries(theme.colors).forEach(([key, value]) => {
    root.style.setProperty(`--${key}`, value as string);
  });

  // Register typography tokens
  Object.entries(theme.typography).forEach(([key, value]) => {
    if (typeof value === 'object' && value !== null) {
      // Composite typography styles (e.g., font-heading-lg)
      Object.entries(value).forEach(([prop, val]) => {
        root.style.setProperty(`--${key}-${prop}`, val as string);
      });
    } else {
      // Primitive typography tokens (e.g., font-size-base)
      root.style.setProperty(`--${key}`, value as string);
    }
  });

  // Register shadow tokens
  Object.entries(theme.shadows).forEach(([key, value]) => {
    root.style.setProperty(`--${key}`, value as string);
  });

  console.log('[Design Tokens] Registered all design tokens as CSS custom properties');
}

// Auto-register on module load
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', registerDesignTokens);
  } else {
    registerDesignTokens();
  }
}

export default registerDesignTokens;
