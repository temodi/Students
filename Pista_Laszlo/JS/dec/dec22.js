let list = document.querySelector("#list")
let listElements = list.querySelectorAll("li")

console.log(listElements)
for(let i = 0 ; i < listElements.length; i++){
    listElements[i].classList.add("redbg")
}


for(Element of listElements){
    Element.style.display = "inline-block";
    Element.style.backgroundColor = "red";
    Element.style.padding = "5px 10px";
    Element.style.cursor = "pointer";
    Element.style.borderRadius = "5px"
    console.log(Element)
}

/* 
function active(num){
    for(let i = 0; i < listElements.length; i++){
        listElements[num-1].classList.add("active")
    }
    console.log(listElements)
}

active(2)
 */



function activate(num){
    for(let i = 0 ; i < listElements.length; i++){
        listElements[i].classList.remove('active');
        listElements[i].style.backgroundColor = "red";
    }
    if(num < 1){
        num = 1
    } else if( num > listElements.length){
        num = listElements.length
    }

    let active = listElements[num-1];
    active.classList.add("active"); 
    active.style.backgroundColor = "blue";
}


activate(3);
activate(2);
activate(1);
activate(15);


console.log(listElements);
