const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw Error;
  let resultArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "--discard-next") {
      i++;
      continue;
    }

    if (arr[i] == "--discard-prev" && arr[i - 2] == "--discard-next") continue;
    if (arr[i] == "--discard-prev") {
      resultArray.pop();
      continue;
    }

    if (arr[i] == "--double-next" && i == arr.length - 1) continue;
    if (arr[i] == "--double-next") {
      resultArray.push(arr[i + 1]);
      continue;
    }

    if (arr[i] == "--double-prev" && i == 0) continue;
    if (arr[i] == "--double-prev" && arr[i - 2] == "--discard-next") continue;
    if (arr[i] == "--double-prev") {
      resultArray.push(arr[i - 1]);
      continue;
    }

    resultArray.push(arr[i]);
  }
  return resultArray;
};
