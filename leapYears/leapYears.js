const leapYears = function(num) {
    if (num % 4 == 0){
        if ( num % 100 == 0 && num % 400 != 0){
            return false;
        }
        return true;
    } else {
        return false;
    }
};

module.exports = leapYears;
