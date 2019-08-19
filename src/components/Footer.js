import React from 'react';
import styled from 'styled-components';

const Footer = () => (
  <AppFooter>
    <div className="container">
      <p>
        1919 E 26th Ave, Denver, CO 80205<br />
        303-455-2855
      </p>
    </div>
  </AppFooter>
);

const AppFooter = styled.footer`
  color: darkmagenta;
  background: #fff3f5;
  margin-top: 1rem;
  padding: 1rem 0;
`;

export default Footer;