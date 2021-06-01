const palindromes = function (a) {
    a = a.replace(/[^A-Za-z]/g, '').toLowerCase();
    //console.log(a);
    for (let i = 0; i < (a.length / 2 + 1); i++){
        if (!(a.charAt(i) === a.charAt( a.length - i - 1))){
            return false;
        }
    }
    return true;
};

module.exports = palindromes;
