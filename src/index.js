import "./style.css";
import mainGame from "./gameplay/main-game";
import header from "./initial-components/header";
import mainComponents from "./initial-components/main-components";
import gameboardInitial from "./initial-components/gameboard-initial";
import updateUI from "./initial-components/updateGameboardInitial";
import gamePlayComponents from "./components/gamePlay-components";
import createBoards from "./components/create-boards";

document.body.appendChild(header);
document.body.appendChild(mainComponents.main);

const game = mainGame();
const player = game.humanPlayer;
const computer = game.AIPlayer;
computer.gameboard.placeShipsRandomlyOnBoard();
const computerGameboard = computer.gameboard.board;
const computerGameboardIDs = Object.keys(computerGameboard);
const ships = player.gameboard.ships;
const shipsNames = Object.keys(ships);
const playerGameboard = player.gameboard.board;
const gameboardIDs = Object.keys(playerGameboard);

const updateInitial = updateUI();

const initialGameboard = gameboardInitial();
initialGameboard.createPlacementBoard(
  gameboardIDs,
  mainComponents.placementBoard
);
initialGameboard.createPlayerShipUI(mainComponents.shipContainer, shipsNames);

mainComponents.randomizeButton.addEventListener("click", () => {
  mainComponents.shipContainer.innerHTML = "";
  player.gameboard.placeShipsRandomlyOnBoard();
  updateInitial.updateGameBoard(playerGameboard, gameboardIDs);
});

const fullShip = document.querySelectorAll(".ships-full");
const boardCell = document.querySelectorAll(".board-1");
const rotateButton = document.querySelector(".rotate-button");
const allShips = document.querySelectorAll(".all-ships");
const shipCluster = document.querySelectorAll(".ship-cluster");

fullShip.forEach((ship) => {
  ship.addEventListener("dragstart", (e) => dragStart(e));
  ship.addEventListener("dragend", dragEnd);
});

boardCell.forEach((cell) => {
  cell.addEventListener("dragover", (e) => dragOver(e));
  cell.addEventListener("dragenter", (e) => dragEnter(e));
  cell.addEventListener("dragleave", (e) => dragLeave(e));
  cell.addEventListener("drop", (e) => dragDrop(e));
});

rotateButton.addEventListener("click", rotateShips);

function dragStart(e) {
  e.dataTransfer.setData("text", e.target.id);
  e.dataTransfer.effectAllowed = "move";
  e.target.className += " hold";
  setTimeout(() => e.target.classList.add("invisible"), 10);
}

function dragEnd() {
  this.classList.remove("hold");
  this.classList.remove("invisible");
}

function dragOver(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = "move";
}

function dragEnter(e) {
  e.preventDefault();
  e.target.classList.add("hovered");
}

function dragLeave(e) {
  e.target.classList.remove("hovered");
}

function dragDrop(e) {
  e.preventDefault();
  if (e.dataTransfer.getData("text").includes("ship")) {
    const data = e.dataTransfer.getData("text");
    console.log(data);
    const shipName = document.getElementById(data);
    const shipToPlace = player.gameboard.ships[data];
    const shipDirection = shipName.dataset.shipOrientation;
    if (
      player.gameboard.placeShipOnBoard(shipToPlace, e.target.id, shipDirection)
    ) {
      updateInitial.updateGameBoard(playerGameboard, gameboardIDs);
      updateInitial.updateShipContainer(shipName);
    }
    e.target.classList.remove("hovered");
  }
}

function rotateShips() {
  allShips.forEach((ship) => ship.classList.toggle("row"));
  shipCluster.forEach((cluster) => cluster.classList.toggle("column"));
  fullShip.forEach((ship) => {
    ship.classList.toggle("column");
    if (ship.dataset.shipOrientation === "vertical") {
      ship.dataset.shipOrientation = "horizontal";
    } else {
      ship.dataset.shipOrientation = "vertical";
    }
  });
}

mainComponents.startButton.addEventListener("click", () => {
  const emptyCount = Object.values(playerGameboard).filter(
    (empty) => empty === "empty"
  ).length;
  if (emptyCount > 80) {
    return alert("Please place all your ships on board");
  } else {
    mainComponents.main.innerHTML = "";
    const gamePlayComponent = gamePlayComponents();
    mainComponents.main.append(
      gamePlayComponent.playerBoardDiv,
      gamePlayComponent.computerBoardDiv
    );
    const boardCreation = createBoards();
    boardCreation.createPlayerBoard(
      gameboardIDs,
      gamePlayComponent.playerBoardDiv,
      playerGameboard
    );
    boardCreation.createComputerBoard(
      computerGameboardIDs,
      gamePlayComponent.computerBoardDiv,
      computerGameboard
    );
    const playerBoardCells = document.querySelectorAll(".player-board");
    const computerBoardCells = document.querySelectorAll(".computer-board");
    computerBoardCells.forEach((cell) => {
      const clickedCells = [];
      const computerAttackedCells = [];
      cell.addEventListener(
        "click",
        () => {
          player.attack(cell.dataset.coordinates, computer.gameboard);
          clickedCells.push(cell);
          clickedCells.forEach((clickedCell) => {
            const shipHit = computerGameboard[clickedCell.dataset.coordinates];
            if (shipHit !== "missed shot") {
              clickedCell.innerHTML = "X";
              clickedCell.classList.add("cell-hit");
              if (shipHit.shipLength === 1) {
                clickedCell.className =
                  "computer-board ship-unit ship-unit-1 cell-hit";
              } else if (shipHit.shipLength === 2) {
                clickedCell.className =
                  "computer-board ship-unit ship-unit-2 cell-hit";
              } else if (shipHit.shipLength === 3) {
                clickedCell.className =
                  "computer-board ship-unit ship-unit-3 cell-hit";
              } else if (shipHit.shipLength === 4) {
                clickedCell.className =
                  "computer-board ship-unit ship-unit-4 cell-hit";
              }
            } else if (shipHit === "missed shot") {
              clickedCell.innerHTML = "O";
              clickedCell.classList.add("cell-miss");
            }
          });
          if (computer.gameboard.checkIfAllShipsSunk()) {
            setTimeout(() => alert("You win"), 10);
          }
          computer.makeRandomMove(player.gameboard);
          console.log(computer.attackedSpots, playerGameboard);
          computer.attackedSpots.forEach((spot) => {
            const attackedCell = playerGameboard[spot];
            const cellDiv = document.getElementById(`player-${spot}`);
            console.log(attackedCell, cellDiv);
            if (attackedCell !== "missed shot" && attackedCell !== "empty") {
              cellDiv.innerHTML = "X";
              cellDiv.classList.add("cell-hit");
            } else if (attackedCell === "missed shot") {
              cellDiv.innerHTML = "O";
              cellDiv.classList.add("cell-miss");
            }
          });
          if (player.gameboard.checkIfAllShipsSunk()) {
            setTimeout(() => alert("You lose"), 10);
          }
        },
        { once: true }
      );
    });
  }
});
