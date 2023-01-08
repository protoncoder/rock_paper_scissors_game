//will randomly return rock, paper, scissors as computer
function getComputerChoice () {
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
getComputerChoice();


