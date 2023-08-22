"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function UserDetails(user, isDataSeperate) {
    if (isDataSeperate) {
        console.log(`User Id: ${user.id}`);
        console.log(`User Name: ${user.username}`);
        console.log(`User Age: ${user.age}`);
        console.log(`User Salary: ${user.salary}`);
    }
    else {
        console.log(user);
    }
}
let user1 = {
    id: 1,
    username: "faisal",
    age: 23,
    salary: 400
};
let user2 = {
    id: 2,
    username: "qusay",
    age: 18,
    salary: 350
};
UserDetails(user1, true);
UserDetails(user2, false);
//# sourceMappingURL=UserImp.js.map