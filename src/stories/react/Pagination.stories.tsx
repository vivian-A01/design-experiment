import type { Meta, StoryObj } from "@storybook/react";
import { Pagination } from "@shopify/polaris";
import React from "react";

const meta: Meta = {
  title: "Polaris/Navigation/Pagination",
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj;

export const Basic: Story = {
  render: () => (
    <Pagination
      hasPrevious
      hasNext
      onPrevious={() => {}}
      onNext={() => {}}
    />
  ),
};

export const WithLabel: Story = {
  render: () => (
    <Pagination
      hasPrevious
      hasNext
      onPrevious={() => {}}
      onNext={() => {}}
      label="Results"
    />
  ),
};

export const Interactive: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = React.useState(2);
    const totalPages = 5;

    return (
      <div style={{ padding: "2rem" }}>
        <div style={{ textAlign: "center", marginBottom: "1rem" }}>
          Page {currentPage} of {totalPages}
        </div>
        <Pagination
          hasPrevious={currentPage > 1}
          hasNext={currentPage < totalPages}
          onPrevious={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
          onNext={() =>
            setCurrentPage((prev) => Math.min(totalPages, prev + 1))
          }
        />
      </div>
    );
  },
};
