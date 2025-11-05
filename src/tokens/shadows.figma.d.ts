/**
 * Polaris Design Tokens - Shadows (Figma Pipeline)
 *
 * This file imports raw shadow tokens from Figma JSON exports and transforms them
 * into normalized CSS box-shadow strings for use in stylesheets.
 *
 * Pipeline: Figma JSON → box-shadow CSS generation → Semantic Mapping → Frozen TypeScript Object
 */
/**
 * Shadow elevation levels
 */
export declare const shadow: {
    /** No shadow */
    readonly none: string;
    /** Extra small shadow - Subtle elevation */
    readonly xs: string;
    /** Small shadow - Cards at rest */
    readonly sm: string;
    /** Medium shadow - Elevated cards */
    readonly md: string;
    /** Large shadow - Modals and popovers */
    readonly lg: string;
};
/**
 * Button-specific shadow tokens
 */
export declare const shadowButton: {
    /** Button default state */
    readonly default: string;
    /** Button hover state */
    readonly hover: "inset 0px -1px 0px 0px rgba(0, 0, 0, 0.3)";
    /** Button pressed state */
    readonly pressed: "inset 0px 1px 1px 0px rgba(0, 0, 0, 0.1)";
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
 * Semantic shadow mappings for common use cases
 */
export declare const shadows: {
    /** Card elevation */
    readonly card: string;
    /** Card hovered state */
    readonly cardHovered: string;
    /** Popover and dropdown */
    readonly popover: string;
    /** Modal and dialog */
    readonly modal: string;
    /** Button default */
    readonly button: string;
    /** Button hovered */
    readonly buttonHovered: "inset 0px -1px 0px 0px rgba(0, 0, 0, 0.3)";
    /** Button pressed */
    readonly buttonPressed: "inset 0px 1px 1px 0px rgba(0, 0, 0, 0.1)";
    /** Focus ring */
    readonly focus: "0 0 0 3px rgba(1, 113, 233, 0.35)";
    /** Focus ring critical */
    readonly focusCritical: "0 0 0 3px rgba(224, 26, 26, 0.35)";
};
/**
 * Figma-sourced shadow tokens
 */
export declare const figmaShadowTokens: {
    readonly shadow: {
        /** No shadow */
        readonly none: string;
        /** Extra small shadow - Subtle elevation */
        readonly xs: string;
        /** Small shadow - Cards at rest */
        readonly sm: string;
        /** Medium shadow - Elevated cards */
        readonly md: string;
        /** Large shadow - Modals and popovers */
        readonly lg: string;
    };
    readonly shadowButton: {
        /** Button default state */
        readonly default: string;
        /** Button hover state */
        readonly hover: "inset 0px -1px 0px 0px rgba(0, 0, 0, 0.3)";
        /** Button pressed state */
        readonly pressed: "inset 0px 1px 1px 0px rgba(0, 0, 0, 0.1)";
    };
    readonly shadowFocus: {
        /** Default focus ring */
        readonly default: "0 0 0 3px rgba(1, 113, 233, 0.35)";
        /** Critical focus ring */
        readonly critical: "0 0 0 3px rgba(224, 26, 26, 0.35)";
        /** Success focus ring */
        readonly success: "0 0 0 3px rgba(17, 131, 124, 0.35)";
    };
    readonly shadows: {
        /** Card elevation */
        readonly card: string;
        /** Card hovered state */
        readonly cardHovered: string;
        /** Popover and dropdown */
        readonly popover: string;
        /** Modal and dialog */
        readonly modal: string;
        /** Button default */
        readonly button: string;
        /** Button hovered */
        readonly buttonHovered: "inset 0px -1px 0px 0px rgba(0, 0, 0, 0.3)";
        /** Button pressed */
        readonly buttonPressed: "inset 0px 1px 1px 0px rgba(0, 0, 0, 0.1)";
        /** Focus ring */
        readonly focus: "0 0 0 3px rgba(1, 113, 233, 0.35)";
        /** Focus ring critical */
        readonly focusCritical: "0 0 0 3px rgba(224, 26, 26, 0.35)";
    };
};
export type Shadow = keyof typeof shadow;
export type ShadowButton = keyof typeof shadowButton;
export type ShadowFocus = keyof typeof shadowFocus;
export type ShadowSemantic = keyof typeof shadows;
//# sourceMappingURL=shadows.figma.d.ts.map