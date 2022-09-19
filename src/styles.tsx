import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background: #F5F5F5;
        font-size: 1rem;
        font-family: "Poppins", sans-serif;
    }

    input, select{
        border: none;
        background-color: none;
        outline: none;
    }

`;
