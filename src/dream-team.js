const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members) || members.length == 0) return false;
  
  let onlyStringArray = members.filter((element) => {
    return typeof (element) === 'string';
  });

  if (onlyStringArray.length == 0) return false;
  
  let firstLettersArray = onlyStringArray.map((element) => {
    return element.trim()[0].toUpperCase();
  }); 
  
  return firstLettersArray.sort().join(''); 
};
