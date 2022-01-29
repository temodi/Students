/*# fridge

We want to model how foodstuff goes bad in the fridge.

The contents of the fridge are stored in an array. Each shelf of
the fridge is also an array. Each shelf contains a list of foodstuff.


```js
let fridge = [
  [  // first shelf
    {
      name: "milk",
      daysRemain: 4
    },
    {
      name: "yogurt",
      daysRemain: 6
    }
  ],


  [  // second shelf
    {
      name: "salami",
      daysRemain: 3
    },
    {
      name: "beer",
      daysRemain: 8
    }
  ],


  [  // third shelf
    {
      name: "lunch",
      daysRemain: 2
    },
    {
      name: "tomatoes",
      daysRemain: 4
    },
    {
      name: "cucumber",
      daysRemain: 3
    }
  ]
];
```

We want to generate an HTML like this:

```html
<div id="fridge">
  <div class="shelf">
    <div class="foodstuff">milk</div>
    <div class="foodstuff">yogurt</div>
  </div>
  <div class="shelf">
    <div class="foodstuff">salami</div>
    <div class="foodstuff">beer</div>
  </div>
  <div class="shelf">
    <div class="foodstuff">lunch</div>
    <div class="foodstuff">tomatoes</div>
    <div class="foodstuff">cucumber</div>
  </div>
</div>
```

Suppose we have a `next day` button. When you click the button, every foodstuff
should have its `daysRemain` decreased by one.

Once a foodstuff `deysRemain` is less than `4`, color the `div` of the foodstuff
yellow. If it reaches `1`, color is red. If it reaches `0`, color it with black.

**Example**

![fridge.gif](fridge.gif)

**Hints**

- Create the static HTML first, and then try to generate it
  dynamically.
- You will need to connect the data to the actual DOM elements. This  
  can actually be a difficult problem. You must use `createElement`
  togenerate the items, in order to have the DOM reference.
- It is much-much easier to recreate the whole DOM tree, than to try
  to manipulate the proper items.

## bonus 1

Display the number of days remaining in parentheses following the name
of the foddstuff.

## bonus 2

Create a `throw out` button.  */


let fridge = [
  [  // first shelf
    {
      name: "milk",
      daysRemain: 4,
      display: true
    },
    {
      name: "yogurt",
      daysRemain: 6,
      display: true
    }
  ],


  [  // second shelf
    {
      name: "salami",
      daysRemain: 3,
      display: true
    },
    {
      name: "beer",
      daysRemain: 8,
      display: true
    }
  ],


  [  // third shelf
    {
      name: "lunch",
      daysRemain: 2,
      display: true
    },
    {
      name: "tomatoes",
      daysRemain: 4,
      display: true
    },
    {
      name: "cucumber",
      daysRemain: 3,
      display: true
    }
  ]
];

let fridgeBox = document.querySelector('.upperPart')
let nextDayButton = document.querySelector('#ndButton')


//function clear

function clear(){
  let shelves = fridgeBox.querySelectorAll('.shelf')
  for(let i = 0 ; i < shelves.length ; i++){
    shelves[i].remove()
  }
}

//function fridge display items

function fridgeFg(){
  clear()

  for(let i =0 ; i < fridge.length; i++){
    let shelf = document.createElement('div')
    shelf.classList.add('shelf')
    fridgeBox.append(shelf)
    console.log(fridge[i])
    for(let j = 0; j < fridge[i].length; j++){
      let item = document.createElement('div')
      item.classList.add('item')
      let dayRemain = document.createElement('p')
      dayRemain.innerText= fridge[i][j].daysRemain
      let product = document.createElement('p')
      product.innerText = fridge[i][j].name;

      //display it or not
      if(fridge[i][j].display == false){
        continue
      }else{
        shelf.append(item)
      }

      //product color indicator + throw out button
      if(fridge[i][j].daysRemain >= 4){
        item.style.backgroundColor = "green";
      } else if( fridge[i][j].daysRemain < 4 && fridge[i][j].daysRemain > 1){
        item.style.backgroundColor = "#cbb500";
      } else if( fridge[i][j].daysRemain == 1){
        item.style.backgroundColor = "red";
      } else{
        item.style.backgroundColor = "black";
        let throwButton = document.createElement('button')
        throwButton.innerText = "binIt"
        throwButton.type = "button"
        item.append(throwButton)
        throwButton.addEventListener('click', ()=>{
          fridge[i][j].display = false
          item.remove()
        })
      }

      
      item.append(product, dayRemain)
     
     
      
    }
  }
}
fridgeFg()


//function next day button

nextDayButton.addEventListener('click', ()=>{
  for(let i = 0 ; i < fridge.length ; i++){
    for(let j = 0 ; j < fridge[i].length; j++){
      fridge[i][j].daysRemain -- ;
    }
  }
  fridgeFg()
})


//add item

let addButton = document.querySelector('#addButton')
let itemName = document.querySelector('#itemName')
let date = document.querySelector('#expDate')
let onShelf = document.querySelector('#shelfNumber')

let newItem = {}

addButton.addEventListener('click', (e)=>{
  e.preventDefault()
  let shelfto =  parseInt(onShelf.value) - 1;
  newItem.name = itemName.value;
  newItem.daysRemain = parseInt(date.value)
  newItem.display = true
  console.log(newItem)
  console.log(shelfto)
  fridge[shelfto].push(newItem)
  newItem = {}
  fridgeFg()
  itemName.value = '';
  date.value = '';
  onShelf.value = ''
})

//door visibility

let door = document.querySelector('.door');

door.addEventListener('mouseenter', ()=>{
  door.style.display = "none" 
})

door.addEventListener('mouseleave', ()=>{
  door.style.display = "block"
} )


