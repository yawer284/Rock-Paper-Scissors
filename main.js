let humanScore, computerScore = 0;

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    
    if (randomNumber === 1) {
        return "rock";
    } else if (randomNumber === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = Number(prompt("Choose a random number between (1 - 3)? (1 == Rock, 2 == Paper, and 3 == Scissors)"));

    if (choice === 1) {
        return "Rock";
    } else if (choice === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    let input = humanChoice.toLowerCase();

    if(input === computerChoice) {
        console.log("it's a draw");
    } else if(input === "rock" && computerChoice === "paper") {
        console.log("Computer win!");
        return ++computerScore;
    } else if(input === "paper" && computerChoice === "scissors") {
        console.log("Computer win!");
        return ++computerScore;
    } else if(input === "scissors" && computerChoice === "rock") {
        console.log("Computer Win!");
        return ++computerScore;
    } else if(computerChoice === "rock" && input === "paper") {
        console.log("You Win!");
        return ++humanScore;
    } else if(computerChoice === "paper" && input === "scissors") {
        console.log("You Win!");
        return ++humanScore;
    } else if(computerChoice === "scissors" && input === "rock") {
        console.log("You Win!");
        return ++humanScore;
    } else {
        console.log("nothing to say");
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection,computerSelection);