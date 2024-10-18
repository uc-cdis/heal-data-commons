import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import QuickLinks from './QuickLinks';

describe('PhotoDivider Component', () => {
  test('renders the PhotoDivider component', () => {
    render(<QuickLinks />);
    const element = screen.getByTestId('quick-links');
    expect(element).toBeInTheDocument();
  });
});
