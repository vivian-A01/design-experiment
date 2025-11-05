/**
 * Polaris Design Tokens - Breakpoints
 *
 * Responsive breakpoint tokens for media queries.
 * Based on Shopify Polaris Design System breakpoints.
 *
 * @see https://polaris.shopify.com/design/breakpoints
 */

/**
 * Breakpoint values in pixels
 */
export const breakpointValues = {
  /** 0px - Extra small devices (phones) */
  xs: 0,

  /** 490px - Small devices (small tablets) */
  sm: 490,

  /** 768px - Medium devices (tablets) */
  md: 768,

  /** 1040px - Large devices (desktops) */
  lg: 1040,

  /** 1440px - Extra large devices (large desktops) */
  xl: 1440,
} as const;

/**
 * Breakpoint media queries
 */
export const breakpoints = {
  /** Extra small and up (0px+) */
  xs: `@media (min-width: ${breakpointValues.xs}px)`,

  /** Small and up (490px+) */
  sm: `@media (min-width: ${breakpointValues.sm}px)`,

  /** Medium and up (768px+) */
  md: `@media (min-width: ${breakpointValues.md}px)`,

  /** Large and up (1040px+) */
  lg: `@media (min-width: ${breakpointValues.lg}px)`,

  /** Extra large and up (1440px+) */
  xl: `@media (min-width: ${breakpointValues.xl}px)`,

  /** Only extra small (0-489px) */
  xsOnly: `@media (max-width: ${breakpointValues.sm - 1}px)`,

  /** Only small (490-767px) */
  smOnly: `@media (min-width: ${breakpointValues.sm}px) and (max-width: ${
    breakpointValues.md - 1
  }px)`,

  /** Only medium (768-1039px) */
  mdOnly: `@media (min-width: ${breakpointValues.md}px) and (max-width: ${
    breakpointValues.lg - 1
  }px)`,

  /** Only large (1040-1439px) */
  lgOnly: `@media (min-width: ${breakpointValues.lg}px) and (max-width: ${
    breakpointValues.xl - 1
  }px)`,

  /** Only extra large (1440px+) */
  xlOnly: `@media (min-width: ${breakpointValues.xl}px)`,

  /** Down from small (<490px) */
  smDown: `@media (max-width: ${breakpointValues.sm - 1}px)`,

  /** Down from medium (<768px) */
  mdDown: `@media (max-width: ${breakpointValues.md - 1}px)`,

  /** Down from large (<1040px) */
  lgDown: `@media (max-width: ${breakpointValues.lg - 1}px)`,

  /** Down from extra large (<1440px) */
  xlDown: `@media (max-width: ${breakpointValues.xl - 1}px)`,
} as const;

/**
 * Utility function to create custom media queries
 */
export const createMediaQuery = (minWidth: number, maxWidth?: number): string => {
  if (maxWidth) {
    return `@media (min-width: ${minWidth}px) and (max-width: ${maxWidth}px)`;
  }
  return `@media (min-width: ${minWidth}px)`;
};

/**
 * Container max widths at different breakpoints
 */
export const containerMaxWidth = {
  sm: `${breakpointValues.sm}px`,
  md: `${breakpointValues.md}px`,
  lg: `${breakpointValues.lg}px`,
  xl: `${breakpointValues.xl}px`,
} as const;

export type Breakpoint = keyof typeof breakpointValues;
export type BreakpointQuery = keyof typeof breakpoints;
