class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }
    work() {
        return this.name + " is working";
    }
}

class Manager extends Employee {
    work() {
        return this.name + " is managing the team";
    }
}

const e = new Employee("Amit", "Sales");
const m = new Manager("Sara", "Tech");

console.log(e.work());
console.log(m.work());
