import type { Meta, StoryObj } from "@storybook/react";
import { Tag } from "@shopify/polaris";
import React from "react";

const meta: Meta = {
  title: "Polaris/Display/Tag",
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj;

export const Basic: Story = {
  render: () => {
    const [selected, setSelected] = React.useState(true);
    return (
      <div>
        {selected ? (
          <Tag onRemove={() => setSelected(false)}>Vintage</Tag>
        ) : (
          <p style={{ color: "#888" }}>Tag removed</p>
        )}
      </div>
    );
  },
};

export const WithoutRemove: Story = {
  render: () => <Tag>Non-removable tag</Tag>,
};

export const MultipleTagsWithRemove: Story = {
  render: () => {
    const [tags, setTags] = React.useState([
      "Vintage",
      "Cotton",
      "Summer",
      "Sale",
    ]);

    return (
      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
        {tags.map((tag, index) => (
          <Tag
            key={tag}
            onRemove={() => {
              setTags(tags.filter((_, i) => i !== index));
            }}
          >
            {tag}
          </Tag>
        ))}
      </div>
    );
  },
};
