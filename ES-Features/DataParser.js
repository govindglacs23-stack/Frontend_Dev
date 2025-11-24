const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

const validNumeric = [];
const invalidData = [];

console.log("--- Dynamic Data Parser Report ---");

apiData.forEach(item => {
    console.log(`\nProcessing: ${item} (Type: ${typeof item})`);
    
    const numVal = Number(item);
    const boolVal = Boolean(item);
    const strVal = String(item);

    console.log(` -> As Number: ${numVal}`);
    console.log(` -> As Boolean: ${boolVal}`);
    console.log(` -> As String: "${strVal}"`);

    if (item === " " || item === "100px" || Number.isNaN(numVal)) {
        console.log(" -> Status: Invalid for numeric array");
        invalidData.push(item);
    } else {
        console.log(" -> Status: Valid for numeric array");
        validNumeric.push(numVal);
    }
});

console.log("\n--- Final Arrays ---");
console.log("Valid Numeric Data:", validNumeric);
console.log("Invalid/Skipped Data:", invalidData);