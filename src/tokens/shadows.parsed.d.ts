/**
 * Parsed Shadow Tokens
 *
 * Simplified shadow tokens parsed from Figma exports.
 * These tokens use dash-case naming for consistency with Web Components
 * and can be directly used in CSS custom properties.
 *
 * Source: /tokens/shadows.figma.json → /tokens/shadows.json
 */
export declare const tokens: {
    readonly 'shadow-none': string;
    readonly 'shadow-xs': string;
    readonly 'shadow-sm': string;
    readonly 'shadow-md': string;
    readonly 'shadow-lg': string;
    readonly 'shadow-button-default': string;
    readonly 'shadow-card': string;
    readonly 'shadow-card-hovered': string;
    readonly 'shadow-popover': string;
    readonly 'shadow-modal': string;
    readonly 'shadow-focus': string;
    readonly 'shadow-focus-critical': string;
};
/**
 * Generate CSS custom properties from shadow tokens
 * Usage: Insert into a <style> tag or stylesheet
 */
export declare function generateCSSCustomProperties(): string;
/**
 * Type-safe token accessor
 */
export type ShadowToken = keyof typeof tokens;
/**
 * Get token value by key
 */
export declare function getToken(key: ShadowToken): string;
export default tokens;
//# sourceMappingURL=shadows.parsed.d.ts.map