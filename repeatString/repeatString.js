const repeatString = function(input, time) {
    let result = "";
    if (time < 0){
        return "ERROR"
    }
    for (let i = 0; i < time; i++){
        result += input;
    }
    return result;
};

module.exports = repeatString;
