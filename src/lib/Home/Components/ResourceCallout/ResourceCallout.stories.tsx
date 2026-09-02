import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from 'storybook/test';

import ResourceCallout from './ResourceCallout';

const meta = {
  title: 'HomePage/ResourceCallout',
  component: ResourceCallout,
  args: {
    resourceCalloutData: {
      title: 'test title',
      links: [{ title: 'link title', href: 'www.aol.com' }],
    },
  },
} satisfies Meta<typeof ResourceCallout>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const testIds = ['resource-callout', 'resource-callout-header'];
    testIds.forEach((id) => {
      const currEle = canvas.getByTestId(id);
      expect(currEle).toBeInTheDocument();
    });
  },
};
