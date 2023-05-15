import { Container, Wrapper } from './styles';

import moon from '../../assets/images/icons/moon-outline.svg';

export default function Header() {
  return (
    <Container>
      <Wrapper>
        <h1>Where in the world?</h1>
        <button type="button">
          <img src={moon} alt="moon" />
          <span>Dark Mode</span>
        </button>
      </Wrapper>
    </Container>
  );
}
