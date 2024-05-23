import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`

${reset}

body {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default GlobalStyle;
