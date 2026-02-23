import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --background-color: #0f0f0f;
    --shadow-color: rgba(93, 87, 87, 0.4);
    --item-background: #0bac44;
    --text-color: #000000;
    --second-text-color: white;
    --primary-color: #373737;
    --income-color: #026300;
    --expenses-color: #970c0c;

  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
    background-color: var(--background-color);
  }
`;
