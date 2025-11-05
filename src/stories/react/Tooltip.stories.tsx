import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip, Button, Icon } from "@shopify/polaris";
import { QuestionCircleIcon } from "@shopify/polaris-icons";

const meta: Meta = {
  title: "Polaris/Overlay/Tooltip",
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj;

export const Basic: Story = {
  render: () => (
    <Tooltip content="This is a helpful tooltip">
      <Button>Hover me</Button>
    </Tooltip>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
      <span>Product information</span>
      <Tooltip content="Additional details about this product">
        <Icon source={QuestionCircleIcon} tone="base" />
      </Tooltip>
    </div>
  ),
};

export const PreferredPosition: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem" }}>
      <Tooltip content="Tooltip above" preferredPosition="above">
        <Button>Above</Button>
      </Tooltip>
      <Tooltip content="Tooltip below" preferredPosition="below">
        <Button>Below</Button>
      </Tooltip>
    </div>
  ),
};
