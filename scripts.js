document.addEventListener("DOMContentLoaded", function () {
    const passwordField = document.getElementById("password");
    const copyButton = document.getElementById("copy");
    const generateButton = document.getElementById("generate");
    const lengthSlider = document.getElementById("length");
    const lengthValue = document.getElementById("length-value");
    const uppercaseCheckbox = document.getElementById("uppercase");
    const lowercaseCheckbox = document.getElementById("lowercase");
    const numbersCheckbox = document.getElementById("numbers");
    const symbolsCheckbox = document.getElementById("symbols");

    const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";

    function generatePassword() {
        let characters = "";
        if (uppercaseCheckbox.checked) characters += uppercaseLetters;
        if (lowercaseCheckbox.checked) characters += lowercaseLetters;
        if (numbersCheckbox.checked) characters += numbers;
        if (symbolsCheckbox.checked) characters += symbols;

        let password = "";
        for (let i = 0; i < lengthSlider.value; i++) {
            password += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        passwordField.value = password;
    }

    generateButton.addEventListener("click", generatePassword);

    copyButton.addEventListener("click", function () {
        passwordField.select();
        document.execCommand("copy");
        alert("Contraseña copiada al portapapeles");
    });

    lengthSlider.addEventListener("input", function () {
        lengthValue.textContent = lengthSlider.value;
    });

    generatePassword();
});
