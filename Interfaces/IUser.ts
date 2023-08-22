export interface IUserAttribute {
    readonly id: number,
    username: string,
    age: number,
    salary: number
}

export interface IUserView {
    Details(user: IUserAttribute): void,
    ViewHistory(user: IUserAttribute): void
}

