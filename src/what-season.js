const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  if(Object.prototype.toString.call(date) === "[object Date]") {
    let seasons = {
      1: "winter",
      2: "winter",
      3: "spring", 
      4: "spring", 
      5: "spring", 
      6: "summer",
      7: "summer",
      8: "summer",
      9: "autumn", 
      10: "autumn",
      11: "autumn",
      12: "winter"
    };
    return seasons[date.getMonth()+1];
  } else  {
    throw Error;
  };
};
