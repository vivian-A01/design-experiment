/**
 * Polaris Design Tokens - Typography (Figma Pipeline)
 *
 * This file imports raw typography tokens from Figma JSON exports and transforms them
 * into normalized formats with pixel values converted to rem units for scalability.
 *
 * Pipeline: Figma JSON → px to rem conversion → Semantic Mapping → Frozen TypeScript Object
 */

import figmaTypography from '../../tokens/typography.figma.json';
import tokenAliases from '../../mapping/token-alias.json';

/**
 * Convert pixel value to rem units
 * @param px - Pixel value as number or string
 * @param baseFontSize - Base font size in pixels (default: 16)
 */
function pxToRem(px: number | string, baseFontSize: number = 16): string {
  const pxValue = typeof px === 'string' ? parseFloat(px) : px;
  const remValue = pxValue / baseFontSize;
  return `${remValue}rem`;
}

/**
 * Normalize font sizes from Figma (px values) to rem
 */
function normalizeFontSizes(figmaSizes: Record<string, string>): Record<string, string> {
  const normalized: Record<string, string> = {};

  for (const [key, value] of Object.entries(figmaSizes)) {
    normalized[key] = pxToRem(value);
  }

  return normalized;
}

/**
 * Normalize line heights from Figma (px values) to rem
 */
function normalizeLineHeights(figmaHeights: Record<string, string>): Record<string, string> {
  const normalized: Record<string, string> = {};

  for (const [key, value] of Object.entries(figmaHeights)) {
    normalized[key] = pxToRem(value);
  }

  return normalized;
}

/**
 * Apply semantic aliases from mapping file
 */
function applyAliases(
  normalizedTokens: Record<string, string>,
  aliases: Record<string, string>
): Record<string, string> {
  const aliased: Record<string, string> = {};

  for (const [figmaKey, semanticName] of Object.entries(aliases)) {
    if (normalizedTokens[figmaKey]) {
      aliased[semanticName] = normalizedTokens[figmaKey];
    }
  }

  return aliased;
}

// Process typography through the pipeline
const normalizedFontSizes = normalizeFontSizes(figmaTypography.typography.fontSize);
const normalizedLineHeights = normalizeLineHeights(figmaTypography.typography.lineHeight);
const typographyAliases = tokenAliases.aliases.typography;
const semanticFontSizes = applyAliases(normalizedFontSizes, typographyAliases);

/**
 * Font family tokens
 */
export const fontFamily = {
  sans: figmaTypography.typography.fontFamily['figma/font/sans'],
  mono: figmaTypography.typography.fontFamily['figma/font/mono'],
} as const;

/**
 * Font size tokens (normalized to rem)
 */
export const fontSize = {
  100: semanticFontSizes.fontSize100 || '0.75rem',    // 12px
  200: semanticFontSizes.fontSize200 || '0.8125rem',  // 13px
  300: semanticFontSizes.fontSize300 || '0.875rem',   // 14px
  400: semanticFontSizes.fontSize400 || '1rem',       // 16px
  600: semanticFontSizes.fontSize600 || '1.25rem',    // 20px
  700: semanticFontSizes.fontSize700 || '1.5rem',     // 24px
  900: semanticFontSizes.fontSize900 || '2rem',       // 32px
} as const;

/**
 * Font weight tokens
 */
export const fontWeight = {
  regular: figmaTypography.typography.fontWeight['figma/weight/regular'],
  medium: figmaTypography.typography.fontWeight['figma/weight/medium'],
  semibold: figmaTypography.typography.fontWeight['figma/weight/semibold'],
  bold: figmaTypography.typography.fontWeight['figma/weight/bold'],
} as const;

/**
 * Line height tokens (normalized to rem)
 */
export const lineHeight = {
  tight: normalizedLineHeights['figma/leading/tight'] || '1rem',      // 16px
  normal: normalizedLineHeights['figma/leading/normal'] || '1.25rem', // 20px
  relaxed: normalizedLineHeights['figma/leading/relaxed'] || '1.5rem', // 24px
  loose: normalizedLineHeights['figma/leading/loose'] || '2rem',      // 32px
} as const;

/**
 * Semantic typography styles for common use cases
 */
export const typography = {
  headingLg: {
    fontFamily: fontFamily.sans,
    fontSize: fontSize[700],
    fontWeight: fontWeight.bold,
    lineHeight: lineHeight.loose,
  },
  headingMd: {
    fontFamily: fontFamily.sans,
    fontSize: fontSize[600],
    fontWeight: fontWeight.semibold,
    lineHeight: lineHeight.relaxed,
  },
  headingSm: {
    fontFamily: fontFamily.sans,
    fontSize: fontSize[400],
    fontWeight: fontWeight.semibold,
    lineHeight: lineHeight.normal,
  },
  bodyLg: {
    fontFamily: fontFamily.sans,
    fontSize: fontSize[400],
    fontWeight: fontWeight.regular,
    lineHeight: lineHeight.relaxed,
  },
  bodyMd: {
    fontFamily: fontFamily.sans,
    fontSize: fontSize[300],
    fontWeight: fontWeight.regular,
    lineHeight: lineHeight.normal,
  },
  bodySm: {
    fontFamily: fontFamily.sans,
    fontSize: fontSize[200],
    fontWeight: fontWeight.regular,
    lineHeight: lineHeight.normal,
  },
  caption: {
    fontFamily: fontFamily.sans,
    fontSize: fontSize[100],
    fontWeight: fontWeight.regular,
    lineHeight: lineHeight.tight,
  },
} as const;

/**
 * Figma-sourced typography tokens
 */
export const figmaTypographyTokens = {
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  typography,
} as const;

export type FontFamily = keyof typeof fontFamily;
export type FontSize = keyof typeof fontSize;
export type FontWeight = keyof typeof fontWeight;
export type LineHeight = keyof typeof lineHeight;
export type TypographyStyle = keyof typeof typography;
