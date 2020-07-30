import React, { PropsWithChildren } from 'react';
import Styles from './styles';
import styled from 'styled-components';
import Navigation from './navigation';

const Header = styled.header``;

const Main = styled.main``;

const Footer = styled.footer`
  margin: 20px 0 10px;
`;

const Layout: React.FC<PropsWithChildren<{ title: string }>> = ({
  children,
  title,
}) => (
  <Styles>
    <Header>
      <Navigation />
    </Header>
    <Main>
      <h1>{title}</h1>
      <div>{children}</div>
    </Main>
    <Footer>&copy; Made with Electron</Footer>
  </Styles>
);

export default Layout;
