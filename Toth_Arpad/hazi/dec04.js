// // fn, ami kap egy tombot parameternek es ebbol visszater az osszes paros szammal.

// function csakParos(array) {
//     let parosak = [];
//     for ( let i = 0; i < array.length; i++) {
//         if (array[i] % 2 === 0) {
//             parosak.push(array[i])
//         }
//     }
//     console.log(parosak);
//     return
// }

// csakParos([1,2,3,4,5,6])



// function csakParos(array, callback) {
//     let result =[];
//     for ( let i = 0; i < array.length; i++) {
//         let paros = callback(array[i]);
//         if (!isNaN(paros)) {
//             result.push(paros);
//         }
//     }
//     return result;
// }


// function sort(nr) {
//     if (nr % 2 === 0) {
//         return nr;
//     }
// }

// function unSort(nr) {
//     if (nr % 2 === 1) {
//         return nr;
//     }
// }

// console.log(csakParos([1,2,3,4,5,6,7,8,9,10], sort));

// console.log(csakParos([1,2,3,4,5,6,7,8,9,10], unSort));


// //               Kuponos vacakolas

let kuponok = [
    {
        kod: "XMAS10",
        tipus: "percent",
        ertek: 0.1
    },
    {
        kod: "SANTA1000",
        tipus: "fix",
        ertek: 1000
    }
];

let eredetiAr = 25000;

function getLucky() {
    let kuponKod = window.prompt("Add meg a kuponkodot:");
    if (kuponKod !== kuponok[0].kod && kuponKod !== kuponok[1].kod) {
        return "Nem letezo kupon"
    } 
    else if ( kuponKod === kuponok[0].kod) {
        return resultXmas();
    }
    else if ( kuponKod === kuponok[1].kod) {
        return resultSanta();
    }
}


function resultXmas() {
    return eredetiAr - (eredetiAr * kuponok[0].ertek);
}

function resultSanta() {
    return eredetiAr - kuponok[1].ertek;
}

console.log("Fizetendo osszeg: " + getLucky());





