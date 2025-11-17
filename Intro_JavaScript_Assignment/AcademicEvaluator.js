let marks = [85, 90, 88, 92, 80];
let anyFailed = marks.some(m => m < 35);
let total = marks.reduce((a, b) => a + b, 0);
let percentage = total / marks.length;

if (anyFailed) {
  console.log("Detained (Subject below 35)");
} else if (percentage >= 85) {
  console.log("Promoted with Distinction");
} else if (percentage >= 50) {
  console.log("Promoted");
} else {
  console.log("Detained");
}

console.log("Percentage:", percentage.toFixed(2) + "%");
