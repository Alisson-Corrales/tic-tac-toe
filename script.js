"use strict";

let boxes = [`1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`];
let player = 'X';
let numOfTurns = 0;
let playerX = 0;
let playerO = 0;

document.getElementById("redo").onclick = function () {
    resetGame();
}


//when a player wins this happens
function youWin() {
    for (let turns = 0; turns > turns.length; turns++) {
        if (playerTurns == 3) {
            document.getElementById('').textContent = "Restart?";
        }
    }
}

//when the player clicks one of the boxes, this marks the box down with the respective symbol
function playerChoice(num) {
    if (player == 'X') {
        document.getElementById(num).textContent = "X";
        player = "O";
    } else {
        document.getElementById(num).textContent = "O";
        player = "X";
    }
}
//    if (player == 'X') {
//        document.getElementById(num).textContent = "X";
//        document.getElementById('playerTurn').textContent = `Player: ${num}`;
//        player = "O";
//    } else {
//        document.getElementById(num).textContent = "O";
//        document.getElementById('playerTurn').textContent = `Player: ${num}`;
//        player = "X";
//    }
//}

//this lets a player win if they get 3 in a row
function playerWins() {
    for (let boxes = 0; boxes = 3; turns++) {
        if () {
            i
        }
    }
}

//resets game
function resetGame() {
    player = 'X';
    numOfTurns = 0;
    playerX = 0;
    playerO = 0;
    document.getElementsByClassName("boxes").remove('');
}
