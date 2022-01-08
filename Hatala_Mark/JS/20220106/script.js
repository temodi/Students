/* class AnimalCl {
    constructor(name) {
        this.name = name;
    }
    setName(ujName) {
        this.name = ujName;
    }
    getName() {
        return this.name;
    }

}

class CsupaszCsigaCl extends AnimalCl {
    constructor() {
        super('')
    }
}



class MacskaCl extends AnimalCl {
    constructor(name, fajta) {
        super(name);
        this.fajta = fajta;
    }

    fut() {
        console.log(`${this.name} éppen fut!`);
    }

    setBeceneve(ujName) {
        this.name = ujName;
    }
}

let kutya = new AnimalCl('Bodri');
//console.log(kutya);
//console.log(kutya.name);

kutya.setName('Bodri2');
//console.log(kutya.getName());

let kismacska = new MacskaCl('Cirmos', 'Serval');
console.log(kismacska);

kismacska.fut(); */


// TO-DO //////////////////////////

/* tetel - allapot

    Bevasarlas - kesz
    takaritas - nincs kesz
    Javascript gyak - nincs kesz*/

/* class ToDoItem {
    constructor(tetelNeve) {
        this.tetelNeve = tetelNeve;
        this.statusz = 0; // 0 - nincs kesz, 1 - kesz
    }

    kesz() {
        this.statusz = 1;
    }

    nincsKesz() {
        this.statusz = 0;
    }
}

class ToDo {
    constructor() {
        this.toDoLista = [];
    }

    ujTetelHozzaadasa(tetelNeve) {
        let ujTetel = new ToDoItem(tetelNeve);
        this.toDoLista.push(ujTetel);
    }

    kesz(index) {
        this.toDoLista[index].kesz()
    }

    nincsKesz(index) {
        let keresettTetel = this.toDoLista[index];
        keresettTetel.nincsKesz(index)
    }

    tetelTorlese(index) {
        this.toDoLista.splice(index, 1);
    }

    tetelek() {
        return this.toDoLista;
    }

    megjelenit() {
        //console.log(this.toDoLista);
        for(let tetel of this.toDoLista) {
            let statusz = '';
            if(tetel.statusz) {
                statusz = 'kész';
            } else {
                statusz = 'nincs kész';
            }

            console.log(`${tetel.tetelNeve} - ${statusz}`)
        }
    }
}

let elsoToDoListam = new ToDo();
elsoToDoListam.ujTetelHozzaadasa('Bevasarlas');
elsoToDoListam.ujTetelHozzaadasa('Takaritas');
elsoToDoListam.ujTetelHozzaadasa('JavaScript gyakorlas');

elsoToDoListam.kesz(0);

console.log(elsoToDoListam);

elsoToDoListam.megjelenit() */

/* let teendo1 = new ToDoItem('Bevasarlas');
teendo1.kesz(); */

//console.log(teendo1);


//// Deklaráljunk egy olyan fv kifejezést, amelynek 1 paramétere van. Ha paraméter szám, akkor adja vissza. Egyébként konvertálja string-e és térjen vissza ezzel az értékkel.

/* let convertNum = function (num) {
    if (isNaN(num)) {
        return num.toString();
    } else {
        return num;
    }
} */
//console.log(convertNum(3));
//console.log(convertNum('Random'));
//console.log(convertNum(null));
//console.log(convertNum(true));


/* Hozzunk létre egy fv-t, amelynek 2 paramétere van, az első egy string. A 2. parameter egy tömb (pozitív egész számok).
A fv adja vissza a 2. tömb számok alapján a string karaktereit egy string ként. Arra figyelj, ha az indexek olyan
számot tartalmaznak, ahol már nincs a stringben karakter, akkor azt hagyja figyelmen kivűl és ne nullt vagy undefinedet
adjon vissza a karakterláncban. Ha nincsenek indexek, vagy olyan indexek vannak, ahol nincs karakterek, akkro csak üres
stringet adjon vissza. */

//charsFromString("alma", [2,3]) // eredmény: "ma"
//charsFromString("alma", [2,3,4]) // eredmény: "ma"
//charsFromString("korte", [10]) // eredmény: ""


/* let indexOfString = function (str, arr) {
    let returnString = '';
    for (let i = 0; i < arr.length; i++) {
        if (str[arr[i]] === undefined) continue;
        returnString += str[arr[i]];
    }
    return returnString;
}

console.log(indexOfString("körte", [1, 3, 5, 6])) */



// Each. Irjunk egy fv-t ami egy tömb minden elemére meghiv egy callback fv-t, atádja neki a paraméterben a tömb elemet.

/* each([1,2,3,4], function(val){
    console.log(val);
}); */


/* let each = function (arr, call) {
    if (!Array.isArray(arr)) {
        return null;
    }
    if (typeof call !== "function") {
        return null;
    }
    for (let i = 0; i < arr.length; i++) {
        call(arr[i]);
    }
} */

//each([1, 2, 3], function(elem){console.log(elem)});
//each([1, 2, 3], function(elem){alert(elem)});


/* Tároljuk egy hir cikk adatait objektumba és tároljunk el 5 cikket.
  Legyen neki `id, title, desc, read` mezői. Normál esetben a cikk megtekintésével a cikk id-ja alapján be tudjuk állítani, hogy olvasott már. Ezt most azzal oldjuk meg, hogy a felhasználótól kérjük be, melyik cikket szeretné olvasni, ha van olyan cikk (id alapjan), akkor állítsuk be olvasottra, jelenitsük meg a cikket a console.log-on. */


/* let cikk = [
    {
        id: 100,
        title: 'hir1',
        description: 'híroldal1',
        read: false
    },
    {
        id: 200,
        title: 'hir2',
        description: 'híroldal2',
        read: false
    },
    {
        id: 300,
        title: 'hir3',
        description: 'híroldal3',
        read: false
    }
]

let id = window.prompt('Add meg az id-t');

let keres = function (id) {
    for (let i = 0; i < cikk.length; i++) {
        if (id == cikk[i].id) {
            cikk[i].read = true;
            return cikk[i];
        }
    } return null;
} */

//console.log(keres(id));


/* Valósítsunk meg egy web kosár (cart) funkciót osztályokkal. Egy kosár tétel osztály úgy néz ki, hogy 
      - termekId, db, nettoAr, afa (0, 5, 18, 27)
      - tudja módosítani a db számot, de nem lehet kisebb mint nulla.
      - visszatudja adni a bruttoAr-at (metodus)
 */

class cartItem {
    constructor(termekId, db, nettorAr, afa) {
        this.termekId = termekId;
        this.db = db;
        this.nettorAr = nettorAr;
        this.afa = afa;
    }

    setdb(value) {
        if(value >= 0){
            this.db = value;
        }
    }

    bruttoAr(){
        return this.nettoAr + this.nettoAr*this.afa;
    }
}

let ujKosar = new cartItem(1, 2, 100, 0.05)
console.log(ujKosar);
console.log(ujKosar.bruttoAr());
ujKosar.setdb(3);
console.log(ujKosar);