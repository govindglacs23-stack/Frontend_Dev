"use strict";

const operations = ["add", "subtract", "power", "root", "divide", "multiply"];
const num1 = 25;
const num2 = 0;
const num3 = -16;

function calculate(operation, n1, n2) {
    switch (operation) {
        case "add":
            return n1 + n2;
        case "subtract":
            return n1 - n2;
        case "power":
            return Math.pow(n1, n2);
        case "root":
            if (n1 < 0) {
                throw new Error("Cannot calculate square root of a negative number");
            }
            return Math.sqrt(n1);
        case "divide":
            if (n2 === 0) {
                throw new Error("Cannot divide by zero");
            }
            return n1 / n2;
        default:
            throw new Error(`InvalidOperationError: '${operation}' is not recognized`);
    }
}

console.log("--- Smart Calculator ---");

operations.forEach(op => {
    try {
        let result;
        if (op === "root") {
            result = calculate(op, num1);
            console.log(`Operation: ${op}, Num1: ${num1} => Result: ${result}`);
            
            console.log("Trying root with negative:");
            result = calculate(op, num3);
        } else {
            result = calculate(op, num1, num2);
            console.log(`Operation: ${op}, Num1: ${num1}, Num2: ${num2} => Result: ${result}`);
        }
    } catch (e) {
        console.error(`Operation: ${op} -> FAILED: ${e.message}`);
    }
});