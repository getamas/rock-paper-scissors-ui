
// Random number generator
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Computer play
function computerPlay() {
  const arr = ["Rock", "Paper", "Scissors"];

  return arr[getRandomInt(0,2)];
}

// Play Round
function playRound(event) {
  const playerSelection = event.target.textContent.toLowerCase();
  const computerSelection = computerPlay().toLowerCase();

  let playerScoreOutput = document.getElementById('player-score');
  let computerScoreOutput = document.getElementById('computer-score');
  let roundResultOutput = document.querySelector("#output p");

  if ( (computerSelection === 'rock' && playerSelection === 'rock') || (computerSelection === 'paper' && playerSelection === 'paper') || (computerSelection === 'scissors' && playerSelection === 'scissors')) {

    roundResultOutput.innerHTML = `${playerSelection} against ${computerSelection}. Tie!`;

  } else if (computerSelection === 'rock' && playerSelection === 'paper') {

    playerScore += 1;
    roundResultOutput.innerHTML = `${playerSelection} against ${computerSelection}. You Win!`;

  } else if (computerSelection === 'rock' && playerSelection === 'scissors') {

    computerScore += 1;
    roundResultOutput.innerHTML = `${playerSelection} against ${computerSelection}. You Lose!`;

  } else if (computerSelection === 'paper' && playerSelection === 'rock') {

    computerScore += 1;
    roundResultOutput.innerHTML = `${playerSelection} against ${computerSelection}. You Lose!`;

  } else if (computerSelection === 'paper' && playerSelection === 'scissors') {

    playerScore += 1;
    roundResultOutput.innerHTML = `${playerSelection} against ${computerSelection}. You Win!`;

  }  else if (computerSelection === 'scissors' && playerSelection === 'rock') {

    playerScore += 1;
    roundResultOutput.innerHTML = `${playerSelection} against ${computerSelection}. You Win!`;

  } else if (computerSelection === 'scissors' && playerSelection === 'paper') {

    computerScore += 1;
    roundResultOutput.innerHTML = `${playerSelection} against ${computerSelection}. You Lose!`;

  }

  playerScoreOutput.innerHTML = playerScore;
  computerScoreOutput.innerHTML = computerScore;
}


// Game Winner Conditions
function game() {
  let gameWinnerOutput = document.getElementById("game-win");
  let buttons = document.querySelectorAll('button');

  if (playerScore === 5) {
    gameWinnerOutput.innerHTML = `
      <h2>You Won the Game! Congrats!</h2>
      <button class="button-primary" id="play-again" onclick="playAgain()">Play Again</button>
    `;

    buttons.forEach(button => {
      button.setAttribute('disabled', '');
      button.classList.add('disabled');
    });
  }

  if (computerScore === 5) {
    gameWinnerOutput.innerHTML = `
      <h2>You Lost the Game!</h2>
      <button class="button-primary" id="play-again" onclick="playAgain()">Play Again</button>
      `;

    buttons.forEach(button => {
      button.setAttribute('disabled', '');
      button.classList.add('disabled');
    });
  }
}

// Play Again
function playAgain() {
  window.location.reload();
}

// Scores tracking
let playerScore = 0;
let computerScore = 0;

// Event Listeners
document.getElementById('rock').addEventListener('click', () => {
  playRound(event);
  game();
});

document.getElementById('paper').addEventListener('click', () => {
  playRound(event);
  game();
});

document.getElementById('scissors').addEventListener('click', () => {
  playRound(event);
  game();
});
