//menu

let container = document.querySelector('.container');
let menu = container.querySelector('.menu');
let links = menu.querySelectorAll('a');
let textContainer = container.querySelector('.textContainer')
let ps = textContainer.querySelectorAll('p')
let icons = menu.querySelectorAll('i') 

function removeStyle(){
    for(let i = 0 ;i < links.length ; i++){
        links[i].style.backgroundColor = '';
    }
}

function clear(){
    for(let i = 0; i < ps.length ;i ++){
        ps[i].style.display = "none"
        icons[i].style.color = "#333"
    }
}

for(let i = 0; i < links.length; i++){
    links[i].addEventListener('click', (e)=>{
        e.preventDefault()

        removeStyle()
        links[i].style.backgroundColor = "#ccc"

        clear()
        ps[i].style.display = "block"
        icons[i].style.color = "rgb(0, 108, 170)"
    })
}

//table

let table = document.querySelector('.table')
let rows = table.querySelectorAll('tr')
let buttons = table.querySelectorAll('button')

for(let i = 0 ;i < buttons.length ; i++){
    buttons[i].addEventListener('click', ()=> { 
        rows[i+1].remove()
    })
}