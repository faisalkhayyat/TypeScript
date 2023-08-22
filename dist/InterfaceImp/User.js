"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let user = {
    id: 1,
    username: "faisal",
    age: 23,
    salary: 1000,
};
let userData = {
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
};
userData.Details(user);
userData.ViewHistory(user);
//# sourceMappingURL=User.js.map