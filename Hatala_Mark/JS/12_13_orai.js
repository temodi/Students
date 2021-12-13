
// Osztaly létrehozása konstruktorral
class Szemely {
    constructor(vezetekNev, keresztNev, szulDatum, neme) {
        this.vezetekNev = vezetekNev;
        this.keresztNev = keresztNev;
        this.szulDatum = szulDatum;
        this.neme = neme;
    }
}
//Osztaly példányosítása
let tanulo1 = new Szemely("Kiss", "Jolan", "2000.01.01", "no");
let tanulo2 = new Szemely("Nagy", "Mate", "2002.02.02", "ferfi");

console.log(tanulo1);
console.log(tanulo2);
console.log(Szemely);


class Point {
    constructor(xCord, yCord) {
        this.x = xCord;
        this.y = yCord;
    }
    setColor(rgb) {
        this.color = rgb;
    }
}

let pont = new Point(1, 1);
pont.setColor('#FFFFFF');


class Adress {
    constructor(orszag, varos, iranyitoszam, utca, hazsszam, ajto) {
        this.orszag = orszag;
        this.varos = varos;
        this.iranyitoszam = iranyitoszam;
        this.utca = utca;
        this.hazsszam = hazsszam;
        this.ajto = ajto;
    }
    toString() {
        wholeAdress = this.varos + ' ' + this.iranyitoszam + ' ' + this.utca + ' ' + this.hazsszam + ' ' + this.ajto;
        console.log(wholeAdress);
    }
    zip() {
        return this.iranyitoszam;
    }
    newZip(zipCode) {
        this.iranyitoszam = zipCode;
    }
}
let cim1 = new Adress("Magyarország", "Budapest", 1111, "Ó utca", 5, "b");
let cim2 = new Adress("Magyarország", "Veszprém", 7020, "Kiss utca", 2, "a");

class Ammo {
    constructor(a, b, c) {
        this.toltenytipus = a;
        this.sebzes = b;
        this.maxTar = c;
        this.aktualisTar = c;
    }
    shoot() {
        if (this.aktualisTar > 0) {
            this.aktualisTar--;
            console.log('Bang-Bang!')
        } else { console.log('Nincs töltény!') }
    }
    reload() {
        if (this.maxTar > this.aktualisTar) {
            this.aktualisTar = this.maxTar;
        } else {
            console.log('Tele a tárad!')
        }
    }
}

let bang = new Ammo("9mm", 10, 5);
let bang2 = new Ammo("6mm", 50, 7);

/* console.log(bang.shoot());
console.log(bang.shoot());
console.log(bang.shoot());
console.log(bang.shoot());
console.log(bang.shoot());
console.log(bang.shoot());
console.log(bang.reload());
console.log(bang.shoot());
console.log(bang.shoot()); */



class Person {
    constructor(fullName, phoneNumber) {
        this.fullName = fullName;
        this.phoneNumber = phoneNumber;
    }
}

class Adress2 {
    constructor(city, street, houseNumber) {
        this.city = city;
        this.street = street;
        this.houseNumber = houseNumber;
    }
}

class Ceg {
    constructor(cszam, ado, ceg) {
        this.cegjegyzekszam = cszam;
        this.adoszam = ado;
        this.cegnev = ceg;
    }
setContactPerson(personObject) {
    this.contactPerson = personObject;
}

setAdress(adressObject) {
    this.adress = adressObject;
}
}

let company1 = new Ceg('1234567', '123456 - 2 - 40', 'Kiskacsa Bt.');
let contactPerson = new Person('Kiss Jolan', '06301234567');
company1.setContactPerson(contactPerson);
console.log(company1);