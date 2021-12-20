let duplicates_test = [
    { name: 'Mr. 2', mobile: 36301234567 },
    { name: 'Ms. 2', mobile: 36301234568 },
    { name: 'Mr. 3', mobile: 36301234567 },
    { name: 'Ms. 1', mobile: 36301234568 },
    { name: 'Ms. 2', mobile: 36301234568 },
    { name: 'Ms. 3', mobile: 36301234568 },
    { name: 'Mrs. 1', mobile: 36301234569 },
    { name: 'Mr. 1', mobile: 36301234567 },
    { name: 'Mr. 3', mobile: 36301234567 },
    { name: 'Ms. 1', mobile: 36301234568 },
    { name: 'Ms. 3', mobile: 36301234568 },
    { name: 'Mr. 2', mobile: 36301234567 },
    { name: 'Mrs. 1', mobile: 36301234569 },
    { name: 'Mr. 1', mobile: 36301234567 },
    { name: 'Mr. 2', mobile: 36301234567 },
    { name: 'Ms. 2', mobile: 36301234568 },
    { name: 'Mr. 3', mobile: 36301234567 },
    { name: 'Ms. 1', mobile: 36301234568 },
    { name: 'Ms. 2', mobile: 36301234568 },
    { name: 'Ms. 3', mobile: 36301234568 },
    { name: 'Mrs. 1', mobile: 36301234569 },
    { name: 'Mr. 1', mobile: 36301234567 },
    { name: 'Mr. 3', mobile: 36301234567 },
    { name: 'Ms. 1', mobile: 36301234568 },
    { name: 'Ms. 3', mobile: 36301234568 },
    { name: 'Mr. 2', mobile: 36301234567 },
    { name: 'Mrs. 1', mobile: 36301234569 },
    { name: 'Mr. 1', mobile: 36301234567 }
];


function sortedDuplicateRemover(phoneBook) {
    let currentCheck = phoneBook[0];
    for (let i = 1; i < phoneBook.length; i++) {
        if (currentCheck.mobile === phoneBook[i].mobile) {
            phoneBook.splice(i, 1);
            i--;
        } else {
            currentCheck = phoneBook[i];
        }
    }
    return phoneBook;
}

// console.log(sortedDuplicateRemover(duplicates_test))

function dupli2(phonebook) {
    for (let i = 0; i < phonebook.length; i++) {
        for ( let j = i+ 1; j < phonebook.length; j++) {
            if (phonebook[i].mobile === phonebook[j].mobile) {
                phonebook.splice(j, 1);
                j--;
            }
        }
        
    }
    return phonebook;
}

// console.log(dupli2(duplicates_test));