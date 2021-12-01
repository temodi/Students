function rollDie(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



function d6() {
    let result = [0, 0, 0, 0, 0, 0];

    for (let i = 0; i <= 10000; i++) {
        dieOne = rollDie(1, 6)
        result[dieOne - 1] = result[dieOne - 1] + 1

    }

    return result
}


let sorozat = [1, 2, 3, 4, 5]

sorozat.reduce((a, b) => {
    return a + b
})