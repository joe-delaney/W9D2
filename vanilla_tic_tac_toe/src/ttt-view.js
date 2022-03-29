const Game = require("../ttt_node/game");

class View {
  constructor(game, el) {
    this.game = game;
    this.el = el;
    el.appendChild(this.setupBoard());
    this.bindEvents();
  }

  setupBoard() {
    let ul = document.createElement('ul'); 
    ul.setAttribute("class", "grid-parent");
    let j = 0;
    for(let i = 0; i < 9; i++) {
      if(j === 3) j = 0;
      let div = document.createElement('div');
      let li = document.createElement('li');
      div.setAttribute("id",i.toString());
      div.setAttribute("data-index", [Math.floor(i/3), j].toString());
      div.setAttribute("class", "grid-position");
      ul.appendChild(div);
      div.appendChild(li);
      j++;
    }
    return ul;
  }
  
  bindEvents() {
    let ul = document.querySelector(".grid-parent");
    ul.addEventListener("click", this.handleClick.bind(this));


  }

  handleClick(e) {
    if (!this.game.isOver()){
      let ele = e.target;
      let square = ele.getAttribute("id");
      this.makeMove(square);

      let pos = ele.getAttribute("data-index").split(",");
      pos[0] = parseInt(pos[0]);
      pos[1] = parseInt(pos[1]);
      this.game.playMove(pos);
      if(this.game.isOver()){
        let message = document.createElement("h3");
        message.classList.add('win-message');
        message.innerText = `You win, ${this.game.winner()}`;
        this.el.appendChild(message);
      }
    }
  }

  makeMove(square) {
    let li = document.getElementById(square);
    if (li.classList.contains("x") || li.classList.contains("o")) {
      alert("Invalid Move!");
    } else if (this.game.currentPlayer === 'x') {
      li.classList.add("x");
      li.innerText = 'X'
    } else {
      li.classList.add("o");
      li.innerText = 'O';
    }
  }

}

module.exports = View;
