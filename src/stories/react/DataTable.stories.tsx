import type { Meta, StoryObj } from "@storybook/react";
import { DataTable, Card } from "@shopify/polaris";

const meta: Meta = {
  title: "Polaris/Lists/DataTable",
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj;

export const Basic: Story = {
  render: () => (
    <Card>
      <DataTable
        columnContentTypes={["text", "numeric", "numeric"]}
        headings={["Product", "Price", "Stock"]}
        rows={[
          ["T-shirt", "$19.99", "120"],
          ["Jeans", "$49.99", "85"],
          ["Sneakers", "$79.99", "45"],
        ]}
      />
    </Card>
  ),
};

export const WithFooter: Story = {
  render: () => (
    <Card>
      <DataTable
        columnContentTypes={["text", "numeric", "numeric", "numeric"]}
        headings={["Product", "Units sold", "Revenue", "Profit"]}
        rows={[
          ["T-shirt", "124", "$2,487.76", "$1,243.88"],
          ["Jeans", "89", "$4,411.11", "$2,205.56"],
          ["Sneakers", "156", "$12,467.44", "$6,233.72"],
        ]}
        totals={["", "369", "$19,366.31", "$9,683.16"]}
      />
    </Card>
  ),
};

export const Sortable: Story = {
  render: () => (
    <Card>
      <DataTable
        columnContentTypes={["text", "numeric", "numeric", "numeric"]}
        headings={["Product", "Price", "Stock", "Sales"]}
        rows={[
          ["T-shirt", "$19.99", "120", "89"],
          ["Jeans", "$49.99", "85", "67"],
          ["Sneakers", "$79.99", "45", "124"],
          ["Hat", "$24.99", "200", "45"],
          ["Socks", "$9.99", "350", "201"],
        ]}
        sortable={[false, true, true, true]}
        defaultSortDirection="descending"
        initialSortColumnIndex={3}
      />
    </Card>
  ),
};
