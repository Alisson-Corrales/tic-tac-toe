"use strict";

let boxes = [`0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`];
let player = 'X';
let numOfTurns = 0;
let playerX = 0;
let playerO = 0;

document.getElementById("redo").onclick = function () {
    resetGame();
}



//when the player clicks one of the boxes, this marks the box down with the respective symbol
function playerChoice(num) {
    numOfTurns++;
    if (player == 'X') {
        document.getElementById(num).textContent = "X";
        document.getElementById('playerTurn').textContent = "Next Player: X";
        document.getElementById('numOfTurns').textContent = `Turn: ${numOfTurns}`;
        player = "O";
        num = num.split("");
        num = Number(num.pop())
        boxes[num] = "X";
        console.log(boxes);
    } else {
        document.getElementById(num).textContent = "O";
        document.getElementById('playerTurn').textContent = "Next Player: O";
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
    //makes points go up by depending who wins
    playerX++;
    playerY++;

    //if X player wins
    if (boxes[1] == 'X' && boxes[2] == 'X' && boxes[3] == 'X') {
        alert('you win!');
        document.getElementById('redo').textContent = "Restart?";
        document.getElementById('playerX').textContent = `Player X wins - ${playerX}`;
    }
    if (boxes[4] == 'X' && boxes[5] == 'X' && boxes[6] == 'X') {
        alert('you win!');
        document.getElementById('redo').textContent = "Restart?";
        document.getElementById('playerX').textContent = `Player X wins - ${playerX}`;
    }
    if (boxes[7] == 'X' && boxes[8] == 'X' && boxes[9] == 'X') {
        alert('you win!');
        document.getElementById('redo').textContent = "Restart?";
        document.getElementById('playerX').textContent = `Player X wins - ${playerX}`;
    }
    if (boxes[1] == 'X' && boxes[4] == 'X' && boxes[7] == 'X') {
        alert('you win!');
        document.getElementById('redo').textContent = "Restart?";
        document.getElementById('playerX').textContent = `Player X wins - ${playerX}`;
    }
    if (boxes[2] == 'X' && boxes[5] == 'X' && boxes[8] == 'X') {
        alert('you win!');
        document.getElementById('redo').textContent = "Restart?";
        document.getElementById('playerX').textContent = `Player X wins - ${playerX}`;
    }
    if (boxes[3] == 'X' && boxes[6] == 'X' && boxes[9] == 'X') {
        alert('you win!');
        document.getElementById('redo').textContent = "Restart?";
        document.getElementById('playerX').textContent = `Player X wins - ${playerX}`;
    }
    if (boxes[1] == 'X' && boxes[5] == 'X' && boxes[9] == 'X') {
        alert('you win!');
        document.getElementById('redo').textContent = "Restart?";
        document.getElementById('playerX').textContent = `Player X wins - ${playerX}`;
    }
    if (boxes[3] == 'X' && boxes[5] == 'X' && boxes[7] == 'X') {
        alert('you win!');
        document.getElementById('redo').textContent = "Restart?";
        document.getElementById('playerX').textContent = `Player X wins - ${playerX}`;
    }

    //if O player wins
    if (boxes[1] == 'O' && boxes[2] == 'O' && boxes[3] == 'O') {
        alert('you win!');
        document.getElementById('redo').textContent = "Restart?";
        document.getElementById('playerX').textContent = `Player X wins - ${playerX}`;
    }
    if (boxes[4] == 'O' && boxes[5] == 'O' && boxes[6] == 'O') {
        alert('you win!');
        document.getElementById('redo').textContent = "Restart?";
        document.getElementById('playerX').textContent = `Player X wins - ${playerX}`;
    }
    if (boxes[7] == 'O' && boxes[8] == 'O' && boxes[9] == 'O') {
        alert('you win!');
        document.getElementById('redo').textContent = "Restart?";
        document.getElementById('playerX').textContent = `Player X wins - ${playerX}`;
    }
    if (boxes[1] == 'O' && boxes[4] == 'O' && boxes[7] == 'O') {
        alert('you win!');
        document.getElementById('redo').textContent = "Restart?";
        document.getElementById('playerX').textContent = `Player X wins - ${playerX}`;
    }
    if (boxes[2] == 'O' && boxes[5] == 'O' && boxes[8] == 'O') {
        alert('you win!');
        document.getElementById('redo').textContent = "Restart?";
        document.getElementById('playerX').textContent = `Player X wins - ${playerX}`;
    }
    if (boxes[3] == 'O' && boxes[6] == 'O' && boxes[9] == 'O') {
        alert('you win!');
        document.getElementById('redo').textContent = "Restart?";
        document.getElementById('playerX').textContent = `Player X wins - ${playerX}`;
    }
    if (boxes[1] == 'O' && boxes[5] == 'O' && boxes[9] == 'O') {
        alert('you win!');
        document.getElementById('redo').textContent = "Restart?";
        document.getElementById('playerX').textContent = `Player X wins - ${playerX}`;
    }
    if (boxes[3] == 'O' && boxes[5] == 'O' && boxes[7] == 'O') {
        alert('you win!');
        document.getElementById('redo').textContent = "Restart?";
        document.getElementById('playerX').textContent = `Player X wins - ${playerX}`;
    }
}

//resets game
function resetGame() {
    player = 'X';
    numOfTurns = 0;
}
