// function random(min, max) {

//     return  Math.floor(Math.random()*(max - min + 1) + min);
// }
// let kockaArray=[0,0,0,0,0,0];

// function d6() {
//     return random(1,6)
// }

// function dice(times) {
//     let dice=0;
//     let egyes = 0;
//     let kettes = 0;
//     let harmas = 0;
//     let negyes = 0;
//     let otos = 0;
//     let hatos = 0;
//     for (let i = 0; i < times; i++) {
//        dice= random(1, 6)
//         switch (dice) {
//             case 1: egyes++
//                 break;
//             case 2: kettes++
//                 break;
//             case 3: harmas++
//                 break;
//             case 4: negyes++
//                 break;
//             case 5: otos++
//                 break;
//             case 6: hatos++
//                 break;

//         }
//     }
//     kockaArray.push(egyes,kettes,harmas,negyes,otos,hatos)

// }


// function dice(times){

//     for(let i=0;i<times;i++){
//         let kockaDobas=d6()
//         kockaArray[kockaDobas-1]++;
//     }
// }
// dice(10000)

// console.log(kockaArray)


// let num=[1,2,3,4,5,6,7,8,9,10]
// let sum=0;

// function sumArray(array)
// {for(let i=0;i<array.length;i++){
//     sum +=array[i]
// }}

// console.log(sum)


// let numArray = [0, 1, 2, 3, 45, -10, -12, -123, -12443543]

// function negativeCounter(array) {
//     let negative
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] < 0) negative++


//     }
//     return negative
// }

// console.log(negativeCounter(numArray))

// let numArray = [0, 1, 2, 3, 45, -10, -12, -123, -12443543, 10101210]

// function eldontes(array, search) {
//     if (array.includes(search)) return true;
//     else return false;
// }

// console.log(eldontes(numArray, 1))


// function indexOf(array, search) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] == search) return i        
//     }
// }

// console.log(indexOf(numArray, 45))

// let array = [1, 2, 3, 4, 5, 6, 7, 8]



// function plusz(array, plussz) {
//     let vegeredmeny = []
//     for (let i = 0; i < array.length; i++) {
//         vegeredmeny.push(array[i] + plussz)
//     }

//     return vegeredmeny;
// }

// console.log(plusz(array, 10));
// console.log(array);

function lottoWrite(kind, joker) {
    let lottoArray = []
    if (kind == 5) {
        for (let i = 0; i < kind; i++) {
            let szam = Math.floor(Math.random() * 90 + 1)
            lottoArray.push(szam)
        }
    }
    else if (kind == 6) {
        for (let i = 0; i < kind; i++) {
            let szam = Math.floor(Math.random() * 45 + 1)
            lottoArray.push(szam)
        }
    }
    else if (kind == "skandi") {
        for (let i = 0; i < 7; i++) {
            let szam = Math.floor(Math.random() * 35 + 1)
            lottoArray.push(szam)
        }

    }
    if (joker == "joker") {
        joker = Math.floor(Math.random() * 99999 + 1)
        return {
            lottoszamok: lottoArray,
            joker: joker
        }
    }
    else if (joker == "euro") {
        let jokerA = []
        let jokerB = []

        for (let i = 0; i < 5; i++) {
            jokerA.push(Math.floor(Math.random() * 50 + 1))
        }
        for (let i = 0; i < 2; i++) {
            jokerB.push(Math.floor(Math.random() * 10 + 1))
        }

        return {
            lottoszamok: lottoArray,
            A: jokerA,
            B: jokerB
        }
    }

}
console.log(lottoWrite("skandi", "euro"))