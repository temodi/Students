// // Telefonkonyv feltoltese adatbazisbol

let myPhoneNumbers = [3630792765, 3630369549, 3620797249, 3670129465, 3630735165, 3630799685, 3630294765, 3630739572, 3630792388, 3630792947, 3630798965, 3630799284, 3630793325, 3630799685, 3630194265, 3630321654, 4554987789];
let myNames = ['Bandobras Underhill', 'Robin Gardner', 'Isembold Whitfoot', 'Donnamira Galbassi', 'Bungo Baggins', 'Will Sandyman', 'Isengrim Proudfoot', 'Frodo Baggins', 'Amaranth Gaukrogers', 'Trahand Bunce', 'Will Sandyman', 'Halfred Goodchild', 'Bilbo Baggins', 'Will Sandyman', 'Belba Sandheaver', 'Trahand Bunce', 'Trahand Bunce'];

// Emailek, amikkel nem kell semmit csinalni egyelore
let emails = ['paulnoel21@agung002.com', 'weegrah1@eeothno.com', 'johnjohn69@hungta2.com', 'johnjohn69@hungta2.com', 'yuzhakova1960@hungta2.com', 'yuzhakova1960@hungta2.com', 'lemonkakiska@cggup.com', 'lemonkakiska@cggup.com', 'bd8axwy@cuendita.com', 'bd8axwy@cuendita.com', 'gasg@supok.site', 'gasg@supok.site', 'zaqman@pianoxltd.com', 'zaqman@pianoxltd.com'];





function createPhoneBook(names, phoneNumbers) {
    let phoneBook = []
    for (let i = 0; i < names.length; i++) {
        let person = {
            name: names[i],
            mobile: phoneNumbers[i]
        };
        phoneBook.push(person);
    }
    return phoneBook;
}

let phoneBook = createPhoneBook(myNames, myPhoneNumbers)

// console.log(phoneBook);



// hoozaad egy szemelyt a kivalasztott telefonkonyvhoz


let myPhoneBook = createPhoneBook(myNames, myPhoneNumbers);


function add(myNewPhoneBook, newName, newPhoneNumber) {
    let newPerson = {
        name: newName,
        mobile: newPhoneNumber
    }
    myNewPhoneBook.push(newPerson)
    console.log(myPhoneBook)
    return newPerson;
}
// add(myPhoneBook, "Oliver", 36304567894)


// myNewPhoneBook.push({name:newName,mobile:NewPhoneNumber})

function findByMobile(myPhoneBook1, szam) {
    let found;
    for (let i = 0; i < myPhoneBook1.length; i++) {
        if (myPhoneBook1[i].mobile === szam) {
            found = myPhoneBook1[i]
            return found;
        } 
    }
    return null
}


// console.log(findByMobile(myPhoneBook, 3630369549));



function findByMobile(myPhoneBook1, szam) {
    for (let i = 0; i < myPhoneBook1.length; i++) {
        if (myPhoneBook1[i].mobile === szam) {
            return myPhoneBook1[i]
        }
    }
    return null
}


// console.log(findByMobile(myPhoneBook, 3630369549));



// ARRAY FIND

function findByMobileArrayFind(myPhoneBook2, mobile) {
    return phoneBook.find(function (bejegyzes) {
        return bejegyzes.mobile === mobile
    })
}

//console.log(findByMobileArrow(myPhoneBook, 3630369549))


// // ARRAY FIND WITH ARROW FUNCTION

 function findByMobileArrow(phoneBook, mobile) {
    return phoneBook.find(bejegyzes => bejegyzes.mobile === mobile);
}

//  console.log(findByMobileArrow(myPhoneBook, 3630369549))



/**
* Irj fuggvenyt ami megkeresi a telefonszamhoz tartozo bejegyzest a telefonkonyben.
* A fuggveny elso parametere a telefonkonyv amiben keresni kell a masodik a telefonszam amit keresni kell.
*
* Ha van talalat a visszateresi ertek legyen a bejegyzes indexxe
* Ha nincs talalat a visszateres legyen null
*/

function indexByMobile(phoneBook, szam) {
    for (let i = 0; i < phoneBook.length; i++) {
        if (phoneBook[i].mobile === szam) {
            return i
        }
    }
    return null
}
// console.log(indexByMobile(myPhoneBook, 3630369549));


