//random (min, max)

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function d6() {
    return random(1, 6);
}

let results = [0, 0, 0, 0, 0, 0];

function testRandomDiceThrow() {
    let results = [0, 0, 0, 0, 0, 0];
    for (let i = 0; i < 1000; i++) {
       let kockadobas = d6();
        results[kockadobas] = results[kockadobas] +1;
        kockadobas.push(kockadoba);
    }
    return results;
}

console.log(results);