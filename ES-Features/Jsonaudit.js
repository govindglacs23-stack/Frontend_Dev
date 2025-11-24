"use strict";

const rawData = [
    '{"user":"Alex","age":25}',
    '{"user":"Ben"}',
    '{invalid JSON}',
    '{"user":"Mina","age":"22"}',
    '{"user":"Charlie","age":17}',
    '{"user":"Dana","age":"thirty"}'
];

const cleanData = [];
const errorLog = [];

console.log("--- JSON Audit ---");

rawData.forEach((item, index) => {
    try {
        const data = JSON.parse(item);

        if (!data.user || !data.age) {
            throw new Error("Missing 'user' or 'age' key");
        }

        const age = Number(data.age);
        if (Number.isNaN(age)) {
            throw new Error(`Invalid age format: "${data.age}"`);
        }

        if (age < 18) {
            throw new Error(`User is under 18: ${age}`);
        }

        data.age = age;
        cleanData.push(data);
        console.log(`SUCCESS (Line ${index}): Parsed ${data.user}`);

    } catch (e) {
        console.error(`FAILED (Line ${index}): ${e.message} | Raw: ${item}`);
        errorLog.push({ line: index, error: e.message, raw: item });
    }
});

console.log("\n--- Final Report ---");
console.log("Valid (Over 18) Users:");
console.table(cleanData);

console.log("\nErrors and Skipped Entries:");
console.table(errorLog);