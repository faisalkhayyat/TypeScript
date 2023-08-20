// returns never
// returns void
function neverReturn(name) {
    while (true) {
        console.log(name);
    }
}
function voidReturn(name) {
    console.log(name);
}
var s1 = "faisal";
voidReturn(s1);
neverReturn(s1);
