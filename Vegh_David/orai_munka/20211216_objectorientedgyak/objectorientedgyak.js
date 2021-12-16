function giveBackRandom(array) {
    if (!Array.isArray(array)) {
        return null
    }
    return array[Math.floor(Math.random() * array.length)];
}

console.log(giveBackRandom(["cica", "kutya", "ló", "hal"]));




function join(array1, array2) {
    let array3 = [];
    array3 = array1.concat(array2);
    return array3;
}

console.log(join(["apa", "anya"], ["mama", "papa"]));




function compare(array1, array2) {
    let array3 = [];
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array1[i] === array2[j]) {
                array3.push(array1[i]);
            }
        }
    }
    return array3;
}

console.log(compare([1, 3, 6, 9, 12], [2, 3, 7, 10, 12]));




function byteChange(byteIn) {
    let obj = {};
    obj.bit = byteIn * 8;
    obj.byte = byteIn;
    obj.kilobyte = byteIn / 1024;
    obj.megabyte = byteIn / (1024 ** 2);
    obj.gigabyte = byteIn / (1024 ** 3);
    return obj;
}

console.log(byteChange(10000000000));




function compareObject(obj1, obj2) {
    let elso = Object.keys(obj1);
    let masodik = Object.keys(obj2);
    if (elso.length !== masodik.length){
        return false;
    }
    for (let i = 0; i < elso.length; i++) {
        if (elso[i] !== masodik[i]) {
            return false;
        }
    }
    return true;
}

console.log(compareObject({ a: 1, b: 2 }, { a: 1, b: 2, c: 3 }));




function compareObject2(obj1, obj2) {
    let elso = Object.keys(obj1);
    let masodik = Object.keys(obj2);
    if (elso.length !== masodik.length){
        return "A két objektum kulcsai nem egyeznek meg!"
    }
    for (let i = 0; i < elso.length; i++){
        if(obj2.hasOwnProperty(elso[i]) === false){
            return "A két objektum kulcsai nem egyeznek meg!"
        }
    }
    return "A két objektum kulcsai megegyeznek!"
}

console.log(compareObject2({ b: 1, a: 2 }, { a: 1, b: 2, c: 3 }));




class Counter{
    constructor(num, changeBy, noMinus){
        this.num = num;
        this.changeBy = changeBy;
        if (this.changeBy === undefined){
            this.changeBy = 1;
        }
        this.noMinus = noMinus;
    }

    increase(){
        this.num += this.changeBy;
    }

    decrease(){
        if (this.noMinus === true && this.num < 0 + this.changeBy){
            console.log("A számláló nem lehet negatív");
        }
        else{
            this.num -= this.changeBy;
        }
    }

    show(){
        console.log(this.num);
    }
}

let szamlalo1 = new Counter(5, 2, true);

szamlalo1.increase();
szamlalo1.increase();
szamlalo1.increase();
szamlalo1.decrease();
szamlalo1.decrease();
szamlalo1.decrease();
szamlalo1.decrease();
szamlalo1.decrease();
szamlalo1.decrease();
szamlalo1.show();




class URLHistory{
    urlLista = [];
    constructor(url){
        this.urlLista.push(url);
    }

    go(url){
        this.urlLista.push(url);
    }

    back(){

    }

    forward(){

    }

    reset(){
        this.urlLista = [];
    }
}

let google = new URLHistory("www.google.com");
let apple = new URLHistory("www.apple.com");
let ibm = new URLHistory("www.ibm.com");

