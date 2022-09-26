import React, { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions';
import { Box } from './Box';
import { Section } from './Section';
import { Notification } from './Notification';




export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;

    return Math.round((good / this.countTotalFeedback()) * 100);
  };

  onBtnClick = el => {
    console.log('шо приходит в el -- строка!', typeof el);

    this.setState(prevState => ({
      //! мы получаем  в el строку, тогда какого хрена тут считает вообще. Как это работает?
      //! а так почему не работает?
      //! el: prevState.el + 1,
      [el]: prevState[el] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;

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
        <Section title='Please leave feedback!'>
          <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={this.onBtnClick}
          ></FeedbackOptions>
        </Section>

        {this.countTotalFeedback() > 0 
        ?
        <Section title='Statistics'>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
          ></Statistics>

        </Section> 
        :
        <Notification message="There is no feedback"></Notification>
        }
      
      </Box>
    );
  }
}
