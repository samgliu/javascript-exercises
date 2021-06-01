const removeFromArray = function() {
    if (arguments.length > 0){
        for (let i = 1; i < arguments.length; i++){
            for (let j = 0; j < arguments[0].length; j++){
                if (arguments[i] === arguments[0][j]){
                    console.log(j);
                    console.log("arr: " + arguments[0]);
                    arguments[0].splice(j, 1); 
                }
            }
        }
        return arguments[0];
    }
};

module.exports = removeFromArray;
