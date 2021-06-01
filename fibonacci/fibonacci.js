const fibonacci = function(num) {
    let pre = 0;
    let current = 1;
    if (num <= 0 ||isNaN(num)){
        return "OOPS";
    }
    while (num > 1){
        let temp = current;
        current = current + pre;
        pre = temp;
        num--;
    }
    return current;
};

module.exports = fibonacci;
