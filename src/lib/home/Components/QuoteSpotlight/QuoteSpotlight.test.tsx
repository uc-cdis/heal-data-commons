import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import QuoteSpotlight from './QuoteSpotlight';

describe('PhotoDivider Component', () => {
  test('renders the PhotoDivider component', () => {
    render(<QuoteSpotlight />);
    const element = screen.getByTestId('quote-spotlight');
    expect(element).toBeInTheDocument();
  });
});
