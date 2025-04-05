const removeFromArray = function(inputArray, ...allItemsToRemove) {

    for (const itemToRemove of allItemsToRemove) {
        const arrayNew = inputArray.filter(function(item) {
            return item !== itemToRemove;
        })
        inputArray = arrayNew;
    }

    return inputArray;
};

console.log(removeFromArray([1, 2, 3, 4], 3, 2));

// Do not edit below this line
module.exports = removeFromArray;
