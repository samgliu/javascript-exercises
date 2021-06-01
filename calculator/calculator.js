const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((a, b) => a + b, 0);
};

const multiply = function(arr) {
  return arr.reduce((a, b) => a * b, 1);
};

const power = function(a, b) {
	return a ** b;
};


const factorial = function(a) {
  if (a == 0){
    return 1;
  } else {
    let res = 1;
    while (a > 0){
      res *= (a--);
    }
    return res;
  }
}
/* const factorial = function(a) {
	factorial(a);
};

function factorial(a){
  if (a == 1){
    return 1;
  }
  return (a * factorial (a - 1))
} */

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
