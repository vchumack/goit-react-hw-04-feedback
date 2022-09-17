import PropTypes from 'prop-types';
import { Text } from './Notification.styled';

export function Notification({ message }) {
  // console.log('--- typeof message', typeof message);
  return <Text>{message}</Text>;
}

PropTypes.propTypes = {
  message: PropTypes.string.isRequired,
};
