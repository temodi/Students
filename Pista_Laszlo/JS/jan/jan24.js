//array functions, valtozó parameter lista
//variádikus függvény
//multiple arguments

//1
function fullName(...args){
    let name = Array.from(args)
    console.log(name.join(' '))
}


fullName('Róbert','Pesta', 'Hozéármándó', 'De Dondelájá')

//2
const fullName2 = (...args)=>{ console.log(Array.from(args).join(' '))}

fullName2('Róbert','Pesta', 'Hozéármándó', 'De Dondelájá', 'von', 'Brandenburg')

//3
function toUpperKejsz(...args){
    let upper = Array.from(args)
    let newUpper = []
    upper.forEach((x)=>{
        newUpper.push(x.toUpperCase())
    })
    console.log(newUpper)
}


toUpperKejsz('yo', 'yo2')

//4
function sum(...args){
    let nums = Array.from(args);

    console.log(nums.reduce((a,b)=>{
        return a + b
    }))
}

sum(1,2,3,4,5)

/*
Array.find
Keressük meg egy tömbben a kettővel osztható számokat
Hozzunk létre egy fv-t, aminek az első paramétere megadja 
mennyivel oszható számokat keresünk (kezdőérték 2), a 
2. parametertől kezdve akárhány paramétere lehet. 
(tömbök number értékkel feltöltve). 
A fv adja vissza a paraméterben megadott szám által osztható számokat egy tömbben.
*/


function findIt(a, ...params){
    let nums = Array.from(params);
    let eredmeny = nums.filter(x => x % a == 0)
    console.log(eredmeny)
}

findIt(2, 3, 4 ,5 ,6,7,8)