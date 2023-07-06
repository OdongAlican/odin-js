function getComputerChoice () {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

getComputerChoice();