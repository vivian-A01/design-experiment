/**
 * Polaris Design Tokens - Breakpoints
 *
 * Responsive breakpoint tokens for media queries.
 * Based on Shopify Polaris Design System breakpoints.
 *
 * @see https://polaris.shopify.com/design/breakpoints
 */
/**
 * Breakpoint values in pixels
 */
export declare const breakpointValues: {
    /** 0px - Extra small devices (phones) */
    readonly xs: 0;
    /** 490px - Small devices (small tablets) */
    readonly sm: 490;
    /** 768px - Medium devices (tablets) */
    readonly md: 768;
    /** 1040px - Large devices (desktops) */
    readonly lg: 1040;
    /** 1440px - Extra large devices (large desktops) */
    readonly xl: 1440;
};
/**
 * Breakpoint media queries
 */
export declare const breakpoints: {
    /** Extra small and up (0px+) */
    readonly xs: "@media (min-width: 0px)";
    /** Small and up (490px+) */
    readonly sm: "@media (min-width: 490px)";
    /** Medium and up (768px+) */
    readonly md: "@media (min-width: 768px)";
    /** Large and up (1040px+) */
    readonly lg: "@media (min-width: 1040px)";
    /** Extra large and up (1440px+) */
    readonly xl: "@media (min-width: 1440px)";
    /** Only extra small (0-489px) */
    readonly xsOnly: `@media (max-width: ${number}px)`;
    /** Only small (490-767px) */
    readonly smOnly: `@media (min-width: 490px) and (max-width: ${number}px)`;
    /** Only medium (768-1039px) */
    readonly mdOnly: `@media (min-width: 768px) and (max-width: ${number}px)`;
    /** Only large (1040-1439px) */
    readonly lgOnly: `@media (min-width: 1040px) and (max-width: ${number}px)`;
    /** Only extra large (1440px+) */
    readonly xlOnly: "@media (min-width: 1440px)";
    /** Down from small (<490px) */
    readonly smDown: `@media (max-width: ${number}px)`;
    /** Down from medium (<768px) */
    readonly mdDown: `@media (max-width: ${number}px)`;
    /** Down from large (<1040px) */
    readonly lgDown: `@media (max-width: ${number}px)`;
    /** Down from extra large (<1440px) */
    readonly xlDown: `@media (max-width: ${number}px)`;
};
/**
 * Utility function to create custom media queries
 */
export declare const createMediaQuery: (minWidth: number, maxWidth?: number) => string;
/**
 * Container max widths at different breakpoints
 */
export declare const containerMaxWidth: {
    readonly sm: "490px";
    readonly md: "768px";
    readonly lg: "1040px";
    readonly xl: "1440px";
};
export type Breakpoint = keyof typeof breakpointValues;
export type BreakpointQuery = keyof typeof breakpoints;
//# sourceMappingURL=breakpoints.d.ts.map