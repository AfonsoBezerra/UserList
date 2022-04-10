import React from 'react';
import { Container } from './styles';

const Header: React.FC = () => (
  <Container>
    <div className="company">
      <img src="/logo.png" alt="logo" />
      <h1>GBrogio</h1>
    </div>
    <div className="perfil">
      <img src="https://i.pravatar.cc/150?u=a042581f4e290wfe04a" alt="Avatar Fake" />
    </div>
  </Container>
);

export default Header;
