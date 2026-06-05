let humanScore, computerScore = 0;

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    
    if (randomNumber === 1) {
        console.log("Rock");
    } else if (randomNumber === 2) {
        console.log("Paper");
    } else {
        console.log("Scissors");
    }
}

function getHumanChoice() {
    let choice = Number(prompt("Choose a random number between (1 - 3)? (1 == Rock, 2 == Paper, and 3 == Scissors)"));

    if (choice === 1) {
        alert("Rock");
    } else if (choice === 2) {
        alert("Paper");
    } else {
        alert("Scissors");
    }
}

getComputerChoice()