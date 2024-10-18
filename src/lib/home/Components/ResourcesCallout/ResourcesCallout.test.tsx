import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ResourcesCallout from './ResourcesCallout';

describe('PhotoDivider Component', () => {
  test('renders the PhotoDivider component', () => {
    render(<ResourcesCallout />);
    const element = screen.getByTestId('resources-callout');
    expect(element).toBeInTheDocument();
  });
});
