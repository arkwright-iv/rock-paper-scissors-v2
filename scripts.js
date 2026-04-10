let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  return Math.floor(Math.random() * 3);
}

function getHumanChoice() {
  return prompt("Please choose rock, paper or scissors:");
}

function playRound(humanChoice, computerChoice) {
  let humanPlay = humanChoice.toLowerCase();
  let computerPlay = computerChoice;
  if (computerPlay === 0) {
    computerPlay = "rock";
  } else if (computerPlay === 1) {
    computerPlay = "paper";
  } else {
    computerPlay = "scissors";
  }

  if (humanPlay === computerPlay) {
    return console.log("That's a tie!");
  } else if (humanPlay === "rock" && computerPlay === "paper") {
    
    
    
    console.log("You lose! Paper beats rock.");
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);