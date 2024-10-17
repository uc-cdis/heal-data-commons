import React from 'react';
import { render, screen } from '@testing-library/react';
import Hero from './Hero'; // Adjust the import based on your file structure

describe('Hero Component', () => {
  test('renders the Hero component with the correct heading', () => {
    render(<Hero />);
    const heroElement = screen.getByTestId('hero');
    expect(heroElement).toBeInTheDocument();
  });
});
