import { useEffect, useMemo, useState } from "react";

import "./index.scss";

const gridHorizontal = 7;
const totalGrid = gridHorizontal * gridHorizontal;

export default function Game() {
  const defaultGridDimension = useMemo(findGridDimension, []);

  const [gridDimension, setGridDimension] = useState(defaultGridDimension);

  const gridTemplateColumns = Array(gridHorizontal)
    .fill(`${gridDimension}px`)
    .join(" ");

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

    return updatedGridDimension - 2;
  }

  return (
    <div className="dh-game" style={{ gridTemplateColumns }}>
      {Array(totalGrid)
        .fill(0)
        .map((grid) => {
          return (
            <div
              style={{
                width: gridDimension,
                height: gridDimension,
                background: "white",
                border: "1px solid red",
              }}
            ></div>
          );
        })}
    </div>
  );
}
