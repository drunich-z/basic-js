const CustomError = require("../extensions/custom-error");

module.exports = function countCats(array) {
  let count = 0;
  if (!array) return 0;
  array.forEach((element) => {
    element.forEach((elem) => {
      if (elem == "^^") count += 1;
    });
  });
  return count;
};
