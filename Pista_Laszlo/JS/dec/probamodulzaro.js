// Deklarálj egy string típusu változót (string literál) (1p), amelynek legyen egy kezdőértéke (1p).

let stringTipusuValtozo = "élaskdf";


//Deklarálj egy szám típusu változót (1p), amelynek a kezdő értéke legyen 0 tól nagyobb egész szám. (1p)

let szamTipusuValtozo = 1324234;

//Deklarálj egy változót kezdőérték nélkül. (1p) Adj értéket a változónak (szám vagy szöveges literál) (1p) Irasd ki a változó értéket (1p)

let valtozo;

valtozo = "strint tipusu";

console.log(valtozo)

//Deklarálj, egy egydimenziós tömb változót (1p). A változó értéke legyen 0-tól nagyobb pozitiv számok. (1p) Irasd ki a változó értéket (1p)

let tomb1d = [2,3,4,5,6];

console.log(tomb1d)

/* Az otthonodban fellelhetők az alábbi könyvek:

JavaScript alapok
Modern JavaScript
HTML és CSS 5 nap alatt Hozz létre egy db változót amiben tárolod a könyvcímeket. Irasd ki a változó értéket.*/


let konyvesPolc = ["JavaScript alapok", "Modern JavaScript", "HTML és CSS 5 nap alatt"];
console.log(konyvesPolc)


//Deklarálj egy 2 dimenziós tömböt, amiben bit-eket tárolunk (0, 1). Max. 3 eleme legyen, vagyis egy 3x3 elemből álló tömböt kell létrehozni. Irasd ki a változó értéket


let ketDimenziosTomb = [[1,2,3], [2,3,4], [3,4,5]];

console.log(ketDimenziosTomb)


/*Egy villanykapcsoló állaptotát tárold egy változóban. (1p) 
Legyen alapállapotban felkapcsolva. (1p) 
Ha felvan kapcsolva a kapcsoló, akkor egy dialógus ablakban (alert) jelenjen meg hogy 
"A villany fel van kapcsolva", ha a nincs fel kapcsolva, akkor egy dialógus ablakban jelenjen meg: "Nincs felkapcsolva" (2p)*/

let villanyKapcsolo = true;

if( villanyKapcsolo === true){
    window.alert("A villany fel van kapcsolva")
} else{
    window.alert("Nincs felkapcsolva")
}

//Deklarlálj egy string literál változót változót (1p) és irasd ki az első (1p) és utolsó karaktereté (1p)
let stringValtozoValtozo = "ValtozoValtozo";

console.log(stringValtozoValtozo.charAt(0))
console.log(stringValtozoValtozo.charAt(stringValtozoValtozo.length-1))


//Deklarálj egy dimenziós tömböt (1), amely az ABC betűit tartalmazza (max. 5 betű elég). (1p) Irasd ki a tömb elemeit, hogy új sorban jelenjen meg. (2p)

let abcTomb = ['a', 'b', 'c', 'd'];

for(let i = 0 ; i < abcTomb.length ; i++){
    console.log(abcTomb[i])
}


