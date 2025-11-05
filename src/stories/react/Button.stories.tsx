import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonGroup } from "@shopify/polaris";

const meta: Meta = {
  title: "Polaris/Actions/Button",
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => <Button>Default</Button>,
};

export const Primary: Story = {
  render: () => <Button variant="primary">Primary</Button>,
};

export const Destructive: Story = {
  render: () => <Button tone="critical">Delete</Button>,
};

export const Grouped: Story = {
  render: () => (
    <ButtonGroup>
      <Button>Cancel</Button>
      <Button variant="primary">Save</Button>
    </ButtonGroup>
  ),
};
