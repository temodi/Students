//transpiler and polifiller

let questionedLinks = document.querySelectorAll('.questionedLink')
let confirmBox = document.querySelector('.confirmbox')

for(let i = 0 ;i < questionedLinks.length; i++){
    questionedLinks[i].addEventListener('click', (e)=>{
        e.preventDefault()
        confirmBox.classList.add('confirmbox2')

        
        let yesButton = document.querySelector('#yesButton')
        yesButton.addEventListener('click', ()=>{
            window.location = `${questionedLinks[i].href}`
        })
        let noButton = document.querySelector('#noButton')
        noButton.addEventListener('click', ()=>{
            confirmBox.classList.remove('confirmbox2')
        })
    })
}

