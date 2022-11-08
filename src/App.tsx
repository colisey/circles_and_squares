import React from 'react';
import {Home} from 'pages/home/page';
import {ThemeProvider} from 'styled-components';
import {theme} from './styles/theme';

export const App = () => (
  <ThemeProvider theme={theme}>
    <Home/>
  </ThemeProvider>
);
