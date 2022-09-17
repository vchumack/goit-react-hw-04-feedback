import PropTypes from 'prop-types';
import {
  TextStat,
  TextStatGood,
  TextStatNeutral,
  TextStatBad,
} from './Statistics.styled';

export function Statistics({ good, neutral, bad, total, positivePercentage }) {
  console.log('--- typeof total', typeof positivePercentage);
  return (
    <>
      <TextStatGood>Good: {good}</TextStatGood>
      <TextStatNeutral>Neutral: {neutral}</TextStatNeutral>
      <TextStatBad>Bad: {bad}</TextStatBad>
      <TextStat>Total: {total}</TextStat>
      <TextStat>Positive Feedback: {positivePercentage} %</TextStat>
    </>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
