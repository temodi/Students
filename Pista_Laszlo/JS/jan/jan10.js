
//inline function
function clickInline(){
    console.log("inline click")
}

//event property
let eventProperty = document.querySelector('#eventProperty');
eventProperty.onclick = function(){console.log('event property click')}

//event listener
let button = document.querySelector('#button');

button.addEventListener('click', ()=>{

    console.log('event listener click')

})


//ClickReset


let body = document.querySelector('body');

let trick = document.createElement('button');
trick.innerText = "Click"
trick.id = "trick";
body.append(trick)

let reset = document.createElement('button')
reset.innerText= "Reset"
reset.id = "reset"
body.append(reset)

let counter = 0;


trick.addEventListener('click', ()=> {
    counter++
    trick.innerText = `Click ${counter}`
})

reset.addEventListener('click', ()=>{
    trick.innerText = "Click"
    counter = 0
})




//4buttons

//átnézni: event.target

let buttons = document.querySelectorAll(".btns")
let defaultStyle = "1px solid #ccc"

function removeStyle(){
    for(let i = 0; i < buttons.length; i++){
        buttons[i].style.border = defaultStyle
    }
}

for(let i = 0; i < buttons.length; i++){ 
    buttons[i].addEventListener('click', ()=> {
        removeStyle()
        buttons[i].style.border = "1px solid red"
       
    })
}