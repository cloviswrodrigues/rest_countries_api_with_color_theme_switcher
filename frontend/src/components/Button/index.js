import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { Container } from './styles';
import { ReactComponent as ArrowBackSvg } from '../../assets/images/icons/arrow-back.svg';

export default function Button({ link, children }) {
  return (
    <Container>
      <NavLink to={link} />
      <ArrowBackSvg />
      {children}
    </Container>
  );
}

Button.propTypes = {
  link: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
