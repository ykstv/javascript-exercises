const fibonacci = function(input) {
    let num = Number(input)
    let current = 1;
    let prev = 0;
    if (num === 0) {return 0}
    else if (num === 1) {return 1}
    else if (num > 1) {
        for (let i = 2; i <= num; i++) {
            sum = current + prev;
            prev = current;
            current = sum;
        }
        return sum}
    else return "OOPS";
};

// Do not edit below this line
module.exports = fibonacci;
