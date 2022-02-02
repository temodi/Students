// függvény kifejezes / function expression

let fNeve = function deklaraciosNev(param1, param2){
    return param1;
}

// fNeve-t beallaitja egy fuggvenydeklaraciora

fNeve; // => ha igy hivom meg akkor a fv-t adja vissza, nem futtatja a fv-t
fNeve() // => fv meghivasa



// anonimus fuggveny (csak fuggveny kifejezes eseten lehet, deklaraciokor nem)
let fvNeve = function (param1, param2){
    return param1;
}


console.log(confirm("Biztos folyatod?"))





// CALLBACK ES HIGHER ORDER FUGGVENEYEK

function ask(szoveg, yesCallback, noCallback){
    if(confirm("Biztos folytatod")){
        yesCallback()
    } else {
        noCallback()
    }
}

let yes = function (){
    alert("Yes");
}

let no = function (){
    alert("No");
}

ask("Biztos folytatod", yes, no);




function math(a, b, callback){
    callback(a, b);
}

let min = function (a, b){
    return a < b ? a : b;
}

console.log(math(1, 2, min));