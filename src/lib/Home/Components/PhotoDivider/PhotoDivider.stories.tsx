import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from 'storybook/test';

import PhotoDivider from './PhotoDivider';

const expectedNumberOfImages = 5;

const meta = {
  title: 'HomePage/PhotoDivider',
  component: PhotoDivider,
} satisfies Meta<typeof PhotoDivider>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const testIds = ['photo-divider'];
    testIds.forEach((id) => {
      const currEle = canvas.getByTestId(id);
      expect(currEle).toBeInTheDocument();
    });
    const images = canvasElement.querySelectorAll('img');
    expect(images).toHaveLength(expectedNumberOfImages);
  },
};
