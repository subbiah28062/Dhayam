import { useEffect, useState } from "react";

import "./styles.scss";
import { coinAreaDimension, noOfGrid } from "./constants";

export default function Game() {
  const [gridDimension, setGridDimension] = useState(findGridDimension);

  const { boxSize, wrapperStyle } = gridDimension;

  useEffect(() => {
    window.addEventListener("resize", () => {
      setGridDimension(findGridDimension());
    });
  }, []);

  function findGridDimension() {
    const coinDimension = 2 * coinAreaDimension;

    const screenWidth = document.body.clientWidth - coinDimension;
    const screenHeight = document.body.clientHeight - coinDimension;

    const smallestDimension = Math.min(screenWidth, screenHeight);
    const updatedGridDimension = smallestDimension / noOfGrid;

    return {
      boxSize: updatedGridDimension,
      wrapperStyle: {
        flexDirection:
          screenWidth > screenHeight
            ? ("row" as "row")
            : ("column" as "column"),
      },
    };
  }

  return (
    <div className="dh-game-area-wrapper" style={wrapperStyle}>
      <div className="dh-game-area-before"></div>
      <div className="dh-game-area">
        <div
          className="dh-game-area-top"
          style={{ height: coinAreaDimension }}
        ></div>
        <div className="dh-game-area-middle">
          <div
            className="dh-game-area-middle-left"
            style={{ width: coinAreaDimension }}
          ></div>
          <GameGrid className="dh-game-area-middle-middle" boxSize={boxSize} />
          <div
            className="dh-game-area-middle-right"
            style={{ width: coinAreaDimension }}
          ></div>
        </div>
        <div
          className="dh-game-area-bottom"
          style={{ height: coinAreaDimension }}
        ></div>
      </div>
      <div className="dh-game-area-after"></div>
    </div>
  );
}

function GameGrid(props: { className?: string; boxSize: number }) {
  const { className = "", boxSize } = props;

  return (
    <div className={`dh-game-grid ${className}`}>
      {Array(noOfGrid)
        .fill(0)
        .map(() => {
          return (
            <div className="dh-game-grid-row">
              {Array(noOfGrid)
                .fill(0)
                .map(() => {
                  return (
                    <div
                      className="dh-game-grid-box"
                      style={{ width: boxSize, height: boxSize }}
                    />
                  );
                })}
            </div>
          );
        })}
    </div>
  );
}
