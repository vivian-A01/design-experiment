import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "@shopify/polaris";
import React from "react";

const meta: Meta = {
  title: "Polaris/Form/Select",
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj;

export const Basic: Story = {
  render: () => {
    const [selected, setSelected] = React.useState("today");
    const options = [
      { label: "Today", value: "today" },
      { label: "Yesterday", value: "yesterday" },
      { label: "Last 7 days", value: "lastWeek" },
    ];

    return (
      <Select
        label="Date range"
        options={options}
        value={selected}
        onChange={setSelected}
      />
    );
  },
};

export const WithPlaceholder: Story = {
  render: () => {
    const [selected, setSelected] = React.useState("");
    const options = [
      { label: "Select a product", value: "", disabled: true },
      { label: "Product A", value: "productA" },
      { label: "Product B", value: "productB" },
      { label: "Product C", value: "productC" },
    ];

    return (
      <Select
        label="Choose product"
        options={options}
        placeholder="Select a product"
        value={selected}
        onChange={setSelected}
      />
    );
  },
};

export const Disabled: Story = {
  render: () => {
    const options = [
      { label: "Option 1", value: "option1" },
      { label: "Option 2", value: "option2" },
    ];

    return (
      <Select
        label="Disabled select"
        options={options}
        value="option1"
        disabled
        onChange={() => {}}
      />
    );
  },
};

export const WithHelpText: Story = {
  render: () => {
    const [selected, setSelected] = React.useState("standard");
    const options = [
      { label: "Standard shipping", value: "standard" },
      { label: "Express shipping", value: "express" },
      { label: "Overnight shipping", value: "overnight" },
    ];

    return (
      <Select
        label="Shipping method"
        options={options}
        value={selected}
        onChange={setSelected}
        helpText="Choose your preferred shipping method"
      />
    );
  },
};
