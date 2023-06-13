import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Container, Wrapper } from './styles';
import { ReactComponent as MoonSvg } from '../../assets/images/icons/moon.svg';

export default function Header({ onToggleTheme }) {
  function handleThemeMode() {
    onToggleTheme();
  }
  return (
    <Container>
      <Wrapper>
        <h1>
          <NavLink to="/">Where in the world?</NavLink>
        </h1>
        <button type="button" onClick={handleThemeMode}>
          <MoonSvg />
          <span>Dark Mode</span>
        </button>
      </Wrapper>
    </Container>
  );
}

Header.propTypes = {
  onToggleTheme: PropTypes.func.isRequired,
};
