////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput() ;
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
if (playerMove == 'rock' && computerMove ==  'scissors'){
       winner = 'player';
       console.log('You win!');
   } 
   else if (playerMove == 'rock' && computerMove == 'paper') {
       winner = 'computer';
       console.log('You lose.');
   }
   else if (playerMove == 'paper' && computerMove == 'rock') {
       winner = 'player';
       console.log('You win!');
   }
   else if (playerMove == 'paper' && computerMove == 'scissors') {
       winner = 'computer';
       console.log('You lose.');
   }
   else if (playerMove == 'scissors' && computerMove == 'paper') {
       winner = 'player';
       console.log('You win!');
   }
   else if (playerMove == 'scissors' && computerMove == 'rock') {
       winner = 'computer';
       console.log('You lose.');
   }
   else {
       console.log("It's a tie!");
   }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;

    
    
    while(playerWins < 5 && computerWins < 5) {
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        var winner = getWinner(playerMove, computerMove);
        if (winner === 'player') {
            playerWins++;
            console.log('The computer chose ' + computerMove);
        }
        else if (winner === 'computer') {
            computerWins++;
            console.log('The computer chose ' + computerMove);
        }
        console.log('Player Score:' + playerWins);
        console.log('Computer Score:' + computerWins);
        console.log(' ');
    }

    return [playerWins, computerWins];
}

playToFive();