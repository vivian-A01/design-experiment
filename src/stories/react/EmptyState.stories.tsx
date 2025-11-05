import type { Meta, StoryObj } from "@storybook/react";
import { EmptyState, Page } from "@shopify/polaris";

const meta: Meta = {
  title: "Polaris/Feedback/EmptyState",
  parameters: { layout: "fullscreen" },
};
export default meta;
type Story = StoryObj;

export const Basic: Story = {
  render: () => (
    <Page>
      <EmptyState
        heading="No products yet"
        image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
      >
        <p>Add your first product to get started.</p>
      </EmptyState>
    </Page>
  ),
};

export const WithAction: Story = {
  render: () => (
    <Page>
      <EmptyState
        heading="Upload a file to get started"
        action={{
          content: "Upload file",
          onAction: () => {},
        }}
        image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
      >
        <p>You can upload images, documents, or videos.</p>
      </EmptyState>
    </Page>
  ),
};

export const WithSecondaryAction: Story = {
  render: () => (
    <Page>
      <EmptyState
        heading="No customers yet"
        action={{
          content: "Add customer",
          onAction: () => {},
        }}
        secondaryAction={{
          content: "Import customers",
          onAction: () => {},
        }}
        image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
      >
        <p>Add customers manually or import them from a CSV file.</p>
      </EmptyState>
    </Page>
  ),
};

export const WithoutImage: Story = {
  render: () => (
    <Page>
      <EmptyState
        heading="No orders to display"
        action={{
          content: "Create order",
          onAction: () => {},
        }}
        image=""
      >
        <p>Start by creating your first order.</p>
      </EmptyState>
    </Page>
  ),
};
