import PropTypes from 'prop-types';
import { Button, DivBtn } from './FeedbackOptions.styled';

export function FeedbackOptions({ options, onLeaveFeedback }) {
  // console.log('--- typeof options', typeof options);

  return (
    <DivBtn>
      {options.map(el => (
        <Button key={el} type="button" onClick={() => onLeaveFeedback(el)}>
          {el}
        </Button>
      ))}
    </DivBtn>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
