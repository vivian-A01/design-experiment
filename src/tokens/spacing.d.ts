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
export declare const spacing: {
    /** 0px - No spacing */
    readonly none: "0";
    /** 2px - Smallest spacing, rarely used */
    readonly '025': "0.125rem";
    /** 4px - Extra small spacing for tight layouts */
    readonly '050': "0.25rem";
    /** 8px - Small spacing, common for compact UIs */
    readonly '100': "0.5rem";
    /** 12px - Default spacing for many components */
    readonly '150': "0.75rem";
    /** 16px - Base spacing unit */
    readonly '200': "1rem";
    /** 20px - Medium spacing */
    readonly '300': "1.25rem";
    /** 24px - Large spacing */
    readonly '400': "1.5rem";
    /** 28px - Extra large spacing */
    readonly '500': "1.75rem";
    /** 32px - Extra extra large spacing */
    readonly '600': "2rem";
    /** 40px - Significant spacing */
    readonly '800': "2.5rem";
    /** 48px - Very large spacing */
    readonly '1000': "3rem";
    /** 64px - Extra large spacing for major sections */
    readonly '1200': "4rem";
    /** 80px - Maximum spacing */
    readonly '1600': "5rem";
    /** 128px - Exceptional large spacing */
    readonly '2000': "8rem";
};
/**
 * Semantic spacing tokens for specific use cases
 */
export declare const spacingSemantic: {
    /** Spacing between related elements */
    readonly tight: "0.5rem";
    /** Default spacing between elements */
    readonly base: "1rem";
    /** Spacing between loosely related elements */
    readonly loose: "1.5rem";
    /** Spacing between major sections */
    readonly extraLoose: "2.5rem";
};
/**
 * Gap tokens for flexbox and grid layouts
 */
export declare const gap: {
    /** No gap */
    readonly none: "0";
    /** Extra small gap (4px) */
    readonly xs: "0.25rem";
    /** Small gap (8px) */
    readonly sm: "0.5rem";
    /** Medium gap (16px) */
    readonly md: "1rem";
    /** Large gap (24px) */
    readonly lg: "1.5rem";
    /** Extra large gap (32px) */
    readonly xl: "2rem";
    /** Extra extra large gap (48px) */
    readonly xxl: "3rem";
};
/**
 * Inset tokens for padding
 */
export declare const inset: {
    /** No padding */
    readonly none: "0";
    /** Extra small padding (4px) */
    readonly xs: "0.25rem";
    /** Small padding (8px) */
    readonly sm: "0.5rem";
    /** Medium padding (16px) */
    readonly md: "1rem";
    /** Large padding (24px) */
    readonly lg: "1.5rem";
    /** Extra large padding (32px) */
    readonly xl: "2rem";
};
export type SpacingToken = keyof typeof spacing;
export type SpacingSemanticToken = keyof typeof spacingSemantic;
export type GapToken = keyof typeof gap;
export type InsetToken = keyof typeof inset;
//# sourceMappingURL=spacing.d.ts.map