/*Deklarálj egy fv-t (1p), amelynek egy paramétere van (1p).
 A függvény feladata, hogy console-on kíírja a megadott paramétert. (1p) 
 Hivd meg a függvényt legalább kétszer két különböző paraméterrel (1p)*/


 function fuggveny(a){
     console.log(a)
 }

 fuggveny("MIVAAAN")
 fuggveny("BÁÁÁÁSTYAAA")


 /*Deklarálj egy fv kifjezést (1p), amelynek két paramétere van (1p). 
 A függvény feladata, hogy a két bemenő érték közül eldöntse melyik a kisebb, 
 majd a függvény térjen vissza a kisebbik értékkel (2p). 
 Hivd meg a fv kifejezést és jelenítse meg a fv eredményét. (2p)*/


 let min = function(a , b){

     return  console.log(a < b ? a : b)
 }

 min(16,2)

 /*Deklarálj egy objektumot (1p), amelynek van két propertyje: név és kor. (1p) 
 amelynek alapállapotát add meg (Kiss Jolan, 32) (1p) 
 Irasd ki külön a név property értéket és külön a kor property értéket (2p)*/

 let ojjektum = {
     nev : 'Kiss Jolan',
     kor: 32
 }

 console.log(`név: ${ojjektum.nev}, kor: ${ojjektum.kor}`)



 /*Egy kisállat kereskedés füzetben írja az általa eladandó kisallatokról az információt. Ez minta található a füzetben: Név: Buksi Faj: Dalmata Kor: 1 Ár: 15.000

Név: Csőrike Faj: Papagáj Kor: 0.5 Ár: 2.000

Név: Cirmi Faj: Macska Kor: 2 Ár: 5.000

Szeretné ezeket az adatokat számítógépen tárolni. 
Egy adat reprezentálást kellene létrehozni vagyis lemodellezni,
 milyen adatszerkezetben lehetne tárolni. (1p+1p) Hozz létre egy változót és tárold ezeket az adatokat. (2p) 
 Az adatok könnyen bővíthetőnek kell lennie, mivel az állatkereskedésbe több mint 200 állat van. (2 p) 
 (Nem kell függvény, nem kell hozzáad semmi extra metódus, csak az adatszerkezet és abban a adatok)*/

let allatkakok = [];

 class Allatok{
     constructor(nev, faj, kor, ar){
         this.nev = nev;
         this.faj = faj;
         this.kor = kor;
         this.ar = ar;

     }

   
 }

 let allat1 = new Allatok('buksi', 'dalmata', 1, '15.000')
 let allat2 = new Allatok('nembuksi', 'nemdalmata', 1, '12.000')

allatkakok.push(allat1)
allatkakok.push(allat2)

console.log(allatkakok)


/*Irj egy függvényt, amelynek egy paramétere van. (1p) 
Ellenőrízzük, hogy a paraméter tömb-e, ha nem tömb akkor térjen vissza a függvényből null értékkel. 
Amennyiben a paraméter tömb adjuk össze az összes elemét (programozási tétel). (1p+1p) 
A függvény térjen vissza az tömb elemeinek az összegével. (1p) 
Hivjuk meg a függvényt következő paraméterrel: "tomb" irassuk ki az eredményt, ha null (1p) 
Hivjuk meg a függvényt következő paraméterrel: [1, 2, 3], irassuk ki az eredményt, ha 6 (1p) 
Ha a feladat mindenben működik, akkor plus 2 pont (komplexitás miatt)*/

function ujFuggveny(a){
    let total = 0
    if(!Array.isArray(a)){
        return console.log(null)
    } else{
        for( let i = 0 ; i < a.length ; i++){
            total = total += a[i];
        }

        return console.log(total)

    }
}

ujFuggveny("tomb")

ujFuggveny([1,2,3])



/*Egy könyv adatai: cím, isbn, szerző. Hozzunk létre egy osztályt (Konyv) amely tárolja ezeket az adatokat. (3p) 
Az osztály példányosítása során meg lehessen adni mindhárom adatot (1p). 
Legyen egy beállító és egy lékérdező metódus az isbn számra (2p). 
Hozzunk létre két különböző könyvet (konyv1, konyv2) (példányosítás). (1p + 1p) 
Példa könyv: Cím: JavaScript a gyakorlatban - ISBN: 123231 - Szerző: John Doo Cím: JavaScript és az OOP - ISBN: 545454 - Szerző: 
Big Bill Irassuk ki a konyv1 isbn számát (1p) Irassuk ki a konyv2 szerzőjét. (1p)*/


class Konyv {
    constructor(cim, isbn, szerzo){
        this.cim = cim;
        this.isbn = isbn;
        this.szerzo = szerzo;
        
    }

    setIsbn(newIsbn){
        this.isbn = newIsbn;
    }

    getIsbn(){
        console.log(this.isbn)
    }
}


let konyv1 = new Konyv("harry potter and the philosopher's stone", 1234545674123, "J. K. Rowling")
let konyv2 = new Konyv("lord of the rings - the two tower", 123124562345, "J. R. R. Tolkien")

console.log(konyv1.isbn)
console.log(konyv2.szerzo)