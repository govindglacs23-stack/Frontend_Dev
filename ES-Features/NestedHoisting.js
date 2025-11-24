console.log("--- Original Hoisting with 'var' ---");
function outer() {
    console.log("Outer (before):", count);
    var count = 5;
    console.log("Outer (after):", count);

    function inner() {
        console.log("Inner (before):", count);
        var count = 10;
        console.log("Inner (after):", count);
    }
    
    inner();
    console.log("Outer (post-inner):", count);
}
outer();


console.log("\n--- Behavior with 'let' (Temporal Dead Zone) ---");
function outerLet() {
    let count = 5;
    console.log("Outer (after):", count);

    function innerLet() {
        console.log("Inner (after):", count);
    }
    
    innerLet();
    console.log("Outer (post-inner):", count);
}
outerLet();