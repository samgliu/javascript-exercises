const findTheOldest = function(arr) {
    let sorted = arr.sort((a , b) => getAge(a.yearOfDeath, a.yearOfBirth) > getAge(b.yearOfDeath, b.yearOfBirth) ? -1 : 1);
    return sorted[0];
};

const getAge = function(d, b){
    if (!d){
        d = 2021;
    }
    return d - b;
}

module.exports = findTheOldest;
