// Characters required for password

var characters = {
  charUpper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  charLower: "abcdefghijklmnopqrstuvwxyz",
  charNumber: "0123456789",
  charSymbol: "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~",
}

var checkbox = {
  upper: document.querySelector("#upper"),
  lower: document.querySelector("#lower"),
  number: document.querySelector("#number"),
  symbol: document.querySelector("#symbol"),
}



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
