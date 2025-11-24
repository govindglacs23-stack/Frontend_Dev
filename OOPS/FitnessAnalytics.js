class FitnessAnalytics {
    constructor(data) {
        if (!data.length) throw new Error("Dataset empty");
        this.data = data;
    }

    getActiveUsers() {
        return this.data.filter(u => u.steps > 7000);
    }

    getAverageCalories() {
        return this.data.reduce((a, b) => a + b.calories, 0) / this.data.length;
    }

    getUserSummary() {
        return this.data.map(u => `${u.user} walked ${u.steps} steps and burned ${u.calories} calories`);
    }
}

const workoutData = [
    { user: "A", steps: 8000, calories: 300 },
    { user: "B", steps: 12000, calories: 500 },
    { user: "C", steps: 4000, calories: 200 }
];

const fa = new FitnessAnalytics(workoutData);

console.log(fa.getActiveUsers());
console.log(fa.getAverageCalories());
console.log(fa.getUserSummary());
