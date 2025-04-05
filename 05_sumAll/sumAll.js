const sumAll = function(a, b) {
    let sum = 0;
    if (Number.isInteger(a)
        && a > 0
        && Number.isInteger(b)
        && b > 0
        && b > a) {
            for (let i = a; i <= b; i++) {
                sum += i;
            }
        }
    else if (a > b) {
        for (let i = b; i <= a; i++) {
            sum += i;
        } 
    }
    else sum = "ERROR";
    return sum;
};
console.log(sumAll(2,4));
// Do not edit below this line
module.exports = sumAll;
