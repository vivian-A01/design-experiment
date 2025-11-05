/**
 * Parsed Color Tokens
 *
 * Simplified color tokens parsed from Figma exports.
 * These tokens use dash-case naming for consistency with Web Components
 * and can be directly used in CSS custom properties.
 *
 * Source: /tokens/colors.figma.json → /tokens/colors.json
 */
export declare const tokens: {
    readonly 'color-gray-50': string;
    readonly 'color-gray-100': string;
    readonly 'color-gray-300': string;
    readonly 'color-gray-500': string;
    readonly 'color-gray-700': string;
    readonly 'color-gray-900': string;
    readonly 'color-blue-100': string;
    readonly 'color-blue-500': string;
    readonly 'color-blue-700': string;
    readonly 'color-green-100': string;
    readonly 'color-green-500': string;
    readonly 'color-green-700': string;
    readonly 'color-red-100': string;
    readonly 'color-red-500': string;
    readonly 'color-red-700': string;
    readonly 'color-yellow-100': string;
    readonly 'color-yellow-300': string;
    readonly 'color-yellow-500': string;
    readonly 'color-bg-primary': string;
    readonly 'color-bg-subdued': string;
    readonly 'color-border': string;
    readonly 'color-text-primary': string;
    readonly 'color-text-secondary': string;
    readonly 'color-text-disabled': string;
    readonly 'color-text-interactive': string;
    readonly 'color-text-success': string;
    readonly 'color-text-critical': string;
    readonly 'color-text-warning': string;
};
/**
 * Generate CSS custom properties from color tokens
 * Usage: Insert into a <style> tag or stylesheet
 */
export declare function generateCSSCustomProperties(): string;
/**
 * Type-safe token accessor
 */
export type ColorToken = keyof typeof tokens;
/**
 * Get token value by key
 */
export declare function getToken(key: ColorToken): string;
export default tokens;
//# sourceMappingURL=colors.parsed.d.ts.map