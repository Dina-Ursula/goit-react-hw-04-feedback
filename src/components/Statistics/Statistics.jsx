import React from 'react';
import PropTypes from 'prop-types';
import { SectionStatistics, ListResult } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <SectionStatistics>
        <ListResult>Good:{good}</ListResult>
        <ListResult>Neutral:{neutral}</ListResult>
        <ListResult>Bad:{bad}</ListResult>
        <ListResult>Total:{total}</ListResult>
        <ListResult>Positive feedback:{positivePercentage}%</ListResult>
      </SectionStatistics>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
export default Statistics;
