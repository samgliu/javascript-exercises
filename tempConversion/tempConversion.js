const ftoc = function(num) {
  return Math.floor(((num - 32) * 5 / 9) * 10 / 10);
};

const ctof = function(num) {
  return Math.floor((num * 1.8) * 10 / 10) + 32;
};

module.exports = {
  ftoc,
  ctof
};
