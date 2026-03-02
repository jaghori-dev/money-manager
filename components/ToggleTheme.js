import { Button } from "./TransactionList/TransactionItem/TransactionItem";
import { Sun, Moon } from "lucide-react";
import { useState } from "react";

export default function ToggleTheme() {
  const [isDark, setIsDark] = useState(false);
  function toggleDark() {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }
  return (
    <Button onClick={toggleDark}>
      {isDark ? <Moon size="15" /> : <Sun size="15" />}
    </Button>
  );
}
