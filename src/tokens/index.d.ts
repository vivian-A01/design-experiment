/**
 * Polaris Design Tokens
 *
 * Central export point for all design tokens including colors, spacing,
 * typography, shadows, motion, and breakpoints.
 *
 * This module exports BOTH:
 * 1. Phase 1 hardcoded Polaris tokens (default exports)
 * 2. Figma pipeline tokens (import from 'tokens/figma' or use figmaTokens export)
 *
 * @example
 * ```tsx
 * // Use Phase 1 hardcoded tokens
 * import { colors, spacing, typography } from '@your-org/polaris-design-library/tokens';
 *
 * const primaryColor = colors.blue[500];
 * const padding = spacing.base;
 * const headingStyle = typography.headingLg;
 *
 * // Use Figma pipeline tokens
 * import { figmaTokens } from '@your-org/polaris-design-library/tokens';
 * // OR
 * import * as figma from '@your-org/polaris-design-library/tokens/figma';
 *
 * const interactiveColor = figmaTokens.colors.interactive;
 * const headingStyle = figma.typography.headingLg;
 * ```
 */
export { colors, gray, blue, green, yellow, orange, red, purple, azure, semantic, } from './colors';
export type { ColorScale, GrayShade, BlueShade, ColorToken, } from './colors';
export { spacing, spacingSemantic, gap, inset, } from './spacing';
export type { SpacingToken, SpacingSemanticToken, GapToken, InsetToken, } from './spacing';
export { fontFamily, fontSize, fontWeight, lineHeight, letterSpacing, typography, } from './typography';
export type { FontFamily, FontSize, FontWeight, LineHeight, LetterSpacing, TypographyStyle, } from './typography';
export { shadow, shadowInner, shadowFocus, shadowButton, shadows, } from './shadows';
export type { Shadow, ShadowInner, ShadowFocus, ShadowButton, ShadowSemantic, } from './shadows';
export { duration, easing, motion, keyframes, } from './motion';
export type { Duration, Easing, Motion, Keyframe, } from './motion';
export { breakpointValues, breakpoints, containerMaxWidth, createMediaQuery, } from './breakpoints';
export type { Breakpoint, BreakpointQuery, } from './breakpoints';
/**
 * All design tokens in a single object
 */
