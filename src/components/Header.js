import React from 'react';
import styled from 'styled-components';

const Header = () => (
  <AppHeader>
    <h1>Tattoo Release</h1>
    <p>Mammoth American LLC</p>

    <nav>
      <ul>
        <li>
          <a href="/clients">Clients</a>
        </li>
      </ul>
    </nav>
  </AppHeader>
);

const AppHeader = styled.header`
  position: relative;
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

  nav {
    position: absolute;
    top: 0;
    right: 0;

    ul {
      display: flex;
      padding: 0;
      list-style: none;
      
      li {
        margin: 0 1rem;
        
        a {
          color: white;
          text-decoration: none;
        }
      }
    }
  }
`;

export default Header;