import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'NeoDonggeunmo';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.3/NeoDunggeunmo.woff') format('woff');
    font-weight: normal;
    font-display: swap;
}

  body {
    margin: 0;
    padding: 0;
    font-family: "NeoDonggeunmo";
    color: #695252;
    background-color: #CEC69E;
    min-height : 100vh;
  }
`;

export default GlobalStyle;