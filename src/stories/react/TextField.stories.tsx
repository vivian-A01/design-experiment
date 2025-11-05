import type { Meta, StoryObj } from "@storybook/react";
import { TextField } from "@shopify/polaris";
import React from "react";

const meta: Meta = {
  title: "Polaris/Form/TextField",
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj;

export const Basic: Story = {
  render: () => {
    const [value, setValue] = React.useState("");
    return (
      <TextField
        label="Example input"
        value={value}
        onChange={setValue}
        autoComplete="off"
      />
    );
  },
};

export const Password: Story = {
  render: () => {
    const [value, setValue] = React.useState("");
    return (
      <TextField
        label="Password"
        type="password"
        value={value}
        onChange={setValue}
        autoComplete="off"
      />
    );
  },
};
