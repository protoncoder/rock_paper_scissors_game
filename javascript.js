//this game runs in console, so you should check results there "Ctrl+Shift+I" in any browser

let playerScore = 0;
let compScore = 0;

//will randomly return rock, paper, scissors as computer
let getComputerChoice = () => { //arrow function
  //generate random number between 0 and 1
  let random = Math.random();
  if (random <= 0.66 && random >= 0.34) {
    //console.log(random);
    return "paper";
  }
  else if (random <= 0.33) {
    //console.log(random);
    return "rock";
  }
  else {
    //console.log(random);
    return "scissors";
  }
}
//getComputerChoice();

//func to play a single round of Rock Scissors Paper
let playRound = (playerSelection, computerSelection) => {
  //console.log('1 ', playerSelection, '2 ', computerSelection);
  if (playerSelection === "rock" && computerSelection === "rock") {
    return "It's a tie!";
  }
  else if (playerSelection === "paper" && computerSelection === "paper") {
    return "It's a tie!";
  }
  else if (playerSelection === "scissors" && computerSelection === "scissors") {
    return "It's a tie!";
  }
  else if (playerSelection === "rock" && computerSelection === "paper") {
    compScore++;
    return "You lost! Paper beats Rock!";
  }
  else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    return "You won! Rock beats Scissors";
  }
  else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    return "You won! Scissors beats Paper";
  }
  else if (playerSelection === "scissors" && computerSelection === "rock") {
    compScore++;
    return "You lost! Rock beats Scissors!";
  }
  else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    return "You won! Paper beats Rock!";
  }
  else if (playerSelection === "paper" && computerSelection === "scissors") {
    compScore++;
    return "You lost! Scissors beats Paper!";
  }
  else {
    return "Something went terribly wrong...";
  }
}

//let playerSelection;
let computerSelection = getComputerChoice();
//console.log(`${playerSelection},${computerSelection}`);
//console.log(playRound(playerSelection, computerSelection));

let game = () => {
  //play for five rounds
  for (i = 0; i < 5; i++) {
    let playerSelection = prompt("Make your choice: ", "Rock, Paper, Scissors").toLowerCase();
    console.log(playRound(playerSelection, getComputerChoice()));
  }
  if (playerScore > compScore) {
    console.log("");
    console.log("**********************");
    console.log("* You won! Congrats! *");
    console.log("**********************");
  }
  else if (compScore > playerScore) {
    console.log("");
    console.log("*****************************");
    console.log("* You lost! Condolescenses! *");
    console.log("*****************************");
  }
  else if (playerScore === compScore) {
    console.log("");
    console.log("***************");
    console.log("* It's a tie! *");
    console.log("***************");
  }
}

game();
console.log("");
console.log("playerScore: ", playerScore);
console.log("compScore: ", compScore);
console.log("");