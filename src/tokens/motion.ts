/**
 * Polaris Design Tokens - Motion
 *
 * Animation and transition timing tokens.
 * Based on Shopify Polaris Design System motion tokens.
 *
 * @see https://polaris.shopify.com/design/motion
 */

/**
 * Duration tokens for animations and transitions
 */
export const duration = {
  /** 0ms - Instant, no transition */
  instant: '0ms',

  /** 50ms - Extra fast, micro-interactions */
  '50': '50ms',

  /** 100ms - Fast, quick feedback */
  '100': '100ms',

  /** 150ms - Default duration for most transitions */
  '150': '150ms',

  /** 200ms - Medium duration */
  '200': '200ms',

  /** 250ms - Slightly slower */
  '250': '250ms',

  /** 300ms - Slow, for complex animations */
  '300': '300ms',

  /** 400ms - Very slow */
  '400': '400ms',

  /** 500ms - Extra slow, for major transitions */
  '500': '500ms',
} as const;

/**
 * Easing function tokens
 */
export const easing = {
  /** Linear easing - Constant speed */
  linear: 'linear',

  /** Ease - Default easing */
  ease: 'ease',

  /** Ease in - Slow start */
  easeIn: 'cubic-bezier(0.42, 0, 1, 1)',

  /** Ease out - Slow end */
  easeOut: 'cubic-bezier(0, 0, 0.58, 1)',

  /** Ease in-out - Slow start and end */
  easeInOut: 'cubic-bezier(0.42, 0, 0.58, 1)',

  /** Sharp - Quick, snappy movement */
  sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',

  /** Standard - Natural, smooth motion */
  standard: 'cubic-bezier(0.4, 0, 0.2, 1)',

  /** Emphasized - Energetic, attention-grabbing */
  emphasized: 'cubic-bezier(0.4, 0, 0, 1)',

  /** Decelerated - Entering elements */
  decelerated: 'cubic-bezier(0, 0, 0.2, 1)',

  /** Accelerated - Exiting elements */
  accelerated: 'cubic-bezier(0.4, 0, 1, 1)',
} as const;

/**
 * Semantic motion tokens for common use cases
 */
export const motion = {
  /** Fade transitions */
  fade: {
    duration: duration['150'],
    easing: easing.ease,
  },

  /** Slide transitions */
  slide: {
    duration: duration['200'],
    easing: easing.standard,
  },

  /** Scale transitions */
  scale: {
    duration: duration['150'],
    easing: easing.sharp,
  },

  /** Collapse/expand */
  collapse: {
    duration: duration['250'],
    easing: easing.standard,
  },

  /** Button interactions */
  button: {
    duration: duration['100'],
    easing: easing.sharp,
  },

  /** Tooltip and popover */
  tooltip: {
    duration: duration['100'],
    easing: easing.easeOut,
  },

  /** Modal and dialog */
  modal: {
    duration: duration['300'],
    easing: easing.emphasized,
  },

  /** Drawer and sheet */
  drawer: {
    duration: duration['300'],
    easing: easing.standard,
  },

  /** Page transitions */
  page: {
    duration: duration['400'],
    easing: easing.standard,
  },
} as const;

/**
 * Keyframe animations
 */
export const keyframes = {
  /** Fade in */
  fadeIn: {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },

  /** Fade out */
  fadeOut: {
    from: { opacity: 1 },
    to: { opacity: 0 },
  },

  /** Slide in from top */
  slideInTop: {
    from: { transform: 'translateY(-100%)' },
    to: { transform: 'translateY(0)' },
  },

  /** Slide in from bottom */
  slideInBottom: {
    from: { transform: 'translateY(100%)' },
    to: { transform: 'translateY(0)' },
  },

  /** Slide in from left */
  slideInLeft: {
    from: { transform: 'translateX(-100%)' },
    to: { transform: 'translateX(0)' },
  },

  /** Slide in from right */
  slideInRight: {
    from: { transform: 'translateX(100%)' },
    to: { transform: 'translateX(0)' },
  },

  /** Scale in */
  scaleIn: {
    from: { transform: 'scale(0.9)', opacity: 0 },
    to: { transform: 'scale(1)', opacity: 1 },
  },

  /** Scale out */
  scaleOut: {
    from: { transform: 'scale(1)', opacity: 1 },
    to: { transform: 'scale(0.9)', opacity: 0 },
  },

  /** Spin */
  spin: {
    from: { transform: 'rotate(0deg)' },
    to: { transform: 'rotate(360deg)' },
  },

  /** Pulse */
  pulse: {
    '0%, 100%': { opacity: 1 },
    '50%': { opacity: 0.5 },
  },
} as const;

export type Duration = keyof typeof duration;
export type Easing = keyof typeof easing;
export type Motion = keyof typeof motion;
export type Keyframe = keyof typeof keyframes;
