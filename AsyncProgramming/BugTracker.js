function getBugs() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const fail = Math.random() < 0.3;
            if (fail) reject("API failure");
            else resolve(["UI glitch", "API timeout", "Login failure"]);
        }, 1000);
    });
}

getBugs()
    .then((bugs) => console.table(bugs))
    .catch((err) => console.log("Error:", err));
