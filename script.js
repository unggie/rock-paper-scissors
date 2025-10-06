let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * (3) + 1); 
    switch (choice) {
        case 1:
            console.log("Comp => Rock");
            return "Rock";
            // break;
        case 2:
            console.log("Comp => Paper");
            return "Paper";
            // break;
        case 3: 
            console.log("Comp => Scissors");
            return "Scissors";
            // break;
        default:
            console.log("Comp => System Error");
            return "System Error";
            // break;
    }

}

function getHumanChoice() {
    let choice = window.prompt(`1. Rock\n2. Paper\n3. Scissors`);
    switch (choice) {
        case "1":
            console.log("You => Rock");
            return "Rock";
            // break;
        case "2":
            console.log("You => Paper");
            return "Paper";
            // break;
        case "3": 
            console.log("You => Scissors");
            return "Scissors";
            // break;
        default:
            console.log("You => System Error");
            return "System Error";
            // break;
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice.toUpperCase() == "ROCK") {

        if (computerChoice.toUpperCase() == "ROCK") {
            console.log("Draw!");
        } else if (computerChoice.toUpperCase() == "PAPER") {
            console.log("Paper beats Rock!");
            computerScore ++;
        } else if (computerChoice.toUpperCase() == "SCISSORS") {
            console.log("Rock beats Scissors!");
            humanScore ++;
        }

    } else if (humanChoice.toUpperCase() == "PAPER") {

        if (computerChoice.toUpperCase() == "ROCK") {
            console.log("Paper beats Rock!");
            humanScore ++;
        } else if (computerChoice.toUpperCase() == "PAPER") {
            console.log("Draw!");
        } else if (computerChoice.toUpperCase() == "SCISSORS") {
            console.log("Scissors beats Paper!");
            computerScore ++;
        }

    } else if (humanChoice.toUpperCase() == "SCISSORS") {

        if (computerChoice.toUpperCase() == "ROCK") {
            console.log("Rock beats Scissors!");
            computerScore ++;
        } else if (computerChoice.toUpperCase() == "PAPER") {
            console.log("Scissors beats Paper!");
            humanScore ++;
        } else if (computerChoice.toUpperCase() == "SCISSORS") {
            console.log("Draw!");
        }

    }
}

function playGame() {
    console.log(`\nYour score: ${humanScore}`);
    console.log(`Computer score: ${computerScore}\n\n`);

    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
}

playGame();
playGame();
playGame();
playGame();
playGame();

console.log(`\nYour score: ${humanScore}`);
console.log(`Computer score: ${computerScore}\n`);

if (humanScore > computerScore) {
    console.log("You have won!");
} else if (humanScore === computerScore) {
    console.log("You have drawn!");
} else {
    console.log("You have lost!");
}