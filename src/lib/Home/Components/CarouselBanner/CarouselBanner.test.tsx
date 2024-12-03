import { render, screen } from '@testing-library/react';
import CarouselBanner from './CarouselBanner';
import Slide from './Slide';

// Mock the Slide and CarouselControls components
jest.mock('./Slide', () => {
  return jest.fn(() => <div>Slide Component</div>);
});

jest.mock('./CarouselControls', () => {
  return jest.fn(() => <div>Carousel Controls</div>);
});

// Mock the slideData import
jest.mock('./SlideData', () => ({
  slideData: [
    { href: '#slide1', icon: () => <div />, text: 'Slide 1' },
    { href: '#slide2', icon: () => <div />, text: 'Slide 2' },
  ],
}));

describe('CarouselBanner', () => {
  // Clear mocks before each test
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders the component with slides', () => {
    render(<CarouselBanner />);

    // Ensure the CarouselBanner is rendered
    expect(screen.getByTestId('carousel-banner')).toBeInTheDocument();

    // Ensure that Slide components are rendered based on slideData mock
    expect(Slide).toHaveBeenCalledTimes(2); // Should call Slide twice based on mock
  });

  test('does not render CarouselControls when there is only one slide', () => {
    // Mock the slideData to simulate a single slide
    jest.mock('./SlideData', () => ({
      slideData: [{ href: '#slide1', icon: () => <div />, text: 'Slide 1' }],
    }));
    render(<CarouselBanner />);
    // CarouselControls should not be rendered when there's only one slide
    expect(screen.queryByTestId('carousel-controls')).toBeNull();
  });
});
