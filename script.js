
//Assignment Code and event listener.

document.querySelector("#generate").addEventListener("click", writePassword);

// Arrays
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperLetters= ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialChar = ["!", "@", "#", "$", "%", "&", "*", "+", "-", ".", ",", "/", "<", ">", "?","~", "{", "}", "[", "]"];

// Variable Declaration 

var chooseLength = "";
var chooseUpperCase;
var chooseLowerCase;
var chooseNumbers;
var chooseSpecialCharacter;


// Prompt to confirm how many characters the user would like in their password

function generatePassword() {
  var chooseLength = (prompt("Please choose a number between 8 and 128 for the lenght of your password"));

  // Loop if answer is outside the parameters 

  while(chooseLength <= 7 || chooseLength >= 129 ) {
      alert("You must choose a number between 8 and 128 to determine the length of your password");
      var chooseLength = (prompt("Please choose a number between 8 and 128 for the lenght of your password"));
      } 

    
    // Password parameters 


    var chooseLowerCase = confirm("Would you like lower case letters in your password? Click OK to confirm");
    var chooseUpperCase = confirm("Would you like upper case letters in your password? Click OK to confirm");
    var chooseNumbers = confirm("Would you like numbers in your password? Click OK to confirm");  
    var chooseSpecialCharacter = confirm("Would you like special characters in your password? Click OK to confirm");

      // Loop if user selects cancel on all 4 parameters

      while(chooseUpperCase  === false && chooseLowerCase === false && chooseNumbers === false && chooseSpecialCharacter === false) {
        alert("You must choose at least one parameter");
        var chooseLowerCase = confirm("Would you like lower case letters in your password? Click OK to confirm");
        var chooseUpperCase = confirm("Would you like upper case letters in your password? Click OK to confirm");
        var chooseNumbers = confirm("Would you like numbers in your password? Click OK to confirm");  
        var chooseSpecialCharacter = confirm("Would you like special characters in your password? Click OK to confirm"); 
    } 

      // Assign an action to the password parameters

      var passwordCharacters = []
      

    if (chooseNumbers) {
      passwordCharacters = passwordCharacters.concat(numbers)
    }
      
    if (chooseLowerCase) {
      passwordCharacters = passwordCharacters.concat(lowerLetters)
    }

    if (chooseUpperCase) {
      passwordCharacters = passwordCharacters.concat(upperLetters)
    }

    if (chooseSpecialCharacter) {
      passwordCharacters = passwordCharacters.concat(specialChar)
    }

      console.log(passwordCharacters)

      // For loop to fill empty string from values from the arrays to use for the random generated password.

      var randomPassword = ""
      
      for (var i = 0; i < chooseLength; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        console.log(randomPassword)
      }
      return randomPassword;
}

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
