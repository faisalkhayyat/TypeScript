type Skills = {
    one: string,
    two: string
}
type User = {
    username: string,
    id: number,
    age: number,
    gender: string,
    skills: Skills
}

let employeeObj: User = {
    id: 100,
    username: "faisalkhayyat",
    gender: "male",
    age: 23,
    skills: {
        one: "html",
        two: "c#"
    }
}

console.log(employeeObj);
