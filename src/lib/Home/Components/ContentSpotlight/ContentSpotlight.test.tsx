import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContentSpotlight from './ContentSpotlight';

describe('ContentSpotlight Component', () => {
  test('renders the CarouselBanner component', () => {
    render(<ContentSpotlight />);
    const element = screen.getByTestId('content-spotlight');
    expect(element).toBeInTheDocument();
  });
});
