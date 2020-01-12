// Assignment Code
var generateBtn = document.querySelector("#generate");
var allChoices = "";
var howlong = prompt("How long do you want the password?");
console.log(howlong);

var wantupper = confirm("Do you want Uppercase letters?");
console.log(wantupper);
if (wantupper === true){
  allChoices += "ABCDEFGHIJKLMNOPQRSTUWXYZ";
}

var wantlower = confirm("Do you want lowercase letters?");
console.log(wantlower);
if (wantlower === true){
  allChoices += "abcdefghijklmnopqrstuvwxyz";
}

var wantnum = confirm("Do you want numbers?");
console.log(wantnum);
if (wantnum === true){
  allChoices += "0123456789";
}

var wantcharacter = confirm("Do you want special characters?");
console.log(wantcharacter);
if (wantcharacter === true){
  allChoices += "!@#$%^&*()";
}

// Write password to the #password input
function writePassword() {
  console.log("You got clicked");
  // var allChoices = "abcdefghijklmnopqrstuvwxyz";

  var password = ""; //This will collect info from the for loop

  for (i = 0; i < parseInt(howlong); i++){
    console.log("looping");
    var randomnum = Math.floor(Math.random() * allChoices.length);
    password += allChoices[randomnum];
  }
   console.log(password);
   var textarea = document.querySelector("#password");
   textarea.value = password;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER
