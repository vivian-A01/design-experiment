/**
 * Polaris Design Tokens - Typography (Figma Pipeline)
 *
 * This file imports raw typography tokens from Figma JSON exports and transforms them
 * into normalized formats with pixel values converted to rem units for scalability.
 *
 * Pipeline: Figma JSON → px to rem conversion → Semantic Mapping → Frozen TypeScript Object
 */
/**
 * Font family tokens
 */
export declare const fontFamily: {
    readonly sans: string;
    readonly mono: string;
};
/**
 * Font size tokens (normalized to rem)
 */
export declare const fontSize: {
    readonly 100: string;
    readonly 200: string;
    readonly 300: string;
    readonly 400: string;
    readonly 600: string;
    readonly 700: string;
    readonly 900: string;
};
/**
 * Font weight tokens
 */
export declare const fontWeight: {
    readonly regular: string;
    readonly medium: string;
    readonly semibold: string;
    readonly bold: string;
};
/**
 * Line height tokens (normalized to rem)
 */
export declare const lineHeight: {
    readonly tight: string;
    readonly normal: string;
    readonly relaxed: string;
    readonly loose: string;
};
/**
 * Semantic typography styles for common use cases
 */
export declare const typography: {
    readonly headingLg: {
        readonly fontFamily: string;
        readonly fontSize: string;
        readonly fontWeight: string;
        readonly lineHeight: string;
    };
    readonly headingMd: {
        readonly fontFamily: string;
        readonly fontSize: string;
        readonly fontWeight: string;
        readonly lineHeight: string;
    };
    readonly headingSm: {
        readonly fontFamily: string;
        readonly fontSize: string;
        readonly fontWeight: string;
        readonly lineHeight: string;
    };
    readonly bodyLg: {
        readonly fontFamily: string;
        readonly fontSize: string;
        readonly fontWeight: string;
        readonly lineHeight: string;
    };
    readonly bodyMd: {
        readonly fontFamily: string;
        readonly fontSize: string;
        readonly fontWeight: string;
        readonly lineHeight: string;
    };
    readonly bodySm: {
        readonly fontFamily: string;
        readonly fontSize: string;
        readonly fontWeight: string;
        readonly lineHeight: string;
    };
    readonly caption: {
        readonly fontFamily: string;
        readonly fontSize: string;
        readonly fontWeight: string;
        readonly lineHeight: string;
    };
};
/**
 * Figma-sourced typography tokens
 */
export declare const figmaTypographyTokens: {
    readonly fontFamily: {
        readonly sans: string;
        readonly mono: string;
    };
    readonly fontSize: {
        readonly 100: string;
        readonly 200: string;
        readonly 300: string;
        readonly 400: string;
        readonly 600: string;
        readonly 700: string;
        readonly 900: string;
    };
    readonly fontWeight: {
        readonly regular: string;
        readonly medium: string;
        readonly semibold: string;
        readonly bold: string;
    };
    readonly lineHeight: {
        readonly tight: string;
        readonly normal: string;
        readonly relaxed: string;
        readonly loose: string;
    };
    readonly typography: {
        readonly headingLg: {
            readonly fontFamily: string;
            readonly fontSize: string;
            readonly fontWeight: string;
            readonly lineHeight: string;
        };
        readonly headingMd: {
            readonly fontFamily: string;
            readonly fontSize: string;
            readonly fontWeight: string;
            readonly lineHeight: string;
        };
        readonly headingSm: {
            readonly fontFamily: string;
            readonly fontSize: string;
            readonly fontWeight: string;
            readonly lineHeight: string;
        };
        readonly bodyLg: {
            readonly fontFamily: string;
            readonly fontSize: string;
            readonly fontWeight: string;
            readonly lineHeight: string;
        };
        readonly bodyMd: {
            readonly fontFamily: string;
            readonly fontSize: string;
            readonly fontWeight: string;
            readonly lineHeight: string;
        };
        readonly bodySm: {
            readonly fontFamily: string;
            readonly fontSize: string;
            readonly fontWeight: string;
            readonly lineHeight: string;
        };
        readonly caption: {
            readonly fontFamily: string;
            readonly fontSize: string;
            readonly fontWeight: string;
            readonly lineHeight: string;
        };
    };
};
export type FontFamily = keyof typeof fontFamily;
export type FontSize = keyof typeof fontSize;
export type FontWeight = keyof typeof fontWeight;
export type LineHeight = keyof typeof lineHeight;
export type TypographyStyle = keyof typeof typography;
//# sourceMappingURL=typography.figma.d.ts.map