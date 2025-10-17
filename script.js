const title = document.querySelector(".title")
const humanImage = document.querySelector(".human");
const computerImage = document.querySelector(".computer");
const humanScoreValue = document.querySelector(".humanScoreValue");
const computerScoreValue = document.querySelector(".computerScoreValue");
const btns = document.querySelector(".options");

let round = 0;
let humanScore = 0;
let computerScore = 0;
let humanChoice = "";

btns.addEventListener('click', (event) => {
    if (round >= 5) return;
    round ++;
    computerImage.classList.add("computerShake");
    humanImage.classList.add("humanShake");
    
    setTimeout(() => {
        computerImage.classList.remove("computerShake");
        humanImage.classList.remove("humanShake");
    }, 500)

    switch (event.target.id) {
        case "rock":
            setTimeout(() => {humanImage.setAttribute("src", "./gameImages/stoneComputer.png")}, 500);
            humanChoice = "rock";
            break;
        case "paper":
            setTimeout(() => {humanImage.setAttribute("src", "./gameImages/paperComputer.png")}, 500);
            humanChoice = "paper";
            break;
        case "scissors":
            setTimeout(() => {humanImage.setAttribute("src", "./gameImages/scissorsComputer.png")}, 500);
            humanChoice = "scissors";
            break;
        default:
            humanChoice = null;
            break;
    }

    const computerChoice = getComputerChoice();
    console.log(humanChoice, computerChoice);
    playRound(humanChoice, computerChoice);

    setTimeout(() => {  
    humanScoreValue.textContent = humanScore;
    computerScoreValue.textContent = computerScore;
    }, 500); 

    setTimeout(()=>{
        humanImage.setAttribute("src", "./gameImages/stoneComputer.png");
        computerImage.setAttribute("src", "./gameImages/stonePlayer.png");
        title.textContent = "Rock-Paper-Scissors";
    }, 2000);
})

function scores(humanScore, computerScore) {
    if (humanScore > computerScore) {
        console.log("You have won!");
        title.textContent = "You have won!";
    } else if (humanScore === computerScore) {
        console.log("You have drawn!");
        title.textContent = "You have drawn!";
    } else {
        console.log("You have lost!");
        title.textContent = "You have lost!";
    }
}

function getComputerChoice() {
    let choice = Math.floor(Math.random() * (3) + 1); 
    switch (choice) {
        case 1:
            console.log("Comp => Rock");
            setTimeout(() => {computerImage.setAttribute("src", "./gameImages/stonePlayer.png");}, 500);
            return "Rock";
        case 2:
            console.log("Comp => Paper");
            setTimeout(() => {computerImage.setAttribute("src", "./gameImages/paperPlayer.png");}, 500);
            return "Paper";
        case 3: 
            console.log("Comp => Scissors");
            setTimeout(() => {computerImage.setAttribute("src", "./gameImages/scissorsPlayer.png");}, 500);
            return "Scissors";
        default:
            console.log("Comp => System Error");
            return "System Error";
    };

}

function playRound(humanChoice, computerChoice) {
    if (humanChoice.toUpperCase() == "ROCK") {
        if (computerChoice.toUpperCase() == "ROCK") {
            console.log("Draw!");
            setTimeout(() => {title.textContent = "Draw!";}, 500);
        } else if (computerChoice.toUpperCase() == "PAPER") {
            console.log("Paper beats Rock!");
            setTimeout(() => {title.textContent = "Paper beats Rock!"}, 500);
            computerScore ++;
        } else if (computerChoice.toUpperCase() == "SCISSORS") {
            console.log("Rock beats Scissors!");
            setTimeout(() => {title.textContent = "Rock beats Scissors!";}, 500);
            humanScore ++;
        }

    } else if (humanChoice.toUpperCase() == "PAPER") {
        if (computerChoice.toUpperCase() == "ROCK") {
            console.log("Paper beats Rock!");
            setTimeout(() => {title.textContent = "Paper beats Rock!";}, 500);
            humanScore ++;
        } else if (computerChoice.toUpperCase() == "PAPER") {
            console.log("Draw!");
            setTimeout(() => {title.textContent = "Draw!";}, 500);
        } else if (computerChoice.toUpperCase() == "SCISSORS") {
            console.log("Scissors beats Paper!");
            setTimeout(() => {title.textContent = "Scissors beats Paper!";}, 500);
            computerScore ++;
        }

    } else if (humanChoice.toUpperCase() == "SCISSORS") {

        if (computerChoice.toUpperCase() == "ROCK") {
            console.log("Rock beats Scissors!");
            setTimeout(() => {title.textContent = "Rock beats Scissors!";}, 500);
            computerScore ++;
        } else if (computerChoice.toUpperCase() == "PAPER") {
            console.log("Scissors beats Paper!");
            setTimeout(() => {title.textContent = "Scissors beats Paper!";}, 500);
            humanScore ++;
        } else if (computerChoice.toUpperCase() == "SCISSORS") {
            console.log("Draw!");
            setTimeout(() => {title.textContent = "Draw!";}, 500);
        }

    }
}

// function playGame() {
//     console.log(`\nYour score: ${humanScore}`);
//     console.log(`Computer score: ${computerScore}\n\n`);

//     const humanChoice = getHumanChoice();
//     const computerChoice = getComputerChoice();
//     playRound(humanChoice, computerChoice);
// }


// console.log(`\nYour score: ${humanScore}`);
// console.log(`Computer score: ${computerScore}\n`);

