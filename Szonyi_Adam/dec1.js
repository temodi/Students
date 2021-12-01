/*

function random (min, max) {
    return result = Math.floor(Math.random() * (max - min +1)) + min;
    
}

function d6 () {
    return random (1, 6);
}

function testRandomDiceThrow() {
    let results = [0, 0, 0, 0, 0, 0]
    for (let i = 0; i < 1000; i++) {
        let kockadobas = d6();
        results[kockadobas - 1]++;
    }
    return results
}

console.log(testRandomDiceThrow())

*/

let osszegzes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let sum = 0;

for (let i = 0; i < osszegzes.length; i++) {
    sum += osszegzes[i];
}

console.log(sum)