import { IUserAttribute } from "../Interfaces/IUser";
import { ITeacher } from "../Interfaces/InterfaceExtension";

class Teacher implements ITeacher, IUserAttribute {
    id: number;
    username: string;
    age: number;
    salary: number;

    constructor (username: string, salary: number, age: number ){
        this.username = username;
        this.age = age;
        this.salary = salary;
    }

    ViewData(): string {
        console.log(`Name: ${this.username}`);
        console.log(`Salary: ${this.salary}`);
        return this.username;
    }

    ViewStudentName(id: number): string {
        if(this.id == id){
            return this.username;
        }
        return `Not Found 404`;
    }
}

let teacher = new Teacher("faisal", 1000, 23);
teacher.id = 13;
console.log(teacher.ViewStudentName(1));