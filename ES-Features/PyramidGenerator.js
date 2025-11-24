"use strict";

const userLimit = 5;

console.log(`Generating pyramid with limit: ${userLimit}`);

for (let i = 1; i <= userLimit; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "* ";
    }
    console.log(row);
}