import type { Meta, StoryObj } from '@storybook/react';
import { expect, within, fireEvent } from '@storybook/test';

import ContentSpotlight from './ContentSpotlight';

const meta = {
  title: 'HomePage/ContentSpotlight',
  component: ContentSpotlight,
} satisfies Meta<typeof ContentSpotlight>;

export default meta;
type Story = StoryObj<typeof meta>;
// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const contentSpotlight = canvas.getByTestId('content-spotlight');
    const spotlightButton = canvas.getByRole('button');
    let successfulButtonClick = false;
    spotlightButton.addEventListener(
      'click',
      (e) => e.preventDefault(),
      (successfulButtonClick = true),
    );
    expect(contentSpotlight).toBeInTheDocument();
    expect(spotlightButton).toBeInTheDocument();
    fireEvent.click(spotlightButton);
    expect(successfulButtonClick).toBe(true);
  },
};
