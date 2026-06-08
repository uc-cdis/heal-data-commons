import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import ExternalLinkIndicator from './ExternalLinkIndicator';

const meta = {
  title: 'HomePage/HealHeader',
  component: ExternalLinkIndicator,
} satisfies Meta<typeof ExternalLinkIndicator>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(
      canvas.getByTestId('external-link-indicator'),
    ).toBeInTheDocument();
    await expect(
      canvas.getByTestId('external-link-indicator-accessible-text'),
    ).toBeInTheDocument();
  },
};
