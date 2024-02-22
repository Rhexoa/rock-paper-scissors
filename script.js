function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice == 0) {
        return "rock";
    } else if (computerChoice == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getPlayerChoice() {
    const choices = ["rock", "paper", "scissors"];

    let playerSelection = prompt("Rock, paper, or scissors?");
    let i=0;

    while (i < 3 && (playerSelection == null || !choices.includes(playerSelection.toLowerCase()))) {
        i++;
        playerSelection = prompt("Invalid input. Please enter rock, paper, or scissors.");
    }

    if (i == 3) {
        return null;
    }

    return playerSelection;
}

function playRound() {
    // your code here!
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();

    if (playerSelection == null) {
        return "lose";    
    }

    if (playerSelection === computerSelection) {
        return "tie";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return "win";
    } else {
        return "lose";
    }
  }


function playGame(){
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let result = playRound();

        if (result == "win"){
            console.log("You win!");
            playerScore++;
        } else if (result == "lose") {
            console.log("You lose!");
            computerScore++;
        } else {
            console.log("Tie!");
        }
    }

    if (playerScore > computerScore) {
        console.log("You win the game!");
    } else if (playerScore < computerScore) {
        console.log("You lose the game!");
    } else {
        console.log("The game is a tie!");
    }
}