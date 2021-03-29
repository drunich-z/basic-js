const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(word, key) {
    if (!word && !key) throw Error();
    word = word.toUpperCase();
    key = key.toUpperCase();
    let result = [];
    for (let i = 0, j = 0; i < word.length; i++) {
      if (word[i].match(/[A-Z]/)) {
        result.push(
          String.fromCharCode(
            ((word[i].charCodeAt(0) -
              "A".charCodeAt(0) +
              (key[j % key.length].charCodeAt(0) - "A".charCodeAt(0))) %
              26) +
              "A".charCodeAt(0)
          )
        );
        j++;
      } else {
        result.push(word[i]);
      }
    }
    return this.direct ? result.join("") : result.reverse().join("");
  }

  decrypt(word, key) {
    if (!word && !key) throw Error();
    word = word.toUpperCase();
    key = key.toUpperCase();
    let result = [];
    for (let i = 0, j = 0; i < word.length; i++) {
      if (word[i].match(/[A-Z]/)) {
        result.push(
          String.fromCharCode(
            ((word[i].charCodeAt(0) -
              "A".charCodeAt(0) +
              (26 - (key[j % key.length].charCodeAt(0) - "A".charCodeAt(0)))) %
              26) +
              "A".charCodeAt(0)
          )
        );
        j++;
      } else {
        result.push(word[i]);
      }
    }
    return this.direct ? result.join("") : result.reverse().join("");
  }
}
module.exports = VigenereCipheringMachine;
