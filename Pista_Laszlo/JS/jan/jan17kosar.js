let divs = document.querySelectorAll('.productContainer')

let buttons = document.querySelectorAll('.addTo')

let basket = document.querySelector('.basket')

for(let i = 0 ; i < buttons.length; i++){
    buttons[i].addEventListener('click', (e)=>{
        let current = e.target.parentElement;
        let basket = document.querySelector('.basket')

        basket.innerHTML += current.innerHTML
    })
}