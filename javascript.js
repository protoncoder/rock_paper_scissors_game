/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
/* eslint linebreak-style: ["error", "windows"] */

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


/* ##############
*  # Game Logic #
*  ############## */

let playerScore = 0;
let compScore = 0;

const btnRock = document.querySelector('#btn_rock');
const btnPaper = document.querySelector('#btn_paper');
const btnScissors = document.querySelector('#btn_scissors');
const result = document.getElementById('result');

result.setAttribute('style', 'color: yellow; font-size: 45px; border: 3px solid white; display: flex; align-items: center; margin-bottom: 20px; padding: 30px; flex-direction: column; font-weight: bolder;');

const finalScore = document.querySelector('#finalScore');
finalScore.setAttribute('style', 'border: 3px solid blue; margin-top: 30px; font-weight: bolder; color: yellow; font-size: 18px;');
result.appendChild(finalScore);

// will randomly return rock, paper, scissors as computer
const getComputerChoice = (random) => { // arrow function
  // generate random number between 0 and 1
  random = Math.random();
  if (random <= 0.66 && random >= 0.34) {
    return 'paper';
  } else if (random <= 0.33) {
    return 'rock';
  } else {
    return 'scissors';
  }
};
getComputerChoice();

// func to play a single round of Rock Scissors Paper
const playRound = (playerSelection, computerSelection) => {
  // console.log('1 ', playerSelection, '2 ', computerSelection);
  if (playerSelection === 'btn_rock' && computerSelection === 'rock') {
    const p1 = document.createElement('p');
    p1.textContent = `It's a tie! You both chose: ${playerSelection}`;
    finalScore.appendChild(p1);
  } else if (playerSelection === 'btn_paper' && computerSelection === 'paper') {
    const p1 = document.createElement('p');
    p1.textContent = `It's a tie! You both chose: ${playerSelection}`;
    finalScore.appendChild(p1);
  } else if (playerSelection === 'btn_scissors' &&
    computerSelection === 'scissors') {
    const p1 = document.createElement('p');
    p1.textContent = `It's a tie! You both chose: ${playerSelection}`;
    finalScore.appendChild(p1);
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

btnRock.addEventListener('click', () => {
  const computerSelection = getComputerChoice();
  const playerSelection = 'btn_rock';
  playRound(playerSelection, computerSelection);
});

btnPaper.addEventListener('click', () => {
  const computerSelection = getComputerChoice();
  const playerSelection = 'btn_paper';
  playRound(playerSelection, computerSelection);
});

btnScissors.addEventListener('click', () => {
  const computerSelection = getComputerChoice();
  const playerSelection = 'btn_scissors';
  playRound(playerSelection, computerSelection);
});

// let playerSelection;
// eslint-disable-next-line no-unused-vars
// const computerSelection = getComputerChoice();
// console.log(`${playerSelection},${computerSelection}`);
// console.log(playRound(playerSelection, computerSelection));

// const game = () => {
// play for five rounds
/* for (i = 0; i < 5; i++) */ // {

/* const playerSelection = prompt('Make your choice: ',
      'Rock, Paper, Scissors').toLowerCase();
  console.log(playRound(playerSelection, getComputerChoice
  ())); */
// }
/*  if (playerScore > compScore) {

  } else if (compScore > playerScore) {

  } else if (playerScore === compScore) {

  }
}; */

// game();
