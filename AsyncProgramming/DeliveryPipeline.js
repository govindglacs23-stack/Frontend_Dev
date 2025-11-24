function step(name) {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 1000) + 1000;
        setTimeout(() => {
            Math.random() < 0.85 ? resolve(name) : reject(name + " failed");
        }, delay);
    });
}

async function runPipeline() {
    console.log("Start Pipeline");
    try {
        console.log(await step("Step 1: Order taken"));
        console.log(await step("Step 2: Food prepared"));
        console.log(await step("Step 3: Package ready"));
        console.log(await step("Step 4: Out for delivery"));
        console.log("Delivery completed!");
    } catch (e) {
        console.log("Pipeline failed!");
    }
}

runPipeline();
