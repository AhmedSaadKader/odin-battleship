"use strict";
(self["webpackChunkodin_battleship"] = self["webpackChunkodin_battleship"] || []).push([["mainGame"],{

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

/***/ "./src/gameplay/main-game.js":
/*!***********************************!*\
  !*** ./src/gameplay/main-game.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ mainGame)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/gameplay/player.js");


function mainGame() {
  const humanPlayer = (0,_player__WEBPACK_IMPORTED_MODULE_0__["default"])("Human");
  const AIPlayer = (0,_player__WEBPACK_IMPORTED_MODULE_0__["default"])("AI");
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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/gameplay/main-game.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9nYW1lcGxheS9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2dhbWVwbGF5L21haW4tZ2FtZS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvZ2FtZXBsYXkvcGxheWVyLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9nYW1lcGxheS9zaGlwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTaGlwIGZyb20gXCIuL3NoaXBcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdhbWVCb2FyZCgpIHtcclxuICBjb25zdCBWRVJUSUNBTF9DT09SRElOQVRFUyA9IFtcclxuICAgIFwiMFwiLFxyXG4gICAgXCIxXCIsXHJcbiAgICBcIjJcIixcclxuICAgIFwiM1wiLFxyXG4gICAgXCI0XCIsXHJcbiAgICBcIjVcIixcclxuICAgIFwiNlwiLFxyXG4gICAgXCI3XCIsXHJcbiAgICBcIjhcIixcclxuICAgIFwiOVwiLFxyXG4gIF07XHJcbiAgY29uc3QgSE9SSVpPTlRBTF9DT09SRElOQVRFUyA9IFtcclxuICAgIFwiQVwiLFxyXG4gICAgXCJCXCIsXHJcbiAgICBcIkNcIixcclxuICAgIFwiRFwiLFxyXG4gICAgXCJFXCIsXHJcbiAgICBcIkZcIixcclxuICAgIFwiR1wiLFxyXG4gICAgXCJIXCIsXHJcbiAgICBcIklcIixcclxuICAgIFwiSlwiLFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IGJvYXJkID0ge307XHJcblxyXG4gIGZ1bmN0aW9uIGNyZWF0ZUJvYXJkKCkge1xyXG4gICAgSE9SSVpPTlRBTF9DT09SRElOQVRFUy5mb3JFYWNoKChsZXR0ZXIpID0+IHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBWRVJUSUNBTF9DT09SRElOQVRFUy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCBudW1iZXIgPSBWRVJUSUNBTF9DT09SRElOQVRFU1tpXTtcclxuICAgICAgICBjb25zdCBrZXkgPSBsZXR0ZXIgKyBudW1iZXI7XHJcbiAgICAgICAgYm9hcmRba2V5XSA9IFwiZW1wdHlcIjtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVCb2FyZCgpO1xyXG5cclxuICBjb25zdCBzaGlwcyA9IHt9O1xyXG4gIGxldCBzaGlwc1BsYWNlZE9uQm9hcmRDb3VudCA9IDA7XHJcblxyXG4gIGZ1bmN0aW9uIGNyZWF0ZU5ld1NoaXAobGVuZ3RoKSB7XHJcbiAgICBjb25zdCBzaGlwID0gbmV3IFNoaXAobGVuZ3RoKTtcclxuICAgIHJldHVybiBzaGlwO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY3JlYXRlQWxsU2hpcHMoKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xyXG4gICAgICBjb25zdCBzaGlwID0gY3JlYXRlTmV3U2hpcCgxKTtcclxuICAgICAgc2hpcHNbYHNoaXBfJHtpfV9sZW5ndGhfMWBdID0gc2hpcDtcclxuICAgIH1cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHNoaXAgPSBjcmVhdGVOZXdTaGlwKDIpO1xyXG4gICAgICBzaGlwc1tgc2hpcF8ke2l9X2xlbmd0aF8yYF0gPSBzaGlwO1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcclxuICAgICAgY29uc3Qgc2hpcCA9IGNyZWF0ZU5ld1NoaXAoMyk7XHJcbiAgICAgIHNoaXBzW2BzaGlwXyR7aX1fbGVuZ3RoXzNgXSA9IHNoaXA7XHJcbiAgICB9XHJcbiAgICBjb25zdCBsb25nZXN0U2hpcCA9IGNyZWF0ZU5ld1NoaXAoNCk7XHJcbiAgICBzaGlwc1tgc2hpcF8wX2xlbmd0aF80YF0gPSBsb25nZXN0U2hpcDtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUFsbFNoaXBzKCk7XHJcblxyXG4gIGZ1bmN0aW9uIGNob29zZU5leHRDb29yZGluYXRlcyhzaGlwLCBzdGFydGluZ0Nvb3JkaW5hdGVzLCBkaXJlY3Rpb24pIHtcclxuICAgIGxldCBuZXh0Q29vcmRpbmF0ZUxpc3QgPSBbXTtcclxuICAgIGlmIChkaXJlY3Rpb24gPT09IFwiaG9yaXpvbnRhbFwiKSB7XHJcbiAgICAgIGNvbnN0IGxldHRlckNvZGUgPSBzdGFydGluZ0Nvb3JkaW5hdGVzLmNoYXJDb2RlQXQoMCk7XHJcbiAgICAgIGNvbnN0IG51bWJlciA9IHN0YXJ0aW5nQ29vcmRpbmF0ZXNbMV07XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5zaGlwTGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBuZXh0TGV0dGVyQ29kZSA9IGxldHRlckNvZGUgKyBpO1xyXG4gICAgICAgIGNvbnN0IG5leHRMZXR0ZXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKG5leHRMZXR0ZXJDb2RlKTtcclxuICAgICAgICBjb25zdCBuZXh0Q29vcmRpbmF0ZSA9IG5leHRMZXR0ZXIgKyBudW1iZXI7XHJcbiAgICAgICAgbmV4dENvb3JkaW5hdGVMaXN0LnB1c2gobmV4dENvb3JkaW5hdGUpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBuZXh0Q29vcmRpbmF0ZUxpc3Q7XHJcbiAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XHJcbiAgICAgIGNvbnN0IGxldHRlciA9IHN0YXJ0aW5nQ29vcmRpbmF0ZXNbMF07XHJcbiAgICAgIGNvbnN0IHN0YXJ0aW5nTnVtYmVyID0gc3RhcnRpbmdDb29yZGluYXRlc1sxXTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLnNoaXBMZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IG5leHROdW1iZXIgPSBwYXJzZUludChzdGFydGluZ051bWJlcikgKyBpO1xyXG4gICAgICAgIGNvbnN0IG5leHRDb29yZGluYXRlID0gbGV0dGVyICsgbmV4dE51bWJlcjtcclxuICAgICAgICBuZXh0Q29vcmRpbmF0ZUxpc3QucHVzaChuZXh0Q29vcmRpbmF0ZSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG5leHRDb29yZGluYXRlTGlzdDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNoZWNrSWZDb29yZGluYXRlc0xpc3RJc0F2YWlsYWJsZShuZXh0Q29vcmRpbmF0ZXMpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmV4dENvb3JkaW5hdGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGxldCBjb29yZGluYXRlID0gbmV4dENvb3JkaW5hdGVzW2ldO1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgYm9hcmRbY29vcmRpbmF0ZV0gIT09IFwiZW1wdHlcIiAmJlxyXG4gICAgICAgIE9iamVjdC5rZXlzKGJvYXJkKS5pbmNsdWRlcyhjb29yZGluYXRlKVxyXG4gICAgICApIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH0gZWxzZSBpZiAoT2JqZWN0LmtleXMoYm9hcmQpLmluY2x1ZGVzKGNvb3JkaW5hdGUpID09PSBmYWxzZSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBwbGFjZVNoaXBPbkJvYXJkKHNoaXAsIHN0YXJ0aW5nQ29vcmRpbmF0ZXMsIGRpcmVjdGlvbikge1xyXG4gICAgaWYgKHNoaXBzUGxhY2VkT25Cb2FyZENvdW50ID09PSAxMCkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBsZXQgbmV4dENvb3JkaW5hdGVzID0gY2hvb3NlTmV4dENvb3JkaW5hdGVzKFxyXG4gICAgICBzaGlwLFxyXG4gICAgICBzdGFydGluZ0Nvb3JkaW5hdGVzLFxyXG4gICAgICBkaXJlY3Rpb25cclxuICAgICk7XHJcbiAgICBpZiAoY2hlY2tJZkNvb3JkaW5hdGVzTGlzdElzQXZhaWxhYmxlKG5leHRDb29yZGluYXRlcykgPT09IHRydWUpIHtcclxuICAgICAgbmV4dENvb3JkaW5hdGVzLmZvckVhY2goKGNvb3JkaW5hdGUpID0+IHtcclxuICAgICAgICBib2FyZFtjb29yZGluYXRlXSA9IHNoaXA7XHJcbiAgICAgICAgaWYgKHNoaXAuc2hpcENvb3JkaW5hdGVzWzBdID09PSBcImVtcHR5XCIpIHtcclxuICAgICAgICAgIHNoaXAuc2hpcENvb3JkaW5hdGVzWzBdID0gY29vcmRpbmF0ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc2hpcC5zaGlwQ29vcmRpbmF0ZXMucHVzaChjb29yZGluYXRlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBzaGlwc1BsYWNlZE9uQm9hcmRDb3VudCArPSAxO1xyXG5cclxuICAgICAgcmV0dXJuIGJvYXJkO1xyXG4gICAgfSBlbHNlIGlmIChjaGVja0lmQ29vcmRpbmF0ZXNMaXN0SXNBdmFpbGFibGUobmV4dENvb3JkaW5hdGVzKSA9PT0gZmFsc2UpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2hvb3NlUmFuZG9tQ29vcmRpbmF0ZXNBbmREaXJlY3Rpb24oKSB7XHJcbiAgICBjb25zdCBkaXJlY3Rpb25zID0gW1widmVydGljYWxcIiwgXCJob3Jpem9udGFsXCJdO1xyXG4gICAgY29uc3QgYm9hcmRLZXlzID0gT2JqZWN0LmtleXMoYm9hcmQpO1xyXG4gICAgY29uc3QgcmFuZG9tQ29vcmRpbmF0ZSA9XHJcbiAgICAgIGJvYXJkS2V5c1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBib2FyZEtleXMubGVuZ3RoKV07XHJcbiAgICBjb25zdCByYW5kb21EaXJlY3Rpb24gPVxyXG4gICAgICBkaXJlY3Rpb25zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGRpcmVjdGlvbnMubGVuZ3RoKV07XHJcbiAgICByZXR1cm4gW3JhbmRvbUNvb3JkaW5hdGUsIHJhbmRvbURpcmVjdGlvbl07XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBwbGFjZVNoaXBzUmFuZG9tbHlPbkJvYXJkKCkge1xyXG4gICAgaWYgKHNoaXBzUGxhY2VkT25Cb2FyZENvdW50ID09PSAxMCkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBjb25zdCBzaGlwc0xpc3QgPSBPYmplY3QudmFsdWVzKHNoaXBzKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcHNMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHNoaXAgPSBzaGlwc0xpc3RbaV07XHJcbiAgICAgIGxldCByYW5kb20gPSBjaG9vc2VSYW5kb21Db29yZGluYXRlc0FuZERpcmVjdGlvbigpO1xyXG4gICAgICBsZXQgbmV4dENvb3JkaW5hdGVzID0gY2hvb3NlTmV4dENvb3JkaW5hdGVzKHNoaXAsIHJhbmRvbVswXSwgcmFuZG9tWzFdKTtcclxuICAgICAgd2hpbGUgKGNoZWNrSWZDb29yZGluYXRlc0xpc3RJc0F2YWlsYWJsZShuZXh0Q29vcmRpbmF0ZXMpID09PSBmYWxzZSkge1xyXG4gICAgICAgIHJhbmRvbSA9IGNob29zZVJhbmRvbUNvb3JkaW5hdGVzQW5kRGlyZWN0aW9uKCk7XHJcbiAgICAgICAgbmV4dENvb3JkaW5hdGVzID0gY2hvb3NlTmV4dENvb3JkaW5hdGVzKHNoaXAsIHJhbmRvbVswXSwgcmFuZG9tWzFdKTtcclxuICAgICAgfVxyXG4gICAgICBwbGFjZVNoaXBPbkJvYXJkKHNoaXAsIHJhbmRvbVswXSwgcmFuZG9tWzFdKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZSkge1xyXG4gICAgaWYgKGJvYXJkW2Nvb3JkaW5hdGVdICE9PSBcImVtcHR5XCIgJiYgYm9hcmRbY29vcmRpbmF0ZV0gIT09IFwibWlzc2VkIHNob3RcIikge1xyXG4gICAgICBjb25zdCBzaGlwID0gYm9hcmRbY29vcmRpbmF0ZV07XHJcbiAgICAgIHNoaXAuaGl0KCk7XHJcbiAgICB9IGVsc2UgaWYgKGJvYXJkW2Nvb3JkaW5hdGVdID09IFwiZW1wdHlcIikge1xyXG4gICAgICBib2FyZFtjb29yZGluYXRlXSA9IFwibWlzc2VkIHNob3RcIjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGNoZWNrSWZBbGxTaGlwc1N1bmsgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBzaGlwc09iamVjdHMgPSBPYmplY3QudmFsdWVzKHNoaXBzKTtcclxuICAgIGNvbnN0IHNoaXBQb3NpdGlvbnNTdGF0dXMgPSBbXTtcclxuICAgIHNoaXBzT2JqZWN0cy5mb3JFYWNoKChvYmplY3QpID0+IHtcclxuICAgICAgY29uc3Qgc3RhdHVzID0gT2JqZWN0LnZhbHVlcyhvYmplY3Quc2hpcFBvc2l0aW9ucyk7XHJcbiAgICAgIHN0YXR1cy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgc2hpcFBvc2l0aW9uc1N0YXR1cy5wdXNoKGl0ZW0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwUG9zaXRpb25zU3RhdHVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHBvc2l0aW9uID0gc2hpcFBvc2l0aW9uc1N0YXR1c1tpXTtcclxuICAgICAgaWYgKHBvc2l0aW9uID09PSBcIm5vdCBoaXRcIikge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGJvYXJkLFxyXG4gICAgc2hpcHMsXHJcbiAgICBwbGFjZVNoaXBPbkJvYXJkLFxyXG4gICAgcGxhY2VTaGlwc1JhbmRvbWx5T25Cb2FyZCxcclxuICAgIHJlY2VpdmVBdHRhY2ssXHJcbiAgICBjaGVja0lmQWxsU2hpcHNTdW5rLFxyXG4gIH07XHJcbn1cclxuIiwiaW1wb3J0IFBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1haW5HYW1lKCkge1xyXG4gIGNvbnN0IGh1bWFuUGxheWVyID0gUGxheWVyKFwiSHVtYW5cIik7XHJcbiAgY29uc3QgQUlQbGF5ZXIgPSBQbGF5ZXIoXCJBSVwiKTtcclxuICBsZXQgdHVybiA9IFwiSHVtYW5cIjtcclxuXHJcbiAgZnVuY3Rpb24gZW5kVHVybigpIHtcclxuICAgIGlmICh0dXJuID09PSBcIkh1bWFuXCIpIHtcclxuICAgICAgdHVybiA9IFwiQUlcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHR1cm4gPSBcIkh1bWFuXCI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBwbGF5KGNvb3JkaW5hdGUpIHtcclxuICAgIGlmICh0dXJuID09PSBcIkh1bWFuXCIpIHtcclxuICAgICAgaHVtYW5QbGF5ZXIuYXR0YWNrKGNvb3JkaW5hdGUsIEFJUGxheWVyLmdhbWVib2FyZCk7XHJcbiAgICAgIGVuZFR1cm4oKTtcclxuICAgIH0gZWxzZSBpZiAodHVybiA9PT0gXCJBSVwiKSB7XHJcbiAgICAgIEFJUGxheWVyLm1ha2VSYW5kb21Nb3ZlKGh1bWFuUGxheWVyLmdhbWVib2FyZCk7XHJcbiAgICAgIGVuZFR1cm4oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdhbWVFbmQoKSB7XHJcbiAgICBpZiAoaHVtYW5QbGF5ZXIuZ2FtZWJvYXJkLmNoZWNrSWZBbGxTaGlwc1N1bmsoKSkge1xyXG4gICAgICByZXR1cm4gXCJZb3UgbG9zZVwiO1xyXG4gICAgfSBlbHNlIGlmIChBSVBsYXllci5nYW1lYm9hcmQuY2hlY2tJZkFsbFNoaXBzU3VuaygpKSB7XHJcbiAgICAgIHJldHVybiBcIllvdSB3aW5cIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBodW1hblBsYXllcixcclxuICAgIEFJUGxheWVyLFxyXG4gICAgcGxheSxcclxuICAgIGdhbWVFbmQsXHJcbiAgfTtcclxufVxyXG4iLCJpbXBvcnQgR2FtZUJvYXJkIGZyb20gXCIuL2dhbWVib2FyZFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGxheWVyKHR5cGVQYXJhbSkge1xyXG4gIGNvbnN0IHR5cGUgPSB0eXBlUGFyYW07XHJcbiAgY29uc3QgZ2FtZWJvYXJkID0gR2FtZUJvYXJkKCk7XHJcblxyXG4gIGNvbnN0IGF0dGFja2VkU3BvdHMgPSBbXTtcclxuXHJcbiAgY29uc3QgYXR0YWNrID0gZnVuY3Rpb24gKGNvb3JkaW5hdGUsIG9wcG9uZW50Qm9hcmQpIHtcclxuICAgIGlmIChhdHRhY2tlZFNwb3RzLmluY2x1ZGVzKGNvb3JkaW5hdGUpKSB7XHJcbiAgICAgIHJldHVybiBcIkNhbm5vdCBhdHRhY2sgc2FtZSBsb2NhdGlvbiB0d2ljZVwiO1xyXG4gICAgfVxyXG4gICAgb3Bwb25lbnRCb2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGUpO1xyXG4gICAgYXR0YWNrZWRTcG90cy5wdXNoKGNvb3JkaW5hdGUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG1ha2VSYW5kb21Nb3ZlID0gZnVuY3Rpb24gKG9wcG9uZW50Qm9hcmQpIHtcclxuICAgIGNvbnN0IGJvYXJkS2V5cyA9IE9iamVjdC5rZXlzKG9wcG9uZW50Qm9hcmQuYm9hcmQpO1xyXG4gICAgbGV0IHJhbmRvbUNvb3JkaW5hdGUgPVxyXG4gICAgICBib2FyZEtleXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYm9hcmRLZXlzLmxlbmd0aCldO1xyXG4gICAgd2hpbGUgKGF0dGFja2VkU3BvdHMuaW5jbHVkZXMocmFuZG9tQ29vcmRpbmF0ZSkpIHtcclxuICAgICAgcmFuZG9tQ29vcmRpbmF0ZSA9XHJcbiAgICAgICAgYm9hcmRLZXlzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGJvYXJkS2V5cy5sZW5ndGgpXTtcclxuICAgIH1cclxuICAgIGF0dGFjayhyYW5kb21Db29yZGluYXRlLCBvcHBvbmVudEJvYXJkKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4geyB0eXBlLCBnYW1lYm9hcmQsIGF0dGFjaywgbWFrZVJhbmRvbU1vdmUsIGF0dGFja2VkU3BvdHMgfTtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaGlwKGxlbmd0aCkge1xyXG4gIGNvbnN0IHNoaXBMZW5ndGggPSBsZW5ndGg7XHJcbiAgY29uc3Qgc2hpcFBvc2l0aW9ucyA9IHt9O1xyXG4gIGxldCBzaGlwQ29vcmRpbmF0ZXMgPSBbXCJlbXB0eVwiXTtcclxuXHJcbiAgZnVuY3Rpb24gY3JlYXRlU2hpcFBvc2l0aW9ucyhzaGlwTGVuZ3RoKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkrKykge1xyXG4gICAgICBzaGlwUG9zaXRpb25zW2ldID0gXCJub3QgaGl0XCI7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc2hpcFBvc2l0aW9ucztcclxuICB9XHJcblxyXG4gIGNyZWF0ZVNoaXBQb3NpdGlvbnMobGVuZ3RoKTtcclxuXHJcbiAgZnVuY3Rpb24gaGl0KCkge1xyXG4gICAgZm9yIChjb25zdCBwb3NpdGlvbiBvZiBPYmplY3Qua2V5cyhzaGlwUG9zaXRpb25zKSkge1xyXG4gICAgICBpZiAoc2hpcFBvc2l0aW9uc1twb3NpdGlvbl0gPT0gXCJub3QgaGl0XCIpIHtcclxuICAgICAgICBzaGlwUG9zaXRpb25zW3Bvc2l0aW9uXSA9IFwiaGl0XCI7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGlzU3VuayA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IHBvc2l0aW9uVmFsdWVzID0gT2JqZWN0LnZhbHVlcyhzaGlwUG9zaXRpb25zKTtcclxuICAgIGlmIChwb3NpdGlvblZhbHVlcy5pbmNsdWRlcyhcIm5vdCBoaXRcIikpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHNoaXBMZW5ndGgsXHJcbiAgICBzaGlwUG9zaXRpb25zLFxyXG4gICAgc2hpcENvb3JkaW5hdGVzLFxyXG4gICAgaGl0LFxyXG4gICAgaXNTdW5rLFxyXG4gIH07XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9