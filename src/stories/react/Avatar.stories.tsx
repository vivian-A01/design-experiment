import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "@shopify/polaris";

const meta: Meta = {
  title: "Polaris/Media/Avatar",
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj;

export const BasicUsage: Story = {
  render: () => <Avatar initials="JD" name="John Doe" />,
};

export const WithImageSource: Story = {
  render: () => (
    <Avatar
      customer
      source="https://i.pravatar.cc/150?img=12"
      name="John Doe"
    />
  ),
};

export const SizeVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem" }}>
      <Avatar size="xs" initials="AB" />
      <Avatar size="sm" initials="CD" />
      <Avatar size="md" initials="EF" />
      <Avatar size="lg" initials="GH" />
      <Avatar size="xl" initials="IJ" />
    </div>
  ),
};

export const WithInitials: Story = {
  render: () => <Avatar initials="EM" name="Emma Ma" />,
};
