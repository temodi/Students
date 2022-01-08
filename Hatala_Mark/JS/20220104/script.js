/* function logger() {
    console.log('My name is Mark');
}

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    //console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(4, 2);
console.log(appleOrangeJuice);

function calcAge1(birthYear) {
    return age = 2037 - birthYear;
};

const age1 = calcAge1(1994);
console.log(age1);

const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1994);
console.log(age1, age2);

//arrow function

const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1994);
console.log(age3);

const yearsUntilRetirement = birthYear => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return retirement;
}

console.log(yearsUntilRetirement(1994));
 */

/* const calcAverage = (a, b, c) => (a + b + c) / 3;

const avgDolphins = calcAverage(44, 23, 71);
const avgKoalas = calcAverage(65, 54, 49);
//console.log(avgDolphins, avgKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins > avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`)
    } else { console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`) }
}

console.log(checkWinner(avgDolphins, avgKoalas)); */



//BMI

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    },
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

mark.calcBMI();
john.calcBMI();


//console.log(`${mark.calcBMI()}` > `${john.calcBMI()}` ? `${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${john.fullName}'s (${john.calcBMI()})` : `${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${mark.fullName}'s (${mark.calcBMI()})`)
//console.log(mark.bmi, john.bmi);

///////////////classes /////////////////////////

// class expression
//const PersonCL = class{}


// class declaration
class PersonCL {
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

    calcAge() {
        console.log(2037 - this.birthYear);
    }

    greet() {
        console.log(`Hey ${this.firstName}`);
    }
}

const jessica = new PersonCL('Jessica', 1996)
console.log(jessica);
jessica.calcAge();


/* PersonCL.prototype.greet = function() {
    console.log(`Hey ${this.firstName}`);
} */

jessica.greet();

