import type { Meta, StoryObj } from "@storybook/react";
import { Popover, Button, ActionList } from "@shopify/polaris";
import React from "react";

const meta: Meta = {
  title: "Polaris/Overlay/Popover",
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj;

export const Basic: Story = {
  render: () => {
    const [active, setActive] = React.useState(false);

    return (
      <div style={{ padding: "2rem" }}>
        <Popover
          active={active}
          activator={
            <Button onClick={() => setActive(!active)}>More actions</Button>
          }
          onClose={() => setActive(false)}
        >
          <Popover.Pane>
            <div style={{ padding: "1rem" }}>
              <p>Popover content</p>
            </div>
          </Popover.Pane>
        </Popover>
      </div>
    );
  },
};

export const WithActionList: Story = {
  render: () => {
    const [active, setActive] = React.useState(false);

    return (
      <div style={{ padding: "2rem" }}>
        <Popover
          active={active}
          activator={
            <Button onClick={() => setActive(!active)}>Actions</Button>
          }
          onClose={() => setActive(false)}
        >
          <ActionList
            items={[
              { content: "Edit", onAction: () => setActive(false) },
              { content: "Duplicate", onAction: () => setActive(false) },
              { content: "Delete", onAction: () => setActive(false) },
            ]}
          />
        </Popover>
      </div>
    );
  },
};

export const PreferredPosition: Story = {
  render: () => {
    const [active, setActive] = React.useState(false);

    return (
      <div style={{ padding: "2rem" }}>
        <Popover
          active={active}
          activator={
            <Button onClick={() => setActive(!active)}>Show menu</Button>
          }
          onClose={() => setActive(false)}
          preferredPosition="below"
        >
          <ActionList
            items={[
              { content: "Profile", onAction: () => setActive(false) },
              { content: "Settings", onAction: () => setActive(false) },
              { content: "Sign out", onAction: () => setActive(false) },
            ]}
          />
        </Popover>
      </div>
    );
  },
};
