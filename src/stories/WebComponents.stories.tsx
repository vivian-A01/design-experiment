/**
 * Web Components Demo Stories
 *
 * Demonstrates custom Polaris-styled Web Components using design tokens.
 * These components work in any framework or vanilla JavaScript.
 */

import type { Meta, StoryObj } from '@storybook/react';
import '../web-components';

const meta: Meta = {
  title: 'Web Components/Polaris Components',
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj;

/**
 * Polaris Button Web Component
 */
export const Button: Story = {
  render: () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <h2 style={{ fontFamily: 'var(--font-family-sans)', marginBottom: '0.5rem' }}>
          Polaris Button Web Component
        </h2>
        <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1rem' }}>
          Custom Web Component styled with Polaris design tokens
        </p>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <polaris-button variant="primary">Primary Button</polaris-button>
          <polaris-button variant="secondary">Secondary Button</polaris-button>
          <polaris-button variant="critical">Critical Button</polaris-button>
          <polaris-button disabled>Disabled Button</polaris-button>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <h3 style={{ fontSize: 'var(--font-size-lg)', marginBottom: '0.5rem' }}>
            Usage:
          </h3>
          <pre
            style={{
              backgroundColor: 'var(--color-gray-900)',
              color: 'var(--color-gray-50)',
              padding: '1rem',
              borderRadius: '8px',
              fontFamily: 'var(--font-family-mono)',
              fontSize: 'var(--font-size-sm)',
              overflow: 'auto',
            }}
          >
            {`<polaris-button variant="primary">Click me</polaris-button>
<polaris-button variant="critical">Delete</polaris-button>
<polaris-button disabled>Disabled</polaris-button>`}
          </pre>
        </div>
      </div>
    );
  },
};

/**
 * Polaris Card Web Component
 */
export const Card: Story = {
  render: () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div>
          <h2 style={{ fontFamily: 'var(--font-family-sans)', marginBottom: '0.5rem' }}>
            Polaris Card Web Component
          </h2>
          <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1rem' }}>
            Custom Web Component with slots for flexible content
          </p>
        </div>

        <div style={{ maxWidth: '600px' }}>
          <polaris-card>
            <h2 slot="title">Product Information</h2>
            <p>
              This card is built using Web Components and styled with Polaris design tokens.
              It supports multiple content slots for flexible layouts.
            </p>
            <div slot="actions">
              <polaris-button variant="primary">Save</polaris-button>
              <polaris-button variant="secondary">Cancel</polaris-button>
            </div>
          </polaris-card>
        </div>

        <div style={{ maxWidth: '600px' }}>
          <polaris-card>
            <h2 slot="title">Another Card Example</h2>
            <p>
              Cards automatically use CSS custom properties like <code>--color-bg-primary</code>,
              <code>--shadow-card</code>, and <code>--shadow-card-hovered</code>. Try hovering!
            </p>
          </polaris-card>
        </div>

        <div style={{ marginTop: '1rem' }}>
          <h3 style={{ fontSize: 'var(--font-size-lg)', marginBottom: '0.5rem' }}>
            Usage:
          </h3>
          <pre
            style={{
              backgroundColor: 'var(--color-gray-900)',
              color: 'var(--color-gray-50)',
              padding: '1rem',
              borderRadius: '8px',
              fontFamily: 'var(--font-family-mono)',
              fontSize: 'var(--font-size-sm)',
              overflow: 'auto',
            }}
          >
            {`<polaris-card>
  <h2 slot="title">Card Title</h2>
  <p>Card content goes here</p>
  <div slot="actions">
    <polaris-button>Action</polaris-button>
  </div>
</polaris-card>`}
          </pre>
        </div>
      </div>
    );
  },
};

/**
 * Combined Layout Example
 */
export const CombinedLayout: Story = {
  render: () => {
    const handleButtonClick = (event: Event) => {
      alert(`Button clicked! Variant: ${(event.target as any).variant}`);
    };

    return (
      <div>
        <h2 style={{ fontFamily: 'var(--font-family-sans)', marginBottom: '1rem' }}>
          Complete Layout Example
        </h2>
        <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2rem' }}>
          Demonstrating multiple Web Components working together
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          <polaris-card>
            <h2 slot="title">User Profile</h2>
            <p style={{ marginBottom: '1rem' }}>
              Manage your account settings and preferences.
            </p>
            <div slot="actions">
              <polaris-button
                variant="primary"
                onClick={handleButtonClick}
              >
                Edit Profile
              </polaris-button>
            </div>
          </polaris-card>

          <polaris-card>
            <h2 slot="title">Notifications</h2>
            <p style={{ marginBottom: '1rem' }}>
              You have 3 unread notifications.
            </p>
            <div slot="actions">
              <polaris-button
                variant="secondary"
                onClick={handleButtonClick}
              >
                View All
              </polaris-button>
            </div>
          </polaris-card>

          <polaris-card>
            <h2 slot="title">Danger Zone</h2>
            <p style={{ marginBottom: '1rem' }}>
              Permanently delete your account and all data.
            </p>
            <div slot="actions">
              <polaris-button
                variant="critical"
                onClick={handleButtonClick}
              >
                Delete Account
              </polaris-button>
            </div>
          </polaris-card>
        </div>

        <div style={{ marginTop: '3rem' }}>
          <h3 style={{ fontSize: 'var(--font-size-lg)', marginBottom: '1rem' }}>
            How Web Components Use Design Tokens
          </h3>
          <ul style={{ listStyle: 'disc', paddingLeft: '2rem', color: 'var(--color-text-secondary)' }}>
            <li>All colors reference CSS custom properties like <code>var(--color-text-primary)</code></li>
            <li>Typography uses <code>var(--font-family-sans)</code>, <code>var(--font-size-base)</code>, etc.</li>
            <li>Shadows use <code>var(--shadow-card)</code> and <code>var(--shadow-button-default)</code></li>
            <li>Tokens are applied globally, so components work anywhere in your app</li>
            <li>Components include fallback values for environments without tokens</li>
          </ul>
        </div>
      </div>
    );
  },
};

/**
 * Interactive Demo
 */
export const Interactive: Story = {
  render: () => {
    return (
      <div>
        <h2 style={{ fontFamily: 'var(--font-family-sans)', marginBottom: '1rem' }}>
          Interactive Web Components
        </h2>
        <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2rem' }}>
          Click buttons to see custom events in action
        </p>

        <polaris-card>
          <h2 slot="title">Event Handling Example</h2>
          <p style={{ marginBottom: '1rem' }}>
            These buttons dispatch custom <code>polaris-click</code> events that bubble up through
            the DOM. Try clicking them!
          </p>
          <div slot="actions" style={{ display: 'flex', gap: '0.5rem' }}>
            <polaris-button
              variant="primary"
              onClick={(e: any) => {
                console.log('Primary button clicked:', e);
                alert('Primary button clicked! Check console for event details.');
              }}
            >
              Primary Action
            </polaris-button>
            <polaris-button
              variant="secondary"
              onClick={(e: any) => {
                console.log('Secondary button clicked:', e);
                alert('Secondary button clicked!');
              }}
            >
              Secondary Action
            </polaris-button>
            <polaris-button
              variant="critical"
              onClick={(e: any) => {
                if (confirm('Are you sure you want to perform this critical action?')) {
                  console.log('Critical action confirmed:', e);
                  alert('Critical action executed!');
                }
              }}
            >
              Critical Action
            </polaris-button>
          </div>
        </polaris-card>
      </div>
    );
  },
};

// Extend JSX IntrinsicElements for TypeScript support
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      'polaris-button': any;
      'polaris-card': any;
    }
  }
}
