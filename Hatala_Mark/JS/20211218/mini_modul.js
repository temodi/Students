// 1. feladat 2p

let valtozo = "ez egy string";

// 2. feladat 2p

let szam = 8;

// 3. feladat 3p

let valtozo2;
valtozo2 = "szoveg";
/* console.log(valtozo2); */

// 4. feladat 3p

let tomb = [1, 2, 3, 4, 5];
/* console.log(tomb); */

// 5. feladat 2p

let konyvek = ["JavaScript alapok", "Modern JavaScript", "HTML és CSS 5 nap alatt"];
/* console.log(konyvek); */

// 6. feladat 3p

let bitek = [[0, 1, 0], [1, 1, 0], [0, 1, 1]];
/* console.log(bitek); */

// 7. feladat 4p

let villanykapcsolo = "on";

/* if (villanykapcsolo === "on") {
    window.alert("A villany fel van kapcsolva")
} 
if (villanykapcsolo !== "on") {
    window.alert("Nincs felkapcsolva")
} */

// 8. feladat 3p

let valtozo3 = "Ez egy szöveg";
/* console.log(valtozo3[0]);
console.log(valtozo3[valtozo3.length - 1]); */

// 9. feladat 4p

let abc = ["a", "b", "c", "d", "e"];

for (let i = 0; i < abc.length; i++) {
    // console.log(abc[i]);
}


// 10. feladat 4p

function kiirja(str) {
    console.log(str);
}
/* kiirja("Hello World");
kiirja(2021); */

// 11. feladat 5p (-1p)

let nagyobbE = function(num1, num2) {
    if (num1 < num2) {
        return num1;
    } else if (num1 > num2) {
        return num2;
    } console.log("A két érték egyenlő");
}
/* console.log(nagyobbE(1, 5));
console.log(nagyobbE(7, 5));
console.log(nagyobbE(5, 5)); */

// 12. feladat 5p

let obj = {
    nev: 'Kiss Jolan',
    kor: 32
};

/* console.log(obj.nev);
console.log(obj.kor); */

// 13. feladat 6p

let kisallatok = [
    {
        nev: 'Buksi',
        faj: 'Dalmata',
        kor: 1,
        ar: 15000,
    },
    {
        nev: 'Csőrike',
        faj: 'Papagáj',
        kor: 0.5,
        ar: 2000,
    },
    {
        nev: 'Cirmi',
        faj: 'Macska',
        kor: 2,
        ar: 5000,
    }
]

/* console.log(kisallatok); */

// 14. feladat 

function tombE(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    } return sum
}

/* console.log(tombE("tomb"));
console.log(tombE([1, 2, 3])); */

// 15. feladat

class Konyv {
    constructor(cim, isbn, szerzo) {
        this._cim = cim;
        this._isbn = isbn;
        this._szerzo = szerzo;
    }
    get isbn() {
        return this._isbn;
    }
    set isbn(newIsbn) {
        this._isbn = newIsbn;
    }
    get szerzo() {
        return this._szerzo;
    }
}

let konyv1 = new Konyv('JavaScript a gyakorlatban', 123231, 'John Doo');
let konyv2 = new Konyv('JavaScript és az OOP', 545454, 'Big Bill');

/* console.log(konyv1.isbn);
console.log(konyv2.szerzo); */
