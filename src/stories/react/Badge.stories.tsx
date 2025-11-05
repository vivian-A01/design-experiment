import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "@shopify/polaris";

const meta: Meta = {
  title: "Polaris/Feedback/Badge",
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj;

export const Default: Story = { render: () => <Badge>Default</Badge> };
export const Statuses: Story = {
  render: () => (
    <div style={{display:"flex",gap:"0.5rem"}}>
      <Badge tone="success">Success</Badge>
      <Badge tone="info">Info</Badge>
      <Badge tone="warning">Warning</Badge>
      <Badge tone="critical">Critical</Badge>
    </div>
  ),
};
