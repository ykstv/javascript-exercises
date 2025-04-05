const reverseString = function(input) {
    let textToArray = input.split("");
    let reversedArray = textToArray.reverse();
    let reversedText = reversedArray.join("");
    return reversedText;
};

// Do not edit below this line
module.exports = reverseString;
