const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  if (arr.length > 0) {
    return arr.reduce((total, currentItem) => {
      return total + currentItem}
    )}
  else return 0
};

const multiply = function(arr) {
  return arr.reduce((total, currentItem) => {
    return total * currentItem}
  )
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
  let arr = [];
  if (a == 0) {
    return 1;
  }
  else {
    for (let i = 1; i <= a; i++) {
        arr.push(i);
    };
    return arr.reduce((total, currentItem) => {
      return total * currentItem}
    )
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
