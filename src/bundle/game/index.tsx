import { useEffect, useState } from "react";

import "./styles.scss";
import { coinlengthDesktop, coinlengthMobile, noOfGrid } from "./constants";

export default function Game() {
  const [dimensions, setDimensions] = useState(getDimensions);

  const { boxSize, coinDimension, wrapperStyle } = dimensions;

  useEffect(() => {
    window.addEventListener("resize", () => {
      setDimensions(getDimensions());
    });
  }, []);

  function getDimensions() {
    const screenWidth = document.body.clientWidth;
    const screenHeight = document.body.clientHeight;

    const isWidthBigger = screenWidth > screenHeight;
    const coinDimension = isWidthBigger ? coinlengthDesktop : coinlengthMobile;

    const smallestDimension = Math.min(screenWidth, screenHeight);
    const largestDimension = Math.max(screenWidth, screenHeight);

    const remainingSpace = largestDimension - smallestDimension;
    const offset = Math.max(0, 150 - remainingSpace);

    const gameAreaDimension = smallestDimension - offset;

    const updatedGridDimension =
      (gameAreaDimension - 2 * coinDimension) / noOfGrid;

    return {
      boxSize: updatedGridDimension,
      coinDimension,
      wrapperStyle: {
        flexDirection: isWidthBigger
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
          style={{ height: coinDimension }}
        ></div>
        <div className="dh-game-area-middle">
          <div
            className="dh-game-area-middle-left"
            style={{ width: coinDimension }}
          ></div>
          <GameGrid className="dh-game-area-middle-middle" boxSize={boxSize} />
          <div
            className="dh-game-area-middle-right"
            style={{ width: coinDimension }}
          ></div>
        </div>
        <div
          className="dh-game-area-bottom"
          style={{ height: coinDimension }}
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
        .map((row, rowIndex) => {
          return (
            <div className="dh-game-grid-row" key={rowIndex}>
              {Array(noOfGrid)
                .fill(0)
                .map((column, clumnIndex) => {
                  return (
                    <div
                      className="dh-game-grid-box"
                      key={clumnIndex}
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
