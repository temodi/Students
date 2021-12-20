
/* CSV tartalmat konvertáljunk 2d tömbbe. Comma Separated Values (vagyis vesszővel elválasztott értékek). Egy függvényt írjunk rá, amelynek
   paraméterei: csv_string (ez tartalmaza a csv file tartalmat), delimiter (vessző vagy pontos vessző), omitHeader (az első sort kihagyja vagy feldolgozza)

   Irjunk fv-t ami egy 2 dimenziós tömbből egy csv stringet hozz létre. Lehessen megadni a delimitert is.  
   (Az órán csinált feladat fordítottja, ha annak az eredményét átadom ennek a fv-nek, akkor az eredeti csv stringet kell visszakapnom.
*/

let csv = "Név;E-mail;Osztályzat\n" +
  "Kiss Jolan;kiss.jolan@gmail.com;5\n" +
  "Nagy Péter;nagy.peter@gmail.com;3";


// function atvalto(csv_string, delimiter, omitHeader) {
//   let output = [];
//   let origin = csv_string.split('\n');
//   if (!omitHeader) {
//     for (let i = 0; i < origin.length; i++) {
//         output.push(origin[i].split(delimiter));
//     } 
//   } else {
//     for (let i = 1; i < origin.length; i++) {
//       output.push(origin[i].split(delimiter));
//   }
// }
//     return output
// }

// console.log(atvalto(csv, ';', false)) ;

let output = [];

function atvalto2(csv_string, delimiter, omitHeader) {
  let origin = csv_string.split('\n');
  for (let i = 0; i < origin.length; i++) {
    output.push(origin[i].split(delimiter));
  }
  if (omitHeader) {
    output.splice(0, 1)
  }
  return output
}

// console.log(atvalto2(csv, ';', false)) ;




function visszaValto(array, delimiter,) {
  let csv = "";
  let halfArray= [];
  for (let i = 0; i < array.length; i++) {
    halfArray.push(array[i].join(delimiter))
  }
  csv = halfArray.join("\n")
  return csv

}

// console.log(visszaValto(output, ';'))


/*- Kérjünk be 3 adatot a felhasználótól egy tömbbe (ciklus, prompt), irassuk ki pl: Neve, Kora, Beosztása
- Másoljuk le a tömbböt
- Kérjünk be újra 3 adatot, az előző tömbbe (vagyis írja felül a korábban megadott adatokat)
- Hasonlítsuk össze a két tömböt, és írjuk ki, milyen adatok módosultak a következő szerint.
Ha módosult, akkor "Eredeti adat: Neve => Új adat: Új neve" 
ha nem módosult, irjuk ki, hogy "Nem módosult a(z) Adat"

*/

function compare() {
  let array = [];
  // array[0] = "nev: " + window.prompt("nev:");
  // array[1] = "kor: " + window.prompt("kor:");
  // array[2] = "beo: " +window.prompt("beosztas:");
  for (let c = 0; c < 3; c++) {
    array[c] = window.prompt("add meg az adatot: ")
  }
  let copiedArray = array.concat();
  for (let c = 0; c < 3; c++) {
    array[c] = window.prompt("add meg az adatot: ")
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== copiedArray[i]) {
      console.log("Eredeti adat: " + copiedArray[i] + "=> Uj adat: " + array[i])
    } else {
      console.log(copiedArray[i] + " - Nem modosult a(z) adat")
    }
  }
  return;
}

// console.log(compare());


/*- Kérjünk be egy számot 0-20 között. Ha a szám nem osztható 3-al és
   - kisebb vagy egyenlő mint 10, akkor növeljük 1-esével mindaddig, amig 3-al osztható számot nem kapunk
   - ha a szám nagyobb mint 10, akkor csökkentsük 1-el amig 3 -al oszható számot nem kapunk
   - ha oszthato 3al, akkor irjuk ki hogy oszthato 3al.
    Végén irassuk ki, melyik szám lett a 3-al osztható szám, illetve irassuk ki hány iteráció kellett hogy megtaláljuk a számot.*/



function isDivide3(userInput) {
  let counter = 0
  if (userInput % 3 === 0) {
    return "A szam oszthato 3al!"
  } else if (userInput > 10) {
    while (userInput % 3 !== 0) {
      userInput--;
      counter++
    }
  } else if (userInput < 10) {
    while (userInput % 3 !== 0) {
      userInput++;
      counter++
    }
  }
  return "counter: " + counter + "\n" + "end integer: " + userInput;
}
// console.log(isDivide3(Number(window.prompt("Adj meg egy szamot 0 es 20 kozott"))))





/*Objektum, Kérjük be a felhasználótól 5 adatot (nev, email cim, telefonszam, weboldal cime, szuletesi ev) egy objektumba, úgy
  hogy a felhasználónak lehetősége legyen, hogy átlép egy kérdést (üres string), de mindaddig kérjük be, amig
  megnem adja az összes adatot.
  A végén irassuk ki a objektumot.
*/

function isMissing(obj) {
  let v = Object.values(obj);
  for (let i = 0; i < v.length; i++) {
    if (v[i] === "") {
      return true
    }
  }
  return false
}

function dataInput() {
  let personalData = {
    nev: window.prompt("add meg a neved:"),
    email: window.prompt("add meg az emiled:"),
    telefonszam: window.prompt("add meg a szamod:"),
    weboldal: window.prompt("add meg az URL-t:"),
    szulEv: window.prompt("add meg a szuletesi eved:")
  }
  let i = 0;
  while (isMissing(personalData)) {
    if (Object.values(personalData)[i] === "") {
      switch (Object.keys(personalData)[i]) {
        case "nev":
          personalData.nev = window.prompt("add meg a neved: ")
          break;
        case "email":
          personalData.email = window.prompt("add meg az emiled:")
          break;
        case "telefonszam":
          personalData.telefonszam = window.prompt("add meg a szamod:")
          break;
        case "weboldal":
          personalData.weboldal = window.prompt("add meg az URL-t:")
          break;
        case "szulEv":
          personalData.szulEv = window.prompt("add meg a szuletesi eved:")
          break;
      }
    }
    i++;
    if (i > 4) {
      i = 0;
    }
  }
  return personalData;
}

// console.log(dataInput());