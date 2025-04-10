import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { GlobalStyle } from './GlobalStyle.js';
import App from './App.jsx';
import { ThemeProvider } from 'styled-components';
import { theme } from "./theme";
import { Normalize } from "styled-normalize";
import store from "./store";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <Normalize />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </Provider>
  </StrictMode>,
)