"use strict";
(self["webpackChunkodin_battleship"] = self["webpackChunkodin_battleship"] || []).push([["gameboardInitial"],{

/***/ "./src/initial-components/gameboard-initial.js":
/*!*****************************************************!*\
  !*** ./src/initial-components/gameboard-initial.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ gameboardInitial)
/* harmony export */ });
function gameboardInitial() {
  function createPlacementBoard(boardIDs, board) {
    boardIDs.forEach((id) => {
      const cell = document.createElement("div");
      cell.className = "board-1";
      cell.id = id;
      board.appendChild(cell);
    });
    return board;
  }

  function createPlayerShipUI(shipContainer, shipList) {
    const allShips = document.createElement("div");
    allShips.className = "all-ships";
    shipContainer.appendChild(allShips);

    for (let i = 1; i < 5; i++) {
      const shipClusters = document.createElement("div");
      shipClusters.className = "ship-cluster";
      shipClusters.id = `ship-cluster-${i}`;
      allShips.appendChild(shipClusters);
    }

    shipList.forEach((shipName) => {
      const ship = document.createElement("div");
      ship.className = "ships-full";
      ship.id = shipName;
      ship.draggable = true;
      ship.dataset.shipOrientation = "vertical";
      if (shipName.includes("length_1")) {
        ship.dataset.shipLength = 1;
        document.getElementById("ship-cluster-1").appendChild(ship);
        const shipUnit = document.createElement("div");
        shipUnit.className = "ship-unit ship-unit-1";
        ship.appendChild(shipUnit);
      } else if (shipName.includes("length_2")) {
        ship.dataset.shipLength = 2;
        document.getElementById("ship-cluster-2").appendChild(ship);
        for (let i = 0; i < 2; i++) {
          const shipUnit = document.createElement("div");
          shipUnit.className = "ship-unit ship-unit-2";
          ship.appendChild(shipUnit);
        }
      } else if (shipName.includes("length_3")) {
        ship.dataset.shipLength = 3;
        document.getElementById("ship-cluster-3").appendChild(ship);
        for (let i = 0; i < 3; i++) {
          const shipUnit = document.createElement("div");
          shipUnit.className = "ship-unit ship-unit-3";
          ship.appendChild(shipUnit);
        }
      } else if (shipName.includes("length_4")) {
        ship.dataset.shipLength = 4;
        document.getElementById("ship-cluster-4").appendChild(ship);
        for (let i = 0; i < 4; i++) {
          const shipUnit = document.createElement("div");
          shipUnit.className = "ship-unit ship-unit-4";
          ship.appendChild(shipUnit);
        }
      }
    });
    const rotate_button = document.createElement("button");
    rotate_button.className = "rotate-button";
    rotate_button.innerHTML = "Rotate";
    shipContainer.appendChild(rotate_button);
  }

  return { createPlacementBoard, createPlayerShipUI };
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/initial-components/gameboard-initial.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZWJvYXJkSW5pdGlhbC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0Esd0NBQXdDLEVBQUU7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSx3QkFBd0IsT0FBTztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0Esd0JBQXdCLE9BQU87QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLHdCQUF3QixPQUFPO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2luaXRpYWwtY29tcG9uZW50cy9nYW1lYm9hcmQtaW5pdGlhbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnYW1lYm9hcmRJbml0aWFsKCkge1xyXG4gIGZ1bmN0aW9uIGNyZWF0ZVBsYWNlbWVudEJvYXJkKGJvYXJkSURzLCBib2FyZCkge1xyXG4gICAgYm9hcmRJRHMuZm9yRWFjaCgoaWQpID0+IHtcclxuICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIGNlbGwuY2xhc3NOYW1lID0gXCJib2FyZC0xXCI7XHJcbiAgICAgIGNlbGwuaWQgPSBpZDtcclxuICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQoY2VsbCk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBib2FyZDtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNyZWF0ZVBsYXllclNoaXBVSShzaGlwQ29udGFpbmVyLCBzaGlwTGlzdCkge1xyXG4gICAgY29uc3QgYWxsU2hpcHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgYWxsU2hpcHMuY2xhc3NOYW1lID0gXCJhbGwtc2hpcHNcIjtcclxuICAgIHNoaXBDb250YWluZXIuYXBwZW5kQ2hpbGQoYWxsU2hpcHMpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgNTsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHNoaXBDbHVzdGVycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIHNoaXBDbHVzdGVycy5jbGFzc05hbWUgPSBcInNoaXAtY2x1c3RlclwiO1xyXG4gICAgICBzaGlwQ2x1c3RlcnMuaWQgPSBgc2hpcC1jbHVzdGVyLSR7aX1gO1xyXG4gICAgICBhbGxTaGlwcy5hcHBlbmRDaGlsZChzaGlwQ2x1c3RlcnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHNoaXBMaXN0LmZvckVhY2goKHNoaXBOYW1lKSA9PiB7XHJcbiAgICAgIGNvbnN0IHNoaXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBzaGlwLmNsYXNzTmFtZSA9IFwic2hpcHMtZnVsbFwiO1xyXG4gICAgICBzaGlwLmlkID0gc2hpcE5hbWU7XHJcbiAgICAgIHNoaXAuZHJhZ2dhYmxlID0gdHJ1ZTtcclxuICAgICAgc2hpcC5kYXRhc2V0LnNoaXBPcmllbnRhdGlvbiA9IFwidmVydGljYWxcIjtcclxuICAgICAgaWYgKHNoaXBOYW1lLmluY2x1ZGVzKFwibGVuZ3RoXzFcIikpIHtcclxuICAgICAgICBzaGlwLmRhdGFzZXQuc2hpcExlbmd0aCA9IDE7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaGlwLWNsdXN0ZXItMVwiKS5hcHBlbmRDaGlsZChzaGlwKTtcclxuICAgICAgICBjb25zdCBzaGlwVW5pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgc2hpcFVuaXQuY2xhc3NOYW1lID0gXCJzaGlwLXVuaXQgc2hpcC11bml0LTFcIjtcclxuICAgICAgICBzaGlwLmFwcGVuZENoaWxkKHNoaXBVbml0KTtcclxuICAgICAgfSBlbHNlIGlmIChzaGlwTmFtZS5pbmNsdWRlcyhcImxlbmd0aF8yXCIpKSB7XHJcbiAgICAgICAgc2hpcC5kYXRhc2V0LnNoaXBMZW5ndGggPSAyO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hpcC1jbHVzdGVyLTJcIikuYXBwZW5kQ2hpbGQoc2hpcCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcclxuICAgICAgICAgIGNvbnN0IHNoaXBVbml0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgIHNoaXBVbml0LmNsYXNzTmFtZSA9IFwic2hpcC11bml0IHNoaXAtdW5pdC0yXCI7XHJcbiAgICAgICAgICBzaGlwLmFwcGVuZENoaWxkKHNoaXBVbml0KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZiAoc2hpcE5hbWUuaW5jbHVkZXMoXCJsZW5ndGhfM1wiKSkge1xyXG4gICAgICAgIHNoaXAuZGF0YXNldC5zaGlwTGVuZ3RoID0gMztcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNoaXAtY2x1c3Rlci0zXCIpLmFwcGVuZENoaWxkKHNoaXApO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XHJcbiAgICAgICAgICBjb25zdCBzaGlwVW5pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICBzaGlwVW5pdC5jbGFzc05hbWUgPSBcInNoaXAtdW5pdCBzaGlwLXVuaXQtM1wiO1xyXG4gICAgICAgICAgc2hpcC5hcHBlbmRDaGlsZChzaGlwVW5pdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgaWYgKHNoaXBOYW1lLmluY2x1ZGVzKFwibGVuZ3RoXzRcIikpIHtcclxuICAgICAgICBzaGlwLmRhdGFzZXQuc2hpcExlbmd0aCA9IDQ7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaGlwLWNsdXN0ZXItNFwiKS5hcHBlbmRDaGlsZChzaGlwKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xyXG4gICAgICAgICAgY29uc3Qgc2hpcFVuaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgc2hpcFVuaXQuY2xhc3NOYW1lID0gXCJzaGlwLXVuaXQgc2hpcC11bml0LTRcIjtcclxuICAgICAgICAgIHNoaXAuYXBwZW5kQ2hpbGQoc2hpcFVuaXQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCByb3RhdGVfYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIHJvdGF0ZV9idXR0b24uY2xhc3NOYW1lID0gXCJyb3RhdGUtYnV0dG9uXCI7XHJcbiAgICByb3RhdGVfYnV0dG9uLmlubmVySFRNTCA9IFwiUm90YXRlXCI7XHJcbiAgICBzaGlwQ29udGFpbmVyLmFwcGVuZENoaWxkKHJvdGF0ZV9idXR0b24pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHsgY3JlYXRlUGxhY2VtZW50Qm9hcmQsIGNyZWF0ZVBsYXllclNoaXBVSSB9O1xyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==