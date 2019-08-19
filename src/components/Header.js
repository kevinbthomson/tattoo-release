import React from 'react';
import styled from 'styled-components';

const Header = () => (
  <AppHeader>
    <h1>Tattoo Release</h1>
    <p>Mammoth American LLC</p>
  </AppHeader>
);

const AppHeader = styled.header`
  margin-bottom: 1rem;
  padding: 1rem;
  color: white;
  background: Black;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);

  h1 {
    margin: 0;
    font-weight: 100;
  }

  p {
    margin: 0;
  }
`;

export default Header;