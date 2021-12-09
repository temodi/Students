let couponCode = window.prompt("Kupon kód:")

let basket = 25000;

let coupon = [{
        code: "XMAS10",
        type: "percent",
        value: 0.1
    },
    {
        code: "SANTA1000",
        type: "fix",
        value: 1000
    }
]

function fix(a, b) {
    return a - b
}

function percent(a, b) {
    return a - (a * b)
}


function couponChecker() {
    for (i = 0; i < coupon.length; i++) {
        if (coupon[i].code === couponCode && coupon[i].type === "fix") {
            return console.log(fix(basket, coupon[i].value) + "Ft")
        } else if (coupon[i].code === couponCode && coupon[i].type === "percent") {
            return console.log(percent(basket, coupon[i].value) + "Ft")
        }
    }
    return console.log("Nincs ilyen kupon")
}

couponChecker()