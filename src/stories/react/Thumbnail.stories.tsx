import type { Meta, StoryObj } from "@storybook/react";
import { Thumbnail } from "@shopify/polaris";
import { ImageIcon } from "@shopify/polaris-icons";

const meta: Meta = {
  title: "Polaris/Media/Thumbnail",
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj;

export const WithImage: Story = {
  render: () => (
    <Thumbnail
      source="https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"
      alt="Black leather necklace"
    />
  ),
};

export const WithIcon: Story = {
  render: () => <Thumbnail source={ImageIcon} alt="No image available" />,
};

export const SizeVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
      <Thumbnail
        source="https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"
        size="small"
        alt="Small thumbnail"
      />
      <Thumbnail
        source="https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"
        size="medium"
        alt="Medium thumbnail"
      />
      <Thumbnail
        source="https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"
        size="large"
        alt="Large thumbnail"
      />
    </div>
  ),
};
