import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import { BackgroundSnipper, Snipper } from './styles';

export default function Loader({ isLoading }) {
  if (!isLoading) return null;
  return createPortal(
    <BackgroundSnipper>
      <Snipper />
    </BackgroundSnipper>,
    document.getElementById('loader-root'),
  );
}

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
