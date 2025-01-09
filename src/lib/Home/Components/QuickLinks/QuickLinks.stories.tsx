import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';

import QuickLinks from './QuickLinks';

const meta = {
  title: 'HomePage/QuickLinks',
  component: QuickLinks,
} satisfies Meta<typeof QuickLinks>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const testIds = ['quick-links'];
    testIds.forEach((id) => {
      const currEle = canvas.getByTestId(id);
      expect(currEle).toBeInTheDocument();
    });

    const testIdsWithTwoInstances = [
      'resource-callout',
      'resource-callout-header',
    ];
    testIdsWithTwoInstances.forEach((id) => {
      const currEle = canvas.getAllByTestId(id);
      expect(currEle.length).toBe(2);
    });
  },
};
