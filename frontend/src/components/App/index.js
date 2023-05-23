import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../assets/styles/global';

import themes from '../../assets/styles/themes';

import Header from '../Header';
import Routes from '../../Routes';

function App() {
  const [theme, useTheme] = useState('light');

  function handleToggleTheme() {
    useTheme((prevState) => (prevState === 'light' ? 'dark' : 'light'));
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
