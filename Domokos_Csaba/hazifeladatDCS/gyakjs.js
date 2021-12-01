

/*function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}

function d6() {
    return random(1, 6);
}

function returnRandomDiceThrow() {
    let results = [0, 0, 0, 0, 0, 0];
    return results;
}

console.log(results);



function kockadobasszimulator () {
    for( let i = 0; i < 1000; i++){
    let kockadobas = d6();
}
} 

kockadobasszimulator()
*/

let tomb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;

for (let i = 0; i < tomb.length; i++) {
    sum += tomb[i];
}

console.log(sum);
