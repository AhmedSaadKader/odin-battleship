"use strict";
(self["webpackChunkodin_battleship"] = self["webpackChunkodin_battleship"] || []).push([["gameboard"],{

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

  function chooseNextCoordinate(ship, startingCoordinates, direction) {
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
  function placeShipOnBoard(ship, startingCoordinates, direction) {
    let shipCoordinates = [];
    let nextCoordinates = chooseNextCoordinate(
      ship,
      startingCoordinates,
      direction
    );
    for (let i = 0; i < nextCoordinates.length; i++) {
      let coordinate = nextCoordinates[i];
      if (
        board[coordinate] !== "empty" &&
        Object.keys(board).includes(coordinate)
      ) {
        return "This spot is not empty";
      }
      if (Object.keys(board).includes(coordinate) === false) {
        return "This spot is not available";
      }
      shipCoordinates.push(coordinate);
    }
    shipCoordinates.forEach((coordinate) => {
      board[coordinate] = ship;
    });
    return board;
  }

  function chooseRandomCoordinatesAndDirection(ship_length) {
    const directions = ["vertical", "horizontal"];
    const boardKeys = Object.keys(board);
    const randomCoordinate =
      boardKeys[Math.floor(Math.random() * boardKeys.length)];
    const randomDirection =
      directions[Math.floor(Math.random() * directions.length)];
    return {
      randomCoordinate: randomCoordinate,
      randomDirection: randomDirection,
    };
  }

  function placeShipsRandomlyOnBoard() {
    const shipsList = Object.keys(ships);
    for (let i = 0; i < shipsList.length; i++) {
      const ship = shipsList[i];
      const random = chooseRandomCoordinatesAndDirection();
      console.log(random, ship);
      placeShipOnBoard(ship, random.randomCoordinate, random.randomDirection);
    }
    console.log(board);
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
    if (shipPositionsStatus.includes("not hit")) {
      return false;
    } else if (shipPositionsStatus.forEach((position) => position === "hit")) {
      return true;
    }
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
    hit,
    isSunk,
  };
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/gameplay/gameboard.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZWJvYXJkLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUMxQjtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQ0FBaUM7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZDQUFJO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQSxvQkFBb0IsRUFBRTtBQUN0QjtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0Esb0JBQW9CLEVBQUU7QUFDdEI7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBLG9CQUFvQixFQUFFO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixxQkFBcUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxzQkFBc0IscUJBQXFCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHNCQUFzQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDN0tlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsZ0JBQWdCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2dhbWVwbGF5L2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvZ2FtZXBsYXkvc2hpcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2hpcCBmcm9tIFwiLi9zaGlwXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYW1lQm9hcmQoKSB7XHJcbiAgY29uc3QgVkVSVElDQUxfQ09PUkRJTkFURVMgPSBbXHJcbiAgICBcIjBcIixcclxuICAgIFwiMVwiLFxyXG4gICAgXCIyXCIsXHJcbiAgICBcIjNcIixcclxuICAgIFwiNFwiLFxyXG4gICAgXCI1XCIsXHJcbiAgICBcIjZcIixcclxuICAgIFwiN1wiLFxyXG4gICAgXCI4XCIsXHJcbiAgICBcIjlcIixcclxuICBdO1xyXG4gIGNvbnN0IEhPUklaT05UQUxfQ09PUkRJTkFURVMgPSBbXHJcbiAgICBcIkFcIixcclxuICAgIFwiQlwiLFxyXG4gICAgXCJDXCIsXHJcbiAgICBcIkRcIixcclxuICAgIFwiRVwiLFxyXG4gICAgXCJGXCIsXHJcbiAgICBcIkdcIixcclxuICAgIFwiSFwiLFxyXG4gICAgXCJJXCIsXHJcbiAgICBcIkpcIixcclxuICBdO1xyXG5cclxuICBjb25zdCBib2FyZCA9IHt9O1xyXG5cclxuICBmdW5jdGlvbiBjcmVhdGVCb2FyZCgpIHtcclxuICAgIEhPUklaT05UQUxfQ09PUkRJTkFURVMuZm9yRWFjaCgobGV0dGVyKSA9PiB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgVkVSVElDQUxfQ09PUkRJTkFURVMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgbnVtYmVyID0gVkVSVElDQUxfQ09PUkRJTkFURVNbaV07XHJcbiAgICAgICAgY29uc3Qga2V5ID0gbGV0dGVyICsgbnVtYmVyO1xyXG4gICAgICAgIGJvYXJkW2tleV0gPSBcImVtcHR5XCI7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlQm9hcmQoKTtcclxuXHJcbiAgY29uc3Qgc2hpcHMgPSB7fTtcclxuICBmdW5jdGlvbiBjcmVhdGVOZXdTaGlwKGxlbmd0aCkge1xyXG4gICAgY29uc3Qgc2hpcCA9IG5ldyBTaGlwKGxlbmd0aCk7XHJcbiAgICByZXR1cm4gc2hpcDtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNyZWF0ZUFsbFNoaXBzKCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcclxuICAgICAgY29uc3Qgc2hpcCA9IGNyZWF0ZU5ld1NoaXAoMSk7XHJcbiAgICAgIHNoaXBzW2BzaGlwXyR7aX1fbGVuZ3RoXzFgXSA9IHNoaXA7XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xyXG4gICAgICBjb25zdCBzaGlwID0gY3JlYXRlTmV3U2hpcCgyKTtcclxuICAgICAgc2hpcHNbYHNoaXBfJHtpfV9sZW5ndGhfMmBdID0gc2hpcDtcclxuICAgIH1cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHNoaXAgPSBjcmVhdGVOZXdTaGlwKDMpO1xyXG4gICAgICBzaGlwc1tgc2hpcF8ke2l9X2xlbmd0aF8zYF0gPSBzaGlwO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbG9uZ2VzdFNoaXAgPSBjcmVhdGVOZXdTaGlwKDQpO1xyXG4gICAgc2hpcHNbYHNoaXBfMF9sZW5ndGhfNGBdID0gbG9uZ2VzdFNoaXA7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVBbGxTaGlwcygpO1xyXG5cclxuICBmdW5jdGlvbiBjaG9vc2VOZXh0Q29vcmRpbmF0ZShzaGlwLCBzdGFydGluZ0Nvb3JkaW5hdGVzLCBkaXJlY3Rpb24pIHtcclxuICAgIGxldCBuZXh0Q29vcmRpbmF0ZUxpc3QgPSBbXTtcclxuICAgIGlmIChkaXJlY3Rpb24gPT09IFwiaG9yaXpvbnRhbFwiKSB7XHJcbiAgICAgIGNvbnN0IGxldHRlckNvZGUgPSBzdGFydGluZ0Nvb3JkaW5hdGVzLmNoYXJDb2RlQXQoMCk7XHJcbiAgICAgIGNvbnN0IG51bWJlciA9IHN0YXJ0aW5nQ29vcmRpbmF0ZXNbMV07XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5zaGlwTGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBuZXh0TGV0dGVyQ29kZSA9IGxldHRlckNvZGUgKyBpO1xyXG4gICAgICAgIGNvbnN0IG5leHRMZXR0ZXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKG5leHRMZXR0ZXJDb2RlKTtcclxuICAgICAgICBjb25zdCBuZXh0Q29vcmRpbmF0ZSA9IG5leHRMZXR0ZXIgKyBudW1iZXI7XHJcbiAgICAgICAgbmV4dENvb3JkaW5hdGVMaXN0LnB1c2gobmV4dENvb3JkaW5hdGUpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBuZXh0Q29vcmRpbmF0ZUxpc3Q7XHJcbiAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XHJcbiAgICAgIGNvbnN0IGxldHRlciA9IHN0YXJ0aW5nQ29vcmRpbmF0ZXNbMF07XHJcbiAgICAgIGNvbnN0IHN0YXJ0aW5nTnVtYmVyID0gc3RhcnRpbmdDb29yZGluYXRlc1sxXTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLnNoaXBMZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IG5leHROdW1iZXIgPSBwYXJzZUludChzdGFydGluZ051bWJlcikgKyBpO1xyXG4gICAgICAgIGNvbnN0IG5leHRDb29yZGluYXRlID0gbGV0dGVyICsgbmV4dE51bWJlcjtcclxuICAgICAgICBuZXh0Q29vcmRpbmF0ZUxpc3QucHVzaChuZXh0Q29vcmRpbmF0ZSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG5leHRDb29yZGluYXRlTGlzdDtcclxuICAgIH1cclxuICB9XHJcbiAgZnVuY3Rpb24gcGxhY2VTaGlwT25Cb2FyZChzaGlwLCBzdGFydGluZ0Nvb3JkaW5hdGVzLCBkaXJlY3Rpb24pIHtcclxuICAgIGxldCBzaGlwQ29vcmRpbmF0ZXMgPSBbXTtcclxuICAgIGxldCBuZXh0Q29vcmRpbmF0ZXMgPSBjaG9vc2VOZXh0Q29vcmRpbmF0ZShcclxuICAgICAgc2hpcCxcclxuICAgICAgc3RhcnRpbmdDb29yZGluYXRlcyxcclxuICAgICAgZGlyZWN0aW9uXHJcbiAgICApO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXh0Q29vcmRpbmF0ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgbGV0IGNvb3JkaW5hdGUgPSBuZXh0Q29vcmRpbmF0ZXNbaV07XHJcbiAgICAgIGlmIChcclxuICAgICAgICBib2FyZFtjb29yZGluYXRlXSAhPT0gXCJlbXB0eVwiICYmXHJcbiAgICAgICAgT2JqZWN0LmtleXMoYm9hcmQpLmluY2x1ZGVzKGNvb3JkaW5hdGUpXHJcbiAgICAgICkge1xyXG4gICAgICAgIHJldHVybiBcIlRoaXMgc3BvdCBpcyBub3QgZW1wdHlcIjtcclxuICAgICAgfVxyXG4gICAgICBpZiAoT2JqZWN0LmtleXMoYm9hcmQpLmluY2x1ZGVzKGNvb3JkaW5hdGUpID09PSBmYWxzZSkge1xyXG4gICAgICAgIHJldHVybiBcIlRoaXMgc3BvdCBpcyBub3QgYXZhaWxhYmxlXCI7XHJcbiAgICAgIH1cclxuICAgICAgc2hpcENvb3JkaW5hdGVzLnB1c2goY29vcmRpbmF0ZSk7XHJcbiAgICB9XHJcbiAgICBzaGlwQ29vcmRpbmF0ZXMuZm9yRWFjaCgoY29vcmRpbmF0ZSkgPT4ge1xyXG4gICAgICBib2FyZFtjb29yZGluYXRlXSA9IHNoaXA7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBib2FyZDtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNob29zZVJhbmRvbUNvb3JkaW5hdGVzQW5kRGlyZWN0aW9uKHNoaXBfbGVuZ3RoKSB7XHJcbiAgICBjb25zdCBkaXJlY3Rpb25zID0gW1widmVydGljYWxcIiwgXCJob3Jpem9udGFsXCJdO1xyXG4gICAgY29uc3QgYm9hcmRLZXlzID0gT2JqZWN0LmtleXMoYm9hcmQpO1xyXG4gICAgY29uc3QgcmFuZG9tQ29vcmRpbmF0ZSA9XHJcbiAgICAgIGJvYXJkS2V5c1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBib2FyZEtleXMubGVuZ3RoKV07XHJcbiAgICBjb25zdCByYW5kb21EaXJlY3Rpb24gPVxyXG4gICAgICBkaXJlY3Rpb25zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGRpcmVjdGlvbnMubGVuZ3RoKV07XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICByYW5kb21Db29yZGluYXRlOiByYW5kb21Db29yZGluYXRlLFxyXG4gICAgICByYW5kb21EaXJlY3Rpb246IHJhbmRvbURpcmVjdGlvbixcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBwbGFjZVNoaXBzUmFuZG9tbHlPbkJvYXJkKCkge1xyXG4gICAgY29uc3Qgc2hpcHNMaXN0ID0gT2JqZWN0LmtleXMoc2hpcHMpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwc0xpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3Qgc2hpcCA9IHNoaXBzTGlzdFtpXTtcclxuICAgICAgY29uc3QgcmFuZG9tID0gY2hvb3NlUmFuZG9tQ29vcmRpbmF0ZXNBbmREaXJlY3Rpb24oKTtcclxuICAgICAgY29uc29sZS5sb2cocmFuZG9tLCBzaGlwKTtcclxuICAgICAgcGxhY2VTaGlwT25Cb2FyZChzaGlwLCByYW5kb20ucmFuZG9tQ29vcmRpbmF0ZSwgcmFuZG9tLnJhbmRvbURpcmVjdGlvbik7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhib2FyZCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGUpIHtcclxuICAgIGlmIChib2FyZFtjb29yZGluYXRlXSAhPT0gXCJlbXB0eVwiICYmIGJvYXJkW2Nvb3JkaW5hdGVdICE9PSBcIm1pc3NlZCBzaG90XCIpIHtcclxuICAgICAgY29uc3Qgc2hpcCA9IGJvYXJkW2Nvb3JkaW5hdGVdO1xyXG4gICAgICBzaGlwLmhpdCgpO1xyXG4gICAgfSBlbHNlIGlmIChib2FyZFtjb29yZGluYXRlXSA9PSBcImVtcHR5XCIpIHtcclxuICAgICAgYm9hcmRbY29vcmRpbmF0ZV0gPSBcIm1pc3NlZCBzaG90XCI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBjaGVja0lmQWxsU2hpcHNTdW5rID0gZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3Qgc2hpcHNPYmplY3RzID0gT2JqZWN0LnZhbHVlcyhzaGlwcyk7XHJcbiAgICBjb25zdCBzaGlwUG9zaXRpb25zU3RhdHVzID0gW107XHJcbiAgICBzaGlwc09iamVjdHMuZm9yRWFjaCgob2JqZWN0KSA9PiB7XHJcbiAgICAgIGNvbnN0IHN0YXR1cyA9IE9iamVjdC52YWx1ZXMob2JqZWN0LnNoaXBQb3NpdGlvbnMpO1xyXG4gICAgICBzdGF0dXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIHNoaXBQb3NpdGlvbnNTdGF0dXMucHVzaChpdGVtKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIGlmIChzaGlwUG9zaXRpb25zU3RhdHVzLmluY2x1ZGVzKFwibm90IGhpdFwiKSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9IGVsc2UgaWYgKHNoaXBQb3NpdGlvbnNTdGF0dXMuZm9yRWFjaCgocG9zaXRpb24pID0+IHBvc2l0aW9uID09PSBcImhpdFwiKSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgYm9hcmQsXHJcbiAgICBzaGlwcyxcclxuICAgIHBsYWNlU2hpcE9uQm9hcmQsXHJcbiAgICBwbGFjZVNoaXBzUmFuZG9tbHlPbkJvYXJkLFxyXG4gICAgcmVjZWl2ZUF0dGFjayxcclxuICAgIGNoZWNrSWZBbGxTaGlwc1N1bmssXHJcbiAgfTtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaGlwKGxlbmd0aCkge1xyXG4gIGNvbnN0IHNoaXBMZW5ndGggPSBsZW5ndGg7XHJcbiAgY29uc3Qgc2hpcFBvc2l0aW9ucyA9IHt9O1xyXG5cclxuICBmdW5jdGlvbiBjcmVhdGVTaGlwUG9zaXRpb25zKHNoaXBMZW5ndGgpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHNoaXBQb3NpdGlvbnNbaV0gPSBcIm5vdCBoaXRcIjtcclxuICAgIH1cclxuICAgIHJldHVybiBzaGlwUG9zaXRpb25zO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlU2hpcFBvc2l0aW9ucyhsZW5ndGgpO1xyXG5cclxuICBmdW5jdGlvbiBoaXQoKSB7XHJcbiAgICBmb3IgKGNvbnN0IHBvc2l0aW9uIG9mIE9iamVjdC5rZXlzKHNoaXBQb3NpdGlvbnMpKSB7XHJcbiAgICAgIGlmIChzaGlwUG9zaXRpb25zW3Bvc2l0aW9uXSA9PSBcIm5vdCBoaXRcIikge1xyXG4gICAgICAgIHNoaXBQb3NpdGlvbnNbcG9zaXRpb25dID0gXCJoaXRcIjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaXNTdW5rID0gZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgcG9zaXRpb25WYWx1ZXMgPSBPYmplY3QudmFsdWVzKHNoaXBQb3NpdGlvbnMpO1xyXG4gICAgaWYgKHBvc2l0aW9uVmFsdWVzLmluY2x1ZGVzKFwibm90IGhpdFwiKSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9O1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgc2hpcExlbmd0aCxcclxuICAgIHNoaXBQb3NpdGlvbnMsXHJcbiAgICBoaXQsXHJcbiAgICBpc1N1bmssXHJcbiAgfTtcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=