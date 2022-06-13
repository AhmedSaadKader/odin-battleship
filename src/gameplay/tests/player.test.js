import Player from "../player";

it("attack empty location", () => {
  const p = Player("ahmed", "human");
  const opponent = Player("computer", "AI");
  p.attack("B3", opponent.gameboard);
  expect(opponent.gameboard.board["B3"]).toBe("missed shot");
});

it("attacks ship", () => {
  const p = Player("ahmed", "human");
  const opponent = Player("computer", "AI");
  const ships = Object.values(opponent.gameboard.ships);
  opponent.gameboard.placeShipOnBoard(ships[9], "D5", "vertical");
  p.attack("D6", opponent.gameboard);
  expect(Object.values(opponent.gameboard.board["D6"].shipPositions)[0]).toBe(
    "hit"
  );
});

it("doesn't attack same location twice", () => {
  const p = Player("ahmed", "human");
  const opponent = Player("computer", "AI");
  p.attack("D6", opponent.gameboard);
  p.attack("D6", opponent.gameboard);
  expect(p.attack("D6")).toBe("Cannot attack same location twice");
});

it("AI makes random moves", () => {
  const p = Player("ahmed", "AI");
  const opponent = Player("computer", "AI");
  p.makeRandomMove(opponent.gameboard);
  expect(Object.values(opponent.gameboard.board)).toContain("missed shot");
});
