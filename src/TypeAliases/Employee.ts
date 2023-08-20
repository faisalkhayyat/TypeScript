import { Person } from "./Person";

export type Employee = Person & {
    salary: number,
    department: string,
    level: string
}