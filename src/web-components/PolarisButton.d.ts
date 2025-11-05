/**
 * Polaris Button Web Component
 *
 * A custom button Web Component styled with Polaris design tokens.
 * Supports multiple variants: primary, secondary, critical.
 *
 * Usage:
 * ```html
 * <polaris-button variant="primary">Click me</polaris-button>
 * <polaris-button variant="critical">Delete</polaris-button>
 * <polaris-button disabled>Disabled</polaris-button>
 * ```
 */
export declare class PolarisButton extends HTMLElement {
    static get observedAttributes(): string[];
    constructor();
    connectedCallback(): void;
    attributeChangedCallback(): void;
    get variant(): string;
    get disabled(): boolean;
    setupEventListeners(): void;
    getVariantStyles(): string;
    render(): void;
}
//# sourceMappingURL=PolarisButton.d.ts.map