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
export declare const shadow: {
    /** No shadow */
    readonly none: "none";
    /** Extra small shadow - Subtle elevation */
    readonly xs: "0 1px 0 rgba(0, 0, 0, 0.05)";
    /** Small shadow - Cards at rest */
    readonly sm: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)";
    /** Medium shadow - Elevated cards */
    readonly md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)";
    /** Large shadow - Modals and popovers */
    readonly lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)";
    /** Extra large shadow - Drawers and overlays */
    readonly xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)";
    /** 2X large shadow - Maximum elevation */
    readonly '2xl': "0 25px 50px -12px rgba(0, 0, 0, 0.25)";
};
/**
 * Inner shadow tokens for inset effects
 */
export declare const shadowInner: {
    /** No inner shadow */
    readonly none: "none";
    /** Small inner shadow */
    readonly sm: "inset 0 1px 2px 0 rgba(0, 0, 0, 0.05)";
    /** Medium inner shadow - Button pressed state */
    readonly md: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)";
};
/**
 * Focus ring shadows for accessibility
 */
export declare const shadowFocus: {
    /** Default focus ring */
    readonly default: "0 0 0 3px rgba(1, 113, 233, 0.35)";
    /** Critical focus ring */
    readonly critical: "0 0 0 3px rgba(224, 26, 26, 0.35)";
    /** Success focus ring */
    readonly success: "0 0 0 3px rgba(17, 131, 124, 0.35)";
};
/**
 * Button-specific shadow tokens
 */
export declare const shadowButton: {
    /** Button default state */
    readonly default: "inset 0 -1px 0 0 rgba(0, 0, 0, 0.2)";
    /** Button hover state */
    readonly hover: "inset 0 -1px 0 0 rgba(0, 0, 0, 0.3)";
    /** Button pressed state */
    readonly pressed: "inset 0 1px 1px 0 rgba(0, 0, 0, 0.1)";
    /** Primary button default */
    readonly primary: "inset 0 -1px 0 0 rgba(0, 0, 0, 0.15)";
    /** Primary button hover */
    readonly primaryHover: "inset 0 -1px 0 0 rgba(0, 0, 0, 0.25)";
    /** Primary button pressed */
    readonly primaryPressed: "inset 0 1px 1px 0 rgba(0, 0, 0, 0.1)";
};
/**
 * Semantic shadow mappings
 */
export declare const shadows: {
    /** Card elevation */
    readonly card: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)";
    /** Card hovered state */
    readonly cardHovered: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)";
    /** Popover and dropdown */
    readonly popover: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)";
    /** Modal and dialog */
    readonly modal: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)";
    /** Top bar */
    readonly topBar: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)";
    /** Navigation */
    readonly navigation: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)";
    /** Button default */
    readonly button: "inset 0 -1px 0 0 rgba(0, 0, 0, 0.2)";
    /** Button hovered */
    readonly buttonHovered: "inset 0 -1px 0 0 rgba(0, 0, 0, 0.3)";
    /** Button pressed */
    readonly buttonPressed: "inset 0 1px 1px 0 rgba(0, 0, 0, 0.1)";
    /** Focus ring */
    readonly focus: "0 0 0 3px rgba(1, 113, 233, 0.35)";
    /** Focus ring critical */
    readonly focusCritical: "0 0 0 3px rgba(224, 26, 26, 0.35)";
};
export type Shadow = keyof typeof shadow;
export type ShadowInner = keyof typeof shadowInner;
export type ShadowFocus = keyof typeof shadowFocus;
export type ShadowButton = keyof typeof shadowButton;
export type ShadowSemantic = keyof typeof shadows;
//# sourceMappingURL=shadows.d.ts.map