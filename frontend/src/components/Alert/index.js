import { PropTypes } from 'prop-types';
import { ReactComponent as AlertWarningSvg } from '../../assets/images/icons/alert-warning.svg';
import { ReactComponent as AlertDangerSvg } from '../../assets/images/icons/alert-danger.svg';

import { Container } from './styles';

export default function Alert({ type = 'warning', children }) {
  return (
    <Container>
      {type === 'warning' && <AlertWarningSvg />}
      {type === 'danger' && <AlertDangerSvg />}
      {children}
    </Container>
  );
}

Alert.propTypes = {
  type: PropTypes.oneOf(['warning', 'danger']),
  children: PropTypes.node.isRequired,
};

Alert.defaultProps = {
  type: 'warning',
};
