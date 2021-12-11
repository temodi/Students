let myPhoneNumbers = [3630792765, 3630369549, 3620797249, 3670129465, 3630735165, 3630799685, 3630294765, 3630739572, 3630792388, 3630792947, 3630798965, 3630799284, 3630793325, 3630799685, 3630194265,];
let mynames = ['Bandobras Underhill', 'Robin Gardner', 'Isembold Whitfoot', 'Donnamira Galbassi', 'Bungo Baggins', 'Will Sandyman', 'Isengrim Proudfoot', 'Frodo Baggins', 'Amaranth Gaukrogers', 'Trahand Bunce', 'Will Sandyman', 'Halfred Goodchild', 'Bilbo Baggins', 'Will Sandyman', 'Belba Sandheaver'];

function createPhoneBook(names, phoneNumbers) {
    let telefonkonyv = [];
    for (let i = 0; i < phoneNumbers.length; i++) {
        telefonkonyv.push({ name: names[i], mobile: phoneNumbers[i] })
    }
    return telefonkonyv;
}

let telefonkonyv = createPhoneBook(mynames, myPhoneNumbers);



function add(telefonkonyv, nev, mobilszam) {
    let person = {
        name: nev,
        mobile: mobilszam
    };
    if (mobilszam === undefined) {
        return null
    }
    else {
        telefonkonyv.push(person);
    }
    return person;
}

add(telefonkonyv, "Oliver", 2151251251);

console.log(telefonkonyv);



function findByMobile(telefonkonyv, mobilszam) {
    for (let i = 0; i < telefonkonyv.length; i++) {
        if (telefonkonyv[i].mobile === mobilszam) {
            return telefonkonyv[i];
        }
    }
    return null;
}

console.log(findByMobile(telefonkonyv, 3630369549));



function remove(telefonkonyv, mobilszam) {
    let torolt = [];
    for (let i = 0; i < telefonkonyv.length; i++) {
        if (telefonkonyv[i].mobile === mobilszam) {
            torolt.push(telefonkonyv[i])
            telefonkonyv.splice(i, 1);
            return torolt;
        }
    }
    return null;
}

console.log(remove(telefonkonyv, 3670129465));



function findIndex(telefonkonyv, mobilszam) {
    for (let i = 0; i < telefonkonyv.length; i++) {
        if (telefonkonyv[i].mobile === mobilszam) {
            return i;
        }
    }
    return -1;
}

console.log(findIndex(telefonkonyv, 3630799685));



/*function find(telefonkonyv, input) {
    if (typeof input === "string"){
        return findByMobile(telefonkonyv, mobilszam);
    }
    else {
        return findByMobile(telefonkonyv, mobilszam); // ide egy find by name-es függvény kéne, csak ilyet nem csináltam
    }
}*/



add(telefonkonyv, "Oliver", 21512102103);
add(telefonkonyv, "Oliver", 21530131030);
add(telefonkonyv, "Oliver", 21513253253);

console.log(telefonkonyv);

function filterByName (telefonkonyv, nev){
    let oliverek = [];
    for (let i = 0; i < telefonkonyv.length; i++){
        if (nev === telefonkonyv[i].name){
            oliverek.push(telefonkonyv[i]);
        }
    }
    return oliverek
}

console.log(filterByName(telefonkonyv, "Oliver"));



// filterByName callbackel

function filterBy(telefonkonyv, predicate){
    let oliverek = [];
    for (let i = 0; i < telefonkonyv.length; i++){
        if (predicate(telefonkonyv[i])){
            oliverek.push(telefonkonyv[i]);
        }
    }
    return oliverek
}

filterBy(telefonkonyv, function (name) {name === "Oliver"});

filterBy(telefonkonyv, function (oliverek) {oliverek.name === "Oliver"});
filterBy(telefonkonyv, function (oliverek) {oliverek.mobile === 21513253253});



function findBy (telefonkonyv, predicate){
    let bejegyzes;
    for (let i = 0; i < telefonkonyv.length; i++) {
        if (predicate(telefonkonyv[i])) {
            return telefonkonyv[i];
        }
    }
    return null;
}

console.log(findBy(telefonkonyv, function (bejegyzes){ return bejegyzes.name === "Oliver"} || function (bejegyzes) {return bejegyzes.mobile === "21513253253"}));



function addField(telefonkonyv, mobile, field, value){
    for (let i = 0; i < telefonkonyv.length; i++) {
        if (telefonkonyv[i].mobile === mobile) {
            telefonkonyv[i][field] = value;
            return telefonkonyv[i];
        }
    }
    return null;
}

console.log(addField(telefonkonyv, 3630369549, "email", "valami@valamimas.com"));



// Olivér megoldása

function modify(telefonkonyv, mobile, field, value){
    if (field === "mobile"){
        return null
    }
    let entry = findByMobile(telefonkonyv, mobile);
    if(entry !== null && entry[field] !== undefined){
        entry[field] = value;
        return entry;
    }
}

console.log(modify(telefonkonyv, 3630369549, "name", "Lali"))



function formatPhoneNumber(phonenumber){
    phonenumber = String(phonenumber);
    let item1 = phonenumber.slice(0, 2);
    let item2 = phonenumber.slice(2, 4);
    let item3 = phonenumber.slice(4, 7);
    let item4 = phonenumber.slice(7, 11);
    let result = "+" + item1 + " " + item2 + " " + item3 + " " + item4;
    return result;
}

console.log(formatPhoneNumber(36303695492));

// VAGY

function formatPhoneNumber(phonenumber){
    phonenumber = String(phonenumber);
    return "+" + phonenumber.slice(0, 2) + " " + phonenumber.slice(2, 4) + " " + phonenumber.slice(4, 7) + " " + phonenumber.slice(7);
}

console.log(formatPhoneNumber(36303695492));



function findBaggins(telefonkonyv){
    let hobbitkak = [];
    for (let i = 0; i < telefonkonyv.length; i++){
        if (telefonkonyv[i].name.includes("Baggins")){
            hobbitkak.push(telefonkonyv[i]);
            return hobbitkak;
        }
    }
}

console.log(findBaggins(telefonkonyv));