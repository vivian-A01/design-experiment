import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "@shopify/polaris";

const meta: Meta = {
  title: "Polaris/Feedback/Spinner",
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj;

export const Basic: Story = {
  render: () => <Spinner accessibilityLabel="Loading" size="large" />,
};

export const Small: Story = {
  render: () => <Spinner accessibilityLabel="Loading content" size="small" />,
};

export const SizeVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
      <Spinner accessibilityLabel="Small spinner" size="small" />
      <Spinner accessibilityLabel="Large spinner" size="large" />
    </div>
  ),
};
