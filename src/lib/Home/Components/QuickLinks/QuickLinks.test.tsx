import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import QuickLinks from './QuickLinks';

describe('Quicklinks Component', () => {
  test('renders the Quicklinks component', () => {
    render(<QuickLinks />);
    const element = screen.getByTestId('quick-links');
    expect(element).toBeInTheDocument();
    const resourceCallouts = screen.getAllByTestId('resource-callout');
    expect(resourceCallouts.length).toBe(2);
  });
});
