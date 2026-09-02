import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from 'storybook/test';
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

    const testIds = [
      'carded-page-content-backlink',
      'carded-page-content-title',
      'multi-part-text',
    ];
    testIds.forEach((id) => {
      const currEle = canvas.getByTestId(id);
      expect(currEle).toBeInTheDocument();
    });

    const testIdsWithMultipleInstances = [
      'carded-page-content-header',
      'card-grid',
      'card-grid-title',
      'card-grid-content',
      'card-grid-link',
    ];
    testIdsWithMultipleInstances.forEach((id) => {
      const currEle = canvas.getAllByTestId(id);
      expect(currEle.length).toBeGreaterThan(0);
    });
  },
};
