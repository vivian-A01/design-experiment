import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

/**
 * Triggers actions or events, such as submitting forms, opening dialogs, or
 * navigating to other pages. Use Button to let users perform specific tasks or
 * initiate interactions throughout the interface.
 */
const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Triggers actions or events, such as submitting forms, opening dialogs, or navigating to other pages. Use Button to let users perform specific tasks or initiate interactions throughout the interface. Buttons can also function as links, guiding users to internal or external destinations.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['auto', 'primary', 'secondary', 'tertiary'],
      description: 'Changes the visual appearance of the Button',
      table: {
        defaultValue: { summary: 'auto' },
      },
    },
    tone: {
      control: 'select',
      options: ['auto', 'neutral', 'critical'],
      description: 'Sets the tone of the Button based on the intention',
      table: {
        defaultValue: { summary: 'auto' },
      },
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
      description: 'The behavior of the Button',
      table: {
        defaultValue: { summary: 'button' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the Button',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    loading: {
      control: 'boolean',
      description: 'Shows loading indicator and disables the Button',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    icon: {
      control: 'text',
      description: 'The type of icon to be displayed in the Button',
    },
    accessibilityLabel: {
      control: 'text',
      description: 'A label for screen readers',
    },
    href: {
      control: 'text',
      description: 'The URL to link to',
    },
    target: {
      control: 'select',
      options: ['auto', '_blank', '_self', '_parent', '_top'],
      description: 'Specifies where to display the linked URL',
      table: {
        defaultValue: { summary: 'auto' },
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Demonstrates a simple button with default styling, automatically determining
 * its visual variant and using a clear, action-oriented label.
 */
export const BasicUsage: Story = {
  args: {
    children: 'Save',
  },
};

/**
 * Showcases different button variants with varying visual emphasis, helping
 * merchants understand action priorities through distinct styling.
 */
export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="tertiary">Tertiary</Button>
      <Button variant="auto">Auto</Button>
    </div>
  ),
};

/**
 * Illustrates button tones that signal the semantic importance and potential
 * impact of different actions through color and styling.
 */
export const Tones: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Button tone="critical">Delete</Button>
      <Button tone="neutral">Save draft</Button>
      <Button>Continue</Button>
    </div>
  ),
};

/**
 * Showcases a button that combines a descriptive text label with an intuitive
 * icon, enhancing visual communication of the action.
 */
export const WithIcon: Story = {
  args: {
    icon: 'plus',
    children: 'Add product',
  },
};

/**
 * Demonstrates an icon-only button with an accessibility label, providing a
 * compact interface that remains screen reader friendly.
 */
export const IconOnly: Story = {
  args: {
    icon: 'plus',
    accessibilityLabel: 'Add product',
  },
};

/**
 * Illustrates buttons in various loading states, providing visual feedback
 * during asynchronous operations.
 */
export const LoadingState: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Button loading variant="primary">
        Saving product...
      </Button>
      <Button loading variant="secondary">
        Updating 247 variants...
      </Button>
      <Button loading tone="neutral">
        Processing shipment...
      </Button>
    </div>
  ),
};

/**
 * Demonstrates buttons in different interaction states, showing how to
 * represent disabled controls and submit actions within forms.
 */
export const FormStates: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Button disabled>Save draft</Button>
      <Button type="submit" variant="primary">
        Save product
      </Button>
    </div>
  ),
};

/**
 * Showcases buttons that act as hyperlinks, supporting navigation to different
 * pages, external resources, and file downloads.
 */
export const LinkButtons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Button href="javascript:void(0)">View products</Button>
      <Button href="javascript:void(0)" target="_blank">
        Help docs
      </Button>
      <Button href="javascript:void(0)" download="sales-report.csv">
        Export data
      </Button>
    </div>
  ),
};

/**
 * Demonstrates a button group with carefully aligned actions, showing how to
 * create a clear visual hierarchy for form submission and cancellation.
 */
export const FormSubmissionButtons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
      <Button variant="secondary">Cancel</Button>
      <Button variant="primary" type="submit">
        Save product
      </Button>
    </div>
  ),
};

/**
 * Illustrates a button pair for destructive actions, using a critical tone to
 * emphasize the potentially irreversible nature of the operation.
 */
export const DeleteConfirmation: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Button variant="secondary">Cancel</Button>
      <Button variant="primary" tone="critical">
        Delete variant
      </Button>
    </div>
  ),
};

/**
 * Showcases a navigation button with an icon, enabling quick access to
 * different sections of the interface.
 */
export const NavigationButtonWithIcon: Story = {
  args: {
    href: 'javascript:void(0)',
    icon: 'order',
    children: 'View orders',
  },
};

/**
 * Demonstrates a button group for executing operations on multiple selected items.
 */
export const ButtonGroupForBulkOperations: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Button variant="secondary">Export selected</Button>
      <Button variant="primary" tone="critical">
        Delete selected
      </Button>
    </div>
  ),
};

/**
 * Showcases a set of compact, icon-only buttons with accessibility labels,
 * perfect for creating dense interfaces.
 */
export const IconOnlyButtonsWithLabels: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Button
        icon="duplicate"
        variant="tertiary"
        accessibilityLabel="Duplicate product"
      />
      <Button icon="view" variant="tertiary" accessibilityLabel="Preview product" />
      <Button
        icon="menu-horizontal"
        variant="tertiary"
        accessibilityLabel="More actions"
      />
    </div>
  ),
};

/**
 * Interactive playground to experiment with different button configurations.
 */
export const Playground: Story = {
  args: {
    children: 'Click me',
    variant: 'primary',
    tone: 'auto',
    disabled: false,
    loading: false,
  },
};
