"use strict";
(self["webpackChunkodin_battleship"] = self["webpackChunkodin_battleship"] || []).push([["createBoards"],{

/***/ "./src/components/create-boards.js":
/*!*****************************************!*\
  !*** ./src/components/create-boards.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createBoards)
/* harmony export */ });
function createBoards() {
  function createPlayerBoard(boardIDs, boardDiv, gameboard) {
    boardIDs.forEach((id) => {
      const cell = document.createElement("div");
      cell.dataset.coordinates = id;
      cell.className = "player-board";
      cell.id = `player-${id}`;
      if (gameboard[id] !== "empty") {
        if (gameboard[id].shipLength === 1) {
          cell.className = "player-board ship-unit ship-unit-1";
        } else if (gameboard[id].shipLength === 2) {
          cell.className = "player-board ship-unit ship-unit-2";
        } else if (gameboard[id].shipLength === 3) {
          cell.className = "player-board ship-unit ship-unit-3";
        } else if (gameboard[id].shipLength === 4) {
          cell.className = "player-board ship-unit ship-unit-4";
        }
      }
      boardDiv.appendChild(cell);
      return boardDiv;
    });
  }

  function createComputerBoard(boardIDs, boardDiv, gameboard) {
    boardIDs.forEach((id) => {
      const cell = document.createElement("div");
      cell.className = "computer-board";
      cell.dataset.coordinates = id;
      cell.id = `computer-${id}`;
      // if (gameboard[id] !== "empty") {
      //   if (gameboard[id].shipLength === 1) {
      //     cell.className = "computer-board ship-unit ship-unit-1";
      //   } else if (gameboard[id].shipLength === 2) {
      //     cell.className = "computer-board ship-unit ship-unit-2";
      //   } else if (gameboard[id].shipLength === 3) {
      //     cell.className = "computer-board ship-unit ship-unit-3";
      //   } else if (gameboard[id].shipLength === 4) {
      //     cell.className = "computer-board ship-unit ship-unit-4";
      //   }
      // }
      boardDiv.appendChild(cell);
    });
    return boardDiv;
  }

  return { createPlayerBoard, createComputerBoard };
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/components/create-boards.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlQm9hcmRzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLEdBQUc7QUFDN0I7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsR0FBRztBQUMvQjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxhQUFhO0FBQ2I7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvY3JlYXRlLWJvYXJkcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVCb2FyZHMoKSB7XHJcbiAgZnVuY3Rpb24gY3JlYXRlUGxheWVyQm9hcmQoYm9hcmRJRHMsIGJvYXJkRGl2LCBnYW1lYm9hcmQpIHtcclxuICAgIGJvYXJkSURzLmZvckVhY2goKGlkKSA9PiB7XHJcbiAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBjZWxsLmRhdGFzZXQuY29vcmRpbmF0ZXMgPSBpZDtcclxuICAgICAgY2VsbC5jbGFzc05hbWUgPSBcInBsYXllci1ib2FyZFwiO1xyXG4gICAgICBjZWxsLmlkID0gYHBsYXllci0ke2lkfWA7XHJcbiAgICAgIGlmIChnYW1lYm9hcmRbaWRdICE9PSBcImVtcHR5XCIpIHtcclxuICAgICAgICBpZiAoZ2FtZWJvYXJkW2lkXS5zaGlwTGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICBjZWxsLmNsYXNzTmFtZSA9IFwicGxheWVyLWJvYXJkIHNoaXAtdW5pdCBzaGlwLXVuaXQtMVwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZ2FtZWJvYXJkW2lkXS5zaGlwTGVuZ3RoID09PSAyKSB7XHJcbiAgICAgICAgICBjZWxsLmNsYXNzTmFtZSA9IFwicGxheWVyLWJvYXJkIHNoaXAtdW5pdCBzaGlwLXVuaXQtMlwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZ2FtZWJvYXJkW2lkXS5zaGlwTGVuZ3RoID09PSAzKSB7XHJcbiAgICAgICAgICBjZWxsLmNsYXNzTmFtZSA9IFwicGxheWVyLWJvYXJkIHNoaXAtdW5pdCBzaGlwLXVuaXQtM1wiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZ2FtZWJvYXJkW2lkXS5zaGlwTGVuZ3RoID09PSA0KSB7XHJcbiAgICAgICAgICBjZWxsLmNsYXNzTmFtZSA9IFwicGxheWVyLWJvYXJkIHNoaXAtdW5pdCBzaGlwLXVuaXQtNFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBib2FyZERpdi5hcHBlbmRDaGlsZChjZWxsKTtcclxuICAgICAgcmV0dXJuIGJvYXJkRGl2O1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjcmVhdGVDb21wdXRlckJvYXJkKGJvYXJkSURzLCBib2FyZERpdiwgZ2FtZWJvYXJkKSB7XHJcbiAgICBib2FyZElEcy5mb3JFYWNoKChpZCkgPT4ge1xyXG4gICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgY2VsbC5jbGFzc05hbWUgPSBcImNvbXB1dGVyLWJvYXJkXCI7XHJcbiAgICAgIGNlbGwuZGF0YXNldC5jb29yZGluYXRlcyA9IGlkO1xyXG4gICAgICBjZWxsLmlkID0gYGNvbXB1dGVyLSR7aWR9YDtcclxuICAgICAgLy8gaWYgKGdhbWVib2FyZFtpZF0gIT09IFwiZW1wdHlcIikge1xyXG4gICAgICAvLyAgIGlmIChnYW1lYm9hcmRbaWRdLnNoaXBMZW5ndGggPT09IDEpIHtcclxuICAgICAgLy8gICAgIGNlbGwuY2xhc3NOYW1lID0gXCJjb21wdXRlci1ib2FyZCBzaGlwLXVuaXQgc2hpcC11bml0LTFcIjtcclxuICAgICAgLy8gICB9IGVsc2UgaWYgKGdhbWVib2FyZFtpZF0uc2hpcExlbmd0aCA9PT0gMikge1xyXG4gICAgICAvLyAgICAgY2VsbC5jbGFzc05hbWUgPSBcImNvbXB1dGVyLWJvYXJkIHNoaXAtdW5pdCBzaGlwLXVuaXQtMlwiO1xyXG4gICAgICAvLyAgIH0gZWxzZSBpZiAoZ2FtZWJvYXJkW2lkXS5zaGlwTGVuZ3RoID09PSAzKSB7XHJcbiAgICAgIC8vICAgICBjZWxsLmNsYXNzTmFtZSA9IFwiY29tcHV0ZXItYm9hcmQgc2hpcC11bml0IHNoaXAtdW5pdC0zXCI7XHJcbiAgICAgIC8vICAgfSBlbHNlIGlmIChnYW1lYm9hcmRbaWRdLnNoaXBMZW5ndGggPT09IDQpIHtcclxuICAgICAgLy8gICAgIGNlbGwuY2xhc3NOYW1lID0gXCJjb21wdXRlci1ib2FyZCBzaGlwLXVuaXQgc2hpcC11bml0LTRcIjtcclxuICAgICAgLy8gICB9XHJcbiAgICAgIC8vIH1cclxuICAgICAgYm9hcmREaXYuYXBwZW5kQ2hpbGQoY2VsbCk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBib2FyZERpdjtcclxuICB9XHJcblxyXG4gIHJldHVybiB7IGNyZWF0ZVBsYXllckJvYXJkLCBjcmVhdGVDb21wdXRlckJvYXJkIH07XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9