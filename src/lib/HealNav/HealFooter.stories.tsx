import type { Meta, StoryObj } from '@storybook/react';
import { within, expect } from '@storybook/test';
import HealFooter from './HealFooter';

const meta = {
  title: 'HomePage/HealFooter',
  component: HealFooter,
} satisfies Meta<typeof HealFooter>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByTestId('heal-footer')).toBeInTheDocument();
  },
};