// find with "findIndex"

function findByMobileWithFindIndex(phoneBook, mobile) {
    return phoneBook.findIndex(function (bejegyzes) {
        return bejegyzes.mobile === mobile
    });
}




// uaz, csak nevre


function findByName(phoneBook, nev) {
    for (let i = 0; i < phoneBook.length; i++) {
        if (phoneBook[i].name === nev) {
            return i
        }
    }
    return null
}
// console.log(nameByName(myPhoneBook, 'Isembold Whitfoot'));

// Find by name, callback

function searchCallback(phoneBook, action) {

    for (let i = 0; i < phoneBook.length; i++) {
        if (action(phoneBook[i])) {
            return phoneBook[i];
        }
    }
}
// console.log(searchCallback(myPhoneBook, function (name) {return name === 'Trahand Bunce'}))

//GENERIC FIND funkcio

function find(phoneBook, value) {
    if (typeof value === 'string') {
        return findByName(phoneBook, value)
    }
    return findByMobile(phoneBook, value)
}

// console.log(find(myPhoneBook), 3620797249)

/**
 * Irj fuggvenyt ami megkeresi az osszes bejegyzest a telefonkonyvben az atadott nevhez.
 * A fuggveny elso parametere a telefonkonyv amiben keresni kell a masodik a nev amit keresni kell.
 *
 * Ha van talalat a visszateresi ertek legyen a bejegyzesek tombje
 * Ha nincs talalat a visszateres legyen ures tomb
 */


function filterByName(phoneBook, name) {
    let foundHim = [];
    for (let i = 0; i < phoneBook.length; i++) {
        if (phoneBook[i].name === name) {
            foundHim.push(phoneBook[i]);
        }
    }
    return foundHim;
}



// UAZ CALLBACK

function filterByNameCallback(phoneBook, predicate) {
    let foundHim = [];

    for (let i = 0; i < phoneBook.length; i++) {
        if (predicate(phoneBook[i].name)) {
            foundHim.push(phoneBook[i]);
        }
    }
    return foundHim;
}



// console.log(filterByNameCallback(myPhoneBook, function (name) {name === 'Trahand Bunce'}))


// function filterBy(myPhoneBook, function (person) { return person.name === "Trahand Bunce"}),
// function filterBy(myPhoneBook, function (person) { return person.mobile === "Trahand Bunce"})






/**
 * Irj fuggvenyt ami kap egy telefonszamot es kitorli a hozza tartozo bejegyzest
 * A fuggveny elso parametere a telefonkonyv amibol torolni kell a masodik a telefonszam amit keresni kell.
 *
 * Segitseg: indexByMobile, splice
 *
 * A visszateresi ertek legyen a kitorolt bejegyzes,
 * ha a bejegyzes nem letezett, a visszateresi ertek legyen null
 */
function remove(phoneBook, mobil) {
    for (let i = 0; i < phoneBook.length; i++) {
        if (phoneBook[i].mobile === mobil) {
            return phoneBook.splice(i, 1)
        }
    } return null;
}
// console.log(remove(myPhoneBook, 3620797249), myPhoneBook);




function remove2(phoneBook, mobile) {
    let index = indexByMobile(phoneBook, mobile)
    if (index > -1) {
        return phoneBook.splice(index, 1);
    }
    return null
}
// console.log(remove2(myPhoneBook, '3620797249'), myPhoneBook);

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
function addField(phoneBook, mobile, field, value) {
    for (let i = 0; i > phoneBook.length; i++) {
        if (phoneBook[i].mobile === mobile) {
            phoneBook[i][field] = value;
            return phoneBook[i]
        }
    }
    return null;
}

function addField2(phoneBook, mobile, field, value) {
    let entry = findByMobile(phoneBook, mobile);
    if (entry !== null) {
        entry[field] = value;
        return entry;
    }
    return null;
}



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
    if (field === "mobile") {
        return null;
    }
    let entry = findByMobile(phoneBook, mobile);
    if (entry === null && entry[field] !== undefined) {
        entry[field] = value;
        return entry;
    }
}

// console.log(modify(myPhoneBook, 3620797249, 'name', 'Mekk Elek'))



