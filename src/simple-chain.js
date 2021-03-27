const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],

  getLength() {
    return this.arr.length;
  },

  addLink(value) {
    this.arr.push(`( ${value} )`);
    return this;
  },

  removeLink(position) {
    if (
      typeof position !== "number" ||
      position < 1 ||
      position > this.arr.length - 1
    ) {
      this.arr = [];
      throw Error;
    } else {
      this.arr.splice(position - 1, 1);
      return this;
    }
  },

  reverseChain() {
    this.arr.reverse();
    return this;
  },

  finishChain() {
    resultArr = this.arr.slice();
    this.arr.length = 0;
    return resultArr.join("~~");
  },
};

module.exports = chainMaker;
