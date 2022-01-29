let colorCointainer = document.querySelector('.colorContainer')
let newGameButton = document.querySelector('#newGameButton')
let gameOver = document.querySelector('.gameOver')
let counter = 0;
let maxTry = 4;

let gameOverMessage = document.querySelector('.gameOverMessage')
let gameOverCardMessage = document.querySelector('.gameOverCardMessage')

function newGame(){
    gameOver.style.transform = 'scale(0)'
    for(let i =0 ; i< 9; i++){
        let r = Math.floor(Math.random()*255)+1;
        let g = Math.floor(Math.random()*255)+1;
        let b = Math.floor(Math.random()*255)+1;
        let color = `rgb(${r}, ${g}, ${b})`
        
    
        let box = document.createElement('div');
        box.classList.add('colorBox')
        box.style.backgroundColor = color
        colorCointainer.append(box)
    }
}
newGame()




function clearColors(){
    let divs = document.querySelectorAll('.colorBox')
    for(let k = 0 ; k < divs.length ; k++){
        divs[k].remove()
    }
}

newGameButton.addEventListener('click', ()=>{
    clearColors()
    newGame()
    consolePlatform()
    counter = 0
    message.innerText = ''
})


let message = document.querySelector('.message')



function consolePlatform(){
    let colorBoxes = colorCointainer.querySelectorAll('.colorBox')
   
    let guessedColor = colorBoxes[Math.floor(Math.random()*9)].style.backgroundColor;
    for(let j = 0 ; j < colorBoxes.length; j++){
        colorBoxes[j].addEventListener('click', ()=>{
            if(colorBoxes[j].style.backgroundColor !== guessedColor){
                
                
                counter++
                if( counter == maxTry){
                    message.innerText = 'You have 0 try left.'
                    gameOver.style.transform = 'scale(1)'
                    gameOverMessage.innerText = 'Game Over'
                    gameOverCardMessage.innerText = "You've used all your tries."
                } else{
                    message.innerText = `Guess a new color, You have ${maxTry-counter} tries left.`
                }
                colorBoxes[j].style.opacity = 0;
            } else{
                gameOver.style.transform = 'scale(1)'
                    gameOverMessage.innerText = 'You Win!!!'
                    gameOverCardMessage.innerText = "Congrats Bro'"
                    
                
            }
        })
    }
}
consolePlatform()