// Irj fuggvenyt ami megformaz egy telefonszamot
// "+36 30 1234 567" formatumban es a formazott telefonszammal ter vissza
// Segitseg:
//  - a string indexelheto, mint egy tomb
//  - a slice(start, end) metodus segithet
function formatPhoneNumber(mobile) {
        mobile = String(mobile);
        let formated = "";
        formated = "+" + mobile.slice(0, 2) + " " + mobile.slice(2, 4) + " " + mobile.slice(4, 8) + " " + mobile.slice(8)
        return formated;
}

// console.log(formatPhoneNumber(+36987456123))
/**
 * FELADAT:
 * Irj programot ami kiirja az ossze Baggins csaladnevu hobbitot es telefonszamanak formazott alakjat a konzolra.
 */

function findBaggins(phoneBook) {
    let found = [];
    for (let i = 0; i < phoneBook.length; i++) {
        if (phoneBook[i].name.includes('Baggins')) {
            found.push(phoneBook[i]);
        }
    }
    for (let j = 0; j < found.length; j++) {
        mobile = String(found[j].mobile);
        let formated = "";
        formated = "+" + mobile.slice(0, 2) + " " + mobile.slice(2, 4) + " " + mobile.slice(4, 8) + " " + mobile.slice(8)
        found[j].mobile = formated;
    }
     return found;
}

// console.log(findBaggins(myPhoneBook))







/**
 * FELADAT:
 * Irj programot ami az ugyan olyan telefonszammal rendelkezok kozul csak egyet hagy meg
 * Nehez!
 */
let duplicates_test = [
    { name: 'Mr. 2', mobile: 36301234567 },
    { name: 'Ms. 2', mobile: 36301234568 },
    { name: 'Mr. 3', mobile: 36301234567 },
    { name: 'Ms. 1', mobile: 36301234568 },
    { name: 'Ms. 2', mobile: 36301234568 },
    { name: 'Ms. 3', mobile: 36301234568 },
    { name: 'Mrs. 1', mobile: 36301234569 },
    { name: 'Mr. 1', mobile: 36301234567 },
    { name: 'Mr. 3', mobile: 36301234567 },
    { name: 'Ms. 1', mobile: 36301234568 },
    { name: 'Ms. 3', mobile: 36301234568 },
    { name: 'Mr. 2', mobile: 36301234567 },
    { name: 'Mrs. 1', mobile: 36301234569 },
    { name: 'Mr. 1', mobile: 36301234567 },
    { name: 'Mr. 2', mobile: 36301234567 },
    { name: 'Ms. 2', mobile: 36301234568 },
    { name: 'Mr. 3', mobile: 36301234567 },
    { name: 'Ms. 1', mobile: 36301234568 },
    { name: 'Ms. 2', mobile: 36301234568 },
    { name: 'Ms. 3', mobile: 36301234568 },
    { name: 'Mrs. 1', mobile: 36301234569 },
    { name: 'Mr. 1', mobile: 36301234567 },
    { name: 'Mr. 3', mobile: 36301234567 },
    { name: 'Ms. 1', mobile: 36301234568 },
    { name: 'Ms. 3', mobile: 36301234568 },
    { name: 'Mr. 2', mobile: 36301234567 },
    { name: 'Mrs. 1', mobile: 36301234569 },
    { name: 'Mr. 1', mobile: 36301234567 }
];


function sortedDuplicateRemover(phoneBook) {
    let currentCheck = phoneBook[0];
    for (let i = 1; i < phoneBook.length; i++) {
        if (currentCheck.mobile === phoneBook[i].mobile) {
            phoneBook.splice(i, 1);
            i--;
        } else {
            currentCheck = phoneBook[i];
        }
    }
    return phoneBook;
}

// console.log(sortedDuplicateRemover(duplicates_test))

function dupli2(phonebook) {
    for (let i = 0; i < phonebook.length; i++) {
        for ( let j = i+ 1; j < phonebook.length; j++) {
            if (phonebook[i].mobile === phonebook[j].mobile) {
                phonebook.splice(j, 1);
                j--;
            }
        }
        
    }
    return phonebook;
}

// console.log(dupli2(duplicates_test));
