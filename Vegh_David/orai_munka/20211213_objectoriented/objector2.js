class Cim {
    constructor(orszag, varos, irszam, utca, hazszam, emelet, ajto) {
        this.orszag = orszag;
        this.varos = varos;
        this.irszam = irszam;
        this.utca = utca;
        this.hazszam = hazszam;
        this.emelet = emelet;
        this.ajto = ajto;
    }

    toString() {
        return this.orszag + ", " + this.varos + ", " + this.irszam + ", " + this.utca + " " + this.hazszam + " " + this.emelet + "/" + this.ajto;
    }

    irszamSet(ujirszam) {
        this.irszam = ujirszam;
    }

    irszamQuery() {
        console.log(this.irszam);
    }
}

let Cim1 = new Cim("Magyarország", "Mór", "8060", "Liszt Ferenc utca", "13.", "2", "1");
let Cim2 = new Cim("Magyarország", "Veszprém", "8200", "Mikszáth Kálmán utca", "1.", "1", "4");

console.log(Cim1.toString());

Cim2.irszamSet(4500);

Cim2.irszamQuery();




class Fegyver {
    constructor(tolteny, sebzes, maxtar, akttar) {
        this.tolteny = tolteny;
        this.sebzes = sebzes;
        this.maxtar = maxtar;
        this.akttar = akttar;
    }

    shot() {
        if (this.akttar > 0) {
            this.akttar = this.akttar - 1;
            console.log(this.akttar);
        }
        else {
            console.log("Üres a tár.")
        }
    }

    reload() {
        this.akttar = this.maxtar;
        console.log("Reloaded: " + this.akttar + " töltény áll rendelkezésre");
    }
}

let Magnum = new Fegyver("2.1", "20", 6, 6);

console.log(Magnum);

Magnum.shot();
Magnum.shot();
Magnum.reload();





class Ceg {
    constructor(cegjegyzekszam, adoszam, cegnev) {
        this.cegjegyzekszam = cegjegyzekszam;
        this.adoszam = adoszam;
        this.cegnev = cegnev;
    }

    beallitKapcstarto(kapcstart) {
        this.kapcstart = kapcstart;
    }

    kiaKapcstarto() {
        console.log(this.kapcstart);
    }

    beallitSzekhely(szekhely) {
        this.szekhely = szekhely;
    }

    miaSzekhely() {
        console.log(this.szekhely)
    }

    isAlanyiAdomentes() {
        let vatParts = this.adoszam.split("-");
        if (vatParts[1] === 1) {
            return true;
        }
        else {
            return false;
        }
    }
}

class Kapcstarto {
    constructor(nev, teloszam) {
        this.nev = nev;
        this.teloszam = teloszam;
    }
}

class Szekhely {
    constructor(varos, irszam) {
        this.varos = varos;
        this.irszam = irszam;
    }
}

let randomceg = new Ceg("3412412512", "12345678-1-02", "ezegyrandomceg");

let randomkapcstarto = new Kapcstarto("Random Béla", "+36123456789");

randomceg.beallitKapcstarto(randomkapcstarto);

randomceg.kiaKapcstarto();

randomceg.beallitSzekhely(new Szekhely("Veszprém", "8200"));

randomceg.miaSzekhely();

console.log(randomceg);

randomceg.isAlanyiAdomentes();





let objektumMethods = {
    title: "cim",
    first: function () { console.log("Ez egy method"); },
    valami: "valami"
}

console.log(objektumMethods.first());





let math = {
    min: function (a, b) { if (a > b) { return b } else { return a } },
    max: function (a, b) { if (a > b) { return a } else { return b } },
    average: function (tomb) {
        let sum = 0;
        if (!Array.isArray(tomb)) {
            return null
        };
        for (let i = 0; i < tomb.length; i++) {
            sum += tomb[i]
        };
        return sum / tomb.length;
    },
    isIntNumber: function (value) {
        let parsedvalue = parseInt(value);
        if (parsedvalue && !isNaN(parsedvalue)) {
            return true;
        }
        return false;
    }
}

console.log(math.min(5, 3));
console.log(math.max(7, 2));
console.log(math.average([1, 2, 3]));




// Object metódusok

let math2 = Object.assign({}, math);

console.log(math2);

let math3 = math2; // ebben az esetben math2 és math3 is ugyanarra az objektumra mutat



Object.entries(math); // visszaadja egy tömbben a kulcs - érték párokat



Object.keys(math); // visszaadja egy objektum kulcsait



Object.values(math); // visszaadja a property értékeket



console.log("Average property van-e: " + math.hasOwnProperty("average"));




// ha teszek egy #-et a property elé, akkor az private property lesz, és csak az objektumon belül lehet rá hivatkozni