const findTheOldest = function(arr) {
    arr.forEach(guy => {
        if (!guy.hasOwnProperty('yearOfDeath')) {
            const d = new Date();
            guy.yearOfDeath = d.getFullYear();
        }
    });
    const sorted = arr.sort(function(a, b) {
        const lastGuy = a.yearOfDeath - a.yearOfBirth;
        const nextGuy = b.yearOfDeath - b.yearOfBirth;
        return lastGuy > nextGuy ? -1 : 1;
     });
    return sorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
