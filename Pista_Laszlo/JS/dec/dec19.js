/* - Kérjünk be egy számot 0-20 között. Ha a szám nem osztható 3-al és
   - kisebb vagy egyenlő mint 10, akkor növeljük 1-esével mindaddig, amig 3-al osztható számot nem kapunk
   - ha a szám nagyobb mint 10, akkor csökkentsük 1-el amig 3 -al oszható számot nem kapunk
   - ha oszthato 3al, akkor irjuk ki hogy oszthato 3al.
    Végén irassuk ki, melyik szám lett a 3-al osztható szám, illetve irassuk ki hány iteráció kellett hogy megtaláljuk a számot. */


/* 
let szam = window.prompt('Kérlek adj meg egy számot 1 és 20 között!')


function gimmeANumber(input){
    let inputSzam = parseInt(input)
    let counter = 0

    if( inputSzam <= 10 && inputSzam >= 0){
        for(let i = inputSzam; i <= 12; i++){
            counter++
            if(i % 3 === 0){
                return console.log(`A megadott szám ${inputSzam}, ${i} osztható hárommal, és ${counter-1} iteráció kellett hozzá`)
            }
        }
    } else if ( inputSzam > 10 && inputSzam <= 20){
        for( let j = inputSzam ; j >= 9 ; j--){
            counter++
            if(j % 3 === 0){
                return console.log(`A megadott szám ${inputSzam}, ${j} osztható hárommal, és ${counter-1} iteráció kellett hozzá`)
            }
        }
    } else if( inputSzam > 20 || inputSzam < 0 || isNaN(inputSzam)){
        return gimmeANumber(szam = window.prompt('Kérlek adj meg egy számot 1 és 20 között!')) 
    }  

}

gimmeANumber(szam)

 */


/*Irjunk fv-t ami egy 2 dimenziós tömbből egy csv stringet hozz létre. Lehessen megadni a delimitert is.  (Az órán csinált feladat fordítottja, 
    ha annak az eredményét átadom ennek a fv-nek, akkor az eredeti csv stringet kell visszakapnom.*/


/* 
let csv = "Név;E-mail;Osztályzat\n"+
"Kiss Jolan;kiss.jolan@gmail.com;5\n"+
"Nagy Péter;nagy.peter@gmail.com;3";
let result = []



function csvToArray(input){
    let split1 = input.split(';')
    let toString1 = split1.toString()
    let split2 = toString1.split("\n")
    for(let i = 0 ; i < split2.length ;i++){
        result.push(split2[i].split(','))
    }

    return console.log(result)
}

csvToArray(csv)




function arrayToCsv(input, delimiter){
    let row = [];

    for(let i = 0 ; i < input.length ; i++){
       row.push(input[i].toString())
    }
    let row2 =[]

    for(let j = 0 ; j < row.length ; j++){
        row2.push(row[j]+"\n")
    }
    let row3 = []

    for( let k = 0 ; k< row2.length ; k++){
        row3.push(row2[k].replace(/,/g , delimiter))
    }
    let row4 = row3.toString();

    let finalResult = row4.replace(/,/g , "");
    console.log(finalResult)

}

arrayToCsv(result, ";")


 */

/*Objektum, Kérjük be a felhasználótól 5 adatot (nev, email cim, telefonszam, weboldal cime, szuletesi ev) egy objektumba, úgy
  hogy a felhasználónak lehetősége legyen, hogy átlép egy kérdést (üres string), de mindaddig kérjük be, amig
  megnem adja az összes adatot.
  A végén irassuk ki a objektumot.*/


let nameInput = window.prompt("What is your name?");
let emailInput = window.prompt("What is your Email address?");
let phoneNumberInput = window.prompt("What is your phone number?");
let webAddressInput = window.prompt("What is your Website?");
let birthDateInput = window.prompt("What is your birth date?")

while(nameInput == "" || nameInput == " "){
    nameInput = window.prompt("Please confirm your name!");
};
while(emailInput == "" || emailInput == " " || !emailInput.includes("@") || !emailInput.includes(".")){
    emailInput = window.prompt("Please confirm your email address!");
};
while(phoneNumberInput == "" || phoneNumberInput == " "){
    phoneNumberInput = window.prompt("Please confirm your phone number!");
};
while(webAddressInput == "" || webAddressInput == " "){
    webAddressInput = window.prompt("Plese confirm your Website?");
};
while(birthDateInput == "" || birthDateInput == " "){
    birthDateInput = window.prompt("Plese confirm your date of birth?");
};



class User {
    constructor(name, email, phoneNumber, webAddress, dateOfBirth){
        this.Name = name;
        this.Email = email;
        this.PhoneNumber = phoneNumber;
        this.Website = webAddress;
        this.BirthDate = dateOfBirth;
    }
}


let newUser = new User(nameInput, emailInput, phoneNumberInput, webAddressInput, birthDateInput)

console.log(newUser) 