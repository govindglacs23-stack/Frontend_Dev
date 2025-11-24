function applyOperation(numbers, operation) {
    const result = [];
    for (let num of numbers) {
        result.push(operation(num));
    }
    return result;
}

console.log(applyOperation([1,2,3,4], n => n * 2));
console.log(applyOperation([1,2,3,4], n => n * n));
