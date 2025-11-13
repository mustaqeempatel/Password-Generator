const passwordBox = document.getElementById("password");
const lengthSlider = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");

const uppercase = document.getElementById("uppercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");

const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+-=[]{}|;:',.<>?/";

lengthSlider.addEventListener("input", () => {
  lengthValue.textContent = lengthSlider.value;
});

function generatePassword() {
  let chars = lowerChars;
  if (uppercase.checked) chars += upperChars;
  if (numbers.checked) chars += numberChars;
  if (symbols.checked) chars += symbolChars;

  let password = "";
  for (let i = 0; i < lengthSlider.value; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  passwordBox.value = password;
}
