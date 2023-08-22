import { IUserAttribute, IUserView } from "../Interfaces/IUser";

let user: IUserAttribute = {
    id: 1,
    username: "faisal",
    age: 23,
    salary: 1000,
}

let userData: IUserView = {
    Details(u) {
        console.log(`hello ${u.username}`);
        console.log(`Salary: ${u.salary}`);
        console.log(`Age: ${u.age}`);
    },
    ViewHistory(u) {
        console.log(`hello ${u.username}`);
        console.log(`Salary: ${u.salary}`);
        console.log(`Age: ${u.age}`);
    }
}

userData.Details(user);
userData.ViewHistory(user);