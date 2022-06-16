export default function updateUI(PlacedShip) {
  function updateGameBoard(gameboard, gameboardIDList) {
    gameboardIDList.forEach((id) => {
      if (gameboard[id] !== "empty") {
        const cell = document.getElementById(id);
        if (gameboard[id].shipLength === 1) {
          cell.className = "ship-unit ship-unit-1";
        } else if (gameboard[id].shipLength === 2) {
          cell.className = "ship-unit ship-unit-2";
        } else if (gameboard[id].shipLength === 3) {
          cell.className = "ship-unit ship-unit-3";
        } else if (gameboard[id].shipLength === 4) {
          cell.className = "ship-unit ship-unit-4";
        }
      }
    });
  }

  function updateShipContainer(PlacedShip) {
    PlacedShip.parentElement.removeChild(PlacedShip);
  }

  return {
    updateGameBoard,
    updateShipContainer,
  };
}
