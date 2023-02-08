/* ############# *
*  # Simple UI # *
*  ############# */
const body = document.querySelector('body');
body.setAttribute('style', 'display: flex; justify-content: center; flex-direction: column; background-image: linear-gradient(to right, #0f0c29, #302b63, #24243e); border: 5px solid blue; margin: auto;');

const scoreScreen = document.querySelector('#scoreScreen');
scoreScreen.setAttribute('style', 'border: 3px solid black; display: flex; justify-content: center; gap: 700px; padding: 50px; margin-top: 20px; margin-bottom: 20px; color: yellow; font-weight: bolder; font-size: 36px;');
// body.appendChild(scoreScreen);

const uiRps = document.querySelector('.ui-rps');
body.appendChild(uiRps);

uiRps.setAttribute('style', 'border: 3px solid red; display: flex; gap: 50px; justify-content: center;');
// const item = document.querySelector('.item');
const allItems = document.getElementsByClassName('item');
// uiRps.appendChild(allItems);
allItems[0].setAttribute('style', 'border: 3px solid green; display: flex; flex-direction: column; gap: 20px;');
allItems[1].setAttribute('style', 'border: 3px solid green; display: flex; flex-direction: column; gap: 20px;');
allItems[2].setAttribute('style', 'border: 3px solid green; display: flex; flex-direction: column; gap: 20px;');

const button = document.getElementsByTagName('button');
button[0].setAttribute('style', 'padding: 12px;');
button[1].setAttribute('style', 'padding: 12px;');
button[2].setAttribute('style', 'padding: 12px;');

const result = document.getElementById('result');

result.setAttribute('style', 'color: yellow; font-size: 45px; border: 3px solid white; display: flex; align-items: center; margin-bottom: 20px; padding: 30px; flex-direction: column; font-weight: bolder;');

const finalScore = document.querySelector('#finalScore');
finalScore.setAttribute('style', 'border: 3px solid blue; margin-top: 30px; font-weight: bolder;');

const footer = document.createElement('div');
footer.classList.add('footer');
const pCredits = document.createElement('p');
footer.appendChild(pCredits);
pCredits.textContent = 'Created by Protoncoder';
const pFooterYear = document.createElement('p');
pFooterYear.textContent = '2023';
footer.appendChild(pFooterYear);
footer.setAttribute('style', 'border: 3px solid orange; display: inline-block; color: yellow; font-size: 24px; text-align: center; letter-spacing: 10px');
body.appendChild(footer);

/* #####################
*  # UI eventListeners #
*  ##################### */


/* this fix
* ####################################################################
* # Expected linebreaks to be 'LF' but found 'CRLF' error on Windows #
* #################################################################### */

/* eslint linebreak-style: ["error", "windows"] */

/* this game runs in console, so you should check
* results there "Ctrl+Shift+I" in any browser */

let playerScore = 0;
let compScore = 0;

// will randomly return rock, paper, scissors as computer
const getComputerChoice = (random) => { // arrow function
  // generate random number between 0 and 1
  random = Math.random();
  if (random <= 0.66 && random >= 0.34) {
    // console.log(random);
    return 'paper';
  } else if (random <= 0.33) {
    // console.log(random);
    return 'rock';
  } else {
    // console.log(random);
    return 'scissors';
  }
};
getComputerChoice();

// func to play a single round of Rock Scissors Paper
const playRound = (playerSelection, computerSelection) => {
  // console.log('1 ', playerSelection, '2 ', computerSelection);
  if (playerSelection === 'rock' && computerSelection === 'rock') {
    return 'It\'s a tie!';
  } else if (playerSelection === 'paper' && computerSelection === 'paper') {
    return 'It\'s a tie!';
  } else if (playerSelection === 'scissors' &&
    computerSelection === 'scissors') {
    return 'It\'s a tie!';
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    compScore++;
    return 'You lost! Paper beats Rock!';
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    playerScore++;
    return 'You won! Rock beats Scissors';
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    playerScore++;
    return 'You won! Scissors beats Paper';
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    compScore++;
    return 'You lost! Rock beats Scissors!';
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    playerScore++;
    return 'You won! Paper beats Rock!';
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    compScore++;
    return 'You lost! Scissors beats Paper!';
  } else {
    return 'Something went terribly wrong...';
  }
};

// let playerSelection;
// eslint-disable-next-line no-unused-vars
// const computerSelection = getComputerChoice();
// console.log(`${playerSelection},${computerSelection}`);
// console.log(playRound(playerSelection, computerSelection));

const game = () => {
  // play for five rounds
  /* for (i = 0; i < 5; i++) */ // {

  /* const playerSelection = prompt('Make your choice: ',
      'Rock, Paper, Scissors').toLowerCase();
  console.log(playRound(playerSelection, getComputerChoice
  ())); */
  // }
  if (playerScore > compScore) {
    console.log('');
    console.log('**********************');
    console.log('* You won! Congrats! *');
    console.log('**********************');
  } else if (compScore > playerScore) {
    console.log('');
    console.log('*****************************');
    console.log('* You lost! Condolescenses! *');
    console.log('*****************************');
  } else if (playerScore === compScore) {
    console.log('');
    console.log('***************');
    console.log('* It\'s a tie! *');
    console.log('***************');
  }
};

game();
console.log('');
console.log('playerScore: ', playerScore);
console.log('compScore: ', compScore);
console.log('');

/* const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
const fLen = fruits.length;
for (let i = 0; i < fLen; i++) {
}
console.log(''); */


