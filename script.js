let humanScore = 0;
let computerScore = 0;

const rock = 0;
const paper = 1;
const scissors = 2;

function init() {
    humanScore = 0;
    computerScore = 0;
    updateScores();
    playRound();
}


function getComputerChoice() {
    //should be able to generate 3 choices
    let choice = Math.floor(Math.random() * 3);
    return choice;
}

function getHumanChoice() {
}

function playRound() {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    /*
    cases where human can win:
    human       computer
    rock        scissors
    paper       rock
    scissors    paper

    computer will win all the rest of the cases as long as they are not the same
    */
   if ((humanChoice == rock && computerChoice == scissors) ||
   (humanChoice == paper && computerChoice == rock) ||
   (humanChoice == scissors && computerChoice == paper)) {
    humanScore++;
    verdict("You Win!")
   }
   else if (humanChoice != computerChoice) {
    computerScore++;
    verdict("You Lost :(")
   }
   else {
    verdict("It's a Draw!")
   }
   updateScores();
}
