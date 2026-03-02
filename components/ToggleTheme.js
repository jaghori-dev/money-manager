import { Button } from "./TransactionList/TransactionItem/TransactionItem";
import { Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";

export const THEME_STATES = {
  DARK: "dark",
  LIGHT: "light",
};

export default function ToggleTheme() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === THEME_STATES.DARK) {
      setIsDark(true);
      document.body.classList.add(THEME_STATES.DARK);
    } else {
      localStorage.setItem("theme", THEME_STATES.LIGHT);
      setIsDark(false);
    }
  }, []);

  function toggleDark() {
    if (isDark) {
      document.body.classList.remove(THEME_STATES.DARK);
      localStorage.setItem("theme", THEME_STATES.LIGHT);
      setIsDark(false);
    } else {
      document.body.classList.add(THEME_STATES.DARK);
      localStorage.setItem("theme", THEME_STATES.DARK);
      setIsDark(true);
    }
  }
  return (
    <Button onClick={toggleDark}>
      {isDark ? <Moon size="15" /> : <Sun size="15" />}
    </Button>
  );
}
