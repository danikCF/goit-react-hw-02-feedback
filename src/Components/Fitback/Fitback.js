import React, { Component } from 'react'
import Section from './Section/Section';
import Buttons from './Buttons/Buttons';
import Statistics from './Statistics/Statistics';


class Fitback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onHandleClick = (e) => {
    const { name } = e.target;
    this.setState((prevState) => ({ [name]: prevState[name] + 1 }));
  }

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage() {
    return (this.state.good * 100 / this.countTotalFeedback());
  }

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title='Please leave feedback'>
          <Buttons onHandleClick={this.onHandleClick} />
        </Section>
        <Section title='Statistics'>
          {!!this.countTotalFeedback() ? (
            <Statistics good={good}
              neutral={neutral}
              bad={bad}
              countTotalFeedback={this.countTotalFeedback()}
              countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage()} />
          )
            : <h2>No Feedback given!</h2>}
        </Section>
      </>
    )
  }
}

export default Fitback;
