// file: jest.setup.js

/* eslint-disable @next/next/no-img-element */
import '@testing-library/jest-dom';
// Mock complex NextJS imports that JEST cannot handle well
jest.mock('../../Assets/Icons/Icon-Arrow.svg', () => {
  // eslint-disable-next-line react/display-name
  return (props) => <img {...props} alt={''} />;
});
jest.mock('next/image', () => {
  // eslint-disable-next-line react/display-name
  return (props) => <img {...props} alt={''} />;
});
