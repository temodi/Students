/*Hozzunk létre egy olyan fv-t. Amely egy tömb elemei között (parameterbol jon) kiszámolja a %os változást (kerekitsuk). 
És egy tömbbel tér vissza, amiben a változások vannak. 

Példa hívás:
percentageChanges([1000, 1300, 990]) // eredmény: ["30%", "-24%"]*/

let tomb = [1000, 1300, 1600, 400];



function differenceInPercentage(arr){
    let differenceArr = [];
    for(let i = 0 ; i < arr.length; i++){
        let difference = arr[i+1]/(arr[i] / 100) - 100;
        if(isNaN(difference)){
            
        }else{
            differenceArr.push(`${Math.floor(difference)}%`)
        }
    }
    return console.log(differenceArr)
}

differenceInPercentage(tomb)
