import Header from '@components/Header';
import React from 'react';
import { MainStyle } from './styles';

const Layout: React.FC = ({ children }) => (
  <>
    <Header />
    <MainStyle>{children}</MainStyle>
    <footer />
  </>
);

export default Layout;
