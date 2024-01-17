import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}
    * {
        marign: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: gray;
    }

    div, p{
        color: black;
        font-size: 18px;
        font-weight: 400;    
    }
`;

export default GlobalStyle;
