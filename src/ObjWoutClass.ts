type Employee = {
    readonly id: number
    name: string
    age: number
    DOB?: Date
    skills: skills
}
type skills = {
    one: string,
    two: string,
    three: string
}
