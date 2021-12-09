// random(min, max)
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Feladat:
// A fenti random használatával írj egy function ami
// dob egy 6 oldalu kockaval, es visszater a random szammal d6() => number
// A kockadobast vegezd el 10000x es az eredmenyeket osszesitsd egy 6 elemu tombben.
// Melyik dobasbol hany darab volt?
// [3000, 3001, 3001]

function d6() {
  return random(1, 6);
}

function testRandomDiceThrow() {
  //             0  1  2  3  4  5
  let results = [0, 0, 0, 0, 0, 0];
  // ciklus ami 10000x fut
    // kockadobas = d6()
    // ami kijott a kockaval, azt a tomb helyet 1-gyel novelni
  // ciklus vege
  return results;
}

function kockadobasszimulator() {
  for (let i = 0; i < 1000; i++) {
    let kockadobas = d6();
  }
}

console.log(results);

// Aztan ha kesz, commitold es pushold fel az origin-ba (githubra)
// Mert ha felpusholod, akkor meg tudom nezni

/**
- Mire táncolnak a programozók a bulin? - Algoritmusra.
Még több vicc: http://viccfaktor.hu/cimke/programozo-viccek
 */

// =========
// Osszegzes
// =========
// osszeadjuk egy sorozat elemeit
// osszegzezes(Array<number>) => number
// osszegzezes([1,2,3,4,5]) => 15
// osszegzezes([1]) => 1
// osszegzezes([]) => 0

function osszegzes(arrayy) {
  let sum = 0;
  for (let i = 0; i < arrayy.length; i++) {
    sum += arrayy[i];
  }
  return sum;
}

osszegzezes([1,2,3,4,5]) // => 15

// =========
// Szamlalas
// =========
// Adott feltételek alapján a tömb bizonyos elemeit megszámolom.
// szamlalas(Array<T>, T => boolean) => number

//
// Írj függvényt ami paraméternek kap egy tömbböt
// a tombben megszámolja mennyi negatív szám van
// es visszaadja az eredmenyt
// negativokSzama([-1, 0, 1]) => 1

function negativokSzama(arrayy) {
  let counter = 0;

  for (let i = 0; i < arrayy.length; i++) {
    if (arrayy[i] < 0) {
      counter++;
    }
  }

  return counter;
}

negativokSzama([-1, 0, 1]) // => 1

// HAZI

// =========
// Eldontes
// =========
// Szeretnénk tudni, hogy egy érték megtalálható-e egy tömbben.
// Irj fuggvenyt ami 2 parametert kap.
// Az elso parameter a tomb amiben keressuk az elemet.
// A masodik parameter az elem amit keresunk.
// Ha megtalalta az element terjen vissza true-val, ha nem akkor false-val.
// letezik([1,2,3,4], 0) => false
// letezik([1,2,3,4], 2) => true

// =========
// Kivalasztas
// =========
// Az adott elem a tömb hányadik helyén van, tudjuk, hogy az elem benne van a tombben
// Irj fuggvenyt ami 2 parametert kap.
// Az elso parameter a tomb amiben keressuk az elemet.
// A masodik parameter az elem amit keresunk.
// A fuggveny terjen vissza a megtalalt elem poziciojaval.
// letezik([1,2,3,4], 0) => -1, null, false, valami ami azt jeloli,
// letezik([1,2,3,4], 2) => true
// letezik(['alma', 'korte'], 'alma') => true