import * as GlobalStyles from '@globalStyles';
import defaultTheme from '@theme/default';
import { AppProps } from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { UserDataProvider } from '../context/UserDataContext';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles.Reset />
      <GlobalStyles.Colors />
    </ThemeProvider>
    <UserDataProvider>
      <Component {...pageProps} />
    </UserDataProvider>
  </>
);

export default MyApp;
