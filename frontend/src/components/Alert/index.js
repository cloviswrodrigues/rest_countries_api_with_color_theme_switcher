import { PropTypes } from 'prop-types';
import { ReactComponent as AlertSvg } from '../../assets/images/icons/alert.svg';

import { Container } from './styles';

export default function Alert({ text }) {
  return (
    <Container>
      <AlertSvg />
      <span>{text}</span>
    </Container>
  );
}

Alert.propTypes = {
  text: PropTypes.string.isRequired,
};
