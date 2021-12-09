let phoneNumbers = [
    3630792765, 3630369549, 3620797249, 3670129465, 3630735165, 3630799685,
    3630294765, 3630739572, 3630792388, 3630792947, 3630798965, 3630799284,
    3630793325, 3630799685, 3630194265,
];
let names = [
    "Bandobras Underhill",
    "Robin Gardner",
    "Isembold Whitfoot",
    "Donnamira Galbassi",
    "Bungo Baggins",
    "Will Sandyman",
    "Isengrim Proudfoot",
    "Frodo Baggins",
    "Amaranth Gaukrogers",
    "Trahand Bunce",
    "Will Sandyman",
    "Halfred Goodchild",
    "Bilbo Baggins",
    "Will Sandyman",
    "Belba Sandheaver",
];

// Emailek, amikkel nem kell semmit csinalni egyelore
let emails = [
    "paulnoel21@agung002.com",
    "weegrah1@eeothno.com",
    "johnjohn69@hungta2.com",
    "johnjohn69@hungta2.com",
    "yuzhakova1960@hungta2.com",
    "yuzhakova1960@hungta2.com",
    "lemonkakiska@cggup.com",
    "lemonkakiska@cggup.com",
    "bd8axwy@cuendita.com",
    "bd8axwy@cuendita.com",
    "gasg@supok.site",
    "gasg@supok.site",
    "zaqman@pianoxltd.com",
    "zaqman@pianoxltd.com",
];

function createPhoneBook(names, phoneNumbers) {
    let tomb = [];

    for (let i = 0; i < names.length; i++) {
        tomb.push({
            name: names[i],
            mobile: phoneNumbers[i],
        });
    }
    return tomb;
}
let phoneBook = createPhoneBook(names, phoneNumbers);
// console.log(phoneBook);


// phoneBook másolása új memóriaterületre
let newPhoneBook = Array.from(phoneBook);
console.log(newPhoneBook);


/**
 * Irj fuggvenyt ami kap egy nevet es egy telefonszamot parameterkent
 * es hozzadja a telefonkonyvhoz az uj bejegyzest { name: string, mobile: number }
 * A telefonkonyv amibe kell rakni a bejegyzest legyen a fuggveny elso parametere, aztan a nev, aztan a telefonszam
 *
 * Visszateresti ertek legyen az ujonnan letrehozott bejegyzes, ha nem adunk meg telefonszámot, akkor dobjon hibát
 */

// function add(phoneBook, name, mobile) {
//     if (mobile === undefined) {
//         return null;
//     } else {
//         phoneBook.push({
//             name: name,
//             mobile: mobile,
//         });
//         return phoneBook;
//     }
// }

// add(newPhoneBook, "Sanyika", 36702654850);
// add(newPhoneBook, "Pistike", 36305468752);
// console.log(newPhoneBook);


/**
 * Irj fuggvenyt ami megkeresi a telefonszamhoz tartozo bejegyzest a telefonkonyben.
 * A fuggveny elso parametere a telefonkonyv amiben keresni kell a masodik a telefonszam amit keresni kell.
 *
 * Ha van talalat a visszateresi ertek legyen a bejegyzes
 * Ha nincs talalat a visszateres legyen null
 */

function findByMobile(phoneBook, mobile) {
    for (let i = 0; i < phoneBook.length; i++) {
        if (mobile === phoneBook[i].mobile) {
            return phoneBook[i];
        }
    }
    return null;
}
// console.log(findByMobile(newPhoneBook, 3620797249));


// function findByName(phoneBook, name) {
//     for (let i = 0; i < phoneBook.length; i++) {
//         if (name === phoneBook[i].name) {
//             return phoneBook[i];
//         }
//     }
//     return null;
// }
// console.log(findByName(newPhoneBook, "Bilbo Baggins"));


// function findAll(phoneBook, value) {   
//         if (typeof value === "number") {
//             return findByMobile(phoneBook, value);
//         }
//         return findByName(phoneBook, value);
// }
// console.log(findAll(newPhoneBook, 3630194265));


