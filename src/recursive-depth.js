const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let countDepth = 0;
    if (Array.isArray(arr)) {
      arr.forEach( elem => {
        let depth = this.calculateDepth(elem);
        countDepth = Math.max(countDepth, depth);
      });
      return countDepth += 1;
    } else {
      return 0;
    }
  }
};