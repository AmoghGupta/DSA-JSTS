//TypeScript includes the readonly keyword that makes a property as read-only in the class, type or interface.

//Prefix readonly is used to make a property as read-only. Read-only members can be accessed outside the class, 
// but their value cannot be changed.

//NOTE: they either need to be initialized at declaration or initialized inside the class constructor.

class Employee {
    readonly empCode: number;
    empName: string;
    
    constructor(code: number, name: string)     {
        this.empCode = code;
        this.empName = name;
    }
}
let emp = new Employee(10, "John");
emp.empCode = 20; //Compiler Error