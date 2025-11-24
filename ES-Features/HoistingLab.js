"use strict";

console.log("--- Original (Fixed) ---");
var score = 50;
let status = "ready";

function announce() {
    console.log("Game started");
}

function startGame() {
    console.log(status);
}

console.log(score);
announce();
startGame();


console.log("\n--- Rewritten with Arrow Functions ---");

const announceArrow = () => {
    console.log("Game started (Arrow)");
};

const startGameArrow = () => {
    console.log(statusArrow);
};

let scoreArrow = 50;
let statusArrow = "ready";

console.log(scoreArrow);
announceArrow();
startGameArrow();