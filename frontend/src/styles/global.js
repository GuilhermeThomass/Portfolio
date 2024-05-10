import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        font-family: 'poppins',sans-serif;
        
    }
    body{
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
    }
    #particles{
        z-index:-1;
        height: 100%;
        width: 100%;
        position: absolute;
    }


`;

export default Global;