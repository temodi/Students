

let toDoList = [{todo: "takaritas", done: true}, {todo: "vacsi", done: false}];




function addItem(list, task){
    let newObject = { todo: task, done: false};
    list.push(newObject)
    
}

function remove(list, pos){
    list.splice(pos - 1 , 1)
}

function done(list, pos){
    list[pos-1].done = true;

}

function  undone(list, pos){
    list[pos-1].done = false;
}


function list(list){
    console.log(list)
}




