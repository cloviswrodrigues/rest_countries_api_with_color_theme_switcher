import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../assets/styles/global';

import themes from '../../assets/styles/themes';

import Header from '../Header';
import Routes from '../../Routes';

function App() {
  return (
    <ThemeProvider theme={themes.light}>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
