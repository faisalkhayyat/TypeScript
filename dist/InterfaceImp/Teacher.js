"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Teacher {
    constructor(username, salary, age) {
        this.username = username;
        this.age = age;
        this.salary = salary;
    }
    ViewData() {
        console.log(`Name: ${this.username}`);
        console.log(`Salary: ${this.salary}`);
        return this.username;
    }
    ViewStudentName(id) {
        if (this.id == id) {
            return this.username;
        }
        return `Not Found 404`;
    }
}
let teacher = new Teacher("faisal", 1000, 23);
teacher.id = 13;
console.log(teacher.ViewStudentName(1));
//# sourceMappingURL=Teacher.js.map