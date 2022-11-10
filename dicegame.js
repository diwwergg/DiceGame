// JQuery Text
let bigTextShowJ = document.getElementById("bigTextShow");
let diceFace1J = document.getElementById("diceFace1");
let diceFace2J = document.getElementById("diceFace2");
let score1J = document.getElementById("score1");
let score2J = document.getElementById("score2");
let p1WinStreakJ = document.getElementById("p1WinStreak");
let p2WinStreakJ = document.getElementById("p2WinStreak");


// JQuery Button
let rollDiceBtn = document.getElementById("rollDiceBtn"); 
let resetBtn = document.getElementById("resetBtn");

// VARIABLES

let p1WinStreak = 0;
let p2WinStreak = 0;
let drawStreak = 0;

let p1 = 0;
let p2 = 0;


const diceFace = {
    0: "gg-dice",
    1: "gg-dice gg-dice-1",
    2: "gg-dice gg-dice-2",
    3: "gg-dice gg-dice-3",
    4: "gg-dice gg-dice-4",
    5: "gg-dice gg-dice-5",
    6: "gg-dice gg-dice-6",
}


// Logic Function
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function compareice(p1, p2) {
    if (p1 > p2) {
        p1WinStreak++;
        return "Player1 Wins";
    } else if (p1 < p2) {
        p2WinStreak++;
        return "Player2 Wins";
    } else if (p1+p2 == 0) {
        return "Dice Game";
    }else{
        drawStreak++;
        return "Draw";
    }
}


function resetScore(){
    p1WinStreak = 0;
    p2WinStreak = 0;
    drawStreak = 0;
    p1 = 0;
    p2 = 0;
    showDice();
    showText();
}

function mainRun() {
    p1 = rollDice();
    p2 = rollDice();
    showDice();
    showText();
    showStake();
}

// Console Log Function
function showStake() {
    console.log("+++++++++++++++++++++++++++++++++++++++");
    console.log("Player1: " + p1);
    console.log("Player2: " + p2);
    console.log("Player1 WinStreak : " + p1WinStreak);
    console.log("Player2 WinStreak : " + p2WinStreak);
    console.log("DrawStreak : " + drawStreak);
    console.log("+++++++++++++++++++++++++++++++++++++++");

}


// JQuery Function
function showDice() {
    diceFace1J.className = diceFace[p1];
    diceFace2J.className = diceFace[p2];
}
function showText() {
    bigTextShowJ.innerHTML = compareice(p1, p2);
    score1J.innerHTML = p1;
    score2J.innerHTML = p2;
    p1WinStreakJ.innerHTML = p1WinStreak;
    p2WinStreakJ.innerHTML = p2WinStreak;
}

// JQuery Button Click
rollDiceBtn.addEventListener("click", mainRun);
resetBtn.addEventListener("click", resetScore);