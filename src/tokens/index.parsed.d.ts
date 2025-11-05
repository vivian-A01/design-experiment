/**
 * Parsed Design Tokens - Unified Export
 *
 * Simplified, dash-case design tokens parsed from Figma exports.
 * Optimized for Web Components and CSS custom properties.
 *
 * @example
 * ```tsx
 * // Import individual token modules
 * import { tokens as colorTokens } from './tokens/colors.parsed';
 * import { tokens as typographyTokens } from './tokens/typography.parsed';
 * import { tokens as shadowTokens } from './tokens/shadows.parsed';
 *
 * // Or import everything at once
 * import { parsedTokens } from './tokens/index.parsed';
 *
 * // Use in React components
 * <div style={{ color: parsedTokens.colors['color-text-primary'] }} />
 *
 * // Generate CSS custom properties
 * import { generateAllCSSCustomProperties } from './tokens/index.parsed';
 * const css = generateAllCSSCustomProperties();
 * ```
 */
export { tokens as colorTokens, generateCSSCustomProperties as generateColorCSS } from './colors.parsed';
export type { ColorToken } from './colors.parsed';
export { tokens as typographyTokens, generateCSSCustomProperties as generateTypographyCSS } from './typography.parsed';
export type { TypographyToken, TypographyStyle } from './typography.parsed';
export { tokens as shadowTokens, generateCSSCustomProperties as generateShadowCSS } from './shadows.parsed';
export type { ShadowToken } from './shadows.parsed';
/**
 * All parsed design tokens in a single object
 */
export declare const parsedTokens: {
    readonly colors: {
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
    readonly typography: {
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
    readonly shadows: {
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
};
/**
 * Generate all CSS custom properties
 * Returns a complete CSS string with all design tokens as custom properties
 */
export declare function generateAllCSSCustomProperties(): string;
/**
 * Generate CSS custom properties as a style element
 * Useful for injecting into Web Components shadow DOM
 */
export declare function createStyleElement(): HTMLStyleElement;
export default parsedTokens;
//# sourceMappingURL=index.parsed.d.ts.map