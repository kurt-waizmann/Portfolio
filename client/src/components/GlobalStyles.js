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
    padding: 2rem 2rem;
    box-sizing: border-box;
    overflow: hidden;
  }
h1 {
  font-size: 3.4rem;
  font-weight: 700;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  text-shadow: -2px 2px 0px #E76A46;
  line-height: 3.5rem;
  }
  p {
  font-size: 1.7rem;
  font-weight: 200;
  line-height: 2.4rem;
  }
`;
