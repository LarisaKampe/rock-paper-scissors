const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
function getPlayerChoice() {
    let playerChoice;
    do {
        playerChoice = prompt("Enter rock, paper, or scissors:").toLowerCase();
    } while (!choices.includes(playerChoice));
    return playerChoice;
}
function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    }
    if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return "You win!";
    }
    return "Computer wins!";
}
function playRound() {
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    console.log(`You chose: ${playerChoice}`);
    console.log(`Computer chose: ${computerChoice}`);
    const result = determineWinner(playerChoice, computerChoice);
    console.log(result);
}
function playGame() {
    const rounds = parseInt(prompt("How many rounds would you like to play?"), 10);
    for (let i = 0; i < rounds; i++) {
        console.log(`Round ${i + 1}:`);
        playRound();
    }
    console.log("Game over!");
}
playGame();
// This code implements a simple Rock, Paper, Scissors game where the player can play multiple rounds against the computer.
// The player inputs their choice, the computer randomly selects its choice, and the winner is determined based on the rules of the game.
// The game continues for a specified number of rounds, and the results are displayed after each round.
// The game is played in the console, and prompts are used to get user input.