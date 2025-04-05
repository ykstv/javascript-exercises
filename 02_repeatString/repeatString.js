const repeatString = function(textToRepeat, numberOfTimes) {
    let result = "";
    if (numberOfTimes >= 0) {
        for (let i = 1; i <= numberOfTimes; i++) {
            result += textToRepeat;
        }
    }
    else {
        result = "ERROR"
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
