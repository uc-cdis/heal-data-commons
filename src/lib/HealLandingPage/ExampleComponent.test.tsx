// ExampleComponent.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import { ExampleComponent } from './ExampleComponent'; // adjust the import path as needed

test('renders Example Component text', () => {
  render(<ExampleComponent />);

  // Check if the component renders the expected text
  const headingElement = screen.getByText(/Example Component/i);
  expect(headingElement).toBeInTheDocument();
});
