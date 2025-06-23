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

function gameRound() {
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
        gameRound();
    }
    console.log("Game over!");
}

// Start the game
playGame();
