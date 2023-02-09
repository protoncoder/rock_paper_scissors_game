/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
/* eslint linebreak-style: ["error", "windows"] */

/* ############# *
*  # Simple UI # *
*  ############# */
const body = document.querySelector('body');
body.setAttribute('style', 'display: flex; justify-content: center; flex-direction: column; background-image: linear-gradient(to right, #0f0c29, #302b63, #24243e); border: 5px solid blue; margin: 5px;');

const scoreScreen = document.querySelector('#scoreScreen');
scoreScreen.setAttribute('style', 'border: 3px solid black; display: flex; justify-content: center; gap: 200px; padding: 50px; margin-top: 20px; margin-bottom: 20px; color: yellow; font-weight: bolder; font-size: 30px; align-items: center;');

const uiRps = document.querySelector('.ui-rps');
body.appendChild(uiRps);
uiRps.setAttribute('style', 'border: 3px solid red; display: flex; gap: 50px; justify-content: center;');

const allItems = document.getElementsByClassName('item');
allItems[0].setAttribute('style', 'border: 3px solid green; display: flex; flex-direction: column;');
allItems[1].setAttribute('style', 'border: 3px solid green; display: flex; flex-direction: column;');
allItems[2].setAttribute('style', 'border: 3px solid green; display: flex; flex-direction: column;');

const cursorPointer = document.getElementsByTagName('img');
cursorPointer[0].style.cursor = 'pointer';
cursorPointer[1].style.cursor = 'pointer';
cursorPointer[2].style.cursor = 'pointer';

/* ########## *
*  # footer # *
*  ########## */
const footer = document.createElement('div');
footer.classList.add('footer');
const pCredits = document.createElement('div');
footer.appendChild(pCredits);
pCredits.textContent = `Created by Protoncoder`;
const pFooterYear = document.createElement('div');
// █ Alt + 987 █ │ Alt + 179 │
pFooterYear.textContent = '█████│2023│█████';
footer.appendChild(pFooterYear);
const source = document.createElement('div');
source.textContent = 'https://github.com/protoncoder';
footer.appendChild(source);
footer.setAttribute('style', 'border: 3px solid orange; display: flex; color: yellow; font-size: 24px; text-align: center; letter-spacing: 2px; flex-direction: column; margin-top: 25px; line-height: 45px;');
body.appendChild(footer);

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
finalScore.setAttribute('style', 'border: 3px solid blue; margin-top: 30px; font-weight: bolder; color: yellow; font-size: 18px; background :linear-gradient(to right, #0f0c29, #302b63, #24243e);');
result.appendChild(finalScore);

// will randomly return rock, paper, scissors as computer
const getComputerChoice = (random) => {
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
    finalScore.textContent = `It's a tie! You both chose: ${computerSelection}`;
    result.appendChild(finalScore);
  } else if (playerSelection === 'btn_paper' && computerSelection === 'paper') {
    finalScore.textContent = `It's a tie! You both chose: ${computerSelection}`;
    result.appendChild(finalScore);
  } else if (playerSelection === 'btn_scissors' &&
    computerSelection === 'scissors') {
    finalScore.textContent = `It's a tie! You both chose: ${computerSelection}`;
    result.appendChild(finalScore);
  } else if (playerSelection === 'btn_rock' && computerSelection === 'paper') {
    compScore++;
    finalScore.textContent = `You lose! paper beats rock!`;
    result.appendChild(finalScore);
  } else if (playerSelection === 'btn_rock' && computerSelection === 'scissors') {
    playerScore++;
    finalScore.textContent = `You won! rock beats scissors!`;
    result.appendChild(finalScore);
  } else if (playerSelection === 'btn_scissors' && computerSelection === 'paper') {
    playerScore++;
    finalScore.textContent = `You won! scissors beats paper!`;
    result.appendChild(finalScore);
  } else if (playerSelection === 'btn_scissors' && computerSelection === 'rock') {
    compScore++;
    finalScore.textContent = `You lose! rock beats scissors!`;
    result.appendChild(finalScore);
  } else if (playerSelection === 'btn_paper' && computerSelection === 'rock') {
    playerScore++;
    finalScore.textContent = `You won! paper beats rock!`;
    result.appendChild(finalScore);
  } else if (playerSelection === 'btn_paper' && computerSelection === 'scissors') {
    compScore++;
    finalScore.textContent = `You lose! scissors beats paper!`;
    result.appendChild(finalScore);
  } else {
    finalScore.textContent = `Something went terrible wrong...`;
    result.appendChild(finalScore);
  }
};

