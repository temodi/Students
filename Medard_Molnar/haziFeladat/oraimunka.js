function random(min, max) {
    
    return  Math.floor(Math.random()*(max - min + 1) + min);
}
let kockaArray=[];

function dice(times) {
    let dice=0;
    let egyes = 0;
    let kettes = 0;
    let harmas = 0;
    let negyes = 0;
    let otos = 0;
    let hatos = 0;
    for (let i = 0; i < times; i++) {
       dice= random(1, 6)
        switch (dice) {
            case 1: egyes++
                break;
            case 2: kettes++
                break;
            case 3: harmas++
                break;
            case 4: negyes++
                break;
            case 5: otos++
                break;
            case 6: hatos++
                break;

        }
    }
    kockaArray.push(egyes,kettes,harmas,negyes,otos,hatos)

}
dice(10000)

console.log(kockaArray)