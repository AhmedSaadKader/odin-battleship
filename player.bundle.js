"use strict";
(self["webpackChunkodin_battleship"] = self["webpackChunkodin_battleship"] || []).push([["player"],{

/***/ "./src/gameplay/gameboard.js":
/*!***********************************!*\
  !*** ./src/gameplay/gameboard.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GameBoard)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/gameplay/ship.js");


function GameBoard() {
  const VERTICAL_COORDINATES = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ];
  const HORIZONTAL_COORDINATES = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
  ];

  const board = {};

  function createBoard() {
    HORIZONTAL_COORDINATES.forEach((letter) => {
      for (let i = 0; i < VERTICAL_COORDINATES.length; i++) {
        let number = VERTICAL_COORDINATES[i];
        const key = letter + number;
        board[key] = "empty";
      }
    });
  }

  createBoard();

  const ships = {};
  let shipsPlacedOnBoardCount = 0;

  function createNewShip(length) {
    const ship = new _ship__WEBPACK_IMPORTED_MODULE_0__["default"](length);
    return ship;
  }

  function createAllShips() {
    for (let i = 0; i < 4; i++) {
      const ship = createNewShip(1);
      ships[`ship_${i}_length_1`] = ship;
    }
    for (let i = 0; i < 3; i++) {
      const ship = createNewShip(2);
      ships[`ship_${i}_length_2`] = ship;
    }
    for (let i = 0; i < 2; i++) {
      const ship = createNewShip(3);
      ships[`ship_${i}_length_3`] = ship;
    }
    const longestShip = createNewShip(4);
    ships[`ship_0_length_4`] = longestShip;
  }

  createAllShips();

  function chooseNextCoordinates(ship, startingCoordinates, direction) {
    let nextCoordinateList = [];
    if (direction === "horizontal") {
      const letterCode = startingCoordinates.charCodeAt(0);
      const number = startingCoordinates[1];
      for (let i = 0; i < ship.shipLength; i++) {
        const nextLetterCode = letterCode + i;
        const nextLetter = String.fromCharCode(nextLetterCode);
        const nextCoordinate = nextLetter + number;
        nextCoordinateList.push(nextCoordinate);
      }
      return nextCoordinateList;
    } else if (direction === "vertical") {
      const letter = startingCoordinates[0];
      const startingNumber = startingCoordinates[1];
      for (let i = 0; i < ship.shipLength; i++) {
        const nextNumber = parseInt(startingNumber) + i;
        const nextCoordinate = letter + nextNumber;
        nextCoordinateList.push(nextCoordinate);
      }
      return nextCoordinateList;
    }
  }

  function checkIfCoordinatesListIsAvailable(nextCoordinates) {
    for (let i = 0; i < nextCoordinates.length; i++) {
      let coordinate = nextCoordinates[i];
      if (
        board[coordinate] !== "empty" &&
        Object.keys(board).includes(coordinate)
      ) {
        return false;
      } else if (Object.keys(board).includes(coordinate) === false) {
        return false;
      }
    }
    return true;
  }

  function placeShipOnBoard(ship, startingCoordinates, direction) {
    if (shipsPlacedOnBoardCount === 10) {
      return false;
    }
    let nextCoordinates = chooseNextCoordinates(
      ship,
      startingCoordinates,
      direction
    );
    if (checkIfCoordinatesListIsAvailable(nextCoordinates) === true) {
      nextCoordinates.forEach((coordinate) => {
        board[coordinate] = ship;
        if (ship.shipCoordinates[0] === "empty") {
          ship.shipCoordinates[0] = coordinate;
        } else {
          ship.shipCoordinates.push(coordinate);
        }
      });
      shipsPlacedOnBoardCount += 1;

      return board;
    } else if (checkIfCoordinatesListIsAvailable(nextCoordinates) === false) {
      return false;
    }
  }

  function chooseRandomCoordinatesAndDirection() {
    const directions = ["vertical", "horizontal"];
    const boardKeys = Object.keys(board);
    const randomCoordinate =
      boardKeys[Math.floor(Math.random() * boardKeys.length)];
    const randomDirection =
      directions[Math.floor(Math.random() * directions.length)];
    return [randomCoordinate, randomDirection];
  }

  function placeShipsRandomlyOnBoard() {
    if (shipsPlacedOnBoardCount === 10) {
      return false;
    }
    const shipsList = Object.values(ships);
    for (let i = 0; i < shipsList.length; i++) {
      const ship = shipsList[i];
      let random = chooseRandomCoordinatesAndDirection();
      let nextCoordinates = chooseNextCoordinates(ship, random[0], random[1]);
      while (checkIfCoordinatesListIsAvailable(nextCoordinates) === false) {
        random = chooseRandomCoordinatesAndDirection();
        nextCoordinates = chooseNextCoordinates(ship, random[0], random[1]);
      }
      placeShipOnBoard(ship, random[0], random[1]);
    }
  }

  function receiveAttack(coordinate) {
    if (board[coordinate] !== "empty" && board[coordinate] !== "missed shot") {
      const ship = board[coordinate];
      ship.hit();
    } else if (board[coordinate] == "empty") {
      board[coordinate] = "missed shot";
    }
  }

  const checkIfAllShipsSunk = function () {
    const shipsObjects = Object.values(ships);
    const shipPositionsStatus = [];
    shipsObjects.forEach((object) => {
      const status = Object.values(object.shipPositions);
      status.forEach((item) => {
        shipPositionsStatus.push(item);
      });
    });
    for (let i = 0; i < shipPositionsStatus.length; i++) {
      const position = shipPositionsStatus[i];
      if (position === "not hit") {
        return false;
      }
    }
    return true;
  };

  return {
    board,
    ships,
    placeShipOnBoard,
    placeShipsRandomlyOnBoard,
    receiveAttack,
    checkIfAllShipsSunk,
  };
}


/***/ }),

/***/ "./src/gameplay/player.js":
/*!********************************!*\
  !*** ./src/gameplay/player.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/gameplay/gameboard.js");


function Player(typeParam) {
  const type = typeParam;
  const gameboard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])();

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

  return { type, gameboard, attack, makeRandomMove, attackedSpots };
}


/***/ }),

