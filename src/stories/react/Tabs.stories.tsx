import type { Meta, StoryObj } from "@storybook/react";
import { Tabs, Card, Text } from "@shopify/polaris";
import React from "react";

const meta: Meta = {
  title: "Polaris/Navigation/Tabs",
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj;

export const Basic: Story = {
  render: () => {
    const [selected, setSelected] = React.useState(0);
    const tabs = [
      { id: "all-orders", content: "All" },
      { id: "pending", content: "Pending" },
      { id: "completed", content: "Completed" },
    ];

    return (
      <Card>
        <Tabs tabs={tabs} selected={selected} onSelect={setSelected}>
          <div style={{ padding: "1rem" }}>
            <Text as="p" variant="bodyMd">
              Tab {selected + 1} content
            </Text>
          </div>
        </Tabs>
      </Card>
    );
  },
};

export const WithBadges: Story = {
  render: () => {
    const [selected, setSelected] = React.useState(0);
    const tabs = [
      { id: "all", content: "All orders", badge: "24" },
      { id: "pending", content: "Pending", badge: "8" },
      { id: "fulfilled", content: "Fulfilled", badge: "16" },
    ];

    return (
      <Card>
        <Tabs tabs={tabs} selected={selected} onSelect={setSelected}>
          <div style={{ padding: "1rem" }}>
            {selected === 0 && (
              <Text as="p" variant="bodyMd">
                Showing all 24 orders
              </Text>
            )}
            {selected === 1 && (
              <Text as="p" variant="bodyMd">
                8 orders pending fulfillment
              </Text>
            )}
            {selected === 2 && (
              <Text as="p" variant="bodyMd">
                16 orders have been fulfilled
              </Text>
            )}
          </div>
        </Tabs>
      </Card>
    );
  },
};

export const Fitted: Story = {
  render: () => {
    const [selected, setSelected] = React.useState(0);
    const tabs = [
      { id: "overview", content: "Overview" },
      { id: "analytics", content: "Analytics" },
      { id: "settings", content: "Settings" },
    ];

    return (
      <div style={{ width: "100%", maxWidth: "800px" }}>
        <Card>
          <Tabs tabs={tabs} selected={selected} onSelect={setSelected} fitted>
            <div style={{ padding: "1rem" }}>
              <Text as="p" variant="bodyMd">
                Content for {tabs[selected].content}
              </Text>
            </div>
          </Tabs>
        </Card>
      </div>
    );
  },
};
