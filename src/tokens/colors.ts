/**
 * Polaris Design Tokens - Colors
 *
 * Color scales and semantic color tokens based on Shopify Polaris Design System.
 * These values are extracted from @shopify/polaris-tokens for reference.
 *
 * @see https://polaris.shopify.com/design/colors
 */

/**
 * Gray scale - Used for text, borders, and backgrounds
 */
export const gray = {
  50: '#FFFFFF',
  100: '#F7F7F7',
  200: '#EBEBEB',
  300: '#E3E3E3',
  400: '#C9CCCF',
  500: '#8C9196',
  600: '#616161',
  700: '#303030',
  800: '#1A1A1A',
  900: '#000000',
} as const;

/**
 * Blue scale - Primary brand color, actions, and links
 */
export const blue = {
  50: '#F4F6F8',
  100: '#E3F0FF',
  200: '#B7D8FF',
  300: '#7AB8FF',
  400: '#4C9AFF',
  500: '#0171E9',
  600: '#005BBB',
  700: '#004488',
  800: '#002E5D',
  900: '#001933',
} as const;

/**
 * Green scale - Success states and positive actions
 */
export const green = {
  50: '#F1F8F5',
  100: '#D4F0E1',
  200: '#A6DFC4',
  300: '#73C5A2',
  400: '#47A881',
  500: '#11837C',
  600: '#0F6F61',
  700: '#0C5548',
  800: '#093930',
  900: '#05201C',
} as const;

/**
 * Yellow scale - Warning and caution states
 */
export const yellow = {
  50: '#FFFEF7',
  100: '#FFF9E0',
  200: '#FFF4C4',
  300: '#FFEF9D',
  400: '#FFE56B',
  500: '#FFD423',
  600: '#E5B800',
  700: '#B38F00',
  800: '#806600',
  900: '#4D3D00',
} as const;

/**
 * Orange scale - Warnings and alerts
 */
export const orange = {
  50: '#FFF8F5',
  100: '#FFEEE5',
  200: '#FFDCC9',
  300: '#FFC299',
  400: '#FFA566',
  500: '#FF8A3D',
  600: '#E56B1A',
  700: '#B85000',
  800: '#8A3D00',
  900: '#5C2900',
} as const;

/**
 * Red scale - Critical states and errors
 */
export const red = {
  50: '#FFF5F5',
  100: '#FFEBEB',
  200: '#FFD6D6',
  300: '#FFB8B8',
  400: '#FF9494',
  500: '#E01A1A',
  600: '#C21414',
  700: '#940F0F',
  800: '#660A0A',
  900: '#380505',
} as const;

/**
 * Purple scale - Magic and special features
 */
export const purple = {
  50: '#F9F7FA',
  100: '#F2EDFF',
  200: '#E3D5FF',
  300: '#C9B3FF',
  400: '#B08AFF',
  500: '#8151FF',
  600: '#6B3FCC',
  700: '#532E99',
  800: '#3B1F66',
  900: '#221133',
} as const;

/**
 * Azure scale - Information and neutral accents
 */
export const azure = {
  50: '#F5F8FA',
  100: '#E8F2F7',
  200: '#C8E1ED',
  300: '#A3CDE0',
  400: '#7DB5D1',
  500: '#0084B8',
  600: '#006D99',
  700: '#005573',
  800: '#003D52',
  900: '#002633',
} as const;

/**
 * Semantic color mappings for common use cases
 */
export const semantic = {
  // Backgrounds
  surface: gray[50],
  surfaceSubdued: gray[100],
  surfaceDisabled: gray[200],

  // Text
  textPrimary: gray[900],
  textSecondary: gray[700],
  textDisabled: gray[500],
  textCritical: red[600],
  textWarning: yellow[700],
  textSuccess: green[600],
  textInfo: blue[600],

  // Borders
  border: gray[300],
  borderSubdued: gray[200],
  borderDisabled: gray[300],

  // Interactive
  interactive: blue[500],
  interactiveHovered: blue[600],
  interactivePressed: blue[700],
  interactiveDisabled: gray[400],

  // Status
  success: green[500],
  successSubdued: green[100],
  warning: yellow[500],
  warningSubdued: yellow[100],
  critical: red[500],
  criticalSubdued: red[100],
  info: blue[500],
  infoSubdued: blue[100],
} as const;

/**
 * All color tokens
 */
export const colors = {
  gray,
  blue,
  green,
  yellow,
  orange,
  red,
  purple,
  azure,
  semantic,
} as const;

export type ColorScale = keyof typeof colors;
export type GrayShade = keyof typeof gray;
export type BlueShade = keyof typeof blue;
export type ColorToken = keyof typeof semantic;
