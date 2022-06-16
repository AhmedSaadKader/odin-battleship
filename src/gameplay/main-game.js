import Player from "./player";

export default function mainGame() {
  const humanPlayer = Player("Human");
  const AIPlayer = Player("AI");
  let turn = "Human";

  function endTurn() {
    if (turn === "Human") {
      turn = "AI";
    } else {
      turn = "Human";
    }
  }

  function play(coordinate) {
    if (turn === "Human") {
      humanPlayer.attack(coordinate, AIPlayer.gameboard);
      endTurn();
    } else if (turn === "AI") {
      AIPlayer.makeRandomMove(humanPlayer.gameboard);
      endTurn();
    }
  }

  function gameEnd() {
    if (humanPlayer.gameboard.checkIfAllShipsSunk()) {
      return "You lose";
    } else if (AIPlayer.gameboard.checkIfAllShipsSunk()) {
      return "You win";
    } else {
      return false;
    }
  }

  return {
    humanPlayer,
    AIPlayer,
    play,
    gameEnd,
  };
}
