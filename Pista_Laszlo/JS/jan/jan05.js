/* create elements or text node

let newP = document.createElement('p')

let newText = document.createTextNode("this is a new string")

document.append('p')
newP.append('newText')


secondDiv.innerHtml = '<p class="newP">this is a new paragraph</p>'

prepend 

secondDiv.prepend(elem)
insert to the front of secondDiv

secondDic.append(elem)
instert to the end of secondDiv

secondDiv.before(elem)
insert before secondDiv

secondDiv.after(elem)
insert after secondDiv */



const data = [{tag: 'a', text: "link"}, {tag: 'p', text: "paragraph"}, {tag: 'span', text: "span"}, {tag: 'div', text: "div"}, {tag: 'div', text: "Újdiv"}, ]

const main = document.querySelector('.main')


for(let i = 0 ; i <data.length; i++){
    let link = document.createElement(data[i].tag)
    let br = document.createElement('br')
    link.innerText = data[i].text;
    main.append(link)
    main.append(br)
}



//Parentnode and parent element

/* console.log(main.parentNode);
console.log(main.parentElement);
console.log(main.childNodes)
console.log(main.children)
console.log(main.firstChild)
console.log(main.firstElementChild)
console.log(main.lastChild)
console.log(main.lastElementChild)
console.log(main.nextSibling)
console.log(main.nextElementSibling)
console.log(main.previousSibling)
console.log(main.previousElementSibling) */


//fa bejárási algoritmusok mélységi és szélességi

/* kombinatorika
faktorialis
 */

let ul = document.querySelector('ul');
let lis = ul.children;
console.log(lis)

for(let i = 0 ; i < lis.length; i++){
    lis[i].addEventListener('click', ()=> {
        lis[i].classList.toggle('active')
    })
}