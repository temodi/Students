/* function random (MIN, MAX) {
 let result = Math.round(Math.random()*(MAX - MIN + 1)) + MIN;
 return result;
}

let tomb = [0,0,0,0,0,0]

function randomTest() {
  for (let i = 0; i < 10000; i++) {
    if (random(1,6) === 1) {
        tomb[i]+= random(1,6);
    } else if (random(1,6) === 1)
  }

}

console.log (random(1,6));
 */

function osszegzes (arrayy) {
  let sum = 0;
       for (let i = 0; i < arrayy.length; i++) {
         sum += arrayy[i];
       }
       return sum;
       
}

console.log (osszegzes([1,2,3,4,5]));

function osszegzes2 (arrayy) {
  let sum = 0;
       for (let i = 0; i < arrayy.length; i++) {
         if (arrayy[i] < 0 ){
           sum++
         }
       }
       return sum;
       }
//asdasdasdasddsasdadsa//

