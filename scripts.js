const scoreboard = document.getElementById("scoreboard");
const resultParentEl = document.getElementById("results");
const roundResult = document.querySelector(".round-result");
const playerScore = document.querySelector(".player-score");
const cpuScore = document.querySelector(".cpu-score");
const winnerText = document.querySelector(".winner-text");
const rockBtn = document.querySelector(".rock-btn");
const paperBtn = document.querySelector(".paper-btn");
const scissorsBtn = document.querySelector(".scissors-btn");

rockBtn.addEventListener("click", function () {
  if (gameFinished) {
    playerScore.textContent = humanScore;
    cpuScore.textContent = computerScore;
    winnerText.innerHTML = "&nbsp;";
    gameFinished = false;
  }
  return playRound("rock", getComputerChoice());
});
paperBtn.addEventListener("click", function () {
  if (gameFinished) {
    playerScore.textContent = humanScore;
    cpuScore.textContent = computerScore;
    winnerText.innerHTML = "&nbsp;";
    gameFinished = false;
  }
  return playRound("paper", getComputerChoice());
});
scissorsBtn.addEventListener("click", function () {
  if (gameFinished) {
    playerScore.textContent = humanScore;
    cpuScore.textContent = computerScore;
    winnerText.innerHTML = "&nbsp;";
    gameFinished = false;
  }
  return playRound("scissors", getComputerChoice());
});

function getComputerChoice() {
  return Math.floor(Math.random() * 3);
}

let humanScore = 0;
let computerScore = 0;
let round = 0;
let gameFinished = false;

function playRound(humanChoice, computerChoice) {
  if (round === 5) {
    if (humanScore > computerScore) {
      winnerText.textContent = "Player wins!";
      round = 0;
      humanScore = 0;
      computerScore = 0;
      let lastResult = roundResult.textContent;
      roundResult.textContent = `${lastResult} Game over! Click on any image to start again.`;
      return gameFinished = true;
    } else {
      winnerText.textContent = "Computer wins!";
      round = 0;
      humanScore = 0;
      computerScore = 0;
      let lastResult = roundResult.textContent;
      roundResult.textContent = `${lastResult} Game over! Click on any image to start again.`;
      return gameFinished = true;
    }
  }

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
    roundResult.textContent = `That's a tie!`;
    return round++;
  } else if (humanPlay === "rock" && computerPlay === "scissors" ||
    humanPlay === "paper" && computerPlay === "rock" ||
    humanPlay === "scissors" && computerPlay === "paper") {
    humanScore++;
    playerScore.textContent = humanScore;
    roundResult.textContent = `You win! ${humanPlay} beats ${computerPlay}.`;
    return round++;
  } else if (humanPlay === "rock" && computerPlay === "paper" ||
    humanPlay === "paper" && computerPlay === "scissors" ||
    humanPlay === "scissors" && computerPlay === "rock") {
    computerScore++;
    cpuScore.textContent = computerScore;
    roundResult.textContent = `You lose! ${computerPlay} beats ${humanPlay}.`;
    return round++;
  }
}





