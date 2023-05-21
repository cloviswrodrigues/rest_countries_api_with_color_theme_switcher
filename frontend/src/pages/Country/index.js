import { useParams } from 'react-router-dom';

import { Container, Section } from './styles';
import Button from '../../components/Button';

export default function Country() {
  const { name } = useParams();
  console.log('id: ', name);
  return (
    <Container>
      <Section>
        <Button>Back</Button>

      </Section>
    </Container>
  );
}
