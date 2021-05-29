import { ThemeChanger } from "../../components";
import Game from "../game";

import "./styles.scss";

export default function App() {
  return (
    <>
      <ThemeChanger themes={["dark", "light", "blue"]} />
      <Game />
    </>
  );
}
