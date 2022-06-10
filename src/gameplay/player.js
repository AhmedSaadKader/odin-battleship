import GameBoard from "./gameboard";

export default function Player(name, type, gameboard) {
  const name = name;
  const type = type;

  return { name, type };
}
