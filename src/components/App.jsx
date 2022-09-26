import { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions';
import { Box } from './Box';
import { Section } from './Section';
import { Notification } from './Notification';




export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  const onBtnClick = el => {

    switch (el) {
      case 'good':
        setGood(prevState => prevState + 1)
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1)
        break;
      case 'bad':
        setBad(prevState => prevState + 1)
        break;
    
      default:
        console.log("This element doesn't exist")
        break;
    }
  
  };

    return (
      <Box
        width="700px"
        pb={2}
        pt={2}
        ml="auto"
        mr="auto"
        mt={5}
        mb={5}
      >
        <Section title='Please leave goood feedback ^^'>
          <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onBtnClick}
          ></FeedbackOptions>
        </Section>

        {countTotalFeedback() > 0 
        ?
        <Section title='Statistics'>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
          ></Statistics>

        </Section> 
        :
        <Notification message="There is no feedback"></Notification>
        }
      
      </Box>
    );
  }

