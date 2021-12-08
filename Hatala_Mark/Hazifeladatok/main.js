// 1. megoldás

/*
let termek = 25000;
let kedvezmenyesAr = 0;

let xmas10 = {
    type: 'percent',
    value: 0.1,
}

let santa1000 = {
    type: 'fix',
    value: 1000,
}

let kuponkod = window.prompt('Ide írja a kuponkódot').toLowerCase();

switch (kuponkod) {
    case 'xmas10':
        kuponkod = xmas10;
        kedvezmenyesAr = termek - (termek * xmas10.value);
        console.log('A termék eredeti ára: ' + termek + 'Ft' + ' A termék ára kedvezménnyel: ' + kedvezmenyesAr + 'Ft');
        break;
    case 'santa1000':
        kuponkod = santa1000;
        kedvezmenyesAr = termek - santa1000.value;
        console.log('A termék eredeti ára: ' + termek + 'Ft' + ' A termék ára kedvezménnyel: ' + kedvezmenyesAr + 'Ft');
        break;
    default:
        console.log('Ilyen kuponkód nem létezik')
        break;
}
*/


// 2. megoldás
/* 
let termek = 25000;

discounts = [
    {
        name: 'xmas10',
        type: 'percent',
        value: 0.1,
    },
    {
        name: 'santa1000',
        type: 'fix',
        value: 1000,
    }
];

let kuponkod = window.prompt('Ide írja a kuponkódot').toLowerCase();

getDiscount = (discounts) => discounts.name;
discountName = discounts.map(getDiscount);

getValue = (discounts) => discounts.value;
discountValue = discounts.map(getValue);

//console.log(discountName);
//console.log(discountValue);

function kedvezmeny(kuponkod) {
    if (kuponkod == discountName[i]) {
        console.log('helyes');
    }
} */

//3. megoldás
/*
let termek = 25000;

let xmas10 = {
    type: 'percent',
    value: 0.1,
}

let santa1000 = {
    type: 'fix',
    value: 1000,
}


let kuponkod = window.prompt('Ide írja a kuponkódot').toLowerCase();

function discount(termek, kuponkod){
    if (kuponkod == 'xmas10') {
        let kedvezmenyesAr = termek - (termek * xmas10.value);
        console.log('A termék eredeti ára: ' + termek + 'Ft' + ' A termék ára kedvezménnyel: ' + kedvezmenyesAr + 'Ft');
        return kedvezmenyesAr;
    } else if (kuponkod == 'santa1000') {
        let kedvezmenyesAr2 = termek - santa1000.value;
        console.log('A termék eredeti ára: ' + termek + 'Ft' + ' A termék ára kedvezménnyel: ' + kedvezmenyesAr2 + 'Ft');
        return kedvezmenyesAr2;
    } else {
        console.log('Nincs ilyen kuponkód!');
    }
}
console.log(discount(termek, kuponkod));
*/