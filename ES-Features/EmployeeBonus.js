"use strict";

const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" },
    { name: "Ravi", salary: "abc", years: "4" },
    { name: "Mina", years: "9" }
];

console.log("--- Employee Bonus Calculator ---");

employees.forEach(emp => {
    try {
        if (!emp.name || !emp.salary || !emp.years) {
            throw new Error("Missing employee property");
        }

        const salary = Number(emp.salary);
        const years = Number(emp.years);

        if (Number.isNaN(salary) || Number.isNaN(years)) {
            throw new TypeError("Salary and Years must be convertible to numbers");
        }

        const bonus = years > 3 ? salary * 0.10 : salary * 0.05;
        
        console.log(`
Employee: ${emp.name}
- Salary: $${salary.toFixed(2)}
- Years: ${years}
- Bonus: $${bonus.toFixed(2)}
- Total Pay: $${(salary + bonus).toFixed(2)}
        `);

    } catch (error) {
        console.warn(`
Failed to process employee: ${emp.name || 'Unknown'}
- Error: ${error.message}
- Data: ${JSON.stringify(emp)}
        `);
    }
});