import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from 'storybook/test';
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
    const quote = await canvas.findByRole('blockquote');
    expect(quote).toBeInTheDocument();

    const testIds = ['quote-spotlight', 'citation'];
    for (const id of testIds) {
      const currEle = await canvas.findByTestId(id);
      expect(currEle).toBeInTheDocument();
    }
  },
};
