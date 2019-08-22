import styled from 'styled-components';

export const Button = styled.button`
  background: darkmagenta;
  border: none;
  color: white;
  padding: 0.5em 1em;
  display: inline-block;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background: magenta;
  }

  a {
    color: white;
    text-decoration: none;
  }
`;