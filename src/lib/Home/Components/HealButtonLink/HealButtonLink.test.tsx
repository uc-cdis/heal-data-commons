import { render, screen } from '@testing-library/react';
import HealButtonLink from './HealButtonLink';

describe('HealButtonLink', () => {
  it('renders correctly with label and href', () => {
    const href = '/some-path';
    const label = 'Test Label';

    render(<HealButtonLink href={href} label={label} />);

    const linkElement = screen.getByRole('link', { name: label });
    expect(linkElement).toHaveAttribute('href', href);

    const labelElement = screen.getByText(label);
    expect(labelElement).toBeInTheDocument();
  });
});
