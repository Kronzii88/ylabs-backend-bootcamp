const validator = require('./validator');
const notation = require('./notation');
// import * as validator from './validator';
// const validator = import("./validator")

//function di file validator.js
const validateString = validator.stringValidate('ini data string');
const validateNumber = validator.numValidate(10);
const validateBoolean = validator.boolValidate(5>2);

// function dari file notation.js
const floatConversion = notation.floatToNum(5.3);
const stringConversion = notation.stringToNum("50");
const cheker = notation.oddEvenChecker(10);

console.log(validateString);
console.log(validateNumber);
console.log(validateBoolean);
console.log(floatConversion);
console.log(stringConversion);
console.log(cheker);