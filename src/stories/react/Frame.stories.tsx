import type { Meta, StoryObj } from "@storybook/react";
import { Frame, TopBar, Navigation } from "@shopify/polaris";
import {
  HomeIcon,
  OrderIcon,
  ProductIcon,
  PersonIcon,
} from "@shopify/polaris-icons";
import React from "react";

const meta: Meta = {
  title: "Polaris/Structure/Frame",
  parameters: { layout: "fullscreen" },
};
export default meta;
type Story = StoryObj;

export const Basic: Story = {
  render: () => (
    <div style={{ height: "500px" }}>
      <Frame>
        <div style={{ padding: "2rem" }}>
          <h1>Frame content</h1>
          <p>This is the main content area inside the Frame.</p>
        </div>
      </Frame>
    </div>
  ),
};

export const WithTopBar: Story = {
  render: () => {
    const [userMenuActive, setUserMenuActive] = React.useState(false);

    const userMenuMarkup = (
      <TopBar.UserMenu
        name="Store Owner"
        initials="SO"
        open={userMenuActive}
        onToggle={() => setUserMenuActive(!userMenuActive)}
        actions={[
          {
            items: [
              { content: "Profile", onAction: () => {} },
              { content: "Sign out", onAction: () => {} },
            ],
          },
        ]}
      />
    );

    const topBarMarkup = <TopBar userMenu={userMenuMarkup} />;

    return (
      <div style={{ height: "500px" }}>
        <Frame topBar={topBarMarkup}>
          <div style={{ padding: "2rem" }}>
            <h1>Dashboard</h1>
            <p>Frame with top bar and user menu.</p>
          </div>
        </Frame>
      </div>
    );
  },
};

export const WithNavigation: Story = {
  render: () => {
    const navigationMarkup = (
      <Navigation location="/">
        <Navigation.Section
          items={[
            {
              label: "Home",
              icon: HomeIcon,
              url: "#",
            },
            {
              label: "Orders",
              icon: OrderIcon,
              url: "#",
              badge: "15",
            },
            {
              label: "Products",
              icon: ProductIcon,
              url: "#",
            },
            {
              label: "Customers",
              icon: PersonIcon,
              url: "#",
            },
          ]}
        />
      </Navigation>
    );

    return (
      <div style={{ height: "500px" }}>
        <Frame navigation={navigationMarkup}>
          <div style={{ padding: "2rem" }}>
            <h1>Store Dashboard</h1>
            <p>Frame with navigation sidebar.</p>
          </div>
        </Frame>
      </div>
    );
  },
};
