const enum Level {
    kids = 15,
    easy = 9,
    medium = 6,
    hard = 3
}

type Default = {
    id: number,
    name: string
}

let x: Default = {id: 1, name: "faisal"};
console.log(x.id);

console.log(Level.kids);