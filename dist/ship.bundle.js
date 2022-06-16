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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/gameplay/ship.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hpcC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixnQkFBZ0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9nYW1lcGxheS9zaGlwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNoaXAobGVuZ3RoKSB7XHJcbiAgY29uc3Qgc2hpcExlbmd0aCA9IGxlbmd0aDtcclxuICBjb25zdCBzaGlwUG9zaXRpb25zID0ge307XHJcbiAgbGV0IHNoaXBDb29yZGluYXRlcyA9IFtcImVtcHR5XCJdO1xyXG5cclxuICBmdW5jdGlvbiBjcmVhdGVTaGlwUG9zaXRpb25zKHNoaXBMZW5ndGgpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHNoaXBQb3NpdGlvbnNbaV0gPSBcIm5vdCBoaXRcIjtcclxuICAgIH1cclxuICAgIHJldHVybiBzaGlwUG9zaXRpb25zO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlU2hpcFBvc2l0aW9ucyhsZW5ndGgpO1xyXG5cclxuICBmdW5jdGlvbiBoaXQoKSB7XHJcbiAgICBmb3IgKGNvbnN0IHBvc2l0aW9uIG9mIE9iamVjdC5rZXlzKHNoaXBQb3NpdGlvbnMpKSB7XHJcbiAgICAgIGlmIChzaGlwUG9zaXRpb25zW3Bvc2l0aW9uXSA9PSBcIm5vdCBoaXRcIikge1xyXG4gICAgICAgIHNoaXBQb3NpdGlvbnNbcG9zaXRpb25dID0gXCJoaXRcIjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaXNTdW5rID0gZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgcG9zaXRpb25WYWx1ZXMgPSBPYmplY3QudmFsdWVzKHNoaXBQb3NpdGlvbnMpO1xyXG4gICAgaWYgKHBvc2l0aW9uVmFsdWVzLmluY2x1ZGVzKFwibm90IGhpdFwiKSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9O1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgc2hpcExlbmd0aCxcclxuICAgIHNoaXBQb3NpdGlvbnMsXHJcbiAgICBzaGlwQ29vcmRpbmF0ZXMsXHJcbiAgICBoaXQsXHJcbiAgICBpc1N1bmssXHJcbiAgfTtcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=