/**
 * Parsed Typography Tokens
 *
 * Simplified typography tokens parsed from Figma exports.
 * These tokens use dash-case naming for consistency with Web Components
 * and can be directly used in CSS custom properties.
 *
 * Source: /tokens/typography.figma.json → /tokens/typography.json
 */
export declare const tokens: {
    readonly 'font-family-sans': string;
    readonly 'font-family-mono': string;
    readonly 'font-size-xs': string;
    readonly 'font-size-sm': string;
    readonly 'font-size-base': string;
    readonly 'font-size-lg': string;
    readonly 'font-size-xl': string;
    readonly 'font-size-2xl': string;
    readonly 'font-size-3xl': string;
    readonly 'font-weight-regular': string;
    readonly 'font-weight-medium': string;
    readonly 'font-weight-semibold': string;
    readonly 'font-weight-bold': string;
    readonly 'line-height-tight': string;
    readonly 'line-height-normal': string;
    readonly 'line-height-relaxed': string;
    readonly 'line-height-loose': string;
    readonly 'font-heading-xl': {
        fontFamily: string;
        fontSize: string;
        fontWeight: string;
        lineHeight: string;
    };
    readonly 'font-heading-lg': {
        fontFamily: string;
        fontSize: string;
        fontWeight: string;
        lineHeight: string;
    };
    readonly 'font-heading-md': {
        fontFamily: string;
        fontSize: string;
        fontWeight: string;
        lineHeight: string;
    };
    readonly 'font-heading-sm': {
        fontFamily: string;
        fontSize: string;
        fontWeight: string;
        lineHeight: string;
    };
    readonly 'font-body-lg': {
        fontFamily: string;
        fontSize: string;
        fontWeight: string;
        lineHeight: string;
    };
    readonly 'font-body-md': {
        fontFamily: string;
        fontSize: string;
        fontWeight: string;
        lineHeight: string;
    };
    readonly 'font-body-sm': {
        fontFamily: string;
        fontSize: string;
        fontWeight: string;
        lineHeight: string;
    };
    readonly 'font-caption': {
        fontFamily: string;
        fontSize: string;
        fontWeight: string;
        lineHeight: string;
    };
};
/**
 * Typography style interface for semantic styles
 */
export interface TypographyStyle {
    fontFamily: string;
    fontSize: string;
    fontWeight: string;
    lineHeight: string;
}
/**
 * Generate CSS custom properties from typography tokens
 * Usage: Insert into a <style> tag or stylesheet
 */
export declare function generateCSSCustomProperties(): string;
/**
 * Type-safe token accessor
 */
export type TypographyToken = keyof typeof tokens;
/**
 * Get token value by key
 */
export declare function getToken(key: TypographyToken): string | TypographyStyle;
/**
 * Apply typography style to an element
 */
export declare function applyTypographyStyle(style: TypographyStyle): React.CSSProperties;
export default tokens;
//# sourceMappingURL=typography.parsed.d.ts.map