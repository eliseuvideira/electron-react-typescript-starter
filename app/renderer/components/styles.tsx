import React, { PropsWithChildren } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

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
  }

  > header {
    grid-area: header;
  }

  > main {
    grid-area: main;
  }

  > footer {
    grid-area: footer;
  }
`;

const Styles: React.FC<PropsWithChildren<{}>> = ({ children }) => (
  <>
    <GlobalStyles />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </>
);

export default Styles;
