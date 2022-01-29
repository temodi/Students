let inputs = document.querySelectorAll('input')
let focusedInputs = document.querySelectorAll('input:focus')
let spans = document.querySelectorAll('.thick')
let labels = document.querySelectorAll('label')

let afe = document.querySelector('.activeFormElement')


for(let i = 0 ;i < inputs.length; i++){

    inputs[i].addEventListener('focus', ()=>{
        afe.innerText = labels[i].innerText

        inputs[i].style.backgroundColor = "red"
         inputs[i].addEventListener('keyup',()=>{
            if(inputs[i].value != ''){
                inputs[i].style.backgroundColor = "green"
            } else{
                inputs[i].style.backgroundColor = 'red'
            }
         })
       
    })
    inputs[i].addEventListener('blur', ()=>{
        afe.innerText = ''
        inputs[i].style.backgroundColor = 'white'
            if(inputs[i].value != ''){
                spans[i].innerHTML = '<i class="fas fa-check"></i>'
            } else{
                spans[i].innerHTML = ''
            }
            inputs[i].append(thick)
    })
}



const linkIMG = document.querySelector('.linkIMG')
const inputIMG = document.querySelector('.inputIMG')

linkIMG.addEventListener('change', ()=>{
    inputIMG.src = linkIMG.value
    linkIMG.value = ''
})