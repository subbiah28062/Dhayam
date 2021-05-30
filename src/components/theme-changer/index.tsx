import { useState, useMemo } from "react";

import "./styles.scss";

function ThemeChanger(props: { themes: String[] }) {
  const { themes } = props;
  const themesLength = themes.length;

  const [themeIndex, setThemeIndex] = useState(getLocalstorageTheme);

  useMemo(() => {
    const themeClass = `dh_theme_${themes[themeIndex]}`;
    document.body.className = themeClass;
    localStorage.setItem("themeClass", themeClass);
  }, [themes, themeIndex]);

  function handleThemeChange() {
    const updatedThemeIndex = themeIndex + 1;

    setThemeIndex(updatedThemeIndex < themesLength ? updatedThemeIndex : 0);
  }

  function getLocalstorageTheme() {
    let themeIndex = 0;

    const themeClass = localStorage.getItem("themeClass");

    if (themeClass) {
      const themeIndexFound = themes.findIndex((theme) => {
        return `dh_theme_${theme}` === themeClass;
      });

      if (themeIndexFound !== -1) {
        themeIndex = themeIndexFound;
      }
    }

    return themeIndex;
  }

  return (
    <div className="dh_theme_changer" onClick={handleThemeChange}>
      <div className="dh_theme_changer_circle" />
    </div>
  );
}

export default ThemeChanger;
