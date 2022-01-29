/* let animals = ['dog', 'chicken', 'fish']
let moreAnimals = ['bird', ...animals, 'cat']
console.log(moreAnimals)

const arrowfv =  (str) => [...str]

console.log(arrowfv('Hello'))



function merge(a, b){
    if(!Array.isArray(a)){
        a = []
    }
    if(!Array.isArray(b)){
        b = []
    }
    let merged = [...a, ...b]
    return console.log(merged)
}

merge([1,2,3], [4,5,6])




function mergeObj(a, b){
    
    let merged = {...a, ...b}
    return console.log(merged)
}

mergeObj({name: 'Yó Zsi'}, {price: 20, address: 'Yo yo Str.'})

 */
/* 
function product(a, b, c, d, e) {  
    var numbers = [a,b,c,d,e];

    return numbers.reduce(function(acc, number) {
      return acc * number;
    }, 1)
  } */


function product2(...params){
    let numbers = params.slice(0,5).reduce((a,b)=>{ return a * b})
    console.log(numbers)
}

product2(1,2,3,4,5,6,7,8,9)

/* 
let key = prompt('key')
let value = prompt('value')
let newObject ={
    [key]: value,
}
 */

const animalInfo = [
    'name', 'Bloki', 'age', 12, 'color', 'brown' , 'eye', 'blue', 'name', 'Bandika', 'height', 120
];


function objectFromArray(arr){
    let newObj = {};
    for(let i = 0 ; i < arr.length; i++){
        if(i == 0 || i % 2 == 0){
            newObj = {...newObj, [arr[i]]: arr[i+1]}
        }
    }
    console.log(newObj)
}

objectFromArray(animalInfo)



let numbers = [1,2,3,4,5]

let [number1, number2, number3, number4, number5] = numbers