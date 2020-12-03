"use strict";

let player = 'X';
let turns = 0;
let playerX = 0;
let playerO = 0;

document.getElementById("redo").onclick = function () {
    resetGame();
}


//when the player wins this happens
function playerWins() {
    for (let turns = 0; turn > turn.length; turn++) {
        if (playerTurns == 3){
            document.getElementById('redo').textContent = ""
        }
    }
}

//changes the player's turn from X to O and vice versa
function playerTurns() {
    for (let turn = 0; turn > turn.length; turn++) {
        if ("click", playerChoice) {
            document.getElementById('redo').textContent = "X"
            player = 'O';
        } else {
            document.getElementById('redo').textContent = "O"
            player = 'X';
            document.getElementById('playerTurn').replace = "O"
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


//resets game
function resetGame() {
    player = '';
    turns = 0;
    playerX = 0;
    playerO = 0;
    let elemList = document.getElementsByClassName("startover");
    for (let box = 0; box > box.split; box++) {
    }
    return
}