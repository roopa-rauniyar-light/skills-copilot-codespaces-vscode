//  create rock, paper and scissors game using javascript
//  computer will randomly select rock, paper or scissors
//  user will select rock, paper or scissors
//  determine who wins
//  display the winner
//  do not end the game until user wants to end it
//  display the number of games won by user and computer
//  rock, paper, scissors are the only valid inputs
//  if user enters invalid input, display error message and ask user to enter the input again
//  At each round, the player must enter one of the options in the list and be informed if they won, lost, or tied with the opponent.
//  The game should keep track of the score and display it after each round.
//  The game should continue until the player decides to quit.
//  The game should display the final score when the player quits.
//  The game should display the number of rounds played.
//  The game should display the number of rounds won by the player.
//  The game should display the number of rounds won by the computer.
//  The game should display the number of rounds tied.

// 1. create a function that randomly selects rock, paper or scissors
// 2. create a function that takes user input
// 3. create a function that determines who wins
// 4. create a function that displays the winner
// 5. create a function that asks the user if they want to play again
// 6. create a function that displays the number of games won by user and computer
// 7. create a function that displays the number of rounds played
// 8. create a function that displays the number of rounds won by the player
// 9. create a function that displays the number of rounds won by the computer
// 10. create a function that displays the number of rounds tied

const readline = require('readline');   // require readline module
const rl = readline.createInterface({   // create readline interface
    input: process.stdin,               // input from user
    output: process.stdout              // output to user
});

let userWins = 0;                       // number of games won by user

let computerWins = 0;                   // number of games won by computer

let roundsPlayed = 0;                   // number of rounds played  

let roundsWonByPlayer = 0;              // number of rounds won by player

let roundsWonByComputer = 0;            // number of rounds won by computer

let roundsTied = 0;                     // number of rounds tied

function computerSelection() {          // function to randomly select rock, paper or scissors
    let selection = Math.floor(Math.random() * 3);
    if (selection === 0) {
        return 'rock';
    } else if (selection === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}


function userSelection() {              // function to take user input
    rl.question('Enter rock, paper or scissors: ', (answer) => {
        if (answer === 'rock' || answer === 'paper' || answer === 'scissors') {
            determineWinner(answer);
        } else {
            console.log('Invalid input. Please enter rock, paper or scissors.');
            userSelection();
        }
    });
}

function determineWinner(userChoice) {  // function to determine who wins
    let computerChoice = computerSelection();
    console.log('Computer choice: ' + computerChoice);
    if (userChoice === computerChoice) {
        console.log('Tie');
        roundsTied++;
    } else if ((userChoice === 'rock' && computerChoice === 'scissors') || (userChoice === 'paper' && computerChoice === 'rock') || (userChoice === 'scissors' && computerChoice === 'paper')) {
        console.log('You win');
        roundsWonByPlayer++;
    } else {
        console.log('Computer wins');
        roundsWonByComputer++;
    }
    roundsPlayed++;
    playAgain();
}

function playAgain() {                  // function to ask user if they want to play again
    rl.question('Do you want to play again? (yes or no): ', (answer) => {
        if (answer === 'yes') {
            userSelection();
        } else if (answer === 'no') {
            console.log('Games won by user: ' + roundsWonByPlayer);
            console.log('Games won by computer: ' + roundsWonByComputer);
            rl.close();
        } else {
            console.log('Invalid input. Please enter yes or no.');
            playAgain();
        }
    });
}

userSelection();                        // call userSelection function

rl.on('close', () => {                  // close readline interface
    console.log('Rounds played: ' + roundsPlayed);
    console.log('Rounds won by player: ' + roundsWonByPlayer);
    console.log('Rounds won by computer: ' + roundsWonByComputer);
    console.log('Rounds tied: ' + roundsTied);
}
);

// run the program using node app.js command in terminal
// enter rock, paper or scissors when prompted
// enter yes or no when prompted
// the program will display the winner and ask if you want to play again
// the program will display the number of games won by user and computer
// the program will display the number of rounds played