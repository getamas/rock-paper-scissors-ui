// HTML Elements
const playerScoreElem = document.getElementById('player-score');
const computerScoreElem = document.getElementById('computer-score');
const roundResultElem = document.getElementById('output');
const gameWinElem = document.querySelector('#game-win h2');
const gameCoreBtns = document.querySelector('.game-core');

// Game Scores
let playerScore = 0;
let computerScore = 0;

// Random number generator
function randomize(upper) {
    return Math.floor(Math.random() * upper);
}

// Random computer pick
function computerPlay() {
    const figures = ['rock', 'paper', 'scissors'];

    return figures[randomize(figures.length)];
}


// Game Round
function playRound(event) {
    playerSelection = event.target.textContent.toLowerCase();
    computerSelection = computerPlay().toLowerCase();

    if (playerSelection === 'rock' && 
        computerSelection === 'rock' ||
        playerSelection === 'paper' && 
        computerSelection === 'paper' || 
        playerSelection === 'scissors' && 
        computerSelection === 'scissors') {
        roundResultElem.innerHTML = '<p>Draw!</p>' 
    } else if (playerSelection === 'rock' && 
        computerSelection === 'paper') {
        computerScore += 1;
        computerScoreElem.textContent = computerScore;
        roundResultElem.innerHTML = '<p>You Lose! Paper beats Rock.</p>';
    } else if (playerSelection === 'rock' && 
               computerSelection === 'scissors') {
        playerScore += 1;
        playerScoreElem.textContent = playerScore;
        roundResultElem.innerHTML = '<p>You Win! Rock beats Scissors.</p>';
    } else if (playerSelection === 'paper' && 
               computerSelection === 'rock') {
        playerScore += 1;
        playerScoreElem.textContent = playerScore;
        roundResultElem.innerHTML = '<p>You Win! Paper beats Rock.</p>';
    } else if (playerSelection === 'paper' && 
               computerSelection === 'scissors') {
        computerScore += 1;
        computerScoreElem.textContent = computerScore;
        roundResultElem.innerHTML = '<p>You Lose! Scissors beats Paper.</p>'; 
    } else if (playerSelection === 'scissors' && 
               computerSelection === 'rock') {
        computerScore += 1;
        computerScoreElem.textContent = computerScore;
        roundResultElem.innerHTML = '<p>You Lose! Rock beats Scissors.</p>'; 
    } else if (playerSelection === 'scissors' && 
               computerSelection === 'paper') {
        playerScore += 1;
        playerScoreElem.textContent = playerScore;
        roundResultElem.innerHTML = '<p>You Win! Scissors beats Paper.</p>';
    }
}

// Winning Condition
function game() {
    if (computerScore === 5) {
      gameWinElem.textContent = 'You Lose!';
      gameCoreBtns.style.display = 'none';
    } else if (playerScore === 5) {
      gameWinElem.textContent = 'You Win!';
      gameCoreBtns.style.display = 'none';
    }
}

// Events
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