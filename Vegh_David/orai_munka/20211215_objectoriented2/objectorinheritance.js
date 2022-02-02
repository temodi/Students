class Alakzat {
    meret;
    xCoord;
    yCoord;
    constructor(){

    }

    setMeret(ujMeret){
        this.meret = ujMeret;
    }

    setPozicio(x, y){
        this.xCoord = x;
        this.yCoord = y;
    }

    setSzin(ujSzin){
        this.szin = ujSzin;
    }
}

class Negyzet extends Alakzat{
    #oldalMeret;
    constructor (oldalMeret){
    super ()
    this.#oldalMeret = oldalMeret;
    }
    setOldalMeret (ujOldalMeret){
        this.#oldalMeret = ujOldalMeret;
    }
}

let kicsiNegyzet = new Negyzet();

kicsiNegyzet.setMeret(12);
kicsiNegyzet.setPozicio(1, 1);
kicsiNegyzet.setSzin("#FFFFFF");




class Person {
    #name;
    #age;
    constructor(name, age){
        this.#name = name;
        this.#age = age;
    }
    
    get neve(){
        return this.#name;
    }

    set neve(megadottnev){
        this.#name = megadottnev;
    }

    get kora(){
        return this.#age;
    }

    set kora(megadottkor){
        this.#age = megadottkor;
    }

    toString(){
        console.log(this.#name, this.#age);
    }
}

let person1 = new Person("Géza", 21);

console.log(person1);

class Alkalmazott extends Person{
    #beosztott
    constructor(name, age, beosztott){
        super(name, age);
        this.#beosztott = beosztott;
    }

    toString(){
        console.log(this.neve, this.kora, this.#beosztott);
    }
}

let alkalmazott = new Alkalmazott("Peti", 28, "irodista");

console.log(alkalmazott);

alkalmazott.toString()