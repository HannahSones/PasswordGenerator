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



// I need the results of this to depend on which boxes were ticked
function generatePassword() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";


  // text variable is going to equal (whichever box is checked, xpasswordLength, randomised)
  var passwordLength = document.getElementById("length").value;
    console.log("Selected password length is ", passwordLength);
  
    if (passwordLength == "") {
    alert("Please enter a number between 8 and 128.");
  }

  // Don't need === true because it already evaluates to true or false
if (checkbox.upper.checked === true || checkbox.lower.checked === true ||
    checkbox.number.checked === true || checkbox.symbol.checked === true) {
     
  } else {
    alert("Please select one or more character types");
  }


  for (var i = 0; i < passwordLength; i++)
  text += possible.charAt(Math.floor(Math.random() * passwordLength));

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
