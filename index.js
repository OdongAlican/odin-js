/*
  Win scenarios

  rock > scissors
  scissors > paper
  paper > rock
 */

let playerSelection;

function requestUserInput() {
    playerSelection = prompt(`
    This is the Rock Paper Scissors Game, 
    Please type in either rock, paper or scissors
    to play the game
    `);
}

requestUserInput()

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
    }

    if (playerSelection && choices.indexOf(playerSelection.toLowerCase()) == -1) {
        alert(`Please make sure you enter correct spellings of either rock, paper or scissors in lower or upper case.`);
        requestUserInput();
    }

    console.log(playerSelection, computerSelection, 'selection radoms' )

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
        if (result === 1) { computerScore++ }
        if (result === 0) { playerScore++ }
    }

    return {
        computerScore,
        playerScore
    }
}

const finalScore = game();

if (finalScore.computerScore > finalScore.playerScore) winner = 'Computer has won';
if (finalScore.playerScore > finalScore.computerScore) winner = 'User has won';


alert(`
    computer score: ${computerScore}
    user score: ${playerScore}
    ${winner.length > 0 ? winner : 'Draw game!!'}
`)