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

function getHumanChoice() {
    return prompt("Enter your choice");
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
    console.log(`You win! ${capitalizeFirstLetter(humanChoice)} beats ${capitalizeFirstLetter(computerChoice)}`);
   }
   else if (humanChoice != computerChoice) {
    computerScore++;
    console.log(`You lose! ${capitalizeFirstLetter(computerChoice)} beats ${capitalizeFirstLetter(humanChoice)}`);
   }
}
function capitalizeFirstLetter(text) {
    return text.at(0).toUpperCase() + text.slice(1);
}
