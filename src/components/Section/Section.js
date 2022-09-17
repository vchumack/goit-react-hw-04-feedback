import PropTypes from 'prop-types';
import { Title } from './Section.styled';

export function Section({ title, children }) {
  // console.log('--- typeof title', typeof title);
  return (
    <section>
      <Title>{title}</Title>
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object,
};
