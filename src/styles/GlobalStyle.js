import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  html, body {
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  }

  * {
    box-sizing: border-box;
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';

  };
`;

export default GlobalStyle;
