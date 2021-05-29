import { useEffect, useMemo, useState } from "react";

import "./styles.scss";
import {} from "./constants";

export default function Game() {
  const defaultGridDimension = useMemo(findGridDimension, []);
  const [gridDimension, setGridDimension] = useState(defaultGridDimension);

  useEffect(() => {
    window.addEventListener("resize", () => {
      const updatedGridDimension = findGridDimension();

      setGridDimension(updatedGridDimension);
    });
  }, []);

  function findGridDimension() {
    const screenWidth = document.body.clientWidth;
    const screenHeight = document.body.clientHeight;

    const smallestDimension = Math.min(screenWidth, screenHeight);
    const updatedGridDimension = smallestDimension / 7;

    return updatedGridDimension;
  }

  return (
    <div className="dh-game-area">
      <div className="dh-game-area-top"></div>
      <div className="dh-game-area-middle">
        <div className="dh-game-area-middle-left"></div>
        <div className="dh-game-area-middle-middle dh-game-grid"></div>
        <div className="dh-game-area-middle-right"></div>
      </div>
      <div className="dh-game-area-bottom"></div>
    </div>
  );
}
