/* class toDoList {
    constructor() {
        this.list = [];
    }

    logList() {
        console.log(this.list);
    }

    returnList(){
        return this.list;
    }

    addItem(item) {
        this.list.push({ item: item, status: "nincs kész" });
    }

    deleteItem(item) {
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i] === item) {
                this.list.splice(this.list[i], 1);
            }
        }
    }

    setNotReady(item) {
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].item === item) {
                this.list[i].status = "nincs kész";
            }
        }
    }

    setReady(item) {
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].item === item) {
                this.list[i].status = "kész van";
            }
        }
    }
}

let thingstodo = new toDoList();

thingstodo.addItem("mosás");
thingstodo.addItem("főzés");

thingstodo.logList();

thingstodo.deleteItem("mosás");

thingstodo.logList();

thingstodo.setReady("főzés");

thingstodo.logList(); */




// ÓRAI

class ToDoItem{
    constructor(tetelNeve){
        this.tetelNeve = tetelNeve;
        this.statusz = 0;
    }

    kesz(){
        this.status = 1;
    }

    nincsKesz(){
        this.status = 0;
    }

}

class ToDo{
    constructor(){
        this.toDoLista = []
    }

    ujTetelHozzaadas(tetelNeve){
        this.toDoLista.push(new ToDoItem(tetelNeve))
    }

    kesztetel(index){
        this.toDoLista[index].kesz()
    }

    nincskesztetel(index){
        let keresettTetel = this.toDoLista[index];
        keresettTetel.nincsKesz(index);
    }

    teltelTorlese(index){
        this.toDoLista.splice(index, 1);
    }

    tetelek(){
        return this.toDoLista;
    }

    megjelenit(){
        for(let tetel of this.toDoLista){
            let statusz = "";
            if(tetel.statusz){
                statusz = "kész";
            }
            else{
                statusz = "nincs kész";
            }
            console.log(tetel.tetelNeve + " - " + statusz);
        }
    }

}

let elsoToDoListam = new ToDo();

elsoToDoListam.ujTetelHozzaadas("Bevasarlas");
elsoToDoListam.ujTetelHozzaadas("Takaritas");
elsoToDoListam.ujTetelHozzaadas("Takaritas");
elsoToDoListam.ujTetelHozzaadas("Javascript gyakorlas");

elsoToDoListam.kesztetel(0);
elsoToDoListam.kesztetel(1);

elsoToDoListam.nincskesztetel(0);

elsoToDoListam.teltelTorlese(2);