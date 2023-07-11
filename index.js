"use strict";

const playerButtonContainer = document.querySelector(
  ".player-button-container"
);
const reset = document.querySelector(".reset");
const results = document.querySelector(".round-results");
const finalResult = document.querySelector(".final-result");
const titleRound = document.querySelector(".title-round");
const computerResults = document.querySelector(".computer-results");
const playerResults = document.querySelector(".player-results");
const playerPoints = document.querySelector(".player-points");
const computerPoints = document.querySelector(".computer-points");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const gameBoard = {
  playerScore: 0,
  computerScore: 0,
  round: 1,
};
playerPoints.textContent = Number(gameBoard.playerScore);
computerPoints.textContent = Number(gameBoard.computerScore);
const computerOptions = ["rock", "paper", "scissors"];
playerButtonContainer.addEventListener("click", (e) => {
  if (gameBoard.playerScore < 5 && gameBoard.computerScore < 5) {
    let html = `<li>Round ${gameBoard.round}: ${playRound(
      e.target.name,
      getComputerChoice(computerOptions)
    )}</li>`;
    gameBoard.round++;
    results.insertAdjacentHTML("afterbegin", html);
  }
  if (gameBoard.playerScore === 5 || gameBoard.computerScore === 5) {
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
    if (gameBoard.playerScore === 5) {
      finalResult.textContent = `GAMEOVER - You Win!!! 🏆`;
    }
    if (gameBoard.computerScore === 5) {
      finalResult.textContent = `GAMEOVER - You Lose!!! 💥`;
    }
  }
  titleRound.textContent = `Round: ${gameBoard.round}`;
  console.log(gameBoard.round);
});
function getComputerChoice(arr) {
  let randomChoice = Math.floor(Math.random() * 3);
  return arr[randomChoice];
}
function playRound(playerSelection, computerSelection) {
  computerResults.textContent = computerSelection;
  playerResults.textContent = playerSelection;
  // Tie
  if (playerSelection === computerSelection) {
    return `Tie! You both picked ${playerSelection}`;
  }
  // Player Wins
  if (playerSelection === "rock" && computerSelection === "scissors") {
    console.log(gameBoard.playerScore);
    gameBoard.playerScore++;
    playerPoints.textContent = gameBoard.playerScore;
    return `You win! Rock beats Scissors!`;
  }
  if (playerSelection === "paper" && computerSelection === "rock") {
    gameBoard.playerScore++;
    playerPoints.textContent = gameBoard.playerScore;
    return `You win! Paper beats Rock!`;
  }
  if (playerSelection === "scissors" && computerSelection === "paper") {
    gameBoard.playerScore++;
    playerPoints.textContent = gameBoard.playerScore;
    return `You win! Scissors beats Paper!`;
  }

  // Player Loses
  if (playerSelection === "scissors" && computerSelection === "rock") {
    gameBoard.computerScore++;
    computerPoints.textContent = gameBoard.computerScore;
    return `You Lose! Rock beats Scissors!`;
  }
  if (playerSelection === "paper" && computerSelection === "scissors") {
    gameBoard.computerScore++;
    computerPoints.textContent = gameBoard.computerScore;
    return `You Lose! Scissors beats Paper!`;
  }
  if (playerSelection === "rock" && computerSelection === "paper") {
    gameBoard.computerScore++;
    computerPoints.textContent = gameBoard.computerScore;
    return `You Lose! Paper beats Rock!`;
  }
}

function resetGame() {
  playerPoints.textContent = gameBoard.playerScore = 0;
  computerPoints.textContent = gameBoard.computerScore = 0;
  gameBoard.round = 1;
  titleRound.textContent = `Round: ${gameBoard.round}`;
  rock.disabled = paper.disabled = scissors.disabled = false;
  finalResult.textContent =
    results.innerHTML =
    computerResults.textContent =
    playerResults.textContent =
      "";
}

reset.addEventListener("click", resetGame);