// function findBy(phoneBook, predicate) {
//     for (let i = 0; i < phoneBook.length; i++) {
//         if (predicate(phoneBook[i])) {
//             return phoneBook[i];
//         }
//     }
//     return null;
// }
// console.log(findBy(newPhoneBook, function(bejegyzes) { return bejegyzes.name === "Frodo Baggins"}));
// console.log(findBy(newPhoneBook, function(bejegyzes) { return bejegyzes.mobile === 3630739572}));


/**
 * Irj fuggvenyt ami megkeresi a telefonszamhoz tartozo bejegyzest a telefonkonyben.
 * A fuggveny elso parametere a telefonkonyv amiben keresni kell a masodik a telefonszam amit keresni kell.
 *
 * Ha van talalat a visszateresi ertek legyen a bejegyzes indexxe
 * Ha nincs talalat a visszateres legyen null
 */

// function indexByMobile(phoneBook, mobile) {
//     for (let i = 0; i < phoneBook.length; i++) {
//         if (mobile === phoneBook[i].mobile) {
//             return i;
//         }
//     }
//     return -1;
// }
// console.log(indexByMobile(newPhoneBook, 3630792765));


/**
 * Irj fuggvenyt ami kap egy telefonszamot es kitorli a hozza tartozo bejegyzest
 * A fuggveny elso parametere a telefonkonyv amibol torolni kell a masodik a telefonszam amit keresni kell.
 *
 * Segitseg: indexByMobile, splice
 *
 * A visszateresi ertek legyen a kitorolt bejegyzes,
 * ha a bejegyzes nem letezett, a visszateresi ertek legyen null
 */

// function remove(phoneBook, mobile) {
//     for (let i = 0; i < phoneBook.length; i++) {
//         if (mobile === phoneBook[i].mobile) {
//             return phoneBook.splice(indexByMobile(phoneBook, mobile), 1);
//         }
//     }
//     return null;
// }
// console.log(remove(newPhoneBook, 3630798965));

// function removeAlter(phoneBook, mobile) {
//     let index = indexByMobile(phoneBook, mobile);
//     if (index > -1) {
//         let removedEntry = phoneBook[index];
//         phoneBook.splice(index, 1);
//         return removedEntry;
//     }
//     return null;
// }
// console.log(removeAlter(newPhoneBook, 3630799685));


/**
 * Irj fuggvenyt ami megkeresi az osszes bejegyzest a telefonkonyvben az atadott nevhez.
 * A fuggveny elso parametere a telefonkonyv amiben keresni kell a masodik a nev amit keresni kell.
 *
 * Ha van talalat a visszateresi ertek legyen a bejegyzesek tombje
 * Ha nincs talalat a visszateres legyen ures tomb
 */
// function filterByName(phoneBook, name) {
//     let talaltErtekek = [];
//     for (let i = 0; i < phoneBook.length; i++) {
//         if (phoneBook[i].name.includes(name)) {
//             talaltErtekek.push(phoneBook[i]);
//         }
//     }
//     return talaltErtekek;
// }

// console.log(filterByName(newPhoneBook, "Baggins"));

// function filterByNameCallback(phoneBook, predicate) {
//     let talaltErtekek = [];

//     for (let i = 0; i < phoneBook.length; i++) {
//         if (predicate(phoneBook[i].name)) {
//             talaltErtekek.push(phoneBook[i]);
//         }
//     }
//     return talaltErtekek;
// }
// console.log(filterByNameCallback(newPhoneBook, function (name) { return name === 'Frodo Baggins'}));


// function filterBy(phoneBook, predicate) {
//     let talaltErtekek = [];

//     for (let i = 0; i < phoneBook.length; i++) {
//         if (predicate(phoneBook[i])) {
//             talaltErtekek.push(phoneBook[i]);
//         }
//     }
//     return talaltErtekek;
// }
// console.log(filterBy(newPhoneBook, function (bejegyzes) { return bejegyzes.name === 'Frodo Baggins'}));

