const palindromes = function (text) {
    let forwardText = text.split("").filter(item => /[a-zA-Z0-9]/.test(item));
    let textProxy = [...forwardText];
    let reverseText = textProxy.reverse();
    return forwardText.toString().toLowerCase() === reverseText.toString().toLowerCase()
}

// Do not edit below this line
module.exports = palindromes;
