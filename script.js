// Assignment Code
var generateBtn = document.querySelector("#generate");
var allChoices = "";

//This will prompt the user and ask how long do they want their password.
var howlong = prompt("How long do you want the password?");
console.log(howlong);

//This will confirm if the user wants uppercase letters
var wantupper = confirm("Do you want Uppercase letters?");
console.log(wantupper);
if (wantupper === true){
  allChoices += "ABCDEFGHIJKLMNOPQRSTUWXYZ";
}

//this will confirm if the user wants lower case letters
var wantlower = confirm("Do you want lowercase letters?");
console.log(wantlower);
if (wantlower === true){
  allChoices += "abcdefghijklmnopqrstuvwxyz";
}

//this will confirm if the user wants numbers
var wantnum = confirm("Do you want numbers?");
console.log(wantnum);
if (wantnum === true){
  allChoices += "0123456789";
}

//this will confirm if the user wants special characters 
var wantcharacter = confirm("Do you want special characters?");
console.log(wantcharacter);
if (wantcharacter === true){
  allChoices += "!@#$%^&*()";
}

// this function will write password to the #password input
function writePassword() {
  //this will show in the console log when the generate password button is clicked
  console.log("You got clicked");

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

