/**
 * Polaris Design Tokens - Figma Pipeline
 *
 * Central export point for all Figma-sourced design tokens.
 * This module provides tokens generated from Figma JSON exports with proper
 * normalization and semantic aliasing.
 *
 * @example
 * ```tsx
 * import { colors, typography, shadows } from '@your-org/polaris-design-library/tokens/figma';
 *
 * // Use Figma-sourced color tokens
 * const primaryColor = colors.interactive;
 *
 * // Use Figma-sourced typography tokens
 * const headingStyle = typography.headingLg;
 *
 * // Use Figma-sourced shadow tokens
 * const cardShadow = shadows.card;
 * ```
 */

// Colors (Figma Pipeline)
export {
  colors,
  figmaColorTokens,
} from './colors.figma';
export type {
  ColorToken,
} from './colors.figma';

// Typography (Figma Pipeline)
export {
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  typography,
  figmaTypographyTokens,
} from './typography.figma';
export type {
  FontFamily,
  FontSize,
  FontWeight,
  LineHeight,
  TypographyStyle,
} from './typography.figma';

// Shadows (Figma Pipeline)
export {
  shadow,
  shadowButton,
  shadowFocus,
  shadows,
  figmaShadowTokens,
} from './shadows.figma';
export type {
  Shadow,
  ShadowButton,
  ShadowFocus,
  ShadowSemantic,
} from './shadows.figma';

// Import all for unified tokens object
import { colors, figmaColorTokens } from './colors.figma';
import { fontFamily, fontSize, fontWeight, lineHeight, typography, figmaTypographyTokens } from './typography.figma';
import { shadow, shadowButton, shadowFocus, shadows, figmaShadowTokens } from './shadows.figma';

/**
 * All Figma-sourced design tokens in a single object
 */
export const figmaTokens = {
  colors,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  typography,
  shadow,
  shadowButton,
  shadowFocus,
  shadows,
} as const;

/**
 * Raw Figma token collections (including transformation metadata)
 */
export const rawFigmaTokens = {
  colors: figmaColorTokens,
  typography: figmaTypographyTokens,
  shadows: figmaShadowTokens,
} as const;
