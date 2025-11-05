# File Structure Reference

Complete file structure of the Polaris Design Library project.

```
polaris-design-library/
│
├── 📋 Project Configuration
│   ├── package.json                    # Dependencies, scripts, and package metadata
│   ├── tsconfig.json                   # TypeScript compiler configuration
│   ├── vite.config.ts                  # Vite build tool configuration
│   └── .gitignore                      # Git ignore patterns
│
├── 📚 Storybook Configuration
│   └── .storybook/
│       ├── main.ts                     # Storybook main configuration
│       ├── preview.ts                  # Storybook preview settings
│       └── preview-head.html           # Custom HTML for Storybook preview iframe
│
├── 💻 Source Code
│   └── src/
│       │
│       ├── 🔧 Utilities
│       │   └── utils/
│       │       └── createWebComponentWrapper.tsx
│       │           ↳ Core utility for wrapping web components in React
│       │           ↳ Handles props, events, refs, and TypeScript types
│       │
│       ├── 🎨 Components
│       │   └── components/
│       │       │
│       │       ├── 📄 Documentation Pages
│       │       │   ├── Introduction.mdx       # Storybook introduction page
│       │       │   └── GettingStarted.mdx     # Getting started guide for Storybook
│       │       │
│       │       └── 🔘 Button Component
│       │           ├── Button.tsx             # React wrapper component
│       │           ├── Button.types.ts        # TypeScript type definitions
│       │           ├── Button.stories.tsx     # Storybook stories (12+ examples)
│       │           └── index.ts               # Public exports
│       │
│       └── index.ts                    # Main library entry point (exports all components)
│
├── 📖 Documentation
│   ├── README.md                       # Main documentation
│   ├── QUICK_START.md                  # Quick start guide
│   ├── COMPONENT_GUIDE.md              # Guide for adding new components
│   ├── EXAMPLE_NEW_COMPONENT.md        # Complete example: Stack component
│   ├── PROJECT_SUMMARY.md              # Project overview and architecture
│   └── FILE_STRUCTURE.md               # This file
│
└── 📦 Build Output (generated after `npm run build`)
    └── dist/
        ├── index.js                    # ES module bundle
        ├── index.cjs                   # CommonJS bundle
        ├── index.d.ts                  # TypeScript type definitions
        ├── *.map                       # Source maps
        └── style.css                   # Component styles (if any)
```

## File Purposes

### Configuration Files

| File | Purpose | Key Features |
|------|---------|-------------|
| `package.json` | Project metadata and dependencies | Scripts, exports, peer dependencies |
| `tsconfig.json` | TypeScript configuration | Strict mode, path aliases, ES2020 target |
| `vite.config.ts` | Build configuration | Library mode, multiple formats, DTS generation |
| `.gitignore` | Git ignore rules | node_modules, dist, build artifacts |

### Storybook Files

| File | Purpose |
|------|---------|
| `.storybook/main.ts` | Storybook main config - addons, framework, stories location |
| `.storybook/preview.ts` | Global Storybook settings - controls, themes, decorators |
| `.storybook/preview-head.html` | Custom HTML for preview iframe |

### Source Files

| File | Purpose | LOC |
|------|---------|-----|
| `src/utils/createWebComponentWrapper.tsx` | Generic web component wrapper utility | ~100 |
| `src/components/Button/Button.types.ts` | TypeScript type definitions for Button | ~150 |
| `src/components/Button/Button.tsx` | React Button component wrapper | ~40 |
| `src/components/Button/Button.stories.tsx` | Storybook stories and examples | ~400 |
| `src/components/Button/index.ts` | Button component exports | ~10 |
| `src/index.ts` | Main library exports | ~20 |

### Documentation Files

| File | Purpose | Audience |
|------|---------|----------|
| `README.md` | Main documentation, installation, usage | All users |
| `QUICK_START.md` | Quick start guide, commands | Developers |
| `COMPONENT_GUIDE.md` | How to add new components | Contributors |
| `EXAMPLE_NEW_COMPONENT.md` | Complete Stack component example | Contributors |
| `PROJECT_SUMMARY.md` | Architecture, design decisions | Team leads |
| `FILE_STRUCTURE.md` | File organization reference | All users |

## Component File Pattern

Each component follows this structure:

```
ComponentName/
├── ComponentName.tsx           # React wrapper using createWebComponentWrapper
├── ComponentName.types.ts      # TypeScript type definitions
├── ComponentName.stories.tsx   # Storybook stories with examples
└── index.ts                    # Public exports
```

### Example: Button Component

```
Button/
├── Button.tsx                  # 40 lines - wraps <s-button>
├── Button.types.ts             # 150 lines - all props, types, events
├── Button.stories.tsx          # 400 lines - 12+ stories
└── index.ts                    # 10 lines - exports
```

## Import/Export Flow

```
User Application
    ↓ imports
src/index.ts (main entry)
    ↓ exports from
src/components/Button/index.ts
    ↓ exports
src/components/Button/Button.tsx
    ↓ uses
src/utils/createWebComponentWrapper.tsx
    ↓ wraps
<s-button> (Polaris Web Component)
```

## Build Process

```
Source Files (src/)
    ↓
TypeScript Compiler (tsc)
    ↓
Vite Build (vite build)
    ↓
Output (dist/)
    ├── ES Module (index.js)
    ├── CommonJS (index.cjs)
    ├── Type Definitions (index.d.ts)
    └── Source Maps (*.map)
```

## Storybook Structure

```
Storybook
├── Introduction              # src/components/Introduction.mdx
├── Getting Started          # src/components/GettingStarted.mdx
└── Components/
    └── Button               # src/components/Button/Button.stories.tsx
        ├── Basic Usage
        ├── Variants
        ├── Tones
        ├── With Icon
        ├── Icon Only
        ├── Loading State
        ├── Form States
        ├── Link Buttons
        ├── Form Submission Buttons
        ├── Delete Confirmation
        ├── Navigation Button With Icon
        ├── Button Group For Bulk Operations
        ├── Icon Only Buttons With Labels
        └── Playground
```

## Key Metrics

| Metric | Value |
|--------|-------|
| Total Files | ~20 |
| Components | 1 (Button) |
| Storybook Stories | 12+ |
| TypeScript Files | 10 |
| Documentation Files | 6 |
| Lines of Code (src/) | ~700 |
| Dependencies | 3 |
| Dev Dependencies | 13 |

## Dependencies

### Production
- `@shopify/polaris` - Polaris Web Components foundation

### Peer Dependencies (required by users)
- `react` - React framework
- `react-dom` - React DOM renderer

### Dev Dependencies
- `typescript` - Type safety
- `vite` - Build tool
- `vite-plugin-dts` - TypeScript declarations
- `@vitejs/plugin-react` - React support
- `storybook` - Documentation
- `@storybook/*` - Storybook addons

## File Sizes (Estimated)

| Category | Size |
|----------|------|
| Source Code | ~50 KB |
| Documentation | ~100 KB |
| Configuration | ~5 KB |
| Built Library | ~15 KB (minified) |
| Storybook Build | ~2 MB |

## Next Steps

To add a new component, create this structure:

```
src/components/NewComponent/
├── NewComponent.tsx           # Copy pattern from Button.tsx
├── NewComponent.types.ts      # Define types from Polaris API
├── NewComponent.stories.tsx   # Create stories
└── index.ts                   # Export component and types
```

Then update `src/index.ts` to export the new component.

See [EXAMPLE_NEW_COMPONENT.md](./EXAMPLE_NEW_COMPONENT.md) for a complete example.
