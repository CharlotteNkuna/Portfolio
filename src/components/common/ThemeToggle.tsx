/* import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { motion } from "framer-motion";

function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      whileHover={{ rotate: 180 }}
      transition={{ duration: 0.4 }}
      onClick={() => setDark(!dark)}
      className="w-11 h-11 rounded-full flex items-center justify-center
      bg-white/70 dark:bg-[#241F2B]
      backdrop-blur-md
      shadow-lg
      border border-pink-200
      dark:border-pink-500"
    >
      {dark ? (
        <FaSun className="text-yellow-400 text-lg" />
      ) : (
        <FaMoon className="text-pink-500 text-lg" />
      )}
    </motion.button>
  );
}

export default ThemeToggle; */

import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { motion } from "framer-motion";

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const html = document.documentElement;
  
    if (darkMode) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  
    localStorage.setItem(
      "theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      whileHover={{ rotate: 180 }}
      transition={{ duration: 0.3 }}
      onClick={() => setDarkMode(!darkMode)}
      className="
        h-11
        w-11
        rounded-full
        flex
        items-center
        justify-center
        bg-[var(--surface)]
        shadow-lg
        border
        border-[var(--border)]
      "
    >
      {darkMode ? (
        <FaSun className="text-yellow-400 text-xl" />
      ) : (
        <FaMoon className="text-pink-500 text-xl" />
      )}
    </motion.button>
  );
}

export default ThemeToggle;