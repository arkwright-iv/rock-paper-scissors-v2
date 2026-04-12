const scoreboard = document.getElementById("scoreboard");
const resultParentEl = document.getElementById("results");
const roundResult = document.querySelector(".round-result");
const playerScore = document.querySelector(".player-score");
const cpuScore = document.querySelector(".cpu-score");
const totalScore = document.querySelector(".total-score");
const rockBtn = document.querySelector(".rock-btn");
const paperBtn = document.querySelector(".paper-btn");
const scissorsBtn = document.querySelector(".scissors-btn");

rockBtn.addEventListener("click", function () {
  return playRound("rock", getComputerChoice());
});
paperBtn.addEventListener("click", function () {
  return playRound("paper", getComputerChoice());
});
scissorsBtn.addEventListener("click", function () {
  return playRound("scissors", getComputerChoice());
});

function getComputerChoice() {
  return Math.floor(Math.random() * 3);
}

let humanScore = 0;
let computerScore = 0;
let rounds = 0;

function playRound(humanChoice, computerChoice) {
  let humanPlay = humanChoice;
  let computerPlay = computerChoice;
  if (computerPlay === 0) {
    computerPlay = "rock";
  } else if (computerPlay === 1) {
    computerPlay = "paper";
  } else {
    computerPlay = "scissors";
  }
  if (humanPlay === computerPlay) {
    return roundResult.textContent = `That's a tie!`;
  } else if (humanPlay === "rock" && computerPlay === "scissors" ||
    humanPlay === "paper" && computerPlay === "rock" ||
    humanPlay === "scissors" && computerPlay === "paper") {
    humanScore++;
    return roundResult.textContent = `You win! ${humanPlay} beats ${computerPlay}.`;
  } else if (humanPlay === "rock" && computerPlay === "paper" ||
    humanPlay === "paper" && computerPlay === "scissors" ||
    humanPlay === "scissors" && computerPlay === "rock") {
    computerScore++;
    return roundResult.textContent = `You lose! ${computerPlay} beats ${humanPlay}.`;
  }
}

// if (humanScore > computerScore) {
//   return console.log(`You won! Your score: ${humanScore}. Computer score: ${computerScore}.`);
// } else {
//   return console.log(`You lost! Your score: ${humanScore}. Computer score: ${computerScore}.`);
// }






