import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --background: #102219;
    --item-background: #0bac44;
    --text: #ffff;
    --second-text-color: white;
    --primary-color: #373737;
    --shadow: 0 10px 30px rgba(93, 87, 87, 0.4);
    --main-color: #ffff;
    --income-color: #15ec80;
    --expenses-color: #ff0505;
    --icons: #aaa;
    --radius-s: 12px;
    --radius-m: 20px;
    --radius-l: 50px;
    --radius-full: 100px;
    --border: rgba(255, 255, 255, 0.39);

    --scroll-bar-background: #1a1a1a;

    --error-button-color: #e11d48;
    --hover-color: #be123c;
  
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
    background-color: var(--background);
    padding-bottom: 50px;
  }
`;
