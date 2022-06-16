export default (function header() {
  const head = document.createElement("header");
  const h1 = document.createElement("h1");
  h1.innerHTML = "BattleShips";
  head.appendChild(h1);
  return head;
})();
