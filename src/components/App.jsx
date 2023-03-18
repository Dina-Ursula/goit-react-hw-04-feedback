import { useState } from 'react';

import FeedbackOptions from './Feedback/FeedbackOptions';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const optionsMap = {
    good: setGood,
    neutral: setNeutral,
    bad: setBad,
  };

  const clickChoice = option => {
    const optionFunction = optionsMap[option];
    optionFunction(prev => prev + 1);
    // switch (option) {
    //   case 'good':
    //     setGood(prev => prev + 1);
    //     break;
    //   case 'neutral':
    //     setNeutral(prev => prev + 1);
    //     break;
    //   case 'bad':
    //     setBad(prev => prev + 1);
    //     break;
    // }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100) || 0;
  };

  const textFeedback = 'Please leave feedback';
  const textStatistics = 'Statistics';

  return (
    <>
      <Section
        title={textFeedback}
        child={
          <FeedbackOptions
            options={Object.keys(optionsMap)}
            onLeaveFeedback={clickChoice}
          />
        }
      />
      <Section
        title={textStatistics}
        child={
          countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          )
        }
      />
    </>
  );
}
