// Import the prompt-sync package
const prompt = require('prompt-sync')();

// Function to generate computer's choice
function getComputerChoice() {
  const randomNum = Math.random();
  if (randomNum <= 0.34) {
    return 'PAPER';
  } else if (randomNum <= 0.67) {
    return 'SCISSORS';
  } else {
    return 'ROCK';
  }
}

// Function to decide the winner
function decideWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "It's a tie";
  }

  if (
    (userChoice === 'ROCK' && computerChoice === 'SCISSORS') ||
    (userChoice === 'SCISSORS' && computerChoice === 'PAPER') ||
    (userChoice === 'PAPER' && computerChoice === 'ROCK')
  ) {
    return 'User Wins';
  } else {
    return 'Computer Wins';
  }
}

// Ask the user for their choice
let userSelection = prompt('Choose ROCK, PAPER, or SCISSORS: ').toUpperCase();

// Validate user input
while (!['ROCK', 'PAPER', 'SCISSORS'].includes(userSelection)) {
  console.log('Invalid choice! Please choose ROCK, PAPER, or SCISSORS.');
  userSelection = prompt('Choose ROCK, PAPER, or SCISSORS: ').toUpperCase();
}

// Get the computer's choice
let computerSelection = getComputerChoice();

// Display the choices
console.log(`User's Choice: ${userSelection}`);
console.log(`Computer's Choice: ${computerSelection}`);

// Display the result
console.log(decideWinner(userSelection, computerSelection));
