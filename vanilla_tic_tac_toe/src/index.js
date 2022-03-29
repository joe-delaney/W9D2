const View = require("./ttt-view.js"); // require appropriate file
const Game = require("../ttt_node/game.js"); // require appropriate file

document.addEventListener("DOMContentLoaded", () => {
  // Your code here
  let g = new Game();
  let container = document.querySelector(".ttt");
  let view = new View(g,container);



});
