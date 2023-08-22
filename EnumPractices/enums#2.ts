const enum Kids {
    Five = 25,
    Seven = 20,
    Ten = 15
}

enum Level{
    Insane,
    Kid = Kids.Five,
    Easy = Kids.Ten,
    Medium = 6,
    Hard = Medium / 2
}

function compare(level: Level): void{
    switch(level){
        case Level.Kid:
            console.log(`Kid Level, Seconds: ${Level.Kid}`);
            break;
        case Level.Easy:
            console.log(`Easy Level, Seconds: ${Level.Easy}`);
            break;
        case Level.Medium:
            console.log(`Medium Level, Seconds: ${Level.Medium}`);
            break;
        case Level.Hard:
            console.log(`Hard Level, Seconds: ${Level.Hard}`);
            break;
    }
}

console.clear;
let level: Level = Level.Hard;

compare(level);