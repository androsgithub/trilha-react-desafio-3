import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  
  *{
    margin: 0;
    padding: 0;
  }
  
  body {
    background-color: #1E192C;
    color: #FFFFFF;
  }
  button.navigate{
    background-color: transparent;
    border: none;
    cursor: pointer;
    &:hover{
      filter: brightness(1.15);
    }
  }
`;
