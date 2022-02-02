let convertnum = function (num) {
    if (isNaN(num)) {
        /* return num.toString(); */
        return String(num);
    }
    else {
        return num;
    }
}

console.log(convertnum(3));




function indexIfString(str, arr) {
    let returnString = "";
    for (let i = 0; i < arr.length; i++) {
        if (str[arr[i]] === undefined) {
            continue
        }
        returnString += str[arr[i]];
    }
    return returnString;
}

console.log(indexIfString("körte", [1, 2, 3, 7]));




function each(arr, callback) {
    if (!Array.isArray(arr)) {
        return null;
    }
    if (typeof callback !== "function") {
        return null;
    }
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}

each([1, 2, 3], function (elem) { console.log(elem) });




let myArr = [
    {
        id: 101,
        title: "hir1",
        desc: "hir1tartalom",
        read: false
    },
    {
        id: 201,
        title: "hir2",
        desc: "hir2tartalom",
        read: false
    },
    {
        id: 301,
        title: "hir3",
        desc: "hir3tartalom",
        read: false
    }
];

let myid = prompt("Add meg az id-t!");

function seek(id) {
    for (let i = 0; i < myArr.length; i++) {
        if (id == myArr[i].id) {
            myArr[i].read = true;
            return myArr[i];
        }
    }
    return null;
}

console.log(seek(myid));




class KosarTetel {
    constructor(termekId, db, nettoAr, afa) {
        this.termekId = termekId;
        this.db = db;
        this.nettoAr = nettoAr;
        this.afa = afa;
    }

    setdb(value) {
        if (value >= 0) {
            this.db = value
        }
    }

    bruttoAr(){
        return this.nettoAr + this.nettoAr * this.afa;
    }

}

let ujKosar = new KosarTetel(101, 2, 1000, 0.05)

console.log(ujKosar);
ujKosar.bruttoAr();
ujKosar.setdb(3);
console.log(ujKosar);es
