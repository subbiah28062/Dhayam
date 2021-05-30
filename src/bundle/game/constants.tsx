export const noOfGrid = 7;

export const coinAreaDimension = 30;

export const totalGrid = noOfGrid * noOfGrid;

// export const COMMON_GRID_ORDER = [
//   [1, 2, 3, 4, 5, 6, 7],
//   [24, 25, 26, 27, 28, 29, 8],
//   [23, 40, 41, 42, 43, 30, 9],
//   [22, 39, 48, 49, 44, 31, 10],
//   [21, 38, 47, 46, 45, 32, 11],
//   [20, 37, 36, 35, 34, 33, 12],
//   [19, 18, 17, 16, 15, 14, 13],
// ];

export const PLAYER_TOP = [
  [4, 3, 2, 1, 24, 23, 22],
  [5, 37, 38, 39, 40, 25, 21],
  [6, 36, 47, 48, 41, 26, 20],
  [7, 35, 46, 49, 42, 27, 19],
  [8, 34, 45, 44, 43, 28, 18],
  [9, 33, 32, 31, 30, 29, 17],
  [10, 11, 12, 13, 14, 15, 16],
];

export const PLAYER_left = [
  [16, 17, 18, 19, 20, 21, 22],
  [15, 29, 28, 27, 26, 25, 23],
  [14, 30, 43, 42, 41, 40, 24],
  [13, 31, 44, 49, 48, 39, 1],
  [12, 32, 45, 46, 47, 38, 2],
  [11, 33, 34, 35, 36, 37, 3],
  [10, 9, 8, 7, 6, 5, 4],
];

export const PLAYER_BOTTOM = [
  [10, 11, 12, 13, 14, 15, 16],
  [9, 29, 28, 27, 26, 25, 17],
  [8, 30, 43, 42, 41, 40, 18],
  [7, 31, 44, 49, 48, 27, 19],
  [6, 32, 45, 46, 47, 26, 20],
  [5, 33, 34, 35, 36, 25, 21],
  [4, 3, 2, 1, 24, 23, 22],
];

// let currentRow = 0;
// let currentColumn = 3;

// let gridDirection = "column";
// let fillDirection = "forward";

// let grid = { 0: {}, 1: {}, 2: {}, 3: {}, 4: {}, 5: {}, 6: {} };

// Array(33)
//   .fill(0)
//   .forEach((box, boxIndex) => {
//     const boxValue = boxIndex + 1;

//     const isColumn = gridDirection === "column";
//     const isForward = fillDirection === "forward";
//     console.log(
//       "grisd",
//       grid[currentRow][currentColumn],
//       grid,
//       currentRow,
//       currentColumn,
//       boxValue,
//       isColumn,
//       isForward
//     );

//     if (isColumn) {
//       if (isForward) {
//         grid[currentRow][currentColumn] = boxValue;

//         if (currentColumn + 1 === noOfColumns) {
//           gridDirection = "row";
//           currentRow++;
//         } else {
//           currentColumn++;
//         }

//         if (grid[currentRow][currentColumn]) {
//           currentColumn--;
//           currentRow--;
//           gridDirection = "row";
//           fillDirection = "reverse";
//         }
//       } else {
//         grid[currentRow][currentColumn] = boxValue;

//         if (currentColumn === 0) {
//           gridDirection = "row";
//           fillDirection = "reverse";
//           currentRow--;
//         } else {
//           currentColumn--;
//         }
//       }
//     } else {
//       if (isForward) {
//         grid[currentRow][currentColumn] = boxValue;

//         if (currentRow + 1 === noOfRows) {
//           gridDirection = "column";
//           fillDirection = "reverse";
//           currentColumn--;
//         } else {
//           currentRow++;
//         }
//       } else {
//         grid[currentRow][currentColumn] = boxValue;

//         if (currentRow === 0) {
//           gridDirection = "column";
//           fillDirection = "forward";
//           currentColumn++;
//         } else {
//           currentRow--;
//         }

//         if (grid[currentRow][currentColumn]) {
//           currentColumn++;
//           currentRow++;
//         }
//       }
//     }
//   });

// console.log("grid", grid);
