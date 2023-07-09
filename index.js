"use strict";

const playerButtonContainer = document.querySelector(
  ".player-button-container"
);
const results = document.querySelector(".round-results");
const computerResults = document.querySelector(".computer-results");
const computerOptions = ["rock", "paper", "scissors"];
playerButtonContainer.addEventListener("click", (e) => {
  results.textContent = playRound(
    e.target.name,
    getComputerChoice(computerOptions)
  );
});
function getComputerChoice(arr) {
  let randomChoice = Math.floor(Math.random() * 3);
  return arr[randomChoice];
}
function playRound(playerSelection, computerSelection) {
  computerResults.textContent = computerSelection;
  if (playerSelection === computerSelection) {
    return `You both picked the same answer!`;
  }
  if (playerSelection === "rock" && computerSelection === "scissors") {
    return `You win! Rock beats paper!`;
  }
  if (playerSelection === "paper" && computerSelection === "rock") {
    return `You win! Paper beats Rock!`;
  }
  if (playerSelection === "scissors" && computerSelection === "paper") {
    return `You win! Scissors beats Paper!`;
  }
  if (playerSelection === "scissors" && computerSelection === "rock") {
    return `You Lose! Rock crushes Scissors!`;
  }
  if (playerSelection === "paper" && computerSelection === "scissors") {
    return `You Lose! Scissors cuts Paper!`;
  }
  if (playerSelection === "rock" && computerSelection === "paper") {
    return `You Lose! Paper covers Rock!`;
  }
}
