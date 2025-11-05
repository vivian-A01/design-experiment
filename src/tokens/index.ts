/**
 * Polaris Design Tokens
 *
 * Central export point for all design tokens including colors, spacing,
 * typography, shadows, motion, and breakpoints.
 *
 * This module exports BOTH:
 * 1. Phase 1 hardcoded Polaris tokens (default exports)
 * 2. Figma pipeline tokens (import from 'tokens/figma' or use figmaTokens export)
 *
 * @example
 * ```tsx
 * // Use Phase 1 hardcoded tokens
 * import { colors, spacing, typography } from '@your-org/polaris-design-library/tokens';
 *
 * const primaryColor = colors.blue[500];
 * const padding = spacing.base;
 * const headingStyle = typography.headingLg;
 *
 * // Use Figma pipeline tokens
 * import { figmaTokens } from '@your-org/polaris-design-library/tokens';
 * // OR
 * import * as figma from '@your-org/polaris-design-library/tokens/figma';
 *
 * const interactiveColor = figmaTokens.colors.interactive;
 * const headingStyle = figma.typography.headingLg;
 * ```
 */

// Colors
export {
  colors,
  gray,
  blue,
  green,
  yellow,
  orange,
  red,
  purple,
  azure,
  semantic,
} from './colors';
export type {
  ColorScale,
  GrayShade,
  BlueShade,
  ColorToken,
} from './colors';

// Spacing
export {
  spacing,
  spacingSemantic,
  gap,
  inset,
} from './spacing';
export type {
  SpacingToken,
  SpacingSemanticToken,
  GapToken,
  InsetToken,
} from './spacing';

// Typography
export {
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing,
  typography,
} from './typography';
export type {
  FontFamily,
  FontSize,
  FontWeight,
  LineHeight,
  LetterSpacing,
  TypographyStyle,
} from './typography';

// Shadows
export {
  shadow,
  shadowInner,
  shadowFocus,
  shadowButton,
  shadows,
} from './shadows';
export type {
  Shadow,
  ShadowInner,
  ShadowFocus,
  ShadowButton,
  ShadowSemantic,
} from './shadows';

// Motion
export {
  duration,
  easing,
  motion,
  keyframes,
} from './motion';
export type {
  Duration,
  Easing,
  Motion,
  Keyframe,
} from './motion';

// Breakpoints
export {
  breakpointValues,
  breakpoints,
  containerMaxWidth,
  createMediaQuery,
} from './breakpoints';
export type {
  Breakpoint,
  BreakpointQuery,
} from './breakpoints';

// Import all for tokens object
import { colors } from './colors';
import { spacing, spacingSemantic, gap, inset } from './spacing';
import { fontFamily, fontSize, fontWeight, lineHeight, letterSpacing, typography } from './typography';
import { shadow, shadowInner, shadowFocus, shadowButton, shadows } from './shadows';
import { duration, easing, motion, keyframes } from './motion';
import { breakpointValues, breakpoints, containerMaxWidth } from './breakpoints';

/**
 * All design tokens in a single object
 */
export const tokens = {
  colors,
  spacing,
  spacingSemantic,
  gap,
  inset,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing,
  typography,
  shadow,
  shadowInner,
  shadowFocus,
  shadowButton,
  shadows,
  duration,
  easing,
  motion,
  keyframes,
  breakpointValues,
  breakpoints,
  containerMaxWidth,
} as const;

// Figma Pipeline Tokens
export { figmaTokens, rawFigmaTokens } from './index.figma';
export type {
  ColorToken as FigmaColorToken,
  FontFamily as FigmaFontFamily,
  FontSize as FigmaFontSize,
  FontWeight as FigmaFontWeight,
  LineHeight as FigmaLineHeight,
  TypographyStyle as FigmaTypographyStyle,
  Shadow as FigmaShadow,
  ShadowButton as FigmaShadowButton,
  ShadowFocus as FigmaShadowFocus,
  ShadowSemantic as FigmaShadowSemantic,
} from './index.figma';
