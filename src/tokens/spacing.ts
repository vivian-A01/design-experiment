/**
 * Polaris Design Tokens - Spacing
 *
 * Spacing scale for consistent layouts and component spacing.
 * Based on Shopify Polaris Design System spacing tokens.
 *
 * @see https://polaris.shopify.com/design/spacing
 */

/**
 * Spacing scale in pixels
 * Used for margins, padding, gaps, and other spacing needs
 */
export const spacing = {
  /** 0px - No spacing */
  none: '0',

  /** 2px - Smallest spacing, rarely used */
  '025': '0.125rem',

  /** 4px - Extra small spacing for tight layouts */
  '050': '0.25rem',

  /** 8px - Small spacing, common for compact UIs */
  '100': '0.5rem',

  /** 12px - Default spacing for many components */
  '150': '0.75rem',

  /** 16px - Base spacing unit */
  '200': '1rem',

  /** 20px - Medium spacing */
  '300': '1.25rem',

  /** 24px - Large spacing */
  '400': '1.5rem',

  /** 28px - Extra large spacing */
  '500': '1.75rem',

  /** 32px - Extra extra large spacing */
  '600': '2rem',

  /** 40px - Significant spacing */
  '800': '2.5rem',

  /** 48px - Very large spacing */
  '1000': '3rem',

  /** 64px - Extra large spacing for major sections */
  '1200': '4rem',

  /** 80px - Maximum spacing */
  '1600': '5rem',

  /** 128px - Exceptional large spacing */
  '2000': '8rem',
} as const;

/**
 * Semantic spacing tokens for specific use cases
 */
export const spacingSemantic = {
  /** Spacing between related elements */
  tight: spacing['100'],

  /** Default spacing between elements */
  base: spacing['200'],

  /** Spacing between loosely related elements */
  loose: spacing['400'],

  /** Spacing between major sections */
  extraLoose: spacing['800'],
} as const;

/**
 * Gap tokens for flexbox and grid layouts
 */
export const gap = {
  /** No gap */
  none: spacing.none,

  /** Extra small gap (4px) */
  xs: spacing['050'],

  /** Small gap (8px) */
  sm: spacing['100'],

  /** Medium gap (16px) */
  md: spacing['200'],

  /** Large gap (24px) */
  lg: spacing['400'],

  /** Extra large gap (32px) */
  xl: spacing['600'],

  /** Extra extra large gap (48px) */
  xxl: spacing['1000'],
} as const;

/**
 * Inset tokens for padding
 */
export const inset = {
  /** No padding */
  none: spacing.none,

  /** Extra small padding (4px) */
  xs: spacing['050'],

  /** Small padding (8px) */
  sm: spacing['100'],

  /** Medium padding (16px) */
  md: spacing['200'],

  /** Large padding (24px) */
  lg: spacing['400'],

  /** Extra large padding (32px) */
  xl: spacing['600'],
} as const;

export type SpacingToken = keyof typeof spacing;
export type SpacingSemanticToken = keyof typeof spacingSemantic;
export type GapToken = keyof typeof gap;
export type InsetToken = keyof typeof inset;
