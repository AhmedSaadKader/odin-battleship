"use strict";
(self["webpackChunkodin_battleship"] = self["webpackChunkodin_battleship"] || []).push([["updateGameboardInitial"],{

/***/ "./src/initial-components/updateGameboardInitial.js":
/*!**********************************************************!*\
  !*** ./src/initial-components/updateGameboardInitial.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateUI)
/* harmony export */ });
function updateUI(PlacedShip) {
  function updateGameBoard(gameboard, gameboardIDList) {
    gameboardIDList.forEach((id) => {
      if (gameboard[id] !== "empty") {
        const cell = document.getElementById(id);
        if (gameboard[id].shipLength === 1) {
          cell.className = "ship-unit ship-unit-1";
        } else if (gameboard[id].shipLength === 2) {
          cell.className = "ship-unit ship-unit-2";
        } else if (gameboard[id].shipLength === 3) {
          cell.className = "ship-unit ship-unit-3";
        } else if (gameboard[id].shipLength === 4) {
          cell.className = "ship-unit ship-unit-4";
        }
      }
    });
  }

  function updateShipContainer(PlacedShip) {
    PlacedShip.parentElement.removeChild(PlacedShip);
  }

  return {
    updateGameBoard,
    updateShipContainer,
  };
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/initial-components/updateGameboardInitial.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlR2FtZWJvYXJkSW5pdGlhbC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2luaXRpYWwtY29tcG9uZW50cy91cGRhdGVHYW1lYm9hcmRJbml0aWFsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVwZGF0ZVVJKFBsYWNlZFNoaXApIHtcclxuICBmdW5jdGlvbiB1cGRhdGVHYW1lQm9hcmQoZ2FtZWJvYXJkLCBnYW1lYm9hcmRJRExpc3QpIHtcclxuICAgIGdhbWVib2FyZElETGlzdC5mb3JFYWNoKChpZCkgPT4ge1xyXG4gICAgICBpZiAoZ2FtZWJvYXJkW2lkXSAhPT0gXCJlbXB0eVwiKSB7XHJcbiAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcclxuICAgICAgICBpZiAoZ2FtZWJvYXJkW2lkXS5zaGlwTGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICBjZWxsLmNsYXNzTmFtZSA9IFwic2hpcC11bml0IHNoaXAtdW5pdC0xXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChnYW1lYm9hcmRbaWRdLnNoaXBMZW5ndGggPT09IDIpIHtcclxuICAgICAgICAgIGNlbGwuY2xhc3NOYW1lID0gXCJzaGlwLXVuaXQgc2hpcC11bml0LTJcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKGdhbWVib2FyZFtpZF0uc2hpcExlbmd0aCA9PT0gMykge1xyXG4gICAgICAgICAgY2VsbC5jbGFzc05hbWUgPSBcInNoaXAtdW5pdCBzaGlwLXVuaXQtM1wiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZ2FtZWJvYXJkW2lkXS5zaGlwTGVuZ3RoID09PSA0KSB7XHJcbiAgICAgICAgICBjZWxsLmNsYXNzTmFtZSA9IFwic2hpcC11bml0IHNoaXAtdW5pdC00XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHVwZGF0ZVNoaXBDb250YWluZXIoUGxhY2VkU2hpcCkge1xyXG4gICAgUGxhY2VkU2hpcC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKFBsYWNlZFNoaXApO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHVwZGF0ZUdhbWVCb2FyZCxcclxuICAgIHVwZGF0ZVNoaXBDb250YWluZXIsXHJcbiAgfTtcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=