import type { Meta, StoryObj } from "@storybook/react";
import { Page, Card, Text, BlockStack } from "@shopify/polaris";

const meta: Meta = {
  title: "Polaris/Layout/Page",
  parameters: { layout: "fullscreen" },
};
export default meta;
type Story = StoryObj;

export const Basic: Story = {
  render: () => (
    <Page title="Products">
      <Card>
        <BlockStack gap="200">
          <Text as="h3" variant="headingMd">
            Product inventory
          </Text>
          <Text as="p" variant="bodyMd">
            Manage your product catalog and inventory levels.
          </Text>
        </BlockStack>
      </Card>
    </Page>
  ),
};

export const WithBackAction: Story = {
  render: () => (
    <Page
      title="Product Details"
      backAction={{ content: "Products", url: "#" }}
    >
      <Card>
        <BlockStack gap="200">
          <Text as="h3" variant="headingMd">
            Edit product
          </Text>
          <Text as="p" variant="bodyMd">
            Update product information and pricing.
          </Text>
        </BlockStack>
      </Card>
    </Page>
  ),
};

export const WithActions: Story = {
  render: () => (
    <Page
      title="Order #1234"
      primaryAction={{ content: "Save", onAction: () => {} }}
      secondaryActions={[
        { content: "Duplicate", onAction: () => {} },
        { content: "Archive", onAction: () => {} },
      ]}
    >
      <Card>
        <BlockStack gap="200">
          <Text as="h3" variant="headingMd">
            Order details
          </Text>
          <Text as="p" variant="bodyMd">
            View and manage order information.
          </Text>
        </BlockStack>
      </Card>
    </Page>
  ),
};
