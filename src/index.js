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
