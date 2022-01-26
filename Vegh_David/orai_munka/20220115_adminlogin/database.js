class Database{
    constructor(){
        this.database = [];
    }

    addObj(fullname, username, isimage, email, imageurl){
        let obj ={
            id: this.database.length,
            fullname: fullname,
            username: username,
            isimage: isimage,
            email: email,
            imageurl: imageurl
        }
        this.database.push(obj);
    }
}

let myDatabase = new Database();

myDatabase.addObj("Kis János", "Janidapro", true, "kisjanos@gmail.com", "http://placekitten.com/200/200");
myDatabase.addObj("Nagy Béla", "Belaking", true, "nagybela@gmail.com", "http://placekitten.com/200/200");
myDatabase.addObj("Farkas Heléna", "Heli", true, "farkashelena@gmail.com", "http://placekitten.com/200/200");
myDatabase.addObj("Kovács Elemér", "Keli123", false, "kovacselemer@gmail.com");
myDatabase.addObj("Szabó Viktor", "Victorious", false, "szaboviktor@gmail.com");
myDatabase.addObj("Varga Tamás", "Tomika", false, "vargatamas@gmail.com");
myDatabase.addObj("Végh Imre", "Imike", true, "veghimre@gmail.com", "http://placekitten.com/200/200");
myDatabase.addObj("Eötvös István", "Pityes", true, "eötvösistvan@gmail.com", "http://placekitten.com/200/200");
myDatabase.addObj("Rövid Balázs", "Balu", true, "rövidbalazs@gmail.com", "http://placekitten.com/200/200");
myDatabase.addObj("Zöld Gábor", "Gabesz", true, "zoldgabor@gmail.com", "http://placekitten.com/200/200");
myDatabase.addObj("Koncz Zsuzsa", "Zsuzsi", true, "konczzsuzsa@gmail.com", "http://placekitten.com/200/200");
myDatabase.addObj("Retek Zsolt", "Zsoca", true, "retekzsolt@gmail.com", "http://placekitten.com/200/200");

console.log(myDatabase.database);

let dbs = myDatabase.database;



let idStorage = [];