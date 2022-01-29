/*# shirts

Write a webpage for filtering t-shirts. Every t-shirt has the
following properties:
- color: named CSS colors (https://htmlcolorcodes.com/color-names/)
- text: a text printed on the t-shirt
- text color: named CSS colors
- quantity: number of items in stock



**Sample data**

```js
let shirts = [
  { color: "red", text: "You are the CSS to my HTML", textColor: "yellow", qty: 5},
  { color: "blue", text: "Woof", textColor: "white", qty: 3},
  { color: "yellow", text: "I <3 JavaScript", textColor: "green", qty: 1},
  { color: "black", text: "Titanium Dioxide", textColor: "white", qty: 3},
  { color: "white", text: "DUNGEON SYNTH", textColor: "black", qty: 5}
];
```

We want to have a dropdown to select a color, and a `filter` button.

When you click the `filter` button, the shirts should be filtered based on the
selected color.

**Hints:**
- You can use data attributes to store information (like color) on an HTML element
- when filtering, you can check if the data attributes match your selection
- show or hide an element based on whether it matches the criteria

## bonus 1

Generate the color filter options based on the shirt data.

## bonus 2

Create a form to add a shirt. All input elements can be text
inputs.*/


//Global variables
let select = document.querySelector('#colors')

let shirts = [
  { color: "red", text: "You are the CSS to my HTML", textColor: "yellow", qty: 5},
  { color: "blue", text: "Woof", textColor: "white", qty: 3},
  { color: "yellow", text: "I <3 JavaScript", textColor: "green", qty: 1},
  { color: "black", text: "Titanium Dioxide", textColor: "white", qty: 3},
  { color: "white", text: "DUNGEON SYNTH", textColor: "black", qty: 5}
];

let tcontainer = document.querySelector('.shirtContainer')


//filter by color:
let filterButton = document.querySelector('#filter')

function remove(){
  let cards = document.querySelectorAll('.card')
  for(let c = 0 ; c < cards.length; c++){
    cards[c].remove()
  }
}

filterButton.addEventListener('click', (e)=> {
  e.preventDefault()
  let selectedColor = select.value;
 
  remove()

  for(let i = 0 ; i <shirts.length; i++){
    if(shirts[i].color == selectedColor){
      let tshirtText = document.createElement('p')
      tshirtText.innerText = shirts[i].text;
      tshirtText.style.color = shirts[i].textColor;

    
      let tshirtContainer = document.createElement('div')
      tshirtContainer.classList.add("tshirtContainer")
      tshirtContainer.innerHTML = '<i class="fas fa-tshirt"></i>'
      tshirtContainer.style.color = shirts[i].color
    
      tshirtContainer.append(tshirtText)
    
      let card = document.createElement('div')
      card.classList.add('card')
      card.append(tshirtContainer)
      tcontainer.append(card)
    }
  }

 
})







//adding a new shirt





function update(){

  let options = select.querySelectorAll('option')

  //removing previous options
  for(let j = 0; j < options.length; j++){
    options[j].remove()
  }

  //adding first option --select your color
  let basicOption = document.createElement('option')
  basicOption.innerText = "Select your color"
  basicOption.value = "selectYourColor"
  select.append(basicOption)

  //creating new options based on tshirt database
  let colorArray = [];

  for(let i =0 ; i < shirts.length; i++){
    
    if(colorArray.includes(shirts[i].color)){
        continue
    }else{
      colorArray.push(shirts[i].color)
    }
  }

  for(let k = 0 ; k < colorArray.length; k++){
    let option = document.createElement('option')
    option.innerText = colorArray[k];
    option.value = colorArray[k];
    select.append(option) 
  }
  
}

update()



let newShirt = {};
let addButton = document.querySelector("#addButton")
let colorField = document.querySelector('#color')
let textField = document.querySelector('#text')
let textColorField = document.querySelector('#textColor')
let qtyField = document.querySelector('#qty')

addButton.addEventListener('click', (e)=>{
  e.preventDefault()
  newShirt.color = colorField.value.toLowerCase();
  newShirt.text = textField.value;
  newShirt.textColor = textColorField.value.toLowerCase();
  newShirt.qty = Number(qtyField.value)
  shirts.push(newShirt)
  console.log(shirts)
  newShirt = {}
  update()
})

//Navbar colors

let navLinks = document.querySelector('.navLinks')
let links = navLinks.querySelectorAll('a')
console.log(links)

function neutralColors(){
  for(let i = 0; i < links.length; i++){
    links[i].style.color = "#ddd"
  }
}

for(let link = 0 ; link < links.length ; link++){
  links[link].addEventListener('click', (e)=>{
    e.preventDefault()
    neutralColors()
    links[link].style.color = "rgb(238, 58, 58)"
  })
  
}


//disable context menu on tcontainer
tcontainer.addEventListener('contextmenu', (e)=>{
  e.preventDefault()
}, false)