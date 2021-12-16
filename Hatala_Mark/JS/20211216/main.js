let array = [1, 7, 5, 8, 10, 3, 4]

function randomSearch(arr) {
    let indexRandom = Math.floor(Math.random() * arr.length);
    return arr[indexRandom];
}

console.log(randomSearch(1, 100));


let flat = function (arr1, arr2) {
    let newArray = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                newArray.push(arr1[i]);
            }
        }
    }
    return newArray;
}

let arr1 = [1, 2, 3, 4, 5, 6, 7];
let arr2 = [0, 8, 2, 9, 5, 6, 10];

console.log(flat(arr1, arr2));


// byte

function byteChange(byteIn) {
    let obj = {};
    obj.bit = byteIn * 8;
    //...
}


//compare two objects

function compareObj(obj1, obj2) {
    let values1 = Object.keys(obj1);
    let values2 = Object.keys(obj2);

    if (values1.length !== values2.length) {
        return false;
    }

    for (let i = 0; i < values1.length; i++) {
        if (obj2.hasOwnProperty(values1[i]) === false) {
            return false;
        }
    }
    return true;
}

let obj1 = { a: 1, b: 2 };
let obj2 = { a: 2, b: 2 };

// console.log(Object.is(obj1, obj2));

console.log(compareObj(obj1, obj2));

//Számláló

let counter = 0;

function incCounter() {
    counter += 1;
}

function decCounter() {
    counter -= 1;
}

class Counter {
    constructor(szamlalo, steps, negative) {
        this.szamlalo = szamlalo;
        this.steps = steps;
        this.negative = negative;

        if (typeof this.steps === 'undefined') {
            this.steps = 1;
        }
    }
    incCounter() {
        return this.szamlalo += this.steps;
    }
    decCounter() {
        if ((this.negative && this.szamlalo - this.steps < 0) || !this.negative) {
            this.szamlalo -= this.steps;
        }

        /*         if (this.szamlalo < 0 && !this.negative) {
                    this.szamlalo = 0;
                } */
    }
    counter() {
        return this.szamlalo;
    }

}

let s1 = new Counter(10, 2, false);


class UrlHistory {
    urlList = [];
    constructor(url) {
        this.urlList.push(url);
    }

    go(url) {
        this.urlList.push(url);
    }
    back() {

    }
    forward() {

    }
    reset() {
        this.urlList = [];
    }
}

let urlHistory = new UrlHistory('https://google.com/')