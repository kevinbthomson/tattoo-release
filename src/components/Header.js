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
  background: #333;

  h1 {
    position: relative;
    font-weight: 100;
    left: -1rem;
    color: white;
    padding: 0.25rem 1rem;
    width: 300px;
    margin: 0 0 1rem 0;
    background: darkmagenta;
    transform: skewX(-10deg);
    box-shadow: inset 4px 4px 0 darkmagenta, 4px 4px 0 black;
  }

  p {
    margin: 0;
    text-shadow: 0 1px 0 black;
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