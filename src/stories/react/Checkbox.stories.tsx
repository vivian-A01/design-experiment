import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox, BlockStack } from "@shopify/polaris";

const meta: Meta = {
  title: "Polaris/Form/Checkbox",
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj;

export const Single: Story = { render: () => <Checkbox label="Accept terms and conditions" checked /> };
export const Multiple: Story = {
  render: () => (
    <BlockStack gap="200">
      <Checkbox label="Email updates" />
      <Checkbox label="SMS notifications" />
      <Checkbox label="Push alerts" checked />
    </BlockStack>
  ),
};
