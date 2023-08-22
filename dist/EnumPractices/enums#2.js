"use strict";
var Level;
(function (Level) {
    Level[Level["Insane"] = 0] = "Insane";
    Level[Level["Kid"] = 25] = "Kid";
    Level[Level["Easy"] = 15] = "Easy";
    Level[Level["Medium"] = 6] = "Medium";
    Level[Level["Hard"] = 3] = "Hard";
})(Level || (Level = {}));
function compare(level) {
    switch (level) {
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
let level = Level.Hard;
compare(level);
//# sourceMappingURL=enums#2.js.map