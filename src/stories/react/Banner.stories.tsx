import type { Meta, StoryObj } from "@storybook/react";
import { Banner } from "@shopify/polaris";

const meta: Meta = {
  title: "Polaris/Feedback/Banner",
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj;

export const Info: Story = { render: () => <Banner title="Information" tone="info">This is an informational banner.</Banner> };
export const Success: Story = { render: () => <Banner title="Success" tone="success">Your changes have been saved.</Banner> };
export const Critical: Story = { render: () => <Banner title="Critical" tone="critical">There was an error processing your request.</Banner> };
