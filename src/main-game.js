import Player from "./gameplay/player";

export default function mainGame(givenName) {
  const humanPlayer = Player(givenName, "Human");
  const AIPlayer = Player("Angry Pirate", "AI");
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
