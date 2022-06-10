"use strict";
(self["webpackChunkodin_battleship"] = self["webpackChunkodin_battleship"] || []).push([["ship"],{

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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/gameplay/ship.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hpcC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsZ0JBQWdCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2dhbWVwbGF5L3NoaXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2hpcChsZW5ndGgpIHtcclxuICBjb25zdCBzaGlwTGVuZ3RoID0gbGVuZ3RoO1xyXG4gIGNvbnN0IHNoaXBQb3NpdGlvbnMgPSB7fTtcclxuXHJcbiAgZnVuY3Rpb24gY3JlYXRlU2hpcFBvc2l0aW9ucyhzaGlwTGVuZ3RoKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkrKykge1xyXG4gICAgICBzaGlwUG9zaXRpb25zW2ldID0gXCJub3QgaGl0XCI7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc2hpcFBvc2l0aW9ucztcclxuICB9XHJcblxyXG4gIGNyZWF0ZVNoaXBQb3NpdGlvbnMobGVuZ3RoKTtcclxuXHJcbiAgZnVuY3Rpb24gaGl0KCkge1xyXG4gICAgZm9yIChjb25zdCBwb3NpdGlvbiBvZiBPYmplY3Qua2V5cyhzaGlwUG9zaXRpb25zKSkge1xyXG4gICAgICBpZiAoc2hpcFBvc2l0aW9uc1twb3NpdGlvbl0gPT0gXCJub3QgaGl0XCIpIHtcclxuICAgICAgICBzaGlwUG9zaXRpb25zW3Bvc2l0aW9uXSA9IFwiaGl0XCI7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGlzU3VuayA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IHBvc2l0aW9uVmFsdWVzID0gT2JqZWN0LnZhbHVlcyhzaGlwUG9zaXRpb25zKTtcclxuICAgIGlmIChwb3NpdGlvblZhbHVlcy5pbmNsdWRlcyhcIm5vdCBoaXRcIikpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHNoaXBMZW5ndGgsXHJcbiAgICBzaGlwUG9zaXRpb25zLFxyXG4gICAgaGl0LFxyXG4gICAgaXNTdW5rLFxyXG4gIH07XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9