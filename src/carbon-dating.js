const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  let k = 0.693 / HALF_LIFE_PERIOD;
  let N = parseFloat(sampleActivity);
  if (typeof sampleActivity === "string" && N > 0 && N <= MODERN_ACTIVITY ) {
    result = Math.log(MODERN_ACTIVITY / N) / k;
    result = Math.ceil(result);
    return result
  } else {
    return false;
  }
};
