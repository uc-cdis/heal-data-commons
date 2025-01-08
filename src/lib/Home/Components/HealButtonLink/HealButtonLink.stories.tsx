import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within, spyOn, fireEvent } from '@storybook/test';

import HealButtonLink from './HealButtonLink';

const meta = {
  title: 'HomePage/HealButtonLink',
  component: HealButtonLink,
  tags: ['autodocs'],
  args: { href: 'www.healdata.org', label: 'button label' },
} satisfies Meta<typeof HealButtonLink>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const healButton = canvas.getByRole('button');
    let successfulButtonClick = false;
    healButton.addEventListener(
      'click',
      (e) => e.preventDefault(),
      (successfulButtonClick = true),
    );
    expect(healButton).toBeInTheDocument();
    fireEvent.click(healButton);
    expect(successfulButtonClick).toBe(true);
  },
};
