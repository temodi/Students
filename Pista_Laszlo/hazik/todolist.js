let addButton = document.querySelector('.addButton')
let listElement = document.querySelector('.addElement')
let todoList = document.querySelector('.todo')
let list = [{todo: "cipő", done: true}]


for(li of list){
    let todoli = li.todo;
    let newli = document.createElement('li')
    newli.innerText = todoli;
    todoList.append(newli)
    let todoInput = li.done;
    let checkbox = document.createElement('input')
    checkbox.type = "checkbox"
    
        if(todoInput == false){
            checkbox.checked = false
        } else {
            checkbox.checked = true
        }
    todoList.append(checkbox)
}


function deleteAnElement(){
    let listElem = todoList.querySelectorAll('li');
    let inputs = todoList.querySelectorAll('input')
    for(le of listElem){
        console.log(le)
        le.addEventListener('click', ()=>{
            for(inp of inputs){
                if(le.innerText == inp.name){
                    inp.remove()
                }
            }
           
            for(let i = 0; i < list.length; i++){
                if(list[i].todo == le.innerText){
                    list.splice(i , 1)
                   
                }
            }
           le.remove()
        })
    }

}


function refresh (){
    let lis = todoList.querySelectorAll('li')
   
    for(li of lis){
        li.remove()
    }
    let brs = todoList.querySelectorAll('br');
    for(br of brs){
        br.remove()
    }
    let inputs = todoList.querySelectorAll('input');
    for(inp of inputs){
        inp.remove()
    }

    for(todos of list){
        
        let newTodo = todos.todo
        let li = document.createElement('li')
        let newInput = document.createElement('input')
        let br = document.createElement('br')
        newInput.type = "checkbox"
            if( todos.done == false){
                newInput.checked = false;
            } else{
                newInput.checked = true;
            }
        newInput.name = newTodo;
        li.innerText = newTodo;
        todoList.append(li)
        todoList.append(newInput)
        todoList.append(br)
     }

}



addButton.addEventListener('click', (e)=> {
    e.preventDefault()
    let newValue = listElement.value;
    list.push({todo: newValue, done: false})
    listElement.value = '';
    
    refresh()
    deleteAnElement()
})







