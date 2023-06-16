import { PropTypes } from 'prop-types';
import { ReactComponent as AlertSvg } from '../../assets/images/icons/alert.svg';

import { Container } from './styles';

export default function Alert({ children }) {
  return (
    <Container>
      <AlertSvg />
      {children}
    </Container>
  );
}

Alert.propTypes = {
  children: PropTypes.string.isRequired,
};
