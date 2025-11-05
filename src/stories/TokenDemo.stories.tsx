/**
 * Design Token Demo Stories
 *
 * Interactive showcase of all design tokens applied as CSS custom properties.
 * Demonstrates how tokens can be used in both React components and Web Components.
 */

import type { Meta, StoryObj } from '@storybook/react';
import { theme } from '../theme';

const meta: Meta = {
  title: 'Design Tokens/Token Demo',
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj;

/**
 * Display all color tokens with visual swatches
 */
export const Colors: Story = {
  render: () => {
    const colorTokens = Object.entries(theme.colors);

    return (
      <div>
        <h2 style={{ marginBottom: '1rem', fontFamily: 'var(--font-family-sans)' }}>
          Color Tokens
        </h2>
        <p style={{ marginBottom: '2rem', color: 'var(--color-text-secondary)' }}>
          {colorTokens.length} color tokens available as CSS custom properties
        </p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
            gap: '1rem',
          }}
        >
          {colorTokens.map(([key, value]) => (
            <div key={key} style={{ textAlign: 'center' }}>
              <div
                style={{
                  width: '100%',
                  height: '80px',
                  backgroundColor: `var(--${key})`,
                  border: '1px solid var(--color-border)',
                  borderRadius: '8px',
                  marginBottom: '8px',
                  boxShadow: 'var(--shadow-sm)',
                }}
              />
              <div
                style={{
                  fontSize: 'var(--font-size-xs)',
                  fontWeight: 'var(--font-weight-semibold)',
                  marginBottom: '4px',
                  color: 'var(--color-text-primary)',
                }}
              >
                {key.replace('color-', '')}
              </div>
              <div
                style={{
                  fontSize: 'var(--font-size-xs)',
                  color: 'var(--color-text-disabled)',
                  fontFamily: 'var(--font-family-mono)',
                }}
              >
                {value}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

/**
 * Display all typography tokens with text samples
 */
export const Typography: Story = {
  render: () => {
    const typographyTokens = Object.entries(theme.typography);

    return (
      <div>
        <h2 style={{ marginBottom: '1rem', fontFamily: 'var(--font-family-sans)' }}>
          Typography Tokens
        </h2>
        <p style={{ marginBottom: '2rem', color: 'var(--color-text-secondary)' }}>
          {typographyTokens.length} typography tokens available as CSS custom properties
        </p>

        {/* Font Sizes */}
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ marginBottom: '1rem', fontSize: 'var(--font-size-lg)' }}>Font Sizes</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {Object.entries(theme.typography)
              .filter(([key]) => key.startsWith('font-size'))
              .map(([key, value]) => (
                <div
                  key={key}
                  style={{
                    padding: '1rem',
                    backgroundColor: 'var(--color-bg-primary)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '8px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem' }}>
                    <div style={{ fontSize: `var(--${key})`, flex: 1 }}>
                      The quick brown fox jumps over the lazy dog
                    </div>
                    <div
                      style={{
                        fontSize: 'var(--font-size-xs)',
                        color: 'var(--color-text-disabled)',
                        minWidth: '100px',
                        textAlign: 'right',
                      }}
                    >
                      {key} ({typeof value === 'string' ? value : 'composite'})
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Semantic Typography Styles */}
        <div>
          <h3 style={{ marginBottom: '1rem', fontSize: 'var(--font-size-lg)' }}>
            Semantic Typography
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {Object.entries(theme.typography)
              .filter(
                ([key, value]) =>
                  (key.startsWith('font-heading') ||
                    key.startsWith('font-body') ||
                    key.startsWith('font-caption')) &&
                  typeof value === 'object'
              )
              .map(([key]) => (
                <div
                  key={key}
                  style={{
                    padding: '1rem',
                    backgroundColor: 'var(--color-bg-primary)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '8px',
                  }}
                >
                  <div
                    style={{
                      fontFamily: `var(--${key}-fontFamily)`,
                      fontSize: `var(--${key}-fontSize)`,
                      fontWeight: `var(--${key}-fontWeight)`,
                      lineHeight: `var(--${key}-lineHeight)`,
                      marginBottom: '0.5rem',
                    }}
                  >
                    {key.replace('font-', '').replace(/-/g, ' ')}
                  </div>
                  <div
                    style={{
                      fontSize: 'var(--font-size-xs)',
                      color: 'var(--color-text-disabled)',
                      fontFamily: 'var(--font-family-mono)',
                    }}
                  >
                    {key}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  },
};

/**
 * Display all shadow tokens with interactive cards
 */
export const Shadows: Story = {
  render: () => {
    const shadowTokens = Object.entries(theme.shadows);

    return (
      <div>
        <h2 style={{ marginBottom: '1rem', fontFamily: 'var(--font-family-sans)' }}>
          Shadow Tokens
        </h2>
        <p style={{ marginBottom: '2rem', color: 'var(--color-text-secondary)' }}>
          {shadowTokens.length} shadow tokens available as CSS custom properties
        </p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '2rem',
          }}
        >
          {shadowTokens.map(([key, value]) => (
            <div key={key}>
              <div
                style={{
                  width: '100%',
                  height: '140px',
                  backgroundColor: 'var(--color-bg-primary)',
                  borderRadius: '8px',
                  boxShadow: `var(--${key})`,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '1rem',
                  marginBottom: '1rem',
                }}
              >
                <div
                  style={{
                    fontSize: 'var(--font-size-base)',
                    fontWeight: 'var(--font-weight-semibold)',
                    color: 'var(--color-text-primary)',
                    marginBottom: '0.5rem',
                  }}
                >
                  {key.replace('shadow-', '').replace(/-/g, ' ')}
                </div>
                <div
                  style={{
                    fontSize: 'var(--font-size-xs)',
                    color: 'var(--color-text-disabled)',
                  }}
                >
                  {key}
                </div>
              </div>
              <div
                style={{
                  fontSize: 'var(--font-size-xs)',
                  color: 'var(--color-text-disabled)',
                  fontFamily: 'var(--font-family-mono)',
                  wordBreak: 'break-all',
                }}
              >
                {value === 'none' ? 'none' : value}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

/**
 * Interactive demo showing CSS custom property usage in real components
 */
export const UsageExample: Story = {
  render: () => {
    return (
      <div>
        <h2 style={{ marginBottom: '1rem', fontFamily: 'var(--font-family-sans)' }}>
          Token Usage Example
        </h2>
        <p style={{ marginBottom: '2rem', color: 'var(--color-text-secondary)' }}>
          Example card using CSS custom properties from design tokens
        </p>

        <div
          style={{
            maxWidth: '500px',
            backgroundColor: 'var(--color-bg-primary)',
            border: '1px solid var(--color-border)',
            borderRadius: '8px',
            padding: '1.5rem',
            boxShadow: 'var(--shadow-card)',
          }}
        >
          <h3
            style={{
              fontFamily: 'var(--font-family-sans)',
              fontSize: 'var(--font-size-xl)',
              fontWeight: 'var(--font-weight-bold)',
              color: 'var(--color-text-primary)',
              marginBottom: '0.5rem',
            }}
          >
            Card Title
          </h3>
          <p
            style={{
              fontFamily: 'var(--font-family-sans)',
              fontSize: 'var(--font-size-base)',
              fontWeight: 'var(--font-weight-regular)',
              color: 'var(--color-text-secondary)',
              lineHeight: 'var(--line-height-relaxed)',
              marginBottom: '1rem',
            }}
          >
            This card demonstrates how to use CSS custom properties generated from design tokens.
            All colors, typography, and shadows are referenced using var() syntax.
          </p>
          <button
            style={{
              fontFamily: 'var(--font-family-sans)',
              fontSize: 'var(--font-size-base)',
              fontWeight: 'var(--font-weight-medium)',
              color: 'var(--color-bg-primary)',
              backgroundColor: 'var(--color-text-interactive)',
              border: 'none',
              borderRadius: '8px',
              padding: '0.75rem 1.5rem',
              cursor: 'pointer',
              boxShadow: 'var(--shadow-button-default)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '0.9';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '1';
            }}
          >
            Action Button
          </button>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <h4 style={{ marginBottom: '0.5rem', fontSize: 'var(--font-size-base)' }}>
            CSS Code Example:
          </h4>
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
            {`.card {
  background-color: var(--color-bg-primary);
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-card);
}

.title {
  color: var(--color-text-primary);
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
}

.button {
  background-color: var(--color-text-interactive);
  box-shadow: var(--shadow-button-default);
}`}
          </pre>
        </div>
      </div>
    );
  },
};
