/**
 * Polaris Design Tokens - Shadows (Figma Pipeline)
 *
 * This file imports raw shadow tokens from Figma JSON exports and transforms them
 * into normalized CSS box-shadow strings for use in stylesheets.
 *
 * Pipeline: Figma JSON → box-shadow CSS generation → Semantic Mapping → Frozen TypeScript Object
 */

import figmaShadows from '../../tokens/shadows.figma.json';
import tokenAliases from '../../mapping/token-alias.json';

/**
 * Shadow definition from Figma
 */
interface FigmaShadow {
  inset?: boolean;
  x: string;
  y: string;
  blur: string;
  spread: string;
  color: string;
}

/**
 * Convert Figma shadow object to CSS box-shadow string
 * @param shadow - Figma shadow definition
 */
function shadowToCss(shadow: FigmaShadow | string): string {
  if (typeof shadow === 'string') {
    return shadow; // Already a CSS string (e.g., "none")
  }

  const inset = shadow.inset ? 'inset ' : '';
  const x = `${shadow.x}px`;
  const y = `${shadow.y}px`;
  const blur = `${shadow.blur}px`;
  const spread = `${shadow.spread}px`;
  const color = shadow.color;

  return `${inset}${x} ${y} ${blur} ${spread} ${color}`.trim();
}

/**
 * Normalize Figma shadow tokens to CSS box-shadow strings
 */
function normalizeShadows(
  figmaShadows: Record<string, FigmaShadow | string>
): Record<string, string> {
  const normalized: Record<string, string> = {};

  for (const [key, value] of Object.entries(figmaShadows)) {
    normalized[key] = shadowToCss(value);
  }

  return normalized;
}

/**
 * Apply semantic aliases from mapping file
 */
function applyAliases(
  normalizedShadows: Record<string, string>,
  aliases: Record<string, string>
): Record<string, string> {
  const aliased: Record<string, string> = {};

  for (const [figmaKey, semanticName] of Object.entries(aliases)) {
    if (normalizedShadows[figmaKey]) {
      aliased[semanticName] = normalizedShadows[figmaKey];
    }
  }

  return aliased;
}

// Process shadows through the pipeline
const normalizedShadows = normalizeShadows(figmaShadows.shadows);
const shadowAliases = tokenAliases.aliases.shadows;
const semanticShadows = applyAliases(normalizedShadows, shadowAliases);

/**
 * Shadow elevation levels
 */
export const shadow = {
  /** No shadow */
  none: normalizedShadows['figma/shadow/none'] || 'none',

  /** Extra small shadow - Subtle elevation */
  xs: semanticShadows.shadowXs || normalizedShadows['figma/shadow/xs'] || '0px 1px 0px 0px rgba(0, 0, 0, 0.05)',

  /** Small shadow - Cards at rest */
  sm: semanticShadows.shadowSm || normalizedShadows['figma/shadow/sm'] || '0px 1px 3px 0px rgba(0, 0, 0, 0.1)',

  /** Medium shadow - Elevated cards */
  md: semanticShadows.shadowMd || normalizedShadows['figma/shadow/md'] || '0px 4px 6px -1px rgba(0, 0, 0, 0.1)',

  /** Large shadow - Modals and popovers */
  lg: semanticShadows.shadowLg || normalizedShadows['figma/shadow/lg'] || '0px 10px 15px -3px rgba(0, 0, 0, 0.1)',
} as const;

/**
 * Button-specific shadow tokens
 */
export const shadowButton = {
  /** Button default state */
  default: semanticShadows.shadowButton || normalizedShadows['figma/shadow/button-default'] || 'inset 0px -1px 0px 0px rgba(0, 0, 0, 0.2)',

  /** Button hover state */
  hover: 'inset 0px -1px 0px 0px rgba(0, 0, 0, 0.3)',

  /** Button pressed state */
  pressed: 'inset 0px 1px 1px 0px rgba(0, 0, 0, 0.1)',
} as const;

/**
 * Focus ring shadows for accessibility
 */
export const shadowFocus = {
  /** Default focus ring */
  default: '0 0 0 3px rgba(1, 113, 233, 0.35)',

  /** Critical focus ring */
  critical: '0 0 0 3px rgba(224, 26, 26, 0.35)',

  /** Success focus ring */
  success: '0 0 0 3px rgba(17, 131, 124, 0.35)',
} as const;

/**
 * Semantic shadow mappings for common use cases
 */
export const shadows = {
  /** Card elevation */
  card: shadow.sm,

  /** Card hovered state */
  cardHovered: shadow.md,

  /** Popover and dropdown */
  popover: shadow.lg,

  /** Modal and dialog */
  modal: shadow.lg,

  /** Button default */
  button: shadowButton.default,

  /** Button hovered */
  buttonHovered: shadowButton.hover,

  /** Button pressed */
  buttonPressed: shadowButton.pressed,

  /** Focus ring */
  focus: shadowFocus.default,

  /** Focus ring critical */
  focusCritical: shadowFocus.critical,
} as const;

/**
 * Figma-sourced shadow tokens
 */
export const figmaShadowTokens = {
  shadow,
  shadowButton,
  shadowFocus,
  shadows,
} as const;

export type Shadow = keyof typeof shadow;
export type ShadowButton = keyof typeof shadowButton;
export type ShadowFocus = keyof typeof shadowFocus;
export type ShadowSemantic = keyof typeof shadows;
