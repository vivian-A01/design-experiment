/**
 * Register Design Tokens for Web Components
 *
 * Auto-registers all design tokens as CSS custom properties on document load.
 * This makes tokens available globally for Web Components and vanilla JavaScript.
 *
 * Usage:
 * 1. Import this file at the top of your entry point:
 *    ```ts
 *    import './theme/register-tokens';
 *    ```
 *
 * 2. Then use CSS variables in your Web Components:
 *    ```css
 *    :host {
 *      color: var(--color-text-primary);
 *      font-size: var(--font-size-base);
 *      box-shadow: var(--shadow-card);
 *    }
 *    ```
 */
/**
 * Register all design tokens as CSS custom properties
 */
export declare function registerDesignTokens(): void;
export default registerDesignTokens;
//# sourceMappingURL=register-tokens.d.ts.map