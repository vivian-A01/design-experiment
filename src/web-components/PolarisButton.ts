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

export class PolarisButton extends HTMLElement {
  static get observedAttributes() {
    return ['variant', 'disabled'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
    this.setupEventListeners();
  }

  attributeChangedCallback() {
    this.render();
  }

  get variant() {
    return this.getAttribute('variant') || 'secondary';
  }

  get disabled() {
    return this.hasAttribute('disabled');
  }

  setupEventListeners() {
    const button = this.shadowRoot?.querySelector('button');
    if (button) {
      button.addEventListener('click', (e) => {
        if (!this.disabled) {
          this.dispatchEvent(new CustomEvent('polaris-click', {
            bubbles: true,
            composed: true,
            detail: { originalEvent: e }
          }));
        }
      });
    }
  }

  getVariantStyles() {
    const variants = {
      primary: `
        background-color: var(--color-text-interactive, #0171E9);
        color: var(--color-bg-primary, #ffffff);
        border: none;
      `,
      secondary: `
        background-color: var(--color-bg-primary, #ffffff);
        color: var(--color-text-primary, #000000);
        border: 1px solid var(--color-border, #e3e3e3);
      `,
      critical: `
        background-color: var(--color-red-500, #E01A1A);
        color: var(--color-bg-primary, #ffffff);
        border: none;
      `,
    };

    return variants[this.variant as keyof typeof variants] || variants.secondary;
  }

  render() {
    if (!this.shadowRoot) return;

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: inline-block;
        }

        button {
          font-family: var(--font-family-sans, -apple-system, BlinkMacSystemFont, sans-serif);
          font-size: var(--font-size-base, 14px);
          font-weight: var(--font-weight-medium, 500);
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: var(--shadow-button-default, inset 0px -1px 0px 0px rgba(0, 0, 0, 0.2));
          ${this.getVariantStyles()}
        }

        button:hover:not(:disabled) {
          opacity: 0.9;
          transform: translateY(-1px);
        }

        button:active:not(:disabled) {
          transform: translateY(0);
        }

        button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          background-color: var(--color-bg-subdued, #f7f7f7);
          color: var(--color-text-disabled, #8C9196);
        }

        button:focus-visible {
          outline: none;
          box-shadow: var(--shadow-focus, 0 0 0 3px rgba(1, 113, 233, 0.35));
        }
      </style>

      <button ${this.disabled ? 'disabled' : ''}>
        <slot></slot>
      </button>
    `;

    this.setupEventListeners();
  }
}

// Register the custom element
if (!customElements.get('polaris-button')) {
  customElements.define('polaris-button', PolarisButton);
}
