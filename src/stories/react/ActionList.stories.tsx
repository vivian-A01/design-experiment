import type { Meta, StoryObj } from "@storybook/react";
import { ActionList, Card } from "@shopify/polaris";

const meta: Meta = {
  title: "Polaris/Actions/ActionList",
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj;

export const Basic: Story = {
  render: () => (
    <Card>
      <ActionList
        items={[
          { content: "View details", onAction: () => {} },
          { content: "Edit product", onAction: () => {} },
          { content: "Delete product", onAction: () => {} },
        ]}
      />
    </Card>
  ),
};

export const WithSections: Story = {
  render: () => (
    <Card>
      <ActionList
        sections={[
          {
            title: "File options",
            items: [
              { content: "Import file", onAction: () => {} },
              { content: "Export file", onAction: () => {} },
            ],
          },
          {
            title: "Bulk actions",
            items: [
              { content: "Edit all", onAction: () => {} },
              { content: "Delete all", onAction: () => {} },
            ],
          },
        ]}
      />
    </Card>
  ),
};

export const WithDestructiveAction: Story = {
  render: () => (
    <Card>
      <ActionList
        items={[
          { content: "Edit", onAction: () => {} },
          { content: "Duplicate", onAction: () => {} },
          {
            content: "Delete",
            onAction: () => {},
            destructive: true,
          },
        ]}
      />
    </Card>
  ),
};
