import { useState, useMemo } from "react";

import "./styles.scss";

function ThemeChanger(props: { themes: string[] }) {
  const { themes } = props;

  const [theme, setTheme] = useState(getUserPreferencedTheme);

  useMemo(() => {
    document.body.classList.add(theme);
    localStorage.setItem("user-prefered-theme", theme);

    setTimeout(() => {
      document.body.classList.remove("dh_theme_changer_animate");
    }, 500);
  }, [theme]);

  function handleThemeChange() {
    const themesLength = themes.length;
    const themeIndex = themes.findIndex((currentTheme) => {
      return theme === currentTheme;
    });

    const updatedThemeIndex = themeIndex + 1;
    const selectedThemeIndex =
      updatedThemeIndex < themesLength ? updatedThemeIndex : 0;

    document.body.classList.remove(theme);
    document.body.classList.add("dh_theme_changer_animate");
    setTheme(themes[selectedThemeIndex]);
  }

  function getUserPreferencedTheme() {
    const themeClass = localStorage.getItem("user-prefered-theme");

    return themeClass || themes[0];
  }

  return (
    <div className="dh_theme_changer" onClick={handleThemeChange}>
      <div className="dh_theme_changer_circle" />
    </div>
  );
}

export default ThemeChanger;
