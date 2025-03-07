import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import HealHeader from './HealHeader';

const meta = {
  title: 'HomePage/HealHeader',
  component: HealHeader,
} satisfies Meta<typeof HealHeader>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByTestId('heal-header')).toBeInTheDocument();
    await expect(canvas.getByTestId('skip-to-main')).toBeInTheDocument();
  },
};
