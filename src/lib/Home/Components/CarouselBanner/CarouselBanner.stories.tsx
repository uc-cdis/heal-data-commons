import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from 'storybook/test';

import CarouselBanner from './CarouselBanner';

const meta = {
  title: 'HomePage/CarouselBanner',
  component: CarouselBanner,
} satisfies Meta<typeof CarouselBanner>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const carouselBanner = canvas.getByTestId('carousel-banner');
    const playPauseButton = canvas.getByTestId('play-pause-button');
    expect(carouselBanner).toBeInTheDocument();
    expect(playPauseButton).toBeInTheDocument();
    playPauseButton.click();
    await expect(playPauseButton).toHaveTextContent('⏸');
    playPauseButton.click();
    await expect(playPauseButton).toHaveTextContent('▶');
  },
};
