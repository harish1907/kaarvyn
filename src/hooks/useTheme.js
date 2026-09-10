import { useEffect, useState } from "react";

const STORAGE_KEY = "kaarvyn-theme";

function getInitialTheme() {
  if (typeof window === "undefined") return "dark";
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "light" || saved === "dark") return saved;
  } catch {
    // localStorage unavailable (private mode, etc.) — fall through to default
  }
  return "dark";
}

// Kaarvyn defaults to the dark luxury look; visitors can opt into a light theme.
// Persisted to localStorage and applied as data-theme on <html> so plain CSS
// variables (see index.css) handle the actual re-theming.
export default function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // ignore write failures
    }
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return { theme, toggleTheme };
}
