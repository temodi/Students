let duplicates = [
    { name: 'Mr. 1', mobile: 36301234567 },
    { name: 'Mr. 2', mobile: 36301234567 },
    { name: 'Mr. 3', mobile: 36301234567 },
    { name: 'Ms. 1', mobile: 36301234568 },
    { name: 'Ms. 2', mobile: 36301234568 },
    { name: 'Ms. 3', mobile: 36301234568 },
    { name: 'Mrs. 1', mobile: 36301234569 }
];


function removeDuplicates(arr, prop) {
    let newArray = [];
    let lookUp = {};

    for(let i in arr) {
        lookUp[arr[i][prop]] = arr[i];
    }
    for(i in lookUp) {
        newArray.push(lookUp[i]);
    }
    return newArray;
}

let unique = removeDuplicates(duplicates, 'mobile');
console.log(unique);