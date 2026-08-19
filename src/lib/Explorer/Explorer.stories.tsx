import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { CohortPanelConfig, Gen3Provider } from '@gen3/frontend';
import explorerConfig from '../../../config/heal/explorer.json';
import ExplorerPage from '../../pages/Explorer';

const meta = {
  title: 'Pages/Explorer',
  component: ExplorerPage,
  decorators: [
    (Story) => (
      <Gen3Provider icons={[]} sessionConfig={{}} modalsConfig={{}}>
        <Story />
      </Gen3Provider>
    ),
  ],
  args: {
    explorerConfig: explorerConfig as unknown as CohortPanelConfig[],
    sharedFiltersMap: null,
  },
} satisfies Meta<typeof ExplorerPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
