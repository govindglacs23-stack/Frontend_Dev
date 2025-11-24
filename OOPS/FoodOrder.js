const menu = {
    pizza: 250,
    burger: 120,
    pasta: 180,
    coffee: 80
};

function calculateBill(orderItems) {
    const prices = orderItems.map(item => {
        if (!menu[item]) throw new Error("Invalid item: " + item);
        return menu[item];
    });
    return prices.reduce((a, b) => a + b, 0);
}

try {
    console.log("Total:", calculateBill(["pizza", "coffee"]));
} catch (e) {
    console.log(e.message);
}
