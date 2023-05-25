import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../assets/styles/global';

import themes from '../../assets/styles/themes';

import Header from '../Header';
import Routes from '../../Routes';
import useLocalStorage from '../../Hooks/useLocalStorage';

function App() {
  const [theme, setTheme] = useLocalStorage({ key: 'theme', defaultValue: 'light' });

  function handleToggleTheme() {
    setTheme((prevState) => (prevState === 'light' ? 'dark' : 'light'));
  }

  return (
    <ThemeProvider theme={themes[theme]}>
      <BrowserRouter>
        <GlobalStyle />
        <Header onToggleTheme={handleToggleTheme} />
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
