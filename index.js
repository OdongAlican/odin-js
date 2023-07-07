
let playerSelection;

function requestUserInput() {
    playerSelection = prompt(`
    This is the Rock Paper Scissors Game, 
    Please type in either rock, paper or scissors
    to play the game
    `);

    console.log(playerSelection, 'playerSelection');
    if (playerSelection == null) return
}

requestUserInput();

const choices = ['rock', 'paper', 'scissors'];
const computerWin = 1;
const playerWin = 0;
let playerScore = 0;
let computerScore = 0;
let winner;

function getComputerChoice() {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {

    if (!playerSelection) {
        alert('Player has not typed in the value');
        requestUserInput();
        return;
    }

    if (playerSelection && choices.indexOf(playerSelection.toLowerCase()) == -1) {
        alert(`Please make sure you enter correct spellings of either rock, paper or scissors in lower or upper case.`);
        requestUserInput();
        return;
    }

    if (computerSelection.toLowerCase() === playerSelection.toLowerCase()) return -1

    if (computerSelection.toLowerCase() === choices[0]
        && playerSelection.toLowerCase() != choices[1]) {
        return computerWin;
    }
    else if (computerSelection.toLowerCase() === choices[1]
        && playerSelection.toLowerCase() != choices[2]) {
        return computerWin;
    }
    else if (computerSelection.toLowerCase() === choices[2]
        && playerSelection.toLowerCase() != choices[0]) {
        return computerWin;
    }
    else {
        return playerWin;
    }

}


function game() {

    for (let i = 0; i < 5; i++) {

        const computerSelection = getComputerChoice();

        const result = playRound(playerSelection, computerSelection);
        if (result === 1) {
            console.log(`Computer has won game number ${i + 1}`);
            computerScore++
        }
        if (result === 0) {
            console.log(`User has won game number ${i + 1}`);
            playerScore++
        }
        if (result === -1) {
            console.log(`Game number ${i + 1} is a Draw`)
        }
    }

    return {
        computerScore,
        playerScore
    }
}

const finalScore = game();

if (finalScore.computerScore > finalScore.playerScore) {
    const msg = 'Computer has won';
    console.log(msg)
    winner = msg;
}

if (finalScore.playerScore > finalScore.computerScore) {
    const msg = 'User has won';
    console.log(msg)
    winner = msg;
}

alert(`
    computer score: ${computerScore}
    user score: ${playerScore}
    ${winner && winner.length > 0 ? winner : 'Draw game!!'}
`)