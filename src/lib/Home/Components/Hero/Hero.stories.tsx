import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from 'storybook/test';

import Hero from './Hero';

const meta = {
  title: 'HomePage/Hero',
  component: Hero,
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const testIds = ['hero', 'hero-title', 'hero-description', 'hero-image'];
    testIds.forEach((id) => {
      const currEle = canvas.getByTestId(id);
      expect(currEle).toBeInTheDocument();
    });
  },
};
