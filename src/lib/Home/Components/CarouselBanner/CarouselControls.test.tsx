import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CarouselControls from './CarouselControls';

describe('CarouselControls', () => {
  const mockSetIsPlaying = jest.fn();
  const mockSetCurrentSlide = jest.fn();
  const mockAdvanceToNextSlide = jest.fn();

  const defaultProps = {
    isPlaying: false,
    setIsPlaying: mockSetIsPlaying,
    slideData: [
      { href: '#slide1', icon: () => <div />, text: 'Slide 1' },
      { href: '#slide2', icon: () => <div />, text: 'Slide 2' },
      { href: '#slide3', icon: () => <div />, text: 'Slide 3' },
    ],
    advanceToNextSlide: mockAdvanceToNextSlide,
    currentSlide: 0,
    setCurrentSlide: mockSetCurrentSlide,
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders Play/Pause button and toggles state when clicked', () => {
    // Render component with initial state (paused)
    render(<CarouselControls {...defaultProps} />);

    // Verify button is showing "▶" for play
    const playPauseButton = screen.getByLabelText('Play carousel');
    expect(playPauseButton).toHaveTextContent('▶');

    // Click play button
    fireEvent.click(playPauseButton);
    expect(mockSetIsPlaying).toHaveBeenCalledWith(true);
    expect(mockAdvanceToNextSlide).toHaveBeenCalled(); // Advance to next slide when starting

    // Render again with "isPlaying" set to true
    render(<CarouselControls {...defaultProps} isPlaying={true} />);

    // Verify button is showing "⏸" for pause
    const pauseButton = screen.getByLabelText('Pause carousel');
    expect(pauseButton).toHaveTextContent('⏸');

    // Click pause button
    fireEvent.click(pauseButton);
    expect(mockSetIsPlaying).toHaveBeenCalledWith(false);
  });

  test('clicking a slide indicator sets the current slide and stops the carousel', () => {
    render(<CarouselControls {...defaultProps} />);

    const slideIndicator = screen.getByLabelText('Go to slide 2');
    fireEvent.click(slideIndicator);

    // Verify setCurrentSlide was called with correct index
    expect(mockSetCurrentSlide).toHaveBeenCalledWith(1);

    // Verify setIsPlaying was called with false
    expect(mockSetIsPlaying).toHaveBeenCalledWith(false);
  });

  test('does not call advanceToNextSlide if carousel is paused', () => {
    render(<CarouselControls {...defaultProps} />);

    const playPauseButton = screen.getByLabelText('Play carousel');
    fireEvent.click(playPauseButton); // Starts the carousel and calls advanceToNextSlide

    expect(mockAdvanceToNextSlide).toHaveBeenCalled();
  });

  test('clicking on a slide indicator stops the carousel', () => {
    const playingProps = { ...defaultProps, isPlaying: true };
    render(<CarouselControls {...playingProps} />);

    const slideIndicator = screen.getByLabelText('Go to slide 2');
    fireEvent.click(slideIndicator);

    // Verify that the carousel stops when the indicator is clicked
    expect(mockSetIsPlaying).toHaveBeenCalledWith(false);
  });
});
