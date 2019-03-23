import React from 'react';
import HomePage from '../components/templates/HomePage';

import Theme from '../styles/theme';
import { ThemeProvider } from 'styled-components';

const Home = () => (
  <ThemeProvider theme={Theme}>
    <HomePage />
  </ThemeProvider>
);

export default Home;
