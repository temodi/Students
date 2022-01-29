//https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent

//rightclickdisable = true

//confirm dialogue box --yes or no--

/*
contextmenu helyett, jelenitsünk meg egy dobozt, amiben közöljük a felhasználóval, hogy levan tiltva a jobb egérgombos menü.
  Az egér poziciójában jelenjen meg a doboz.Ha valamelyik egérgombbal kattint, a doboz ne látszódjék a képernyőn többet.
*/


/// window.visualViewport.height
/// window.visualViewport.width

let box = document.createElement('div')
box.classList.add('context')
let message = document.createElement('p')
message.innerText = "a jobb egérgomb le van tiltva"
let body = document.querySelector('body')

box.append(message)
let posX
let posY

window.addEventListener('mousemove', (e)=> {
    
    posX = e.clientY;
    posY = e.clientX;
})

window.addEventListener('contextmenu', (e)=> {
    e.preventDefault()

    body.append(box)
    box.style.top = `${posX}px`
    box.style.left = `${posY}px`
    
    
}, false)

window.addEventListener('click', ()=> {
    box.remove()
})