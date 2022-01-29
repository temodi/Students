//Browser rendering pipeline


//WEB API -- Web application programing interface


/* 
function ask(text, yesCallback, noCallback){
    if(confirm('text')){
        yesCallback()
    } else {
        noCallback()
    }
}
let yes = () => { console.log('Yes')};
let no = () => { console.log('No')};

ask('biztos folytatod?', yes, no)

 */

// csv file feldolgozása


/* Név,Email,Osztályzat
Nagy Elemér,nagy.elemer@gmail.com,5
Kiss Éva,kiss.eva@gmail.com,3 */


let csv = "Név;E-mail;Osztályzat\n"+
    "Kiss Jolan;kiss.jolan@gmail.com;5\n"+
    "Nagy Péter;nagy.peter@gmail.com;3";


function splitTheWorld(donor){
    let messy = donor.split(';')
    let messyString = messy.toString()
    let talanJo = messyString.split("\n")
    let jo = []
    for(let i = 0 ; i < talanJo.length ;i++){
        jo.push(talanJo[i].split(','))
    }

    return console.log(jo)
}

splitTheWorld(csv)
/* 

let csvAgain = ""

function toCsv(input){
   
    for(let i =0 ; i< input.length; i++){
        console.log(input[i].toString())
        csvAgain = csvAgain + input[i]
    }

    let newNew = csvAgain.split(',')
    newNew.pop()
    console.log(newNew)



}


//Házi

toCsv(jo) */






/*- Kérjünk be 3 adatot a felhasználótól egy tömbbe (ciklus, prompt), irassuk ki pl: Neve, Kora, Beosztása
  - Másoljuk le a tömbböt
  - Kérjünk be újra 3 adatot, az előző tömbbe (vagyis írja felül a korábban megadott adatokat)
  - Hasonlítsuk össze a két tömböt, és írjuk ki, milyen adatok módosultak a következő szerint.
    Ha módosult, akkor "Eredeti adat: Neve => Új adat: Új neve" 
    ha nem módosult, irjuk ki, hogy "Nem módosult a(z) Adat ha nem módosult, irjuk ki, hogy "Nem módosult a(z) Adat"
"
*/

/* let firstArr = [];


function questions(){
    firstArr.push(window.prompt("Neve:"))
    firstArr.push(window.prompt("Kor:"))
    firstArr.push(window.prompt("Beosztas:"))

}

questions()


let secondArr = [];
let thirdArr = []
function compare(tomb1){
    
    for(let i = 0; i < tomb1.length; i++){
        secondArr.push(tomb1[i])
    }
    

    thirdArr.push(window.prompt("Neve:"))
    thirdArr.push(window.prompt("Kor:"))
    thirdArr.push(window.prompt("Beosztas:"))
    console.log(firstArr)
    console.log(thirdArr)
}

compare(firstArr) */










