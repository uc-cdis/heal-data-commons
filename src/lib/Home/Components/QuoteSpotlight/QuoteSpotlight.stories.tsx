import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import { MantineProvider } from '@mantine/core';
import QuoteSpotlight from './QuoteSpotlight';

const meta = {
  title: 'HomePage/QuoteSpotlight',
  component: QuoteSpotlight,
} satisfies Meta<typeof QuoteSpotlight>;

export default meta;
type Story = StoryObj<typeof meta>;
// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const quote = canvas.getByRole('blockquote');
    expect(quote).toBeInTheDocument();

    const testIds = ['quote-spotlight', 'citation'];
    testIds.forEach((id) => {
      const currEle = canvas.getByTestId(id);
      expect(currEle).toBeInTheDocument();
    });
  },
};
