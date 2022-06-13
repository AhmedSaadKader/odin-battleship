(self["webpackChunkodin_battleship"] = self["webpackChunkodin_battleship"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

// import "./style.css";

const fullShip = document.querySelectorAll(".ships-full");
const boardCell = document.querySelectorAll(".board-1");
const rotateButton = document.querySelector(".rotate-button");
const allShips = document.querySelectorAll(".all-ships");
const shipCluster = document.querySelectorAll(".ship-cluster");

fullShip.forEach((ship) => {
  ship.addEventListener("dragstart", dragStart);
  ship.addEventListener("dragend", dragEnd);
});

boardCell.forEach((cell) => {
  cell.addEventListener("dragover", dragOver);
  cell.addEventListener("dragenter", dragEnter);
  cell.addEventListener("dragleave", dragLeave);
  cell.addEventListener("drop", dragDrop);
});

rotateButton.addEventListener("click", rotateShips);

function dragStart() {
  this.className += " hold";
  setTimeout(() => this.classList.add("invisible"), 10);
}

function dragEnd() {
  this.classList.remove("hold");
  this.classList.remove("invisible");
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.classList.add("hovered");
}

function dragLeave() {
  this.classList.remove("hovered");
}

function dragDrop() {
  this.classList.remove("hovered");
  this.append();
}

function rotateShips() {
  allShips.forEach((ship) => ship.classList.toggle("row"));
  shipCluster.forEach((cluster) => cluster.classList.toggle("column"));
  fullShip.forEach((ship) => {
    ship.classList.toggle("column");
    if (ship.dataset.shipOrientation === "vertical") {
      ship.dataset.shipOrientation = "horizontal";
    } else {
      ship.dataset.shipOrientation = "vertical";
    }
  });
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsR0FBRztBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XHJcblxyXG5jb25zdCBmdWxsU2hpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2hpcHMtZnVsbFwiKTtcclxuY29uc3QgYm9hcmRDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ib2FyZC0xXCIpO1xyXG5jb25zdCByb3RhdGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJvdGF0ZS1idXR0b25cIik7XHJcbmNvbnN0IGFsbFNoaXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5hbGwtc2hpcHNcIik7XHJcbmNvbnN0IHNoaXBDbHVzdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaGlwLWNsdXN0ZXJcIik7XHJcblxyXG5mdWxsU2hpcC5mb3JFYWNoKChzaGlwKSA9PiB7XHJcbiAgc2hpcC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ3N0YXJ0XCIsIGRyYWdTdGFydCk7XHJcbiAgc2hpcC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ2VuZFwiLCBkcmFnRW5kKTtcclxufSk7XHJcblxyXG5ib2FyZENlbGwuZm9yRWFjaCgoY2VsbCkgPT4ge1xyXG4gIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIGRyYWdPdmVyKTtcclxuICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnZW50ZXJcIiwgZHJhZ0VudGVyKTtcclxuICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnbGVhdmVcIiwgZHJhZ0xlYXZlKTtcclxuICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJkcm9wXCIsIGRyYWdEcm9wKTtcclxufSk7XHJcblxyXG5yb3RhdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJvdGF0ZVNoaXBzKTtcclxuXHJcbmZ1bmN0aW9uIGRyYWdTdGFydCgpIHtcclxuICB0aGlzLmNsYXNzTmFtZSArPSBcIiBob2xkXCI7XHJcbiAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmNsYXNzTGlzdC5hZGQoXCJpbnZpc2libGVcIiksIDEwKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZHJhZ0VuZCgpIHtcclxuICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoXCJob2xkXCIpO1xyXG4gIHRoaXMuY2xhc3NMaXN0LnJlbW92ZShcImludmlzaWJsZVwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZHJhZ092ZXIoZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZHJhZ0VudGVyKGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgdGhpcy5jbGFzc0xpc3QuYWRkKFwiaG92ZXJlZFwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZHJhZ0xlYXZlKCkge1xyXG4gIHRoaXMuY2xhc3NMaXN0LnJlbW92ZShcImhvdmVyZWRcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRyYWdEcm9wKCkge1xyXG4gIHRoaXMuY2xhc3NMaXN0LnJlbW92ZShcImhvdmVyZWRcIik7XHJcbiAgdGhpcy5hcHBlbmQoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcm90YXRlU2hpcHMoKSB7XHJcbiAgYWxsU2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4gc2hpcC5jbGFzc0xpc3QudG9nZ2xlKFwicm93XCIpKTtcclxuICBzaGlwQ2x1c3Rlci5mb3JFYWNoKChjbHVzdGVyKSA9PiBjbHVzdGVyLmNsYXNzTGlzdC50b2dnbGUoXCJjb2x1bW5cIikpO1xyXG4gIGZ1bGxTaGlwLmZvckVhY2goKHNoaXApID0+IHtcclxuICAgIHNoaXAuY2xhc3NMaXN0LnRvZ2dsZShcImNvbHVtblwiKTtcclxuICAgIGlmIChzaGlwLmRhdGFzZXQuc2hpcE9yaWVudGF0aW9uID09PSBcInZlcnRpY2FsXCIpIHtcclxuICAgICAgc2hpcC5kYXRhc2V0LnNoaXBPcmllbnRhdGlvbiA9IFwiaG9yaXpvbnRhbFwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2hpcC5kYXRhc2V0LnNoaXBPcmllbnRhdGlvbiA9IFwidmVydGljYWxcIjtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=