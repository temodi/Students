// random (min, max)

/*function random (min, max) {
    return Math.floor(Math.random()*(min, max) +1) + min;
}

function d6() {
    return Math.floor(Math.random()*6)+1;
}

function d6Sim() {
    let dob1 = 0;
    let dob2 = 0;
    let dob3 = 0;
    let dob4 = 0;
    let dob5 = 0;
    let dob6 = 0;
    for ( let i=0; i<1000; i++){
        let kockadobas = d6();
        console.log(kockadobas)
        if (kockadobas === 1) dob1++;
    }
    return [dob1; ]
}*/

function sumArray(summ) {
    let sum = 0;
    if (!Array.isArray(summ)) {
        return NaN;
    }
    for (let i = 0; i < summ.length; i++) {
        sum += arr[i];
    }
  
    return sum;
  }
  
  sumArray([1,2,3,4,5]);
  console.log(sumArray);
  
  
  sumArray([1]);
  console.log(sumArray);
  
  sumArray([]);
  console.log(sumArray);