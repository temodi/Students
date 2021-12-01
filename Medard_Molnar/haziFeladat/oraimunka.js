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


let num=[1,2,3,4,5,6,7,8,9,10]
let sum=0;

for(let i=0;i<num.length;i++){
    sum +=num[i]
}

console.log(sum)