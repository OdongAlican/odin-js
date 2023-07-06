/*
  Win scenarios

  rock > scissors
  scissors > paper
  paper > rock
 */

const choices = ['rock', 'paper', 'scissors'];
const computerWin = 'Computer has won';
const playerWin = 'Player has won';
const playerSelection = "rock";

function getComputerChoice() {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    if (computerSelection.toLowerCase() === playerSelection.toLowerCase()) return 'Its a draw game, Play again!!'

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


function game () {
    
    for(let i = 0; i < 5; i++){

        const computerSelection = getComputerChoice();

        console.log(playRound(playerSelection, computerSelection));
    }
}

game();