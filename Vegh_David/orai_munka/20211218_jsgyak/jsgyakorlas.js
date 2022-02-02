// for ... of
let tomb = ["a", "b", "c"];

for (let tombElem of tomb) {
    console.log(tombElem);
}




// for ... in
let obj = {
    nev: "Jolan",
    kor: 32
}

for (let objElem in obj) {
    console.log(objElem);
}




// while -> valameilyen feltetel szerint kell futnia a ciklusnak, amig a feltetel igaz; eloltesztelos ciklus

function valami() {
    let lekapcsolva = true;
    while (lekapcsolva) {
        let kapcsoloAllapot = prompt("on vagy off a villanykapcsolo allasa?");
        if (kapcsoloAllapot == "on") {
            lekapcsolva = false;
        }
    }
}




// do / while ciklus -> hatultesztelos ciklus; mindig legalabb egyszer lefut a ciklusmag
let x = 0;
do {
    console.log("do-while: " + x);
    x++;
} while (x < 0)




// splice új elem
let randomtomb1 = ["a", "b", "c"];
randomtomb1.splice(1, 0, "d");
console.log(randomtomb1);




// splice elem csere
let randomtomb2 = ["a", "b", "c"];
randomtomb2.splice(1, 1, "d");
console.log(randomtomb2);




// 2 dim - egymas ala irassa ki az elemeket
let tomb1 = [1, 2, 3];
let tomb2 = [4, 5, 6];
let tomb2dim = [
    tomb1,
    tomb2
];

for (let i = 0; i < tomb2dim.length; i++) {
    for (let j = 0; j < tomb2dim[i].length; j++) {
        console.log(tomb2dim[i][j]);
    }
}