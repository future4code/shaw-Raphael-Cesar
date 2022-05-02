
import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
    *{ 
        padding: 0;
        margin: 0;
        list-style: none;
        box-sizing: border-box;
    }
    html {
        max-width: 100vw;
        min-height: 100vh;
    }
    body, #root {
        margin: 0;
        width: 100%;
        height: 100%;
        -webkit-font-smoothing: antialiased !important;
    }
`

export default GlobalStyle