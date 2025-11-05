import React from "react";
import type { Preview } from "@storybook/react";
import "@shopify/polaris/build/esm/styles.css";
import { AppProvider } from "@shopify/polaris";
import enTranslations from "@shopify/polaris/locales/en.json";

const preview: Preview = {
  decorators: [
    (Story) => (
      <AppProvider i18n={enTranslations}>
        <div style={{ padding: "2rem", backgroundColor: "#f6f6f7" }}>
          <Story />
        </div>
      </AppProvider>
    ),
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    layout: "centered",
  },
};

export default preview;
