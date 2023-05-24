import { useState } from 'react';
import PropTypes from 'prop-types';

import { Container, Skeleton } from './styles';

export default function Image({ src, alt }) {
  const [skeletonActive, setSkeletonActive] = useState(true);

  return (
    <Container>
      {skeletonActive && <Skeleton />}
      <img src={src} alt={alt} onLoad={() => setSkeletonActive(false)} />
    </Container>
  );
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

Image.defaultProps = {
  alt: '',
};
