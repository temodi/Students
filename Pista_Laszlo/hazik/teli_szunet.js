/*Feladat: Hozz létre egy olyan függvényt, amelynek visszatérési értéke egy olyan tömb, amelynek elmei 
random számok nullától tízig. Hogy mekkora legyen a tömb azt mi határozhassuk meg paraméterben.

Feldat részletesen: Hozz létre egy függvényt, amelynek egy paramétere van, hogy mekkora legyen a tömb, 
a függvény állítson elő egy ekkora méretű (elem számú) tömböt, amelynek elemei random számok (0-10ig) és térjen vissza vele.

Példa hívások: */

function randomArray(num){
    let randomArr = []
    for(let i = 0 ;i < num ; i++){
        randomArr.push(Math.floor(Math.random()* num)+1)
    }
    return console.log(randomArr)
}

randomArray(5)



/*Feladat: Hozz létre egy olyan függvényt, amely létre tud hozni 1 vagy 2 dimenzios tömböt 
és feltölti egy általunk megadott érékkel és adja vissza ez igy létrehozott tömböt.

Feladat részletesen: A függvénynek három paramétere van,ebből kettő kötelező, 
az első hogy mivel tölts fel a tömböt, a második az 1. dimenzió mérete, a harmadik (opcionális) 
a 2. dimenziós mérete. Ha nincs megadva második paraméter, akkor csak egy dimenziós tömböt hozzon létre.
 Ha nincs megadva, az első vagy második paraméter akkor irja ki hogy mi a hiba és adjon vissza null-t.
 
 createAndFill('alma',3) // eredmény: ['alma', 'alma', 'alma']
 createAndFill(0, 3) // eredmény: [0, 0, 0]
 createAndFill(1, 2, 3) // eredmény: [[1, 1, 1], [1, 1, 1]]
 */


 function createAndFill(item, multiplicator, arrayDim){
     let dummyArray = [];
    
     if(arrayDim){
        for(let j = 0 ; j < Number(arrayDim) ; j++){
            let dim = []

            for(let i = 0 ; i < multiplicator ; i++){
                dim.push(item)
            }
            dummyArray.push(dim)
        }

        return console.log(dummyArray)
     } 
     else {
        for(let i = 0 ; i < multiplicator ; i++){
            dummyArray.push(item)
        }
        return console.log(dummyArray)
     }
     

    
 }

 createAndFill("alma", 4,2 )


 /*Feladat: Hozz létre egy olyan függvény, amely egy tömb tetszőleges elemeit tudja visszadadni 
 (indexek alapján) egy tömbben. Ha olyan index van megadva, amelyen nincs elem, akkor a visszadott tömbben ne legyen benne se üres, se null elem.

Feladat részletesen: A függvénynek két paramétere van, egyik a tömb, amely tartalmaz elemeket. 
A másik paraméter egy tömb amely tetszőleges indexeket tartalmaz. A visszatérés értéke a függvénynek egy új tömb,
amely a paraméterből a megadott indexek alapján tartalmazza az elemeket.


    valuesByIndexes(['alma', 1, 'korte', 3], [0, 2]) // eredmény: ['alma', 'korte']
    valuesByIndexes([5, 4, 3, 2, 1, 0], [0, 10])     // eredmény: [5]
    valuesByIndexes([], [1, 2, 3])                   // eredmény: []
    valuesByIndexes(['a', 'b', 'c'], [0, 1, 2])      // eredmény: ['a', 'b', 'c']
*/
let array = ["alma", "körte", "banán", "mangó", "dinnye"]

function findTheIndex(array, index1, index2){
    let eredmeny = [];
    let index1eredmeny = array[index1-1]
    let index2eredmeny = array[index2-1]
    if(index1eredmeny != undefined && index2eredmeny != undefined){
        eredmeny.push(index1eredmeny)
        eredmeny.push(index2eredmeny)
    } else if(index1eredmeny != undefined){
        eredmeny.push(index1eredmeny)
    } else if(index2eredmeny != undefined){
        eredmeny.push(index2eredmeny)
    }

    console.log(eredmeny)
}
    

findTheIndex(array, 1, 5)


/* Hozzunk létre egy olyan higher order fv-t, amelynek 3 paramétere van. 
Az első paramétere egy sikeres callback (kötelező és fv), a második paraméter egy sikertelen callback (kötelező és fv), 
a harmadik paramétere egy tetszőleges értékű paraméter. Ha a callback parameterek nem függvények, akkor consolra 
rjuk ki hogy nem megfelelő callback paraméterek és lépjen ki a függvényből. Ha a 3 paramétere string, 
akkor hivja meg a sikeres callback függvényt és adja át paraméterben a stringet. Ha a 3 paraméter 
nincs megadva vagy nem string, akkor hivja meg a sikertelen callback függvényt.*/

let success = function (success ){return console.log("Success:" + " " + success) }

let fail = function(){return console.log("Fail")}

function check(a,b,c){

    if(typeof a != "function" || typeof b != "function"){
        return console.log("nem megfelelő paraméter")
    } else if( typeof c == "string"){
        return a(c)
    } else if ( typeof c != "string" || !c){
        return b()
    }
}
check(success, fail, 2)


/*Hozz létre egy teendő listát kezelő osztályt. (fv-el utolsó órán megcsináltuk). Az osztály a következő funtionálitásokat valósítsa meg (metódusok):

új tétel hozzáadása a teendő listához
tétel törlése a teendő listából
tétel beállítása hogy még sincs kész (alapból nincs kész, nincs kipipálva)`
tétel beállítása ha készen van (bevan pipálva)
teendő listát tudja visszaadni
teendő listát jelenítse meg (konzol log).
*/


let toDoList = [{todo: "takaritas", done: true}, {todo: "vacsi", done: false}];

function addItem(list, task){
    let newObject = { todo: task, done: false};
    list.push(newObject)
    
}

function remove(list, pos){
    list.splice(pos - 1 , 1)
}

function done(list, pos){
    list[pos-1].done = true;

}

function  undone(list, pos){
    list[pos-1].done = false;
}


function list(list){
    console.log(list)
}
