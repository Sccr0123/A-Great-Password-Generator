//Constants
const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const specialCharcters = "!@#$%^&*()";

// Assignment Code
var generateBtn = document.querySelector("#generate");

var criteria = {
  lowerAlpha: false,
  upperAlpha: false,
  numeral: false,
  symbol: false,
  length: 0,
  reset: function(){
    this.lowerAlpha = false;
    this.upperAlpha = false;
    this.numeral = false;
    this.symbol = false;
    this.lenght = 0;
  }
};

function getCriteria() {
  criteria.lowerAlpha = window.confirm("Do You Want To Include A Lowercase Letter?");

  criteria.upperAlpha = window.confirm("Do You Want To Include An Uppercase Letter?");

  criteria.numeral = window.confirm("Do You Want To Include A Number?");

  criteria.symbol = window.confirm("Do You Want To Include A Symbol?");

  criteria.length = window.prompt("Please Select A Length Between 8 and 128.");

  if (criteria.lowerAlpha === false && criteria.upperAlpha === false && criteria.numeral === false && criteria.symbol === false) {
    window.alert("Please Select At Least One Option To Include!");
    getCriteria();
  };

  if (criteria.length < 8 || criteria.length > 128) {
    window.alert("Invalid Length. Please Try Again.");
    getCriteria();
  }
};

function generatePassword() {
  criteria.reset();
  getCriteria();
  console.log(criteria);

};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
