// file: jest.setup.js
import '@testing-library/jest-dom';
// Mock the SVG globally for all tests
jest.mock('*.svg', () => '<svg></svg>');
