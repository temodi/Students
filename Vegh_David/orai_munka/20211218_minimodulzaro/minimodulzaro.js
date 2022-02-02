// 1. feladat
// let myString = "valami";



// 2. feladat
// let myNum = 3;



// 3. feladat
/* let random;
random = 2;
console.log(random); */



// 4. feladat
/* let tomb = [1, 2, 3, 4, 5];
console.log(tomb); */



// 5. feladat
/* let tomb2 = ["JavaScript alapok", "Modern JavaScript", "HTML és CSS 5 nap alatt"];
console.log(tomb2); */



// 6. feladat
/* let tomb3 = [[0100, 1000, 1100,],
            [1101, 1001, 1011,],
            [0111, 0110, 1001]];
console.log(tomb3); */



// 7. feladat 
/* let kapcsolofel = false;
if(kapcsolofel === true){
    alert("A villany fel van kapcsolva.")
}
else if(kapcsolofel === false){
    alert("Nincs felkapcsolva.")
} */



// 8. feladat
/* let string2 = "randomstring";
console.log(string2.charAt(0));
console.log(string2.charAt(string2.length-1)); */



// 9. feladat
/* let tomb4 = ["a", "b", "c", "d", "e"];
for(let i = 0; i < tomb4.length; i++){
    console.log(tomb4[i]);
} */



// 10. feladat
/* function elsofv(input){
    console.log(input);
}
elsofv("hello");
elsofv("world"); */



// 11. feladat
/* let min = function(num1, num2){
    if(num1 < num2){
        return num1;
    }
    else{
        return num2;
    }
}
console.log(min(7, 5)); */



// 12. feladat
/* let obj1 = {
    nev: "Kis Jolan",
    kor: 32
}
console.log(obj1.nev);
console.log(obj1.kor); */



// 13. feladat
/* class Allatok{
    constructor(nev, faj, kor, ar){
        this.nev = nev;
        this.faj = faj;
        this.kor = kor;
        this.ar = ar;
    }
}
let allat1 = new Allatok("Buksi", "Dalmata", 1, 15000);
console.log(allat1); */



// 14. feladat
/* function isArray(arr){
    if(!Array.isArray(arr)){
        return null;
    }
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}
console.log(isArray("tomb"));
console.log(isArray([1, 2, 3])); */



// 15. feladat
/* class Book{
    constructor(title, isbn, author){
        this.title = title;
        this.isbn = isbn;
        this.author = author;
    }

    get bookisbn() {
        return this.isbn;
    }

    set bookisbn(value) {
        this.isbn = value;
    }
}

let book1 = new Book("JavaScript a gyakorlatban", 123321, "John Doe");
let book2 = new Book("JavaScript és az OOP", 545454, "Big Bill");

console.log(book1.isbn);
console.log(book2.author);

// setter és getter hívása
book1.bookisbn = "Jolan";
console.log(book1.bookisbn); */