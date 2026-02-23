import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --background-color: #0f0f0f;
    --shadow-color: rgba(93, 87, 87, 0.4);
    --item-background: #0bac44;
    --text-color: #000000;
    --second-text-color: white;
    --primary-color: #373737;
    --main-color: #ffff;
    --income-color: #026300;
    --expenses-color: #970c0c;

    --scroll-bar-background: #1a1a1a;

    --error-background-color: #111;
    --error-text-color: #ccc;
    --error-button-color: #e11d48;
    --error-hover-button-color: #be123c;

    --loading-bg-color: rgba(0, 0, 0, 0.5);
  
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
