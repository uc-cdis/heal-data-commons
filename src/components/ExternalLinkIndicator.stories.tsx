import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from 'storybook/test';
import ExternalLinkIndicator from './ExternalLinkIndicator';

const meta = {
  title: 'components/ExternalLinkIndicator',
  component: ExternalLinkIndicator,
} satisfies Meta<typeof ExternalLinkIndicator>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(
      await canvas.findByTestId('external-link-indicator'),
    ).toBeInTheDocument();
    expect(
      await canvas.findByTestId('external-link-indicator-accessible-text'),
    ).toBeInTheDocument();
  },
};
