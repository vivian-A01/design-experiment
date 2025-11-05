/**
 * Parsed Typography Tokens
 *
 * Simplified typography tokens parsed from Figma exports.
 * These tokens use dash-case naming for consistency with Web Components
 * and can be directly used in CSS custom properties.
 *
 * Source: /tokens/typography.figma.json → /tokens/typography.json
 */

import typographyTokens from '../../tokens/typography.json';

export const tokens = {
  // Font families
  'font-family-sans': typographyTokens['font-family-sans'],
  'font-family-mono': typographyTokens['font-family-mono'],

  // Font sizes
  'font-size-xs': typographyTokens['font-size-xs'],
  'font-size-sm': typographyTokens['font-size-sm'],
  'font-size-base': typographyTokens['font-size-base'],
  'font-size-lg': typographyTokens['font-size-lg'],
  'font-size-xl': typographyTokens['font-size-xl'],
  'font-size-2xl': typographyTokens['font-size-2xl'],
  'font-size-3xl': typographyTokens['font-size-3xl'],

  // Font weights
  'font-weight-regular': typographyTokens['font-weight-regular'],
  'font-weight-medium': typographyTokens['font-weight-medium'],
  'font-weight-semibold': typographyTokens['font-weight-semibold'],
  'font-weight-bold': typographyTokens['font-weight-bold'],

  // Line heights
  'line-height-tight': typographyTokens['line-height-tight'],
  'line-height-normal': typographyTokens['line-height-normal'],
  'line-height-relaxed': typographyTokens['line-height-relaxed'],
  'line-height-loose': typographyTokens['line-height-loose'],

  // Semantic typography styles
  'font-heading-xl': typographyTokens['font-heading-xl'],
  'font-heading-lg': typographyTokens['font-heading-lg'],
  'font-heading-md': typographyTokens['font-heading-md'],
  'font-heading-sm': typographyTokens['font-heading-sm'],
  'font-body-lg': typographyTokens['font-body-lg'],
  'font-body-md': typographyTokens['font-body-md'],
  'font-body-sm': typographyTokens['font-body-sm'],
  'font-caption': typographyTokens['font-caption'],
} as const;

/**
 * Typography style interface for semantic styles
 */
export interface TypographyStyle {
  fontFamily: string;
  fontSize: string;
  fontWeight: string;
  lineHeight: string;
}

/**
 * Generate CSS custom properties from typography tokens
 * Usage: Insert into a <style> tag or stylesheet
 */
export function generateCSSCustomProperties(): string {
  const primitiveTokens = Object.entries(tokens).filter(
    ([key]) => !key.startsWith('font-heading') && !key.startsWith('font-body') && !key.startsWith('font-caption')
  );

  const properties = primitiveTokens
    .map(([key, value]) => `  --${key}: ${value};`)
    .join('\n');

  return `:root {\n${properties}\n}`;
}

/**
 * Type-safe token accessor
 */
export type TypographyToken = keyof typeof tokens;

/**
 * Get token value by key
 */
export function getToken(key: TypographyToken): string | TypographyStyle {
  return tokens[key];
}

/**
 * Apply typography style to an element
 */
export function applyTypographyStyle(style: TypographyStyle): React.CSSProperties {
  return {
    fontFamily: style.fontFamily,
    fontSize: style.fontSize,
    fontWeight: style.fontWeight,
    lineHeight: style.lineHeight,
  };
}

export default tokens;
