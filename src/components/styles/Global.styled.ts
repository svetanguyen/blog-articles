import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background: ${props => props.theme.background};
    transition: all 0.2s ease-in-out;
  }
`;