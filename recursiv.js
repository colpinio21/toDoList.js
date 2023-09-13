/* Calcul factorielle ;
5! = 5*4*3*2*1


function factor(f) {
    let x = 1
    for(let index = 2; index < f+1; index++) {
        x *= index
    }
    return x
}

console.log(factor(2))
*/

function factor(f) {
    let f = 1;
    for (let i = 2; i < f+1; i++) {
        f = f*i;
    }
    console.log();
}