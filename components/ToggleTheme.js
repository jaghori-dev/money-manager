import { Button } from "./TransactionList/TransactionItem/TransactionItem";
import { Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";

export default function ToggleTheme() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDark(true);
      document.body.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      setIsDark(false);
    }
  }, []);
  function toggleDark() {
    if (isDark) {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  }
  return (
    <Button onClick={toggleDark}>
      {isDark ? <Moon size="15" /> : <Sun size="15" />}
    </Button>
  );
}
