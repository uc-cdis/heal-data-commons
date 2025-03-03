import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import newDatasetsPageConfig from '../../../config/heal/newDatasets.json';
import CardedPageContent from './CardedPageContent';

const meta = {
  title: 'NewlyAvailableDatasets/CardedPageContent',
  component: CardedPageContent,
  args: newDatasetsPageConfig,
} satisfies Meta<typeof CardedPageContent>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const cardedPageContentTitle = canvas.getByTestId(
      'carded-page-content-title',
    );
    const multiPartText = canvas.getByTestId('multi-part-text');
    expect(cardedPageContentTitle).toBeInTheDocument();
    expect(multiPartText).toBeInTheDocument();
  },
};
