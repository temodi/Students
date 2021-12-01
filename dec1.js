function random (MIN, MAX) {
 let result = Math.round(Math.random()*(MAX - MIN + 1)) + MIN;
 return result;
}

let tomb = [0,0,0,0,0,0]
let count = 0;

function randomTest() {
  for (let i = 0; i < 10000; i++) {
    result = random(1,6);
    if (result === 1) {
        tomb[i]+= count++;
    } else if (result === 2) {
        tomb[i]+= count++;
    } else if (result === 3){
       tomb[i]+= count++;
      } else if (result === 4){
        tomb[i]+= count++;
      } else if (result === 5){
        tomb[i]+= count++;
      } else if (result === 6)
      tomb[i]+= count++;
}

console.log (random(1,6));
