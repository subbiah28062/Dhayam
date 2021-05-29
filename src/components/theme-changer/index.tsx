import { useState, useMemo } from "react";

import "./styles.scss";

function ThemeChanger(props: { themes: String[] }) {
  const { themes } = props;
  const themesLength = themes.length;

  const [themeIndex, setThemeIndex] = useState(0);

  useMemo(() => {
    document.body.className = `dh_theme_${themes[themeIndex]}`;
  }, [themes, themeIndex]);

  function handleThemeChange() {
    const updatedThemeIndex = themeIndex + 1;

    setThemeIndex(updatedThemeIndex < themesLength ? updatedThemeIndex : 0);
  }

  return (
    <div className="dh_theme_changer" onClick={handleThemeChange}>
      <div className="dh_theme_changer_circle" />
    </div>
  );
}

export default ThemeChanger;
