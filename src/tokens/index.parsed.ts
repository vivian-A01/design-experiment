/**
 * Parsed Design Tokens - Unified Export
 *
 * Simplified, dash-case design tokens parsed from Figma exports.
 * Optimized for Web Components and CSS custom properties.
 *
 * @example
 * ```tsx
 * // Import individual token modules
 * import { tokens as colorTokens } from './tokens/colors.parsed';
 * import { tokens as typographyTokens } from './tokens/typography.parsed';
 * import { tokens as shadowTokens } from './tokens/shadows.parsed';
 *
 * // Or import everything at once
 * import { parsedTokens } from './tokens/index.parsed';
 *
 * // Use in React components
 * <div style={{ color: parsedTokens.colors['color-text-primary'] }} />
 *
 * // Generate CSS custom properties
 * import { generateAllCSSCustomProperties } from './tokens/index.parsed';
 * const css = generateAllCSSCustomProperties();
 * ```
 */

// Export individual token modules
export { tokens as colorTokens, generateCSSCustomProperties as generateColorCSS } from './colors.parsed';
export type { ColorToken } from './colors.parsed';

export { tokens as typographyTokens, generateCSSCustomProperties as generateTypographyCSS } from './typography.parsed';
export type { TypographyToken, TypographyStyle } from './typography.parsed';

export { tokens as shadowTokens, generateCSSCustomProperties as generateShadowCSS } from './shadows.parsed';
export type { ShadowToken } from './shadows.parsed';

// Import for unified export
import { tokens as colors } from './colors.parsed';
import { tokens as typography } from './typography.parsed';
import { tokens as shadows } from './shadows.parsed';
import {
  generateCSSCustomProperties as generateColorCSS,
} from './colors.parsed';
import {
  generateCSSCustomProperties as generateTypographyCSS,
} from './typography.parsed';
import {
  generateCSSCustomProperties as generateShadowCSS,
} from './shadows.parsed';

/**
 * All parsed design tokens in a single object
 */
export const parsedTokens = {
  colors,
  typography,
  shadows,
} as const;

/**
 * Generate all CSS custom properties
 * Returns a complete CSS string with all design tokens as custom properties
 */
export function generateAllCSSCustomProperties(): string {
  const colorCSS = generateColorCSS();
  const typographyCSS = generateTypographyCSS();
  const shadowCSS = generateShadowCSS();

  // Merge all :root blocks
  const allProperties = [
    colorCSS.replace(':root {', '').replace(/}\s*$/, ''),
    typographyCSS.replace(':root {', '').replace(/}\s*$/, ''),
    shadowCSS.replace(':root {', '').replace(/}\s*$/, ''),
  ].join('\n');

  return `:root {\n${allProperties}\n}`;
}

/**
 * Generate CSS custom properties as a style element
 * Useful for injecting into Web Components shadow DOM
 */
export function createStyleElement(): HTMLStyleElement {
  const style = document.createElement('style');
  style.textContent = generateAllCSSCustomProperties();
  return style;
}

export default parsedTokens;