/**
 * Irj fuggvenyt ami hozzaad egy uj mezot egy letezo bejegyzeshez
 * Bemeneti erteknek kapjon egy telefonkonyvet, egy telefonszamot, az uj mezo nevet, es az uj mezo erteket
 * Ne csinaljon semmt, ha a bejegyzes nem letezik, vagy ha mar van ilyen mezo a bejegyzesen
 *
 * Pl: egy email cimet szeretnenk hozzaadni egy bejegyzeshez
 * addField(phoneBook, 3630123456, 'email', 'email@example.com')
 *
 * Ha sikerult hozzaadni terjen vissza a bejegyzessel
 * Ha nem sikerult terjen vissza null-lal.
 */

// function addField(phoneBook, mobile, field, value) {
//     for (let i = 0; i < phoneBook.length; i++) {
//         if (phoneBook[i].mobile === mobile) {
//             phoneBook[i][field] = value;
//         }
//         return phoneBook[i];
//     }
// }
// console.log(addField(newPhoneBook, 3630792765, "email", "email@example.com"));

function addFieldAlter(phoneBook, mobile, field, value) {
    let entry = findByMobile(phoneBook, mobile);
    if (entry !== null) {
        entry[field] = value;
        return entry;
    }
    return null;
}
console.log(addFieldAlter(newPhoneBook, 3630369549, 'email', 'email@anotherexample.com'));

/**
 * Irj fuggvenyt ami modosit egy letezo mezot egy letezo bejegyzesen
 * Bemeneti erteknek kapjon egy telefonkonyvet, egy telefonszamot, a mezo nevet, es a mezo erteket
 * Ne csinaljon semmt,
 *  - ha a bejegyzes nem letezik,
 *  - ha telefonszamot szeretnenk modositani,
 *  - ha nincs ilyen mezo a bejegyzesen
 *
 * Pl: egy email cimet szeretnenk modositeni egy bejegyzeshez
 * modify(3630123456, 'name', 'Mekk Elek')
 *
 * Ha sikerult hozzaadni terjen vissza a bejegyzessel
 * Ha nem sikerult terjen vissza null-lal.
 */
function modify(phoneBook, mobile, field, value) {
    let entry = findByMobile(phoneBook, mobile);
    if (field === 'mobile') {
        return null;
    }
    if (entry !== null && entry[field] !== undefined) {
        entry[field] = value;
        return entry;
    }
    return null;
}
console.log(modify(newPhoneBook, 3630369549, 'email', 'modify@modify.com'));
console.log(modify(newPhoneBook, 3630294765, 'email', 'modify@modify.com'));

// Irj fuggvenyt ami megformaz egy telefonszamot
// "+36 30 1234 567" formatumban es a formazott telefonszammal ter vissza
// Segitseg:
//  - a string indexelheto, mint egy tomb
//  - a slice(start, end) metodus segithet
function formatPhoneNumber(mobile) {
    let numberToString = mobile.toString();
    // let numberToString = String(mobile);
    
    return '+' + numberToString.slice(0, 2) + ' ' + numberToString.slice(2, 4) + ' ' + numberToString.slice(4, 8) + ' ' + numberToString.slice(8);
}
console.log(formatPhoneNumber(36303695491));

/**
 * FELADAT:
 * Irj programot ami kiirja az ossze Baggins csaladnevu hobbitot es telefonszamanak formazott alakjat a konzolra.
 */

/**
 * FELADAT:
 * Irj programot ami az ugyan olyan telefonszammal rendelkezok kozul csak egyet hagy meg
 * Nehez!
 */
// let duplicates_test = [
//     { name: "Mr. 1", mobile: 36301234567 },
//     { name: "Mr. 2", mobile: 36301234567 },
//     { name: "Mr. 3", mobile: 36301234567 },
//     { name: "Ms. 1", mobile: 36301234568 },
//     { name: "Ms. 2", mobile: 36301234568 },
//     { name: "Ms. 3", mobile: 36301234568 },
//     { name: "Mrs. 1", mobile: 36301234569 },
// ];

/**
 * FELADAT:
 * Irj programot ami kiszuri az ugyan olyan nevu es telefonszamu embereket
 */
function find(phoneBook, value) {
    // Generic find string => name, number => mobile
}

// Irj fugvenyt ami megkeresi a duplikalt embert. (telefonszam es nev is megegyezik)
