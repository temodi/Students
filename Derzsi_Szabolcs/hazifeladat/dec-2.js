// otoslotto

function random(max, min) {
    return randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
}

function lotto(szelveny) {
    let ujTomb = [];
    let ujTombHossza = 0;
    let max = 0;
    let min = 0;

    if (szelveny === 'otoslotto') {
        ujTombHossza = 5;
        max = 90;
        min = 1;
    } else if (szelveny === 'hatoslotto') {
        ujTombHossza = 6;
        max = 45;
        min = 1;
    } else if (szelveny === 'skandi') {
        ujTombHossza = 7;
        max = 35;
        min = 1;
    } else {
        return false;
    }

    for (let i = 0; i < ujTombHossza; i++) {
        ujTomb.push(random(max, min));
    }
    return ujTomb;
}

console.log(lotto('otoslotto'));
console.log(lotto('hatoslotto'));
console.log(lotto('skandi'));
console.log(lotto('asd'));
