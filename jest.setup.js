// file: jest.setup.js

/* eslint-disable react/display-name */
/* eslint-disable @next/next/no-img-element */
import '@testing-library/jest-dom';

// Mock the complex Next imports that JEST does not handle well
jest.mock('*.svg', () => {
  return (props) => <img {...props} src="" alt={''} />;
});
jest.mock('next/image', () => {
  return (props) => <img {...props} src="" alt={''} />;
});

const { getComputedStyle } = window;
window.getComputedStyle = (elt) => getComputedStyle(elt);
window.HTMLElement.prototype.scrollIntoView = () => {};

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

window.ResizeObserver = ResizeObserver;
