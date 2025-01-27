import type { Meta, StoryObj } from '@storybook/react';
import HealFooter from './HealFooter';

const meta = {
  title: 'HomePage/HealFooter',
  component: HealFooter,
} satisfies Meta<typeof HealFooter>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
