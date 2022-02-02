/* - Kérjünk be egy számot 0-20 között. Ha a szám nem osztható 3-al és
   - kisebb vagy egyenlő mint 10, akkor növeljük 1-esével mindaddig, amig 3-al osztható számot nem kapunk
   - ha a szám nagyobb mint 10, akkor csökkentsük 1-el amig 3 -al oszható számot nem kapunk
   - ha oszthato 3al, akkor irjuk ki hogy oszthato 3al.
    Végén irassuk ki, melyik szám lett a 3-al osztható szám, illetve irassuk ki hány iteráció kellett hogy megtaláljuk a számot. */

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function divide(callback) {
    counter = 0;
    if(callback % 3 !== 0 && callback <= 10){
        for(callback; callback % 3 != 0; callback++){
            counter += 1;
        }
        console.log(callback);
        console.log(counter);
    }
    else if(callback % 3 !== 0 && callback > 10){
        for(callback; callback % 3 != 0; callback--){
            counter += 1;
        }
        console.log(callback);
        console.log(counter);
    }
    else{
        console.log(callback + " osztható 3-mal");
    }
}

console.log(divide(random(1, 20)));