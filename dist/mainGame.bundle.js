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
  const attackedSpots = [];

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
    console.log(shipsPlacedOnBoardCount);
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
    if (attackedSpots.includes(coordinate) === true) {
      return false;
    }
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

  return { type, gameboard, attack, makeRandomMove };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQSxvQkFBb0IsZ0JBQWdCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvZ2FtZXBsYXkvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9nYW1lcGxheS9tYWluLWdhbWUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2dhbWVwbGF5L3BsYXllci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvZ2FtZXBsYXkvc2hpcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2hpcCBmcm9tIFwiLi9zaGlwXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYW1lQm9hcmQoKSB7XHJcbiAgY29uc3QgVkVSVElDQUxfQ09PUkRJTkFURVMgPSBbXHJcbiAgICBcIjBcIixcclxuICAgIFwiMVwiLFxyXG4gICAgXCIyXCIsXHJcbiAgICBcIjNcIixcclxuICAgIFwiNFwiLFxyXG4gICAgXCI1XCIsXHJcbiAgICBcIjZcIixcclxuICAgIFwiN1wiLFxyXG4gICAgXCI4XCIsXHJcbiAgICBcIjlcIixcclxuICBdO1xyXG4gIGNvbnN0IEhPUklaT05UQUxfQ09PUkRJTkFURVMgPSBbXHJcbiAgICBcIkFcIixcclxuICAgIFwiQlwiLFxyXG4gICAgXCJDXCIsXHJcbiAgICBcIkRcIixcclxuICAgIFwiRVwiLFxyXG4gICAgXCJGXCIsXHJcbiAgICBcIkdcIixcclxuICAgIFwiSFwiLFxyXG4gICAgXCJJXCIsXHJcbiAgICBcIkpcIixcclxuICBdO1xyXG5cclxuICBjb25zdCBib2FyZCA9IHt9O1xyXG4gIGNvbnN0IGF0dGFja2VkU3BvdHMgPSBbXTtcclxuXHJcbiAgZnVuY3Rpb24gY3JlYXRlQm9hcmQoKSB7XHJcbiAgICBIT1JJWk9OVEFMX0NPT1JESU5BVEVTLmZvckVhY2goKGxldHRlcikgPT4ge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IFZFUlRJQ0FMX0NPT1JESU5BVEVTLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IG51bWJlciA9IFZFUlRJQ0FMX0NPT1JESU5BVEVTW2ldO1xyXG4gICAgICAgIGNvbnN0IGtleSA9IGxldHRlciArIG51bWJlcjtcclxuICAgICAgICBib2FyZFtrZXldID0gXCJlbXB0eVwiO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUJvYXJkKCk7XHJcblxyXG4gIGNvbnN0IHNoaXBzID0ge307XHJcbiAgbGV0IHNoaXBzUGxhY2VkT25Cb2FyZENvdW50ID0gMDtcclxuXHJcbiAgZnVuY3Rpb24gY3JlYXRlTmV3U2hpcChsZW5ndGgpIHtcclxuICAgIGNvbnN0IHNoaXAgPSBuZXcgU2hpcChsZW5ndGgpO1xyXG4gICAgcmV0dXJuIHNoaXA7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjcmVhdGVBbGxTaGlwcygpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHNoaXAgPSBjcmVhdGVOZXdTaGlwKDEpO1xyXG4gICAgICBzaGlwc1tgc2hpcF8ke2l9X2xlbmd0aF8xYF0gPSBzaGlwO1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcclxuICAgICAgY29uc3Qgc2hpcCA9IGNyZWF0ZU5ld1NoaXAoMik7XHJcbiAgICAgIHNoaXBzW2BzaGlwXyR7aX1fbGVuZ3RoXzJgXSA9IHNoaXA7XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI7IGkrKykge1xyXG4gICAgICBjb25zdCBzaGlwID0gY3JlYXRlTmV3U2hpcCgzKTtcclxuICAgICAgc2hpcHNbYHNoaXBfJHtpfV9sZW5ndGhfM2BdID0gc2hpcDtcclxuICAgIH1cclxuICAgIGNvbnN0IGxvbmdlc3RTaGlwID0gY3JlYXRlTmV3U2hpcCg0KTtcclxuICAgIHNoaXBzW2BzaGlwXzBfbGVuZ3RoXzRgXSA9IGxvbmdlc3RTaGlwO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlQWxsU2hpcHMoKTtcclxuXHJcbiAgZnVuY3Rpb24gY2hvb3NlTmV4dENvb3JkaW5hdGVzKHNoaXAsIHN0YXJ0aW5nQ29vcmRpbmF0ZXMsIGRpcmVjdGlvbikge1xyXG4gICAgbGV0IG5leHRDb29yZGluYXRlTGlzdCA9IFtdO1xyXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpIHtcclxuICAgICAgY29uc3QgbGV0dGVyQ29kZSA9IHN0YXJ0aW5nQ29vcmRpbmF0ZXMuY2hhckNvZGVBdCgwKTtcclxuICAgICAgY29uc3QgbnVtYmVyID0gc3RhcnRpbmdDb29yZGluYXRlc1sxXTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLnNoaXBMZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IG5leHRMZXR0ZXJDb2RlID0gbGV0dGVyQ29kZSArIGk7XHJcbiAgICAgICAgY29uc3QgbmV4dExldHRlciA9IFN0cmluZy5mcm9tQ2hhckNvZGUobmV4dExldHRlckNvZGUpO1xyXG4gICAgICAgIGNvbnN0IG5leHRDb29yZGluYXRlID0gbmV4dExldHRlciArIG51bWJlcjtcclxuICAgICAgICBuZXh0Q29vcmRpbmF0ZUxpc3QucHVzaChuZXh0Q29vcmRpbmF0ZSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG5leHRDb29yZGluYXRlTGlzdDtcclxuICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSBcInZlcnRpY2FsXCIpIHtcclxuICAgICAgY29uc3QgbGV0dGVyID0gc3RhcnRpbmdDb29yZGluYXRlc1swXTtcclxuICAgICAgY29uc3Qgc3RhcnRpbmdOdW1iZXIgPSBzdGFydGluZ0Nvb3JkaW5hdGVzWzFdO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAuc2hpcExlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgbmV4dE51bWJlciA9IHBhcnNlSW50KHN0YXJ0aW5nTnVtYmVyKSArIGk7XHJcbiAgICAgICAgY29uc3QgbmV4dENvb3JkaW5hdGUgPSBsZXR0ZXIgKyBuZXh0TnVtYmVyO1xyXG4gICAgICAgIG5leHRDb29yZGluYXRlTGlzdC5wdXNoKG5leHRDb29yZGluYXRlKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbmV4dENvb3JkaW5hdGVMaXN0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2hlY2tJZkNvb3JkaW5hdGVzTGlzdElzQXZhaWxhYmxlKG5leHRDb29yZGluYXRlcykge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXh0Q29vcmRpbmF0ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgbGV0IGNvb3JkaW5hdGUgPSBuZXh0Q29vcmRpbmF0ZXNbaV07XHJcbiAgICAgIGlmIChcclxuICAgICAgICBib2FyZFtjb29yZGluYXRlXSAhPT0gXCJlbXB0eVwiICYmXHJcbiAgICAgICAgT2JqZWN0LmtleXMoYm9hcmQpLmluY2x1ZGVzKGNvb3JkaW5hdGUpXHJcbiAgICAgICkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfSBlbHNlIGlmIChPYmplY3Qua2V5cyhib2FyZCkuaW5jbHVkZXMoY29vcmRpbmF0ZSkgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHBsYWNlU2hpcE9uQm9hcmQoc2hpcCwgc3RhcnRpbmdDb29yZGluYXRlcywgZGlyZWN0aW9uKSB7XHJcbiAgICBjb25zb2xlLmxvZyhzaGlwc1BsYWNlZE9uQm9hcmRDb3VudCk7XHJcbiAgICBpZiAoc2hpcHNQbGFjZWRPbkJvYXJkQ291bnQgPT09IDEwKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGxldCBuZXh0Q29vcmRpbmF0ZXMgPSBjaG9vc2VOZXh0Q29vcmRpbmF0ZXMoXHJcbiAgICAgIHNoaXAsXHJcbiAgICAgIHN0YXJ0aW5nQ29vcmRpbmF0ZXMsXHJcbiAgICAgIGRpcmVjdGlvblxyXG4gICAgKTtcclxuICAgIGlmIChjaGVja0lmQ29vcmRpbmF0ZXNMaXN0SXNBdmFpbGFibGUobmV4dENvb3JkaW5hdGVzKSA9PT0gdHJ1ZSkge1xyXG4gICAgICBuZXh0Q29vcmRpbmF0ZXMuZm9yRWFjaCgoY29vcmRpbmF0ZSkgPT4ge1xyXG4gICAgICAgIGJvYXJkW2Nvb3JkaW5hdGVdID0gc2hpcDtcclxuICAgICAgICBpZiAoc2hpcC5zaGlwQ29vcmRpbmF0ZXNbMF0gPT09IFwiZW1wdHlcIikge1xyXG4gICAgICAgICAgc2hpcC5zaGlwQ29vcmRpbmF0ZXNbMF0gPSBjb29yZGluYXRlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzaGlwLnNoaXBDb29yZGluYXRlcy5wdXNoKGNvb3JkaW5hdGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHNoaXBzUGxhY2VkT25Cb2FyZENvdW50ICs9IDE7XHJcblxyXG4gICAgICByZXR1cm4gYm9hcmQ7XHJcbiAgICB9IGVsc2UgaWYgKGNoZWNrSWZDb29yZGluYXRlc0xpc3RJc0F2YWlsYWJsZShuZXh0Q29vcmRpbmF0ZXMpID09PSBmYWxzZSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjaG9vc2VSYW5kb21Db29yZGluYXRlc0FuZERpcmVjdGlvbigpIHtcclxuICAgIGNvbnN0IGRpcmVjdGlvbnMgPSBbXCJ2ZXJ0aWNhbFwiLCBcImhvcml6b250YWxcIl07XHJcbiAgICBjb25zdCBib2FyZEtleXMgPSBPYmplY3Qua2V5cyhib2FyZCk7XHJcbiAgICBjb25zdCByYW5kb21Db29yZGluYXRlID1cclxuICAgICAgYm9hcmRLZXlzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGJvYXJkS2V5cy5sZW5ndGgpXTtcclxuICAgIGNvbnN0IHJhbmRvbURpcmVjdGlvbiA9XHJcbiAgICAgIGRpcmVjdGlvbnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZGlyZWN0aW9ucy5sZW5ndGgpXTtcclxuICAgIHJldHVybiBbcmFuZG9tQ29vcmRpbmF0ZSwgcmFuZG9tRGlyZWN0aW9uXTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHBsYWNlU2hpcHNSYW5kb21seU9uQm9hcmQoKSB7XHJcbiAgICBpZiAoc2hpcHNQbGFjZWRPbkJvYXJkQ291bnQgPT09IDEwKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGNvbnN0IHNoaXBzTGlzdCA9IE9iamVjdC52YWx1ZXMoc2hpcHMpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwc0xpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3Qgc2hpcCA9IHNoaXBzTGlzdFtpXTtcclxuICAgICAgbGV0IHJhbmRvbSA9IGNob29zZVJhbmRvbUNvb3JkaW5hdGVzQW5kRGlyZWN0aW9uKCk7XHJcbiAgICAgIGxldCBuZXh0Q29vcmRpbmF0ZXMgPSBjaG9vc2VOZXh0Q29vcmRpbmF0ZXMoc2hpcCwgcmFuZG9tWzBdLCByYW5kb21bMV0pO1xyXG4gICAgICB3aGlsZSAoY2hlY2tJZkNvb3JkaW5hdGVzTGlzdElzQXZhaWxhYmxlKG5leHRDb29yZGluYXRlcykgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgcmFuZG9tID0gY2hvb3NlUmFuZG9tQ29vcmRpbmF0ZXNBbmREaXJlY3Rpb24oKTtcclxuICAgICAgICBuZXh0Q29vcmRpbmF0ZXMgPSBjaG9vc2VOZXh0Q29vcmRpbmF0ZXMoc2hpcCwgcmFuZG9tWzBdLCByYW5kb21bMV0pO1xyXG4gICAgICB9XHJcbiAgICAgIHBsYWNlU2hpcE9uQm9hcmQoc2hpcCwgcmFuZG9tWzBdLCByYW5kb21bMV0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVjZWl2ZUF0dGFjayhjb29yZGluYXRlKSB7XHJcbiAgICBpZiAoYXR0YWNrZWRTcG90cy5pbmNsdWRlcyhjb29yZGluYXRlKSA9PT0gdHJ1ZSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAoYm9hcmRbY29vcmRpbmF0ZV0gIT09IFwiZW1wdHlcIiAmJiBib2FyZFtjb29yZGluYXRlXSAhPT0gXCJtaXNzZWQgc2hvdFwiKSB7XHJcbiAgICAgIGNvbnN0IHNoaXAgPSBib2FyZFtjb29yZGluYXRlXTtcclxuICAgICAgc2hpcC5oaXQoKTtcclxuICAgIH0gZWxzZSBpZiAoYm9hcmRbY29vcmRpbmF0ZV0gPT0gXCJlbXB0eVwiKSB7XHJcbiAgICAgIGJvYXJkW2Nvb3JkaW5hdGVdID0gXCJtaXNzZWQgc2hvdFwiO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgY2hlY2tJZkFsbFNoaXBzU3VuayA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IHNoaXBzT2JqZWN0cyA9IE9iamVjdC52YWx1ZXMoc2hpcHMpO1xyXG4gICAgY29uc3Qgc2hpcFBvc2l0aW9uc1N0YXR1cyA9IFtdO1xyXG4gICAgc2hpcHNPYmplY3RzLmZvckVhY2goKG9iamVjdCkgPT4ge1xyXG4gICAgICBjb25zdCBzdGF0dXMgPSBPYmplY3QudmFsdWVzKG9iamVjdC5zaGlwUG9zaXRpb25zKTtcclxuICAgICAgc3RhdHVzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBzaGlwUG9zaXRpb25zU3RhdHVzLnB1c2goaXRlbSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBQb3NpdGlvbnNTdGF0dXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgcG9zaXRpb24gPSBzaGlwUG9zaXRpb25zU3RhdHVzW2ldO1xyXG4gICAgICBpZiAocG9zaXRpb24gPT09IFwibm90IGhpdFwiKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9O1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgYm9hcmQsXHJcbiAgICBzaGlwcyxcclxuICAgIHBsYWNlU2hpcE9uQm9hcmQsXHJcbiAgICBwbGFjZVNoaXBzUmFuZG9tbHlPbkJvYXJkLFxyXG4gICAgcmVjZWl2ZUF0dGFjayxcclxuICAgIGNoZWNrSWZBbGxTaGlwc1N1bmssXHJcbiAgfTtcclxufVxyXG4iLCJpbXBvcnQgUGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWFpbkdhbWUoKSB7XHJcbiAgY29uc3QgaHVtYW5QbGF5ZXIgPSBQbGF5ZXIoXCJIdW1hblwiKTtcclxuICBjb25zdCBBSVBsYXllciA9IFBsYXllcihcIkFJXCIpO1xyXG4gIGxldCB0dXJuID0gXCJIdW1hblwiO1xyXG5cclxuICBmdW5jdGlvbiBlbmRUdXJuKCkge1xyXG4gICAgaWYgKHR1cm4gPT09IFwiSHVtYW5cIikge1xyXG4gICAgICB0dXJuID0gXCJBSVwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdHVybiA9IFwiSHVtYW5cIjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHBsYXkoY29vcmRpbmF0ZSkge1xyXG4gICAgaWYgKHR1cm4gPT09IFwiSHVtYW5cIikge1xyXG4gICAgICBodW1hblBsYXllci5hdHRhY2soY29vcmRpbmF0ZSwgQUlQbGF5ZXIuZ2FtZWJvYXJkKTtcclxuICAgICAgZW5kVHVybigpO1xyXG4gICAgfSBlbHNlIGlmICh0dXJuID09PSBcIkFJXCIpIHtcclxuICAgICAgQUlQbGF5ZXIubWFrZVJhbmRvbU1vdmUoaHVtYW5QbGF5ZXIuZ2FtZWJvYXJkKTtcclxuICAgICAgZW5kVHVybigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2FtZUVuZCgpIHtcclxuICAgIGlmIChodW1hblBsYXllci5nYW1lYm9hcmQuY2hlY2tJZkFsbFNoaXBzU3VuaygpKSB7XHJcbiAgICAgIHJldHVybiBcIllvdSBsb3NlXCI7XHJcbiAgICB9IGVsc2UgaWYgKEFJUGxheWVyLmdhbWVib2FyZC5jaGVja0lmQWxsU2hpcHNTdW5rKCkpIHtcclxuICAgICAgcmV0dXJuIFwiWW91IHdpblwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGh1bWFuUGxheWVyLFxyXG4gICAgQUlQbGF5ZXIsXHJcbiAgICBwbGF5LFxyXG4gICAgZ2FtZUVuZCxcclxuICB9O1xyXG59XHJcbiIsImltcG9ydCBHYW1lQm9hcmQgZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQbGF5ZXIodHlwZVBhcmFtKSB7XHJcbiAgY29uc3QgdHlwZSA9IHR5cGVQYXJhbTtcclxuICBjb25zdCBnYW1lYm9hcmQgPSBHYW1lQm9hcmQoKTtcclxuXHJcbiAgY29uc3QgYXR0YWNrZWRTcG90cyA9IFtdO1xyXG5cclxuICBjb25zdCBhdHRhY2sgPSBmdW5jdGlvbiAoY29vcmRpbmF0ZSwgb3Bwb25lbnRCb2FyZCkge1xyXG4gICAgaWYgKGF0dGFja2VkU3BvdHMuaW5jbHVkZXMoY29vcmRpbmF0ZSkpIHtcclxuICAgICAgcmV0dXJuIFwiQ2Fubm90IGF0dGFjayBzYW1lIGxvY2F0aW9uIHR3aWNlXCI7XHJcbiAgICB9XHJcbiAgICBvcHBvbmVudEJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZSk7XHJcbiAgICBhdHRhY2tlZFNwb3RzLnB1c2goY29vcmRpbmF0ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbWFrZVJhbmRvbU1vdmUgPSBmdW5jdGlvbiAob3Bwb25lbnRCb2FyZCkge1xyXG4gICAgY29uc3QgYm9hcmRLZXlzID0gT2JqZWN0LmtleXMob3Bwb25lbnRCb2FyZC5ib2FyZCk7XHJcbiAgICBsZXQgcmFuZG9tQ29vcmRpbmF0ZSA9XHJcbiAgICAgIGJvYXJkS2V5c1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBib2FyZEtleXMubGVuZ3RoKV07XHJcbiAgICB3aGlsZSAoYXR0YWNrZWRTcG90cy5pbmNsdWRlcyhyYW5kb21Db29yZGluYXRlKSkge1xyXG4gICAgICByYW5kb21Db29yZGluYXRlID1cclxuICAgICAgICBib2FyZEtleXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYm9hcmRLZXlzLmxlbmd0aCldO1xyXG4gICAgfVxyXG4gICAgYXR0YWNrKHJhbmRvbUNvb3JkaW5hdGUsIG9wcG9uZW50Qm9hcmQpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiB7IHR5cGUsIGdhbWVib2FyZCwgYXR0YWNrLCBtYWtlUmFuZG9tTW92ZSB9O1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNoaXAobGVuZ3RoKSB7XHJcbiAgY29uc3Qgc2hpcExlbmd0aCA9IGxlbmd0aDtcclxuICBjb25zdCBzaGlwUG9zaXRpb25zID0ge307XHJcbiAgbGV0IHNoaXBDb29yZGluYXRlcyA9IFtcImVtcHR5XCJdO1xyXG5cclxuICBmdW5jdGlvbiBjcmVhdGVTaGlwUG9zaXRpb25zKHNoaXBMZW5ndGgpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHNoaXBQb3NpdGlvbnNbaV0gPSBcIm5vdCBoaXRcIjtcclxuICAgIH1cclxuICAgIHJldHVybiBzaGlwUG9zaXRpb25zO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlU2hpcFBvc2l0aW9ucyhsZW5ndGgpO1xyXG5cclxuICBmdW5jdGlvbiBoaXQoKSB7XHJcbiAgICBmb3IgKGNvbnN0IHBvc2l0aW9uIG9mIE9iamVjdC5rZXlzKHNoaXBQb3NpdGlvbnMpKSB7XHJcbiAgICAgIGlmIChzaGlwUG9zaXRpb25zW3Bvc2l0aW9uXSA9PSBcIm5vdCBoaXRcIikge1xyXG4gICAgICAgIHNoaXBQb3NpdGlvbnNbcG9zaXRpb25dID0gXCJoaXRcIjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaXNTdW5rID0gZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgcG9zaXRpb25WYWx1ZXMgPSBPYmplY3QudmFsdWVzKHNoaXBQb3NpdGlvbnMpO1xyXG4gICAgaWYgKHBvc2l0aW9uVmFsdWVzLmluY2x1ZGVzKFwibm90IGhpdFwiKSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9O1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgc2hpcExlbmd0aCxcclxuICAgIHNoaXBQb3NpdGlvbnMsXHJcbiAgICBzaGlwQ29vcmRpbmF0ZXMsXHJcbiAgICBoaXQsXHJcbiAgICBpc1N1bmssXHJcbiAgfTtcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=