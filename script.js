"use strict";

let boxes = [`0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`];
let player = 'X';
let numOfTurns = 0;
let playerX = 0;
let playerO = 0;
let playingBoard = document.getElementById('boxes');
let winner = document.getElementById('winner');


//resets the game
document.getElementById("redo").onclick = function () {
    resetGame();
}



//when the player clicks one of the boxes, this marks the box down with the respective symbol
function playerChoice(num) {
    numOfTurns++;
    if (player == 'X') {
        document.getElementById(num).textContent = "X";
        document.getElementById('playerTurn').textContent = "Player Turn: O";
        document.getElementById('numOfTurns').textContent = `Turn: ${numOfTurns}`;
        player = "O";
        num = num.split("");
        num = Number(num.pop())
        boxes[num] = "X";
        console.log(boxes);
    } else {
        document.getElementById(num).textContent = "O";
        document.getElementById('playerTurn').textContent = "Player Turn: X";
        document.getElementById('numOfTurns').textContent = `Turn: ${numOfTurns}`;
        player = "X";
        num = num.split("");
        num = Number(num.pop())
        boxes[num] = "O";
        console.log(boxes);
    }
}

//this lets a player win if they get 3 boxes w/ the same letter in a row
function playerWins() {

    //if X player wins
    if (boxes[1] == 'X' && boxes[2] == 'X' && boxes[3] == 'X') {
        console.log('Player X wins!')
        
        playerX++;
        document.getElementById('redo').textContent = "Restart?";
        document.getElementById('playerX').textContent = `Player X wins - ${playerX}`;
        winner.textContent = 'Player X wins!!'
    }
    if (boxes[4] == 'X' && boxes[5] == 'X' && boxes[6] == 'X') {
        console.log('Player X wins!')
        playerX++;
        document.getElementById('redo').textContent = "Restart?";
        document.getElementById('playerX').textContent = `Player X wins - ${playerX}`;
        winner.textContent = 'Player X wins!!'
    }
    if (boxes[7] == 'X' && boxes[8] == 'X' && boxes[9] == 'X') {
        console.log('Player X wins!')
        playerX++;
        document.getElementById('redo').textContent = "Restart?";
        document.getElementById('playerX').textContent = `Player X wins - ${playerX}`;
        winner.textContent = 'Player X wins!!'
    }
    if (boxes[1] == 'X' && boxes[4] == 'X' && boxes[7] == 'X') {
        console.log('Player X wins!')
        playerX++;
        document.getElementById('redo').textContent = "Restart?";
        document.getElementById('playerX').textContent = `Player X wins - ${playerX}`;
        winner.textContent = 'Player X wins!!'
    }
    if (boxes[2] == 'X' && boxes[5] == 'X' && boxes[8] == 'X') {
        console.log('Player X wins!')
        playerX++;
        document.getElementById('redo').textContent = "Restart?";
        document.getElementById('playerX').textContent = `Player X wins - ${playerX}`;
        winner.textContent = 'Player X wins!!'
    }
    if (boxes[3] == 'X' && boxes[6] == 'X' && boxes[9] == 'X') {
        console.log('Player X wins!')
        playerX++;
        document.getElementById('redo').textContent = "Restart?";
        document.getElementById('playerX').textContent = `Player X wins - ${playerX}`;
        winner.textContent = 'Player X wins!!'
    }
    if (boxes[1] == 'X' && boxes[5] == 'X' && boxes[9] == 'X') {
        console.log('Player X wins!')
        playerX++;
        document.getElementById('redo').textContent = "Restart?";
        document.getElementById('playerX').textContent = `Player X wins - ${playerX}`;
        winner.textContent = 'Player X wins!!'
    }
    if (boxes[3] == 'X' && boxes[5] == 'X' && boxes[7] == 'X') {
        console.log('Player X wins!')
        playerX++;
        document.getElementById('redo').textContent = "Restart?";
        document.getElementById('playerX').textContent = `Player X wins - ${playerX}`;
        winner.textContent = 'Player X wins!!'
    }

    //if O player wins
    if (boxes[1] == 'O' && boxes[2] == 'O' && boxes[3] == 'O') {
        console.log('Player Y wins!')
        playerX++;
        document.getElementById('redo').textContent = "Restart?";
        document.getElementById('playerX').textContent = `Player Y wins - ${playerY}`;
        winner.textContent = 'Player O wins!!'
    }
    if (boxes[4] == 'O' && boxes[5] == 'O' && boxes[6] == 'O') {
        console.log('Player O wins!')
        playerO++;
        document.getElementById('redo').textContent = "Restart?";
        document.getElementById('playerO').textContent = `Player O wins - ${playerO}`;
        winner.textContent = 'Player O wins!!'
    }
    if (boxes[7] == 'O' && boxes[8] == 'O' && boxes[9] == 'O') {
        console.log('Player O wins!')
        playerO++;
        document.getElementById('redo').textContent = "Restart?";
        document.getElementById('playerO').textContent = `Player O wins - ${playerO}`;
        winner.textContent = 'Player O wins!!'
    }
    if (boxes[1] == 'O' && boxes[4] == 'O' && boxes[7] == 'O') {
        console.log('Player O wins!')
        playerO++;
        document.getElementById('redo').textContent = "Restart?";
        document.getElementById('playerO').textContent = `Player O wins - ${playerO}`;
        winner.textContent = 'Player O wins!!'
    }
    if (boxes[2] == 'O' && boxes[5] == 'O' && boxes[8] == 'O') {
        console.log('Player O wins!')
        playerO++;
        document.getElementById('redo').textContent = "Restart?";
        document.getElementById('playerO').textContent = `Player O wins - ${playerO}`;
        winner.textContent = 'Player O wins!!'
    }
    if (boxes[3] == 'O' && boxes[6] == 'O' && boxes[9] == 'O') {
        console.log('Player O wins!')
        playerO++;
        document.getElementById('redo').textContent = "Restart?";
        document.getElementById('playerO').textContent = `Player O wins - ${playerO}`;
        winner.textContent = 'Player O wins!!'
    }
    if (boxes[1] == 'O' && boxes[5] == 'O' && boxes[9] == 'O') {
        console.log('Player O wins!')
        playerO++;
        document.getElementById('redo').textContent = "Restart?";
        document.getElementById('playerO').textContent = `Player O wins - ${playerO}`;
        winner.textContent = 'Player O wins!!'
    }
    if (boxes[3] == 'O' && boxes[5] == 'O' && boxes[7] == 'O') {
        console.log('Player O wins!')
        playerO++;
        document.getElementById('redo').textContent = "Restart?";
        document.getElementById('playerO').textContent = `Player O wins - ${playerO}`;
        winner.textContent = 'Player O wins!!'
    }
}

playingBoard.addEventListener('click', playerWins);


//resets game as though the page was refreshed
function resetGame() {
    player = 'X';
    numOfTurns = 0;
    //boxes[1].textContent = ('');
}
