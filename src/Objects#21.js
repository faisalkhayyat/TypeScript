"use strict";
function GetAge(date) {
    const today = new Date;
    return (today.getFullYear() - date.getFullYear());
}
let today = new Date;
let employeeObj = {
    id: 100,
    username: "faisalkhayyat",
    gender: "male",
    age: GetAge(today)
};
console.log(employeeObj);
//# sourceMappingURL=Objects#21.js.map