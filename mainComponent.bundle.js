"use strict";
(self["webpackChunkodin_battleship"] = self["webpackChunkodin_battleship"] || []).push([["mainComponent"],{

/***/ "./src/initial-components/main-components.js":
/*!***************************************************!*\
  !*** ./src/initial-components/main-components.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function mainComponents() {
  const main = document.createElement("main");

  const boardPlusButton = document.createElement("div");
  const placementBoard = document.createElement("div");
  placementBoard.className = "gameboard";
  placementBoard.id = "placement-board";
  boardPlusButton.appendChild(placementBoard);

  const boardButtonsDiv = document.createElement("div");
  boardButtonsDiv.className = "board-buttons";
  const randomizeButton = document.createElement("button");
  randomizeButton.id = "randomize-ships";
  randomizeButton.innerHTML = "Random Board";
  const startButton = document.createElement("button");
  startButton.id = "start-button";
  startButton.innerHTML = "Start Game";
  boardButtonsDiv.append(startButton, randomizeButton);
  boardPlusButton.appendChild(boardButtonsDiv);

  main.appendChild(boardPlusButton);

  const shipContainer = document.createElement("div");
  shipContainer.id = "ship-container";
  shipContainer.className = "ship-container";
  main.appendChild(shipContainer);

  return {
    main,
    boardPlusButton,
    startButton,
    randomizeButton,
    shipContainer,
    placementBoard,
  };
})());


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/initial-components/main-components.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbkNvbXBvbmVudC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLGlFQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEdBQUcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9pbml0aWFsLWNvbXBvbmVudHMvbWFpbi1jb21wb25lbnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiBtYWluQ29tcG9uZW50cygpIHtcclxuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XHJcblxyXG4gIGNvbnN0IGJvYXJkUGx1c0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgcGxhY2VtZW50Qm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHBsYWNlbWVudEJvYXJkLmNsYXNzTmFtZSA9IFwiZ2FtZWJvYXJkXCI7XHJcbiAgcGxhY2VtZW50Qm9hcmQuaWQgPSBcInBsYWNlbWVudC1ib2FyZFwiO1xyXG4gIGJvYXJkUGx1c0J1dHRvbi5hcHBlbmRDaGlsZChwbGFjZW1lbnRCb2FyZCk7XHJcblxyXG4gIGNvbnN0IGJvYXJkQnV0dG9uc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgYm9hcmRCdXR0b25zRGl2LmNsYXNzTmFtZSA9IFwiYm9hcmQtYnV0dG9uc1wiO1xyXG4gIGNvbnN0IHJhbmRvbWl6ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgcmFuZG9taXplQnV0dG9uLmlkID0gXCJyYW5kb21pemUtc2hpcHNcIjtcclxuICByYW5kb21pemVCdXR0b24uaW5uZXJIVE1MID0gXCJSYW5kb20gQm9hcmRcIjtcclxuICBjb25zdCBzdGFydEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgc3RhcnRCdXR0b24uaWQgPSBcInN0YXJ0LWJ1dHRvblwiO1xyXG4gIHN0YXJ0QnV0dG9uLmlubmVySFRNTCA9IFwiU3RhcnQgR2FtZVwiO1xyXG4gIGJvYXJkQnV0dG9uc0Rpdi5hcHBlbmQoc3RhcnRCdXR0b24sIHJhbmRvbWl6ZUJ1dHRvbik7XHJcbiAgYm9hcmRQbHVzQnV0dG9uLmFwcGVuZENoaWxkKGJvYXJkQnV0dG9uc0Rpdik7XHJcblxyXG4gIG1haW4uYXBwZW5kQ2hpbGQoYm9hcmRQbHVzQnV0dG9uKTtcclxuXHJcbiAgY29uc3Qgc2hpcENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgc2hpcENvbnRhaW5lci5pZCA9IFwic2hpcC1jb250YWluZXJcIjtcclxuICBzaGlwQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwic2hpcC1jb250YWluZXJcIjtcclxuICBtYWluLmFwcGVuZENoaWxkKHNoaXBDb250YWluZXIpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgbWFpbixcclxuICAgIGJvYXJkUGx1c0J1dHRvbixcclxuICAgIHN0YXJ0QnV0dG9uLFxyXG4gICAgcmFuZG9taXplQnV0dG9uLFxyXG4gICAgc2hpcENvbnRhaW5lcixcclxuICAgIHBsYWNlbWVudEJvYXJkLFxyXG4gIH07XHJcbn0pKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==