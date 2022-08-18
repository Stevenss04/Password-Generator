// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var generatePassword = function() {
  // These arrays contain the different types of characters except for the array variable which is for storing the other arrays
  var special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
  var numeric = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var array = [];

  // Sets the min and max number of characters
  var characters = window.prompt("How many characters would you like your password to contain?");

  if(characters < 8) {
    alert("Please select 8 or more characters")
    return;
  } else if(characters > 128) {
    alert("Please select 128 characters or less")
    return;
  }

  // Gives the prompts for which type of characters should be included
  var specialCharacters = confirm("Click ok to confirm special characters");
  var numericCharacters = confirm("Click ok to confirm numeric characters");
  var lowercaseCharacters = confirm("Click ok to confirm lowercase characters");
  var uppercaseCharacters = confirm("Click ok to confirm uppercase characters");

  // If the user chooses to have a prompt then that prompts characters are added into the array array
  if(specialCharacters) {
    array = array.concat(special);
  }
  if(numericCharacters) {
    array = array.concat(numeric);
  }
  if(lowercaseCharacters) {
    array = array.concat(lowercase);
  }
  if(uppercaseCharacters) {
    array = array.concat(uppercase);
  }

  // This randomly generates the password
  var passwordString = "";

  for (var i = 0; i < characters; i++) {
    passwordString += array[Math.floor(Math.random() * (array.length))];
  }

  return passwordString;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);