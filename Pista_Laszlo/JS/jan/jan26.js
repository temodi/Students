/*
shorthand properties
spread operator
reduce
*/

/* 
const arr = [2,3,4,5,6,7,8]

arr.find((x) => { if(x % 2 == 0){return console.log(x)}}) */

/*
Array.filter
Hozzunk létre változó számu paramétterel rendelkező fv-t. 
A fv paraméterei különböző objektumok lehetnek. 
A fv térjen vissza egy tömbbel, de csak azokkal az objektumokkal, 
ahol van id property is.

Hozzunk létre egy változó számú paraméterrel rendelkező fv-t, 
amelynek első paramétere egy szám. A további paraméterei tömbök, 
adja vissza egy tömbben a megadott számnál nagyobb számokat.

*/


/* let one = { id: 1, name: 'Yó Zsi'}
let two = { id: 2, name: 'Yó Zsi2'}
let three = { name: 'Yó Zsi3'}

function findID(...params){

    let tomb2 = Array.from(params);
    let iDee = [];

    

    tomb2.forEach((x)=>{
        if(x.id !== undefined){
            iDee.push(x)
        }
    })

    console.log(iDee)
}

findID(one,two,three)
 */




let arrToCopy = [1,2,3,4]



function shallowCopy(a){
    let arrCopy = []
    a.forEach((x)=>arrCopy.push(x))
    return console.log(arrCopy)
}

shallowCopy(arrToCopy)

let string = "    Ez egy string    ";
