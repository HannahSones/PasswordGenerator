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


// I need the results of this function to depend on which checkboxes are selected
function generatePassword() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

  var passwordLength = document.getElementById("length").value;
    console.log("Selected password length is ", passwordLength);
  
    // still giving a value despite prompt saying its an incorrect length
    if (passwordLength < 8 || passwordLength > 128 || passwordLength == "") {
    alert("Please enter a number between 8 and 128.");
  }

  // Don't need === true because it already evaluates to true or false
    if (checkbox.upper.checked === true || checkbox.lower.checked === true ||
    checkbox.number.checked === true || checkbox.symbol.checked === true) {
    console.log("Include uppercase characters ", upper.checked)
    console.log("Include lowercase characters ", lower.checked)
    console.log("Include numbers ", number.checked)
    console.log("Include symbols ", symbol.checked)

      // Add code in here to assign it to a checkbox
     
  } else {
    alert("Please select one or more character types");
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
