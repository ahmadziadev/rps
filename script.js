let humanScore = 0;
let computerScore = 0;
function getComputerChoice() {
    //should be able to generate 3 choices
    let choice = Math.floor(Math.random() * 3);
    if (choice == 0) {
        return "rock";
    }
    else if (choice == 1) {
        return "paper";
    }
    return "scissors";
}