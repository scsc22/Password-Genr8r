
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Generate a random password based on user-selected criteria
function generatePassword() {
  var length = promptPasswordLength();
  var characterTypes = promptCharacterTypes();
  var password = "";

  if (characterTypes.length === 0) {
    alert("You must select at least one character type.");
    return "";
  }

  for (var i = 0; i < length; i++) {
    var randomCharType = characterTypes[Math.floor(Math.random() * characterTypes.length)];
    password += getRandomCharacter(randomCharType);
  }

  return password;
}

// Prompt for password length and validate input
function promptPasswordLength() {
  var length = 0;
  while (length < 8 || length > 128) {
    length = parseInt(prompt("Enter the length of the password (between 8 and 128 characters):"));
    if (isNaN(length)) {
      alert("Please enter a valid number.");
      length = 0;
    } else if (length < 8 || length > 128) {
      alert("Password length must be between 8 and 128 characters.");
    }
  }
  return length;
}

// Prompt for character types and validate input
function promptCharacterTypes() {
  var characterTypes = [];
  var lowercase = confirm("Include lowercase characters?");
  var uppercase = confirm("Include uppercase characters?");
  var numeric = confirm("Include numeric characters?");
  var special = confirm("Include special characters?");

  if (lowercase) characterTypes.push("lowercase");
  if (uppercase) characterTypes.push("uppercase");
  if (numeric) characterTypes.push("numeric");
  if (special) characterTypes.push("special");

  return characterTypes;
}

// Generate a random character based on the given character type
function getRandomCharacter(characterType) {
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numeric = "0123456789";
  var special = "!@#$%^&*()_-+=<>?";

  switch (characterType) {
    case "lowercase":
      return lowercase.charAt(Math.floor(Math.random() * lowercase.length));
    case "uppercase":
      return uppercase.charAt(Math.floor(Math.random() * uppercase.length));
    case "numeric":
      return numeric.charAt(Math.floor(Math.random() * numeric.length));
    case "special":
      return special.charAt(Math.floor(Math.random() * special.length));
    default:
      return "";
  }
}
