// ExampleComponent.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import CarouselBanner from './CarouselBanner';

test('renders Example Component text', () => {
  render(<CarouselBanner />);

  // Check if the component renders the expected text
  const headingElement = screen.getByText(/Example Component/i);
  expect(headingElement).toBeInTheDocument();
});
