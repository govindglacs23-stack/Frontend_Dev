class Employee{
    constructor(id,name,department,salary){
        this.id=id;
        this.name=name;
        this.department=department;
        this.salary=salary;
    }
    getAnnualSalary(){
        return this.salary*12;
    }
    applyBonus(percent){
        this.salary+=this.salary*(percent/100);
    }
}
const employees=[
    new Employee(1,"A","IT",30000),
    new Employee(2,"B","HR",25000),
    new Employee(3,"C","IT",40000),
    new Employee(4,"D","Sales",28000),
    new Employee(5,"E","Admin",22000)
];
const total=employees.reduce((sum,e)=>sum+e.getAnnualSalary(),0);
console.log(total);
