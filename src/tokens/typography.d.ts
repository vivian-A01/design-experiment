/**
 * Polaris Design Tokens - Typography
 *
 * Typography scale including font families, sizes, weights, and line heights.
 * Based on Shopify Polaris Design System typography tokens.
 *
 * @see https://polaris.shopify.com/design/typography
 */
/**
 * Font family tokens
 */
export declare const fontFamily: {
    /** Primary sans-serif font stack */
    readonly sans: "-apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif";
    /** Monospace font stack for code */
    readonly mono: "ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace";
};
/**
 * Font size scale
 */
export declare const fontSize: {
    /** 11px - Extra small text */
    readonly '075': "0.6875rem";
    /** 12px - Small text, captions */
    readonly '100': "0.75rem";
    /** 13px - Default body text */
    readonly '200': "0.8125rem";
    /** 14px - Medium body text */
    readonly '300': "0.875rem";
    /** 16px - Large body text */
    readonly '400': "1rem";
    /** 18px - Small headings */
    readonly '500': "1.125rem";
    /** 20px - Medium headings */
    readonly '600': "1.25rem";
    /** 24px - Large headings */
    readonly '700': "1.5rem";
    /** 28px - Extra large headings */
    readonly '800': "1.75rem";
    /** 32px - Display text */
    readonly '900': "2rem";
    /** 36px - Large display */
    readonly '1000': "2.25rem";
    /** 40px - Extra large display */
    readonly '1100': "2.5rem";
    /** 44px - Maximum display */
    readonly '1200': "2.75rem";
};
/**
 * Font weight tokens
 */
export declare const fontWeight: {
    /** 400 - Regular text */
    readonly regular: "400";
    /** 500 - Medium emphasis */
    readonly medium: "500";
    /** 600 - Semi-bold, for strong emphasis */
    readonly semibold: "600";
    /** 700 - Bold, for headings */
    readonly bold: "700";
};
/**
 * Line height tokens
 */
export declare const lineHeight: {
    /** 16px - Tight line height */
    readonly '100': "1rem";
    /** 20px - Default line height */
    readonly '200': "1.25rem";
    /** 24px - Medium line height */
    readonly '300': "1.5rem";
    /** 28px - Large line height */
    readonly '400': "1.75rem";
    /** 32px - Extra large line height */
    readonly '500': "2rem";
    /** 40px - Display line height */
    readonly '600': "2.5rem";
    /** 48px - Large display line height */
    readonly '700': "3rem";
    /** 56px - Maximum line height */
    readonly '800': "3.5rem";
};
/**
 * Letter spacing tokens
 */
export declare const letterSpacing: {
    /** Tighter tracking */
    readonly tighter: "-0.01em";
    /** Normal tracking */
    readonly normal: "0";
    /** Wider tracking */
    readonly wider: "0.01em";
    /** Widest tracking for all caps */
    readonly widest: "0.05em";
};
/**
 * Semantic typography styles for common use cases
 */
export declare const typography: {
    /** Headings */
    readonly headingXl: {
        readonly fontFamily: "-apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif";
        readonly fontSize: "2rem";
        readonly fontWeight: "700";
        readonly lineHeight: "2.5rem";
    };
    readonly headingLg: {
        readonly fontFamily: "-apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif";
        readonly fontSize: "1.5rem";
        readonly fontWeight: "700";
        readonly lineHeight: "2rem";
    };
    readonly headingMd: {
        readonly fontFamily: "-apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif";
        readonly fontSize: "1.125rem";
        readonly fontWeight: "600";
        readonly lineHeight: "1.75rem";
    };
    readonly headingSm: {
        readonly fontFamily: "-apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif";
        readonly fontSize: "0.875rem";
        readonly fontWeight: "600";
        readonly lineHeight: "1.5rem";
    };
    /** Body text */
    readonly bodyLg: {
        readonly fontFamily: "-apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif";
        readonly fontSize: "1rem";
        readonly fontWeight: "400";
        readonly lineHeight: "1.5rem";
    };
    readonly bodyMd: {
        readonly fontFamily: "-apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif";
        readonly fontSize: "0.875rem";
        readonly fontWeight: "400";
        readonly lineHeight: "1.5rem";
    };
    readonly bodySm: {
        readonly fontFamily: "-apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif";
        readonly fontSize: "0.8125rem";
        readonly fontWeight: "400";
        readonly lineHeight: "1.25rem";
    };
    /** Caption and labels */
    readonly caption: {
        readonly fontFamily: "-apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif";
        readonly fontSize: "0.75rem";
        readonly fontWeight: "400";
        readonly lineHeight: "1.25rem";
    };
    /** Code and monospace */
    readonly code: {
        readonly fontFamily: "ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace";
        readonly fontSize: "0.8125rem";
        readonly fontWeight: "400";
        readonly lineHeight: "1.5rem";
    };
};
export type FontFamily = keyof typeof fontFamily;
export type FontSize = keyof typeof fontSize;
export type FontWeight = keyof typeof fontWeight;
export type LineHeight = keyof typeof lineHeight;
export type LetterSpacing = keyof typeof letterSpacing;
export type TypographyStyle = keyof typeof typography;
//# sourceMappingURL=typography.d.ts.map