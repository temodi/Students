function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function d6() {
    let szamok = {
        egyes: 0,
        kettes: 0,
        harmas: 0,
        negyes: 0,
        otos: 0,
        hatos: 0,
    };

    for (let i = 0; i < 10000; i ++) {
        let dobas = random(1, 6);

        if (dobas === 1) {
            szamok.egyes++; 
        } else if (dobas === 2) {
            szamok.kettes++;
        } else if (dobas === 3) {
            szamok.harmas++;
        } else if (dobas === 4) {
            szamok.negyes++;
        } else if (dobas === 5) {
            szamok.otos++;
        } else {
            szamok.hatos++;
        } 
    }
    return szamok;
}

console.log(d6());

// még nincs kész!
// function randomDiceThrow(hanyszor) {
//     let result = [];

//     for (let j = 0; j < hanyszor; j++) {
//         let kockadobas = 
//     }
//     return result;
// }

// 2 feladat

let tomb = [-1, 1, 2, 3, 4, 5, 6];

function osszegzes(a) {
    let osszeg = 0;
    for (let i = 0; i < a.length; i++) {
        osszeg += a[i];
    }
    return osszeg;
}
console.log(osszegzes(tomb));
console.log(osszegzes([5,6,8,7]));
console.log(osszegzes([1]));
console.log(osszegzes([]));


// 3 feladat

function osszegzesFeltetel(a) {
    let osszeg = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] % 2 === 0) {
            osszeg += a[i];
        }
    }
    return osszeg;
}
console.log(osszegzesFeltetel(tomb));


// 4 feladat
function negativSzamokSzama(a) {
    let negativ = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] < 0) {
            negativ++;
        }
    }
    return negativ;
}
console.log(negativSzamokSzama(tomb));

// 5 feladat eldontes

function eldontes(tomb, feltetel) {
    for (let i = 0; i < tomb.length; i++) {
        if (tomb[i] === feltetel) {
            return true;
        }
    }
    return false;
}
console.log(eldontes(tomb, 0));

// 6 feladat kivalasztas

function kivalasztas(tomb, ertek) {
    for (let i = 0; i < tomb.length; i++) {
        if (tomb[i] === ertek) {
            return i;
        }
    }
    return -1;
}
console.log(kivalasztas(tomb, 5));

// 7 feladat masolas

function masolas(tomb) {
    let tomb2 = [];
    for (let i = 0; i < tomb.length; i++) {
        tomb2[i] = tomb[i] + 1; 
    }
    return tomb2;
}

console.log(tomb);
console.log(masolas(tomb));
console.log(masolas([-1]));