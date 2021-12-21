import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import React from 'react';
import '../styles/reset.css';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/globalStyles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
