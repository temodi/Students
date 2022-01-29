class Address {
    constructor(Country, Town, PostCode, Street, houseNumber, floor, doorNumber) {
        this.Country = Country;
        this.Town = Town;
        this.PostCode = PostCode;
        this.Street = Street;
        this.houseNumber = houseNumber;
        this.floor = floor;
        this.doorNumber = doorNumber;
    }

    fullAddress() {
        return toString(`${this.Country}, ${this.Town}, ${this.PostCode}, ${this.Street}, ${this.houseNumber}, ${this.floor}, ${this.doorNumber}`);
    }

    setPostCode(PostCode) {
        this.PostCode = PostCode
    }

    showPostCode() {
        return this.PostCode
    }

}

let address1 = new Address("England", "St Helens", "WA129PA", "Broad Oak Road", 12, 0, 0)
let address2 = new Address("England", "Warrington", "WA50LY", "Ellen St.", 12, 0, 0)



//DirrDurr


class AltalanosLoFegyver {
    constructor(Bullet, Damage, MagCap, currentMagCap) {
        this.bullet = Bullet;
        this.damage = Damage;
        this.MagCap = MagCap;
        this.currentMagCap = currentMagCap;
    }
    shot() {
        if (this.currentMagCap > 0) {
            this.currentMagCap = this.currentMagCap - 1
            console.log("A bullet has been fired")
            console.log(this.currentMagCap)
        } else {
            console.log("Empty Mag.")
        }

    }

    magReplace() {
        if (this.MagCap > this.currentMagCap) {
            this.currentMagCap = this.MagCap
            console.log(this.currentMagCap)
            console.log("Magazine has been replaced")
        } else {
            console.log("Magazine is already full")
        }
    }
}

let fireArm = new AltalanosLoFegyver("9mmNATO", "B124G", 19, 16)

fireArm.shot()
fireArm.shot()
fireArm.magReplace()


//Cegadatok
let kapcsolattarto1 = "Kovacs Pista"
let kapcsolattarto1Szekhelye = {
    Varos: "Pécs",
    Utca: "Légszeszgyár utca",
    Hazszam: 8
}

class Person {
    constructor(fullName, phoneNumber) {
        this.fullName = fullName;
        this.phoneNumber = phoneNumber
    }
}

class AddressC {
    constructor(varos, street) {
        this.varos = varos;
        this.street = street;
    }
}


class Ceg {
    constructor(cegnev, cegjegyzekszam, adoszam, kapcsolattarto, kapcsolattartoSzekhelye) {
        this.cegnev = cegnev;
        this.cegjegyzekszam = cegjegyzekszam;
        this.adoszam = adoszam;
        this.kapcsolattarto = kapcsolattarto;
        this.kapcsolattartoSzekhelye = kapcsolattartoSzekhelye
    }

    setContactPerson(personPerson) {
        this.contactPerson = personPerson;
    }
}

let ceg1 = new Ceg('YoYo', 1413452345, 62345234523453, kapcsolattarto1, kapcsolattarto1Szekhelye)

console.log(ceg1)