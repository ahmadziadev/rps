let humanScore = 0;
let computerScore = 0;

const scissors = "scissors";
const rock = "rock";
const paper = "paper";

function getComputerChoice() {
    //should be able to generate 3 choices
    let choice = Math.floor(Math.random() * 3);
    if (choice == 0) {
        return rock;
    }
    else if (choice == 1) {
        return paper;
    }
    return scissors;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
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
   }
   else if (humanChoice != computerChoice) computerScore++;
}