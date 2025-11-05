/**
 * Parsed Shadow Tokens
 *
 * Simplified shadow tokens parsed from Figma exports.
 * These tokens use dash-case naming for consistency with Web Components
 * and can be directly used in CSS custom properties.
 *
 * Source: /tokens/shadows.figma.json → /tokens/shadows.json
 */

import shadowTokens from '../../tokens/shadows.json';

export const tokens = {
  // Elevation shadows
  'shadow-none': shadowTokens['shadow-none'],
  'shadow-xs': shadowTokens['shadow-xs'],
  'shadow-sm': shadowTokens['shadow-sm'],
  'shadow-md': shadowTokens['shadow-md'],
  'shadow-lg': shadowTokens['shadow-lg'],

  // Button shadows
  'shadow-button-default': shadowTokens['shadow-button-default'],

  // Semantic shadows
  'shadow-card': shadowTokens['shadow-card'],
  'shadow-card-hovered': shadowTokens['shadow-card-hovered'],
  'shadow-popover': shadowTokens['shadow-popover'],
  'shadow-modal': shadowTokens['shadow-modal'],

  // Focus shadows
  'shadow-focus': shadowTokens['shadow-focus'],
  'shadow-focus-critical': shadowTokens['shadow-focus-critical'],
} as const;

/**
 * Generate CSS custom properties from shadow tokens
 * Usage: Insert into a <style> tag or stylesheet
 */
export function generateCSSCustomProperties(): string {
  const properties = Object.entries(tokens)
    .map(([key, value]) => `  --${key}: ${value};`)
    .join('\n');

  return `:root {\n${properties}\n}`;
}

/**
 * Type-safe token accessor
 */
export type ShadowToken = keyof typeof tokens;

/**
 * Get token value by key
 */
export function getToken(key: ShadowToken): string {
  return tokens[key];
}

export default tokens;
