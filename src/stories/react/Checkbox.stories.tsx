import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox, BlockStack } from "@shopify/polaris";
import React from "react";

const meta: Meta = {
  title: "Polaris/Form/Checkbox",
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj;

export const Basic: Story = {
  render: () => {
    const [checked, setChecked] = React.useState(false);
    return (
      <Checkbox
        label="Accept terms and conditions"
        checked={checked}
        onChange={setChecked}
      />
    );
  },
};

export const Checked: Story = {
  render: () => {
    const [checked, setChecked] = React.useState(true);
    return (
      <Checkbox
        label="Email notifications"
        checked={checked}
        onChange={setChecked}
      />
    );
  },
};

export const Disabled: Story = {
  render: () => (
    <Checkbox label="Disabled checkbox" checked={false} disabled />
  ),
};

export const WithHelpText: Story = {
  render: () => {
    const [checked, setChecked] = React.useState(false);
    return (
      <Checkbox
        label="Enable two-factor authentication"
        checked={checked}
        onChange={setChecked}
        helpText="Add an extra layer of security to your account"
      />
    );
  },
};

export const Multiple: Story = {
  render: () => {
    const [checkedItems, setCheckedItems] = React.useState([
      false,
      true,
      false,
    ]);

    return (
      <BlockStack gap="200">
        <Checkbox
          label="Email updates"
          checked={checkedItems[0]}
          onChange={(value) =>
            setCheckedItems([value, checkedItems[1], checkedItems[2]])
          }
        />
        <Checkbox
          label="SMS notifications"
          checked={checkedItems[1]}
          onChange={(value) =>
            setCheckedItems([checkedItems[0], value, checkedItems[2]])
          }
        />
        <Checkbox
          label="Push alerts"
          checked={checkedItems[2]}
          onChange={(value) =>
            setCheckedItems([checkedItems[0], checkedItems[1], value])
          }
        />
      </BlockStack>
    );
  },
};
