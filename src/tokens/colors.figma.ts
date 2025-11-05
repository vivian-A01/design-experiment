/**
 * Polaris Design Tokens - Colors (Figma Pipeline)
 *
 * This file imports raw color tokens from Figma JSON exports and transforms them
 * into normalized RGBA format with semantic aliases for design system consistency.
 *
 * Pipeline: Figma JSON → Normalization → Semantic Mapping → Frozen TypeScript Object
 */

import figmaColors from '../../tokens/colors.figma.json';
import tokenAliases from '../../mapping/token-alias.json';

/**
 * Convert hex color to rgba format
 * @param hex - Hex color string (e.g., "#FFFFFF" or "#FFF")
 * @param alpha - Optional alpha value (0-1)
 */
function hexToRgba(hex: string, alpha: number = 1): string {
  const cleanHex = hex.replace('#', '');
  const r = parseInt(cleanHex.substring(0, 2), 16);
  const g = parseInt(cleanHex.substring(2, 4), 16);
  const b = parseInt(cleanHex.substring(4, 6), 16);

  return alpha === 1 ? `rgb(${r}, ${g}, ${b})` : `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

/**
 * Normalize Figma color tokens to rgba format
 */
function normalizeColors(figmaColors: Record<string, string>): Record<string, string> {
  const normalized: Record<string, string> = {};

  for (const [key, value] of Object.entries(figmaColors)) {
    if (typeof value === 'string' && value.startsWith('#')) {
      normalized[key] = hexToRgba(value);
    } else {
      normalized[key] = value;
    }
  }

  return normalized;
}

/**
 * Apply semantic aliases from mapping file
 */
function applyAliases(
  normalizedColors: Record<string, string>,
  aliases: Record<string, string>
): Record<string, string> {
  const aliased: Record<string, string> = {};

  for (const [figmaKey, semanticName] of Object.entries(aliases)) {
    if (normalizedColors[figmaKey]) {
      aliased[semanticName] = normalizedColors[figmaKey];
    }
  }

  return aliased;
}

// Process colors through the pipeline
const normalizedColors = normalizeColors(figmaColors.colors);
const colorAliases = tokenAliases.aliases.colors;
const semanticColors = applyAliases(normalizedColors, colorAliases);

/**
 * Figma-sourced color tokens (normalized to RGBA)
 */
export const figmaColorTokens = {
  // Raw Figma colors (normalized)
  raw: normalizedColors,

  // Semantic aliases for design system
  semantic: semanticColors,
} as const;

/**
 * Semantic color tokens for application use
 * These match the Polaris design system naming conventions
 */
export const colors = {
  // Surface colors
  surface: semanticColors.surface || 'rgb(255, 255, 255)',
  surfaceSubdued: semanticColors.surfaceSubdued || 'rgb(247, 247, 247)',

  // Border colors
  border: semanticColors.border || 'rgb(227, 227, 227)',

  // Text colors
  textPrimary: semanticColors.textPrimary || 'rgb(0, 0, 0)',
  textSecondary: semanticColors.textSecondary || 'rgb(48, 48, 48)',
  textDisabled: semanticColors.textDisabled || 'rgb(140, 145, 150)',

  // Interactive colors
  interactive: semanticColors.interactive || 'rgb(1, 113, 233)',

  // Status colors
  success: semanticColors.success || 'rgb(17, 131, 124)',
  critical: semanticColors.critical || 'rgb(224, 26, 26)',
  warning: semanticColors.warning || 'rgb(255, 239, 157)',
} as const;

export type ColorToken = keyof typeof colors;
