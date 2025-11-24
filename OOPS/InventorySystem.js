const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 50000, stock: 5 },
    { id: 2, name: "Mouse", category: "Electronics", price: 800, stock: 50 },
    { id: 3, name: "Shirt", category: "Fashion", price: 1200, stock: 3 }
];

function getLowStockProducts(data) {
    return data.filter(p => p.stock < 10);
}

function sortProductsByPrice(data) {
    return data.slice().sort((a, b) => a.price - b.price);
}

function calculateTotalInventoryValue(data) {
    return data.reduce((sum, p) => sum + p.price * p.stock, 0);
}

function groupByCategory(data) {
    return data.reduce((acc, p) => {
        if (!acc[p.category]) acc[p.category] = [];
        acc[p.category].push(p);
        return acc;
    }, {});
}

console.log(getLowStockProducts(products));
console.log(sortProductsByPrice(products));
console.log(calculateTotalInventoryValue(products));
console.log(groupByCategory(products));
