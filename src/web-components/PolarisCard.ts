/**
 * Polaris Card Web Component
 *
 * A custom Web Component styled with Polaris design tokens.
 * Demonstrates how to use CSS custom properties from the design system.
 *
 * Usage:
 * ```html
 * <polaris-card>
 *   <h2 slot="title">Card Title</h2>
 *   <p>Card content goes here</p>
 * </polaris-card>
 * ```
 */

export class PolarisCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    if (!this.shadowRoot) return;

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          background-color: var(--color-bg-primary, #ffffff);
          border: 1px solid var(--color-border, #e3e3e3);
          border-radius: 8px;
          padding: 1.5rem;
          box-shadow: var(--shadow-card, 0px 1px 3px 0px rgba(0, 0, 0, 0.1));
          font-family: var(--font-family-sans, -apple-system, BlinkMacSystemFont, sans-serif);
        }

        :host(:hover) {
          box-shadow: var(--shadow-card-hovered, 0px 4px 6px -1px rgba(0, 0, 0, 0.1));
        }

        ::slotted([slot="title"]) {
          color: var(--color-text-primary, #000000);
          font-size: var(--font-size-xl, 20px);
          font-weight: var(--font-weight-bold, 700);
          margin: 0 0 1rem 0;
        }

        ::slotted(p) {
          color: var(--color-text-secondary, #303030);
          font-size: var(--font-size-base, 14px);
          line-height: var(--line-height-relaxed, 24px);
          margin: 0;
        }

        .card-actions {
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px solid var(--color-border, #e3e3e3);
        }

        ::slotted([slot="actions"]) {
          display: flex;
          gap: 0.5rem;
        }
      </style>

      <slot name="title"></slot>
      <slot></slot>
      <div class="card-actions">
        <slot name="actions"></slot>
      </div>
    `;
  }
}

// Register the custom element
if (!customElements.get('polaris-card')) {
  customElements.define('polaris-card', PolarisCard);
}
