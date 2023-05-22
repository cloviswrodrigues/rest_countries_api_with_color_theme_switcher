import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Button({ link, children }) {
  return (
    <Container href={link}>
      {/* eslint-disable max-len */}
      <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M244 400L100 256l144-144M120 256h292" /></svg>
      {children}
    </Container>
  );
}

Button.propTypes = {
  link: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
