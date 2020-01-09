import { createGlobalStyle } from "styled-components";

const Layout = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    background-color: #282828;
  }
  h1, h2, h3, h4, h5, p, span, div {
    margin: 0;
    padding: 0;
  }
`;

export default Layout;
