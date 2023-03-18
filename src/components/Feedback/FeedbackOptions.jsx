import React from 'react';
import PropTypes from 'prop-types';
import { FeedbackSection, ButtonLeaveFeedback } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackSection>
      {options.map(option => (
        <ButtonLeaveFeedback
          key={option}
          value={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </ButtonLeaveFeedback>
      ))}
    </FeedbackSection>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;
