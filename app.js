// Create the gameboard object and store the gameboard as an array inside of it.
const gameboard = {
	
  board: [0, 1, 2, 3, 4, 5, 6, 7, 8],
  render: function() {
    for (let i = 0; i < this.board.length; i++) {
      document.getElementById(i).innerHTML = this.board[i];
    }
  },
  addMark: function(index, mark) {
    this.board[index] = mark;
  },
  checkWin: function() {
    if (
      (this.board[0] === this.board[1] &&
        this.board[1] === this.board[2] &&
        this.board[0] !== "") ||
      (this.board[3] === this.board[4] &&
        this.board[4] === this.board[5] &&
        this.board[3] !== "") ||
      (this.board[6] === this.board[7] &&
        this.board[7] === this.board[8] &&
        this.board[6] !== "") ||
      (this.board[0] === this.board[3] &&
        this.board[3] === this.board[6] &&
        this.board[0] !== "") ||
      (this.board[1] === this.board[4] &&
        this.board[4] === this.board[7] &&
        this.board[1] !== "") ||
      (this.board[2] === this.board[5] &&
        this.board[5] === this.board[8] &&
        this.board[2] !== "") ||
      (this.board[0] === this.board[4] &&
        this.board[4] === this.board[8] &&
        this.board[0] !== "") ||
      (this.board[2] === this.board[4] &&
        this.board[4] === this.board[6] &&
        this.board[2] !== "")
    ) {
      return true;
    } else {
      return false;
    }
  },
  checkTie: function() {
    for (let i = 0; i < this.board.length; i++) {
      if (this.board[i] === i) {
        return false;
      }
    }
    return true;
  },
  reset: function() {
    this.board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  }
};

// Create player objects to store player information.
const player1 = {
  name: "Player 1",
  mark: "X",
  turn: true
};

const player2 = {
  name: "Player 2",
  mark: "O",
  turn: false
};

// Create a module or factory to control the flow of the game.
const game = (function() {
  let gameOver = false;
  let currentPlayer = player1;

  function start() {
    gameOver = false;
    gameboard.reset();
    gameboard.render();
    document.getElementById("message").innerHTML = "";
    currentPlayer = player1;
	document.getElementById("0").style.color = "transparent";
	document.getElementById("1").style.color = "transparent";
	document.getElementById("2").style.color = "transparent";
	document.getElementById("3").style.color = "transparent";
	document.getElementById("4").style.color = "transparent";
	document.getElementById("5").style.color = "transparent";
	document.getElementById("6").style.color = "transparent";
	document.getElementById("7").style.color = "transparent";
	document.getElementById("8").style.color = "transparent";
  }

  function play(index) {
    if (gameOver) {
	document.getElementById(index).style.color = "transparent";
      return;
    }
    if (gameboard.board[index] === index) {
      gameboard.addMark(index, currentPlayer.mark);
      gameboard.render();
      if (gameboard.checkWin()) {
        document.getElementById("message").innerHTML =
          currentPlayer.name + " wins!";
        gameOver = true;
      } else if (gameboard.checkTie()) {
        document.getElementById("message").innerHTML = "It's a tie!";
        gameOver = true;
      } else {
        currentPlayer = currentPlayer === player1 ? player2 : player1;
      }
    }
  }

  return {
    start: start,
    play: play
  };
})();

// Write a JavaScript function to render the contents of the gameboard array to the webpage using the given below HTML.
gameboard.render();

// Build functions to add marks to specific spots on the board, tie it to the DOM, and enforce rules to keep players from playing in taken spots.
document.getElementById("0").addEventListener("click", function() {
document.getElementById("0").style.color = "black";
  game.play(0);
});
document.getElementById("1").addEventListener("click", function() {
document.getElementById("1").style.color = "black";
  game.play(1);
});
document.getElementById("2").addEventListener("click", function() {
	document.getElementById("2").style.color = "black";
  game.play(2);
});
document.getElementById("3").addEventListener("click", function() {
	document.getElementById("3").style.color = "black";
  game.play(3);
});
document.getElementById("4").addEventListener("click", function() {
	document.getElementById("4").style.color = "black";
  game.play(4);
});
document.getElementById("5").addEventListener("click", function() {
	document.getElementById("5").style.color = "black";
  game.play(5);
});
document.getElementById("6").addEventListener("click", function() {
	document.getElementById("6").style.color = "black";
  game.play(6);
});
document.getElementById("7").addEventListener("click", function() {
	document.getElementById("7").style.color = "black";
  game.play(7);
});
document.getElementById("8").addEventListener("click", function() {
	document.getElementById("8").style.color = "black";
  game.play(8);
});

// Add logic to check for game over conditions, such as 3-in-a-row or a tie.
// Clean up the interface to allow players to input their names, start/restart the game, and display the winning player.
document.getElementById("startButton").addEventListener("click", function() {
  game.start();
});

document.body.onselectstart = function() {
    return false;
};

document.body.ondragstart = function() {
    return false;
};