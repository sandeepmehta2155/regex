const regex = /^[6-9]\d{9}$/gm;
const newReg = /^([\w]+)$/gm;

const newRegForOptionalAddress = /^([\w? ]+)$/gm;
const regexEmail = /^([a-zA-Z0-9\._-]+)@([a-zA-Z0-9]+)\.([a-zA-Z0-9])/;

let regexEmailTwo =
  /^([a-z0-9\.-]+)@([a-z0-9-]+)\.([a-z]{2,20})(.[a-z]{2,10})?$/;
// console.log(regex.test("7041818312"));
console.log(regexEmailTwo.test("saneep@hotmail.co.in"));
console.log(regexEmailTwo.test("saneep@gmail.com"));

console.log(newReg.test("asasas12 "));
console.log(newRegForOptionalAddress.test("asasas asa"));
