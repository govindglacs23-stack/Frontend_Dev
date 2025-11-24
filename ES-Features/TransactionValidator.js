const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null,
    { id: 4, amount: 1500 },
    { amount: 300 }
];

const valid = [];
const invalid = [];

transactions.forEach((tx, index) => {
    try {
        if (tx === null) {
            throw new Error("Transaction is null");
        }
        
        if (typeof tx !== 'object') {
             throw new Error("Invalid transaction format");
        }

        if (tx.id === undefined || tx.amount === undefined) {
            throw new Error("Missing 'id' or 'amount' property");
        }

        if (tx.amount < 0) {
            throw new Error("Amount cannot be negative");
        }
        
        valid.push(tx);

    } catch (e) {
        invalid.push({ 
            index: index, 
            error: e.message, 
            data: tx 
        });
    }
});

console.log("--- Transaction Validator Report ---");
console.log(`\nSuccessful Transactions: ${valid.length}`);
console.table(valid);

console.log(`\nFailed Transactions: ${invalid.length}`);
console.table(invalid);