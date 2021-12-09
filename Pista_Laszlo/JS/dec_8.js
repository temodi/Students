let phoneNumbers = [3630792765, 3630369549, 3620797249, 3670129465, 3630735165, 3630799685, 3630294765, 3630739572, 3630792388, 3630792947, 3630798965, 3630799284, 3630793325, 3630799685, 3630194265, ];
let names = ['Bandobras Underhill', 'Robin Gardner', 'Isembold Whitfoot', 'Donnamira Galbassi', 'Bungo Baggins', 'Will Sandyman', 'Isengrim Proudfoot', 'Frodo Baggins', 'Amaranth Gaukrogers', 'Trahand Bunce', 'Will Sandyman', 'Halfred Goodchild', 'Bilbo Baggins', 'Will Sandyman', 'Belba Sandheaver'];

let myPhoneBook = []

function createPhoneBook(name, pNumber) {

    let newPerson = {}
    for (let i = 0; i < names.length; i++) {
        let newPerson = {
            name: names[i],
            mobile: phoneNumbers[i]
        }
        myPhoneBook.push(newPerson)
    }
    return console.log(myPhoneBook)

}

createPhoneBook(names, phoneNumbers)

function add(phonebook, name, mobile) {
    let person = {
        name: name,
        mobile: mobile
    }
    phonebook.push(person)
    if (mobile == undefined) {
        window.alert("A mobil szám megadása Kötelező!!! b+")
        phonebook.pop()
    }



}

add(myPhoneBook, "Robi", "+447927624309")

add(myPhoneBook, "Laci", "+447927624309")


function findByNumber(myNumber) {
    for (let i = 0; i < myPhoneBook.length; i++) {
        if (myPhoneBook[i].mobile == myNumber) {
            return console.log(myPhoneBook[i].name, myPhoneBook[i].mobile)
        }

    }
    return null
}

findByNumber("+447927624309")

function findByName(name) {
    for (let i = 0; i < myPhoneBook.length; i++) {
        if (myPhoneBook[i].name == name) {
            return console.log(myPhoneBook[i].name, myPhoneBook[i].mobile)
        }

    }
    return null
}

findByName("Robi")


function findIndex(name) {
    for (let i = 0; i < myPhoneBook.length; i++) {
        if (myPhoneBook[i].name == name) {
            return console.log(i + 1)
        }

    }
    return null
}

findIndex("Robi")




function findByCallBack(fonbukk, name) {
    for (let i = 0; i < fonbukk.length; i++) {
        if (fonbukk[i].name == name) {
            return console.log(fonbukk[i].name, fonbukk[i].mobile)
        }

    }
    return null
}

console.log(findByCallBack(myPhoneBook, function(bejegyzes) { bejegyzes.name === "Robi" }))