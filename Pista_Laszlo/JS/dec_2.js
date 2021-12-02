let otosL = [5, 90, 6];
let hatosL = [6, 45, 6];
let skandiL = [7, 35, 6];
let euroM = [5, 50, 10]

function lottoHuzas(lotto) {
    let nyertes = [];
    let joker = []
    for (let i = 0; i < lotto[0]; i++) {
        nyertes.push(Math.floor(Math.random() * (lotto[1] - 1 + 1)))

    }
    if (lotto == euroM) {
        joker.push(Math.floor(Math.random() * (lotto[2] - 1 + 1)))
        joker.push(Math.floor(Math.random() * (lotto[2] - 1 + 1)))
    } else {
        joker.push(Math.floor(Math.random() * (lotto[2] - 1 + 1)))
    }

    return `a nyertes szamok ${nyertes} es a joker ${joker}`

}