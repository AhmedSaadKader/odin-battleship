"use strict";
(self["webpackChunkodin_battleship"] = self["webpackChunkodin_battleship"] || []).push([["updateBoards"],{

/***/ "./src/components/update-boards.js":
/*!*****************************************!*\
  !*** ./src/components/update-boards.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateBoards)
/* harmony export */ });
function updateBoards() {
  function updatePlayerBoard(gameboard, gameboardIDList) {
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

  function updateComputerBoard() {}

  return {
    updatePlayerBoard,
    updateComputerBoard,
  };
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/components/update-boards.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlQm9hcmRzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3VwZGF0ZS1ib2FyZHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXBkYXRlQm9hcmRzKCkge1xyXG4gIGZ1bmN0aW9uIHVwZGF0ZVBsYXllckJvYXJkKGdhbWVib2FyZCwgZ2FtZWJvYXJkSURMaXN0KSB7XHJcbiAgICBnYW1lYm9hcmRJRExpc3QuZm9yRWFjaCgoaWQpID0+IHtcclxuICAgICAgaWYgKGdhbWVib2FyZFtpZF0gIT09IFwiZW1wdHlcIikge1xyXG4gICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XHJcbiAgICAgICAgaWYgKGdhbWVib2FyZFtpZF0uc2hpcExlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgY2VsbC5jbGFzc05hbWUgPSBcInNoaXAtdW5pdCBzaGlwLXVuaXQtMVwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZ2FtZWJvYXJkW2lkXS5zaGlwTGVuZ3RoID09PSAyKSB7XHJcbiAgICAgICAgICBjZWxsLmNsYXNzTmFtZSA9IFwic2hpcC11bml0IHNoaXAtdW5pdC0yXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChnYW1lYm9hcmRbaWRdLnNoaXBMZW5ndGggPT09IDMpIHtcclxuICAgICAgICAgIGNlbGwuY2xhc3NOYW1lID0gXCJzaGlwLXVuaXQgc2hpcC11bml0LTNcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKGdhbWVib2FyZFtpZF0uc2hpcExlbmd0aCA9PT0gNCkge1xyXG4gICAgICAgICAgY2VsbC5jbGFzc05hbWUgPSBcInNoaXAtdW5pdCBzaGlwLXVuaXQtNFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB1cGRhdGVDb21wdXRlckJvYXJkKCkge31cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHVwZGF0ZVBsYXllckJvYXJkLFxyXG4gICAgdXBkYXRlQ29tcHV0ZXJCb2FyZCxcclxuICB9O1xyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==