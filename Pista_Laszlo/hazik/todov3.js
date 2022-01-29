let toDoList = [{todo: "házi", done: false}, {todo: "takarítás", done: false}, {todo: "bevásárlás", done: false}, ]
let ul = document.querySelector('.list')
let addButton = document.querySelector('#addButton')
let addInput = document.querySelector('#addInput')

addButton.addEventListener('click', (e)=> {
    e.preventDefault()
    if(addInput.value == "" || addInput.value == undefined){

    } else{
        toDoList.push({todo: addInput.value, done: false})
    }
    let allLi = ul.children;


    for(let i = 0 ; i < toDoList.length; i++){
        let newLi = document.createElement('li')
        newLi.innerText = toDoList[i].todo;
        ul.append(newLi)
    }
})

