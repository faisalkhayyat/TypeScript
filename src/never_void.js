"use strict";
function neverReturn(name) {
    while (true) {
        console.log(name);
    }
}
function voidReturn(name) {
    console.log(name);
}
let s1 = "faisal";
voidReturn(s1);
neverReturn(s1);
//# sourceMappingURL=never_void.js.map