const passwordField = document.getElementById("password");
const copyButton = document.getElementById("copy");
const generateButton = document.getElementById("generate");
const lengthSlider = document.getElementById("length");
const lengthValue = document.getElementById("length-value");
const uppercaseCheckbox = document.getElementById("uppercase");
const lowercaseCheckbox = document.getElementById("lowercase");
const numbersCheckbox = document.getElementById("numbers");
const symbolsCheckbox = document.getElementById("symbols");

const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+{}[]<>?/|";

// Actualizar valor de longitud
lengthSlider.addEventListener("input", () => {
    lengthValue.textContent = lengthSlider.value;
});

// Función para generar contraseña
function generatePassword() {
    let chars = "";
    let password = "";
    if (uppercaseCheckbox.checked) chars += uppercaseChars;
    if (lowercaseCheckbox.checked) chars += lowercaseChars;
    if (numbersCheckbox.checked) chars += numberChars;
    if (symbolsCheckbox.checked) chars += symbolChars;

    if (chars.length === 0) {
        alert("Selecciona al menos un tipo de carácter.");
        return;
    }

    for (let i = 0; i < lengthSlider.value; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }
    passwordField.value = password;
}

// Copiar contraseña al portapapeles
copyButton.addEventListener("click", () => {
    passwordField.select();
    document.execCommand("copy");
    alert("Contraseña copiada al portapapeles");
});

// Evento para generar contraseña
generateButton.addEventListener("click", generatePassword);

// Generar una contraseña por defecto al cargar la página
generatePassword();
