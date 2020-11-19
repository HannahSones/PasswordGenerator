
// function to generate the password based on the selected criteria

function generatePassword() {
  let text = "";
  let possible = "";

  const characters = {
    charUpper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    charLower: "abcdefghijklmnopqrstuvwxyz",
    charNumber: "0123456789",
    charSymbol: "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~",
  }
  
  const checkbox = {
    upper: document.querySelector("#upper"),
    lower: document.querySelector("#lower"),
    number: document.querySelector("#number"),
    symbol: document.querySelector("#symbol"),
  }

  // ensuring password length is between 8 and 128

  const passwordLength = document.getElementById("length").value;
  
    if (passwordLength < 8 || passwordLength > 128 || passwordLength == "") {
    alert("Please enter a number between 8 and 128.");
    return "Invalid password type";
  }

  // recording which checkboxes are checked
    if (checkbox.upper.checked === true || checkbox.lower.checked === true ||
    checkbox.number.checked === true || checkbox.symbol.checked === true) {
  } else {
    alert("Please select one or more character types");
  }

  
  if (checkbox.upper.checked === true) {
    possible += characters.charUpper
  }
  
  if (checkbox.lower.checked === true) {
    possible += characters.charLower
  }

  if (checkbox.number.checked === true) {
    possible += characters.charNumber
  }

  if (checkbox.symbol.checked === true) {
    possible += characters.charSymbol
  }


  for (let i = 0; i < passwordLength; i++) {
  text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
  }


  
// Assignment Code
const generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
