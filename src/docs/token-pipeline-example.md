# Token Pipeline Example

## Overview

This design system library includes a **Figma-to-TypeScript token pipeline** that transforms raw Figma design tokens into normalized, type-safe TypeScript constants.

## Pipeline Architecture

```
Figma Export → JSON Files → TypeScript Transformations → Frozen Objects → Application Use
```

### Step 1: Figma JSON Exports

Raw design tokens are exported from Figma and placed in `/tokens/`:

- `/tokens/colors.figma.json` - Color hex values
- `/tokens/typography.figma.json` - Font families, sizes (px), weights, line heights (px)
- `/tokens/shadows.figma.json` - Shadow definitions with x/y/blur/spread/color

### Step 2: Token Alias Mapping

The `/mapping/token-alias.json` file maps Figma token names to semantic design system names:

```json
{
  "aliases": {
    "colors": {
      "figma/gray/900": "textPrimary",
      "figma/blue/500": "interactive"
    }
  }
}
```

### Step 3: TypeScript Transformation

TypeScript files in `/src/tokens/*.figma.ts` import JSON and apply transformations:

**Colors**: Hex → RGBA
```typescript
// Input: "#FFFFFF"
// Output: "rgb(255, 255, 255)"
```

**Typography**: Pixels → Rem
```typescript
// Input: "16" (px)
// Output: "1rem"
```

**Shadows**: Object → CSS String
```typescript
// Input: { x: "0", y: "1", blur: "3", color: "rgba(0,0,0,0.1)" }
// Output: "0px 1px 3px 0px rgba(0,0,0,0.1)"
```

### Step 4: Frozen Export

All tokens are exported as `const` frozen objects for immutability.

## Usage Examples

### Using Figma Pipeline Tokens

```typescript
import { figmaTokens } from '@/tokens';

// Colors (normalized to RGB)
const primaryText = figmaTokens.colors.textPrimary; // "rgb(0, 0, 0)"
const interactive = figmaTokens.colors.interactive;  // "rgb(1, 113, 233)"

// Typography (normalized to rem)
const headingSize = figmaTokens.fontSize[700];     // "1.5rem"
const bodyFont = figmaTokens.fontFamily.sans;      // "-apple-system, BlinkMacSystemFont..."

// Shadows (normalized to CSS box-shadow)
const cardShadow = figmaTokens.shadows.card;       // "0px 1px 3px 0px rgba(0, 0, 0, 0.1)"
```

### Using Phase 1 Hardcoded Tokens

```typescript
import { colors, typography, shadows } from '@/tokens';

// Color scales
const blue500 = colors.blue[500];           // "#0171E9"
const grayScale = colors.gray;              // { 50: "#FFFFFF", 100: "#F7F7F7", ... }

// Typography presets
const heading = typography.headingLg;       // { fontFamily, fontSize, fontWeight, lineHeight }

// Shadow tokens
const cardShadow = shadows.card;            // "0 1px 3px 0 rgba(0, 0, 0, 0.1)"
```

## Pipeline Benefits

1. **Single Source of Truth**: Figma is the source, code is generated
2. **Type Safety**: TypeScript ensures tokens are used correctly
3. **Normalization**: Consistent formats (rgba, rem, box-shadow CSS)
4. **Semantic Naming**: Figma names mapped to design system conventions
5. **No Runtime Fetching**: All tokens bundled at build time
6. **Immutable**: `as const` prevents accidental modifications

## Adding New Tokens

1. Export tokens from Figma to `/tokens/*.figma.json`
2. Add semantic aliases to `/mapping/token-alias.json`
3. TypeScript transformation happens automatically
4. Import and use in your components

## File Structure

```
/tokens/                      # Figma JSON exports
  ├── colors.figma.json
  ├── typography.figma.json
  └── shadows.figma.json

/mapping/                     # Semantic aliases
  └── token-alias.json

/src/tokens/                  # TypeScript transformations
  ├── colors.figma.ts        # Color normalization
  ├── typography.figma.ts    # Typography normalization
  ├── shadows.figma.ts       # Shadow normalization
  ├── index.figma.ts         # Figma token exports
  └── index.ts               # Main token exports (both Phase 1 + Figma)
```

## Notes

- Phase 1 tokens (hardcoded) remain available for backward compatibility
- Figma tokens are opt-in via `import { figmaTokens }` or `import * as figma from 'tokens/figma'`
- Both token systems can coexist during migration
