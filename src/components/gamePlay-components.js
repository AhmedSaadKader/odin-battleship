export default function gamePlayComponents() {
  const playerBoardDiv = document.createElement("div");
  playerBoardDiv.className = "gameboard";
  playerBoardDiv.id = "player-board";

  const computerBoardDiv = document.createElement("div");
  computerBoardDiv.className = "gameboard";
  computerBoardDiv.id = "player-board";

  return { playerBoardDiv, computerBoardDiv };
}
