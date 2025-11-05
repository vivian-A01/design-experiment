/**
 * Polaris Design Tokens - Shadows
 *
 * Shadow tokens for elevation and depth effects.
 * Based on Shopify Polaris Design System shadow tokens.
 *
 * @see https://polaris.shopify.com/design/depth
 */

/**
 * Shadow elevation levels
 */
export const shadow = {
  /** No shadow */
  none: 'none',

  /** Extra small shadow - Subtle elevation */
  xs: '0 1px 0 rgba(0, 0, 0, 0.05)',

  /** Small shadow - Cards at rest */
  sm: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',

  /** Medium shadow - Elevated cards */
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',

  /** Large shadow - Modals and popovers */
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',

  /** Extra large shadow - Drawers and overlays */
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',

  /** 2X large shadow - Maximum elevation */
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
} as const;

/**
 * Inner shadow tokens for inset effects
 */
export const shadowInner = {
  /** No inner shadow */
  none: 'none',

  /** Small inner shadow */
  sm: 'inset 0 1px 2px 0 rgba(0, 0, 0, 0.05)',

  /** Medium inner shadow - Button pressed state */
  md: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
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
 * Button-specific shadow tokens
 */
export const shadowButton = {
  /** Button default state */
  default: 'inset 0 -1px 0 0 rgba(0, 0, 0, 0.2)',

  /** Button hover state */
  hover: 'inset 0 -1px 0 0 rgba(0, 0, 0, 0.3)',

  /** Button pressed state */
  pressed: 'inset 0 1px 1px 0 rgba(0, 0, 0, 0.1)',

  /** Primary button default */
  primary: 'inset 0 -1px 0 0 rgba(0, 0, 0, 0.15)',

  /** Primary button hover */
  primaryHover: 'inset 0 -1px 0 0 rgba(0, 0, 0, 0.25)',

  /** Primary button pressed */
  primaryPressed: 'inset 0 1px 1px 0 rgba(0, 0, 0, 0.1)',
} as const;

/**
 * Semantic shadow mappings
 */
export const shadows = {
  /** Card elevation */
  card: shadow.sm,

  /** Card hovered state */
  cardHovered: shadow.md,

  /** Popover and dropdown */
  popover: shadow.lg,

  /** Modal and dialog */
  modal: shadow.xl,

  /** Top bar */
  topBar: shadow.sm,

  /** Navigation */
  navigation: shadow.md,

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

export type Shadow = keyof typeof shadow;
export type ShadowInner = keyof typeof shadowInner;
export type ShadowFocus = keyof typeof shadowFocus;
export type ShadowButton = keyof typeof shadowButton;
export type ShadowSemantic = keyof typeof shadows;
