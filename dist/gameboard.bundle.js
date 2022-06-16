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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/gameplay/gameboard.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZWJvYXJkLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUMxQjtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQ0FBaUM7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2Q0FBSTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0Esb0JBQW9CLEVBQUU7QUFDdEI7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBLG9CQUFvQixFQUFFO0FBQ3RCO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQSxvQkFBb0IsRUFBRTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IscUJBQXFCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0Esc0JBQXNCLHFCQUFxQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHNCQUFzQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0wsb0JBQW9CLGdDQUFnQztBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNwTWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGdCQUFnQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2dhbWVwbGF5L2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvZ2FtZXBsYXkvc2hpcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2hpcCBmcm9tIFwiLi9zaGlwXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYW1lQm9hcmQoKSB7XHJcbiAgY29uc3QgVkVSVElDQUxfQ09PUkRJTkFURVMgPSBbXHJcbiAgICBcIjBcIixcclxuICAgIFwiMVwiLFxyXG4gICAgXCIyXCIsXHJcbiAgICBcIjNcIixcclxuICAgIFwiNFwiLFxyXG4gICAgXCI1XCIsXHJcbiAgICBcIjZcIixcclxuICAgIFwiN1wiLFxyXG4gICAgXCI4XCIsXHJcbiAgICBcIjlcIixcclxuICBdO1xyXG4gIGNvbnN0IEhPUklaT05UQUxfQ09PUkRJTkFURVMgPSBbXHJcbiAgICBcIkFcIixcclxuICAgIFwiQlwiLFxyXG4gICAgXCJDXCIsXHJcbiAgICBcIkRcIixcclxuICAgIFwiRVwiLFxyXG4gICAgXCJGXCIsXHJcbiAgICBcIkdcIixcclxuICAgIFwiSFwiLFxyXG4gICAgXCJJXCIsXHJcbiAgICBcIkpcIixcclxuICBdO1xyXG5cclxuICBjb25zdCBib2FyZCA9IHt9O1xyXG5cclxuICBmdW5jdGlvbiBjcmVhdGVCb2FyZCgpIHtcclxuICAgIEhPUklaT05UQUxfQ09PUkRJTkFURVMuZm9yRWFjaCgobGV0dGVyKSA9PiB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgVkVSVElDQUxfQ09PUkRJTkFURVMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgbnVtYmVyID0gVkVSVElDQUxfQ09PUkRJTkFURVNbaV07XHJcbiAgICAgICAgY29uc3Qga2V5ID0gbGV0dGVyICsgbnVtYmVyO1xyXG4gICAgICAgIGJvYXJkW2tleV0gPSBcImVtcHR5XCI7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlQm9hcmQoKTtcclxuXHJcbiAgY29uc3Qgc2hpcHMgPSB7fTtcclxuICBsZXQgc2hpcHNQbGFjZWRPbkJvYXJkQ291bnQgPSAwO1xyXG5cclxuICBmdW5jdGlvbiBjcmVhdGVOZXdTaGlwKGxlbmd0aCkge1xyXG4gICAgY29uc3Qgc2hpcCA9IG5ldyBTaGlwKGxlbmd0aCk7XHJcbiAgICByZXR1cm4gc2hpcDtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNyZWF0ZUFsbFNoaXBzKCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcclxuICAgICAgY29uc3Qgc2hpcCA9IGNyZWF0ZU5ld1NoaXAoMSk7XHJcbiAgICAgIHNoaXBzW2BzaGlwXyR7aX1fbGVuZ3RoXzFgXSA9IHNoaXA7XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xyXG4gICAgICBjb25zdCBzaGlwID0gY3JlYXRlTmV3U2hpcCgyKTtcclxuICAgICAgc2hpcHNbYHNoaXBfJHtpfV9sZW5ndGhfMmBdID0gc2hpcDtcclxuICAgIH1cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHNoaXAgPSBjcmVhdGVOZXdTaGlwKDMpO1xyXG4gICAgICBzaGlwc1tgc2hpcF8ke2l9X2xlbmd0aF8zYF0gPSBzaGlwO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbG9uZ2VzdFNoaXAgPSBjcmVhdGVOZXdTaGlwKDQpO1xyXG4gICAgc2hpcHNbYHNoaXBfMF9sZW5ndGhfNGBdID0gbG9uZ2VzdFNoaXA7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVBbGxTaGlwcygpO1xyXG5cclxuICBmdW5jdGlvbiBjaG9vc2VOZXh0Q29vcmRpbmF0ZXMoc2hpcCwgc3RhcnRpbmdDb29yZGluYXRlcywgZGlyZWN0aW9uKSB7XHJcbiAgICBsZXQgbmV4dENvb3JkaW5hdGVMaXN0ID0gW107XHJcbiAgICBpZiAoZGlyZWN0aW9uID09PSBcImhvcml6b250YWxcIikge1xyXG4gICAgICBjb25zdCBsZXR0ZXJDb2RlID0gc3RhcnRpbmdDb29yZGluYXRlcy5jaGFyQ29kZUF0KDApO1xyXG4gICAgICBjb25zdCBudW1iZXIgPSBzdGFydGluZ0Nvb3JkaW5hdGVzWzFdO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAuc2hpcExlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgbmV4dExldHRlckNvZGUgPSBsZXR0ZXJDb2RlICsgaTtcclxuICAgICAgICBjb25zdCBuZXh0TGV0dGVyID0gU3RyaW5nLmZyb21DaGFyQ29kZShuZXh0TGV0dGVyQ29kZSk7XHJcbiAgICAgICAgY29uc3QgbmV4dENvb3JkaW5hdGUgPSBuZXh0TGV0dGVyICsgbnVtYmVyO1xyXG4gICAgICAgIG5leHRDb29yZGluYXRlTGlzdC5wdXNoKG5leHRDb29yZGluYXRlKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbmV4dENvb3JkaW5hdGVMaXN0O1xyXG4gICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09IFwidmVydGljYWxcIikge1xyXG4gICAgICBjb25zdCBsZXR0ZXIgPSBzdGFydGluZ0Nvb3JkaW5hdGVzWzBdO1xyXG4gICAgICBjb25zdCBzdGFydGluZ051bWJlciA9IHN0YXJ0aW5nQ29vcmRpbmF0ZXNbMV07XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5zaGlwTGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBuZXh0TnVtYmVyID0gcGFyc2VJbnQoc3RhcnRpbmdOdW1iZXIpICsgaTtcclxuICAgICAgICBjb25zdCBuZXh0Q29vcmRpbmF0ZSA9IGxldHRlciArIG5leHROdW1iZXI7XHJcbiAgICAgICAgbmV4dENvb3JkaW5hdGVMaXN0LnB1c2gobmV4dENvb3JkaW5hdGUpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBuZXh0Q29vcmRpbmF0ZUxpc3Q7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjaGVja0lmQ29vcmRpbmF0ZXNMaXN0SXNBdmFpbGFibGUobmV4dENvb3JkaW5hdGVzKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5leHRDb29yZGluYXRlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBsZXQgY29vcmRpbmF0ZSA9IG5leHRDb29yZGluYXRlc1tpXTtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIGJvYXJkW2Nvb3JkaW5hdGVdICE9PSBcImVtcHR5XCIgJiZcclxuICAgICAgICBPYmplY3Qua2V5cyhib2FyZCkuaW5jbHVkZXMoY29vcmRpbmF0ZSlcclxuICAgICAgKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9IGVsc2UgaWYgKE9iamVjdC5rZXlzKGJvYXJkKS5pbmNsdWRlcyhjb29yZGluYXRlKSA9PT0gZmFsc2UpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcGxhY2VTaGlwT25Cb2FyZChzaGlwLCBzdGFydGluZ0Nvb3JkaW5hdGVzLCBkaXJlY3Rpb24pIHtcclxuICAgIGlmIChzaGlwc1BsYWNlZE9uQm9hcmRDb3VudCA9PT0gMTApIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgbGV0IG5leHRDb29yZGluYXRlcyA9IGNob29zZU5leHRDb29yZGluYXRlcyhcclxuICAgICAgc2hpcCxcclxuICAgICAgc3RhcnRpbmdDb29yZGluYXRlcyxcclxuICAgICAgZGlyZWN0aW9uXHJcbiAgICApO1xyXG4gICAgaWYgKGNoZWNrSWZDb29yZGluYXRlc0xpc3RJc0F2YWlsYWJsZShuZXh0Q29vcmRpbmF0ZXMpID09PSB0cnVlKSB7XHJcbiAgICAgIG5leHRDb29yZGluYXRlcy5mb3JFYWNoKChjb29yZGluYXRlKSA9PiB7XHJcbiAgICAgICAgYm9hcmRbY29vcmRpbmF0ZV0gPSBzaGlwO1xyXG4gICAgICAgIGlmIChzaGlwLnNoaXBDb29yZGluYXRlc1swXSA9PT0gXCJlbXB0eVwiKSB7XHJcbiAgICAgICAgICBzaGlwLnNoaXBDb29yZGluYXRlc1swXSA9IGNvb3JkaW5hdGU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNoaXAuc2hpcENvb3JkaW5hdGVzLnB1c2goY29vcmRpbmF0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgc2hpcHNQbGFjZWRPbkJvYXJkQ291bnQgKz0gMTtcclxuXHJcbiAgICAgIHJldHVybiBib2FyZDtcclxuICAgIH0gZWxzZSBpZiAoY2hlY2tJZkNvb3JkaW5hdGVzTGlzdElzQXZhaWxhYmxlKG5leHRDb29yZGluYXRlcykgPT09IGZhbHNlKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNob29zZVJhbmRvbUNvb3JkaW5hdGVzQW5kRGlyZWN0aW9uKCkge1xyXG4gICAgY29uc3QgZGlyZWN0aW9ucyA9IFtcInZlcnRpY2FsXCIsIFwiaG9yaXpvbnRhbFwiXTtcclxuICAgIGNvbnN0IGJvYXJkS2V5cyA9IE9iamVjdC5rZXlzKGJvYXJkKTtcclxuICAgIGNvbnN0IHJhbmRvbUNvb3JkaW5hdGUgPVxyXG4gICAgICBib2FyZEtleXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYm9hcmRLZXlzLmxlbmd0aCldO1xyXG4gICAgY29uc3QgcmFuZG9tRGlyZWN0aW9uID1cclxuICAgICAgZGlyZWN0aW9uc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBkaXJlY3Rpb25zLmxlbmd0aCldO1xyXG4gICAgcmV0dXJuIFtyYW5kb21Db29yZGluYXRlLCByYW5kb21EaXJlY3Rpb25dO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcGxhY2VTaGlwc1JhbmRvbWx5T25Cb2FyZCgpIHtcclxuICAgIGlmIChzaGlwc1BsYWNlZE9uQm9hcmRDb3VudCA9PT0gMTApIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc2hpcHNMaXN0ID0gT2JqZWN0LnZhbHVlcyhzaGlwcyk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBzTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBzaGlwID0gc2hpcHNMaXN0W2ldO1xyXG4gICAgICBsZXQgcmFuZG9tID0gY2hvb3NlUmFuZG9tQ29vcmRpbmF0ZXNBbmREaXJlY3Rpb24oKTtcclxuICAgICAgbGV0IG5leHRDb29yZGluYXRlcyA9IGNob29zZU5leHRDb29yZGluYXRlcyhzaGlwLCByYW5kb21bMF0sIHJhbmRvbVsxXSk7XHJcbiAgICAgIHdoaWxlIChjaGVja0lmQ29vcmRpbmF0ZXNMaXN0SXNBdmFpbGFibGUobmV4dENvb3JkaW5hdGVzKSA9PT0gZmFsc2UpIHtcclxuICAgICAgICByYW5kb20gPSBjaG9vc2VSYW5kb21Db29yZGluYXRlc0FuZERpcmVjdGlvbigpO1xyXG4gICAgICAgIG5leHRDb29yZGluYXRlcyA9IGNob29zZU5leHRDb29yZGluYXRlcyhzaGlwLCByYW5kb21bMF0sIHJhbmRvbVsxXSk7XHJcbiAgICAgIH1cclxuICAgICAgcGxhY2VTaGlwT25Cb2FyZChzaGlwLCByYW5kb21bMF0sIHJhbmRvbVsxXSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGUpIHtcclxuICAgIGlmIChib2FyZFtjb29yZGluYXRlXSAhPT0gXCJlbXB0eVwiICYmIGJvYXJkW2Nvb3JkaW5hdGVdICE9PSBcIm1pc3NlZCBzaG90XCIpIHtcclxuICAgICAgY29uc3Qgc2hpcCA9IGJvYXJkW2Nvb3JkaW5hdGVdO1xyXG4gICAgICBzaGlwLmhpdCgpO1xyXG4gICAgfSBlbHNlIGlmIChib2FyZFtjb29yZGluYXRlXSA9PSBcImVtcHR5XCIpIHtcclxuICAgICAgYm9hcmRbY29vcmRpbmF0ZV0gPSBcIm1pc3NlZCBzaG90XCI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBjaGVja0lmQWxsU2hpcHNTdW5rID0gZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3Qgc2hpcHNPYmplY3RzID0gT2JqZWN0LnZhbHVlcyhzaGlwcyk7XHJcbiAgICBjb25zdCBzaGlwUG9zaXRpb25zU3RhdHVzID0gW107XHJcbiAgICBzaGlwc09iamVjdHMuZm9yRWFjaCgob2JqZWN0KSA9PiB7XHJcbiAgICAgIGNvbnN0IHN0YXR1cyA9IE9iamVjdC52YWx1ZXMob2JqZWN0LnNoaXBQb3NpdGlvbnMpO1xyXG4gICAgICBzdGF0dXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIHNoaXBQb3NpdGlvbnNTdGF0dXMucHVzaChpdGVtKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcFBvc2l0aW9uc1N0YXR1cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBwb3NpdGlvbiA9IHNoaXBQb3NpdGlvbnNTdGF0dXNbaV07XHJcbiAgICAgIGlmIChwb3NpdGlvbiA9PT0gXCJub3QgaGl0XCIpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBib2FyZCxcclxuICAgIHNoaXBzLFxyXG4gICAgcGxhY2VTaGlwT25Cb2FyZCxcclxuICAgIHBsYWNlU2hpcHNSYW5kb21seU9uQm9hcmQsXHJcbiAgICByZWNlaXZlQXR0YWNrLFxyXG4gICAgY2hlY2tJZkFsbFNoaXBzU3VuayxcclxuICB9O1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNoaXAobGVuZ3RoKSB7XHJcbiAgY29uc3Qgc2hpcExlbmd0aCA9IGxlbmd0aDtcclxuICBjb25zdCBzaGlwUG9zaXRpb25zID0ge307XHJcbiAgbGV0IHNoaXBDb29yZGluYXRlcyA9IFtcImVtcHR5XCJdO1xyXG5cclxuICBmdW5jdGlvbiBjcmVhdGVTaGlwUG9zaXRpb25zKHNoaXBMZW5ndGgpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHNoaXBQb3NpdGlvbnNbaV0gPSBcIm5vdCBoaXRcIjtcclxuICAgIH1cclxuICAgIHJldHVybiBzaGlwUG9zaXRpb25zO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlU2hpcFBvc2l0aW9ucyhsZW5ndGgpO1xyXG5cclxuICBmdW5jdGlvbiBoaXQoKSB7XHJcbiAgICBmb3IgKGNvbnN0IHBvc2l0aW9uIG9mIE9iamVjdC5rZXlzKHNoaXBQb3NpdGlvbnMpKSB7XHJcbiAgICAgIGlmIChzaGlwUG9zaXRpb25zW3Bvc2l0aW9uXSA9PSBcIm5vdCBoaXRcIikge1xyXG4gICAgICAgIHNoaXBQb3NpdGlvbnNbcG9zaXRpb25dID0gXCJoaXRcIjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaXNTdW5rID0gZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgcG9zaXRpb25WYWx1ZXMgPSBPYmplY3QudmFsdWVzKHNoaXBQb3NpdGlvbnMpO1xyXG4gICAgaWYgKHBvc2l0aW9uVmFsdWVzLmluY2x1ZGVzKFwibm90IGhpdFwiKSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9O1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgc2hpcExlbmd0aCxcclxuICAgIHNoaXBQb3NpdGlvbnMsXHJcbiAgICBzaGlwQ29vcmRpbmF0ZXMsXHJcbiAgICBoaXQsXHJcbiAgICBpc1N1bmssXHJcbiAgfTtcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=