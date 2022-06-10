import GameBoard from "../gameboard";

it("creates new empty board on creating gameboard", () => {
  const gameboard = GameBoard();
  expect(gameboard.board).toStrictEqual({
    A0: "empty",
    A1: "empty",
    A2: "empty",
    A3: "empty",
    A4: "empty",
    A5: "empty",
    A6: "empty",
    A7: "empty",
    A8: "empty",
    A9: "empty",
    B0: "empty",
    B1: "empty",
    B2: "empty",
    B3: "empty",
    B4: "empty",
    B5: "empty",
    B6: "empty",
    B7: "empty",
    B8: "empty",
    B9: "empty",
    C0: "empty",
    C1: "empty",
    C2: "empty",
    C3: "empty",
    C4: "empty",
    C5: "empty",
    C6: "empty",
    C7: "empty",
    C8: "empty",
    C9: "empty",
    D0: "empty",
    D1: "empty",
    D2: "empty",
    D3: "empty",
    D4: "empty",
    D5: "empty",
    D6: "empty",
    D7: "empty",
    D8: "empty",
    D9: "empty",
    E0: "empty",
    E1: "empty",
    E2: "empty",
    E3: "empty",
    E4: "empty",
    E5: "empty",
    E6: "empty",
    E7: "empty",
    E8: "empty",
    E9: "empty",
    F0: "empty",
    F1: "empty",
    F2: "empty",
    F3: "empty",
    F4: "empty",
    F5: "empty",
    F6: "empty",
    F7: "empty",
    F8: "empty",
    F9: "empty",
    G0: "empty",
    G1: "empty",
    G2: "empty",
    G3: "empty",
    G4: "empty",
    G5: "empty",
    G6: "empty",
    G7: "empty",
    G8: "empty",
    G9: "empty",
    H0: "empty",
    H1: "empty",
    H2: "empty",
    H3: "empty",
    H4: "empty",
    H5: "empty",
    H6: "empty",
    H7: "empty",
    H8: "empty",
    H9: "empty",
    I0: "empty",
    I1: "empty",
    I2: "empty",
    I3: "empty",
    I4: "empty",
    I5: "empty",
    I6: "empty",
    I7: "empty",
    I8: "empty",
    I9: "empty",
    J0: "empty",
    J1: "empty",
    J2: "empty",
    J3: "empty",
    J4: "empty",
    J5: "empty",
    J6: "empty",
    J7: "empty",
    J8: "empty",
    J9: "empty",
  });
});

it("creates 10 ships of specific sizes when creating new board", () => {
  const gameboard = GameBoard();
  expect(Object.keys(gameboard.ships).length).toBe(10);
});

it("place ship at specific coordinates by calling the ship factory function", () => {
  const gameboard = GameBoard();
  const ship = gameboard.ships.ship_0_length_4;
  gameboard.placeShipOnBoard(ship, "A1", "horizontal");
  expect(gameboard.board["A1"]).toBe(ship);
});

it("place ship at specific coordinates and spread along axis by its length", () => {
  const gameboard = GameBoard();
  const ship = gameboard.ships.ship_0_length_3;
  gameboard.placeShipOnBoard(ship, "A1", "horizontal");
  expect(gameboard.board["C1"]).toBe(ship);
  expect(gameboard.board["B1"]).toBe(ship);
});

it("place ship at specific coordinates and spread along vertical axis by its length", () => {
  const gameboard = GameBoard();
  const ship = gameboard.ships.ship_0_length_3;
  gameboard.placeShipOnBoard(ship, "B3", "vertical");
  expect(gameboard.board["B4"]).toBe(ship);
  expect(gameboard.board["B5"]).toBe(ship);
});

it("reject placing ship at coordinates if coordinates contains another ship", () => {
  const gameboard = GameBoard();
  const ship = gameboard.ships.ship_0_length_3;
  const ship2 = gameboard.ships.ship_1_length_3;
  gameboard.placeShipOnBoard(ship, "B3", "vertical");
  expect(gameboard.board["B4"]).toBe(ship);
  expect(gameboard.board["B5"]).toBe(ship);
  expect(gameboard.placeShipOnBoard(ship2, "B4", "vertical")).toBe(
    "These spots are not available"
  );
  expect(gameboard.placeShipOnBoard(ship2, "B4", "horizontal")).toBe(
    "These spots are not available"
  );
});

it("reject placing ship at coordinates if coordinates do not exist", () => {
  const gameboard = GameBoard();
  const ship = gameboard.ships.ship_0_length_3;
  expect(gameboard.placeShipOnBoard(ship, "P4", "horizontal")).toBe(
    "These spots are not available"
  );
  expect(gameboard.placeShipOnBoard(ship, "P4", "vertical")).toBe(
    "These spots are not available"
  );
});

it("places all ships randomly on board correctly", () => {
  const gameboard = GameBoard();
  gameboard.placeShipsRandomlyOnBoard();
});

it("receives attack and marks ship as hit if hit a ship", () => {
  const gameboard = GameBoard();
  const ship = gameboard.ships.ship_0_length_3;
  gameboard.placeShipOnBoard(ship, "B1", "vertical");
  gameboard.receiveAttack("B2");
  expect(gameboard.ships.ship_0_length_3.shipPositions[0]).toBe("hit");
});

it("receives attack and marks position as miss if empty", () => {
  const gameboard = GameBoard();
  const ship = gameboard.ships.ship_0_length_3;
  gameboard.placeShipOnBoard(ship, "B1", "vertical");
  gameboard.receiveAttack("D2");
  expect(gameboard.ships.ship_0_length_3.shipPositions[0]).toBe("not hit");
  expect(gameboard.board["D2"]).toBe("missed shot");
});

it("checks if all ships are not sunk", () => {
  const gameboard = GameBoard();
  const ship = gameboard.ships.ship_1_length_2;
  gameboard.placeShipOnBoard(ship, "C3", "horizontal");
  gameboard.receiveAttack("D3");
  expect(gameboard.checkIfAllShipsSunk()).toBeFalsy();
});

it("checks if all ships are not sunk higher sample", () => {
  const gameboard = GameBoard();
  const ship = gameboard.ships.ship_1_length_2;
  gameboard.placeShipsRandomlyOnBoard();
  for (let i = 0; i < Object.keys(gameboard.board).length / 2; i++) {
    const spot = Object.keys(gameboard.board)[i];
    gameboard.receiveAttack(spot);
  }
  expect(gameboard.checkIfAllShipsSunk()).toBeFalsy();
});

it("checks if all ships sunk", () => {
  const gameboard = GameBoard();
  const ship = gameboard.ships.ship_1_length_2;
  gameboard.placeShipsRandomlyOnBoard();
  Object.keys(gameboard.board).forEach((spot) => {
    gameboard.receiveAttack(spot);
  });
  expect(gameboard.checkIfAllShipsSunk()).toBeTruthy();
});
