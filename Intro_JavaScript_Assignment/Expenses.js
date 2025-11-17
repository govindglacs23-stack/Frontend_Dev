let expenses = [5000, 2000, 10000, 3000, 1500];
let total = expenses.reduce((a, b) => a + b, 0);
let average = total / expenses.length;
let taxRate = 0.1;
let totalAfterTax = total + total * taxRate;

console.log("Total:", total.toFixed(2));
console.log("Average:", average.toFixed(2));
console.log("After 10% Tax:", totalAfterTax.toFixed(2));
