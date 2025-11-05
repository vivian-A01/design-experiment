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
        label="Store name"
        value={value}
        onChange={setValue}
        autoComplete="off"
      />
    );
  },
};

export const WithValue: Story = {
  render: () => {
    const [value, setValue] = React.useState("Existing value");
    return (
      <TextField
        label="Product title"
        value={value}
        onChange={setValue}
        autoComplete="off"
      />
    );
  },
};

export const WithPlaceholder: Story = {
  render: () => {
    const [value, setValue] = React.useState("");
    return (
      <TextField
        label="Email"
        value={value}
        onChange={setValue}
        placeholder="example@email.com"
        autoComplete="email"
      />
    );
  },
};

export const WithHelpText: Story = {
  render: () => {
    const [value, setValue] = React.useState("");
    return (
      <TextField
        label="Username"
        value={value}
        onChange={setValue}
        autoComplete="off"
        helpText="Choose a unique username for your account"
      />
    );
  },
};

export const Disabled: Story = {
  render: () => (
    <TextField
      label="Disabled field"
      value="Cannot edit this"
      onChange={() => {}}
      disabled
      autoComplete="off"
    />
  ),
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
        autoComplete="current-password"
      />
    );
  },
};

export const Multiline: Story = {
  render: () => {
    const [value, setValue] = React.useState("");
    return (
      <TextField
        label="Description"
        value={value}
        onChange={setValue}
        multiline={4}
        autoComplete="off"
        placeholder="Enter product description"
      />
    );
  },
};

export const WithError: Story = {
  render: () => {
    const [value, setValue] = React.useState("invalid-email");
    return (
      <TextField
        label="Email address"
        value={value}
        onChange={setValue}
        error="Please enter a valid email address"
        autoComplete="email"
      />
    );
  },
};
