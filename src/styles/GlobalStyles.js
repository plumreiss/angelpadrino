import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle` 
html, body {
margin: 0;
padding: 0;
}

body {
  margin: 0 auto;
  max-width: 80%;
  background: #f9f9ff;
}

*, *::after, *::before {
box-sizing: border-box;
}

h1, h2, h3 {

  margin: 0.5em 0;
  font-weight: 900;
  line-height: 1.5;
  letter-spacing: 0.75px;
  color: #282648;
}

p {
  font-weight: 500;
  letter-spacing: 0.75px;
  color: #282648;
}

a {
  text-decoration: none;
}

`;
