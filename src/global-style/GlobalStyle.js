import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 1.6rem;
    font-family: 'Noto Sans KR', 'Malgun Gothic', sans-serif;
  }

  :root {
    font-size: 62.5%;
  }

  button {
    cursor: pointer;
  }

  ul {
    list-style: none;
  }
`;

export default GlobalStyle;
