/*
Rokonság. Hozzunk létre egy html-t amiben legyennek egymásba ágyazott tagok (div, p, ul, image, a). Legyen egy ul, aminek egy li elemében legyen a tag, stb. Ha bármelyik elemre 
kattint a felhasználó, akkor különböző módokon jelöljük meg a 
     - szülő elemét (legyen rajta border)
     - első gyermek elemét, utolsó gyermek elemét (háttérszinnel)
     - megelőz és következő testvér elemet.t (háttérszinnel)
    Extra: Ha az egeret elmozditjuk arról az elemről aminél kattintottunk, akkor állítsa vissza az rokon elemek eredeti háttérszínét, keretét.

*/

document.addEventListener('click', (event)=>{
   event.preventDefault()
    event.target.parentElement.style.border = '1px solid red'    
})

document.addEventListener('click', (event)=>{
    event.preventDefault()
     
     event.target.firstElementChild.style.backgroundColor = '#ddd'
    
     
 })

 document.addEventListener('click', (event)=>{
    event.preventDefault()
     
     event.target.lastElementChild.style.backgroundColor = '#ddd'
    
     
 })

document.addEventListener('click', (event)=>{
    event.preventDefault()

     event.target.nextElementSibling.style.backgroundColor = 'blue'
 })

 document.addEventListener('click', (event)=>{
    event.preventDefault()
     
     event.target.previousElementSibling.style.backgroundColor = 'red'
     
 })



document.addEventListener('mouseout', (e)=>{
    e.preventDefault()
    e.target.parentElement.style.border = 'none'
    
})

document.addEventListener('mouseout', (e)=>{
    e.preventDefault()

    e.target.firstElementChild.style.backgroundColor = 'transparent'
    
})

document.addEventListener('mouseout', (e)=>{
    e.preventDefault()
    
    e.target.lastElementChild.style.backgroundColor = 'transparent'
  
})

document.addEventListener('mouseout', (e)=>{
    e.preventDefault()
    
    e.target.previousElementSibling.style.backgroundColor = 'transparent'
    
})

document.addEventListener('mouseout', (e)=>{
    e.preventDefault()
    
    e.target.nextElementSibling.style.backgroundColor = 'transparent'
})