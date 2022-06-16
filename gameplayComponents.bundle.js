"use strict";
(self["webpackChunkodin_battleship"] = self["webpackChunkodin_battleship"] || []).push([["gameplayComponents"],{

/***/ "./src/components/gamePlay-components.js":
/*!***********************************************!*\
  !*** ./src/components/gamePlay-components.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ gamePlayComponents)
/* harmony export */ });
function gamePlayComponents() {
  const playerBoardDiv = document.createElement("div");
  playerBoardDiv.className = "gameboard";
  playerBoardDiv.id = "player-board";

  const computerBoardDiv = document.createElement("div");
  computerBoardDiv.className = "gameboard";
  computerBoardDiv.id = "player-board";

  return { playerBoardDiv, computerBoardDiv };
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/components/gamePlay-components.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZXBsYXlDb21wb25lbnRzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvZ2FtZVBsYXktY29tcG9uZW50cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnYW1lUGxheUNvbXBvbmVudHMoKSB7XHJcbiAgY29uc3QgcGxheWVyQm9hcmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHBsYXllckJvYXJkRGl2LmNsYXNzTmFtZSA9IFwiZ2FtZWJvYXJkXCI7XHJcbiAgcGxheWVyQm9hcmREaXYuaWQgPSBcInBsYXllci1ib2FyZFwiO1xyXG5cclxuICBjb25zdCBjb21wdXRlckJvYXJkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb21wdXRlckJvYXJkRGl2LmNsYXNzTmFtZSA9IFwiZ2FtZWJvYXJkXCI7XHJcbiAgY29tcHV0ZXJCb2FyZERpdi5pZCA9IFwicGxheWVyLWJvYXJkXCI7XHJcblxyXG4gIHJldHVybiB7IHBsYXllckJvYXJkRGl2LCBjb21wdXRlckJvYXJkRGl2IH07XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9