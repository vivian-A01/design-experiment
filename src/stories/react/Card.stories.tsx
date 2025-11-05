import type { Meta, StoryObj } from "@storybook/react";
import { Card, Text, BlockStack } from "@shopify/polaris";

const meta: Meta = {
  title: "Polaris/Layout/Card",
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj;

export const Basic: Story = {
  render: () => (
    <Card>
      <BlockStack gap="200">
        <Text as="h3" variant="headingMd">Card title</Text>
        <Text as="p" variant="bodyMd">This is a simple card example.</Text>
      </BlockStack>
    </Card>
  ),
};
