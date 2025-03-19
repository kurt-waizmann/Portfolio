import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
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
      scroll-behavior: smooth;
  }

  body {
    font-family: "Poppins", sans-serif;
    color: #fff;
    background-color: #8B96A7;
    padding: 2rem 4rem 1rem;
    box-sizing: border-box;
    overflow: hidden;
      @media (min-width:900px) {
      padding: 5rem 7rem 1rem;
  }
  }
h1 {
  font-size: 3.4rem;
  font-weight: 700;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  text-shadow: -3px 3px 0px #E76A46;
  line-height: 3.5rem;

    @media (min-width:900px) {
  font-size: 4rem;
  line-height: 7rem;
}
  }
h2 {
  font-size: 2rem;
  text-shadow: -2px 2px 0px #E76A46;
  text-transform: uppercase;
}
p {
  font-size: 1.7rem;
  font-weight: 300;
  line-height: 2.4rem;
  }
input {
  font-family: "Poppins", sans-serif;
  color: #FFFFFF;
  width: 30rem;
  height: 48px;
  border: 1px solid #FFFFFF;
  border-radius: 10px;
  background-color: inherit;
  padding: 1rem;
  max-width: 350px ;
    @media (min-width:900px) {
  }
}
textarea {
  font-family: "Poppins", sans-serif;
  color: #FFFFFF;
  font-family: "Poppins", sans-serif;
  width: 30rem;
  border: 1px solid #FFFFFF;
  border-radius: 10px;
  background-color: inherit;
  padding: 1rem;
  resize: none;
  max-width: 350px ;
}  
::placeholder {
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-size: 1.5rem;
  color: white;
  opacity: .7;
}
`;

export default GlobalStyles;
