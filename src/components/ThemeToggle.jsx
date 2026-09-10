import { Moon, Sun } from "lucide-react";

export default function ThemeToggle({ theme, onToggle, className = "" }) {
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className={`relative inline-flex items-center justify-center w-10 h-10 rounded-full border border-gold/30 text-gold hover:bg-gold/10 transition-colors duration-300 ${className}`}
    >
      {isDark ? <Sun size={17} strokeWidth={1.5} /> : <Moon size={17} strokeWidth={1.5} />}
    </button>
  );
}
