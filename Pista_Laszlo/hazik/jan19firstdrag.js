let box = document.querySelector('.box')
let body = document.querySelector('body')
box.style.left ='0px'
box.style.top = '0px'


let currentX = box.style.left
let currentY = box.style.top

let pageWidth 
let pageHeigth

function widthCalc(){
    pageWidth = body.offsetWidth
    pageHeigth = body.offsetHeight
}

let windowX 
let windowY
function calcLeftAndTop(e){
    windowX = e.pageX;
    windowY = e.pageY;
    box.style.left = `${windowX - boxX + parseInt(currentX)}px`
    box.style.top = `${windowY - boxY + parseInt(currentY)}px`
    if(windowX >= pageWidth -5 || windowY >= pageHeigth-5 || windowX < 5 || windowY < 5){
        drop()
    }
    
}

let boxX
let boxY
function drag(boxE){
    box.style.backgroundColor = 'rgb(0, 119, 255)'
    boxX = boxE.pageX;
    boxY = boxE.pageY;
    window.addEventListener('mousemove', calcLeftAndTop)
    widthCalc()
    
}
function drop(){
    box.style.backgroundColor = 'rgb(250, 84, 34)'
    
    currentX = box.style.left
    currentY = box.style.top
    window.removeEventListener('mousemove', calcLeftAndTop)
   
}

box.addEventListener('mousedown', drag)
box.addEventListener('mouseup', drop)
