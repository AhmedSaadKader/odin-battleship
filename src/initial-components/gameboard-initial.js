export default function gameboardInitial() {
  function createPlacementBoard(boardIDs, board) {
    boardIDs.forEach((id) => {
      const cell = document.createElement("div");
      cell.className = "board-1";
      cell.id = id;
      board.appendChild(cell);
    });
    return board;
  }

  function createPlayerShipUI(shipContainer, shipList) {
    const allShips = document.createElement("div");
    allShips.className = "all-ships";
    shipContainer.appendChild(allShips);

    for (let i = 1; i < 5; i++) {
      const shipClusters = document.createElement("div");
      shipClusters.className = "ship-cluster";
      shipClusters.id = `ship-cluster-${i}`;
      allShips.appendChild(shipClusters);
    }

    shipList.forEach((shipName) => {
      const ship = document.createElement("div");
      ship.className = "ships-full";
      ship.id = shipName;
      ship.draggable = true;
      ship.dataset.shipOrientation = "vertical";
      if (shipName.includes("length_1")) {
        ship.dataset.shipLength = 1;
        document.getElementById("ship-cluster-1").appendChild(ship);
        const shipUnit = document.createElement("div");
        shipUnit.className = "ship-unit ship-unit-1";
        ship.appendChild(shipUnit);
      } else if (shipName.includes("length_2")) {
        ship.dataset.shipLength = 2;
        document.getElementById("ship-cluster-2").appendChild(ship);
        for (let i = 0; i < 2; i++) {
          const shipUnit = document.createElement("div");
          shipUnit.className = "ship-unit ship-unit-2";
          ship.appendChild(shipUnit);
        }
      } else if (shipName.includes("length_3")) {
        ship.dataset.shipLength = 3;
        document.getElementById("ship-cluster-3").appendChild(ship);
        for (let i = 0; i < 3; i++) {
          const shipUnit = document.createElement("div");
          shipUnit.className = "ship-unit ship-unit-3";
          ship.appendChild(shipUnit);
        }
      } else if (shipName.includes("length_4")) {
        ship.dataset.shipLength = 4;
        document.getElementById("ship-cluster-4").appendChild(ship);
        for (let i = 0; i < 4; i++) {
          const shipUnit = document.createElement("div");
          shipUnit.className = "ship-unit ship-unit-4";
          ship.appendChild(shipUnit);
        }
      }
    });
    const rotate_button = document.createElement("button");
    rotate_button.className = "rotate-button";
    rotate_button.innerHTML = "Rotate";
    shipContainer.appendChild(rotate_button);
  }

  return { createPlacementBoard, createPlayerShipUI };
}
