/*
Hozz létre egy 2 oldalból álló admin oldalt, amelyen regisztrált felhasználói adatokat jelenítünk meg, illetve ahhoz adhatunk hozzá új
      adatokat, törölhetünk belőle.
      - Login oldal (index.html), username és password input mezők. és egy login gombbal.
        - ha a felhasznalo username-nek 'admin' és password-nek 'password' adatokat adja meg, akkor a iranyitsuk át a felhasználót
          az admin.html-re

      - Admin belső oldal (admin.html)
        "adatbázis" - reprezentálja egy tömb, amiben objektumonként van tárolva a felhasználói adat.
          {
            id: number,
            fullname: string,
            username: string,
            email:string,
            isimage: boolean,
            imageurl: string,
          }
          pl:
          {
            id: 1,
            fullname: 'Kiss Jolan',
            username: 'bekalab',
            isimage: true,
            email:string,
            imageurl: "http://placekitten.com/200/200",
          }
          - pontosan ezt az elnevezeseket használd!
          - uj adat hozzaadasakor az id az legyen a tömb index-e

        - legyen 3 menüpont (belső navigációval, mint a tabos)
        - 1. menupont: csak statisztikai adatokat jelenítunk meg. 
          - Irjuk ki a regisztrált userek db számát az "adatbázisbol"
          - Irjuk ki a képpel rendelkezők userek db számát. 
        - 2. menupont: 
          - legyen egy táblázat, amely a következő oszlopokat tartalmazza: 
          - id, fullname, username, van-e picture, email, törlés gomb, módosítás gomb.
          - a táblázat felett legyen egy form, ahol ezeket az adatokat adhatja meg az admin (kivéve id), a mentés gombra kattintva bekerül az "adatbázisba"
          - ha a törlés gombra nyomunk, a táblázatból törlődjön a felhasználó, illetve az "adatbázisból" is.
          - ha az módosítás gombra kattint, akkor a fentebbi form-ban legyenek benne az adatok (kivéve id), módosítás után a táblázatban és az
            "adatbázisban" is frissüljenek az adatok.
        - 3. menupont: 
          - legyen egy kép galléria (3x3 kép)
          - egy legördülő listában legyenek benne a felhasználók, ahol megadvan adva, hogy van kép,
            ha kiválasztok egy felhasználót és rákattintok egy képre, csak akkor jelenjen meg
            egy mentés gomb a legördülő lista mellet.
          - ha a mentés gombra kattintok, akkor tárolja el az "adatbázisban" a kiválasztott képet
  
      - Figyelj arra hogy a design is emészthető legyen, szóval használj css-t és formázd meg
      - Táblázatnak legyen fejléce, legyen információ az oldalon, necsak egy szám vagy input mező a levegőben
      - Legyen külön js fileban a script, külön a css, külön a html
      - Legyen database.js-ben az felhasználói adatok.
      - Extra irj osztályt a felhasználói adatok kezelésére, törlés, módosítás, stb.
      - Extra ha a tablázatban belekattintok a nevébe vagy email cimébe, akkor cserélje inputra és ha kikatintok metnse el a változást az "adatbázisban"

*/


let userDataBase = [{userID: 1, username: 'Kormi007', password: "pmt007", avatar: '1.jpg', isAdmin: true, email: 'email1@email.com'}, 
{userID: 2, username: 'Jocó', password: "pmt007", avatar: '2.jpg', isAdmin: false, email: 'email2@email.com'},
{userID: 3, username: 'Feri', password: "pmt007", avatar: '3.jpg', isAdmin: false, email: 'email3@email.com'},
{userID: 4, username: 'Béla', password: "pmt007", avatar: '4.jpg', isAdmin: false, email: 'email4@email.com'},
{userID: 5, username: 'Maca', password: "pmt007", avatar: '5.jpg', isAdmin: false, email: 'email5@email.com'},
{userID: 6, username: 'Ili', password: "pmt007", avatar: '', isAdmin: false, email: 'email6@email.com'},
{userID: 7, username: 'Ilike', password: "pmt007", avatar: '7.jpg', isAdmin: true, email: 'email7@email.com'},
{userID: 8, username: 'Rob', password: "pmt007", avatar: '', isAdmin: true, email: 'email8@email.com'},
{userID: 9, username: 'Adam', password: "pmt007", avatar: 'bigcat.jpg', isAdmin: true, email: 'email9@email.com'},]

//global variables


let userName = document.querySelector('#username')
let password = document.querySelector('#password')
let loginButton = document.querySelector('#loginbutton')
let messageParagraph = document.querySelector('.message')


function move(){
    window.location = 'home.html'
}




function loginChecker(){
    messageParagraph.innerText = '';


    for(let i = 0 ; i < userDataBase.length; i++){
        if(userDataBase[i].username === userName.value && userDataBase[i].password === password.value){
            
            localStorage.setItem('userName', userDataBase[i].username)
            localStorage.setItem('isAdmin', userDataBase[i].isAdmin)
            localStorage.setItem('avatar', userDataBase[i].avatar)
          
            return move()
            
        } else if(userDataBase[i].username === userName.value && userDataBase[i].password !== password.value){
            return messageParagraph.innerText = 'Invalid password'
        } else if(userDataBase[i].username !== userName.value && userDataBase[i].password !== password.value){
            return messageParagraph.innerText = 'Are you registered?'
        }
    }
}


loginButton.addEventListener('click', (e)=>{
    e.preventDefault()
    
    loginChecker()
})


//menu variables




