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


function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        let humanInput = humanChoice.toLowerCase();

        if (humanInput === computerChoice) {
            console.log("it's a draw");
        } else if (humanInput === "rock" && computerChoice === "paper") {
            console.log("rock lose vs paper");
            ++computerScore;
        } else if (humanInput === "paper" && computerChoice === "scissors") {
            console.log("paper lose vs scissors");
            ++computerScore;
        } else if (humanInput === "scissors" && computerChoice === "rock") {
            console.log("scissors lose vs rock");
            ++computerScore;
        } else if (computerChoice === "rock" && humanInput === "paper") {
            console.log("paper beat rock");
            ++humanScore;
        } else if (computerChoice === "paper" && humanInput === "scissors") {
            console.log("scissors beat paper");
             ++humanScore;
        } else if (computerChoice === "scissors" && humanInput === "rock") {
            console.log("rock beat scissors");
            ++humanScore;
        } else {
            console.log("nothing to say");
        }
        }

        let human1 = getHumanChoice(); let computer1 = getComputerChoice();
        playRound(human1, computer1)
        let human2 = getHumanChoice(); let computer2 = getComputerChoice();
        playRound(human2, computer2)
        let human3 = getHumanChoice(); let computer3 = getComputerChoice();
        playRound(human3, computer3)
        let human4 = getHumanChoice(); let computer4 = getComputerChoice();
        playRound(human4, computer4)
        let human5 = getHumanChoice(); let computer5 = getComputerChoice();
        playRound(human5, computer5)

        if (humanScore > computerScore) {
            console.log("You Win the Game!");
        } else {
            console.log("You lost vs Computer!");
        }
}

playGame();