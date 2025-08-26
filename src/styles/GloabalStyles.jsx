import { createGlobalStyle } from "styled-components";
import animations from "../components/animations";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: all 0.3s ease;
  }
 main{
    height: 100vh; 
           background-color: ${(props) => props.theme.colors.background};
  margin: 0px 20px;
    }
  body {
        background-color: ${(props) => props.theme.colors.background};
    transition: all 0.3s ease;
    font-family: 'Poppins', sans-serif;
     min-height: 100vh;
   
  }

      h1 {
    font-family: 'Montserrat', sans-serif;
    font-size: 3rem;
    font-weight: 700;
    line-height: 1.2;
    color: ${(props) => props.theme.colors.textHeader};
  }

  
    ${animations.fadeIn}
`;

export default GlobalStyle;
