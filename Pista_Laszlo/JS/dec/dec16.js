let tomb1 = [1, 'a', 'b', 'c', 'd', 'e'];
let tomb2 = [1,2,3,4,5,6, 'd', 'c']

function randomItem(){
    let number = Math.floor(Math.random()*tomb1.length);

   return console.log(tomb1[number])
}
randomItem()


function nokia(a , b){
    let newArray = [];
 for( let i = 0 ; i < a.length; i++){
     if( b.includes(a[i])){
        newArray.push(a[i])
     }
 }
 return console.log(newArray)
}

nokia(tomb1, tomb2)







//Írj egy függvényt ami byte okat kér be. És váltsd át mega és gigabyte-ra.Az eredményt rakd bele egy objectbe és returnold


function converter(bit){
    let object = {}
    object.bit = bit;
    object.byte = bit / 8
    object.megaByte = object.byte / 1024;
    object.gigaByte = object.megaByte / 1024;
    return console.log(object)
}

converter(1048576)


//rjunk egy függvényt, ami összehasonlít két objektumot. A két objektum egyenlő, ha a propertyk megegyeznek vagyis mindkét objektum
//pontosan ugyanazon nevű propertyket tartalmazza. Ebben az esetben a true értékkel tér vissza, egyébként false.


const obj1 = {
    name: 'Rami',
    pNum: 234
}

const obj2 = {
    name: 'Rami',
    pNum: 123
}

const obj3 = {
    name1: "nemRami",
    pNumber:  123
}

function compare(a, b){
    let result = true;
    let properties = Object.keys(a)

    for(let i = 0 ; i < properties.length ;i++){
       if( !b.hasOwnProperty(properties[i])){
           result = false
       }
    }

    return console.log(result)

}

compare(obj1, obj2)



/*Számláló osztályt. Hozzunk létre egy számláló funkcionálitást megvalósító osztályt. Az osztály példányosításakor állítsa nullára a számlálót.
   Legyen eg metódusa amellyel növelni lehet a számlalót, egy amellyel csökkenteni lehet és egy amellyel lelehet kérdezni a számláló állását.
 */


class Counter {
    constructor(){
        this.count = 0;
    }

    toIncrease(num){
        if( num === undefined){
            num = 1
        }

        this.count += num;
    }

    toDecrease(num){
        if( num === undefined){
            num = 1
        }
        
        this.count -= num;

        if( this.count < 0){
            console.log(" a szamlalo nem lehet negativ")
            return this.count = 0;     
        }
    }

    toDisplay(){
        console.log(this.count)
    }

}

let newCounter = new Counter;



/*URLHistory kezelőt hozzunk létre. Kicsit hasonlít az Undo/Redo funkcióra. Vagyis visszatudunk vagy előre tudunk lépkedni a historyban. 
   Egy weboldal oldal url megtekintéseit tároljuk.
   Legyen egy metódus ami regisztrálja az urlt, vagyis tárolja, legyen ez a go()
   Legyen egy back metódus ami visszalép az előző oldalra, addig amig el nem fogynak az url-ek. A visszatérési értke az url legyen.
   Legyen egy forward metódus, ami előre lépteti az oldalon, addig amig van url.
   Legyen egy reset metódus, ami alapállapotba hozza az objektumot, vagyis nincs url tárolva.
*/ 

class browserHistory {
    constructor(){
        this.history = ['blank page'];
        this.count = 0;
    }

    goTo(web){
        this.history.push(web)
        this.count ++
    }

    undo(){
        this.count --
        return this.history[this.count]
    }
    redo(){
        this.count++
        return this.history[this.count]
    }

    reset(){
        this.count = 0;
        this.history = ['blank page']
    }
}

let search = new browserHistory;