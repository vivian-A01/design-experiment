/**
 * Polaris Design Tokens - Typography
 *
 * Typography scale including font families, sizes, weights, and line heights.
 * Based on Shopify Polaris Design System typography tokens.
 *
 * @see https://polaris.shopify.com/design/typography
 */

/**
 * Font family tokens
 */
export const fontFamily = {
  /** Primary sans-serif font stack */
  sans: "-apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",

  /** Monospace font stack for code */
  mono: "ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace",
} as const;

/**
 * Font size scale
 */
export const fontSize = {
  /** 11px - Extra small text */
  '075': '0.6875rem',

  /** 12px - Small text, captions */
  '100': '0.75rem',

  /** 13px - Default body text */
  '200': '0.8125rem',

  /** 14px - Medium body text */
  '300': '0.875rem',

  /** 16px - Large body text */
  '400': '1rem',

  /** 18px - Small headings */
  '500': '1.125rem',

  /** 20px - Medium headings */
  '600': '1.25rem',

  /** 24px - Large headings */
  '700': '1.5rem',

  /** 28px - Extra large headings */
  '800': '1.75rem',

  /** 32px - Display text */
  '900': '2rem',

  /** 36px - Large display */
  '1000': '2.25rem',

  /** 40px - Extra large display */
  '1100': '2.5rem',

  /** 44px - Maximum display */
  '1200': '2.75rem',
} as const;

/**
 * Font weight tokens
 */
export const fontWeight = {
  /** 400 - Regular text */
  regular: '400',

  /** 500 - Medium emphasis */
  medium: '500',

  /** 600 - Semi-bold, for strong emphasis */
  semibold: '600',

  /** 700 - Bold, for headings */
  bold: '700',
} as const;

/**
 * Line height tokens
 */
export const lineHeight = {
  /** 16px - Tight line height */
  '100': '1rem',

  /** 20px - Default line height */
  '200': '1.25rem',

  /** 24px - Medium line height */
  '300': '1.5rem',

  /** 28px - Large line height */
  '400': '1.75rem',

  /** 32px - Extra large line height */
  '500': '2rem',

  /** 40px - Display line height */
  '600': '2.5rem',

  /** 48px - Large display line height */
  '700': '3rem',

  /** 56px - Maximum line height */
  '800': '3.5rem',
} as const;

/**
 * Letter spacing tokens
 */
export const letterSpacing = {
  /** Tighter tracking */
  tighter: '-0.01em',

  /** Normal tracking */
  normal: '0',

  /** Wider tracking */
  wider: '0.01em',

  /** Widest tracking for all caps */
  widest: '0.05em',
} as const;

/**
 * Semantic typography styles for common use cases
 */
export const typography = {
  /** Headings */
  headingXl: {
    fontFamily: fontFamily.sans,
    fontSize: fontSize['900'],
    fontWeight: fontWeight.bold,
    lineHeight: lineHeight['600'],
  },
  headingLg: {
    fontFamily: fontFamily.sans,
    fontSize: fontSize['700'],
    fontWeight: fontWeight.bold,
    lineHeight: lineHeight['500'],
  },
  headingMd: {
    fontFamily: fontFamily.sans,
    fontSize: fontSize['500'],
    fontWeight: fontWeight.semibold,
    lineHeight: lineHeight['400'],
  },
  headingSm: {
    fontFamily: fontFamily.sans,
    fontSize: fontSize['300'],
    fontWeight: fontWeight.semibold,
    lineHeight: lineHeight['300'],
  },

  /** Body text */
  bodyLg: {
    fontFamily: fontFamily.sans,
    fontSize: fontSize['400'],
    fontWeight: fontWeight.regular,
    lineHeight: lineHeight['300'],
  },
  bodyMd: {
    fontFamily: fontFamily.sans,
    fontSize: fontSize['300'],
    fontWeight: fontWeight.regular,
    lineHeight: lineHeight['300'],
  },
  bodySm: {
    fontFamily: fontFamily.sans,
    fontSize: fontSize['200'],
    fontWeight: fontWeight.regular,
    lineHeight: lineHeight['200'],
  },

  /** Caption and labels */
  caption: {
    fontFamily: fontFamily.sans,
    fontSize: fontSize['100'],
    fontWeight: fontWeight.regular,
    lineHeight: lineHeight['200'],
  },

  /** Code and monospace */
  code: {
    fontFamily: fontFamily.mono,
    fontSize: fontSize['200'],
    fontWeight: fontWeight.regular,
    lineHeight: lineHeight['300'],
  },
} as const;

export type FontFamily = keyof typeof fontFamily;
export type FontSize = keyof typeof fontSize;
export type FontWeight = keyof typeof fontWeight;
export type LineHeight = keyof typeof lineHeight;
export type LetterSpacing = keyof typeof letterSpacing;
export type TypographyStyle = keyof typeof typography;
