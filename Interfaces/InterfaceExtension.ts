export interface ITeacher {
    ViewData: () => void,
    ViewStudentName: (id: number) => string,
}

export interface IPrincipal extends ITeacher {
    UpdateMarks(): boolean
}

