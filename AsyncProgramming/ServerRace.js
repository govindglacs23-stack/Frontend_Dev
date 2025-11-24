function serverA() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() < 0.9 ? resolve("Server A done") : reject("A failed");
        }, 2000);
    });
}

function serverB() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() < 0.9 ? resolve("Server B done") : reject("B failed");
        }, 3000);
    });
}

Promise.all([serverA(), serverB()])
    .then(() => console.log("Deployment completed for all servers"))
    .catch((err) => console.log("Failure:", err));

Promise.race([serverA(), serverB()])
    .then((fastest) => console.log("Fastest response:", fastest))
    .catch((err) => console.log("Fastest failed:", err));
