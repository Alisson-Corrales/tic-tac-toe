"use strict";

let boxes = ['0', `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`];
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
        document.getElementById('playerTurn').textContent = "Player: X";
        document.getElementById('numOfTurns').textContent = `Turn: ${numOfTurns}`;
        player = "O";
        num = num.split("");
        num = Number(num.pop())
        boxes[num] = "X";
        console.log(boxes);
    } else {
        document.getElementById(num).textContent = "O";
        document.getElementById('playerTurn').textContent = "Player: O";
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
    //boxes = ['0', `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`]; for reference
    
    if('1'& '2'& '3' == "X"){
        alert("You win!");
        document.getElementById('redo').textContent = "Restart?";
        resetGame();
    }return
    
}

//resets game
function resetGame() {
    player = 'X';
    numOfTurns = 0;
    playerX = 0;
    playerO = 0;
    document.getElementsByClassName("boxes").remove('');
}
