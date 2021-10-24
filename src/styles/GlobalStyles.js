import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle` 
html, body {
margin: 0;
padding: 0;
}

body {
  margin: 0 auto;
  max-width: 80%;
  background: rgb(249 249 255 )
}

*, *::after, *::before {
box-sizing: border-box;
}
`;
