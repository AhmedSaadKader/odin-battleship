export default function createBoards() {
  function createPlayerBoard(boardIDs, boardDiv, gameboard) {
    boardIDs.forEach((id) => {
      const cell = document.createElement("div");
      cell.dataset.coordinates = id;
      cell.className = "player-board";
      cell.id = `player-${id}`;
      if (gameboard[id] !== "empty") {
        if (gameboard[id].shipLength === 1) {
          cell.className = "player-board ship-unit ship-unit-1";
        } else if (gameboard[id].shipLength === 2) {
          cell.className = "player-board ship-unit ship-unit-2";
        } else if (gameboard[id].shipLength === 3) {
          cell.className = "player-board ship-unit ship-unit-3";
        } else if (gameboard[id].shipLength === 4) {
          cell.className = "player-board ship-unit ship-unit-4";
        }
      }
      boardDiv.appendChild(cell);
      return boardDiv;
    });
  }

  function createComputerBoard(boardIDs, boardDiv, gameboard) {
    boardIDs.forEach((id) => {
      const cell = document.createElement("div");
      cell.className = "computer-board";
      cell.dataset.coordinates = id;
      cell.id = `computer-${id}`;
      // if (gameboard[id] !== "empty") {
      //   if (gameboard[id].shipLength === 1) {
      //     cell.className = "computer-board ship-unit ship-unit-1";
      //   } else if (gameboard[id].shipLength === 2) {
      //     cell.className = "computer-board ship-unit ship-unit-2";
      //   } else if (gameboard[id].shipLength === 3) {
      //     cell.className = "computer-board ship-unit ship-unit-3";
      //   } else if (gameboard[id].shipLength === 4) {
      //     cell.className = "computer-board ship-unit ship-unit-4";
      //   }
      // }
      boardDiv.appendChild(cell);
    });
    return boardDiv;
  }

  return { createPlayerBoard, createComputerBoard };
}
