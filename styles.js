import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --radius-s: 12px;
    --radius-m: 20px;
    --radius-l: 50px;
    --radius-full: 100px;
    --background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
    --item-background: linear-gradient(135deg, #11998e 0%, #26c864 100%);
    --balance-negative: linear-gradient(135deg, #eb3349 0%, #f45c43 100%);
    --balance-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --balance-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    --card: rgba(0, 0, 0, 0.10);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
    --text: #ffff;
    --primary-color: #102219;
    --shadow: 0 10px 30px rgba(93, 87, 87, 0.4);
    --main-color: #ffff;
    --expenses-color: #ff0505;
    --icons: #aaa;
    --border: rgba(255, 255, 255, 0.39);
    --search-placeholder: rgb(183, 183, 183);
    --scroll-bar-background: #1a1a1a;
    --error-button-color: #e11d48;
    --hover-color: #be123c;
  }

  .dark {
    --text: #ffffff;
    --background: linear-gradient(135deg, #000000 0%, #3a473f 100%);
    --item-background: linear-gradient(135deg, #11998e 0%, #26c864 100%);
    --primary-color: #102219;
    --shadow: 0 10px 30px rgba(93, 87, 87, 0.4);
    --main-color: #ffff;
    --expenses-color: #ff0505;
    --card: rgba(151, 151, 151, 0.1);
    --icons: #aaa;
    --radius-full: 100px;
    --border: rgba(255, 255, 255, 0.39);
    --search-placeholder: rgb(183, 183, 183)
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
    background: var(--background);
    padding-bottom: 50px;
    color: var(--text);
    transition: all 0.3s ease;
  }
`;
