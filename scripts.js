function getComputerChoice() {
  return Math.floor(Math.random() * 3);
}

function getHumanChoice() {
  return prompt("Please choose rock, paper or scissors:");
}

const humanPlay = getHumanChoice();
const computerPlay = getComputerChoice();