import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html, body {
    padding: 0;
    margin: 0;
  }
  body {
    margin: 0 auto;
    background-color: ${props => props.theme.colors['bg-lightWhite']};
  }
  a {
    color: black;
    text-decoration: none;
  }
`;
