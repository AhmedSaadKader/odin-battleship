import GameBoard from "./gameboard";

export default function Player(nameParam, typeParam) {
  const name = nameParam;
  const type = typeParam;
  const gameboard = GameBoard();

  const attackedSpots = [];

  const attack = function (coordinate, opponentBoard) {
    if (attackedSpots.includes(coordinate)) {
      return "Cannot attack same location twice";
    }
    opponentBoard.receiveAttack(coordinate);
    attackedSpots.push(coordinate);
  };

  const makeRandomMove = function (opponentBoard) {
    const boardKeys = Object.keys(opponentBoard.board);
    let randomCoordinate =
      boardKeys[Math.floor(Math.random() * boardKeys.length)];
    while (attackedSpots.includes(randomCoordinate)) {
      randomCoordinate =
        boardKeys[Math.floor(Math.random() * boardKeys.length)];
    }
    attack(randomCoordinate, opponentBoard);
  };

  return { name, type, gameboard, attack, makeRandomMove };
}
