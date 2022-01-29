let myPhoneNumbers = [
    3630792765, 3630369549, 3620797249, 3670129465, 3630735165, 3630799685,
    3630294765, 3630739572, 3630792388, 3630792947, 3630798965, 3630799284,
    3630793325, 3630799685, 3630194265,
  ];
  let myNames = [
    "Bandobras Underhill",
    "Robin Gardner",
    "Isembold Whitfoot",
    "Donnamira Galbassi",
    "Bungo Baggins",
    "Will Sandyman",
    "Isengrim Proudfoot",
    "Frodo Baggins",
    "Amaranth Gaukrogers",
    "Trahand Bunce",
    "Will Sandyman",
    "Halfred Goodchild",
    "Bilbo Baggins",
    "Will Sandyman",
    "Belba Sandheaver",
  ];

  function createPhoneBook(names, phoneNumbers) {
    // formalis parameterek
    let phoneBook = [];

    for (let i = 0; i < names.length; i++) {
      let person = {
        name: names[i],
        mobile: phoneNumbers[i],
      };
      phoneBook.push(person);
    }

    return phoneBook;
  }

  let myPhoneBook = createPhoneBook(myNames, myPhoneNumbers); // aktualis parameterek

  console.log('Telefonkonyv', myPhoneBook);

  let tkonyv = document.querySelector('#telefonKonyv')
  


  for(let i =0 ; i < myPhoneBook.length ; i++){
        let newRow = document.createElement('tr')
        let newtd1 = document.createElement('td')
        let newtd2 = document.createElement('td')
        let newtd3 = document.createElement('td')
        let newtd4 = document.createElement('td')
        let newButton = document.createElement('button')
        let athuz = document.createElement('button')
        newButton.innerText = "X";
        athuz.innerText = "Kihúz"

        newButton.onclick = ()=>{
            console.log(newRow)
            newRow.remove()
        }

        athuz.onclick = ()=> {
            newtd1.classList.toggle('tdclass')
            newtd2.classList.toggle('tdclass')
        }
        
        newRow.onmouseover = ()=> {
            newRow.style.backgroundColor = "red";
        }
        newRow.onmouseout = () => {
            newRow.style.backgroundColor = "rgba(0,0,0,0)"
        }
        newtd1.innerText = myPhoneBook[i].name;
        newtd2.innerText = myPhoneBook[i].mobile;
        newtd3.append(newButton)
        newtd4.append(athuz)

       

        newRow.append(newtd1, newtd2, newtd3, newtd4)
        tkonyv.append(newRow)
  }