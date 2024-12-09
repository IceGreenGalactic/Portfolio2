import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: all 0.3s ease;
  }
 main{
    height: 100vh;
    }
  body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.color};
    transition: all 0.3s ease;
    font-family: 'Arial', sans-serif;
     min-height: 100vh;
  }
`;

export default GlobalStyle;
