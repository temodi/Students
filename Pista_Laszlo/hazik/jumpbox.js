let body = document.querySelector('body')
let width = body.offsetWidth;
let height = body.offsetHeight;

let hitbox = document.querySelector('.hitBox')
let magicBox = document.querySelector('.magicBox')
let array = ['img/hitbox/1.png', 'img/hitbox/2.jpg', 'img/hitbox/3.jpg', 'img/hitbox/4.jpg', 'img/hitbox/5.jpg', 'img/hitbox/6.jpg', ]


let mouseX 
let mouseY


// cursor tracking
window.addEventListener('mousemove', (e)=>{
    mouseX = e.pageX;
    mouseY = e.pageY;
})

let offHeight
let offWidth
let ran

//new position to hitbox
function newPosition(){
    offHeight = Math.floor(Math.random()*height)-110;
    offWidth = Math.floor(Math.random()*width)-150;
    ran = Math.floor(Math.random()*array.length)

    if(mouseX > offWidth && mouseX < offWidth + 300){
        newPosition()
    } else if( mouseY > offHeight && mouseY < offHeight + 300){
        newPosition()
    }
    else{ 
        hitbox.style.top = `${offHeight}px `
        hitbox.style.left = `${offWidth}px`
        magicBox.style.backgroundImage = `url('${array[ran]}')`
    }   
}
newPosition()



hitbox.addEventListener('mouseenter', ()=>{
    newPosition()
})