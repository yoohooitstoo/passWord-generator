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

var lowerCase = [a-z];
var numbers = [0-9];
var upperCase = [A-Z];
var symbols = []

/*var newPass = "";
for ( i = 0; i < 8; i++ ){
  newPass += charset.charAt(Math.floor(Math.random() * charset.length))
}

console.log(newPass);*/

/* An idea of how to simply the code above

var randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbols: getRandomSymbol,
}

  function randomFunc() {
  return Math.floor(Math.random() * 8);
}
// Generator functions - 
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = "!@#$%^&*=<>/";
  return symbols[Math.floor(Math.random() * symbols.length)] 

}
*/
