 let otosL = [5, 90, 6];
 let hatosL = [6, 45, 6];
 let skandiL = [7, 35, 6];
 let euroM = [5, 50, 10]

 function lottoHuzas(lotto) {
     let nyertes = [];
     let joker = []
     for (let i = 0; i < lotto[0]; i++) {
         nyertes.push(Math.floor(Math.random() * lotto[1] + 1))

     }
     if (lotto == euroM) {
         joker.push(Math.floor(Math.random() * lotto[2] + 1))
         joker.push(Math.floor(Math.random() * lotto[2] + 1))
     } else {
         joker.push(Math.floor(Math.random() * lotto[2] + 1))
     }

     return `a nyertes szamok ${nyertes} es a joker ${joker}`

 }

 /*
 // szamologep

 function add(a, b) {
     return a + b
 }

 function divide(a, b) {
     return a - b
 }

 function szamologep(a, b, muvelet) {
     return muvelet(a, b)
 }



 //kiválogatás

 let kivalogatas = [1, 2, 3, 4, 5, 6];

 function kivalogat(tomb) {
     let paros = []
     for (let i = 0; i < tomb.length; i++) {
         if (tomb[i] % 2 == 0) {
             paros.push(tomb[i])
         }
     }
     return paros
 }
  */

 // callback functions
 function even(num) {
     return num % 2 === 0;
 }

 function odd(num) {
     return num % 2 === 1;
 }

 function d5(num) {
     return num % 5 === 0;
 }

 let evenN = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].filter(even)
 let oddN = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter(odd)
 let d5N = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter(d5)
 console.log(evenN)
 console.log(oddN)
 console.log(d5N)