const checkForWinner = (playerScore, compScore) => {
  if (playerScore === 5) {
    finalScore.textContent = 'You won! Congrats!';
    // finalScore.setAttribute('style', 'color: green;');
    finalScore.style.color = 'green';
    result.appendChild(finalScore);
    // disables buttons when playerScore is 5
    document.getElementById('btn_rock').disabled = true;
    // make buttons less visible
    btn_rock.style.opacity = '0.5';
    btn_paper.style.opacity = '0.5';
    btn_scissors.style.opacity = '0.5';
    btn_rock.style.cursor = 'no-drop';
    btn_paper.style.cursor = 'no-drop';
    btn_scissors.style.cursor = 'no-drop';
    img_rock.style.cursor = 'no-drop';
    img_paper.style.cursor = 'no-drop';
    img_scissors.style.cursor = 'no-drop';
    document.getElementById('btn_paper').disabled = true;
    document.getElementById('btn_scissors').disabled = true;
  } else if (compScore === 5) {
    finalScore.textContent = 'You lost! Meow Meow Meow...';
    finalScore.style.color = 'red';
    result.appendChild(finalScore);
    // disables buttons when compScore is 5
    document.getElementById('btn_rock').disabled = true;
    document.getElementById('btn_paper').disabled = true;
    document.getElementById('btn_scissors').disabled = true;
    // make buttons less visible
    btn_rock.style.opacity = '0.5';
    btn_paper.style.opacity = '0.5';
    btn_scissors.style.opacity = '0.5';
    // make cursor to can't click
    btn_rock.style.cursor = 'no-drop';
    btn_paper.style.cursor = 'no-drop';
    btn_scissors.style.cursor = 'no-drop';
    img_rock.style.cursor = 'no-drop';
    img_paper.style.cursor = 'no-drop';
    img_scissors.style.cursor = 'no-drop';
  }
};

/* ##############################
*  # Update scores in real time #
*  ############################## */
const updateScores = (playerSelection, computerSelection) => {
  scorePlayer.textContent = `PLAYER SCORE: ${playerScore}`;
  scoreComp.textContent = `COMPUTER SCORE: ${compScore}`;
};

/* const resetScore = () => {
  playerScore = 0;
  compScore = 0;
  finalScore.textContent = 'Please choose your weapon';
}; */

/* #####################
*  # UI eventListeners #
*  ##################### */
btnRock.addEventListener('click', () => {
  const computerSelection = getComputerChoice();
  const playerSelection = 'btn_rock';
  playRound(playerSelection, computerSelection);
  updateScores(playerSelection, computerSelection);
  checkForWinner(playerScore, compScore);
});

btnPaper.addEventListener('click', () => {
  const computerSelection = getComputerChoice();
  const playerSelection = 'btn_paper';
  playRound(playerSelection, computerSelection);
  updateScores(playerSelection, computerSelection);
  checkForWinner(playerScore, compScore);
});

btnScissors.addEventListener('click', () => {
  const computerSelection = getComputerChoice();
  const playerSelection = 'btn_scissors';
  playRound(playerSelection, computerSelection);
  updateScores(playerSelection, computerSelection);
  checkForWinner(playerScore, compScore);
});

const scorePlayer = document.querySelector('#scorePlayer');
scorePlayer.setAttribute('style', 'border: 3px solid white;');
scorePlayer.textContent = `PLAYER SCORE: ${playerScore}`;
scoreScreen.appendChild(scorePlayer);

const reset = document.querySelector('#reset');
scoreScreen.appendChild(reset);
reset.setAttribute('style', 'padding: 5px 20px 5px 20px; background-image: linear-gradient(to right, #0f0c29, #302b63, #24243e); color: yellow; font-weight: bolder; border-radius: 5px; border: 1px solid yellow; cursor: pointer; box-shadow: 1px 1px 20px 5px;');

/* #########################
*  # reset button and func #
*  ######################### */
//  <button onclick="resetScore()"> Reset The Game </button>

// document.querySelector('#scorePlayer');
// document.querySelector('#scoreComp');


const scoreComp = document.querySelector('#scoreComp');
scoreComp.setAttribute('style', 'border: 3px solid white; margin-right: 150px;');
scoreComp.textContent = `COMPUTER SCORE: ${compScore}`;
scoreScreen.appendChild(scoreComp);
