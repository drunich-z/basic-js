const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let t = Math.pow(2, disksNumber) - 1;
  let s = Math.floor(t / (turnsSpeed / 3600));
  return {
    turns: t,
    seconds: s,
  };
};
