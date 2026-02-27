import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --item-background: linear-gradient(135deg, #11998e 0%, #26c864 100%);
    --card: rgba(0, 0, 0, 0.10);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
    --text: #ffff;
    --primary-color: #102219;
    --shadow: 0 10px 30px rgba(93, 87, 87, 0.4);
    --main-color: #ffff;
    // --income-color: #255e08;
    // --income-color: #ffff;
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
    background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
    padding-bottom: 50px;
  }
`;
