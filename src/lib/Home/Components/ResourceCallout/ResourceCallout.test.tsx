import React from 'react';
import { render, screen } from '@testing-library/react';
import ResourceCallout from './ResourceCallout';

const mockData = {
  title: 'Test Resources',
  links: [
    { title: 'Select a Repository', href: 'https://www.testUrl.com' },
    {
      title: 'Register Your Study',
      href: 'https://www.testUrl2.com',
    },
  ],
};

describe('ResourceCallout', () => {
  test('renders the ResourceCallout component correctly', () => {
    render(<ResourceCallout resourceCalloutData={mockData} />);
    const headerElement = screen.getByTestId('resource-callout-header');
    expect(headerElement).toHaveTextContent('Test Resources');

    const listItems = screen.getAllByRole('listitem');
    expect(listItems.length).toBe(mockData.links.length);

    mockData.links.forEach((linkData) => {
      const link = screen.getByText(linkData.title);
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', linkData.href);
    });
  });

  test('should render an arrow icon for each link', () => {
    render(<ResourceCallout resourceCalloutData={mockData} />);
    const icons = screen.getAllByTestId('icon-link-arrow');
    expect(icons.length).toBe(mockData.links.length);
  });
});
