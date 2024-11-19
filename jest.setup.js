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
