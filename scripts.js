const rockBtn = document.querySelector(".rock-btn");
const paperBtn = document.querySelector(".paper-btn");
const scissorsBtn = document.querySelector(".scissors-btn");

rockBtn.addEventListener("click", function() {
  return playRound("rock", getComputerChoice());
});
paperBtn.addEventListener("click", function() {
  return playRound("paper", getComputerChoice());;
});
scissorsBtn.addEventListener("click", function() {
  return playRound("scissors", getComputerChoice());
});

function getComputerChoice() {
  return Math.floor(Math.random() * 3);
}

function getHumanChoice() {
  return "Please choose rock, paper or scissors:";
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
      
       console.log("That's a tie!");
       return rounds++;
    } else if (humanPlay === "rock" && computerPlay === "scissors" ||
      humanPlay === "paper" && computerPlay === "rock" ||
      humanPlay === "scissors" && computerPlay === "paper") {
      humanScore++;
       console.log(`You win! ${humanPlay} beats ${computerPlay}.
        Your score: ${humanScore}. Computer score: ${computerScore}.`);
      return rounds++;
    } else if (humanPlay === "rock" && computerPlay === "paper" ||
      humanPlay === "paper" && computerPlay === "scissors" ||
      humanPlay === "scissors" && computerPlay === "rock") {
      computerScore++;
       console.log(`You lose! ${computerPlay} beats ${humanPlay}.
        Your score: ${humanScore}. Computer score: ${computerScore}.`);
      return rounds++;
    }
  }

  if (humanScore > computerScore) {
    return console.log(`You won! Your score: ${humanScore}. Computer score: ${computerScore}.`);
  } else {
    return console.log(`You lost! Your score: ${humanScore}. Computer score: ${computerScore}.`);
  }






