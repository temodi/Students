//destructuring
//1.feladat
console.log('---------------------------------------')
let gps = [24.232, 43.222];

let [x,y] = gps
console.log( x )
console.log( y )


//2.feladat
//es5 to es6
console.log('---------------------------------------')
var arr = [1, 2];
var temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;

/* let arr2 = [1,2]
[arr2[1], arr2[0]] = arr2 */



//3.feladat
//Van egy tömbünk ami kor-t tartalmaz pl [54, 65, 4] destructoringgal vegyük ki a legfiatalabbat. Kell előtte plusz művelet!!
console.log('---------------------------------------')
let age = [54,65,4, 35,2];

let [ , , youngest] = age
console.log(youngest)

let ygst = age[age.length-1]
console.log(ygst)


let ygs = Math.min(...age)



age.sort((a,b)=>{ return a - b})
let [minAge] = age
console.log(minAge)



//4.feladat
/*
Tömben a helyezeteket nevét kapjuk meg helyezés szerint pl: ['Tibor', 'Eszter', 'David', 'Adám','Aladar']
 Irjunk egy olyan arrow fv.t amely destructuring parametere van és ezt az eredményt adja viszza: 
 { first: 'Tibor', second:'Eszter', third:'David', others: ['Adám', 'Aladar'] }
*/
console.log('---------------------------------------')

/* function names([a,b,c, ...others]){
    let scores ={
        First,
        Second,
        Third,
        Others,
    }
    console.log(scores)
} */

//let names2 = ([a,b,c, ...others])=>{ let scores2 ={first,second,third,others}}


//names2(['Tibor', 'Eszter', 'David', 'Adám','Aladar'])

const func = ([first,second, third, ...others])=>({first,second, third, others})
console.log(func(['Tibor', 'Eszter', 'David', 'Adám','Aladar']))




//feladat 5 Object destructuring
const options = {
    visible: true,
    display: 'block',
  }

const {visible = false, display} = options


/*
Irjunk egy olyan fv-t ES6 (destructuring, template literal), ami visszad template literallal a lentebbi eredményt. Object destructuring parametert használj.
const user = {
  firstName: 'Elemér',
  lastName: 'Nagy',
}

highlight(user); 
// visszatérése: ' Kedves <strong>Nagy Elemér<strong>!'
*/

const user = {
    firstName: 'Elemér',
    lastName: 'Nagy',
  }

const fullName = (objInput)=>{
    const {firstName, lastName} = objInput;
    const paragraph = document.createElement('p')
    const body = document.querySelector('body')
    paragraph.innerHTML = `Kedves <strong>${lastName} ${firstName}</strong>!`;
    body.append(paragraph)
    return console.log(`Kedves <strong>${lastName} ${firstName}</strong>!`)
}
fullName(user)



//nullish coalescing

let a
let b = a ?? 'default erték';


