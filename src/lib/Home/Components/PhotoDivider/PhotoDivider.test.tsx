import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PhotoDivider from './PhotoDivider';

describe('PhotoDivider Component', () => {
  test('renders the PhotoDivider component', () => {
    render(<PhotoDivider />);
    const element = screen.getByTestId('photo-divider');
    expect(element).toBeInTheDocument();
  });
});
