const playerScoreElem = document.getElementById('player-score');
const computerScoreElem = document.getElementById('computer-score');
const roundResultElem = document.getElementById('output');
const gameWinElem = document.querySelector('#game-win h2');
const gameCoreBtns = document.querySelector('.game-core');
let playerScore = 0;
let computerScore = 0;


function randomize(upper) {
    return Math.floor(Math.random() * upper);
}

function computerPlay() {
    const figures = ['rock', 'paper', 'scissors'];

    return figures[randomize(figures.length)];
}

function playRound(event, playerSelection, computerSelection) {
    playerSelection = event.target.textContent.toLowerCase();
    computerSelection = computerPlay();

    if (computerScore === 5) {
      gameWinElem.textContent = 'You Lose!';
      gameCoreBtns.style.display = 'none';
    } else if (playerScore === 5) {
      gameWinElem.textContent = 'You Win!';
      gameCoreBtns.style.display = 'none';
    }

    if (playerSelection.toLowerCase() === 'rock' && 
        computerSelection.toLowerCase() === 'rock' ||
        playerSelection.toLowerCase() === 'paper' && 
        computerSelection.toLowerCase() === 'paper' || 
        playerSelection.toLowerCase() === 'scissors' && 
        computerSelection.toLowerCase() === 'scissors') {
        return 'Draw!'
    } else if (playerSelection.toLowerCase() === 'rock' && 
        computerSelection.toLowerCase() === 'paper') {
        computerScore += 1;
        computerScoreElem.textContent = computerScore;
        roundResultElem.innerHTML = '<p>You Lose! Paper beats Rock.</p>';
    } else if (playerSelection.toLowerCase() === 'rock' && 
               computerSelection.toLowerCase() === 'scissors') {
        playerScore += 1;
        playerScoreElem.textContent = playerScore;
        roundResultElem.innerHTML = '<p>You Win! Rock beats Scissors.</p>';
    } else if (playerSelection.toLowerCase() === 'paper' && 
               computerSelection.toLowerCase() === 'rock') {
        playerScore += 1;
        playerScoreElem.textContent = playerScore;
        roundResultElem.innerHTML = '<p>You Win! Paper beats Rock.</p>';
    } else if (playerSelection.toLowerCase() === 'paper' && 
               computerSelection.toLowerCase() === 'scissors') {
        computerScore += 1;
        computerScoreElem.textContent = computerScore;
        roundResultElem.innerHTML = '<p>You Lose! Scissors beats Paper.</p>'; 
    } else if (playerSelection.toLowerCase() === 'scissors' && 
               computerSelection.toLowerCase() === 'rock') {
        computerScore += 1;
        computerScoreElem.textContent = computerScore;
        roundResultElem.innerHTML = '<p>You Lose! Rock beats Scissors.</p>'; 
    } else if (playerSelection.toLowerCase() === 'scissors' && 
               computerSelection.toLowerCase() === 'paper') {
        playerScore += 1;
        playerScoreElem.textContent = playerScore;
        roundResultElem.innerHTML = '<p>You Win! Scissors beats Paper.</p>';
    }
}

function game() {
    let playerSelection;

    document.getElementById('rock').addEventListener('click', playRound);
    document.getElementById('paper').addEventListener('click', playRound);
    document.getElementById('scissors').addEventListener('click', playRound);
}

game();