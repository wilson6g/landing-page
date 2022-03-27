import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --white: #FFFFFF;
    --black: #000000;
    --gray-100: #E5E5E5;
    --purple-500: #8459E3;
  }

  body {
    background: var(--white);
  }

  html {
    @media (max-width: 1180px) {
      font-size: 92.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button, input, textarea, body {
    font: 400 1rem "Poppins", sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
