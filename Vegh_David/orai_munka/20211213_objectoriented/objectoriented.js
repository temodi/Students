// Osztály létrahozása / deklaráció
// üres osztály
class OsztalyNeve {

}

// Osztaly letrehozasa konstruktorral
class Szemely {
    // alapallapotba hozza az objektumot peldanyositaskor
    constructor (vezetekNev, keresztNev, szulDatum, neme){
        // adattag vagy property (publikus)
        this.vezetekNev = vezetekNev;
        this.keresztNev = keresztNev;
        this.szulDatum = szulDatum;
        this.neme = neme;
    }

    // publikus metodusok
    teljesNev(){
        return this.vezetekNev + " " + this.keresztNev;
    }

    beallitVezNev (vezeteknev){
        this.vezetekNev = vezeteknev;
    }
}

// Osztaly peldanyositasa

let Tanulo1 = new Szemely("Kiss", "Jolan", "2000.09.12", "no");
let Tanulo2 = new Szemely("Nagy", "Mate", "2000.10.21", "ferfi");

console.log(Tanulo1);
console.log(Tanulo2);

console.log(Tanulo1.teljesNev());

// lekerdezem hogy a tanulo1 szarmazik-e az osztalybol
console.log(Tanulo1 instanceof Szemely);


class Point {
    constructor(xCord, yCord){
        this.x = xCord;
        this.y = yCord;
    }
    setColor (rgb){
        this.color = rgb;
    }
}

let pont = new Point(1, 1);

pont.setColor("#FFFFFF")

console.log(pont);
