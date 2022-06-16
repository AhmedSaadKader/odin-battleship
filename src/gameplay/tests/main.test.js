import mainGame from "../main-game.js";

it("automatically creates AI player", () => {
  const game = mainGame();
  const AIPlayer = game.AIPlayer;
  expect(AIPlayer.type).toBe("AI");
});

it("makes first turn to move to be human move", () => {
  const game = mainGame();
  const player1 = game.humanPlayer;
  const AIPlayer = game.AIPlayer;
  game.play("B4");
  expect(AIPlayer.gameboard.board["B4"]).toBe("missed shot");
});

it("after human move the next turn is AI move", () => {
  const game = mainGame();
  const player1 = game.humanPlayer;
  const AIPlayer = game.AIPlayer;
  game.play("C9");
  game.play();
  const playerBoardValues = Object.values(player1.gameboard.board);
  expect(AIPlayer.gameboard.board["C9"]).toBe("missed shot");
  expect(playerBoardValues.includes("missed shot")).toBeTruthy();
});

it("checks if one someone lost or not by checking for sunk ships and returning false", () => {
  const game = mainGame();
  const player1 = game.humanPlayer;
  const AIPlayer = game.AIPlayer;
  player1.gameboard.placeShipsRandomlyOnBoard();
  AIPlayer.gameboard.placeShipsRandomlyOnBoard();
  game.play("C9");
  game.play();
  expect(game.gameEnd()).toBeFalsy();
});

it("checks if one player lost by checking for sunk ships and returning game endings", () => {
  const game = mainGame();
  const player1 = game.humanPlayer;
  const AIPlayer = game.AIPlayer;
  player1.gameboard.placeShipsRandomlyOnBoard();
  AIPlayer.gameboard.placeShipsRandomlyOnBoard();
  Object.keys(AIPlayer.gameboard.board).forEach((spot) => {
    AIPlayer.gameboard.receiveAttack(spot);
  });
  console.log(Object.values(AIPlayer.gameboard.board));
  expect(game.gameEnd()).toBe("You win");
});
