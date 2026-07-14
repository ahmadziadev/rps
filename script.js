let humanScore = 0;
let computerScore = 0;
let roundNumber = 1;


const rock = "rock";
const paper = "paper";
const scissors = "scissors";


let humanCounter = document.querySelector(".human-score");
let computerCounter = document.querySelector(".bot-score");

let resetBtn = document.querySelector(".reset-button")
let arenaText = document.querySelector(".arena-text");
let arenaContent = document.querySelector(".arena-content");
let playerChoices = document.querySelector(".player-choices");
let statusCard = document.querySelector(".status-card");

let rockButton = document.querySelector(".rock-icon");
let paperButton = document.querySelector(".paper-icon");
let scissorsButton = document.querySelector(".scissors-icon");

let humanIcon = document.querySelector("#humanicon");
let computerIcon = document.querySelector("#computericon");

let verdictText = document.querySelector(".verdict");

document.addEventListener("DOMContentLoaded", init);
function init() {
    humanScore = 0;
    computerScore = 0;
    roundNumber = 1;
    updateScores();
    initChoiceScreen();
}

resetBtn.addEventListener("click", init);
statusCard.addEventListener("click", initChoiceScreen);

rockButton.addEventListener("click", () => playRound(rock));
paperButton.addEventListener("click", () => playRound(paper));
scissorsButton.addEventListener("click", () => playRound(scissors));

function updateScores() {
    humanCounter.innerHTML = humanScore.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
    });
    computerCounter.innerHTML = computerScore.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
    });
}


function getComputerChoice() {
    //should be able to generate 3 choices
    let choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            return rock;
            break;
        case 1:
            return paper;
            break;
    
        default:
            return scissors;
    }
}

function initChoiceScreen() {
    arenaText.innerHTML = "<h1>Choose</h1>";
    arenaContent.style.display = "none";
    statusCard.style.display = "none";
    playerChoices.style.display = "flex";
}

function initBattleScreen() {
    arenaText.innerHTML = `<h1>Round ${roundNumber}</h1>`;
    arenaContent.style.display = "flex";
    playerChoices.style.display = "none";
}

function verdict(text) {
    statusCard.style.display = "flex";
    verdictText.innerHTML = text;
}
function playRound(humanChoice) {
    let computerChoice = getComputerChoice();
    humanIcon.src = `assets/${humanChoice}.svg`;
    computerIcon.src = `assets/${computerChoice}.svg`;
    initBattleScreen();
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
   roundNumber++;
}
