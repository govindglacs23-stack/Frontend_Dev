class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }
    calculateAverage() {
        return this.marks.reduce((a, b) => a + b, 0) / this.marks.length;
    }
    getGrade() {
        const avg = this.calculateAverage();
        if (avg >= 90) return "A";
        if (avg >= 75) return "B";
        if (avg >= 50) return "C";
        return "F";
    }
}

const s1 = new Student("Amit", [90, 85, 92]);
const s2 = new Student("Sara", [70, 65, 60]);
const s3 = new Student("Kiran", [50, 40, 30]);

console.log(s1.name, s1.getGrade());
console.log(s2.name, s2.getGrade());
console.log(s3.name, s3.getGrade());
