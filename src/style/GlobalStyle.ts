import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}
    *{
        marign: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        background-color: gray;
    }
`;

export default GlobalStyle;
