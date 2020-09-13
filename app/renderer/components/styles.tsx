import React, { PropsWithChildren } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Helmet } from 'react-helmet';
import { typography } from '../utils/typography';

const theme = {};

const GlobalStyles = createGlobalStyle`
  html, body {
    height: 100%;
  }

  #root {
    display: grid;
    grid-template-rows: auto 1fr auto;
    grid-template-areas: "header" "main" "footer";
    min-height: 100%;
    min-width: 480px;

    > header {
      grid-area: header;
      padding: 0 20px;
    }

    > main {
      grid-area: main;
      padding: 0 20px;
    }

    > footer {
      grid-area: footer;
      padding: 0 20px;
    }
  }
`;

const Styles: React.FC<PropsWithChildren<{}>> = ({ children }) => (
  <>
    <Helmet>
      <style>{typography.createStyles()}</style>
    </Helmet>
    <GlobalStyles />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </>
);

export default Styles;
