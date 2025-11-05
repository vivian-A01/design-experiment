/**
 * Polaris Design Tokens - Colors (Figma Pipeline)
 *
 * This file imports raw color tokens from Figma JSON exports and transforms them
 * into normalized RGBA format with semantic aliases for design system consistency.
 *
 * Pipeline: Figma JSON → Normalization → Semantic Mapping → Frozen TypeScript Object
 */
/**
 * Figma-sourced color tokens (normalized to RGBA)
 */
export declare const figmaColorTokens: {
    readonly raw: Record<string, string>;
    readonly semantic: Record<string, string>;
};
/**
 * Semantic color tokens for application use
 * These match the Polaris design system naming conventions
 */
export declare const colors: {
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
export type ColorToken = keyof typeof colors;
//# sourceMappingURL=colors.figma.d.ts.map