export declare const tokens: {
    readonly colors: {
        readonly gray: {
            readonly 50: "#FFFFFF";
            readonly 100: "#F7F7F7";
            readonly 200: "#EBEBEB";
            readonly 300: "#E3E3E3";
            readonly 400: "#C9CCCF";
            readonly 500: "#8C9196";
            readonly 600: "#616161";
            readonly 700: "#303030";
            readonly 800: "#1A1A1A";
            readonly 900: "#000000";
        };
        readonly blue: {
            readonly 50: "#F4F6F8";
            readonly 100: "#E3F0FF";
            readonly 200: "#B7D8FF";
            readonly 300: "#7AB8FF";
            readonly 400: "#4C9AFF";
            readonly 500: "#0171E9";
            readonly 600: "#005BBB";
            readonly 700: "#004488";
            readonly 800: "#002E5D";
            readonly 900: "#001933";
        };
        readonly green: {
            readonly 50: "#F1F8F5";
            readonly 100: "#D4F0E1";
            readonly 200: "#A6DFC4";
            readonly 300: "#73C5A2";
            readonly 400: "#47A881";
            readonly 500: "#11837C";
            readonly 600: "#0F6F61";
            readonly 700: "#0C5548";
            readonly 800: "#093930";
            readonly 900: "#05201C";
        };
        readonly yellow: {
            readonly 50: "#FFFEF7";
            readonly 100: "#FFF9E0";
            readonly 200: "#FFF4C4";
            readonly 300: "#FFEF9D";
            readonly 400: "#FFE56B";
            readonly 500: "#FFD423";
            readonly 600: "#E5B800";
            readonly 700: "#B38F00";
            readonly 800: "#806600";
            readonly 900: "#4D3D00";
        };
        readonly orange: {
            readonly 50: "#FFF8F5";
            readonly 100: "#FFEEE5";
            readonly 200: "#FFDCC9";
            readonly 300: "#FFC299";
            readonly 400: "#FFA566";
            readonly 500: "#FF8A3D";
            readonly 600: "#E56B1A";
            readonly 700: "#B85000";
            readonly 800: "#8A3D00";
            readonly 900: "#5C2900";
        };
        readonly red: {
            readonly 50: "#FFF5F5";
            readonly 100: "#FFEBEB";
            readonly 200: "#FFD6D6";
            readonly 300: "#FFB8B8";
            readonly 400: "#FF9494";
            readonly 500: "#E01A1A";
            readonly 600: "#C21414";
            readonly 700: "#940F0F";
            readonly 800: "#660A0A";
            readonly 900: "#380505";
        };
        readonly purple: {
            readonly 50: "#F9F7FA";
            readonly 100: "#F2EDFF";
            readonly 200: "#E3D5FF";
            readonly 300: "#C9B3FF";
            readonly 400: "#B08AFF";
            readonly 500: "#8151FF";
            readonly 600: "#6B3FCC";
            readonly 700: "#532E99";
            readonly 800: "#3B1F66";
            readonly 900: "#221133";
        };
        readonly azure: {
            readonly 50: "#F5F8FA";
            readonly 100: "#E8F2F7";
            readonly 200: "#C8E1ED";
            readonly 300: "#A3CDE0";
            readonly 400: "#7DB5D1";
            readonly 500: "#0084B8";
            readonly 600: "#006D99";
            readonly 700: "#005573";
            readonly 800: "#003D52";
            readonly 900: "#002633";
        };
        readonly semantic: {
            readonly surface: "#FFFFFF";
            readonly surfaceSubdued: "#F7F7F7";
            readonly surfaceDisabled: "#EBEBEB";
            readonly textPrimary: "#000000";
            readonly textSecondary: "#303030";
            readonly textDisabled: "#8C9196";
            readonly textCritical: "#C21414";
            readonly textWarning: "#B38F00";
            readonly textSuccess: "#0F6F61";
            readonly textInfo: "#005BBB";
            readonly border: "#E3E3E3";
            readonly borderSubdued: "#EBEBEB";
            readonly borderDisabled: "#E3E3E3";
            readonly interactive: "#0171E9";
            readonly interactiveHovered: "#005BBB";
            readonly interactivePressed: "#004488";
            readonly interactiveDisabled: "#C9CCCF";
            readonly success: "#11837C";
            readonly successSubdued: "#D4F0E1";
            readonly warning: "#FFD423";
            readonly warningSubdued: "#FFF9E0";
            readonly critical: "#E01A1A";
            readonly criticalSubdued: "#FFEBEB";
            readonly info: "#0171E9";
            readonly infoSubdued: "#E3F0FF";
        };
    };
    readonly spacing: {
        readonly none: "0";
        readonly '025': "0.125rem";
        readonly '050': "0.25rem";
        readonly '100': "0.5rem";
        readonly '150': "0.75rem";
        readonly '200': "1rem";
        readonly '300': "1.25rem";
        readonly '400': "1.5rem";
        readonly '500': "1.75rem";
        readonly '600': "2rem";
        readonly '800': "2.5rem";
        readonly '1000': "3rem";
        readonly '1200': "4rem";
        readonly '1600': "5rem";
        readonly '2000': "8rem";
    };
    readonly spacingSemantic: {
        readonly tight: "0.5rem";
        readonly base: "1rem";
        readonly loose: "1.5rem";
        readonly extraLoose: "2.5rem";
    };
    readonly gap: {
        readonly none: "0";
        readonly xs: "0.25rem";
        readonly sm: "0.5rem";
        readonly md: "1rem";
        readonly lg: "1.5rem";
        readonly xl: "2rem";
        readonly xxl: "3rem";
    };
    readonly inset: {
        readonly none: "0";
        readonly xs: "0.25rem";
        readonly sm: "0.5rem";
        readonly md: "1rem";
        readonly lg: "1.5rem";
        readonly xl: "2rem";
    };
    readonly fontFamily: {
        readonly sans: "-apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif";
        readonly mono: "ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace";
    };
    readonly fontSize: {
        readonly '075': "0.6875rem";
        readonly '100': "0.75rem";
        readonly '200': "0.8125rem";
        readonly '300': "0.875rem";
        readonly '400': "1rem";
        readonly '500': "1.125rem";
        readonly '600': "1.25rem";
        readonly '700': "1.5rem";
        readonly '800': "1.75rem";
        readonly '900': "2rem";
        readonly '1000': "2.25rem";
        readonly '1100': "2.5rem";
        readonly '1200': "2.75rem";
    };
    readonly fontWeight: {
        readonly regular: "400";
        readonly medium: "500";
        readonly semibold: "600";
        readonly bold: "700";
    };
    readonly lineHeight: {
        readonly '100': "1rem";
        readonly '200': "1.25rem";
        readonly '300': "1.5rem";
        readonly '400': "1.75rem";
        readonly '500': "2rem";
        readonly '600': "2.5rem";
        readonly '700': "3rem";
        readonly '800': "3.5rem";
    };
    readonly letterSpacing: {
        readonly tighter: "-0.01em";
        readonly normal: "0";
        readonly wider: "0.01em";
        readonly widest: "0.05em";
    };
    readonly typography: {
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
        readonly caption: {
            readonly fontFamily: "-apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif";
            readonly fontSize: "0.75rem";
            readonly fontWeight: "400";
            readonly lineHeight: "1.25rem";
        };
        readonly code: {
            readonly fontFamily: "ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace";
            readonly fontSize: "0.8125rem";
            readonly fontWeight: "400";
            readonly lineHeight: "1.5rem";
        };
    };
    readonly shadow: {
        readonly none: "none";
        readonly xs: "0 1px 0 rgba(0, 0, 0, 0.05)";
        readonly sm: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)";
        readonly md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)";
        readonly lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)";
        readonly xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)";
        readonly '2xl': "0 25px 50px -12px rgba(0, 0, 0, 0.25)";
    };
    readonly shadowInner: {
        readonly none: "none";
        readonly sm: "inset 0 1px 2px 0 rgba(0, 0, 0, 0.05)";
        readonly md: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)";
    };
    readonly shadowFocus: {
        readonly default: "0 0 0 3px rgba(1, 113, 233, 0.35)";
        readonly critical: "0 0 0 3px rgba(224, 26, 26, 0.35)";
        readonly success: "0 0 0 3px rgba(17, 131, 124, 0.35)";
    };
    readonly shadowButton: {
        readonly default: "inset 0 -1px 0 0 rgba(0, 0, 0, 0.2)";
        readonly hover: "inset 0 -1px 0 0 rgba(0, 0, 0, 0.3)";
        readonly pressed: "inset 0 1px 1px 0 rgba(0, 0, 0, 0.1)";
        readonly primary: "inset 0 -1px 0 0 rgba(0, 0, 0, 0.15)";
        readonly primaryHover: "inset 0 -1px 0 0 rgba(0, 0, 0, 0.25)";
        readonly primaryPressed: "inset 0 1px 1px 0 rgba(0, 0, 0, 0.1)";
    };
    readonly shadows: {
        readonly card: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)";
        readonly cardHovered: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)";
        readonly popover: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)";
        readonly modal: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)";
        readonly topBar: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)";
        readonly navigation: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)";
        readonly button: "inset 0 -1px 0 0 rgba(0, 0, 0, 0.2)";
        readonly buttonHovered: "inset 0 -1px 0 0 rgba(0, 0, 0, 0.3)";
        readonly buttonPressed: "inset 0 1px 1px 0 rgba(0, 0, 0, 0.1)";
        readonly focus: "0 0 0 3px rgba(1, 113, 233, 0.35)";
        readonly focusCritical: "0 0 0 3px rgba(224, 26, 26, 0.35)";
    };
    readonly duration: {
        readonly instant: "0ms";
        readonly '50': "50ms";
        readonly '100': "100ms";
        readonly '150': "150ms";
        readonly '200': "200ms";
        readonly '250': "250ms";
        readonly '300': "300ms";
        readonly '400': "400ms";
        readonly '500': "500ms";
    };
    readonly easing: {
        readonly linear: "linear";
        readonly ease: "ease";
        readonly easeIn: "cubic-bezier(0.42, 0, 1, 1)";
        readonly easeOut: "cubic-bezier(0, 0, 0.58, 1)";
        readonly easeInOut: "cubic-bezier(0.42, 0, 0.58, 1)";
        readonly sharp: "cubic-bezier(0.4, 0, 0.6, 1)";
        readonly standard: "cubic-bezier(0.4, 0, 0.2, 1)";
        readonly emphasized: "cubic-bezier(0.4, 0, 0, 1)";
        readonly decelerated: "cubic-bezier(0, 0, 0.2, 1)";
        readonly accelerated: "cubic-bezier(0.4, 0, 1, 1)";
    };
    readonly motion: {
        readonly fade: {
            readonly duration: "150ms";
            readonly easing: "ease";
        };
        readonly slide: {
            readonly duration: "200ms";
            readonly easing: "cubic-bezier(0.4, 0, 0.2, 1)";
        };
        readonly scale: {
            readonly duration: "150ms";
            readonly easing: "cubic-bezier(0.4, 0, 0.6, 1)";
        };
        readonly collapse: {
            readonly duration: "250ms";
            readonly easing: "cubic-bezier(0.4, 0, 0.2, 1)";
        };
        readonly button: {
            readonly duration: "100ms";
            readonly easing: "cubic-bezier(0.4, 0, 0.6, 1)";
        };
        readonly tooltip: {
            readonly duration: "100ms";
            readonly easing: "cubic-bezier(0, 0, 0.58, 1)";
        };
        readonly modal: {
            readonly duration: "300ms";
            readonly easing: "cubic-bezier(0.4, 0, 0, 1)";
        };
        readonly drawer: {
            readonly duration: "300ms";
            readonly easing: "cubic-bezier(0.4, 0, 0.2, 1)";
        };
        readonly page: {
            readonly duration: "400ms";
            readonly easing: "cubic-bezier(0.4, 0, 0.2, 1)";
        };
    };
    readonly keyframes: {
        readonly fadeIn: {
            readonly from: {
                readonly opacity: 0;
            };
            readonly to: {
                readonly opacity: 1;
            };
        };
        readonly fadeOut: {
            readonly from: {
                readonly opacity: 1;
            };
            readonly to: {
                readonly opacity: 0;
            };
        };
        readonly slideInTop: {
            readonly from: {
                readonly transform: "translateY(-100%)";
            };
            readonly to: {
                readonly transform: "translateY(0)";
            };
        };
        readonly slideInBottom: {
            readonly from: {
                readonly transform: "translateY(100%)";
            };
            readonly to: {
                readonly transform: "translateY(0)";
            };
        };
        readonly slideInLeft: {
            readonly from: {
                readonly transform: "translateX(-100%)";
            };
            readonly to: {
                readonly transform: "translateX(0)";
            };
        };
        readonly slideInRight: {
            readonly from: {
                readonly transform: "translateX(100%)";
            };
            readonly to: {
                readonly transform: "translateX(0)";
            };
        };
        readonly scaleIn: {
            readonly from: {
                readonly transform: "scale(0.9)";
                readonly opacity: 0;
            };
            readonly to: {
                readonly transform: "scale(1)";
                readonly opacity: 1;
            };
        };
        readonly scaleOut: {
            readonly from: {
                readonly transform: "scale(1)";
                readonly opacity: 1;
            };
            readonly to: {
                readonly transform: "scale(0.9)";
                readonly opacity: 0;
            };
        };
        readonly spin: {
            readonly from: {
                readonly transform: "rotate(0deg)";
            };
            readonly to: {
                readonly transform: "rotate(360deg)";
            };
        };
        readonly pulse: {
            readonly '0%, 100%': {
                readonly opacity: 1;
            };
            readonly '50%': {
                readonly opacity: 0.5;
            };
        };
    };
    readonly breakpointValues: {
        readonly xs: 0;
        readonly sm: 490;
        readonly md: 768;
        readonly lg: 1040;
        readonly xl: 1440;
    };
    readonly breakpoints: {
        readonly xs: "@media (min-width: 0px)";
        readonly sm: "@media (min-width: 490px)";
        readonly md: "@media (min-width: 768px)";
        readonly lg: "@media (min-width: 1040px)";
        readonly xl: "@media (min-width: 1440px)";
        readonly xsOnly: `@media (max-width: ${number}px)`;
        readonly smOnly: `@media (min-width: 490px) and (max-width: ${number}px)`;
        readonly mdOnly: `@media (min-width: 768px) and (max-width: ${number}px)`;
        readonly lgOnly: `@media (min-width: 1040px) and (max-width: ${number}px)`;
        readonly xlOnly: "@media (min-width: 1440px)";
        readonly smDown: `@media (max-width: ${number}px)`;
        readonly mdDown: `@media (max-width: ${number}px)`;
        readonly lgDown: `@media (max-width: ${number}px)`;
        readonly xlDown: `@media (max-width: ${number}px)`;
    };
    readonly containerMaxWidth: {
        readonly sm: "490px";
        readonly md: "768px";
        readonly lg: "1040px";
        readonly xl: "1440px";
    };
};
export { figmaTokens, rawFigmaTokens } from './index.figma';
export type { ColorToken as FigmaColorToken, FontFamily as FigmaFontFamily, FontSize as FigmaFontSize, FontWeight as FigmaFontWeight, LineHeight as FigmaLineHeight, TypographyStyle as FigmaTypographyStyle, Shadow as FigmaShadow, ShadowButton as FigmaShadowButton, ShadowFocus as FigmaShadowFocus, ShadowSemantic as FigmaShadowSemantic, } from './index.figma';
//# sourceMappingURL=index.d.ts.map