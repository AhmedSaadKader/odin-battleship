import Ship from "../ship";

it("creates right amount of positions according to length given", () => {
  const ship = Ship(4);
  expect(ship.shipPositions).toStrictEqual({
    0: "not hit",
    1: "not hit",
    2: "not hit",
    3: "not hit",
  });
});

it("marks ship as hit", () => {
  const ship = Ship(3);
  ship.hit();
  expect(ship.shipPositions).toStrictEqual({
    0: "hit",
    1: "not hit",
    2: "not hit",
  });
});

it("marks ships positions as hit by order", () => {
  const ship = Ship(3);
  ship.hit();
  ship.hit();
  expect(ship.shipPositions).toStrictEqual({
    0: "hit",
    1: "hit",
    2: "not hit",
  });
});

it("sinks ship if all positions are hit", () => {
  const ship = Ship(1);
  ship.hit(0);
  expect(ship.isSunk()).toBeTruthy();
});

it("doesn't sink ships if one position or more are not hit", () => {
  const ship = Ship(2);
  ship.hit(0);
  expect(ship.isSunk()).toBeFalsy();
});
