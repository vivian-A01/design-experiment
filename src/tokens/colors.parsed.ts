/**
 * Parsed Color Tokens
 *
 * Simplified color tokens parsed from Figma exports.
 * These tokens use dash-case naming for consistency with Web Components
 * and can be directly used in CSS custom properties.
 *
 * Source: /tokens/colors.figma.json → /tokens/colors.json
 */

import colorTokens from '../../tokens/colors.json';

export const tokens = {
  // Gray scale
  'color-gray-50': colorTokens['color-gray-50'],
  'color-gray-100': colorTokens['color-gray-100'],
  'color-gray-300': colorTokens['color-gray-300'],
  'color-gray-500': colorTokens['color-gray-500'],
  'color-gray-700': colorTokens['color-gray-700'],
  'color-gray-900': colorTokens['color-gray-900'],

  // Blue scale
  'color-blue-100': colorTokens['color-blue-100'],
  'color-blue-500': colorTokens['color-blue-500'],
  'color-blue-700': colorTokens['color-blue-700'],

  // Green scale
  'color-green-100': colorTokens['color-green-100'],
  'color-green-500': colorTokens['color-green-500'],
  'color-green-700': colorTokens['color-green-700'],

  // Red scale
  'color-red-100': colorTokens['color-red-100'],
  'color-red-500': colorTokens['color-red-500'],
  'color-red-700': colorTokens['color-red-700'],

  // Yellow scale
  'color-yellow-100': colorTokens['color-yellow-100'],
  'color-yellow-300': colorTokens['color-yellow-300'],
  'color-yellow-500': colorTokens['color-yellow-500'],

  // Semantic colors
  'color-bg-primary': colorTokens['color-bg-primary'],
  'color-bg-subdued': colorTokens['color-bg-subdued'],
  'color-border': colorTokens['color-border'],
  'color-text-primary': colorTokens['color-text-primary'],
  'color-text-secondary': colorTokens['color-text-secondary'],
  'color-text-disabled': colorTokens['color-text-disabled'],
  'color-text-interactive': colorTokens['color-text-interactive'],
  'color-text-success': colorTokens['color-text-success'],
  'color-text-critical': colorTokens['color-text-critical'],
  'color-text-warning': colorTokens['color-text-warning'],
} as const;

/**
 * Generate CSS custom properties from color tokens
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
export type ColorToken = keyof typeof tokens;

/**
 * Get token value by key
 */
export function getToken(key: ColorToken): string {
  return tokens[key];
}

export default tokens;
