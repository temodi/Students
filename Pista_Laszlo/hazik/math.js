let tomb1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let math = {
    min: function(a, b) { return Math.min(a, b) },
    max: function(a, b) { return Math.max(a, b) },
    isAverage: function(tomb) {
        let sum = 0;
        for (let i = 0; i < tomb.length; i++) {
            sum += tomb[i]
        }
        return sum / tomb.length
    },
    isIntNumber: function(value) {
        let parsedValue = parseInt(value);
        if (parsedValue && !isNaN(parsedValue)) {
            return true;
        }
    }
}



let math2 = {
    min: function(a, b) {
        if (a <= b) {
            return a;
        } else {
            return b
        }
    },
    max: function(a, b) {
        if (a >= b) {
            return a;
        } else {
            return b;
        }
    }
}