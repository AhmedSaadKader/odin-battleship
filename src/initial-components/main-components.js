export default (function mainComponents() {
  const main = document.createElement("main");

  const boardPlusButton = document.createElement("div");
  const placementBoard = document.createElement("div");
  placementBoard.className = "gameboard";
  placementBoard.id = "placement-board";
  boardPlusButton.appendChild(placementBoard);

  const boardButtonsDiv = document.createElement("div");
  boardButtonsDiv.className = "board-buttons";
  const randomizeButton = document.createElement("button");
  randomizeButton.id = "randomize-ships";
  randomizeButton.innerHTML = "Random Board";
  const startButton = document.createElement("button");
  startButton.id = "start-button";
  startButton.innerHTML = "Start Game";
  boardButtonsDiv.append(startButton, randomizeButton);
  boardPlusButton.appendChild(boardButtonsDiv);

  main.appendChild(boardPlusButton);

  const shipContainer = document.createElement("div");
  shipContainer.id = "ship-container";
  shipContainer.className = "ship-container";
  main.appendChild(shipContainer);

  return {
    main,
    boardPlusButton,
    startButton,
    randomizeButton,
    shipContainer,
    placementBoard,
  };
})();
