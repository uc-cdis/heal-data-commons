import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import QuoteSpotlight from './QuoteSpotlight';
import { MantineProvider } from '@mantine/core';

describe('QuoteSpotlight Component', () => {
  test('renders the QuoteSpotlight component', () => {
    render(
      <MantineProvider>
        <QuoteSpotlight />
      </MantineProvider>,
    );
    const element = screen.getByTestId('quote-spotlight');
    expect(element).toBeInTheDocument();
  });
});
