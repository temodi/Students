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


// szamologep absztrakcioval

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a + b;
}

function szamologep(a, b, muvelet) {
    return muvelet(a, b);
}

console.log(szamologep(1, 2, add));
console.log(szamologep(1, 2, function (a, b) { return a / b}));


// kivalogatas tetel

function valogat(tomb, callback) {
    let tomb2 = [];
    for (let i = 0; i < tomb.length; i++) {
        if (callback(tomb[i])) {
            tomb2.push(tomb[i]);
       }
    }
    return tomb2;
}

console.log(valogat([1,2,3,4,5,6], csakParos));

function csakParos(szam) {
    return szam % 2 === 0;
}
