
// function to generate the password based on the selected criteria

function generatePassword() {
  var text = "";
  var possible = "";

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

  // ensuring password length is between 8 and 128

  var passwordLength = document.getElementById("length").value;
    console.log("Selected password length is ", passwordLength);
  
    if (passwordLength < 8 || passwordLength > 128 || passwordLength == "") {
    alert("Please enter a number between 8 and 128.");
  }

  // recording which checkboxes are checked
    if (checkbox.upper.checked === true || checkbox.lower.checked === true ||
    checkbox.number.checked === true || checkbox.symbol.checked === true) {
    console.log("Include uppercase characters ", upper.checked)
    console.log("Include lowercase characters ", lower.checked)
    console.log("Include numbers ", number.checked)
    console.log("Include symbols ", symbol.checked)

  } else {
    alert("Please select one or more character types");
  }

  
  if (checkbox.upper.checked === true) {
    possible += characters.charUpper
    console.log("Use ", characters.charUpper)
  }
  
  if (checkbox.lower.checked === true) {
    possible += characters.charLower
    console.log("Use ", characters.charLower)
  }

  if (checkbox.number.checked === true) {
    possible += characters.charNumber
    console.log("Use ", characters.charNumber)
  }

  if (checkbox.symbol.checked === true) {
    possible += characters.charSymbol
    console.log("Use ", characters.charSymbol)
  }


  for (var i = 0; i < passwordLength; i++) {
  text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
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
