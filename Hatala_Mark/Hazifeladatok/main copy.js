/* function repeater(a, b) {
    let n1 = parseInt(a, 10);
    let eredmeny = '';
    for (let i = 0; i < n1; i++) {
        eredmeny += b();
    }
    return eredmeny;
} 

// console.log(repeater(2, 'dog'));
console.log(repeater(2, function blokk(){return 'kutya'}));

function repeat(x){
    return x;
} */

let vag = function() {
    console.log('vág');
}
let pirit = function() {
    console.log('pirítani');
}
let hamoz = function() {
    console.log('hámozni');
}

function elokeszit(par1, par2) {
    console.log(par1 + ' ' + par2());
}

elokeszit('hagyma', function () {return "vág"});