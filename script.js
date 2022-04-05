var generateBtn = document.querySelector("#generate");

var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;
var choices;


var toUpper = function (x) {
    return x.toUpperCase();
};

var character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"]
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var space = [];
var upper = letters.map(toUpper);


function writePassword() {
    enter = parseInt(window.prompt("How many characters would you like your password? Choose between 8 and 128"));
    if (!enter) {
      alert("This needs a value");
  } else if (enter < 8 || enter > 128) {
    enter = parseInt(prompt("You must choose between 8 and 128"));
} 
else {
  confirmNumber = window.confirm("Will this password contain numbers?");
  confirmCharacter = window.confirm("Will this password special characters?");
  confirmUppercase = window.confirm("Will this password Uppercase letters?");
  confirmLowercase = window.confirm("Will this password Lowercase letters?");
}
if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
  choices = alert("You must choose a criteria!");
}
else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {

  choices = character.concat(numbers, letters, upper);
}
else if (confirmCharacter && confirmNumber && confirmUppercase) {
  choices = character.concat(number, upper);
}
else if (confirmCharacter && confirmNumber && confirmLowercase) {
  choices = character.concat(numbers, letters);
}
else if (confirmCharacter && confirmLowercase && confirmUppercase) {
  choices = character.concat(letters, upper);
}
else if (confirmNumber && confirmLowercase && confirmUppercase) {
  choices = number.concat(letters, upper);
}
else if (confirmCharacter && confirmNumber) {
  choices = character.concat(numbers);

} else if (confirmCharacter && confirmLowercase) {
  choices = character.concat(letters);

} else if (confirmCharacter && confirmUppercase) {
  choices = character.concat(upper);
}
else if (confirmLowercase && confirmNumber) {
  choices = letters.concat(numbers);

} else if (confirmLowercase && confirmUppercase) {
  choices = letters.concat(upper);

} else if (confirmNumber && confirmUppercase) {
  choices = numbers.concat(upper);
}
else if (confirmCharacter) {
  choices = character;
}
else if (confirmNumber) {
  choices = numbers;
}
else if (confirmLowercase) {
  choices = letters;
}
else if (confirmUppercase) {
  choices = space.concat(upper);
};
var password = [];

for (var i = 0; i < enter; i++) {
  var pickChoices = choices[Math.floor(Math.random() * choices.length)];
  password.push(pickChoices);
}

var ps = password.join("");
    UserInput(ps);
    return ps;
}
function UserInput(ps) {
  document.getElementById("password").textContent = ps;
}



generateBtn.addEventListener("click", writePassword);
ps = generatePassword();
    document.getElementById("password").placeholder = ps;
