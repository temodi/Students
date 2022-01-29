/*5. (callback) - Irjunk egy általános compute fv, amelynek 3 paramétere van 2 szám, 1 callback.
   - fv ellenőríze hogy szám-e a 2 paraméter, ha nem adjon vissza NaN-t
   - fv ellenőrizze hogy a callback paramétere function -e, adjon vissza null-t
   - fv annyit csinál, hogy meghivja az ellenőrzések után a callback fv-t a 2 paraméterrel és a callback eredménnyel visszatér
   - callback fv: min, max, avarge, sum, subs, pow
*/

function min(a, b){
    if( a < b){
        return a;
    } else if( b < a){
        return b;
    } else{
        return `${a} (a két szám egyenlő)`
    }
}
function max(a, b){
    if( a > b){
        return a;
    } else if(b > a){
        return b;
    } else{
        return  `${a} (a két szám egyenlő)`
    }
}
function average(a, b){
    return (a + b) /2
}

function sum(a, b){
    return a + b
}

function sub(a, b){
    return a / b
}

function pow(a, b){
    return a**b
}




function compute (a, b , c){

    if(isNaN(Number(a)) || isNaN(Number(b))){
        return console.log(NaN)
    } else if( typeof c != "function" || c === undefined){
        return console.log(null)
    } else{
        return c(a,b)
    }

    

}



/*toDo list (osztállyal)
Feladat: Hozz létre egy teendő listát kezelő osztályt. (fv-el utolsó órán megcsináltuk). Az osztály a következő funtionálitásokat valósítsa meg (metódusok):

új tétel hozzáadása a teendő listához
tétel törlése a teendő listából
tétel beállítása hogy még sincs kész (alapból nincs kész, nincs kipipálva)`
tétel beállítása ha készen van (bevan pipálva)
teendő listát tudja visszaadni
teendő listát jelenítse meg (konzol log).
Verzió 1: 1 osztály és tömb és objektummal való megvalósítás (tombben a tételek és azok állapota)

Verzió 2: 2 osztály: a tételek is osztályok és tudják magukról az állapotukat illetve tudják állítani a saját állapotukat (kész, nincs kész), a másik osztály pedig kezeli a teendő listát.
*/

class todos{
    constructor(){
        this.todoList = []
  
    }

    additem(todo){
        this.todoList.push(this.todo = todo)
    }
    
}

let todoLista = new todos;
console.log(todoLista)
todoLista.additem("csináld")