import type { Meta, StoryObj } from "@storybook/react";
import { Modal, Button, TextContainer, Text } from "@shopify/polaris";
import React from "react";

const meta: Meta = {
  title: "Polaris/Overlay/Modal",
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj;

export const Basic: Story = {
  render: () => {
    const [active, setActive] = React.useState(false);

    return (
      <>
        <Button onClick={() => setActive(true)}>Open Modal</Button>
        <Modal
          open={active}
          onClose={() => setActive(false)}
          title="Edit product details"
          primaryAction={{
            content: "Save",
            onAction: () => setActive(false),
          }}
          secondaryActions={[
            {
              content: "Cancel",
              onAction: () => setActive(false),
            },
          ]}
        >
          <Modal.Section>
            <TextContainer>
              <Text as="p" variant="bodyMd">
                Make changes to your product information.
              </Text>
            </TextContainer>
          </Modal.Section>
        </Modal>
      </>
    );
  },
};

export const WithoutFooter: Story = {
  render: () => {
    const [active, setActive] = React.useState(false);

    return (
      <>
        <Button onClick={() => setActive(true)}>Open Simple Modal</Button>
        <Modal
          open={active}
          onClose={() => setActive(false)}
          title="Information"
        >
          <Modal.Section>
            <TextContainer>
              <Text as="p" variant="bodyMd">
                This modal contains only informational content with no actions.
              </Text>
            </TextContainer>
          </Modal.Section>
        </Modal>
      </>
    );
  },
};

export const LargeModal: Story = {
  render: () => {
    const [active, setActive] = React.useState(false);

    return (
      <>
        <Button onClick={() => setActive(true)}>Open Large Modal</Button>
        <Modal
          size="large"
          open={active}
          onClose={() => setActive(false)}
          title="Large modal"
          primaryAction={{
            content: "Continue",
            onAction: () => setActive(false),
          }}
        >
          <Modal.Section>
            <TextContainer>
              <Text as="p" variant="bodyMd">
                This is a large modal with more space for content.
              </Text>
            </TextContainer>
          </Modal.Section>
        </Modal>
      </>
    );
  },
};
