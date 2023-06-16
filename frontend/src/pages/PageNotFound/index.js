import { Container } from './styles';

import Alert from '../../components/Alert';

export default function PageNotFound() {
  return (
    <Container>
      <Alert>
        <h1>404</h1>
        <span>PAGE NOT FOUND</span>
      </Alert>
    </Container>
  );
}
