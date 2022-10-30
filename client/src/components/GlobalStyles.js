import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
      font-size: 62.5%;
      overflow:auto;
  }

  body {
    font-family: "Poppins", sans-serif;
    color: #fff;
    background-color: #8B96A7;
    padding: 3rem;
    box-sizing: border-box;
    overflow: hidden;
  }
`;