/***/ "./src/gameplay/ship.js":
/*!******************************!*\
  !*** ./src/gameplay/ship.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
function Ship(length) {
  const shipLength = length;
  const shipPositions = {};
  let shipCoordinates = ["empty"];

  function createShipPositions(shipLength) {
    for (let i = 0; i < shipLength; i++) {
      shipPositions[i] = "not hit";
    }
    return shipPositions;
  }

  createShipPositions(length);

  function hit() {
    for (const position of Object.keys(shipPositions)) {
      if (shipPositions[position] == "not hit") {
        shipPositions[position] = "hit";
        break;
      }
    }
  }

  const isSunk = function () {
    const positionValues = Object.values(shipPositions);
    if (positionValues.includes("not hit")) {
      return false;
    }
    return true;
  };

  return {
    shipLength,
    shipPositions,
    shipCoordinates,
    hit,
    isSunk,
  };
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/gameplay/player.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVyLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUMxQjtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQ0FBaUM7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2Q0FBSTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0Esb0JBQW9CLEVBQUU7QUFDdEI7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBLG9CQUFvQixFQUFFO0FBQ3RCO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQSxvQkFBb0IsRUFBRTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IscUJBQXFCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0Esc0JBQXNCLHFCQUFxQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHNCQUFzQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0wsb0JBQW9CLGdDQUFnQztBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDcE1vQztBQUNwQztBQUNlO0FBQ2Y7QUFDQSxvQkFBb0Isc0RBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7Ozs7Ozs7Ozs7Ozs7OztBQzVCZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsZ0JBQWdCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvZ2FtZXBsYXkvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9nYW1lcGxheS9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2dhbWVwbGF5L3NoaXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNoaXAgZnJvbSBcIi4vc2hpcFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2FtZUJvYXJkKCkge1xyXG4gIGNvbnN0IFZFUlRJQ0FMX0NPT1JESU5BVEVTID0gW1xyXG4gICAgXCIwXCIsXHJcbiAgICBcIjFcIixcclxuICAgIFwiMlwiLFxyXG4gICAgXCIzXCIsXHJcbiAgICBcIjRcIixcclxuICAgIFwiNVwiLFxyXG4gICAgXCI2XCIsXHJcbiAgICBcIjdcIixcclxuICAgIFwiOFwiLFxyXG4gICAgXCI5XCIsXHJcbiAgXTtcclxuICBjb25zdCBIT1JJWk9OVEFMX0NPT1JESU5BVEVTID0gW1xyXG4gICAgXCJBXCIsXHJcbiAgICBcIkJcIixcclxuICAgIFwiQ1wiLFxyXG4gICAgXCJEXCIsXHJcbiAgICBcIkVcIixcclxuICAgIFwiRlwiLFxyXG4gICAgXCJHXCIsXHJcbiAgICBcIkhcIixcclxuICAgIFwiSVwiLFxyXG4gICAgXCJKXCIsXHJcbiAgXTtcclxuXHJcbiAgY29uc3QgYm9hcmQgPSB7fTtcclxuXHJcbiAgZnVuY3Rpb24gY3JlYXRlQm9hcmQoKSB7XHJcbiAgICBIT1JJWk9OVEFMX0NPT1JESU5BVEVTLmZvckVhY2goKGxldHRlcikgPT4ge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IFZFUlRJQ0FMX0NPT1JESU5BVEVTLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IG51bWJlciA9IFZFUlRJQ0FMX0NPT1JESU5BVEVTW2ldO1xyXG4gICAgICAgIGNvbnN0IGtleSA9IGxldHRlciArIG51bWJlcjtcclxuICAgICAgICBib2FyZFtrZXldID0gXCJlbXB0eVwiO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUJvYXJkKCk7XHJcblxyXG4gIGNvbnN0IHNoaXBzID0ge307XHJcbiAgbGV0IHNoaXBzUGxhY2VkT25Cb2FyZENvdW50ID0gMDtcclxuXHJcbiAgZnVuY3Rpb24gY3JlYXRlTmV3U2hpcChsZW5ndGgpIHtcclxuICAgIGNvbnN0IHNoaXAgPSBuZXcgU2hpcChsZW5ndGgpO1xyXG4gICAgcmV0dXJuIHNoaXA7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjcmVhdGVBbGxTaGlwcygpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHNoaXAgPSBjcmVhdGVOZXdTaGlwKDEpO1xyXG4gICAgICBzaGlwc1tgc2hpcF8ke2l9X2xlbmd0aF8xYF0gPSBzaGlwO1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcclxuICAgICAgY29uc3Qgc2hpcCA9IGNyZWF0ZU5ld1NoaXAoMik7XHJcbiAgICAgIHNoaXBzW2BzaGlwXyR7aX1fbGVuZ3RoXzJgXSA9IHNoaXA7XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI7IGkrKykge1xyXG4gICAgICBjb25zdCBzaGlwID0gY3JlYXRlTmV3U2hpcCgzKTtcclxuICAgICAgc2hpcHNbYHNoaXBfJHtpfV9sZW5ndGhfM2BdID0gc2hpcDtcclxuICAgIH1cclxuICAgIGNvbnN0IGxvbmdlc3RTaGlwID0gY3JlYXRlTmV3U2hpcCg0KTtcclxuICAgIHNoaXBzW2BzaGlwXzBfbGVuZ3RoXzRgXSA9IGxvbmdlc3RTaGlwO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlQWxsU2hpcHMoKTtcclxuXHJcbiAgZnVuY3Rpb24gY2hvb3NlTmV4dENvb3JkaW5hdGVzKHNoaXAsIHN0YXJ0aW5nQ29vcmRpbmF0ZXMsIGRpcmVjdGlvbikge1xyXG4gICAgbGV0IG5leHRDb29yZGluYXRlTGlzdCA9IFtdO1xyXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpIHtcclxuICAgICAgY29uc3QgbGV0dGVyQ29kZSA9IHN0YXJ0aW5nQ29vcmRpbmF0ZXMuY2hhckNvZGVBdCgwKTtcclxuICAgICAgY29uc3QgbnVtYmVyID0gc3RhcnRpbmdDb29yZGluYXRlc1sxXTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLnNoaXBMZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IG5leHRMZXR0ZXJDb2RlID0gbGV0dGVyQ29kZSArIGk7XHJcbiAgICAgICAgY29uc3QgbmV4dExldHRlciA9IFN0cmluZy5mcm9tQ2hhckNvZGUobmV4dExldHRlckNvZGUpO1xyXG4gICAgICAgIGNvbnN0IG5leHRDb29yZGluYXRlID0gbmV4dExldHRlciArIG51bWJlcjtcclxuICAgICAgICBuZXh0Q29vcmRpbmF0ZUxpc3QucHVzaChuZXh0Q29vcmRpbmF0ZSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG5leHRDb29yZGluYXRlTGlzdDtcclxuICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSBcInZlcnRpY2FsXCIpIHtcclxuICAgICAgY29uc3QgbGV0dGVyID0gc3RhcnRpbmdDb29yZGluYXRlc1swXTtcclxuICAgICAgY29uc3Qgc3RhcnRpbmdOdW1iZXIgPSBzdGFydGluZ0Nvb3JkaW5hdGVzWzFdO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAuc2hpcExlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgbmV4dE51bWJlciA9IHBhcnNlSW50KHN0YXJ0aW5nTnVtYmVyKSArIGk7XHJcbiAgICAgICAgY29uc3QgbmV4dENvb3JkaW5hdGUgPSBsZXR0ZXIgKyBuZXh0TnVtYmVyO1xyXG4gICAgICAgIG5leHRDb29yZGluYXRlTGlzdC5wdXNoKG5leHRDb29yZGluYXRlKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbmV4dENvb3JkaW5hdGVMaXN0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2hlY2tJZkNvb3JkaW5hdGVzTGlzdElzQXZhaWxhYmxlKG5leHRDb29yZGluYXRlcykge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXh0Q29vcmRpbmF0ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgbGV0IGNvb3JkaW5hdGUgPSBuZXh0Q29vcmRpbmF0ZXNbaV07XHJcbiAgICAgIGlmIChcclxuICAgICAgICBib2FyZFtjb29yZGluYXRlXSAhPT0gXCJlbXB0eVwiICYmXHJcbiAgICAgICAgT2JqZWN0LmtleXMoYm9hcmQpLmluY2x1ZGVzKGNvb3JkaW5hdGUpXHJcbiAgICAgICkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfSBlbHNlIGlmIChPYmplY3Qua2V5cyhib2FyZCkuaW5jbHVkZXMoY29vcmRpbmF0ZSkgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHBsYWNlU2hpcE9uQm9hcmQoc2hpcCwgc3RhcnRpbmdDb29yZGluYXRlcywgZGlyZWN0aW9uKSB7XHJcbiAgICBpZiAoc2hpcHNQbGFjZWRPbkJvYXJkQ291bnQgPT09IDEwKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGxldCBuZXh0Q29vcmRpbmF0ZXMgPSBjaG9vc2VOZXh0Q29vcmRpbmF0ZXMoXHJcbiAgICAgIHNoaXAsXHJcbiAgICAgIHN0YXJ0aW5nQ29vcmRpbmF0ZXMsXHJcbiAgICAgIGRpcmVjdGlvblxyXG4gICAgKTtcclxuICAgIGlmIChjaGVja0lmQ29vcmRpbmF0ZXNMaXN0SXNBdmFpbGFibGUobmV4dENvb3JkaW5hdGVzKSA9PT0gdHJ1ZSkge1xyXG4gICAgICBuZXh0Q29vcmRpbmF0ZXMuZm9yRWFjaCgoY29vcmRpbmF0ZSkgPT4ge1xyXG4gICAgICAgIGJvYXJkW2Nvb3JkaW5hdGVdID0gc2hpcDtcclxuICAgICAgICBpZiAoc2hpcC5zaGlwQ29vcmRpbmF0ZXNbMF0gPT09IFwiZW1wdHlcIikge1xyXG4gICAgICAgICAgc2hpcC5zaGlwQ29vcmRpbmF0ZXNbMF0gPSBjb29yZGluYXRlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzaGlwLnNoaXBDb29yZGluYXRlcy5wdXNoKGNvb3JkaW5hdGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHNoaXBzUGxhY2VkT25Cb2FyZENvdW50ICs9IDE7XHJcblxyXG4gICAgICByZXR1cm4gYm9hcmQ7XHJcbiAgICB9IGVsc2UgaWYgKGNoZWNrSWZDb29yZGluYXRlc0xpc3RJc0F2YWlsYWJsZShuZXh0Q29vcmRpbmF0ZXMpID09PSBmYWxzZSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjaG9vc2VSYW5kb21Db29yZGluYXRlc0FuZERpcmVjdGlvbigpIHtcclxuICAgIGNvbnN0IGRpcmVjdGlvbnMgPSBbXCJ2ZXJ0aWNhbFwiLCBcImhvcml6b250YWxcIl07XHJcbiAgICBjb25zdCBib2FyZEtleXMgPSBPYmplY3Qua2V5cyhib2FyZCk7XHJcbiAgICBjb25zdCByYW5kb21Db29yZGluYXRlID1cclxuICAgICAgYm9hcmRLZXlzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGJvYXJkS2V5cy5sZW5ndGgpXTtcclxuICAgIGNvbnN0IHJhbmRvbURpcmVjdGlvbiA9XHJcbiAgICAgIGRpcmVjdGlvbnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZGlyZWN0aW9ucy5sZW5ndGgpXTtcclxuICAgIHJldHVybiBbcmFuZG9tQ29vcmRpbmF0ZSwgcmFuZG9tRGlyZWN0aW9uXTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHBsYWNlU2hpcHNSYW5kb21seU9uQm9hcmQoKSB7XHJcbiAgICBpZiAoc2hpcHNQbGFjZWRPbkJvYXJkQ291bnQgPT09IDEwKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGNvbnN0IHNoaXBzTGlzdCA9IE9iamVjdC52YWx1ZXMoc2hpcHMpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwc0xpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3Qgc2hpcCA9IHNoaXBzTGlzdFtpXTtcclxuICAgICAgbGV0IHJhbmRvbSA9IGNob29zZVJhbmRvbUNvb3JkaW5hdGVzQW5kRGlyZWN0aW9uKCk7XHJcbiAgICAgIGxldCBuZXh0Q29vcmRpbmF0ZXMgPSBjaG9vc2VOZXh0Q29vcmRpbmF0ZXMoc2hpcCwgcmFuZG9tWzBdLCByYW5kb21bMV0pO1xyXG4gICAgICB3aGlsZSAoY2hlY2tJZkNvb3JkaW5hdGVzTGlzdElzQXZhaWxhYmxlKG5leHRDb29yZGluYXRlcykgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgcmFuZG9tID0gY2hvb3NlUmFuZG9tQ29vcmRpbmF0ZXNBbmREaXJlY3Rpb24oKTtcclxuICAgICAgICBuZXh0Q29vcmRpbmF0ZXMgPSBjaG9vc2VOZXh0Q29vcmRpbmF0ZXMoc2hpcCwgcmFuZG9tWzBdLCByYW5kb21bMV0pO1xyXG4gICAgICB9XHJcbiAgICAgIHBsYWNlU2hpcE9uQm9hcmQoc2hpcCwgcmFuZG9tWzBdLCByYW5kb21bMV0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVjZWl2ZUF0dGFjayhjb29yZGluYXRlKSB7XHJcbiAgICBpZiAoYm9hcmRbY29vcmRpbmF0ZV0gIT09IFwiZW1wdHlcIiAmJiBib2FyZFtjb29yZGluYXRlXSAhPT0gXCJtaXNzZWQgc2hvdFwiKSB7XHJcbiAgICAgIGNvbnN0IHNoaXAgPSBib2FyZFtjb29yZGluYXRlXTtcclxuICAgICAgc2hpcC5oaXQoKTtcclxuICAgIH0gZWxzZSBpZiAoYm9hcmRbY29vcmRpbmF0ZV0gPT0gXCJlbXB0eVwiKSB7XHJcbiAgICAgIGJvYXJkW2Nvb3JkaW5hdGVdID0gXCJtaXNzZWQgc2hvdFwiO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgY2hlY2tJZkFsbFNoaXBzU3VuayA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IHNoaXBzT2JqZWN0cyA9IE9iamVjdC52YWx1ZXMoc2hpcHMpO1xyXG4gICAgY29uc3Qgc2hpcFBvc2l0aW9uc1N0YXR1cyA9IFtdO1xyXG4gICAgc2hpcHNPYmplY3RzLmZvckVhY2goKG9iamVjdCkgPT4ge1xyXG4gICAgICBjb25zdCBzdGF0dXMgPSBPYmplY3QudmFsdWVzKG9iamVjdC5zaGlwUG9zaXRpb25zKTtcclxuICAgICAgc3RhdHVzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBzaGlwUG9zaXRpb25zU3RhdHVzLnB1c2goaXRlbSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBQb3NpdGlvbnNTdGF0dXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgcG9zaXRpb24gPSBzaGlwUG9zaXRpb25zU3RhdHVzW2ldO1xyXG4gICAgICBpZiAocG9zaXRpb24gPT09IFwibm90IGhpdFwiKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9O1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgYm9hcmQsXHJcbiAgICBzaGlwcyxcclxuICAgIHBsYWNlU2hpcE9uQm9hcmQsXHJcbiAgICBwbGFjZVNoaXBzUmFuZG9tbHlPbkJvYXJkLFxyXG4gICAgcmVjZWl2ZUF0dGFjayxcclxuICAgIGNoZWNrSWZBbGxTaGlwc1N1bmssXHJcbiAgfTtcclxufVxyXG4iLCJpbXBvcnQgR2FtZUJvYXJkIGZyb20gXCIuL2dhbWVib2FyZFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGxheWVyKHR5cGVQYXJhbSkge1xyXG4gIGNvbnN0IHR5cGUgPSB0eXBlUGFyYW07XHJcbiAgY29uc3QgZ2FtZWJvYXJkID0gR2FtZUJvYXJkKCk7XHJcblxyXG4gIGNvbnN0IGF0dGFja2VkU3BvdHMgPSBbXTtcclxuXHJcbiAgY29uc3QgYXR0YWNrID0gZnVuY3Rpb24gKGNvb3JkaW5hdGUsIG9wcG9uZW50Qm9hcmQpIHtcclxuICAgIGlmIChhdHRhY2tlZFNwb3RzLmluY2x1ZGVzKGNvb3JkaW5hdGUpKSB7XHJcbiAgICAgIHJldHVybiBcIkNhbm5vdCBhdHRhY2sgc2FtZSBsb2NhdGlvbiB0d2ljZVwiO1xyXG4gICAgfVxyXG4gICAgb3Bwb25lbnRCb2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGUpO1xyXG4gICAgYXR0YWNrZWRTcG90cy5wdXNoKGNvb3JkaW5hdGUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG1ha2VSYW5kb21Nb3ZlID0gZnVuY3Rpb24gKG9wcG9uZW50Qm9hcmQpIHtcclxuICAgIGNvbnN0IGJvYXJkS2V5cyA9IE9iamVjdC5rZXlzKG9wcG9uZW50Qm9hcmQuYm9hcmQpO1xyXG4gICAgbGV0IHJhbmRvbUNvb3JkaW5hdGUgPVxyXG4gICAgICBib2FyZEtleXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYm9hcmRLZXlzLmxlbmd0aCldO1xyXG4gICAgd2hpbGUgKGF0dGFja2VkU3BvdHMuaW5jbHVkZXMocmFuZG9tQ29vcmRpbmF0ZSkpIHtcclxuICAgICAgcmFuZG9tQ29vcmRpbmF0ZSA9XHJcbiAgICAgICAgYm9hcmRLZXlzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGJvYXJkS2V5cy5sZW5ndGgpXTtcclxuICAgIH1cclxuICAgIGF0dGFjayhyYW5kb21Db29yZGluYXRlLCBvcHBvbmVudEJvYXJkKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4geyB0eXBlLCBnYW1lYm9hcmQsIGF0dGFjaywgbWFrZVJhbmRvbU1vdmUsIGF0dGFja2VkU3BvdHMgfTtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaGlwKGxlbmd0aCkge1xyXG4gIGNvbnN0IHNoaXBMZW5ndGggPSBsZW5ndGg7XHJcbiAgY29uc3Qgc2hpcFBvc2l0aW9ucyA9IHt9O1xyXG4gIGxldCBzaGlwQ29vcmRpbmF0ZXMgPSBbXCJlbXB0eVwiXTtcclxuXHJcbiAgZnVuY3Rpb24gY3JlYXRlU2hpcFBvc2l0aW9ucyhzaGlwTGVuZ3RoKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkrKykge1xyXG4gICAgICBzaGlwUG9zaXRpb25zW2ldID0gXCJub3QgaGl0XCI7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc2hpcFBvc2l0aW9ucztcclxuICB9XHJcblxyXG4gIGNyZWF0ZVNoaXBQb3NpdGlvbnMobGVuZ3RoKTtcclxuXHJcbiAgZnVuY3Rpb24gaGl0KCkge1xyXG4gICAgZm9yIChjb25zdCBwb3NpdGlvbiBvZiBPYmplY3Qua2V5cyhzaGlwUG9zaXRpb25zKSkge1xyXG4gICAgICBpZiAoc2hpcFBvc2l0aW9uc1twb3NpdGlvbl0gPT0gXCJub3QgaGl0XCIpIHtcclxuICAgICAgICBzaGlwUG9zaXRpb25zW3Bvc2l0aW9uXSA9IFwiaGl0XCI7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGlzU3VuayA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IHBvc2l0aW9uVmFsdWVzID0gT2JqZWN0LnZhbHVlcyhzaGlwUG9zaXRpb25zKTtcclxuICAgIGlmIChwb3NpdGlvblZhbHVlcy5pbmNsdWRlcyhcIm5vdCBoaXRcIikpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHNoaXBMZW5ndGgsXHJcbiAgICBzaGlwUG9zaXRpb25zLFxyXG4gICAgc2hpcENvb3JkaW5hdGVzLFxyXG4gICAgaGl0LFxyXG4gICAgaXNTdW5rLFxyXG4gIH07XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9