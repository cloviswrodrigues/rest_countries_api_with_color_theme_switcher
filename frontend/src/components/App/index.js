import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../assets/styles/global';

import themes from '../../assets/styles/themes';

import Header from '../Header';
import Routes from '../../Routes';
import Home from '../../pages/Home';

function App() {
  return (
    <ThemeProvider theme={themes.light}>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Home />
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
