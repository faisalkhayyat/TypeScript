// returns never
// returns void

function neverReturn(name: string){
    while(true){
        console.log(name);
    }
}

function voidReturn(name: string): void{
    console.log(name)
}

let s1: string = "faisal";

voidReturn(s1);
neverReturn(s1);