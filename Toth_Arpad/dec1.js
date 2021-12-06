// random (min, max)

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

let result = [0, 0, 0, 0, 0, 0]

function d6() {
    return random(1, 6)
}


function testRandom() {
    for (let i = 0; i <= 10000; i++) {
        let roll = d6();
        result[roll-1] += 1

        // if (roll === 1) {
        //     result[0] = result[0] + 1;
        // } else if (roll === 2) {
        //     result[1] = result[1] + 1;
        // } else if (roll === 3) {
        //     result[2] = result[2] + 1;
        // } else if (roll === 4) {
        //     result[3] = result[3] + 1;
        // } else if (roll === 5) {
        //     result[4] = result[4] + 1;
        // } else if (roll === 6) {
        //     result[5] = result[5] + 1;
        // }
    } return result;
}

console.log(testRandom());


// //*                 osszeadja egy tomb elemeit

// function addition(Array) {
//     let number = 0;
//     for(let i = 0; i < Array.length; i++) {
//         number = number + Array[i];
//     }
//     return number;
// }

// console.log(addition([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))


// // //               MEGNEZI HANY NEGATIV ELEM VAN EGY TOMBBEN


// function addition(Array) {
//     let counter = 0;
//     for(let i = 0; i < Array.length; i++) {
//         if (Array[i] < 0) {
//             counter++;
//         }
//     }
//     return counter;
// }

// console.log(addition([1, -2, 3, 4, 5, 6, -7, 8, 9, -10]))



// // //               ELDONTI, H KERESETT ELEM MEGTALALHATO-E A TOMBBEN


// function search(array, x) {
//     for (let index = 0; index < array.length; index++) {
//         if (array[index] === x) {
//             return true;
//         }
//     } return false;
// }

// console.log(search([1,2,3,4,5,6], 7));




//              ELDONTI, H KERESETT ELEM MEGTALALHATO-E A TOMBBEN, KIIRJA A POZICIOJAT

// function search(array, x) {
//     let counter = 0;
//     for (let index = 0; index < array.length; index++) {
//         counter++;
//         if (array[index] === x) {
//             return console.log("item is on position: " + counter);
//         } 
//     } return console.log("Item not found");
        
// } 

// search([1,2,3,5,9,6,20], 9);

// search(["alma", "barack", "szilva"], "torkoly");



// function kivalasztas(array, szam) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === szam) {
//             return i
//         }
//     }
//     return null
// }

// console.log(kivalasztas([3, 5, 7], 7));