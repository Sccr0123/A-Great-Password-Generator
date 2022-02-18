//Constants
const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const specialCharcters = "!@#$%^&*()";

// Assignment Code
var generateBtn = document.querySelector("#generate");
var attempt = "";
var acceptedPassword = "Test Password";

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

function createPassword() {
  var availableCharcters = "";
  var generatedPass = "";
  attempt = "";

  //Adds lowerAlphabet To Available Characters If Selected
  if (criteria.lowerAlpha === true) {
    availableCharcters = availableCharcters + lowerAlphabet;
  };

  //Adds upperAlphabet To Available Characters If Selected
  if (criteria.upperAlpha === true) {
    availableCharcters = availableCharcters + upperAlphabet;
  };

  //Adds numbers To Available Characters If Selected
  if (criteria.numeral === true) {
    availableCharcters = availableCharcters + numbers;
  };

  //Adds specialCharacters To Available Characters If Selected
  if (criteria.symbol === true) {
    availableCharcters = availableCharcters + specialCharcters;
  };

  //Creates Password With Correct Length
  for (var i = 0; i < criteria.length; i++){
    generatedPass = generatedPass + availableCharcters.charAt(Math.floor(Math.random() * availableCharcters.length));
  }

  return generatedPass;
};

function checkPassword(currentPassword) {
  //Check lowerAlpha
  if (criteria.lowerAlpha === true ) {
    for (var i = 0; i < currentPassword.length; i++){
      var result1 = lowerAlphabet.includes(currentPassword.charAt(i));
      if (result1 === true) {
        break;
      }
    }
    if (result1 === false){
      generatePassword();
    }
  }else {
    var result1 = true;
  };

  //Check upperAlpha
  if (criteria.upperAlpha === true ) {
    for (var i = 0; i < currentPassword.length; i++){
      var result2 = upperAlphabet.includes(currentPassword.charAt(i));
      if (result2 === true) {
        break;
      }
    }
    if (result2 === false){
      generatePassword();
    }
  }else {
    var result2 = true;
  };

  //Check numeral
  if (criteria.numeral === true ) {
    for (var i = 0; i < currentPassword.length; i++){
      var result3 = numbers.includes(currentPassword.charAt(i));
      if (result3 === true) {
        break;
      }
    }
    if (result3 === false){
      generatePassword();
    }
  }else {
    var result3 = true;
  };

  //Check symbol
  if (criteria.symbol === true ) {
    for (var i = 0; i < currentPassword.length; i++){
      var result4 = specialCharcters.includes(currentPassword.charAt(i));
      if (result4 === true) {
        break;
      }
    }
    if (result4 === false){
      generatePassword();
    }
  }else {
    var result4 = true;
  };

  if (result1 === true && result2 === true && result3 === true && result4 === true) {
    return currentPassword;
  }
};

function generatePassword() {
  attempt = createPassword();

  acceptedPassword = checkPassword(attempt);

  return acceptedPassword;
};

// Write password to the #password input
function writePassword() {
  criteria.reset();
  getCriteria();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
