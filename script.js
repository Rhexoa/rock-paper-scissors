function getOpponentChoice() {
    let opponentChoice = Math.floor(Math.random() * 3);
    let opponentChoiceImg = document.querySelector("#opponent-choice img");
    if (opponentChoice == 0) {
        opponentChoiceImg.src = "./images/rock.png";
        return "rock";
    } else if (opponentChoice == 1) {
        opponentChoiceImg.src = "./images/paper.png";
        return "paper";
    } else {
        opponentChoiceImg.src = "./images/scissors.png";
        return "scissors";
    }

    
}

function getPlayerChoice() {
    const choices = ["rock", "paper", "scissors"];

    let playerChoice = prompt("Rock, paper, or scissors?");
    let i=0;

    while (i < 3 && (playerChoice == null || !choices.includes(playerChoice.toLowerCase()))) {
        i++;
        playerChoice = prompt("Invalid input. Please enter rock, paper, or scissors.");
    }

    if (i == 3) {
        return null;
    }

    return playerChoice;
}

function playRound(playerChoice) {
    // your code here!
    let opponentChoice = getOpponentChoice();

    if (playerChoice == null) {
        updateScore("lose");    
    }

    if (playerChoice === opponentChoice) {
        updateScore("tie");
        
    } else if (
        (playerChoice === "rock" && opponentChoice === "scissors") ||
        (playerChoice === "paper" && opponentChoice === "rock") ||
        (playerChoice === "scissors" && opponentChoice === "paper")
    ) {
        updateScore("win");
    } else {
        updateScore("lose");
    }
  }

function updateScore(result) {
    if (result == "win") {
        playerScore++;
    } else if (result == "lose") {
        computerScore++;     
    }
    document.querySelector("header div").textContent = `Score: ${playerScore} - ${computerScore}`;

    let resultElement = document.querySelector("#result");
    if (playerScore == 5){
        resultElement.textContent = "You Win!";
        playerScore = 0;
        computerScore = 0;
    } else if(computerScore == 5) {
        resultElement.textContent = "You Lose!";
        playerScore = 0;
        computerScore = 0;
    } else {
        resultElement.textContent = "";
    }
}

let buttons = document.querySelector("#buttons");
let playerScore = 0;
let computerScore = 0;
let result = document.querySelector("#result");

buttons.addEventListener("click", (e) => {
    let imgSrc = "";
    let targetElement = e.target;

    if (targetElement.tagName != "BUTTON") {
        targetElement = targetElement.closest("button");
    }

    if (targetElement == null) {
        return;
    }

    switch(targetElement.id) {
        case "rock":
            imgSrc = "./images/rock.png";
            break;
        case "paper":
            imgSrc = "./images/paper.png";
            break;
        case "scissors":
            imgSrc = "./images/scissors.png";
            break;
    }

    let playerChoiceImg = document.querySelector("#player-choice img");
    playerChoiceImg.src = imgSrc;
    playRound(targetElement.id);
});

