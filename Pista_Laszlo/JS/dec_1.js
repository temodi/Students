/* function rollDie(min, max) {
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




//osszeadosdi
let sorozat = [1, 2, 3, 4, 5]


function addUp(tomb) {
    let add = tomb.reduce((a, b) => {
        return a + b
    })
    return add
}


//nagyon negaív 


let tombTomb = [-1, -6, 6, 7, 4, , 7, -8];

function negativNumbers(ideaddatombotMo) {
    let counter = 0;
    for (i = 0; i < ideaddatombotMo.length; i++) {
        if (ideaddatombotMo[i] < 0) {
            counter++
        }
    }
    return counter
}


//eldol

let szamsorozat = [1, 2, 3, 4]

function eldol(tomb, szam) {
    let answer = false
    if (szamsorozat.includes(szam)) {
        answer = true;
    } else {
        answer = false;
    }
    return answer
}

//Komplikáltabb;

let megtombosodesV2 = [1, 2, 3, 4, 5, 6, 7, 8];

function majdMostEldol(tomb, szam) {
    let eredmeny = []
    if (tomb.includes(szam)) {
        eredmeny = [tomb.indexOf(szam), true]
    } else {
        eredmeny = [-1, false]
    }
    return eredmeny
} */

//másolás tétele

/* let megtombosodesV3 = [1, 2, 3, 4, 5, 6, 7, 8];

function add1(array) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        let eredetitombeleme = array[i];
        newArray.push(eredetitombeleme + 1);
    }
    return newArray
}

 */



let otosL = [5, 90, 6];
let hatosL = [6, 45, 6];
let skandiL = [7, 35, 6];
let euroM = [5, 50, 10]

function lottoHuzas(lotto) {
    let nyertes = [];
    let joker = []
    for (let i = 0; i < lotto[0]; i++) {
        nyertes.push(Math.floor(Math.random() * (lotto[1] - 1 + 1)))

    }
    if (lotto == euroM) {
        joker.push(Math.floor(Math.random() * (lotto[2] - 1 + 1)))
        joker.push(Math.floor(Math.random() * (lotto[2] - 1 + 1)))
    } else {
        joker.push(Math.floor(Math.random() * (lotto[2] - 1 + 1)))
    }

    return `a nyertes szamok ${nyertes} es a joker ${joker}`

}