const squares = document.querySelectorAll(".square");
const message = document.getElementById("message");
const resetButton = document.getElementById("reset");

let currentPlayer = "X";

for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click", function (e) {
    // Don't allow marking a square that has already been marked
    if (e.target.textContent !== "") {
      return;
    }

    // Mark the square with the current player's symbol
    e.target.textContent = currentPlayer;

    // Check if the player has won
    if (checkWin(currentPlayer)) {
      message.textContent = `Player ${currentPlayer} wins!`;
    } else {
      // Switch players
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  });
}

function checkWin(player) {
  // Check rows
  for (let i = 0; i < 9; i += 3) {
    if (
      squares[i].textContent === player &&
      squares[i + 1].textContent === player &&
      squares[i + 2].textContent === player
    ) {
      return true;
    }
  }

  // Check columns
  for (let i = 0; i < 3; i++) {
    if (
      squares[i].textContent === player &&
      squares[i + 3].textContent === player &&
      squares[i + 6].textContent === player
    ) {
      return true;
    }
  }

  // Check diagonals
  if (
    squares[0].textContent === player &&
    squares[4].textContent === player &&
    squares[8].textContent === player
  ) {
    return true;
  }

  if (
    squares[2].textContent === player &&
    squares[4].textContent === player &&
    squares[6].textContent === player
  ) {
    return true;
  }

  return false;
}

resetButton.addEventListener("click", function () {
  // Reset the game board and message
  for (let i = 0; i < squares.length; i++) {
    squares[i].textContent = "";
  }
  message.textContent = "";

  // Set the current player back to X
  currentPlayer = "X";
});
