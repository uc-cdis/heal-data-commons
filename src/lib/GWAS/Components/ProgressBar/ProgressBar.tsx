import React from 'react';
import PropTypes from 'prop-types';
import { GWASAppSteps } from '../../Utils/constants';
import TourButton from './TourButton/TourButton';

const ProgressBar = ({ currentStep, selectionMode }) => (
  <div data-testid="progress-bar" className="flex  mb-5">
    <div className="flex justify-left">
      {GWASAppSteps.map((item, index) => (
        <div
          key={index}
          data-testid="progress-bar-step"
          className={`transition-colors duration-300 mr-5 pr-5 border-b-4 font-medium border-b-accent-cool-contrast-max ${
            currentStep === index
              ? 'border-b-vadc-gold text-vadc-gold'
              : 'border-b-accent-cool-contrast-max'
          }`}
        >
          <span className="text-2xl pr-2 ">{index + 1}</span>
          <span>{item.title}</span>
        </div>
      ))}
    </div>
    <div className="ml-auto">
      <TourButton currentStep={currentStep} selectionMode={selectionMode} />
    </div>
  </div>
);

ProgressBar.propTypes = {
  currentStep: PropTypes.number.isRequired,
  selectionMode: PropTypes.string.isRequired,
};

export default ProgressBar;
