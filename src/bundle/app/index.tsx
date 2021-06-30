import { ThemeChanger } from "components";

import Game from "bundle/game";

import "./styles.scss";

export default function App() {
  return (
    <>
      <ThemeChanger
        themes={["dh_theme_dark", "dh_theme_light", "dh_theme_blue"]}
      />
      <Game />
    </>
  );
}
