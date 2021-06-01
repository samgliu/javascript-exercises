const sumAll = function(start,end) {
    let res = 0;
    if (!(typeof(end) == "number") || !(typeof(start) == "number") || start < 0 || end < 0){
        return "ERROR";
    }
    if (start > end){
        let temp = start;
        start = end;
        end = temp;
    }
    for (let i = start; i <= end; i++){
        res += i;
    }
    return res;
};

module.exports = sumAll;
