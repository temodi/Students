let csv = "Név;E-mail;Osztályzat;" +
    "Kiss Jolan;kiss.jolan@gmail.com;5;" +
    "Nagy Péter;nagy.peter@gmail.com;3";

function toArray(csv_string, delimiter, header) {
    let myArray = csv_string.split(delimiter);
    let myArray1 = [];
    let myArray2 = [];
    let myArray3 = [];
    let myArray4 = [];
    for (let i = 0; i < myArray.length; i++) {
        if (i < 3 && header === true) {
            myArray1.push(myArray[i]);
        }
        else if (2 < i && i < 6) {
            myArray2.push(myArray[i]);
        }
        else if (5 < i) {
            myArray3.push(myArray[i]);
        }
    }
    myArray4.push(myArray1, myArray2, myArray3);
    return myArray4;
}

console.log(toArray(csv, ";", true));




let csv2 = "Név;E-mail;Osztályzat\n" +
    "Kiss Jolan;kiss.jolan@gmail.com;5\n" +
    "Nagy Péter;nagy.peter@gmail.com;3";

function toArray2(csv_string, delimiter, header) {
    myArray = csv_string.split("/n");
    for (let i = 0; i < myArray.length; i++) {
        if (i = 0 && header === false) {
            continue;
        }
        myArray[i].split(delimiter);
    }
    return myArray;
}

console.log(toArray(csv, ";", false));




function backToString(array){

}
backToString(toArray(csv, ";", false));




/* let tomb = [];
tomb[0] = prompt("Add meg a nevet!");
tomb[1] = prompt("Add meg a kort!");
tomb[2] = prompt("Add meg a beosztást!");

let tomb2 = [].concat(tomb);

tomb[0] = prompt("Add meg az új nevet!");
tomb[1] = prompt("Add meg az új kort!");
tomb[2] = prompt("Add meg az új beosztást!");

function compare(arr1, arr2){
    for(let i = 0; i < arr1.length; i++){
        if(arr1[i] === arr2[i]){
            console.log("Az adat nem módosult.");
        }
        else {
            console.log("Eredeti adat neve: " + arr1[i] + ", Új adat neve: " + arr2[i]);
        }
    }
}

compare(tomb2, tomb); */




function dataIn(){
    obj = {
        nev: "",
        email: "",
        teloszam: "",
        weboldal: "",
        szulev: ""
    };
    while(obj.nev === "" || obj.email === "" || obj.teloszam === "" || obj.weboldal === "" || obj.szulev === ""){
        if(obj.nev === ""){obj.nev = prompt("Adj nevet!")};
        if(obj.email === ""){obj.email = prompt("Adj emailt!")};
        if(obj.teloszam === ""){obj.teloszam = prompt("Adj teloszamot!")};
        if(obj.weboldal === ""){obj.weboldal = prompt("Adj weboldalt!")};
        if(obj.szulev === ""){obj.szulev = prompt("Adj szulevet!")}
    }
}

dataIn();