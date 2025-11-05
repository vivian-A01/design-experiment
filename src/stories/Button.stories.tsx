import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@shopify/polaris';

const meta: Meta<typeof Button> = {
  title: 'Polaris/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Primary button',
    variant: 'primary',
  },
};

export const Critical: Story = {
  args: {
    children: 'Critical button',
    tone: 'critical',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary button',
    variant: 'secondary',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled button',
    disabled: true,
  },
};
