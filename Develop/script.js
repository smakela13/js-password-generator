// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function generatePassword(chosenLength, lowercase, uppercase, numbers, special) {
  var lowerLetters = "abcdefghijklmnopqrstuvwxyz"; // lower letters
  var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // upper letters
  var numberSelection = "0123456789"; // numbers
  var specialCharacters = " !\"#$ %& '()*+,-./:;<=>?@[\\]^_`{|}~"; // special characters
  var combined = "";
  if (lowercase) {
    combined += lowerLetters;
  }
  if (uppercase) {
    combined += upperLetters;
  }
  if (numbers) {
    combined += numberSelection;
  }
  if (special) {
    combined += specialCharacters;
  }
  
  console.log(combined);
  console.log(chosenLength);
  
  var generatedPassword = "";
  for (var i = 0; i < chosenLength; i++) {
    generatedPassword += combined.charAt(Math.floor(Math.random() * combined.length));
  }
  console.log(generatedPassword);
  return generatedPassword;
}

function writePassword() {
  
  var lowLength = 8;
  var upperLength = 128;
  var chosenLength = prompt("Please enter a password length between " + lowLength + " and " + upperLength + ".");

  while (chosenLength < lowLength || chosenLength > upperLength) {
    alert("Please enter a valid number.") + chosenLength;
    chosenLength = prompt("Please enter a proper password length between 8 and 128 characters:", "Enter character length here.");
  }
  

  console.log(chosenLength);

  var lowercase = confirm("Do you want lowercase letters?");

  var uppercase = confirm("Do you want uppercase letters?");

  var numbers = confirm("Do you want numbers?");

  var special = confirm("Do you want special characters?");




  console.log(chosenLength);
  console.log(lowercase);
  console.log(uppercase);
  console.log(numbers);
  console.log(special);

  var password = generatePassword(chosenLength, lowercase, uppercase, numbers, special);

  // var passwordText = document.querySelector("#password");
  //passwordText.value = password;
 

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
