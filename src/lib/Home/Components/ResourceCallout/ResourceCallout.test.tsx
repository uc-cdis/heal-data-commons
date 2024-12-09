import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ResourceCallout from './ResourceCallout';

describe('ResourceCallout Component', () => {
  test('renders the ResourceCallout component', () => {
    render(<ResourceCallout />);
    const element = screen.getByTestId('resource-callout');
    expect(element).toBeInTheDocument();
  });
});
