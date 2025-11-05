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
export declare const duration: {
    /** 0ms - Instant, no transition */
    readonly instant: "0ms";
    /** 50ms - Extra fast, micro-interactions */
    readonly '50': "50ms";
    /** 100ms - Fast, quick feedback */
    readonly '100': "100ms";
    /** 150ms - Default duration for most transitions */
    readonly '150': "150ms";
    /** 200ms - Medium duration */
    readonly '200': "200ms";
    /** 250ms - Slightly slower */
    readonly '250': "250ms";
    /** 300ms - Slow, for complex animations */
    readonly '300': "300ms";
    /** 400ms - Very slow */
    readonly '400': "400ms";
    /** 500ms - Extra slow, for major transitions */
    readonly '500': "500ms";
};
/**
 * Easing function tokens
 */
export declare const easing: {
    /** Linear easing - Constant speed */
    readonly linear: "linear";
    /** Ease - Default easing */
    readonly ease: "ease";
    /** Ease in - Slow start */
    readonly easeIn: "cubic-bezier(0.42, 0, 1, 1)";
    /** Ease out - Slow end */
    readonly easeOut: "cubic-bezier(0, 0, 0.58, 1)";
    /** Ease in-out - Slow start and end */
    readonly easeInOut: "cubic-bezier(0.42, 0, 0.58, 1)";
    /** Sharp - Quick, snappy movement */
    readonly sharp: "cubic-bezier(0.4, 0, 0.6, 1)";
    /** Standard - Natural, smooth motion */
    readonly standard: "cubic-bezier(0.4, 0, 0.2, 1)";
    /** Emphasized - Energetic, attention-grabbing */
    readonly emphasized: "cubic-bezier(0.4, 0, 0, 1)";
    /** Decelerated - Entering elements */
    readonly decelerated: "cubic-bezier(0, 0, 0.2, 1)";
    /** Accelerated - Exiting elements */
    readonly accelerated: "cubic-bezier(0.4, 0, 1, 1)";
};
/**
 * Semantic motion tokens for common use cases
 */
export declare const motion: {
    /** Fade transitions */
    readonly fade: {
        readonly duration: "150ms";
        readonly easing: "ease";
    };
    /** Slide transitions */
    readonly slide: {
        readonly duration: "200ms";
        readonly easing: "cubic-bezier(0.4, 0, 0.2, 1)";
    };
    /** Scale transitions */
    readonly scale: {
        readonly duration: "150ms";
        readonly easing: "cubic-bezier(0.4, 0, 0.6, 1)";
    };
    /** Collapse/expand */
    readonly collapse: {
        readonly duration: "250ms";
        readonly easing: "cubic-bezier(0.4, 0, 0.2, 1)";
    };
    /** Button interactions */
    readonly button: {
        readonly duration: "100ms";
        readonly easing: "cubic-bezier(0.4, 0, 0.6, 1)";
    };
    /** Tooltip and popover */
    readonly tooltip: {
        readonly duration: "100ms";
        readonly easing: "cubic-bezier(0, 0, 0.58, 1)";
    };
    /** Modal and dialog */
    readonly modal: {
        readonly duration: "300ms";
        readonly easing: "cubic-bezier(0.4, 0, 0, 1)";
    };
    /** Drawer and sheet */
    readonly drawer: {
        readonly duration: "300ms";
        readonly easing: "cubic-bezier(0.4, 0, 0.2, 1)";
    };
    /** Page transitions */
    readonly page: {
        readonly duration: "400ms";
        readonly easing: "cubic-bezier(0.4, 0, 0.2, 1)";
    };
};
/**
 * Keyframe animations
 */
export declare const keyframes: {
    /** Fade in */
    readonly fadeIn: {
        readonly from: {
            readonly opacity: 0;
        };
        readonly to: {
            readonly opacity: 1;
        };
    };
    /** Fade out */
    readonly fadeOut: {
        readonly from: {
            readonly opacity: 1;
        };
        readonly to: {
            readonly opacity: 0;
        };
    };
    /** Slide in from top */
    readonly slideInTop: {
        readonly from: {
            readonly transform: "translateY(-100%)";
        };
        readonly to: {
            readonly transform: "translateY(0)";
        };
    };
    /** Slide in from bottom */
    readonly slideInBottom: {
        readonly from: {
            readonly transform: "translateY(100%)";
        };
        readonly to: {
            readonly transform: "translateY(0)";
        };
    };
    /** Slide in from left */
    readonly slideInLeft: {
        readonly from: {
            readonly transform: "translateX(-100%)";
        };
        readonly to: {
            readonly transform: "translateX(0)";
        };
    };
    /** Slide in from right */
    readonly slideInRight: {
        readonly from: {
            readonly transform: "translateX(100%)";
        };
        readonly to: {
            readonly transform: "translateX(0)";
        };
    };
    /** Scale in */
    readonly scaleIn: {
        readonly from: {
            readonly transform: "scale(0.9)";
            readonly opacity: 0;
        };
        readonly to: {
            readonly transform: "scale(1)";
            readonly opacity: 1;
        };
    };
    /** Scale out */
    readonly scaleOut: {
        readonly from: {
            readonly transform: "scale(1)";
            readonly opacity: 1;
        };
        readonly to: {
            readonly transform: "scale(0.9)";
            readonly opacity: 0;
        };
    };
    /** Spin */
    readonly spin: {
        readonly from: {
            readonly transform: "rotate(0deg)";
        };
        readonly to: {
            readonly transform: "rotate(360deg)";
        };
    };
    /** Pulse */
    readonly pulse: {
        readonly '0%, 100%': {
            readonly opacity: 1;
        };
        readonly '50%': {
            readonly opacity: 0.5;
        };
    };
};
export type Duration = keyof typeof duration;
export type Easing = keyof typeof easing;
export type Motion = keyof typeof motion;
export type Keyframe = keyof typeof keyframes;
//# sourceMappingURL=motion.d.ts.map