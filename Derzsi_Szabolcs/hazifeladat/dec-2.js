// otoslotto

function random(max, min) {
    return randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
}

function lotto(szelveny) {
    let ujTomb = [];
    let ujTombHossza = 0;

    if (szelveny === 'otoslotto') {
        ujTombHossza = 5;
    } else if (szelveny === 'hatoslotto') {
        ujTombHossza = 6;
    } else if (szelveny === 'skandi') {
        ujTombHossza = 7;
    } else {
        return false;
    }

    for (let i = 0; i < ujTombHossza; i++) {
        ujTomb.push(random(90, 1));
    }
    return ujTomb;
}

console.log(lotto('otoslotto'));
console.log(lotto('hatoslotto'));
console.log(lotto('skandi'));
