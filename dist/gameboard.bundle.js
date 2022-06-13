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
    let nextCoordinates = chooseNextCoordinates(
      ship,
      startingCoordinates,
      direction
    );
    if (checkIfCoordinatesListIsAvailable(nextCoordinates) === true) {
      nextCoordinates.forEach((coordinate) => {
        board[coordinate] = ship;
      });
      return board;
    } else if (checkIfCoordinatesListIsAvailable(nextCoordinates) === false) {
      return "These spots are not available";
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
    const shipsList = Object.values(ships);
    for (let i = 0; i < shipsList.length; i++) {
      const ship = shipsList[i];
      let random = chooseRandomCoordinatesAndDirection();
      while (
        placeShipOnBoard(ship, random[0], random[1]) ===
        "These spots are not available"
      ) {
        random = chooseRandomCoordinatesAndDirection();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZWJvYXJkLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUMxQjtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlDQUFpQztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkNBQUk7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBLG9CQUFvQixFQUFFO0FBQ3RCO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQSxvQkFBb0IsRUFBRTtBQUN0QjtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0Esb0JBQW9CLEVBQUU7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHFCQUFxQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLHNCQUFzQixxQkFBcUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHNCQUFzQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTCxvQkFBb0IsZ0NBQWdDO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzFMZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGdCQUFnQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9nYW1lcGxheS9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2dhbWVwbGF5L3NoaXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNoaXAgZnJvbSBcIi4vc2hpcFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2FtZUJvYXJkKCkge1xyXG4gIGNvbnN0IFZFUlRJQ0FMX0NPT1JESU5BVEVTID0gW1xyXG4gICAgXCIwXCIsXHJcbiAgICBcIjFcIixcclxuICAgIFwiMlwiLFxyXG4gICAgXCIzXCIsXHJcbiAgICBcIjRcIixcclxuICAgIFwiNVwiLFxyXG4gICAgXCI2XCIsXHJcbiAgICBcIjdcIixcclxuICAgIFwiOFwiLFxyXG4gICAgXCI5XCIsXHJcbiAgXTtcclxuICBjb25zdCBIT1JJWk9OVEFMX0NPT1JESU5BVEVTID0gW1xyXG4gICAgXCJBXCIsXHJcbiAgICBcIkJcIixcclxuICAgIFwiQ1wiLFxyXG4gICAgXCJEXCIsXHJcbiAgICBcIkVcIixcclxuICAgIFwiRlwiLFxyXG4gICAgXCJHXCIsXHJcbiAgICBcIkhcIixcclxuICAgIFwiSVwiLFxyXG4gICAgXCJKXCIsXHJcbiAgXTtcclxuXHJcbiAgY29uc3QgYm9hcmQgPSB7fTtcclxuICBjb25zdCBhdHRhY2tlZFNwb3RzID0gW107XHJcblxyXG4gIGZ1bmN0aW9uIGNyZWF0ZUJvYXJkKCkge1xyXG4gICAgSE9SSVpPTlRBTF9DT09SRElOQVRFUy5mb3JFYWNoKChsZXR0ZXIpID0+IHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBWRVJUSUNBTF9DT09SRElOQVRFUy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCBudW1iZXIgPSBWRVJUSUNBTF9DT09SRElOQVRFU1tpXTtcclxuICAgICAgICBjb25zdCBrZXkgPSBsZXR0ZXIgKyBudW1iZXI7XHJcbiAgICAgICAgYm9hcmRba2V5XSA9IFwiZW1wdHlcIjtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVCb2FyZCgpO1xyXG5cclxuICBjb25zdCBzaGlwcyA9IHt9O1xyXG4gIGZ1bmN0aW9uIGNyZWF0ZU5ld1NoaXAobGVuZ3RoKSB7XHJcbiAgICBjb25zdCBzaGlwID0gbmV3IFNoaXAobGVuZ3RoKTtcclxuICAgIHJldHVybiBzaGlwO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY3JlYXRlQWxsU2hpcHMoKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xyXG4gICAgICBjb25zdCBzaGlwID0gY3JlYXRlTmV3U2hpcCgxKTtcclxuICAgICAgc2hpcHNbYHNoaXBfJHtpfV9sZW5ndGhfMWBdID0gc2hpcDtcclxuICAgIH1cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHNoaXAgPSBjcmVhdGVOZXdTaGlwKDIpO1xyXG4gICAgICBzaGlwc1tgc2hpcF8ke2l9X2xlbmd0aF8yYF0gPSBzaGlwO1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcclxuICAgICAgY29uc3Qgc2hpcCA9IGNyZWF0ZU5ld1NoaXAoMyk7XHJcbiAgICAgIHNoaXBzW2BzaGlwXyR7aX1fbGVuZ3RoXzNgXSA9IHNoaXA7XHJcbiAgICB9XHJcbiAgICBjb25zdCBsb25nZXN0U2hpcCA9IGNyZWF0ZU5ld1NoaXAoNCk7XHJcbiAgICBzaGlwc1tgc2hpcF8wX2xlbmd0aF80YF0gPSBsb25nZXN0U2hpcDtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUFsbFNoaXBzKCk7XHJcblxyXG4gIGZ1bmN0aW9uIGNob29zZU5leHRDb29yZGluYXRlcyhzaGlwLCBzdGFydGluZ0Nvb3JkaW5hdGVzLCBkaXJlY3Rpb24pIHtcclxuICAgIGxldCBuZXh0Q29vcmRpbmF0ZUxpc3QgPSBbXTtcclxuICAgIGlmIChkaXJlY3Rpb24gPT09IFwiaG9yaXpvbnRhbFwiKSB7XHJcbiAgICAgIGNvbnN0IGxldHRlckNvZGUgPSBzdGFydGluZ0Nvb3JkaW5hdGVzLmNoYXJDb2RlQXQoMCk7XHJcbiAgICAgIGNvbnN0IG51bWJlciA9IHN0YXJ0aW5nQ29vcmRpbmF0ZXNbMV07XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5zaGlwTGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBuZXh0TGV0dGVyQ29kZSA9IGxldHRlckNvZGUgKyBpO1xyXG4gICAgICAgIGNvbnN0IG5leHRMZXR0ZXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKG5leHRMZXR0ZXJDb2RlKTtcclxuICAgICAgICBjb25zdCBuZXh0Q29vcmRpbmF0ZSA9IG5leHRMZXR0ZXIgKyBudW1iZXI7XHJcbiAgICAgICAgbmV4dENvb3JkaW5hdGVMaXN0LnB1c2gobmV4dENvb3JkaW5hdGUpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBuZXh0Q29vcmRpbmF0ZUxpc3Q7XHJcbiAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XHJcbiAgICAgIGNvbnN0IGxldHRlciA9IHN0YXJ0aW5nQ29vcmRpbmF0ZXNbMF07XHJcbiAgICAgIGNvbnN0IHN0YXJ0aW5nTnVtYmVyID0gc3RhcnRpbmdDb29yZGluYXRlc1sxXTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLnNoaXBMZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IG5leHROdW1iZXIgPSBwYXJzZUludChzdGFydGluZ051bWJlcikgKyBpO1xyXG4gICAgICAgIGNvbnN0IG5leHRDb29yZGluYXRlID0gbGV0dGVyICsgbmV4dE51bWJlcjtcclxuICAgICAgICBuZXh0Q29vcmRpbmF0ZUxpc3QucHVzaChuZXh0Q29vcmRpbmF0ZSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG5leHRDb29yZGluYXRlTGlzdDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNoZWNrSWZDb29yZGluYXRlc0xpc3RJc0F2YWlsYWJsZShuZXh0Q29vcmRpbmF0ZXMpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmV4dENvb3JkaW5hdGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGxldCBjb29yZGluYXRlID0gbmV4dENvb3JkaW5hdGVzW2ldO1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgYm9hcmRbY29vcmRpbmF0ZV0gIT09IFwiZW1wdHlcIiAmJlxyXG4gICAgICAgIE9iamVjdC5rZXlzKGJvYXJkKS5pbmNsdWRlcyhjb29yZGluYXRlKVxyXG4gICAgICApIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH0gZWxzZSBpZiAoT2JqZWN0LmtleXMoYm9hcmQpLmluY2x1ZGVzKGNvb3JkaW5hdGUpID09PSBmYWxzZSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBwbGFjZVNoaXBPbkJvYXJkKHNoaXAsIHN0YXJ0aW5nQ29vcmRpbmF0ZXMsIGRpcmVjdGlvbikge1xyXG4gICAgbGV0IG5leHRDb29yZGluYXRlcyA9IGNob29zZU5leHRDb29yZGluYXRlcyhcclxuICAgICAgc2hpcCxcclxuICAgICAgc3RhcnRpbmdDb29yZGluYXRlcyxcclxuICAgICAgZGlyZWN0aW9uXHJcbiAgICApO1xyXG4gICAgaWYgKGNoZWNrSWZDb29yZGluYXRlc0xpc3RJc0F2YWlsYWJsZShuZXh0Q29vcmRpbmF0ZXMpID09PSB0cnVlKSB7XHJcbiAgICAgIG5leHRDb29yZGluYXRlcy5mb3JFYWNoKChjb29yZGluYXRlKSA9PiB7XHJcbiAgICAgICAgYm9hcmRbY29vcmRpbmF0ZV0gPSBzaGlwO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGJvYXJkO1xyXG4gICAgfSBlbHNlIGlmIChjaGVja0lmQ29vcmRpbmF0ZXNMaXN0SXNBdmFpbGFibGUobmV4dENvb3JkaW5hdGVzKSA9PT0gZmFsc2UpIHtcclxuICAgICAgcmV0dXJuIFwiVGhlc2Ugc3BvdHMgYXJlIG5vdCBhdmFpbGFibGVcIjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNob29zZVJhbmRvbUNvb3JkaW5hdGVzQW5kRGlyZWN0aW9uKCkge1xyXG4gICAgY29uc3QgZGlyZWN0aW9ucyA9IFtcInZlcnRpY2FsXCIsIFwiaG9yaXpvbnRhbFwiXTtcclxuICAgIGNvbnN0IGJvYXJkS2V5cyA9IE9iamVjdC5rZXlzKGJvYXJkKTtcclxuICAgIGNvbnN0IHJhbmRvbUNvb3JkaW5hdGUgPVxyXG4gICAgICBib2FyZEtleXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYm9hcmRLZXlzLmxlbmd0aCldO1xyXG4gICAgY29uc3QgcmFuZG9tRGlyZWN0aW9uID1cclxuICAgICAgZGlyZWN0aW9uc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBkaXJlY3Rpb25zLmxlbmd0aCldO1xyXG4gICAgcmV0dXJuIFtyYW5kb21Db29yZGluYXRlLCByYW5kb21EaXJlY3Rpb25dO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcGxhY2VTaGlwc1JhbmRvbWx5T25Cb2FyZCgpIHtcclxuICAgIGNvbnN0IHNoaXBzTGlzdCA9IE9iamVjdC52YWx1ZXMoc2hpcHMpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwc0xpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3Qgc2hpcCA9IHNoaXBzTGlzdFtpXTtcclxuICAgICAgbGV0IHJhbmRvbSA9IGNob29zZVJhbmRvbUNvb3JkaW5hdGVzQW5kRGlyZWN0aW9uKCk7XHJcbiAgICAgIHdoaWxlIChcclxuICAgICAgICBwbGFjZVNoaXBPbkJvYXJkKHNoaXAsIHJhbmRvbVswXSwgcmFuZG9tWzFdKSA9PT1cclxuICAgICAgICBcIlRoZXNlIHNwb3RzIGFyZSBub3QgYXZhaWxhYmxlXCJcclxuICAgICAgKSB7XHJcbiAgICAgICAgcmFuZG9tID0gY2hvb3NlUmFuZG9tQ29vcmRpbmF0ZXNBbmREaXJlY3Rpb24oKTtcclxuICAgICAgfVxyXG4gICAgICBwbGFjZVNoaXBPbkJvYXJkKHNoaXAsIHJhbmRvbVswXSwgcmFuZG9tWzFdKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZSkge1xyXG4gICAgaWYgKGF0dGFja2VkU3BvdHMuaW5jbHVkZXMoY29vcmRpbmF0ZSkgPT09IHRydWUpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKGJvYXJkW2Nvb3JkaW5hdGVdICE9PSBcImVtcHR5XCIgJiYgYm9hcmRbY29vcmRpbmF0ZV0gIT09IFwibWlzc2VkIHNob3RcIikge1xyXG4gICAgICBjb25zdCBzaGlwID0gYm9hcmRbY29vcmRpbmF0ZV07XHJcbiAgICAgIHNoaXAuaGl0KCk7XHJcbiAgICB9IGVsc2UgaWYgKGJvYXJkW2Nvb3JkaW5hdGVdID09IFwiZW1wdHlcIikge1xyXG4gICAgICBib2FyZFtjb29yZGluYXRlXSA9IFwibWlzc2VkIHNob3RcIjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGNoZWNrSWZBbGxTaGlwc1N1bmsgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBzaGlwc09iamVjdHMgPSBPYmplY3QudmFsdWVzKHNoaXBzKTtcclxuICAgIGNvbnN0IHNoaXBQb3NpdGlvbnNTdGF0dXMgPSBbXTtcclxuICAgIHNoaXBzT2JqZWN0cy5mb3JFYWNoKChvYmplY3QpID0+IHtcclxuICAgICAgY29uc3Qgc3RhdHVzID0gT2JqZWN0LnZhbHVlcyhvYmplY3Quc2hpcFBvc2l0aW9ucyk7XHJcbiAgICAgIHN0YXR1cy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgc2hpcFBvc2l0aW9uc1N0YXR1cy5wdXNoKGl0ZW0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwUG9zaXRpb25zU3RhdHVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHBvc2l0aW9uID0gc2hpcFBvc2l0aW9uc1N0YXR1c1tpXTtcclxuICAgICAgaWYgKHBvc2l0aW9uID09PSBcIm5vdCBoaXRcIikge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGJvYXJkLFxyXG4gICAgc2hpcHMsXHJcbiAgICBwbGFjZVNoaXBPbkJvYXJkLFxyXG4gICAgcGxhY2VTaGlwc1JhbmRvbWx5T25Cb2FyZCxcclxuICAgIHJlY2VpdmVBdHRhY2ssXHJcbiAgICBjaGVja0lmQWxsU2hpcHNTdW5rLFxyXG4gIH07XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2hpcChsZW5ndGgpIHtcclxuICBjb25zdCBzaGlwTGVuZ3RoID0gbGVuZ3RoO1xyXG4gIGNvbnN0IHNoaXBQb3NpdGlvbnMgPSB7fTtcclxuXHJcbiAgZnVuY3Rpb24gY3JlYXRlU2hpcFBvc2l0aW9ucyhzaGlwTGVuZ3RoKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkrKykge1xyXG4gICAgICBzaGlwUG9zaXRpb25zW2ldID0gXCJub3QgaGl0XCI7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc2hpcFBvc2l0aW9ucztcclxuICB9XHJcblxyXG4gIGNyZWF0ZVNoaXBQb3NpdGlvbnMobGVuZ3RoKTtcclxuXHJcbiAgZnVuY3Rpb24gaGl0KCkge1xyXG4gICAgZm9yIChjb25zdCBwb3NpdGlvbiBvZiBPYmplY3Qua2V5cyhzaGlwUG9zaXRpb25zKSkge1xyXG4gICAgICBpZiAoc2hpcFBvc2l0aW9uc1twb3NpdGlvbl0gPT0gXCJub3QgaGl0XCIpIHtcclxuICAgICAgICBzaGlwUG9zaXRpb25zW3Bvc2l0aW9uXSA9IFwiaGl0XCI7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGlzU3VuayA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IHBvc2l0aW9uVmFsdWVzID0gT2JqZWN0LnZhbHVlcyhzaGlwUG9zaXRpb25zKTtcclxuICAgIGlmIChwb3NpdGlvblZhbHVlcy5pbmNsdWRlcyhcIm5vdCBoaXRcIikpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHNoaXBMZW5ndGgsXHJcbiAgICBzaGlwUG9zaXRpb25zLFxyXG4gICAgaGl0LFxyXG4gICAgaXNTdW5rLFxyXG4gIH07XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9