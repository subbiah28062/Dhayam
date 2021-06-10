import { ThemeChanger } from "components";

import Game from "bundle/game";

import "./styles.scss";

export default function App() {
  return (
    <>
      <ThemeChanger themes={["dark", "light", "blue"]} />
      <Game />
    </>
  );
}
