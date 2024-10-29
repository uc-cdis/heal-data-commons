import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CarouselBanner from './CarouselBanner';

describe('CarouselBanner Component', () => {
  test('renders the CarouselBanner component', () => {
    render(<CarouselBanner />);
    const element = screen.getByTestId('carousel-banner');
    expect(element).toBeInTheDocument();
  });
});
