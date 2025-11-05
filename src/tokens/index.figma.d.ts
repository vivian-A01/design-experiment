/**
 * Polaris Design Tokens - Figma Pipeline
 *
 * Central export point for all Figma-sourced design tokens.
 * This module provides tokens generated from Figma JSON exports with proper
 * normalization and semantic aliasing.
 *
 * @example
 * ```tsx
 * import { colors, typography, shadows } from '@your-org/polaris-design-library/tokens/figma';
 *
 * // Use Figma-sourced color tokens
 * const primaryColor = colors.interactive;
 *
 * // Use Figma-sourced typography tokens
 * const headingStyle = typography.headingLg;
 *
 * // Use Figma-sourced shadow tokens
 * const cardShadow = shadows.card;
 * ```
 */
export { colors, figmaColorTokens, } from './colors.figma';
export type { ColorToken, } from './colors.figma';
export { fontFamily, fontSize, fontWeight, lineHeight, typography, figmaTypographyTokens, } from './typography.figma';
export type { FontFamily, FontSize, FontWeight, LineHeight, TypographyStyle, } from './typography.figma';
export { shadow, shadowButton, shadowFocus, shadows, figmaShadowTokens, } from './shadows.figma';
export type { Shadow, ShadowButton, ShadowFocus, ShadowSemantic, } from './shadows.figma';
/**
 * All Figma-sourced design tokens in a single object
 */
export declare const figmaTokens: {
    readonly colors: {
        readonly surface: string;
        readonly surfaceSubdued: string;
        readonly border: string;
        readonly textPrimary: string;
        readonly textSecondary: string;
        readonly textDisabled: string;
        readonly interactive: string;
        readonly success: string;
        readonly critical: string;
        readonly warning: string;
    };
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
    readonly shadow: {
        readonly none: string;
        readonly xs: string;
        readonly sm: string;
        readonly md: string;
        readonly lg: string;
    };
    readonly shadowButton: {
        readonly default: string;
        readonly hover: "inset 0px -1px 0px 0px rgba(0, 0, 0, 0.3)";
        readonly pressed: "inset 0px 1px 1px 0px rgba(0, 0, 0, 0.1)";
    };
    readonly shadowFocus: {
        readonly default: "0 0 0 3px rgba(1, 113, 233, 0.35)";
        readonly critical: "0 0 0 3px rgba(224, 26, 26, 0.35)";
        readonly success: "0 0 0 3px rgba(17, 131, 124, 0.35)";
    };
    readonly shadows: {
        readonly card: string;
        readonly cardHovered: string;
        readonly popover: string;
        readonly modal: string;
        readonly button: string;
        readonly buttonHovered: "inset 0px -1px 0px 0px rgba(0, 0, 0, 0.3)";
        readonly buttonPressed: "inset 0px 1px 1px 0px rgba(0, 0, 0, 0.1)";
        readonly focus: "0 0 0 3px rgba(1, 113, 233, 0.35)";
        readonly focusCritical: "0 0 0 3px rgba(224, 26, 26, 0.35)";
    };
};
/**
 * Raw Figma token collections (including transformation metadata)
 */
export declare const rawFigmaTokens: {
    readonly colors: {
        readonly raw: Record<string, string>;
        readonly semantic: Record<string, string>;
    };
    readonly typography: {
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
    readonly shadows: {
        readonly shadow: {
            readonly none: string;
            readonly xs: string;
            readonly sm: string;
            readonly md: string;
            readonly lg: string;
        };
        readonly shadowButton: {
            readonly default: string;
            readonly hover: "inset 0px -1px 0px 0px rgba(0, 0, 0, 0.3)";
            readonly pressed: "inset 0px 1px 1px 0px rgba(0, 0, 0, 0.1)";
        };
        readonly shadowFocus: {
            readonly default: "0 0 0 3px rgba(1, 113, 233, 0.35)";
            readonly critical: "0 0 0 3px rgba(224, 26, 26, 0.35)";
            readonly success: "0 0 0 3px rgba(17, 131, 124, 0.35)";
        };
        readonly shadows: {
            readonly card: string;
            readonly cardHovered: string;
            readonly popover: string;
            readonly modal: string;
            readonly button: string;
            readonly buttonHovered: "inset 0px -1px 0px 0px rgba(0, 0, 0, 0.3)";
            readonly buttonPressed: "inset 0px 1px 1px 0px rgba(0, 0, 0, 0.1)";
            readonly focus: "0 0 0 3px rgba(1, 113, 233, 0.35)";
            readonly focusCritical: "0 0 0 3px rgba(224, 26, 26, 0.35)";
        };
    };
};
//# sourceMappingURL=index.figma.d.ts.map