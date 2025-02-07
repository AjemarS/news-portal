"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [isMounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!isMounted) return <div className="w-8 h-8" />; // Тимчасове місце для кнопки

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
     <button
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      className="p-2"
    >
      {currentTheme === "dark" ? "🌙" : "☀️"}
    </button>
  );
}
